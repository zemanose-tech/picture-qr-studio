// compress-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "./src/assets";   // folder with your original images
const outputDir = "./optimized"; // folder to save compressed versions

// ensure output folder exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const compressImage = async (file) => {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);

  let quality = 80; // start quality
  let buffer = await sharp(inputPath).jpeg({ quality }).toBuffer();

  // reduce quality until < 300 KB or quality < 30
  while (buffer.length > 300 * 1024 && quality > 30) {
    quality -= 10;
    buffer = await sharp(inputPath).jpeg({ quality }).toBuffer();
  }

  fs.writeFileSync(outputPath, buffer);
  console.log(
    `${file} compressed to ${(buffer.length / 1024).toFixed(1)} KB (quality: ${quality})`
  );
};

// run compression
fs.readdirSync(inputDir).forEach((file) => {
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    compressImage(file);
  }
});