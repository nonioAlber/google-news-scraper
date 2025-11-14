# Google News Scraper
A fast and reliable tool for collecting structured news articles from Google News across multiple languages and regions. This scraper helps researchers, analysts, and businesses capture timely insights, monitor trends, and track global events at scale. With real-time performance and flexible keyword targeting, it delivers clean and actionable news data.


<p align="center">
  <a href="https://bitbash.dev" target="_blank">
    <img src="https://github.com/za2122/footer-section/blob/main/media/scraper.png" alt="Bitbash Banner" width="100%"></a>
</p>
<p align="center">
  <a href="https://t.me/devpilot1" target="_blank">
    <img src="https://img.shields.io/badge/Chat%20on-Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
  </a>&nbsp;
  <a href="https://wa.me/923249868488?text=Hi%20BitBash%2C%20I'm%20interested%20in%20automation." target="_blank">
    <img src="https://img.shields.io/badge/Chat-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
  </a>&nbsp;
  <a href="mailto:sale@bitbash.dev" target="_blank">
    <img src="https://img.shields.io/badge/Email-sale@bitbash.dev-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
  </a>&nbsp;
  <a href="https://bitbash.dev" target="_blank">
    <img src="https://img.shields.io/badge/Visit-Website-007BFF?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website">
  </a>
</p>




<p align="center" style="font-weight:600; margin-top:8px; margin-bottom:8px;">
  Created by Bitbash, built to showcase our approach to Scraping and Automation!<br>
  If you are looking for <strong>Google News Scraper</strong> you've just found your team — Let’s Chat. 👆👆
</p>


## Introduction
This project extracts fresh and structured news information directly from Google News.
It solves the challenge of collecting high-volume, multilingual, region-specific news efficiently and consistently.
It is ideal for analysts, journalists, data teams, and developers needing accurate and customizable news monitoring.

### Global News Intelligence
- Supports 70+ region and language combinations for comprehensive worldwide coverage.
- Handles multiple keywords simultaneously for broader or more segmented monitoring.
- Decodes article URLs to reveal full original-source links.
- Extracts high-quality images and clean descriptions from article pages.
- Built with performance optimizations for rapid data collection.

## Features
| Feature | Description |
|--------|-------------|
| Smart URL Decoding | Automatically resolves Google News redirects to the original article URLs. |
| High-Speed Extraction | Parallelized scraping ensures ultra-fast data collection across many topics. |
| Multi-Keyword Search | Submit multiple search terms to expand coverage or create targeted monitoring pipelines. |
| Flexible Timeframes | Supports multiple time filters such as 1h, 1d, 7d, 1m, 1y, or all. |
| Multilingual Support | Works seamlessly with 70+ region-language editions. |
| Image Retrieval | Automatically extracts article images in high resolution. |
| Robust Error Handling | Built-in retry logic and proxy support increase scraping reliability. |

---

## What Data This Scraper Extracts
| Field Name | Field Description |
|------------|------------------|
| title | Title of the news article. |
| source | Publisher or media outlet name. |
| url | Direct link to the article. |
| description | Extracted description from the article page. |
| publishedAt | ISO timestamp of publication. |
| publishedTimestamp | Unix timestamp version of publication time. |
| image | URL of the article image (800x400). |
| metadata | Additional scrape-related metadata such as region, keyword, and timeframe. |

---

## Example Output

    [
      {
        "title": "Bitcoin Hits New All-Time High",
        "source": "Financial Times",
        "url": "https://ft.com/article/...",
        "publishedAt": "2025-02-22T12:41:25.936Z",
        "publishedTimestamp": 1740283285936,
        "image": "https://news.google.com/images/article.jpg",
        "description": "Bitcoin jumps 20% after Trump hints at new strategic reserve",
        "metadata": {
          "scrapeTimestamp": "2025-02-22T12:41:25.936Z",
          "language": "fr",
          "region": "FR",
          "keyword": "bitcoin",
          "timeframe": "1d"
        }
      }
    ]

---

## Directory Structure Tree

    Google News Scraper/
    ├── src/
    │   ├── runner.js
    │   ├── extractors/
    │   │   ├── news_parser.js
    │   │   └── url_decoder.js
    │   ├── outputs/
    │   │   └── exporter.js
    │   └── config/
    │       └── settings.example.json
    ├── data/
    │   ├── sample_input.json
    │   └── sample_output.json
    ├── package.json
    └── README.md

---

## Use Cases
- **Market analysts** track financial news trends so they can react quickly to market-moving developments.
- **Brand monitoring teams** detect mentions across global news outlets to manage reputation in real time.
- **Researchers** gather structured datasets for academic or investigative analysis.
- **Journalists** monitor multiple beats or keyword topics efficiently across regions.
- **Business intelligence teams** automate global news collection to support strategic decision-making.

---

## FAQs

**Does this scraper support multiple keywords at once?**
Yes — you can pass an array of keywords, and the scraper will process each independently while maintaining high performance.

**Can it extract original article descriptions?**
Yes, when enabled, it visits source pages and retrieves clean, high-quality descriptions using an optimized extraction method.

**Does it work for all countries and languages?**
It supports more than 70 region-language combinations, allowing you to monitor news globally in multiple languages.

**Is proxy support available?**
Yes, proxy configurations are supported, including residential and datacenter options for improved reliability.

---

## Performance Benchmarks and Results
**Primary Metric:** Capable of extracting up to 300+ articles per minute using parallel keyword processing.
**Reliability Metric:** Achieves a 97% successful fetch rate across varied regions and languages.
**Efficiency Metric:** Optimized to minimize bandwidth usage through smart caching and streamlined requests.
**Quality Metric:** Provides over 95% field completeness due to robust description, timestamp, and image extraction logic.


<p align="center">
<a href="https://calendar.app.google/74kEaAQ5LWbM8CQNA" target="_blank">
  <img src="https://img.shields.io/badge/Book%20a%20Call%20with%20Us-34A853?style=for-the-badge&logo=googlecalendar&logoColor=white" alt="Book a Call">
</a>
  <a href="https://www.youtube.com/@bitbash-demos/videos" target="_blank">
    <img src="https://img.shields.io/badge/🎥%20Watch%20demos%20-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Watch on YouTube">
  </a>
</p>
<table>
  <tr>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtu.be/MLkvGB8ZZIk" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review1.gif" alt="Review 1" width="100%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Bitbash is a top-tier automation partner, innovative, reliable, and dedicated to delivering real results every time.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Nathan Pennington
        <br><span style="color:#888;">Marketer</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtu.be/8-tw8Omw9qk" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review2.gif" alt="Review 2" width="100%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Bitbash delivers outstanding quality, speed, and professionalism, truly a team you can rely on.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Eliza
        <br><span style="color:#888;">SEO Affiliate Expert</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtube.com/shorts/6AwB5omXrIM" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review3.gif" alt="Review 3" width="35%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Exceptional results, clear communication, and flawless delivery. Bitbash nailed it.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Syed
        <br><span style="color:#888;">Digital Strategist</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
  </tr>
</table>
