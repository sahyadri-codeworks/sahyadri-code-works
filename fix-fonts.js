const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('c:/sahyadri-code/src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replacements
  // Hero
  content = content.replace(/text-6xl md:text-7xl lg:text-\[80px\]/g, 'text-4xl md:text-5xl lg:text-6xl');
  content = content.replace(/text-5xl md:text-6xl lg:text-\[80px\]/g, 'text-4xl md:text-5xl lg:text-6xl');
  content = content.replace(/text-\[80px\]/g, 'text-5xl lg:text-6xl');
  
  // Section Headings (56px)
  content = content.replace(/text-5xl lg:text-\[56px\]/g, 'text-3xl md:text-4xl lg:text-5xl');
  content = content.replace(/text-\[32px\] md:text-\[40px\] lg:text-\[56px\]/g, 'text-3xl md:text-4xl lg:text-5xl');
  content = content.replace(/text-\[56px\]/g, 'text-4xl lg:text-5xl');

  // Subheadings (36px, 28px)
  content = content.replace(/text-\[36px\]/g, 'text-2xl md:text-3xl');
  content = content.replace(/text-\[28px\] md:text-\[36px\]/g, 'text-2xl md:text-3xl');
  content = content.replace(/text-\[28px\]/g, 'text-xl md:text-2xl');
  content = content.replace(/text-\[24px\] md:text-\[28px\] lg:text-\[34px\]/g, 'text-xl md:text-2xl');
  content = content.replace(/text-\[24px\]/g, 'text-lg md:text-xl');
  
  // Paragraphs
  content = content.replace(/text-\[20px\] md:text-\[22px\]/g, 'text-base md:text-lg');
  content = content.replace(/text-\[20px\]/g, 'text-base md:text-lg');
  content = content.replace(/text-\[18px\]/g, 'text-base');
  content = content.replace(/text-\[16px\] md:text-\[18px\] lg:text-\[20px\]/g, 'text-base md:text-lg');
  content = content.replace(/text-\[16px\] md:text-\[17px\]/g, 'text-sm md:text-base');
  content = content.replace(/text-\[16px\]/g, 'text-sm md:text-base');
  content = content.replace(/text-\[15px\]/g, 'text-sm');
  content = content.replace(/text-\[14px\]/g, 'text-sm');
  content = content.replace(/text-\[13px\]/g, 'text-xs');
  content = content.replace(/text-\[12px\]/g, 'text-xs');
  
  // Menus
  content = content.replace(/text-\[17px\]/g, 'text-base');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
