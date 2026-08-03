import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import path from "path";

const dir = "public/projects/";

async function collectImageFiles(currentDir) {
  const entries = await readdir(currentDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await collectImageFiles(fullPath));
      continue;
    }

    if (/\.(png|jpe?g)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

const files = await collectImageFiles(dir);

for (const file of files) {
  const inputPath = file;
  const outputPath = file.replace(/\.(png|jpe?g)$/i, ".webp");

  await sharp(inputPath)
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outputPath);

  await unlink(inputPath);
  console.log(`${file} -> ${path.basename(outputPath)}`);
}

console.log(`Done. Converted ${files.length} images.`);
