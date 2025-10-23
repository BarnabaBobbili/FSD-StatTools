/**
 * StatTools Backend Server
 * Simple Node.js/Express backend for statistical calculations and data processing
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// ============================================
// ROUTES
// ============================================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Get server info
app.get('/api/info', (req, res) => {
  res.json({
    name: 'StatTools Backend',
    version: '1.0.0',
    description: 'Statistical analysis and probability tools backend',
    endpoints: [
      'GET /api/health - Health check',
      'GET /api/info - Server information',
      'POST /api/calculate/mean - Calculate mean',
      'POST /api/calculate/stats - Calculate descriptive statistics',
      'POST /api/save-data - Save dataset',
      'GET /api/datasets - Get saved datasets'
    ]
  });
});

// Calculate mean
app.post('/api/calculate/mean', (req, res) => {
  try {
    const { data } = req.body;
    
    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ error: 'Invalid data: must be a non-empty array' });
    }
    
    const mean = data.reduce((sum, val) => sum + val, 0) / data.length;
    
    res.json({
      mean,
      count: data.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Calculate comprehensive statistics
app.post('/api/calculate/stats', (req, res) => {
  try {
    const { data } = req.body;
    
    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({ error: 'Invalid data: must be a non-empty array' });
    }
    
    // Sort data for median calculation
    const sorted = [...data].sort((a, b) => a - b);
    
    // Calculate statistics
    const mean = data.reduce((sum, val) => sum + val, 0) / data.length;
    const median = sorted.length % 2 === 0
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      : sorted[Math.floor(sorted.length / 2)];
    
    const variance = data.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / (data.length - 1);
    const std = Math.sqrt(variance);
    
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    
    res.json({
      mean,
      median,
      std,
      variance,
      min,
      max,
      range,
      count: data.length,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// In-memory storage for datasets (for demonstration)
let datasets = [];
let datasetIdCounter = 1;

// Save a dataset
app.post('/api/save-data', (req, res) => {
  try {
    const { name, data, description } = req.body;
    
    if (!name || !Array.isArray(data)) {
      return res.status(400).json({ error: 'Invalid request: name and data array required' });
    }
    
    const dataset = {
      id: datasetIdCounter++,
      name,
      data,
      description: description || '',
      createdAt: new Date().toISOString(),
      count: data.length
    };
    
    datasets.push(dataset);
    
    res.json({
      message: 'Dataset saved successfully',
      dataset
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all saved datasets
app.get('/api/datasets', (req, res) => {
  res.json({
    datasets,
    count: datasets.length
  });
});

// Get a specific dataset by ID
app.get('/api/datasets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const dataset = datasets.find(d => d.id === id);
  
  if (!dataset) {
    return res.status(404).json({ error: 'Dataset not found' });
  }
  
  res.json(dataset);
});

// Delete a dataset
app.delete('/api/datasets/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = datasets.findIndex(d => d.id === id);
  
  if (index === -1) {
    return res.status(404).json({ error: 'Dataset not found' });
  }
  
  const deleted = datasets.splice(index, 1)[0];
  
  res.json({
    message: 'Dataset deleted successfully',
    dataset: deleted
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    path: req.path
  });
});

// Start server
app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log(`🚀 StatTools Backend Server`);
  console.log(`📊 Running on https://fsd-stattools.onrender.com:${PORT}`);
  console.log(`📝 API Docs: https://fsd-stattools.onrender.com:${PORT}/api/info`);
  console.log(`❤️  Health Check: https://fsd-stattools.onrender.com:${PORT}/api/health`);
  console.log('='.repeat(50));
});

module.exports = app;