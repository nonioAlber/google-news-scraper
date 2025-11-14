const fs = require('fs');
const path = require('path');

async function exportData(newsData) {
const outputPath = path.resolve(__dirname, '../../data/sample_output.json');
fs.writeFileSync(outputPath, JSON.stringify(newsData, null, 2), 'utf8');
}

module.exports = { exportData };