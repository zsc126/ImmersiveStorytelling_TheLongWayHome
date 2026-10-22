# Sounds

Every sound currently has a code-generated placeholder. To replace one with a real recording (e.g. edited in Audacity):

1. Export it as `.mp3` (or `.wav` / `.ogg`) into this folder.
2. Add a line for it in `manifest.json`, using the names below. For example:

```json
{
  "sewing": "sewing-machine.mp3",
  "children": "schoolyard.mp3"
}
```

Loops must start and end smoothly (no click at the seam).

| Name | What it is | Type |
|---|---|---|
| sewing | Your own sewing machine running | loop |
| factory | Other machines in the room | loop |
| hum | Motor / fan hum | loop |
| room | Room tone | loop |
| chatter | Workers talking quietly | loop |
| children | Children at school outside the window | loop |
| street | Street outside the factory door | loop |
| schoolBell | School hand bell | one-shot |
| shiftBell | End-of-shift bell | one-shot |
| coin | Coin dropping into the bag | one-shot |
| fabric | Fabric swish | one-shot |
| door | Metal door creaking open | one-shot |
| step | One footstep | one-shot |
