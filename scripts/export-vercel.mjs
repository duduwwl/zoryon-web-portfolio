process.env.SITE_BASE_PATH = '';
process.env.SITE_OUTPUT_DIRECTORY = 'pages-dist';

await import('./export-github-pages.mjs');
