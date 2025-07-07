const fs = require('fs');
const path = require('path');

// Common link patterns to replace
const replacements = [
  // Basic href with with-base
  { 
    pattern: /href="\/([^"]*)" with-base/g, 
    replacement: 'href={`${import.meta.env.BASE_URL}$1`}' 
  },
  // favicon links
  {
    pattern: /href="\/favicon\.svg" 
    replacement: 'href={`${import.meta.env.BASE_URL}favicon.svg`}'
  },
  // Home links
  {
    pattern: /href="\/" with-base/g,
    replacement: 'href={import.meta.env.BASE_URL}'
  }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  for (const { pattern, replacement } of replacements) {
    const newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Get all .astro files with with-base
const files = [
  'src/layouts/Layout-old.astro',
  'src/components/Header.astro',
  'src/components/NavbarBottom.astro',
  'src/components/old-navbar.astro',
  'src/components/SatelliteSite.astro',
  'src/components/Navbar-v1.astro',
  'src/components/FinishedWorkGallery.astro',
  'src/pages/finished-work/action.astro',
  'src/pages/finished-work/index.astro',
  'src/pages/finished-work/written.astro',
  'src/pages/finished-work/two-d.astro',
  'src/pages/finished-work/graphic.astro',
  'src/pages/finished-work/three-d.astro',
  'src/pages/site-engineering.astro',
  'src/pages/index.astro',
  'src/pages/in-production-ch1.astro',
  'src/pages/site-design-ch1.astro',
  'src/pages/site-engineering-ch1.astro',
  'src/pages/site-design.astro',
  'src/pages/in-production.astro'
];

files.forEach(processFile);
console.log('Link fixing complete!');
