// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// Player settings, remembered per browser (falls back silently if storage is blocked).
const KEY = 'tlwh.settings.v3';

export const defaults = {
  resolution: 1,      // multiplier on device pixel ratio
  fpsCap: 0,          // 0 = match the screen refresh (smoothest). Ignored in VR — the headset sets the rate
  quality: 'high',    // 'low' hides dust + light shafts
  shadows: false,
  fov: 75,
  sensitivity: 1,
  volume: 0.45,
  hints: true,
  showFps: false,
};

export const schema = [
  { key: 'volume', label: 'Volume', type: 'range', min: 0, max: 1, step: 0.05, fmt: v => Math.round(v * 100) + '%' },
  { key: 'sensitivity', label: 'Mouse sensitivity', type: 'range', min: 0.3, max: 2.5, step: 0.1, fmt: v => (+v).toFixed(1) + '×' },
  { key: 'resolution', label: 'Render resolution', type: 'seg', options: [[0.5, '50%'], [0.75, '75%'], [1, '100%'], [1.5, '150%']] },
  { key: 'fpsCap', label: 'Frame rate limit', note: 'Desktop only — headsets run at their own rate', type: 'seg', options: [[30, '30'], [60, '60'], [0, 'Match screen']] },
  { key: 'quality', label: 'Effects', note: 'Dust and light shafts', type: 'seg', options: [['low', 'Low'], ['high', 'High']] },
  { key: 'shadows', label: 'Shadows', note: 'Costly on headsets', type: 'toggle' },
  { key: 'fov', label: 'Field of view', type: 'range', min: 60, max: 95, step: 1, fmt: v => v + '°' },
  { key: 'hints', label: 'Control hints', note: 'Small text prompts on desktop', type: 'toggle' },
  { key: 'showFps', label: 'Show frame rate', type: 'toggle' },
];

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    return { ...defaults, ...saved };
  } catch (e) {
    return { ...defaults };
  }
}

export const settings = load();

export function save() {
  try { localStorage.setItem(KEY, JSON.stringify(settings)); } catch (e) { /* storage blocked */ }
}

export function resetSettings() {
  Object.assign(settings, defaults);
  save();
}
