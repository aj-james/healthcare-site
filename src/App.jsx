// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div style={styles.app}>
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.navContainer}>
            <h1 style={styles.logo}>Healthcare Justice</h1>
            <nav style={styles.nav}>
              <Link to="/" style={styles.navLink}>Introduction</Link>
              <Link to="/history" style={styles.navLink}>History</Link>
              <Link to="/crisis" style={styles.navLink}>Current Crisis</Link>
              <Link to="/opposition" style={styles.navLink}>Opposition</Link>
              <Link to="/solutions" style={styles.navLink}>Solutions</Link>
              <Link to="/resources" style={styles.navLink}>Sources</Link>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/history" element={<History />} />
          <Route path="/crisis" element={<Crisis />} />
          <Route path="/opposition" element={<Opposition />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>

        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            <p>© 2025 Healthcare Justice Project | English 102 Research</p>
            <p>All data from peer-reviewed sources: OECD, Commonwealth Fund, KFF, CDC</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

// Introduction Page
const Introduction = () => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <h2 style={styles.title}>The Death of Care</h2>
      <p style={styles.subtitle}>How profit motives corrupted American healthcare</p>
    </div>

    <div style={styles.content}>
      <div style={styles.card}>
        <h3>The American Paradox</h3>
        <p>
          <strong>The United States spends more on healthcare than any other nation, yet its outcomes consistently rank among the lowest in the developed world.</strong> In 2023, health expenditure reached approximately $12,914 per person, almost twice the average of the 38 high-income countries (OECD Health at a Glance 2023).
        </p>
      </div>

      <div style={styles.statsGrid}>
        <StatCard value="$12,914" label="Per capita spending" color="#3B82F6" />
        <StatCard value="28M+" label="Uninsured Americans" color="#EF4444" />
        <StatCard value="18%" label="of GDP on healthcare" color="#10B981" />
        <StatCard value="100M" label="With medical debt" color="#8B5CF6" />
      </div>

      <div style={styles.card}>
        <h3>International Comparison</h3>
        <BarChart 
          data={[
            { country: "US", value: 12914 },
            { country: "Germany", value: 8456 },
            { country: "Canada", value: 6857 },
            { country: "UK", value: 5698 },
            { country: "OECD Avg", value: 6987 },
          ]}
        />
      </div>

      <div style={styles.quoteCard}>
        <p>"The failures of the U.S. healthcare system are deliberate and unfair, fueled by greed, racism, and denial, and universal healthcare is the only solution consistent with American values."</p>
        <cite>— AJ James, "The Death of Care"</cite>
      </div>
    </div>
  </div>
);

// History Page
const History = () => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <h2 style={styles.title}>Historical Roots</h2>
      <p style={styles.subtitle}>From WWII policies to structural inequity</p>
    </div>

    <div style={styles.content}>
      <div style={styles.twoColumn}>
        <div>
          <h3>The Employer-Based System</h3>
          <p>Employer-based healthcare developed during World War II, when wage controls led companies to offer insurance instead of salary increases. What started as a temporary solution became the backbone of American healthcare.</p>
        </div>
        <div style={styles.comparisonBox}>
          <div style={{...styles.modelCard, background: '#EFF6FF'}}>
            <h4>🇪🇺 European Model</h4>
            <p>Healthcare as a public good</p>
          </div>
          <div style={{...styles.modelCard, background: '#FEF2F2'}}>
            <h4>🇺🇸 American Model</h4>
            <p>Healthcare as a commodity</p>
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <h3>The Cost of Privatization</h3>
        <Timeline 
          data={[
            { year: "1960", value: "5% of GDP" },
            { year: "1980", value: "9% of GDP" },
            { year: "2000", value: "13% of GDP" },
            { year: "2020", value: "18% of GDP" },
            { year: "2024", value: "19% of GDP" },
          ]}
        />
      </div>
    </div>
  </div>
);

// Current Crisis Page
const Crisis = () => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <h2 style={styles.title}>Current Crisis</h2>
      <p style={styles.subtitle}>Measuring the gap between spending and outcomes</p>
    </div>

    <div style={styles.content}>
      <div style={styles.statsGrid}>
        <StatCard value="8.4%" label="Uninsured rate" color="#3B82F6" />
        <StatCard value="$1,126" label="Avg prescription cost" color="#EF4444" />
        <StatCard value="8%" label="Admin costs (vs 2% OECD)" color="#10B981" />
        <StatCard value="20%" label="Claims denied" color="#8B5CF6" />
      </div>

      <div style={styles.card}>
        <h3>Administrative Waste Comparison</h3>
        <BarChart 
          data={[
            { country: "US", value: 8 },
            { country: "Canada", value: 2 },
            { country: "UK", value: 2 },
            { country: "France", value: 3 },
            { country: "Germany", value: 4 },
          ]}
        />
      </div>

      <ComparisonTable 
        data={[
          { metric: "Infant Mortality", us: "5.4/1000", oecd: "3.8/1000" },
          { metric: "Life Expectancy", us: "76.4 years", oecd: "80.3 years" },
          { metric: "Maternal Mortality", us: "32.9/100k", oecd: "8.4/100k" },
        ]}
      />
    </div>
  </div>
);

