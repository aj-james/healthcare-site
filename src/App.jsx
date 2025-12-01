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
              <Link to="/repercussions" style={styles.navLink}>Repercussions</Link>
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
          <Route path="/repercussions" element={<Repercussions />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>

        <footer style={styles.footer}>
          <div style={styles.footerContent}>
            <p>© 2025 Healthcare Justice Project | English 102 Research</p>
            <p>AJ James | Professor Warner | November 8, 2025</p>
            <p>All data from peer-reviewed sources: OECD, Commonwealth Fund, KFF, CDC</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

// ==============================================
// INTRODUCTION PAGE
// ==============================================
const Introduction = () => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <h2 style={styles.title}>The Death of Care</h2>
      <p style={styles.subtitle}>The United States spends more on healthcare than any other nation, yet its outcomes consistently rank among the lowest in the developed world</p>
    </div>

    <div style={styles.content}>
      <div style={styles.card}>
        <h3>The American Healthcare Paradox</h3>
        <p>
          In 2023, health expenditure reached approximately $12,914 per person, almost twice the average of the 38 high-income countries (OECD Health at a Glance 2023). Despite this, millions of Americans remain uninsured or underinsured, and medical debt drives many into bankruptcy. This gap between cost and care suggests a structural flaw.
        </p>
        <p>
          <strong>The failures of the U.S. healthcare system are deliberate and unfair, fueled by greed, racism, and denial, and universal healthcare is the only solution consistent with American values.</strong>
        </p>
      </div>

      <div style={styles.statsGrid}>
        <StatCard value="$12,914" label="Per capita spending" color="#3B82F6" source="OECD 2023" />
        <StatCard value="28M+" label="Uninsured Americans" color="#EF4444" source="Health System Tracker 2023" />
        <StatCard value="18%" label="of GDP on healthcare" color="#10B981" source="CMS 2024" />
        <StatCard value="100M" label="With medical debt" color="#8B5CF6" source="KFF 2023" />
      </div>

      <div style={styles.card}>
        <h3>International Comparison: Spending vs. Outcomes</h3>
        <BarChart 
          title="Health Expenditure Per Capita (2023)"
          data={[
            { label: "United States", value: 12914 },
            { label: "Germany", value: 8456 },
            { label: "Canada", value: 6857 },
            { label: "United Kingdom", value: 5698 },
            { label: "OECD Average", value: 6987 },
          ]}
        />
        <p style={styles.caption}>Source: OECD Health at a Glance 2023</p>
      </div>

      <div style={styles.quoteCard}>
        <p>"The United States spends roughly 18% of GDP on healthcare, compared to an OECD average between 9 and 11 percent, yet ranks last in access, equity, and outcomes among comparable economies" (Commonwealth Fund).</p>
      </div>

      <div style={styles.card}>
        <h3>Video Analysis: The American Healthcare Paradox</h3>
        <VideoEmbed 
          url="https://www.youtube.com/embed/pZHiIGFLN8Y"
          title="The American Healthcare Paradox Explained"
        />
      </div>

      <ComparisonTable 
        title="Key Performance Indicators"
        data={[
          { metric: "Infant Mortality Rate", us: "5.4 per 1,000", oecd: "3.8 per 1,000" },
          { metric: "Life Expectancy", us: "76.4 years", oecd: "80.3 years" },
          { metric: "Administrative Costs", us: "8% of spending", oecd: "2-3% of spending" },
          { metric: "Uninsured Population", us: "8.4%", oecd: "<1%" },
        ]}
      />
    </div>
  </div>
);

