# World layout

All spaces live in one continuous 3D world, so the child walks from one space into the next instead of loading separate levels. Units are metres. +x points from the factory toward home.

```
 z
 ^          FACTORY (Space 1)               ALLEY → STREET & MARKET (Space 2)
 |   x -8 ─────────────────── x 8 ┌──────────────────────────────── x 27 ...
 |   window on left wall         door (z 3.2–4.6) ═► lane (z 2.4–5.4)
 |   player seat (-6.2, 2.1)     bag hooks + supervisor desk by the door
 +──────────────────────────────────────────────────────────────────► x
```

| Space | Status | Area | File |
|---|---|---|---|
| 1 · The Sweatshop | playable | x −8…8, z −6…6 | `js/spaces/sweatshop.js` |
| 2 · Street & Market | playable | lane x 8…22 (z 2.4…5.4), market square x 22…40, z −4…12 | `js/spaces/street.js` |
| 3 ★ · Nightmare chase | playable | five alleys from the market's east exit to x 82 (see `ROUTE` in the file) | `js/spaces/nightmare.js` |
| Ending · Home | playable | x 82…88, z 10…15.4 | `js/spaces/home.js` |

## How spaces connect

- `main.js` builds every space into one scene and keeps a shared `journey` object: `{ bag, coins, hasBag }`.
- **The bag is created once in `main.js` and passed from space to space.** Its contents change along the way: coins in Space 1, then the shortfall at the stall, then the stolen food, then the food on the table at home.
- Each space exposes `start()`, `update(dt, t, active)`, `reset()`, `stop()` and `onEnd(fn)`. When it ends, it names the next space (Space 1 ends with `'street'`).
- Shared systems: `guide.js` (red thread), `bag.js` (the bag: what's inside, glow, weight), `pursuit.js` (police following your footsteps).
- Each space reports its own fog and light through `atmosphere()`; `main.js` blends between them as you walk.

## Shared pieces (`js/kit.js`)

People (`makeFigure`), the bag (`makeBag`, `setBagOpen`), sacks, seats, wires and fabric materials. Reuse these so every space looks consistent.
