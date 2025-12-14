const fs = require("fs");

const domain = "https://dazelworld.co.ke";

const pages = [
  "/",
  "/about",
  "/contact",
  "/products",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${domain}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap.trim());

console.log("✅ Sitemap generated successfully");
