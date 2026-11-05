import { context } from 'esbuild';

const ctx = await context({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2020',
  legalComments: 'none',
  banner: { js: '/*! The Long Way Home V3. Includes three.js (MIT License). */' },
  outfile: 'site/app.js',
  logLevel: 'info',
});

await ctx.watch();
try {
  const { port } = await ctx.serve({ servedir: 'site', host: '127.0.0.1', port: 8080 });
  console.log(`\nThe Long Way Home: http://localhost:${port}/?debug\nSource changes rebuild automatically. Refresh your browser to see them.\n`);
} catch (error) {
  await ctx.dispose();
  throw error;
}

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, async () => { await ctx.dispose(); process.exit(0); });
}
