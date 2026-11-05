// Storage may be unavailable in private or embedded browsers; defaults must still allow play.
const DEFAULTS = { quality: 'auto', sensitivity: 1, volume: 0.9, hints: true };
export const settings = { ...DEFAULTS };
try {
  Object.assign(settings, JSON.parse(localStorage.getItem('tlwh-hd') || '{}'));
} catch (e) {
  /* storage blocked */
}
export const saveSettings = () => {
  try {
    localStorage.setItem('tlwh-hd', JSON.stringify(settings));
  } catch (e) {
    /* ignore */
  }
};
