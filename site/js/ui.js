// The Long Way Home — created by Sicheng Zheng. © 2026 Sicheng Zheng. All rights reserved.
// Menus, panels, hints. Pure DOM — the 3D side talks to this through a few callbacks.
import { settings, schema, save, resetSettings } from './settings.js';

const $ = s => document.querySelector(s);

export class UI {
  constructor({ onAction, onSettingsChange }) {
    this.onAction = onAction;
    this.onSettingsChange = onSettingsChange;
    this.hintTimer = null;
    this.panelStack = [];

    document.querySelectorAll('[data-action]').forEach(b => b.addEventListener('click', e => {
      e.stopPropagation();
      const a = b.dataset.action;
      if (a === 'settings') return this.openPanel('settings');
      this.onAction(a);
    }));
    document.querySelectorAll('.panel [data-close]').forEach(b => b.addEventListener('click', () => this.closePanel()));
    document.querySelectorAll('.panel').forEach(p => p.addEventListener('click', e => { if (e.target === p && p.id !== 'pause') this.closePanel(); }));
    addEventListener('keydown', e => { if (e.code === 'Escape' && this.panelStack.length && this.top() !== 'pause') this.closePanel(); });
    $('#settings-reset').addEventListener('click', () => { resetSettings(); this.buildSettings(); this.onSettingsChange(); });
    this.buildSettings();
  }

  top() { return this.panelStack[this.panelStack.length - 1]; }

  show(id, on = true) { $('#' + id).classList.toggle('show', on); }

  openPanel(id) {
    this.show(id, true);
    if (this.top() !== id) this.panelStack.push(id);
  }
  closePanel() {
    const id = this.panelStack.pop();
    if (id) this.show(id, false);
  }
  closeAllPanels() { while (this.panelStack.length) this.closePanel(); }

  buildSettings() {
    const form = $('#settings-form');
    form.innerHTML = '';
    for (const f of schema) {
      const row = document.createElement('div'); row.className = 'f-row';
      const lab = document.createElement('label');
      lab.innerHTML = f.label + (f.note ? `<span class="f-note">${f.note}</span>` : '');
      row.appendChild(lab);
      let ctl;
      if (f.type === 'seg') {
        ctl = document.createElement('div'); ctl.className = 'seg';
        f.options.forEach(([val, text]) => {
          const b = document.createElement('button'); b.textContent = text;
          b.classList.toggle('on', settings[f.key] === val);
          b.addEventListener('click', () => {
            settings[f.key] = val; save();
            ctl.querySelectorAll('button').forEach(x => x.classList.remove('on')); b.classList.add('on');
            this.onSettingsChange(f.key);
          });
          ctl.appendChild(b);
        });
      } else if (f.type === 'toggle') {
        ctl = document.createElement('button'); ctl.className = 'switch'; ctl.setAttribute('role', 'switch');
        const sync = () => { ctl.classList.toggle('on', !!settings[f.key]); ctl.setAttribute('aria-checked', !!settings[f.key]); };
        sync();
        ctl.addEventListener('click', () => { settings[f.key] = !settings[f.key]; save(); sync(); this.onSettingsChange(f.key); });
      } else {
        ctl = document.createElement('div'); ctl.className = 'rng';
        const inp = document.createElement('input'); inp.type = 'range';
        Object.assign(inp, { min: f.min, max: f.max, step: f.step, value: settings[f.key] });
        const out = document.createElement('output'); out.textContent = f.fmt(settings[f.key]);
        inp.addEventListener('input', () => { settings[f.key] = +inp.value; out.textContent = f.fmt(+inp.value); save(); this.onSettingsChange(f.key); });
        ctl.append(inp, out);
      }
      row.appendChild(ctl);
      form.appendChild(row);
    }
  }

  setVR(state) {
    const btn = $('#btn-vr'), st = $('#vr-status');
    if (state === 'yes') { btn.disabled = false; st.textContent = 'Headset detected'; }
    else if (state === 'insecure') { btn.disabled = true; st.textContent = 'Needs an https:// link to use a headset'; }
    else { btn.disabled = true; st.textContent = 'Open this page in a headset browser'; }
  }

  hint(text, secs = 5) {
    const h = $('#hint');
    clearTimeout(this.hintTimer);
    if (!text) { h.classList.remove('on'); return; }
    h.textContent = text; h.classList.add('on');
    this.hintTimer = setTimeout(() => h.classList.remove('on'), secs * 1000);
  }

  // the child's inner voice
  thought(text, secs = 4) {
    const el = $('#thought');
    clearTimeout(this.thoughtTimer);
    if (!text) { el.classList.remove('on'); return; }
    el.textContent = text; el.classList.add('on');
    this.mirror && this.mirror('thought', text, secs);
    this.thoughtTimer = setTimeout(() => el.classList.remove('on'), secs * 1000);
  }
  // other people's spoken lines
  subtitle(text, secs = 3) {
    const el = $('#subtitle');
    clearTimeout(this.subTimer);
    if (!text) { el.classList.remove('on'); return; }
    el.textContent = text; el.classList.add('on');
    this.mirror && this.mirror('subtitle', text, secs);
    this.subTimer = setTimeout(() => el.classList.remove('on'), secs * 1000);
  }
  stamina(v) { const el = $('#stamina'); el.classList.toggle('on', v !== null && v < 0.98); if (v !== null) el.firstElementChild.style.transform = `scaleX(${v})`; }
  finale() {
    const ids = ['stat-1', 'stat-2', 'stat-3', 'stat-src', 'stat-fin'];
    ids.forEach(id => $('#' + id).classList.remove('on'));
    ids.forEach((id, i) => setTimeout(() => $('#' + id).classList.add('on'), 900 + i * 2600));
  }
  fade(on, white = false) { const f = $('#fade'); f.classList.toggle('white', white); f.classList.toggle('on', on); }
  crosshair(hot) { $('#crosshair').classList.toggle('hot', !!hot); }
  fps(text) { $('#fps').textContent = text; }
  error(text) { $('#error').textContent = text; }
}
