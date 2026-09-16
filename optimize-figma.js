const sharp = require('sharp');

const src = 'src/assets/images/figma/figma-ecomerce.jpg';
const out = 'src/assets/images/figma/';

const sections = [
  { n: 1, top: 0, height: 8000 },
  { n: 2, top: 8000, height: 8000 },
  { n: 3, top: 16000, height: 8000 },
  { n: 4, top: 24000, height: 8000 },
  { n: 5, top: 32000, height: 768 }
];

Promise.all(
  sections.map(section =>
    sharp(src)
      .extract({
        left: 0,
        top: section.top,
        width: 1868,
        height: section.height
      })
      .resize({ width: 1400 })
      .webp({ quality: 82 })
      .toFile(`${out}figma-ecomerce-${section.n}.webp`)
  )
)
  .then(() => {
    console.log('ALL 5 SECTIONS CREATED SUCCESSFULLY');
  })
  .catch(error => {
    console.error('ERROR:', error);
  });