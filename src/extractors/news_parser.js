const axios = require('axios');

async function getNewsData(keyword) {
try {
// Simulating news fetch (in real case, you would use a real API or scraping logic)
const response = await axios.get(\`https://newsapi.org/v2/everything?q=\${keyword}&apiKey=your_api_key\`);
return response.data.articles.map(article => ({
title: article.title,
source: article.source.name,
url: article.url,
description: article.description,
publishedAt: article.publishedAt,
image: article.urlToImage,
}));
} catch (err) {
throw new Error('Failed to fetch news data: ' + err.message);
}
}

module.exports = { getNewsData };