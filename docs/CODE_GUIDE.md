# Working on the game

Start with `README.md` for running the game. This guide explains where changes belong and the
contracts that connect the scenes, desktop UI, and VR presentation.

## Active source and generated output

`src/main.js` is the application entry point. It creates the shared Three.js world, builds scenes,
transitions between them, and runs the frame loop.

- `src/scenes/` contains the factory, market, chase, home, and Extra-edition void. `lanes.js` supplies
  the Normal edition's scripted chase encounters.
- `src/systems/` handles player movement, interactions, pursuit, audio, and the WebXR rig.
- `src/rendering/` owns lighting, atmosphere, the procedural sky, and desktop post-processing.
- `src/characters/` builds people and controls the first-person hands and bag.
- `src/world/` provides shared geometry builders, textures, and city construction helpers.
- `src/ui/interface.js` owns DOM captions, progress, fades, and menu visibility. Scenes use this
  interface instead of manipulating the caption layout themselves.
- `src/config/settings.js` loads and saves browser preferences, with defaults when storage is blocked.

`site/index.html` is the current page. `site/app.js` is generated from `src/main.js`; edit the sources
and rebuild instead of editing that bundle. Both `npm run dev` and `npm run build` use
`tools/build-options.mjs`, so their bundles use the same configuration. `build.sh` remains a wrapper
for older launch instructions.

The old `site/js/`, `site/css/`, and `site/play.html` files are retained reference sources, not the
entry point for the current build. `site-public/` is an older exported build. These original paths
also appear in the historical authorship records. Use `site/` and `src/` for current development.

## Where to edit styles

`site/style.css` imports the focused stylesheets in order. That order preserves the existing cascade.

- `site/styles/base.css`: fonts, theme colors, shared typography, canvas, and full-screen overlays.
- `site/styles/panels.css`: dialogs, settings controls, and scene selection.
- `site/styles/menu.css`: the title, shared edge margins, edition picker, loading screen, and title thread.
- `site/styles/hud.css`: captions, hints, interaction feedback, and thread-shaped progress indicators.
- `site/styles/ending.css`: statistics, credits, and ending text wrapping.

On the title screen, `--menu-inset` keeps the menu options, edition picker, and title aligned. The
loading and menu SVGs share their curve with the VR progress renderer. The `--progress` custom
property is a fraction from zero to one; the SVG's normalized path length turns it into a stroke
reveal. Keep the curve definitions in `site/index.html` in sync when changing its shape.

## Scene lifecycle and state

Each scene builder receives the shared `ctx` object and returns a scene object. Its root stays in the
world; `start`, `stop`, and `reset` manage story state, audio, and interactions rather than rebuilding
geometry. `update(dt, elapsed, active)` animates the world and advances the story only when active.
Inactive neighboring scenes may remain visible during a transition.

`S` is a scene's local story state. `setPhase` changes the current beat and resets its local timer;
`reset` restores the flags and objects needed for replay. `onEnd` requests the next scene through
`main.js`. The `atmosphere` result describes target lighting and fog, which the main loop blends
rather than applying abruptly. Colliders are refreshed after doors or routes change.

The scene picker completes the prerequisite state before moving the player: bag, coins, stolen food,
and edition-specific route flags. Keep that logic aligned with the normal story transitions.

## Desktop and headset presentation

Desktop renders through the post-processing pipeline. VR renders the scene directly for each eye.
Atmosphere needed in the headset therefore belongs in world materials, lights, or geometry rather
than only a screen-space pass. The shared light pool limits the number of actual point lights and
fades assignments as the player moves, avoiding shader recompilation at each lamp.

The UI exposes progress and stamina as state. The WebXR rig mirrors those values and the visible DOM
captions onto a canvas texture. Thought text remains unboxed; spoken lines retain their speaker.
When changing caption semantics, update both `src/ui/interface.js` and `src/systems/xr.js`.

## Formatting and checks

Format source files with the Prettier extension in VS Code using **Format Document**.
Formatting is managed by the editor; the project has no Prettier dependency, configuration files,
or npm formatting scripts. Keep generated bundles, vendor code, and historical exports untouched
when formatting source files.

Install the test browser once with `npx playwright install chromium`, then run:

- `npm test`: caption layout, progress, home alignment, chase lights, and both-edition scene rendering.
- `npm run test:ui`: only the UI and targeted scene checks.
- `npm run test:atmosphere`: only scene rendering and font checks.
- `npm run test:vr`: both editions in an emulated Quest, followed by entering and leaving VR.

The runner builds and serves an isolated local copy, supplies its URL to the tests, and stops the
server afterward. Screenshots go to the system temporary directory under `tlwh-tests/`.
`TLWH_CHROMIUM_PATH` can select an existing test browser; `TLWH_TEST_URL` lets an individual script
use an already running server. Otherwise individual scripts default to `http://localhost:8765`.

Emulation checks story flow and rendering faults. A physical headset is still required to evaluate
comfort, text readability, and frame rate on the target device.
