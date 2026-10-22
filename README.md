# The Long Way Home

Created by **Sicheng Zheng** · © 2026 Sicheng Zheng. All rights reserved.

Team 1 · Immersive Storytelling · Parsons School of Design · Fall 2026
A first-person experience: one day in the life of a child worker in India. Runs in a web browser on desktop (mouse + WASD) and in a VR headset browser (WebXR).

## Run it on your computer (Windows)

1. Double-click **Start The Long Way Home.bat**.
2. A black window opens and your browser opens the game at `http://localhost:8080`.
3. Keep the black window open while you play. Close it to stop.

The page can't be opened by double-clicking `index.html`: browsers block 3D/audio files loaded that way, so it needs the small local server above.

Mac / other: in a terminal, run `python3 -m http.server 8080` inside the `site` folder, then open `http://localhost:8080`.

## Controls

| Desktop | Headset |
|---|---|
| Mouse: look · Click: take / interact | Point + trigger or grip |
| Hold click on the machine: sew | Hold trigger / grip on the machine |
| W A S D: walk (after you stand up) | Left stick: walk · Right stick: turn |
| Hold Shift: run | (VR: comes later) |
| Hold E: hold out your hands (begging) | Hold trigger on the carton |
| Hold Q: look inside the bag | Raise the bag hand to your chest |
| Hold C: close your eyes (ending) | Point at the mat + trigger |
| Esc: pause | — |

**Explore mode:** press **P** in the game to fly around freely (1–4 jump between spaces, Space/Z up/down, Shift fast, M nightmare look, P again to go back).

Test mode: add `?debug` to the address (`http://localhost:8080/?debug`). It shows the current story phase, and pressing **N** skips to the next step.

## Put it online (public link)

See **GITHUB-PAGES.md** for a step-by-step guide (about 5 minutes, free).

## Use it in a VR headset

A headset (e.g. Meta Quest) opens the same page in its own browser, no cable or PC needed. The headset needs an `https://` link, so `localhost` on your laptop won't work there. To get a public link, put the `site` folder online (GitHub Pages, or drag the `site` folder onto app.netlify.com/drop). Then open that link in the headset browser and press **Enter VR**.

## Folders

- `site/` is the editable source (readable code). Keep it private.
- `site-public/` is the protected version for sharing: compressed code with a copyright banner. **Upload this one.**
- `AUTHORSHIP.md` is the record of authorship: the credit, the timeline, and file fingerprints.
  - `js/spaces/sweatshop.js`: Space 1 (layout, story steps, sounds)
  - `js/spaces/street.js`: Space 2 (only the lane entrance so far)
  - `js/kit.js`: shared builders (people, the bag, props)
  - `js/textures.js`: painted textures (walls, fabric, schoolyard, notebook page)
  - `js/audio.js`: sound placeholders
  - `audio/`: real recordings go here (see `audio/README.md`)
- `tools/` holds the local server script.
- `backups/` holds a zipped copy of each version.
- `DEVLOG.md` lists what changed in each version.
- `WORLD.md` is the map of how the spaces connect.