// ==============================================
// HISTORY PAGE
// ==============================================
const History = () => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <h2 style={styles.title}>Historical Roots</h2>
      <p style={styles.subtitle}>From wartime policies to structural inequity</p>
    </div>

    <div style={styles.content}>
      <div style={styles.card}>
        <h3>The Origins of Employer-Based Healthcare</h3>
        <p>
          Employer-based and privatized healthcare developed during World War II, when wage controls led companies to offer insurance instead of salary increases. According to the Kaiser Family Foundation, "employers sought non-wage forms of compensation during wartime restrictions, leading to the widespread adoption of job-based health coverage."
        </p>
        <p>
          What started as a temporary solution became the backbone of American healthcare after the World Wars. In contrast, other industrialized nations such as the United Kingdom, France, and Canada built universal systems that guaranteed coverage to all citizens as a matter of public rights (OECD Health at a Glance).
        </p>
      </div>

      <div style={styles.card}>
        <h3>Two Divergent Philosophies</h3>
        <div style={styles.comparisonGrid}>
          <div style={{...styles.modelCard, background: '#EFF6FF'}}>
            <h4 style={{color: '#1D4ED8'}}>🇪🇺 European Model</h4>
            <p><strong>Healthcare as a public good</strong></p>
            <p>Universal coverage as a human right</p>
            <p>Government-funded and regulated</p>
            <p>Focus on preventive care</p>
          </div>
          <div style={{...styles.modelCard, background: '#FEF2F2'}}>
            <h4 style={{color: '#DC2626'}}>🇺🇸 American Model</h4>
            <p><strong>Healthcare as a private commodity</strong></p>
            <p>Access based on employment and wealth</p>
            <p>Market-driven with profit motives</p>
            <p>Focus on treatment over prevention</p>
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <h3>The Rising Cost of Healthcare (1960-2024)</h3>
        <BarChart 
          title="Healthcare Spending as Percentage of GDP"
          data={[
            { label: "1960", value: 5 },
            { label: "1980", value: 9 },
            { label: "2000", value: 13 },
            { label: "2020", value: 18 },
            { label: "2024", value: 19 },
          ]}
        />
        <p style={styles.caption}>Source: Centers for Medicare and Medicaid Services</p>
        <p>
          Health spending rose from 5 percent of GDP in 1960 to over 18 percent by 2024, reflecting a massive transfer of wealth into the medical industry.
        </p>
      </div>

      <div style={{...styles.card, background: '#FEF2F2', borderLeft: '4px solid #DC2626'}}>
        <h3 style={{color: '#DC2626'}}>Structural Racism in Healthcare</h3>
        <p>
          "The racial inequities that marked mid-century America were built directly into this system. Segregated hospitals, discriminatory employment policies, and unequal access to insurance left Black and Indigenous communities disproportionately excluded from medical care" (CDC National Vital Statistics).
        </p>
        <div style={styles.statsGrid}>
          <StatCard value="3x higher" label="Black maternal mortality" color="#DC2626" source="CDC 2023" />
          <StatCard value="2x more likely" label="Uninsured for Black Americans" color="#DC2626" />
        </div>
      </div>

      <Timeline 
        title="Historical Timeline of U.S. Healthcare"
        items={[
          { year: "1930s–1940s", event: "WWII Wage Controls", description: "Employers offer health insurance as alternative to raises" },
          { year: "1965", event: "Medicare & Medicaid", description: "Public programs established, but many excluded" },
          { year: "1990s–2000s", event: "Managed Care & Consolidation", description: "Rise of HMOs, insurance bureaucracy expands" },
          { year: "2010", event: "Affordable Care Act", description: "Expanded coverage but kept private system" },
          { year: "2023", event: "Record Spending, Poor Outcomes", description: "$12,914 per person, worst outcomes among peers" },
        ]}
      />
    </div>
  </div>
);

