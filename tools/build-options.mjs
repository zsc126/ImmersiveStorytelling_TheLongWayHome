// Both build commands use the same settings so a dev rebuild cannot change the shipped artifact.
export const buildOptions = {
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2020',
  legalComments: 'none',
  banner: { js: '/*! The Long Way Home V3. Includes three.js (MIT License). */' },
  outfile: 'site/app.js',
  logLevel: 'info',
};