// Solutions Page
const Solutions = () => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <h2 style={styles.title}>Solutions</h2>
      <p style={styles.subtitle}>The case for universal healthcare</p>
    </div>

    <div style={styles.content}>
      <div style={styles.card}>
        <h3>Addressing Common Objections</h3>
        <div style={styles.twoColumn}>
          <div>
            <h4>Objections</h4>
            <ul style={styles.list}>
              <li>• Would increase taxes</li>
              <li>• Would stifle innovation</li>
              <li>• Reduces patient choice</li>
            </ul>
          </div>
          <div>
            <h4>Evidence-Based Responses</h4>
            <ul style={styles.list}>
              <li>• Total costs would decrease</li>
              <li>• Universal systems maintain innovation</li>
              <li>• Private insurance restricts choice more</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <h3>International Success Stories</h3>
        <div style={styles.statsGrid}>
          <StatCard value="Germany" label="Ranked #1 in innovation" color="#3B82F6" />
          <StatCard value="Japan" label="Ranked #2 in innovation" color="#10B981" />
          <StatCard value="99-100%" label="Coverage in OECD nations" color="#8B5CF6" />
          <StatCard value="$500B" label="Potential annual savings" color="#F59E0B" />
        </div>
      </div>
    </div>
  </div>
);

// Simple Components
const StatCard = ({ value, label, color }) => (
  <div style={{...styles.statCard, borderLeft: `4px solid ${color}`}}>
    <div style={{...styles.statValue, color}}>{value}</div>
    <div style={styles.statLabel}>{label}</div>
  </div>
);

const BarChart = ({ data }) => {
  const max = Math.max(...data.map(d => d.value));
  
  return (
    <div style={styles.chart}>
      {data.map((item, i) => {
        const width = (item.value / max) * 100;
        const colors = ["#3B82F6", "#EF4444", "#10B981", "#8B5CF6", "#F59E0B"];
        
        return (
          <div key={i} style={styles.barContainer}>
            <div style={styles.barLabel}>{item.country}</div>
            <div style={styles.barBackground}>
              <div style={{
                width: `${width}%`,
                height: '24px',
                background: colors[i % colors.length],
                borderRadius: '4px',
              }} />
            </div>
            <div style={styles.barValue}>{item.value.toLocaleString()}</div>
          </div>
        );
      })}
    </div>
  );
};

const Timeline = ({ data }) => (
  <div style={styles.timeline}>
    {data.map((item, i) => (
      <div key={i} style={styles.timelineItem}>
        <div style={styles.timelineDot} />
        <div style={styles.timelineContent}>
          <strong>{item.year}</strong>
          <div>{item.value}</div>
        </div>
      </div>
    ))}
  </div>
);

const ComparisonTable = ({ data }) => (
  <div style={styles.table}>
    <div style={styles.tableHeader}>
      <div style={styles.tableCell}>Metric</div>
      <div style={styles.tableCell}>United States</div>
      <div style={styles.tableCell}>OECD Average</div>
    </div>
    {data.map((row, i) => (
      <div key={i} style={{
        ...styles.tableRow,
        background: i % 2 === 0 ? '#F9FAFB' : 'white'
      }}>
        <div style={styles.tableCell}>{row.metric}</div>
        <div style={{...styles.tableCell, color: '#DC2626'}}>{row.us}</div>
        <div style={{...styles.tableCell, color: '#059669'}}>{row.oecd}</div>
      </div>
    ))}
  </div>
);

// Styles
const styles = {
  app: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    minHeight: '100vh',
    background: '#f8fafc',
  },
  header: {
    background: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    padding: '1rem 0',
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1e40af',
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
  },
  navLink: {
    color: '#4b5563',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  page: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#6b7280',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  card: {
    background: 'white',
    borderRadius: '8px',
    padding: '2rem',
    marginBottom: '2rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem',
  },
  statCard: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  statValue: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  statLabel: {
    color: '#6b7280',
    fontSize: '0.9rem',
  },
  chart: {
    marginTop: '1rem',
  },
  barContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.75rem',
  },
  barLabel: {
    width: '120px',
    fontWeight: '500',
  },
  barBackground: {
    flex: 1,
    background: '#f3f4f6',
    borderRadius: '4px',
    margin: '0 1rem',
  },
  barValue: {
    width: '80px',
    textAlign: 'right',
    fontWeight: '600',
  },
  quoteCard: {
    background: '#eff6ff',
    borderLeft: '4px solid #3b82f6',
    padding: '2rem',
    borderRadius: '8px',
    marginBottom: '2rem',
  },
  twoColumn: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '2rem',
    marginBottom: '2rem',
  },
  comparisonBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  modelCard: {
    padding: '1.5rem',
    borderRadius: '8px',
  },
  timeline: {
    position: 'relative',
    paddingLeft: '2rem',
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '1.5rem',
  },
  timelineDot: {
    position: 'absolute',
    left: '-0.5rem',
    top: '0.5rem',
    width: '12px',
    height: '12px',
    background: '#3b82f6',
    borderRadius: '50%',
  },
  timelineContent: {
    background: '#f9fafb',
    padding: '1rem',
    borderRadius: '6px',
  },
  table: {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    background: '#f9fafb',
    borderBottom: '1px solid #e5e7eb',
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  },
  tableCell: {
    padding: '1rem',
    borderBottom: '1px solid #e5e7eb',
  },
  list: {
    paddingLeft: '1.5rem',
    color: '#4b5563',
  },
  footer: {
    background: '#1f2937',
    color: 'white',
    padding: '2rem',
    marginTop: '3rem',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
};

// Stub components for other pages
const Opposition = () => <div style={styles.page}><h2>Opposition</h2></div>;
const Resources = () => <div style={styles.page}><h2>Sources & Works Cited</h2></div>;

export default App;
