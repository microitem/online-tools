import { languages } from '../i18n/config';

const tools = [
  {
    name: 'qr-generator',
    lastmod: new Date().toISOString()
  }
];

export async function GET() {
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${Object.keys(languages)
        .map(lang => 
          tools.map(tool => `
            <url>
              <loc>https://goodboog.com/${lang}/${tool.name}</loc>
              <lastmod>${tool.lastmod}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `).join('')
        ).join('')}
    </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml',
      },
    }
  );
}
