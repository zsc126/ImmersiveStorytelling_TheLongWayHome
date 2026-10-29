# The Long Way Home V3: VR readiness (updated 2026-10-28, v3.2 VR)

## How the headset version starts
- There is nothing to install. The headset opens the game as a web page; **Enter VR** on the title takes it into
  the headset. The button only appears in browsers that support WebXR (Quest Browser, Pico Browser, Chrome or
  Edge on a PC with Quest Link / Air Link / SteamVR / Windows Mixed Reality).
- The page must come over **https** (GitHub Pages, Netlify Drop) or from **localhost** (`Start The Long Way Home.bat`
  on the PC the headset is linked to). The claude.ai link is desktop-only.
- **Controllers** are needed (hand tracking is not supported: walking needs a stick).
- The Edition picker applies to VR. In VR the story always starts from Scene 1.
- Enter VR asks the browser for the headset straight from the click, then loads the sound in the dark and fades in.

## Rendering
- The scene is drawn directly in the headset with no screen-space post effects (bloom and grain are desktop-only);
  the lighting carries the look. Headsets play at Medium quality.
- The page's overlays are mirrored inside the headset by a small "veil" around the eyes: the black and the warm
  white fades, and the eyelids (blink, waking, closing your eyes). The red fear edges of the steal stay desktop-only
  (the heartbeat carries it in VR), as does the field-of-view squeeze.

## Comfort
- Smooth movement on the left stick (push it fully to run); the edge of sight darkens a little while the stick
  moves you. The right stick snap-turns 30°.
- The camera is never moved by force: no falls, no drops. The loop in the Extra edition jumps you back behind a
  blink, which is now seen in the headset. The city collapse moves the world while you stay still.
- When the story places you (the seat, the stall, after being caught…), you land on the spot facing the right way
  wherever you stand in your room. Walls are tested where your head is; the stick never carries you into a wall
  and nothing ever pushes you.
- The headset's system menu holds the story and the sound until you come back.

## Height
- The floor is set so your eyes are at the child's height (seated at the machine, standing, sitting to beg); it is
  set again whenever the child sits or stands. **Press a thumbstick** to set it again yourself (after sitting down
  or standing up in your room).

## Every interaction and its headset equivalent
| Moment | Desktop | Headset | Status |
|---|---|---|---|
| Take fabric, sew (hold), take bag, wages, open door | click / hold on the target | point the controller (a ray shows on anything usable, with its name on the board) + trigger / hold the trigger | tested |
| Look inside the bag | hold Q | squeeze a grip (or lift the bag in your hand and look in) | tested |
| Beg (Market) | hold E | hold the trigger | tested |
| Steal the food | click | ray + trigger | ok |
| Normal lanes: pull free from the hand | click again and again | trigger again and again | ok |
| Normal lanes: knock on your door | click the door | ray at the door + trigger | ok |
| Extra: hide the light | hold R | squeeze a grip (hug the bag), or hold the bag to your chest | ok |
| Extra, the light: grab the food | E | trigger | ok |
| Home: put the food down, lie down | click | ray + trigger | ok |
| Close your eyes | hold C | squeeze both grips | tested |
| Pause | Esc | headset menu button (the story waits) | tested |
| Reset height | — | press a thumbstick | tested |
| Explore mode (P) | P, 1–4 | disabled in a headset | by design |

Every use gives a small tap on the controller. Hints are worded for the controllers in a headset.

## Words
- Thoughts, spoken lines (with the speaker's name), hints, the name of what your ray points at, the sewing
  progress and the chase's breath appear on a board below your view. Long lines wrap.
- At the end the statistics appear one by one in the dark in front of you (the same words as the page, the
  numbers in red). Then *Pull the trigger to leave VR*; the end card stays on the page with Play again.

## Body, hands, shadow
- In a headset the hands are your controllers (no stretched forearms); the bag hangs from your right hand.
- Your shadow is a full child body. It follows your head and faces where you face.

## Performance budget (mid-range standalone headset, e.g. Quest 2/3)
- About 160–260 draw calls in the workshop, fewer elsewhere. Six shared real lights (a fixed pool, so shaders
  never recompile mid-play). One shadow-casting sun, its map scaled by quality. Code bundle about 810 KB; sound
  loads on demand. Every space's shaders are compiled before you reach it.

## How it was checked without a headset
`dev/vr-test.mjs` runs the game in Chromium with **IWER** (Meta's WebXR emulator, an emulated Meta Quest 3 with
Touch controllers) and plays it through the real input path: a mouse click on Enter VR, controller rays and the
trigger, the sticks, the grips, a thumbstick press, the headset menu. It starts standing 0.6 m off the centre of
the room and turned away, so the placing is tested too. The rest of the story is skipped beat by beat inside VR,
through the end card and out of VR. `dev/vr-quit-test.mjs` takes the headset off mid-story twice, enters again,
and then plays on desktop.

    npm install                            # three, esbuild, playwright, iwer
    npx playwright install chromium
    npm run build
    npx http-server site -p 8765 -c-1      # in another window
    npm run test:vr

## Still to check on a real headset
- Comfort with smooth movement during the chase (the vignette helps; it can be made stronger in `src/xr.js`, `_veil`).
- Text size on the caption board.
- Frame rate in the market crowd (15 walkers) on Quest 2. If needed, drop to 10 walkers on Low.
