# 📊 StatTools - Statistical Analysis & Probability Platform

![StatTools Banner](https://img.shields.io/badge/StatTools-Statistical%20Analysis-2563eb?style=for-the-badge&logo=react)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)

> Professional statistical analysis and probability tools with beautiful visualizations — all in your browser, no installation required.

---

## 🌟 Features

### 📈 Distribution Analysis
- **6 Major Distributions**: Normal, Binomial, Poisson, Student’s t, Uniform, Exponential  
- **Interactive Visualizations**: Real-time PDF/PMF charts with adjustable parameters  
- **Parameter Controls**: Intuitive sliders for distribution parameters  
- **P-Value Visualization**: Shaded rejection regions for hypothesis testing  

### 🔬 Statistical Analysis
- **Descriptive Statistics**: Mean, median, mode, variance, standard deviation, skewness, kurtosis  
- **Data Visualization**: Histograms, box plots, scatter plots  
- **Multiple Data Input Methods**: Manual text entry, CSV/JSON upload, or spreadsheet-style entry  
- **Export Capabilities**: CSV, JSON, and PDF reports  

### 🧪 Hypothesis Testing
- **Basic Tests**: One-sample t-test, Z-test, Chi-square goodness of fit  
- **Advanced Tests**: Two-sample t-test, Paired t-test, One-way ANOVA, Chi-square independence  
- **Detailed Results**: Test statistics, p-values, and interpretations  
- **Visual P-Value Display**: Highlighted rejection regions  

### 📊 Regression Analysis
- **Simple, Multiple, and Polynomial Regression**  
- **Statistics**: R², adjusted R², coefficients, residuals, correlation  

### 🎯 Confidence Intervals
- **Means and Proportions** with adjustable confidence levels  
- **Visual Representation**: Interactive visualization  

### 🎲 Monte Carlo Simulations
- **Coin Flip, Dice Roll, and CLT demonstrations**  

### 🔄 Dataset Comparison
- **Side-by-side Analysis** with overlaid histograms and summary statistics  

---

## 🚀 Quick Start

### Folder Structure

```
stattools/
├── backend/             # Node.js Express API
└── frontend/            # React + Vite Web App
```

---

## ⚙️ Frontend Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/stattools.git

# Navigate to frontend
cd stattools/frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Your frontend will run on `http://localhost:8080`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## ⚙️ Backend Setup

### Prerequisites
- Node.js 14+  
- npm or yarn

### Installation

```bash
cd stattools/backend
npm install
npm start
```

For development:
```bash
npm run dev
```

Server runs at `http://localhost:3001`.

---

## 📁 Complete Project Structure

```
stattools/
├── backend/
│   ├── server.js           # Main backend file
│   ├── package.json
│   ├── .env
│   └── README.md
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── lib/
    │   ├── pages/
    │   ├── App.tsx
    │   └── main.tsx
    ├── public/
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    ├── vite.config.ts
    └── README.md
```

---

## 📡 Backend API Endpoints

### Health & Info
- `GET /api/health` → Server health  
- `GET /api/info` → Server info  

### Statistical Calculations
- `POST /api/calculate/mean`
  ```json
  { "data": [1, 2, 3, 4, 5] }
  ```

- `POST /api/calculate/stats`
  ```json
  { "data": [1, 2, 3, 4, 5] }
  ```

### Dataset Management
- `POST /api/save-data` → Save dataset  
- `GET /api/datasets` → Get all datasets  
- `GET /api/datasets/:id` → Get dataset by ID  
- `DELETE /api/datasets/:id` → Delete dataset  

---

## 🔗 Connecting Frontend & Backend

Example integration:
```javascript
const calculateStats = async (data) => {
  const response = await fetch('http://localhost:3001/api/calculate/stats', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  });
  return await response.json();
};
```

---

## 🔧 Configuration

### Frontend `.env`
```env
VITE_APP_TITLE=StatTools
VITE_APP_VERSION=1.0.0
```

### Backend `.env`
```env
PORT=3001
NODE_ENV=development
```

---

## 🛠️ Technologies Used

### Frontend
- React 18 + TypeScript  
- Vite + Tailwind CSS + shadcn/ui + Radix UI  
- Chart.js + react-chartjs-2  
- jStat, jsPDF, html2canvas  

### Backend
- Node.js + Express  
- RESTful APIs  
- JSON parsing, modular routes  

---

## 🧪 Testing the API

Using curl:

```bash
curl http://localhost:3001/api/health
curl -X POST http://localhost:3001/api/calculate/stats   -H "Content-Type: application/json"   -d '{"data": [1, 2, 3, 4, 5]}'
```

---

## 📝 Future Enhancements

- [ ] MongoDB or PostgreSQL integration  
- [ ] User authentication  
- [ ] File uploads  
- [ ] Real-time WebSocket updates  
- [ ] Swagger documentation  
- [ ] Machine learning and time-series analysis  

---

## 🤝 Contributing

1. Fork the repo  
2. Create a new branch  
3. Commit changes  
4. Push and open a PR  

### Code Style
- TypeScript for all new code  
- ESLint for linting  
- Tailwind CSS for styling  
- Descriptive commit messages  

---

## 📄 License

MIT License — see the root project for details.

---

<div align="center">

**Made with ❤️ using React, TypeScript, Node.js & Statistical Precision**

[![Star on GitHub](https://img.shields.io/badge/⭐%20Star%20on%20GitHub-181717?logo=github)](https://github.com/BarnabaBobbili/FSD-StatTools)  
[![Follow on GitHub](https://img.shields.io/badge/👤%20Follow%20on%20GitHub-181717?logo=github)](https://github.com/BarnabaBobbili)  
[Website](https://fsd-stat-tools.vercel.app/)

</div>
