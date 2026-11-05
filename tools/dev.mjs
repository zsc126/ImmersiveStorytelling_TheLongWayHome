import { context } from 'esbuild';

import { buildOptions } from './build-options.mjs';

const ctx = await context(buildOptions);

await ctx.watch();
try {
  const { port } = await ctx.serve({ servedir: 'site', host: '127.0.0.1', port: 8080 });
  console.log(
    `\nThe Long Way Home: http://localhost:${port}/?debug\nSource changes rebuild automatically. Refresh your browser to see them.\n`,
  );
} catch (error) {
  await ctx.dispose();
  throw error;
}

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, async () => {
    await ctx.dispose();
    process.exit(0);
  });
}