// ==============================================
// CURRENT CRISIS PAGE
// ==============================================
const Crisis = () => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <h2 style={styles.title}>Current Crisis</h2>
      <p style={styles.subtitle}>Measuring the gap between spending and outcomes</p>
    </div>

    <div style={styles.content}>
      <div style={styles.card}>
        <h3>The Scale of the Problem</h3>
        <p>
          Nearly one in ten Americans lives without health insurance, and an estimated 100 million people carry medical debt (Health System Tracker 2023). In contrast, almost all OECD nations achieve population coverage rates near 100 percent (OECD Health at a Glance).
        </p>
        <p>
          The results are clear. The United States has a higher infant mortality and lower life expectancy than its peers, despite unparalleled technological advancement.
        </p>
      </div>

      <div style={styles.statsGrid}>
        <StatCard value="8.4%" label="Uninsured Americans" color="#3B82F6" source="KFF 2023" />
        <StatCard value="100M" label="With medical debt" color="#EF4444" source="Health System Tracker" />
        <StatCard value="$1,126" label="Avg prescription cost" color="#10B981" source="OECD 2023" />
        <StatCard value="20%" label="Claims denied" color="#8B5CF6" source="Health System Tracker" />
      </div>

      <div style={styles.card}>
        <h3>Administrative Waste Comparison</h3>
        <BarChart 
          title="Administrative Costs as Percentage of Healthcare Spending"
          data={[
            { label: "United States", value: 8 },
            { label: "Canada", value: 2 },
            { label: "United Kingdom", value: 2 },
            { label: "France", value: 3 },
            { label: "Germany", value: 4 },
          ]}
        />
        <p style={styles.caption}>Source: OECD Health at a Glance 2023</p>
        <p>
          Administrative inefficiency compounds the problem: roughly 8 percent of total U.S. health spending goes toward administrative costs, compared with just 2 percent in Canada.
        </p>
      </div>

      <div style={styles.quoteCard}>
        <p>"In this structure, coverage complexity often functions as control rather than care. Denials are not rare administrative mistakes; they are systemic features of private insurance designed to contain costs" (Johns Hopkins Hospital Debt Report).</p>
      </div>

      <div style={styles.card}>
        <h3>Video Analysis: Why American Healthcare Costs So Much</h3>
        <VideoEmbed 
          url="https://www.youtube.com/embed/u9x4cRWqPPM"
          title="The High Cost of American Healthcare"
        />
      </div>

      <ComparisonTable 
        title="Health Outcomes Comparison"
        data={[
          { metric: "Infant Mortality Rate", us: "5.4 per 1,000", oecd: "3.8 per 1,000" },
          { metric: "Life Expectancy", us: "76.4 years", oecd: "80.3 years" },
          { metric: "Maternal Mortality", us: "32.9 per 100,000", oecd: "8.4 per 100,000" },
          { metric: "Avoidable Deaths", us: "112 per 100,000", oecd: "72 per 100,000" },
          { metric: "Prescription Drug Costs", us: "$1,126 average", oecd: "$563 average" },
        ]}
      />
    </div>
  </div>
);

// ==============================================
// OPPOSITION PAGE
// ==============================================
const Opposition = () => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <h2 style={styles.title}>Opposition to Reform</h2>
      <p style={styles.subtitle}>Corporate power and ideological resistance</p>
    </div>

    <div style={styles.content}>
      <div style={styles.card}>
        <h3>The Forces Against Change</h3>
        <p>
          Powerful industries and political alliances have worked consistently to prevent the adoption of a single-payer or universal healthcare system. A 2020 policy analysis identifies insurers, hospital systems, and pharmaceutical firms as "the major sources of opposition," noting that they coordinate through coalitions such as the Partnership for America's Health Care Future (PAHCF) to shape legislation and public opinion (NBER Working Paper No. 30982).
        </p>
      </div>

      <div style={styles.statsGrid}>
        <StatCard value="$143M" label="Lobbying in 2018" color="#DC2626" source="Commonwealth Fund" />
        <StatCard value="3 Major Industries" label="Insurers, hospitals, pharma" color="#DC2626" />
        <StatCard value="PAHCF" label="Coalition against reform" color="#DC2626" />
        <StatCard value="2018" label="Formation of opposition coalition" color="#DC2626" />
      </div>

      <div style={styles.card}>
        <h3>Ideological Resistance</h3>
        <p>
          Scholars argue that American political culture equates healthcare with market freedom rather than social equity. "The belief that health care should remain a private commodity has become a defining feature of American exceptionalism in public policy" (OECD). This perspective fuels fears of "socialized medicine" and fosters divisions along class and racial lines.
        </p>
        <p>
          A 2022 brief from the American Public Health Association concludes that "single-payer remains the most efficient and equitable model, but implementation faces significant political barriers" (APHA Policy Statement).
        </p>
      </div>

      <div style={{...styles.card, background: '#FEF3C7'}}>
        <h3>Specific Examples of Resistance</h3>
        <div style={styles.exampleGrid}>
          <div style={styles.exampleCard}>
            <h4>Union Opposition in New York</h4>
            <p>"Several New York City municipal unions opposed the proposed New York Health Act on grounds that it could undermine existing health plans" (Health Policy Review).</p>
          </div>
          <div style={styles.exampleCard}>
            <h4>Charity Care Failures</h4>
            <p>"Nonprofit hospitals have introduced charity care programs, yet investigative reports reveal that many still sue patients for unpaid bills" (Johns Hopkins University).</p>
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <h3>The Partnership for America's Health Care Future</h3>
        <p>
          The formation of the Partnership for America's Health Care Future in 2018 epitomized the corporate coordination against universal healthcare. Its members, major insurers, hospital associations, and pharmaceutical firms, framed single-payer reform as "a threat to patient choice and economic stability," a message designed to mobilize both policymakers and the public (PAHCF Press Release).
        </p>
      </div>
    </div>
  </div>
);

