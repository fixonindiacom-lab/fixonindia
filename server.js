const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5173;

// Prevent browser from caching stale builds
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

// Serve static web build files directly from root directory
app.use(express.static(__dirname, {
  etag: false,
  lastModified: false
}));

// SPA Routing catch-all
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 FixOnIndia User Web App running on port ${PORT}`);
});
