# Dev log

## v0.4.5 — 2026-10-21 · authorship & protection
- **Credit:** "Created by Sicheng Zheng · © 2026" on the title screen, and the author plus the copyright line on the end screen.
- **Hidden marks:** author and copyright metadata in the page, a copyright banner in every source file, a console signature, and a maker's mark scratched into the child's sewing table.
- **`site-public/`:** a protected build (one minified bundle with a copyright banner). The online version now uses it, so the readable source code is no longer online.
- **`AUTHORSHIP.md`:** the authorship statement, a timeline, and SHA-256 fingerprints of every file.

## v0.4.4 — 2026-10-21
- **"Press F to see all controls" badge:** it stays in the bottom-right during play, slowly and softly pulsing. It disappears once you have opened the controls list with F and closed it again. It replaces the one-time hint.

## v0.4.3 — 2026-10-21
- **Quieter sweatshop:** the background is about half as loud (other machines, workers talking, room tone, fan, the children outside, the street behind the door), and your own machine is a little quieter. The default volume is now comfortable without touching Settings.

## v0.4.2 — 2026-10-21
- **Awnings and tin roofs:** they no longer look pitch black from below (a little self-light, smaller and higher).
- **Lane by the factory:** the black circles on the ground (puddles that reflected nothing) are now faint damp patches; the drain is lighter.
- **End screen:** "Team 1" removed.

## v0.4.1 — 2026-10-21
- **Title screen:** the sizes now follow the screen's proportions, so it looks the same on any display. The left menu takes about 2/5 of the screen height and is centred; the title block sits inside the bottom-right quarter.
- **Controls list:** press **F** in game to show a semi-transparent list of all keys in the top-left. Normal play is listed first, explore mode below. A hint about F appears once after you sit down.

## v0.4 — 2026-10-21
- **Explore mode (press P):** fly anywhere through walls to tour the sets. The story pauses while you explore.
  - 1–4 jump to each space.
  - Space / Z fly up and down; Shift moves faster.
  - M switches the nightmare look on and off.
  - Click the factory door to open or close it.
  - Press P again to return to where you were.
- **Bigger text everywhere:** the title menu, the child's thoughts, subtitles, control hints, the stamina bar, and the final statistics.
- **VR caption board:** in a headset, thoughts and subtitles appear on a panel in front of your eyes.
- **Nightmare chase:**
  - The police stay visible right behind you; you hear their boots, whistles and shouting ("Ruko!", "Chor!").
  - They are slower than you when you run, even out of breath (holding Shift then gives a jog), so they only catch you if you walk or stop.
  - They stumble in the narrow lanes.
  - Red fear creeps in at the screen edges when they are close.
  - Ghost sewing machines appear ahead and dissolve as you reach them, and a ghost of the supervisor waits at the end of a lane ("Same time tomorrow.").
  - Faint words from the day sit on the walls as easter eggs: 400 PCS (the daily target), Rs 6 / Rs 10, TOMORROW 7 AM, and CHOR (Hindi for "thief").
  - The last lane before home is lined with tin-sheet shacks, laundry and buckets, as in the Space 3 sketch.
- **Market:** the buildings now have real depth (roofs and parapets, floor ledges, balconies with laundry, AC units, shop shutters, signboards and awnings), and a dusk sky sits over the streets.
- **Begging:** footsteps of people walking past.
- **Ending:** the child's line from the board, "Maybe tomorrow will be better.", comes as the eyes close, then the machines return.
- **Performance:** identical materials and textures are shared. Fonts load without blocking the game.

## v0.3 — 2026-10-20 · the whole journey
The full story is playable from start to finish, about 6–8 minutes.

- **Space 2, Street & Market:** the lane opens into a sunlit, dusty market square with a crowd, stalls and wires overhead. Three failed attempts follow:
  1. At the food stall the coins come out of the bag (Rs 6), but a plate is Rs 10.
  2. You pick up cloth scraps from a heap, and the tailor refuses them.
  3. You sit with the other children and hold E to hold out your hands; people walk past.
  Then the vendor turns away, you steal the food, and the police whistle as you run (hold Shift).
