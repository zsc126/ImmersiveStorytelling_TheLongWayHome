# The Long Way Home: a small local web server for the site folder (no install needed).
# Started by "Start The Long Way Home.bat". Serves http://localhost:8080 and opens it in the browser.
# WebXR (Enter VR) is allowed on localhost, so a PC headset (Quest Link / Air Link, SteamVR) works from here.
param([int]$Port = 8080)
$ErrorActionPreference = 'Stop'
$root = (Resolve-Path (Join-Path $PSScriptRoot '..\site')).Path.TrimEnd('\') + '\'
$types = @{
  '.html' = 'text/html; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'; '.css' = 'text/css; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'; '.mp3' = 'audio/mpeg'; '.png' = 'image/png'; '.jpg' = 'image/jpeg'
  '.svg' = 'image/svg+xml'; '.md' = 'text/plain; charset=utf-8'; '.ico' = 'image/x-icon'
}
$listener = $null
foreach ($p in @($Port, ($Port + 1), ($Port + 2), ($Port + 3))) {
  $l = New-Object System.Net.HttpListener
  $l.Prefixes.Add("http://localhost:$p/")
  try { $l.Start(); $listener = $l; $Port = $p; break } catch { $l.Close() }
}
if (-not $listener) { Write-Host "Ports $Port-$($Port + 3) are busy. Close the other server and try again."; exit 1 }
$url = "http://localhost:$Port/"
Write-Host ""
Write-Host "  The Long Way Home is running at $url"
Write-Host "  VR on this PC: start Quest Link / Air Link / SteamVR, open the page in Chrome or Edge, press Enter VR."
Write-Host "  Close this window to stop."
Write-Host ""
try { Start-Process $url } catch { Write-Host "  Open $url in Chrome or Edge." }
while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $res = $ctx.Response
  try {
    $rel = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/').Replace('/', '\')
    if ($rel -eq '' -or $rel.EndsWith('\')) { $rel = $rel + 'index.html' }
    $file = [IO.Path]::GetFullPath((Join-Path $root $rel))
    if (-not $file.StartsWith($root, [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $file -PathType Leaf)) {
      $res.StatusCode = 404
    } else {
      $ext = [IO.Path]::GetExtension($file).ToLower()
      if ($types.ContainsKey($ext)) { $res.ContentType = $types[$ext] } else { $res.ContentType = 'application/octet-stream' }
      $res.AddHeader('Cache-Control', 'no-cache')
      $bytes = [IO.File]::ReadAllBytes($file)
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    }
  } catch {
    try { $res.StatusCode = 500 } catch { }
  } finally {
    try { $res.Close() } catch { }
  }
}
