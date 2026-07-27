import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import path from "path";

const dir = "public/projects";
const files = (await readdir(dir)).filter((f) => /\.png$/i.test(f));

for (const file of files) {
  const inputPath = path.join(dir, file);
  const outputPath = path.join(dir, file.replace(/\.png$/i, ".webp"));

  await sharp(inputPath)
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outputPath);

  await unlink(inputPath);
  console.log(`${file} -> ${path.basename(outputPath)}`);
}

console.log(`Done. Converted ${files.length} images.`);