- **Space 3 ★, Nightmare:** a chase through warping alleys. The buildings lean and breathe, eyes glow in the windows, there's lightning, and the police turn into tall dark creatures. The stolen food glows in the bag (it lights your way) and grows heavy. Running uses up breath (the red bar at the bottom). If they catch you, you go back to the last corner. Crates and carts block the way.
- **Ending, Home:** a glowing door leads into reality: a one-room home with a tin roof, an oil lamp, the mother by the clay stove and the little brother asleep. The police run past outside. You put the food on the table. Hold C to close your eyes; the sewing machines return and the ILO/UNICEF statistics appear.
- **The child's inner voice** is on-screen italic text and is never spoken. Other people's lines appear as subtitles.
- **Real sound recordings (CC0)** for the market crowd, workers' chatter, coins, the nightmare drone, whispers, thunder, chase yells, the stove fire, dripping water, wind and the wooden door. Credits are in `site/audio/CREDITS.md`.
- **Movement:** walk at 2.0 m/s, hold Shift to run at 3.6 m/s, with smooth acceleration, head bob and wall sliding. The frame rate now follows the screen.
- **Fixes:** flicker by the door (z-fighting) and the flickering desk tube light are gone, and the title text is bigger.
- **Drag-to-look fallback:** if a browser won't lock the mouse, you can drag to look around instead.
- **Online copy (private until shared):** https://claude.ai/artifact/94cfbG84661KrwLGsw2vJg

## v0.2.1 — 2026-10-20 (bug sweep)
I tested every menu and the full play-through in a real browser with automated clicks: 28 checks, all passing. Fixed:

- If you were holding the mouse button on the sewing machine when you pressed Esc, the machine kept sewing by itself after you resumed. Releasing is now forced on pause.
- Pressing Esc during the final fade could open the pause menu on top of the end card.
- Double-clicking Begin could start the game twice (doubled sounds).
- "Play again" sometimes didn't re-lock the mouse. It now asks for the lock straight away.
- Taking the headset off mid-game left the bag attached to the VR hand. It now moves back into the desktop view.

Checked and working: Settings opens above the pause menu (from the button, Esc and ×); the volume and sensitivity sliders save; Resume, Restart and Back to title; the end card's Play again (the bag goes back on its hook); begin again after quitting; walls and the closed door block you; the 20-second idle reminder.

## v0.2 — 2026-10-20
Space 1 rebuilt from the Space 1 rough-view sketch; the door now opens onto the start of Space 2.

- **Poorer room:** exposed brick with plaster falling off, damp at the bottom, brick piers, a rusty tin patch on the ceiling, sagging wires and a pipe, bare bulbs on cords, rough plywood tables, mismatched crates and plastic stools, sacks, cardboard boxes, blue drums, and two children on the floor trimming threads.
- **Window:** now a large gridded window, as in the sketch. Some panes are glass, some broken, some boarded; the panes in front of the child's eyes stay open so the school is visible.
- **Door:** moved to the right wall (bottom-right on the map sketch). The bag hooks and the supervisor's desk are beside it.
- **Space 2 entrance:** a narrow lane outside the door, from the Space 2 sketch. Tall patched facades, tangled wires, tarp awnings, laundry, a bicycle against the wall, puddles, a dusk sky. You walk a few metres out, then the end card shows.
- **Code:** split up so the project can grow: `js/kit.js` (shared builders), `js/spaces/` (one file per space), `WORLD.md` (layout plan). The bag is now shared across spaces.
- **Fixes:** Settings now opens above the pause menu (it was stuck underneath). Volume and mouse sensitivity are at the top of Settings. The default volume is lower and the machines are quieter. The red highlight is softer.

## v0.1 — 2026-10-20
First playable build: title screen + Space 1 (The Sweatshop).

- **Title screen:** a live 3D view of the workshop, the title in the bottom-right, Begin / Enter VR / Settings, and a "best with headphones" note.
- **Settings:** render resolution, frame-rate limit, effects, shadows, field of view, mouse sensitivity, volume, control hints, FPS counter. Settings are remembered in each browser.
- **Space 1, The Sweatshop**, built from the Miro board:
  - Seated start at child scale: tables, machines and adults are about 1.35× real size.
  - Task loop: take fabric from the left pile, hold to sew it through the machine, and the piece folds onto the right pile. Quota is 4 pieces.
  - Glimpses of school: after piece 2 a chalkboard and notebook fade in (daydream). After piece 3 the barred window brightens and a school bell rings. Looking out the window at any time turns up the children's voices.
  - Shift-end bell: machines wind down, workers stop and talk, and you stand up.
  - Red thread wayfinding: a red line on the floor and a soft red glow on one object at a time. If you stand still for 20 seconds, both pulse harder and a hint repeats.
  - Key object: a faded, patched cloth bag on the hook by the door. You pick it up, the supervisor drops 3 coins into it, and it opens on its own the first time so you see the coins, a pencil stub and a torn notebook page ("When I grow up I will be a teacher."). After that, hold Q or raise it to your chest in VR to look inside.
  - The door opens into bright light, followed by the end card. Space 2 is next.
- **Sound:** all sounds are generated by code for now (machines, chatter, children, bells, coins, door, street, footsteps). Recordings dropped into `site/audio/` replace them.
- **Tested on:** desktop Chrome (full play-through). VR controls are written but **not yet tested on a real headset**.