// ==============================================
// REPERCUSSIONS PAGE
// ==============================================
const Repercussions = () => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <h2 style={styles.title}>Repercussions</h2>
      <p style={styles.subtitle}>Human and economic consequences of a broken system</p>
    </div>

    <div style={styles.content}>
      <div style={styles.card}>
        <h3>The Burden on Americans</h3>
        <p>
          Medical debt remains the leading cause of personal bankruptcy in the United States, cited in two-thirds of all filings (NBER). Chronic illness and delayed treatment perpetuate poverty and reduce national productivity. The moral cost is equally profound: a society that normalizes preventable suffering erodes its own democratic legitimacy.
        </p>
      </div>

      <div style={styles.statsGrid}>
        <StatCard value="66%" label="Medical bankruptcies" color="#DC2626" source="NBER 2023" />
        <StatCard value="29%" label="Delay care due to cost" color="#F59E0B" source="Commonwealth Fund" />
        <StatCard value="18%" label="Skip medications due to cost" color="#DC2626" source="KFF 2023" />
        <StatCard value="2x more likely" label="Lower-income avoid care" color="#DC2626" source="Commonwealth Fund" />
      </div>

      <div style={styles.quoteCard}>
        <p>"Americans in lower income brackets are more than twice as likely to forgo needed care due to cost as those in other high-income countries" (Commonwealth Fund).</p>
      </div>

      <div style={styles.card}>
        <h3>The Coverage Illusion</h3>
        <p>
          Nearly one in five insured adults report being denied a medical service by their insurer in the past year (Health System Tracker). OECD nations provide automatic coverage for basic care; the U.S. system often denies or delays treatment through pre-authorization barriers and coverage disputes.
        </p>
      </div>

      <ComparisonTable 
        title="Access to Care Comparison"
        data={[
          { metric: "Same-Day Doctor Access", us: "51%", oecd: "76%" },
          { metric: "Cost-Related Care Avoidance", us: "33%", oecd: "9%" },
          { metric: "Out-of-Pocket Costs", us: "$1,225", oecd: "$640" },
          { metric: "Insurance Denials", us: "20%", oecd: "<5%" },
        ]}
      />

      <div style={styles.card}>
        <h3>The Failure of Half-Measures</h3>
        <p>
          Expanding Medicaid eligibility, forgiving medical debt, or capping insulin prices are all valuable interventions, but they remain temporary palliatives. Nonprofit hospitals, for instance, have introduced charity care programs, yet investigative reports reveal that many still sue patients for unpaid bills (Johns Hopkins University).
        </p>
        <p>
          While these incremental reforms alleviate immediate hardship, they preserve the structural flaws of a multi-payer system. Access without affordability is still denial. As one report notes, "piecemeal solutions comfort the privileged while leaving systemic inequities untouched" (Commonwealth Fund).
        </p>
      </div>
    </div>
  </div>
);

