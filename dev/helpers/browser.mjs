import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export const TEST_URL = process.env.TLWH_TEST_URL || 'http://localhost:8765';
export const ARTIFACT_DIR = join(tmpdir(), 'tlwh-tests');
mkdirSync(ARTIFACT_DIR, { recursive: true });

// Software WebGL keeps scene checks usable on machines without a dedicated test GPU.
export function launchTestBrowser({ args = [], ...options } = {}) {
  return chromium.launch({
    ...options,
    ...(process.env.TLWH_CHROMIUM_PATH ? { executablePath: process.env.TLWH_CHROMIUM_PATH } : {}),
    args: [
      ...new Set([
        '--use-gl=angle',
        '--use-angle=swiftshader',
        '--enable-unsafe-swiftshader',
        ...args,
      ]),
    ],
  });
}
