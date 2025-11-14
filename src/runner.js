const { getNewsData } = require('./extractors/news_parser');
const { exportData } = require('./outputs/exporter');

async function runScraper() {
try {
const newsData = await getNewsData('bitcoin');
await exportData(newsData);
console.log('Scraping and export complete.');
} catch (err) {
console.error('Error during scraping:', err);
}
}

runScraper();