import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';

const profile = JSON.parse(readFileSync(new URL('./src/data/profile.json', import.meta.url), 'utf8'));

export default defineConfig({
  site: profile.site,
  build: { inlineStylesheets: 'auto' },
});