// ==============================================
// SOLUTIONS PAGE
// ==============================================
const Solutions = () => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <h2 style={styles.title}>Solutions</h2>
      <p style={styles.subtitle}>Universal healthcare as the only moral and practical solution</p>
    </div>

    <div style={styles.content}>
      <div style={styles.card}>
        <h3>Addressing Common Objections</h3>
        <div style={styles.objectionsGrid}>
          <div style={{...styles.objectionCard, borderColor: '#DC2626'}}>
            <h4 style={{color: '#DC2626'}}>Objections</h4>
            <ul style={styles.list}>
              <li>Would increase taxes and government spending</li>
              <li>Would stifle medical innovation</li>
              <li>Reduces patient choice and freedom</li>
              <li>Too politically difficult to implement</li>
            </ul>
          </div>
          <div style={{...styles.objectionCard, borderColor: '#10B981'}}>
            <h4 style={{color: '#10B981'}}>Evidence-Based Responses</h4>
            <ul style={styles.list}>
              <li>Total costs would decrease as administrative overhead drops</li>
              <li>OECD data shows universal systems maintain robust innovation</li>
              <li>Private insurance often restricts choice more than universal systems</li>
              <li>Medicare expansion shows phased approaches can succeed</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={styles.card}>
        <h3>The Economic Case for Universal Care</h3>
        <p>
          A single-payer or universal healthcare model offers the most coherent solution for combining efficiency, equity, and accountability. Under such a system, administrative waste would shrink dramatically: studies estimate that eliminating redundant billing and insurance overhead could redirect more than $500 billion annually toward direct patient care (CMS).
        </p>
        <BarChart 
          title="Projected Annual Savings with Universal Healthcare (Billions USD)"
          data={[
            { label: "Admin Waste", value: 500 },
            { label: "Drug Prices", value: 150 },
            { label: "Preventive Care", value: 200 },
            { label: "Total Annual", value: 850 },
          ]}
        />
      </div>

      <div style={styles.card}>
        <h3>International Success Stories</h3>
        <p>
          Evidence from other OECD nations disproves the argument that universal systems stifle innovation. Germany, Japan, and Sweden all maintain robust biotech and pharmaceutical industries while guaranteeing universal access. The OECD's 2023 innovation index ranks Germany and Japan above the U.S. in medical technology development despite their public financing models (World Index of Healthcare Innovation).
        </p>
      </div>

      <ComparisonTable 
        title="Universal Healthcare Models in Practice"
        data={[
          { metric: "Innovation Ranking", us: "3rd", oecd: "Germany 1st, Japan 2nd" },
          { metric: "Coverage Rate", us: "90%", oecd: "99-100%" },
          { metric: "Patient Satisfaction", us: "Low", oecd: "High" },
          { metric: "Wait Times", us: "Variable", oecd: "Comparable or better" },
        ]}
      />

      <div style={styles.quoteCard}>
        <p>"In the U.S., the market doesn't compete to cure—it competes to bill" — Wendell Potter, former insurance executive</p>
      </div>

      <div style={styles.card}>
        <h3>Implementation Roadmap</h3>
        <div style={styles.roadmapGrid}>
          {[
            { step: "1", title: "Political Will", description: "Build cross-coalition support" },
            { step: "2", title: "Public Education", description: "Transparent communication about benefits" },
            { step: "3", title: "Phased Transition", description: "Learn from Medicare expansion" },
            { step: "4", title: "Equity Focus", description: "Center racial justice in design" },
          ].map((item, index) => (
            <div key={index} style={styles.roadmapCard}>
              <div style={styles.roadmapStep}>{item.step}</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.card}>
        <h3>Video Analysis: Solutions in Action</h3>
        <div style={styles.videoGrid}>
          <VideoEmbed 
            url="https://www.youtube.com/embed/BytzrjEfyfA"
            title="How Single Payer Systems Work"
          />
          <VideoEmbed 
            url="https://www.youtube.com/embed/0vCOic4J4_U"
            title="International Healthcare Models"
          />
        </div>
      </div>

      <div style={{...styles.card, background: '#EFF6FF', textAlign: 'center'}}>
        <h3>The Final Argument</h3>
        <p style={{fontSize: '1.2rem', fontStyle: 'italic'}}>
          "The failures of American healthcare are not accidental; they are the predictable outcome of a system designed to privilege profit over patients. Historical precedent, international comparison, and empirical evidence all point toward the same conclusion: the United States spends more and achieves less because it refuses to treat healthcare as a public right."
        </p>
        <p style={{fontSize: '1.1rem', fontWeight: 'bold', marginTop: '1rem'}}>
          "The death of care is not inevitable, but reversing it requires moral courage equal to the scale of the problem."
        </p>
      </div>
    </div>
  </div>
);

// ==============================================
// RESOURCES PAGE
// ==============================================
const Resources = () => (
  <div style={styles.page}>
    <div style={styles.hero}>
      <h2 style={styles.title}>MLA Resources & Works Cited</h2>
      <p style={styles.subtitle}>Complete annotated bibliography and data sources</p>
    </div>

    <div style={styles.content}>
      <div style={styles.card}>
        <h3>Works Cited (MLA Format)</h3>
        <div style={styles.citationList}>
          {[
            "American Public Health Association. Policy Statement: Single-Payer and Public Health Reform. APHA, 2022.",
            "Centers for Disease Control and Prevention. National Vital Statistics Reports: Maternal Mortality Statistics. U.S. Department of Health and Human Services, 2023.",
            "Centers for Medicare & Medicaid Services. National Health Expenditure Data. U.S. Department of Health and Human Services, 2024.",
            "Commonwealth Fund. Mirror, Mirror 2023: Reflecting Poorly on U.S. Health Care. Aug. 2023.",
            "Health System Tracker. The Burden of Medical Debt in the United States. Peterson-KFF, 2023.",
            "Himmelstein, David U., et al. Medical Bankruptcy in the United States, 2023: Still Common, Still Dangerous. National Bureau of Economic Research. Working Paper No. 30982, 2023.",
            "Johns Hopkins University. Hospital Debt Collection Practices Report. Bloomberg School of Public Health, 2022.",
            "Kaiser Family Foundation Employer Health Benefits Survey: 2023 Summary of Findings. KFF, 2023.",
            "Organisation for Economic Co-operation and Development. Health at a Glance 2023: OECD Indicators. OECD Publishing, 2023.",
            "Partnership for America's Health Care Future. Press Release: On the Future of Health Reform. 2019.",
            "World Index of Healthcare Innovation. 2024 Report. Foundation for Research on Equal Opportunity, 2024.",
          ].map((citation, index) => (
            <div key={index} style={styles.citationItem}>
              {citation}
            </div>
          ))}
        </div>
      </div>

      <div style={{...styles.card, background: '#F9FAFB'}}>
        <h3>Data Sources & Methodology</h3>
        <p>This project synthesizes data from peer-reviewed studies, government reports, and international health organizations:</p>
        <ul style={styles.list}>
          <li>OECD Health at a Glance 2023 report</li>
          <li>Commonwealth Fund international comparisons</li>
          <li>CDC National Vital Statistics</li>
          <li>Kaiser Family Foundation surveys</li>
          <li>Academic research from NBER and Johns Hopkins</li>
          <li>World Index of Healthcare Innovation</li>
        </ul>
        <p style={styles.caption}>All charts reflect the most recent available data (2022-2024)</p>
      </div>
    </div>
  </div>
);

// ==============================================
// REUSABLE COMPONENTS
// ==============================================
const StatCard = ({ value, label, color, source }) => (
  <div style={{...styles.statCard, borderLeft: `4px solid ${color}`}}>
    <div style={{...styles.statValue, color}}>{value}</div>
    <div style={styles.statLabel}>{label}</div>
    {source && <div style={styles.statSource}>{source}</div>}
  </div>
);

const BarChart = ({ title, data }) => {
  const max = Math.max(...data.map(d => d.value));
  
  return (
    <div>
      {title && <h4 style={{marginBottom: '1rem'}}>{title}</h4>}
      <div style={styles.chart}>
        {data.map((item, i) => {
          const width = (item.value / max) * 100;
          const colors = ["#3B82F6", "#EF4444", "#10B981", "#8B5CF6", "#F59E0B"];
          
          return (
            <div key={i} style={styles.barContainer}>
              <div style={styles.barLabel}>{item.label}</div>
              <div style={styles.barBackground}>
                <div style={{
                  width: `${width}%`,
                  height: '24px',
                  background: colors[i % colors.length],
                  borderRadius: '4px',
                  transition: 'width 1s ease-in-out'
                }} />
              </div>
              <div style={styles.barValue}>
                {typeof item.value === 'number' ? item.value.toLocaleString() : item.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const VideoEmbed = ({ url, title }) => (
  <div style={styles.videoContainer}>
    <iframe
      src={url}
      title={title}
      style={styles.videoIframe}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

const ComparisonTable = ({ title, data }) => (
  <div style={styles.tableCard}>
    {title && <h4 style={{marginBottom: '1rem'}}>{title}</h4>}
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
          <div style={{...styles.tableCell, color: '#DC2626', fontWeight: '600'}}>{row.us}</div>
          <div style={{...styles.tableCell, color: '#059669', fontWeight: '600'}}>{row.oecd}</div>
        </div>
      ))}
    </div>
  </div>
);

const Timeline = ({ title, items }) => (
  <div style={styles.card}>
    {title && <h3>{title}</h3>}
    <div style={styles.timeline}>
      {items.map((item, i) => (
        <div key={i} style={styles.timelineItem}>
          <div style={styles.timelineDot} />
          <div style={styles.timelineContent}>
            <div style={styles.timelineYear}>{item.year}</div>
            <div style={styles.timelineEvent}>{item.event}</div>
            <div style={styles.timelineDescription}>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ==============================================
// STYLES
// ==============================================
const styles = {
  app: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    minHeight: '100vh',
    background: '#f8fafc',
    lineHeight: 1.6,
  },
  header: {
    background: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e40af',
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  navLink: {
    color: '#4b5563',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    padding: '0.5rem 0',
    borderBottom: '2px solid transparent',
  },
  page: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '3rem',
    padding: '3rem 1rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '12px',
    color: 'white',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.25rem',
    opacity: 0.9,
    maxWidth: '800px',
    margin: '0 auto',
  },
  content: {
    maxWidth: '900px',
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
    fontWeight: '700',
    marginBottom: '0.5rem',
  },
  statLabel: {
    color: '#4b5563',
    fontSize: '0.9rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  statSource: {
    color: '#9ca3af',
    fontSize: '0.75rem',
    fontStyle: 'italic',
  },
  chart: {
    margin: '1.5rem 0',
  },
  barContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.75rem',
  },
  barLabel: {
    width: '150px',
    fontWeight: '500',
    fontSize: '0.9rem',
  },
  barBackground: {
    flex: 1,
    background: '#f3f4f6',
    borderRadius: '4px',
    margin: '0 1rem',
    overflow: 'hidden',
  },
  barValue: {
    width: '100px',
    textAlign: 'right',
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  caption: {
    color: '#6b7280',
    fontSize: '0.875rem',
    fontStyle: 'italic',
    marginTop: '0.5rem',
  },
  quoteCard: {
    background: '#eff6ff',
    borderLeft: '4px solid #3b82f6',
    padding: '2rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    fontStyle: 'italic',
  },
  comparisonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '1.5rem',
  },
  modelCard: {
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  tableCard: {
    background: 'white',
    borderRadius: '8px',
    padding: '2rem',
    marginBottom: '2rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  },
  table: {
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
    background: '#f9fafb',
    borderBottom: '1px solid #e5e7eb',
    fontWeight: '600',
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr',
  },
  tableCell: {
    padding: '1rem',
    borderBottom: '1px solid #e5e7eb',
  },
  timeline: {
    position: 'relative',
    paddingLeft: '2rem',
    marginTop: '1.5rem',
  },
  timelineItem: {
    position: 'relative',
    marginBottom: '2rem',
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
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  timelineYear: {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#3b82f6',
    marginBottom: '0.25rem',
  },
  timelineEvent: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.5rem',
  },
  timelineDescription: {
    color: '#6b7280',
    fontSize: '0.9rem',
  },
  exampleGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    marginTop: '1rem',
  },
  exampleCard: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  objectionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '1rem',
  },
  objectionCard: {
    padding: '1.5rem',
    borderRadius: '8px',
    border: '2px solid',
    background: 'white',
  },
  list: {
    paddingLeft: '1.5rem',
    color: '#4b5563',
    lineHeight: 1.8,
  },
  roadmapGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem',
  },
  roadmapCard: {
    textAlign: 'center',
    padding: '1.5rem',
    background: '#f9fafb',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
  },
  roadmapStep: {
    width: '40px',
    height: '40px',
    background: '#3b82f6',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    margin: '0 auto 1rem',
  },
  videoContainer: {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9
    height: 0,
    overflow: 'hidden',
    margin: '1.5rem 0',
    borderRadius: '8px',
    backgroundColor: '#000',
  },
  videoIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  },
  videoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    marginTop: '1rem',
  },
  citationList: {
    marginTop: '1rem',
  },
  citationItem: {
    padding: '0.75rem 0',
    borderBottom: '1px solid #e5e7eb',
    fontSize: '0.9rem',
    lineHeight: 1.6,
  },
  footer: {
    background: '#1f2937',
    color: 'white',
    padding: '3rem 2rem',
    marginTop: '4rem',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '0.9rem',
    lineHeight: 1.6,
  },
};

export default App;
