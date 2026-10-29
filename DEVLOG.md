# DEVLOG

## v3.2 VR — 2026-10-28 · the VR version, checked end to end
The desktop game is unchanged (same picture, same UI, same controls). Everything below only acts inside a headset,
except the two fixes marked *desktop*.
- **Fixed: the game froze in VR at the market.** Pointing a controller at a target that carries a guiding glow (a sprite) threw an error every frame (the controller ray had no camera to test sprites against). The ray now carries the camera.
- **Fades and eyelids in the headset.** The page's black/white fades and the eyelids (the blink that hides the loop's jump back, waking at home, closing your eyes at the end) are page overlays, so a headset never saw them. A small "veil" around your eyes now mirrors them exactly.
- **You start where the story puts you, facing the right way,** wherever you stand in your room and whichever way you face (at the machine, at the stall, after being caught…). Walls are tested where your head is; the stick never carries you into a wall and nothing ever pushes you (leaning over a table is fine).
- **Standing up from the machine** no longer jumps the room by your distance from the play-space centre.
- **Your shadow and the story read where you look** in a headset (they used to read a fixed direction).
- **Hints worded for controllers** (point + trigger, hold the trigger, sticks, grips) instead of mouse/keys.
- **Caption board:** long lines wrap instead of being squeezed; speaker tags; the name of what your ray points at; the sewing progress and the chase's breath as thin bars.
- **The end card in VR:** the statistics appear one by one in the dark in front of you; then *Pull the trigger to leave VR*. Before, the headset closed and the game jumped straight back to the title, so the statistics were never seen.
- **Enter VR asks for the headset first** (straight from the click), then loads the sound in the dark. Before, a slow connection could let the click "expire" and the browser refused to open the headset.
- **Headset menu:** while it is open the story and the sound wait.
- **Comfort and feel:** the edge of sight darkens a little while the stick moves you; the controller taps when you use something; press a thumbstick to reset your height (after sitting down or standing up); headsets use Medium quality; touchpad controllers (axes 0/1) work as well as thumbsticks; a headset without a floor-level space falls back to a standing one.
- **Leaving VR mid-game** returns to the title cleanly (the desktop view no longer keeps the headset's turn).
- *desktop* **Fixed: the end card was hidden under the black fade** (a line that lifts the fade had been swallowed by a code comment), so the statistics never showed on desktop either.
- *desktop* **Source in step with the build:** `src/` was a little behind the shipped `site/app.js` (own footsteps and the footstep gain); it now rebuilds to exactly the shipped game.
- **Play it:** `Start The Long Way Home.bat` serves the game on `http://localhost:8080` (PC headsets via Quest Link / Air Link / SteamVR in Chrome or Edge); the GitHub Pages workflow (`docs/github-pages-workflow.yml`, move it to `.github/workflows/pages.yml`) gives the https link standalone headsets need.
- **Tested without a headset:** `dev/vr-test.mjs` plays the story in an emulated Meta Quest 3 (IWER), using the controllers for the real interactions. See `docs/vr-readiness.md`.

## v3.1 — 2026-10-23 · footsteps much quieter, no more hiss and humming
- Background noise (hiss): the room tone and the street bed are filtered twice (dark, no hiss) and much lower (workshop room tone 0.18 → 0.05, lane 0.35 → 0.15); wind in the nightmare, the light and at home about ⅓ of before.
- Humming: the motor/fan hum is about ⅓ as loud with far less noise in it; the other machines in the workshop about half; the street through the open door less than half; the nightmare drone ⅓; the machines at the very end less than half.
- Passers-by in the market: footsteps switched off too (`CROWD_STEPS = 0` at the top of `src/street.js`). The crackling fire recording at the food stall (heard as loud, crackly footsteps) is now very quiet (0.22 → 0.04, and it no longer gets louder as you creep up), and the market crowd recording 0.75 → 0.45.
- Your own footsteps: switched off completely (`OWN_STEPS = 0` at the top of `src/player.js`; raise it to bring them back).
- Every footstep now goes through one control, `STEP_GAIN` in `src/audio.js` (0.25, then lowered again to 0.07: all footsteps another ~72% quieter). Each source was turned down too: police in the chase about 12× quieter, the market crowd about 10× quieter (and only within 2 m), the steps passing the house about 12× quieter, and your own bare feet barely audible. The step sound itself is duller and softer, with no hard click.

## v3.0 — 2026-10-22 · play-test feedback (outside tester, 5 min 43 s)
- **Sewing never stops for the story:** the two daydreams in the workshop (the school, the window) now play *over* the work. You can take the next piece and keep sewing while they run.
- **The other workers are children:** every worker at a machine (and the girl folding) is a child, at different small sizes, all smaller than you and much smaller than the adults (the supervisor, the carrier). The first time you look at one, the child thinks: "Everyone here is a child like me. Some are younger."
- **No red line any more:** whatever you need next glows softly (a warm halo and a few drifting motes of light), so you look around and find it. The fabric pile glows too. In the chase the glow waits at the next corner. Hints say "look for the glow".
- **Click feedback:** every time you use something, a ring ripples out from the crosshair and a soft wooden "tok" plays.
- **The steal is tense:** once the vendor turns away, the closer you creep to the food the louder and faster your heart beats, the market noise falls away, the sizzling gets louder, the edges of sight darken with each beat (a pulse, not a flash) and the view narrows a little. The vendor shifts as if he might turn round. When you are close: "Don't turn around. Don't turn around…"
- **Smoother changes between spaces:** fog, light and exposure blend about three times more slowly. The run out of the market already darkens toward the nightmare, and the nightmare picks up from there and takes about 12 s to fully change (6 s before). The police turn into monsters later and more slowly, and the first lightning comes later. Your heartbeat carries over from the market into the nightmare.
- **Home, relief:** a soft dip to dark instead of a white flash. Your heart is still pounding and slows down and fades over about 8 s, with a long breath out. The lamp's warm light grows and the cold air of the chase warms up. "(the shouting runs past the door… and fades away)" → "They didn't see me. I'm safe."
- **Home, fixes:** you step up to the table before putting the food down (the hand no longer stretches across the room); you sit down on the floor to eat and can't wander off in the dark; you stand up again afterwards; the unreachable old "rest" code is gone. In the nightmare, "They're not men anymore." can no longer show up after the chase is over.
- **Words:** thoughts and spoken lines are typed out letter by letter, each letter fading in, in a calmer, smaller sans-serif. Speakers get a small label above their line. Control hints still appear at once. The VR caption board shows the same text.
- **No credits:** the Team/Credits panel and every "created by" line are gone (title, end card, page headers, code). The title shows **V3**. The sound attribution on the end card stays (the CC BY licence requires it).
- **Ready for GitHub and VR:** `.gitignore`, `site/.nojekyll`, and a GitHub Pages workflow (`docs/github-pages-workflow.yml`, to be moved to `.github/workflows/`) that publishes `site/` over https so a headset can open it and Enter VR. `npm run build` / `npm run serve`.

# V2 dev log

## v2.5.1 — 2026-10-21 (evening)
- **Scenes (title menu, under Begin):** start from Scene 2 · The Market (outside the factory door, bag and three coins), Scene 3 · The Run (the mouth of the lane, the food in your bag, the police well behind) or Scene 4 · The Door (the end of the last lane: knock in Normal, walk into the light in Extra). Each start was tested: free to move, nothing to clip into, police at a distance.
- **Both editions end the same way at home:** put the food down, eat together, lie down, close your eyes; the end card says tomorrow at seven nothing has changed. Only the nightmare differs (Extra: the loop, the hide, and the door that opens into the light).
- **The light (Extra):** the food now flies in from far off to one side and stops right in front of your face (about as far as the sewing machine was): first a full thali from the left, then a mango lassi and a kulfi from the right. Press E (VR: trigger) and both hands reach and close twice; the plate fades and breaks into flakes. Lighter haze (patches, not a fog); pale ghost shirts and kurtas drift and sway through the air.
- **VR readiness reviewed** (`docs/vr-readiness.md`): every interaction has a headset equivalent; the shadow body follows your head in a headset.
- **Your shadow is a whole child now:** an invisible full body (it only casts a shadow) walks, runs, sits and drops out when you lie down; it faces where you face. The floating hands no longer cast shadows of their own (no floating head-and-hands shadow). It has no collision, so it can never snag on walls, people or the god-mode jumps.
- **The workshop light falls off as in V1:** brightest by the window and your table, medium at the supervisor's desk, dim in the middle, a faint glow in the far corner.
- **Warmer workshop light, as in V1:** brighter orange bulb pools (still dark between them), a warmer dusk sun and fill.
- **Extra:** hiding from the figure is now **R** (Q stays 'look in the bag'); the ghost machine appears only twice — as you enter the alleys and near the end (the two rows in the loop stay).
- **The window flicker, found:** the light volume's box started inside the window frame, so its face cut through the jambs and shimmered there; it now starts clear of the frame. The frame is plain dark paint (fine wood grain aliased edge-on), and the volume has no screen dither.
- **The other children keep working after your shift ends** (hands at the cloth, the cycle goes on, the machines run with them).
- **No sliver buildings:** the last building of a block takes the leftover width instead of a thin strip.

## v2.5 — 2026-10-21 · fixes from the team's play-test
- **Workshop light, back to V1's mood:** fewer lights — four bare-bulb pools with dark between them and two dead bulbs, a dim tube, V1's dark smoky air. The sun is now a low **dusk** sun with a dusk sky and schoolyard outside. The shadow map covers the whole room, so the hard-edged band of "sun" across the floor is gone. After the third piece, the window light swells gently instead of blowing out.
- **No more flicker at the window** (title screen and in game): the frame and bars no longer pick up shadow-map acne; the invisible sun-blocking shell no longer shares a plane with the frame; the light shaft uses a fixed dither instead of a per-frame random one.
- **The finished pieces stay on the table:** the pile on the right was never added to the room (a code comment had swallowed the line).
- **Hands:** they rest naturally (wrists straight) and only come up when you face the machine; they never stretch after you any more (explore mode, jumps). Explore mode hides them.
- **Begging, hold E:** two hands held out like a bowl for water — palms up, tipped a little toward each other, close but not touching. The crossed, overlapping fingers came from both hands sharing one position vector (so they landed in the same place); every hand target now has its own.
- **The other children work like you:** each has a small stool of fabric on the left and a fixed pile (1–5) of finished pieces on the right, and repeats your cycle — reach left, lay the piece under the needle, sew, move it to the pile — at their own pace, so someone is always reaching while another sews. Their feet rest on the treadles (fitted per child, never through the floor).
- **The supervisor:** his desk is off the back wall and at sitting height; he sits on a wooden chair with a back, rises smoothly to pay you, and sits down again as you turn to go.
- **Esc** pauses; **Esc again** resumes. Your own footsteps are much quieter. Passers-by in the market step round you instead of walking through you.
- **Market:** the food stall's price board hangs in front of the tarp (no longer cut off); the ground no longer shimmers where the square meets the lanes.
- **The lane outside the factory:** V1's dark, dusty dusk again, opening into the warmer market.
- **The red thread:** muted again, as in V1: dashes drift along it, so it is there and not there, never a bright laser.
- **Escape route:** every crate and sack in the lanes now sits against a wall, leaving at least 1.8 m clear (checked along the whole route). The fruit cart and two bystanders were moved off the run from the food stall to the lane.
- **Home (Normal):** the opened door always leads home, even if the frame loop was paused.
- **Tested by walking:** an automated player held W and steered along the whole route from the food stall to the home door in both editions (no teleports): no blockages. Normal: grabbed, pulled free, knocked three times, home, end card. Extra: loop ×2, hid from the figure, walked into the door, the collapse, the light, home, end card. 0 errors.
- Workers' pieces and your finished piece travel round the front of the machine, not through it. The chase always lets you move.

## v2.4 — 2026-10-21 · Normal nightmare: five lanes, five refusals
The Normal edition's chase home now builds one refusal per lane (design and references in `docs/nightmare-design.md`). It is about despair more than horror.
- **Doors:** lit doorways, each with a figure in it; every one slams a tin shutter before you arrive ("Go away!", "We don't want trouble.").
- **Hands:** adult arms push out of cracks in the wall and claw at your bag. One catches it ("Give it here."); click again and again (VR: pull the trigger again and again) to pull free. Give up and, after 9 s, it takes a coin.
- **Sky:** the buildings lean in overhead until the sky is a crack, and the light dims. It all stays above head height (VR-safe).
- **Windows:** every barred window lights up, a child at a machine in each, all sewing in the same rhythm. Halfway down the machines stop and every child turns to look at you; then the lights go out and only their eyes remain.
- **The last door:** the bulbs die behind you one by one; your own door is shut. Knock three times: nothing, "…Who is it?", then "Ma, it's me!", and it opens. The police slow down at the door so the moment is tense, not unfair.
- The ghost machines now appear only in Extra (their meaning wasn't clear). Buildings that carry a door, a hand or a window no longer sway, so nothing comes apart.
- Transitions: leaving a space now stops its sounds and resets it (no leftover white sphere at home); in Extra the house disappears first and a soft light opens where its door was.

## v2.3 — 2026-10-21 · the whole journey, two editions
- **Two editions, one Begin:** the title keeps a single Begin. A small Edition box in the bottom-left corner opens upward to choose **Normal** (default, the V1 story refined) or **Extra** ("the last stage has extra content"). The choice applies to Enter VR too.
- **Space 2, the lane and the market:** factory wall, lane, market with bunting, food stall, tailor, chai, cart, scrap heap, a crowd of walkers. Beats: count the coins at the stall → scraps → the tailor refuses → beg (hold E / hold the trigger) → steal → run.
- **Space 3, the nightmare:** police chase along a breadcrumb trail, watchers who turn their heads and vanish when you come close, the child's shadow on the walls growing into the supervisor's ("Same time tomorrow."), ghost machines, walls that rise behind you. Normal: the glowing door takes you straight home.
- **Extra, the nightmare:** the lane loops (numbers and cloth on the walls, then machines and sewing sound); a figure comes down the lane and you must hold still and hug the bag (hold Q / squeeze) to let it pass. At the home door the street rises away from you in white light (no fall, no drop: the city moves, you stay still).
- **Extra, the light:** a bright, quiet void — faint sewing, machines drifting near and far, cloth flying past, street food floating just out of reach. Three tries, then it bursts into cloth and your eyes close.
- **Home:** Normal as in V1 (give the food, rest, close your eyes). Extra: you wake by the door at night with the bag; your mother: "You're late. We waited." Put the food on the table, eat, lie down on your mat, close your eyes. *Tomorrow at seven, the machines start again. Nothing has changed.* Then the statistics.
- **VR comfort:** no forced falls or big drops, soft white fades instead of flashes, teleports in the loop hidden behind a blink.
- **Lighter loading:** sounds load on demand (core sounds first), recordings re-encoded mono at 56 kbps.

## v2.2 — 2026-10-21 · smoother
- **Cloth no longer clips the machine:** your machine head sits nearer the table's left edge; the finished pile has room on the right.
- **Lighter to run:** draw calls in the workshop down from ~390 to ~160–260 (plain props merged into vertex-coloured batches; machine parts merged), 12 → 8 lights, sun shadow map only covers the patch the sun reaches, the hover outline pass and ambient occlusion removed, bloom only on High (bulbs have their own halos), default quality Medium. Code bundle 946 KB → 692 KB.
- **No hairline cracks:** wall panels overlap at corners, floor and ceiling.

## v2.1 — 2026-10-21 · people, hands, the V1 door, light
- **People:** rebuilt in a faceted How to Fish style with normal proportions (adults ~7 heads tall, children ~5.5–6). Each person is a single skinned mesh (one draw call). Head is one sculpted shape (no dented cheeks); tunics are solid (no see-through "apron").
- **First-person hands:** chunky faceted hands with clean fingers (no knuckle balls or nail plates). The forearm is a separate solid piece aimed at the child's shoulder, so it always enters from the bottom of the screen. Poses: relax, flat, grip, pinch, cup, point. The hands carry the cloth, guide it beside the needle (clear of it), reach for the bag, carry it, hold it open, and push the door.
- **Door area, V1 layout:** a long plywood counter across the back-right corner; the supervisor stands behind it facing the workshop; four hooks on the right wall beside the door, your bag on the hook nearest the door with three other workers' bags.
- **Your seat:** your own stool; you sit square to the needle.
- **Window light:** one ray-marched light volume through the real bars, rails, mullion and board, instead of stacked slices (no sawtooth edges or dark bands).
- **Flicker fixes:** door leaf overlaps a new frame (no sky showing through cracks); the door light sits inside the room (no sparkling wall); the tube light hums smoothly instead of strobing.
- **Quieter:** your own footsteps are barely audible.
- **VR ready:** an Enter VR button appears in headset browsers; controllers become the hands (trigger to use, hold on the machine to sew), left stick walks, right stick snap-turns 30°, words appear on a board in front of you, and the floor height is set so your eyes are at the child's height.
- **Performance:** sewing-machine parts merged (461 → 322 meshes); fewer real lights.

## v2.6 — title, credits, the light's grab
- Title: "The Long Way Home" much larger (bottom-right, ~half the quadrant); "about 6 minutes"; version label "v2.6" sits above the kicker line, right-aligned.
- New "Team · Credits" button under the Edition picker; opens a translucent panel: Production; Story & Narrative Design — (tbd); Initial Sketches — (tbd); "Made with Claude". Esc closes it (and Scenes).
- Extra void: a warm shade sphere tones down the lower half (lifts away as the light grows at the end); sky 2.0.
- Void grab: hands now in world space, apart and staggered (left a little ahead), palms turned toward each other like a cradle, fingers spread, sliding under the plate's rim from both sides.
