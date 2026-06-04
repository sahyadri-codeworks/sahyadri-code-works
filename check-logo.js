const fs=require('fs');
const html=fs.readFileSync('out/index.html', 'utf8');
const match=html.match(/src=.(.*?logo-new-sw-3\.png)/);
console.log(match ? match[1] : 'not found');
