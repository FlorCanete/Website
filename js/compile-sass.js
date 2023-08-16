const sass = require('sass');
const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, 'dist');

fs.readdirSync(sourcePath).forEach((file) => {
  if (file.endsWith('.scss')) {
    const inputFile = path.join(sourcePath, file);
    const outputFile = path.join(outputPath, file.replace('.scss', '.css'));

    const result = sass.renderSync({
      file: inputFile,
      outputStyle: 'compressed', // Opciones: 'expanded', 'nested', 'compact', 'compressed'
    });

    fs.writeFileSync(outputFile, result.css);
    console.log(`Compiled: ${inputFile} -> ${outputFile}`);
  }
});