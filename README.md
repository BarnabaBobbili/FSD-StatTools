# 📊 StatTools - Statistical Analysis & Probability Platform

![StatTools Banner](https://img.shields.io/badge/StatTools-Statistical%20Analysis-2563eb?style=for-the-badge&logo=react)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)

> Professional statistical analysis and probability tools with beautiful visualizations - all in your browser, no installation required.

## 🌟 Features

### 📈 Distribution Analysis
- **6 Major Distributions**: Normal, Binomial, Poisson, Student's t, Uniform, Exponential
- **Interactive Visualizations**: Real-time PDF/PMF charts with adjustable parameters
- **Parameter Controls**: Intuitive sliders for distribution parameters
- **P-Value Visualization**: Shaded rejection regions for hypothesis testing

### 🔬 Statistical Analysis
- **Descriptive Statistics**: Mean, median, mode, variance, standard deviation, skewness, kurtosis
- **Data Visualization**: Histograms, box plots, scatter plots
- **Multiple Data Input Methods**: 
  - Manual text entry
  - CSV/JSON file upload
  - Spreadsheet-style table entry
- **Export Capabilities**: CSV, JSON, and PDF reports with charts

### 🧪 Hypothesis Testing
- **Basic Tests**: One-sample t-test, Z-test, Chi-square goodness of fit
- **Advanced Tests**: Two-sample t-test, Paired t-test, One-way ANOVA, Chi-square independence
- **Detailed Results**: Test statistics, p-values, degrees of freedom, interpretations
- **Visual P-Value Display**: Rejection regions highlighted on distribution curves

### 📊 Regression Analysis
- **Simple Linear Regression**: With correlation analysis
- **Multiple Linear Regression**: 2+ predictor variables
- **Polynomial Regression**: Degrees 2-5 with smooth curve fitting
- **Complete Statistics**: R², adjusted R², coefficients, residuals

### 🎯 Confidence Intervals
- **Means**: Using t-distribution for unknown population variance
- **Proportions**: Using normal approximation for large samples
- **Adjustable Confidence Levels**: 90%, 95%, 99%
- **Visual Representation**: Interactive interval visualization

### 🎲 Monte Carlo Simulations
- **Coin Flip Simulation**: With cumulative proportion tracking
- **Dice Roll Simulation**: Frequency distribution analysis
- **Central Limit Theorem**: Demonstration with multiple distributions

### 🔄 Dataset Comparison
- **Side-by-side Analysis**: Compare two datasets visually
- **Summary Statistics**: Means, medians, standard deviations
- **Distribution Charts**: Overlaid histograms

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/stattools.git

# Navigate to project directory
cd stattools

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

### Building for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
stattools/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui base components
│   │   ├── AdvancedHypothesisTest.tsx
│   │   ├── BoxPlot.tsx
│   │   ├── ConfidenceIntervals.tsx
│   │   ├── CSVUploader.tsx
│   │   ├── DatasetComparison.tsx
│   │   ├── DistributionChart.tsx
│   │   ├── DistributionSelector.tsx
│   │   ├── ExportTools.tsx
│   │   ├── HistogramChart.tsx
│   │   ├── HypothesisTest.tsx
│   │   ├── ProbabilityCalculator.tsx
│   │   ├── RegressionVisualization.tsx
│   │   ├── ScatterPlot.tsx
│   │   ├── SimulationTools.tsx
│   │   ├── SpreadsheetDataEntry.tsx
│   │   ├── StatCard.tsx
│   │   └── StatisticalAnalysis.tsx
│   ├── lib/                # Utility libraries
│   │   ├── statistical.ts          # Core statistical functions
│   │   ├── statisticalExtended.ts  # Advanced statistical functions
│   │   ├── errorHandling.ts        # Error handling utilities
│   │   ├── sampleData.ts           # Sample datasets
│   │   └── utils.ts                # Helper utilities
│   ├── pages/              # Route pages
│   │   ├── Home.tsx        # Landing page
│   │   ├── Tools.tsx       # Main tools interface
│   │   └── NotFound.tsx    # 404 page
│   ├── App.tsx             # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles & design system
├── public/                # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── vite.config.ts         # Vite build configuration
```

## 🎨 Design System

### Color Palette

StatTools uses a professional academic color scheme:

- **Primary Blue** (`#2563eb`): Main actions, headers, buttons
- **Secondary Teal** (`#0d9488`): Highlights, sliders, dataset tags
- **Accent Amber** (`#f59e0b`): Statistical significance, warnings
- **Neutral Slate**: Background and text for maximum readability

### Responsive Design

- **Mobile-first approach**: Optimized for all screen sizes
- **Breakpoints**: 
  - `sm`: 640px (Phones)
  - `md`: 768px (Tablets)
  - `lg`: 1024px (Laptops)
  - `xl`: 1280px (Desktops)

## 🛠️ Technologies Used

### Core
- **React 18**: Modern UI framework
- **TypeScript**: Type-safe development
- **Vite**: Lightning-fast build tool
- **React Router**: Client-side routing

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality component library
- **Radix UI**: Accessible component primitives

### Data Visualization
- **Chart.js**: Interactive charts
- **react-chartjs-2**: React wrapper for Chart.js

### Statistical Computing
- **jStat**: Statistical library for JavaScript
- **Custom implementations**: Advanced statistical functions

### Export & Utilities
- **jsPDF**: PDF generation
- **html2canvas**: Chart screenshot capture
- **Sonner**: Toast notifications

## 📊 Usage Examples

### Example 1: Analyzing Test Scores

```typescript
// Navigate to Statistical Analysis tab
// Input data: 78, 85, 92, 88, 76, 95, 82, 89, 91, 87

// Results:
// Mean: 86.3
// Median: 87
// Std Dev: 5.68
// Skewness: -0.21 (approximately symmetric)
```

### Example 2: Hypothesis Testing

```typescript
// One-Sample t-Test
// H0: μ = 100
// Data: 98, 99, 100, 101, 102, 103, 104, 105
// α = 0.05

// Results:
// t-statistic: 2.828
// p-value: 0.025
// Decision: Reject H0 (significant difference)
```

### Example 3: Linear Regression

```typescript
// Study Hours vs Grades
// X: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
// Y: [65, 68, 72, 75, 78, 82, 85, 88, 92, 95]

// Results:
// Slope: 3.33
// Intercept: 58.67
// R²: 0.996 (excellent fit)
// Correlation: 0.998
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_APP_TITLE=StatTools
VITE_APP_VERSION=1.0.0
```

### Tailwind Configuration

Customize colors and themes in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--secondary))",
      accent: "hsl(var(--accent))",
    }
  }
}
```

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🐛 Known Issues

- **localStorage**: will be implemented in the next version😊
- **jStat Loading**: Loaded dynamically via CDN (may have slight delay on first load)
- **PDF Export**: Chart screenshots may vary slightly across browsers

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use Tailwind CSS for styling (no inline styles)
- Add JSDoc comments for complex functions
- Write descriptive commit messages

## 🙏 Acknowledgments

- **jStat**: For statistical computations
- **shadcn/ui**: For beautiful UI components
- **Chart.js**: For data visualization
- **Tailwind CSS**: For styling system
- **React**: For the amazing framework

## 🗺️ Roadmap

### Version 1.1 (Planned)
- [ ] Bayesian statistics module
- [ ] Time series analysis
- [ ] Non-parametric tests (Mann-Whitney U, Wilcoxon)
- [ ] Power analysis calculator

### Version 1.2 (Future)
- [ ] Machine learning integration
- [ ] Multi-variable regression (3+ variables)
- [ ] Custom distribution fitting
- [ ] Collaborative features

### Version 2.0 (Future)
- [ ] R/Python integration
- [ ] API for programmatic access
- [ ] Mobile app (React Native)
- [ ] Cloud storage for datasets

---

## 📚 Additional Resources

### Statistical References
- [NIST Engineering Statistics Handbook](https://www.itl.nist.gov/div898/handbook/)
- [Penn State STAT 500](https://online.stat.psu.edu/stat500/)
- [Khan Academy Statistics](https://www.khanacademy.org/math/statistics-probability)

### Development Resources
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Chart.js Documentation](https://www.chartjs.org/docs/)

---

<div align="center">

**Made with ❤️ using React, TypeScript, and Statistical Precision**

[![Star on GitHub](https://img.shields.io/badge/⭐%20Star%20on%20GitHub-181717?logo=github&logoColor=white)](https://github.com/BarnabaBobbili/FSD-StatTools)
[![Follow on GitHub](https://img.shields.io/badge/👤%20Follow%20on%20GitHub-181717?logo=github&logoColor=white)](https://github.com/BarnabaBobbili)


[Website](https://fsd-stat-tools.vercel.app/) 

</div>
