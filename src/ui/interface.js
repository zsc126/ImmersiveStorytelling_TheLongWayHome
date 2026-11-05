// DOM captions and menus also supply the text and progress mirrored by the VR rig.
const $ = (selector) => document.querySelector(selector);

export function createUI(settings, isXR) {
  const timers = {};
  // Hints bypass the typing effect so an instruction is readable as soon as it appears.
  const TYPING_SPEED = { thought: 30, subtitle: 38 }; // characters per second
  const typing = {};
  function typeCaption(element, id, text) {
    clearInterval(typing[id]);
    // Spoken captions use the scene-authored 'Speaker: line' convention; thoughts have no speaker tag.
    const speaker = id === 'subtitle' && /^([A-Z][A-Za-z ]{1,18}): (.*)$/.exec(text);
    element.innerHTML = '';
    if (id === 'subtitle') {
      const label = document.createElement('span');
      label.className = 'who';
      label.textContent = speaker ? speaker[1] : 'Around you';
      element.appendChild(label);
    }
    if (speaker) text = speaker[2];
    const body = document.createElement('span');
    body.className = 'say';
    element.appendChild(body);
    const characters = [...text];
    let nextCharacter = 0;
    const tick = () => {
      if (nextCharacter >= characters.length) {
        clearInterval(typing[id]);
        return;
      }
      const letter = document.createElement('i');
      letter.textContent = characters[nextCharacter++];
      body.appendChild(letter);
    };
    tick();
    typing[id] = setInterval(tick, 1000 / TYPING_SPEED[id]);
    element.dataset.full = (speaker ? speaker[1] + ': ' : '') + text;
    return characters.length / TYPING_SPEED[id];
  }
  // In a headset the same hints are worded for the controllers (the desktop text is never changed)
  const VR_HINTS = {
    'Look around with the mouse · click the glowing fabric on your left':
      'Point at the glowing fabric on your left · pull the trigger',
    'Hold the mouse button on the machine to push the fabric through':
      'Point at the machine · hold the trigger to push the fabric through',
    'W A S D to walk · hold Shift to run · find your bag (look for the glow)':
      'Left stick to walk (all the way to run) · right stick to turn · find your bag (look for the glow)',
    'Hold Q to look inside your bag · then go home':
      'Squeeze a grip to look inside your bag · then go home',
    'Click the fabric on your left': 'Point at the fabric on your left · pull the trigger',
    'Hold the mouse button on the machine': 'Point at the machine · hold the trigger',
    'Click the supervisor at his desk': 'Point at the supervisor · pull the trigger',
    'Click the door to go outside': 'Point at the door · pull the trigger',
    'Hold E to hold out your hands': 'Hold the trigger to hold out your hands',
    'Hold the bag to your chest to hide the light — and stay still':
      'Squeeze a grip to hug the bag and hide the light — and stay still',
  };
  const controllerHint = (t) =>
    VR_HINTS[t] ||
    String(t)
      .replace(/Hold the mouse button/g, 'Hold the trigger')
      .replace(/\bClick\b/g, 'Pull the trigger')
      .replace(/\bclick\b/g, 'pull the trigger')
      .replace(/\b(Hold|Press) [QR]\b/g, 'Squeeze a grip')
      .replace(/\b(Hold|Press) E\b/g, 'Hold the trigger')
      .replace(/\b[Hh]old C\b/g, 'squeeze both grips')
      .replace(/W A S D/g, 'Left stick')
      .replace(/[Hh]old Shift/g, 'push the stick all the way')
      .replace(/ with the mouse/g, '');
  const ui = {
    state: { progress: 0, stamina: null }, // read by the VR caption board
    show(id, on) {
      $('#' + id).classList.toggle('show', on);
    },
    text(id, text, secs) {
      const el = $('#' + id);
      clearTimeout(timers[id]);
      if (!text) {
        clearInterval(typing[id]);
        el.classList.remove('on');
        return;
      }
      let typeT = 0;
      if (TYPING_SPEED[id]) typeT = typeCaption(el, id, text);
      else el.textContent = text;
      el.classList.add('on');
      if (secs)
        timers[id] = setTimeout(() => el.classList.remove('on'), (secs + typeT * 0.85) * 1000); // stays up long enough to read once typed
    },
    // a small ring that ripples out from the crosshair when you use something (click feedback)
    pulse() {
      const c = $('#crosshair');
      if (!c) return;
      c.classList.remove('tap');
      void c.offsetWidth;
      c.classList.add('tap');
    },
    hint(t, s) {
      if (settings.hints || !t) ui.text('hint', t && isXR() ? controllerHint(t) : t, s);
    },
    thought(t, s) {
      ui.text('thought', t, s);
    },
    subtitle(t, s) {
      ui.text('subtitle', t, s);
    },
    fade(on, white = false) {
      const f = $('#fade');
      f.classList.toggle('white', white);
      f.classList.toggle('on', on);
    },
    progress(k) {
      ui.state.progress = k;
      const el = $('#ring');
      el.style.setProperty('--progress', k);
      el.classList.toggle('on', k > 0.001 && k < 1);
    },
    label(t) {
      const el = $('#label');
      el.textContent = t || '';
      el.classList.toggle('on', !!t);
      $('#crosshair').classList.toggle('hot', !!t);
    },
    stamina(v) {
      ui.state.stamina = v;
      const el = $('#stamina');
      el.classList.toggle('on', v !== null && v < 0.98);
      if (v !== null) el.style.setProperty('--progress', v);
    },
    finale(extra) {
      // the Extra edition first says what tomorrow holds
      ['stat-0a', 'stat-0b'].forEach((id) => {
        $('#' + id).hidden = !extra;
      });
      const ids = [
        ...(extra ? ['stat-0a', 'stat-0b'] : []),
        'stat-1',
        'stat-2',
        'stat-3',
        'stat-src',
        'stat-fin',
      ];
      ids.forEach((id) => $('#' + id).classList.remove('on'));
      ids.forEach((id, i) => setTimeout(() => $('#' + id).classList.add('on'), 900 + i * 2600));
    },
    error(m) {
      $('#error').textContent = m;
    },
  };

  return ui;
}
