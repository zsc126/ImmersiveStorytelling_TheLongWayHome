@echo off
rem The Long Way Home: serves the site folder at http://localhost:8080 and opens it (close this window to stop)
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\serve.ps1"
if errorlevel 1 pause
