# The Long Way Home — V3

Immersive Storytelling · Parsons School of Design (reference build).

A first-person experience: one day in the life of a child worker in India, about 7 minutes.
Space 1 the sweatshop → Space 2 the lane and the market → Space 3 ★ the nightmare chase → home.

Two editions, chosen in the bottom-left corner of the title screen (Normal by default):
- **Normal** — the V1 story, refined.
- **Extra** — the last stage has extra content: the looping lane, the hide, the street rising into the light, the void with food out of reach, waking at home at night, eating, lying down, and the morning that will be the same.
Runs in a desktop browser (mouse + keyboard) and in a VR headset browser (WebXR).

## Play it

- **Online:** the published link (claude.ai artifact) runs the desktop version.
- **On this computer:** double-click **`Start The Long Way Home.bat`**. It serves the `site` folder at
  `http://localhost:8080` and opens it in your browser (close the black window to stop). Any other local
  web server works too, e.g. `python -m http.server 8080` inside `site`.

## Play it in VR

There is no app to install: the headset opens the game as a web page and **Enter VR** (on the title, under
Scenes; it only appears where VR is available) takes it into the headset. It needs **controllers** (not hand tracking). WebXR only works over
`https://` or on `localhost`, so there are two ways in:

1. **Standalone headset (Meta Quest 2/3/Pro, Pico):** put the `site` folder online over https (GitHub Pages
   — see below — or Netlify Drop: drag the `site` folder onto app.netlify.com/drop). Open the link in the
   headset's own browser → **Enter VR**.
2. **Headset tethered to a Windows PC (Quest Link / Air Link, SteamVR, Windows Mixed Reality):** start the
   headset's PC link first, then double-click `Start The Long Way Home.bat`, open the page in **Chrome or Edge**
   on the PC → **Enter VR**. (A Quest on USB can also use the PC's server: `adb reverse tcp:8080 tcp:8080`, then
   `http://localhost:8080` in the Quest browser.)

The Edition picker applies to VR too. In VR the story starts from Scene 1.

## Put it on GitHub (and GitHub Pages for VR)

The folder is ready to be a repository as it is: `.gitignore` leaves out `node_modules/` and `backups/`,
all paths in `site/` are relative, and `site/.nojekyll` stops Pages from touching the files.

1. `git init`, `git add .`, `git commit -m "V3"`, then push to a new GitHub repository (branch `main`).
2. Move `docs/github-pages-workflow.yml` to `.github/workflows/pages.yml` (create the two folders), then
   Repository → Settings → Pages → Source: **GitHub Actions**. The workflow publishes the `site/` folder on every push.
3. Open the `https://<user>.github.io/<repo>/` link on desktop or in the headset browser → **Enter VR**.

`site/app.js` is already built, so nothing has to be compiled on GitHub. After changing `src/`, run
`npm install` once and `npm run build`.

## Scenes
The title menu's **Scenes** starts later in the story: 2 The Market · 3 The Run · 4 The Door (Scene 1 is Begin).

## Controls

| Desktop | Headset |
|---|---|
| Mouse: look · Left click: use · hold on the machine to sew | Point the controller (a thin ray appears on anything usable) + trigger · hold the trigger on the machine |
| Click again and again: pull free when a hand grabs the bag · Click the door: knock | Pull the trigger again and again · point at the door and pull the trigger |
| W A S D: walk · Shift: run | Left stick: walk (push it all the way to run) · Right stick: turn 30° |
| Q (hold): look inside the bag · R (hold, Extra): hug the bag and hold still to hide | Squeeze a grip (or lift the bag and look in) · squeeze a grip and hold still |
| E (hold): hold out your hands (when sitting) · E (the light): grab | Hold the trigger · pull the trigger |
| C (hold): close your eyes (at the end) | Squeeze both grips |
| F: controls list · Esc: pause (Esc again to resume) | Headset menu button: the story waits while the menu is open |
| — | Press a thumbstick: reset your height (after sitting down or standing up) |
| P: explore mode (walk through walls, 1–4 jump to a space) | — |

In a headset, hints are worded for the controllers, the controllers give a small tap when you use something,
and the edge of sight darkens a little while the stick moves you (comfort). At the end the statistics appear in
the dark in front of you; pull the trigger to leave VR (the end card stays on the page).

Add `?debug` to the address for the story phase and frame rate; N skips a beat.

## Folders

- `site/` — the playable build (`index.html`, `app.js`, `style.css`, `audio/`).
- `src/` — source modules. Rebuild with `npm install` once, then `npm run build` (three@0.169.0 + esbuild).
  - `main.js` the journey: spaces, light, air, flow · `sweatshop.js` `street.js` `nightmare.js` `void.js` `home.js` the spaces (`void.js` only in Extra) · `lanes.js` the Normal edition's five lanes
  - `people.js` every person and the first-person hands · `fp.js` hands and the bag · `kit.js` shared builders
  - `city.js` streets, stalls, painted textures · `tex.js` factory textures · `lights.js` shared light pool
  - `xr.js` VR · `audio.js` sound (recordings in `site/audio`, placeholders generated)
- `dev/` — test pages for people and hands; `vr-test.mjs` plays the story in an emulated Quest 3 (see `docs/vr-readiness.md`).
- `tools/serve.ps1` — the small local web server behind `Start The Long Way Home.bat`.
- `DEVLOG.md` — what changed. `PLAN.md` — the plan.
