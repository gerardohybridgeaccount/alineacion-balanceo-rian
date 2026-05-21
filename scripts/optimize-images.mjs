import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'src/assets';
const outputDir = 'src/assets';

// Asegurarse de que el directorio existe
if (!fs.existsSync(inputDir)) {
  console.error(`❌ El directorio ${inputDir} no existe.`);
  process.exit(1);
}

const files = fs.readdirSync(inputDir);

console.log('🚀 Iniciando optimización de imágenes...');

files.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (['.png', '.jpg', '.jpeg'].includes(ext)) {
    const inputPath = path.join(inputDir, file);
    const fileName = path.parse(file).name;
    const outputPath = path.join(outputDir, `${fileName}.webp`);

    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`✅ Optimizado: ${file} -> ${fileName}.webp`))
      .catch(err => console.error(`❌ Error en ${file}:`, err));
  }
});
