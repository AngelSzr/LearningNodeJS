const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

const folder = process.argv[2] ?? ".";
const ls = async (directory) => {
  let files;
  try {
    files = await fs.readdir(directory);
  } catch (error) {
    console.error(pc.red(`no se leyó el directorio: ${directory}`));
    process.exit(1);
  }
  console.log(pc.white(files));
  const filesPromises = files.map(async (file) => {
    const filePath = path.join(directory, file);
    let stats;
    try {
      stats = await fs.stat(filePath);
    } catch (error) {
      console.error("buu fallaste");
      process.exit(1);
    }
    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return `${fileType} ${file.padEnd(35)} ${fileSize
      .toString()
      .padStart(10)} ${fileModified}`;
  });
  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => console.log(fileInfo));
};

ls(folder);
