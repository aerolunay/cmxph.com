const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "../src/assets");

// Ì¥• SETTINGS
const MAX_WIDTH = 1200;
const QUALITY = 70;

async function processImage(file) {
  const ext = path.extname(file).toLowerCase();

  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;

  const filePath = path.join(dir, file);

  try {
    const tempPath = filePath + ".tmp";

    await sharp(filePath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY }) // keeps compatibility
      .toFile(tempPath);

    fs.renameSync(tempPath, filePath);

    console.log(`‚úÖ Optimized: ${file}`);
  } catch (err) {
    console.error(`‚ùå Failed: ${file}`, err.message);
  }
}

async function run() {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    await processImage(file);
  }

  console.log("Ì∫Ä ALL IMAGES OPTIMIZED (OVERWRITTEN)");
}

run();
