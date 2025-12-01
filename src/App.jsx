// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";

// ---- Enhanced Utility Components ----
const Nav = () => (
  <header className="w-full shadow bg-white sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-800">Healthcare Justice Project</div>
      <nav className="space-x-6 hidden md:flex">
        <Link to="/" className="text-sm font-medium text-gray-700 hover:text-blue-600">Introduction</Link>
        <Link to="/history" className="text-sm font-medium text-gray-700 hover:text-blue-600">History</Link>
        <Link to="/crisis" className="text-sm font-medium text-gray-700 hover:text-blue-600">Current Crisis</Link>
        <Link to="/opposition" className="text-sm font-medium text-gray-700 hover:text-blue-600">Opposition</Link>
        <Link to="/repercussions" className="text-sm font-medium text-gray-700 hover:text-blue-600">Repercussions</Link>
        <Link to="/solutions" className="text-sm font-medium text-gray-700 hover:text-blue-600">Solutions</Link>
        <Link to="/resources" className="text-sm font-medium text-gray-700 hover:text-blue-600">MLA Resources</Link>
      </nav>
      <button className="md:hidden text-gray-700">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </header>
);

const Hero = ({ title, subtitle }) => (
  <section className="bg-gradient-to-r from-blue-50 to-white py-12 border-b">
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
      <p className="text-xl text-gray-700">{subtitle}</p>
    </div>
  </section>
);

// Enhanced Data Card
const DataCard = ({ title, value, subtitle, source, color = "blue" }) => {
  const colors = {
    blue: "from-blue-50 to-blue-100 border-blue-200 text-blue-800",
    red: "from-red-50 to-red-100 border-red-200 text-red-800",
    green: "from-green-50 to-green-100 border-green-200 text-green-800",
    purple: "from-purple-50 to-purple-100 border-purple-200 text-purple-800",
    orange: "from-orange-50 to-orange-100 border-orange-200 text-orange-800"
  };
  
  return (
    <div className={`bg-gradient-to-br ${colors[color]} border rounded-xl p-5 shadow-sm`}>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold mb-1">{value}</p>
      {subtitle && <p className="text-sm text-gray-600 mb-2">{subtitle}</p>}
      {source && <p className="text-xs text-gray-500">Source: {source}</p>}
    </div>
  );
};

// Enhanced Bar Chart
const BarChart = ({ data, title, height = 200 }) => {
  const max = Math.max(...data.map(d => d.value));
  const barWidth = 80;
  const spacing = 30;
  const totalWidth = data.length * (barWidth + spacing);
  
  return (
    <div className="bg-white rounded-xl p-6 shadow border">
      {title && <h4 className="font-bold text-lg mb-6">{title}</h4>}
      <div className="relative" style={{ height: `${height}px` }}>
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((percent) => (
          <div
            key={percent}
            className="absolute left-0 right-0 border-t border-gray-200"
            style={{ bottom: `${percent}%` }}
          />
        ))}
        
        {/* Bars */}
        <div className="flex items-end h-full pl-12 pr-4">
          {data.map((item, index) => {
            const barHeight = (item.value / max) * 100;
            const colors = ["#3b82f6", "#8b5cf6", "#10b981", "#ef4444", "#f59e0b"];
            
            return (
              <div key={index} className="flex flex-col items-center mx-2">
                <div
                  className="w-20 rounded-t-lg transition-all duration-500 hover:opacity-90"
                  style={{
                    height: `${barHeight}%`,
                    background: `linear-gradient(to top, ${colors[index % colors.length]}, ${colors[index % colors.length]}cc)`,
                    marginBottom: "4px"
                  }}
                />
                <div className="text-center">
                  <div className="font-bold text-gray-900">{item.value.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Comparison Table
const ComparisonTable = ({ title, data }) => (
  <div className="bg-white rounded-xl shadow border overflow-hidden">
    {title && (
      <div className="px-6 py-4 bg-gray-50 border-b">
        <h4 className="font-bold text-gray-800">{title}</h4>
      </div>
    )}
    <table className="w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-4 text-left font-semibold text-gray-700">Metric</th>
          <th className="py-3 px-4 text-left font-semibold text-red-600">United States</th>
          <th className="py-3 px-4 text-left font-semibold text-green-600">OECD Average</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
            <td className="py-3 px-4 font-medium">{row.metric}</td>
            <td className="py-3 px-4 text-red-700">{row.us}</td>
            <td className="py-3 px-4 text-green-700">{row.oecd}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Quote Component
const Quote = ({ text, author, source }) => (
  <div className="my-8 p-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
    <p className="text-gray-800 italic text-lg">"{text}"</p>
    <div className="mt-4 text-sm text-gray-600">
      {author && <span className="font-semibold">{author}</span>}
      {source && <span> — {source}</span>}
    </div>
  </div>
);

// Donut Chart for percentages
const DonutChart = ({ value, label, size = 120 }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="10"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{value}%</div>
            <div className="text-sm text-gray-600">{label}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---- Page Content ----
function Introduction() {
  const spendingData = [
    { label: "United States", value: 12914 },
    { label: "Germany", value: 8456 },
    { label: "Canada", value: 6857 },
    { label: "UK", value: 5698 },
    { label: "OECD Avg", value: 6987 },
  ];

  return (
    <main className="min-h-screen">
      <Hero 
        title="The Death of Care" 
        subtitle="How profit motives created America's broken healthcare system" 
      />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <section className="space-y-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            <span className="font-bold text-gray-900">The United States spends more on healthcare than any other nation, yet its outcomes consistently rank among the lowest in the developed world.</span> In 2023, health expenditure reached approximately $12,914 per person, almost twice the average of the 38 high-income countries (OECD Health at a Glance 2023). Despite this, millions of Americans remain uninsured or underinsured, and medical debt drives many into bankruptcy.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DataCard 
              title="Per Capita Spending" 
              value="$12,914" 
              source="OECD 2023" 
              color="blue"
            />
            <DataCard 
              title="Uninsured Americans" 
              value="28M+" 
              source="Health System Tracker" 
              color="red"
            />
            <DataCard 
              title="Medical Debt" 
              value="100M" 
              subtitle="Americans with medical debt"
              source="KFF 2023" 
              color="orange"
            />
            <DataCard 
              title="GDP on Healthcare" 
              value="18%" 
              subtitle="vs. OECD avg 9-11%"
              source="CMS 2024" 
              color="purple"
            />
          </div>

          <Quote 
            text="The failures of the U.S. healthcare system are deliberate and unfair, fueled by greed, racism, and denial, and universal healthcare is the only solution consistent with American values."
            author="AJ James"
            source="The Death of Care"
          />
        </section>

        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900">International Comparison</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <BarChart 
              title="Health Expenditure Per Capita (2023)"
              data={spendingData}
              height={280}
            />
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border">
                <h4 className="font-bold text-lg mb-4">Key Findings</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-blue-600 mr-3">▶</div>
                    <span>Highest spending, middling outcomes (Commonwealth Fund 2023)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-600 mr-3">▶</div>
                    <span>Administrative costs 2-4x higher than peer nations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-blue-600 mr-3">▶</div>
                    <span>Worst performance on equity and access measures</span>
                  </li>
                </ul>
              </div>
              
              <ComparisonTable 
                title="Performance Indicators"
                data={[
                  { metric: "Infant Mortality", us: "5.4/1000", oecd: "3.8/1000" },
                  { metric: "Life Expectancy", us: "76.4 years", oecd: "80.3 years" },
                  { metric: "Admin Costs", us: "8% of spending", oecd: "2-3%" },
                ]}
              />
            </div>
          </div>
        </section>

        <section>
          <div className="bg-blue-50 p-8 rounded-xl border">
            <h3 className="text-2xl font-bold mb-6">Video Analysis</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/pZHiIGFLN8Y"
                title="The American Healthcare Paradox"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function History() {
  const gdpData = [
    { label: "1960", value: 5 },
    { label: "1980", value: 9 },
    { label: "2000", value: 13 },
    { label: "2020", value: 18 },
    { label: "2024", value: 19 },
  ];

  return (
    <main className="min-h-screen">
      <Hero 
        title="Historical Roots" 
        subtitle="From wartime policies to structural inequity" 
      />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <section className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">The Employer-Based System</h3>
              <p className="mb-4">
                Employer-based healthcare developed during World War II, when wage controls led companies to offer insurance instead of salary increases. According to the Kaiser Family Foundation, "employers sought non-wage forms of compensation during wartime restrictions, leading to the widespread adoption of job-based health coverage."
              </p>
              <p>
                What started as a temporary solution became the backbone of American healthcare. In contrast, other industrialized nations built universal systems that guaranteed coverage to all citizens as a matter of public rights.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold mb-3">Two Divergent Philosophies</h4>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border">
                  <div className="font-bold text-blue-700 mb-1">🇪🇺 European Model</div>
                  <p className="text-sm">Healthcare as a public good and human right</p>
                </div>
                <div className="p-4 bg-white rounded border">
                  <div className="font-bold text-red-700 mb-1">🇺🇸 American Model</div>
                  <p className="text-sm">Healthcare as a private commodity</p>
                </div>
              </div>
            </div>
          </div>

          <BarChart 
            title="Healthcare Spending as % of GDP (1960-2024)"
            data={gdpData}
            height={240}
          />
        </section>

        <section className="bg-red-50 p-8 rounded-xl border border-red-200">
          <h3 className="text-2xl font-bold mb-4 text-red-800">Structural Racism in Healthcare</h3>
          <p className="mb-6">
            "The racial inequities that marked mid-century America were built directly into this system. Segregated hospitals, discriminatory employment policies, and unequal access to insurance left Black and Indigenous communities disproportionately excluded from medical care" (CDC National Vital Statistics).
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <DataCard 
              title="Black Maternal Mortality" 
              value="3x higher" 
              subtitle="than white mothers"
              source="CDC 2023" 
              color="red"
            />
            <DataCard 
              title="Insurance Disparities" 
              value="2x more likely" 
              subtitle="uninsured for Black Americans"
              color="red"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

function Crisis() {
  const adminData = [
    { label: "US", value: 8 },
    { label: "Canada", value: 2 },
    { label: "UK", value: 2 },
    { label: "France", value: 3 },
    { label: "Germany", value: 4 },
  ];

  const drugPriceData = [
    { label: "US", value: 1126 },
    { label: "OECD Avg", value: 563 },
    { label: "Canada", value: 643 },
    { label: "UK", value: 498 },
    { label: "Germany", value: 712 },
  ];

  return (
    <main className="min-h-screen">
      <Hero 
        title="Current Crisis" 
        subtitle="Measuring the gap between spending and outcomes" 
      />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">The Scale of the Problem</h3>
          <p className="text-lg">
            Nearly one in ten Americans lives without health insurance, and an estimated 100 million people carry medical debt (Health System Tracker 2023). In contrast, almost all OECD nations achieve population coverage rates near 100 percent.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <DataCard 
              title="Uninsured Rate" 
              value="8.4%" 
              subtitle="vs. OECD <1%"
              source="KFF 2023" 
              color="blue"
            />
            <DataCard 
              title="Drug Price Difference" 
              value="100% higher" 
              subtitle="US vs OECD average"
              source="OECD 2023" 
              color="red"
            />
            <DataCard 
              title="Denial Rate" 
              value="20%" 
              subtitle="of insured claims denied"
              source="Health System Tracker" 
              color="orange"
            />
          </div>

          <Quote 
            text="In this structure, coverage complexity often functions as control rather than care. Denials are not rare administrative mistakes; they are systemic features of private insurance designed to contain costs."
            source="Johns Hopkins Hospital Debt Report"
          />
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-8">Comparative Analysis</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <BarChart 
              title="Administrative Waste (% of spending)"
              data={adminData}
              height={240}
            />
            <BarChart 
              title="Average Prescription Cost (USD)"
              data={drugPriceData}
              height={240}
            />
          </div>
        </section>

        <section>
          <ComparisonTable 
            title="Health Outcomes Comparison"
            data={[
              { metric: "Infant Mortality Rate", us: "5.4/1000", oecd: "3.8/1000" },
              { metric: "Life Expectancy", us: "76.4 years", oecd: "80.3 years" },
              { metric: "Maternal Mortality", us: "32.9/100k", oecd: "8.4/100k" },
              { metric: "Avoidable Deaths", us: "112/100k", oecd: "72/100k" },
            ]}
          />
        </section>

        <section>
          <div className="bg-red-50 p-8 rounded-xl border border-red-200">
            <h3 className="text-2xl font-bold mb-6">Video: The Cost of Complexity</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/u9x4cRWqPPM"
                title="Why American Healthcare Costs So Much"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Opposition() {
  return (
    <main className="min-h-screen">
      <Hero 
        title="Opposition to Reform" 
        subtitle="Corporate power and ideological resistance" 
      />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">The Forces Against Change</h3>
          <p className="text-lg">
            Powerful industries and political alliances have worked consistently to prevent the adoption of a single-payer or universal healthcare system. These groups coordinate through coalitions such as the Partnership for America's Health Care Future (PAHCF) to shape legislation and public opinion.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-4 text-red-800">Lobbying Power</h4>
              <div className="text-4xl font-bold text-red-700 mb-2">$143M</div>
              <p className="text-gray-600">spent on lobbying in 2018 alone to block Medicare for All</p>
              <p className="text-sm text-gray-500 mt-4">Source: Commonwealth Fund</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-4 text-blue-800">Coordination Network</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>America's Health Insurance Plans (AHIP)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Pharmaceutical Research and Manufacturers (PhRMA)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>Federation of American Hospitals</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span>American Medical Association</span>
                </li>
              </ul>
            </div>
          </div>

          <Quote 
            text="The belief that health care should remain a private commodity has become a defining feature of American exceptionalism in public policy."
            source="OECD Health at a Glance"
          />
        </section>

        <section className="bg-yellow-50 p-8 rounded-xl border border-yellow-200">
          <h3 className="text-2xl font-bold mb-6">Specific Examples of Resistance</h3>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg border">
              <h4 className="font-bold text-red-700 mb-3">Union Opposition in New York</h4>
              <p className="text-gray-700">
                "Several New York City municipal unions opposed the proposed New York Health Act 
                on grounds that it could undermine existing health plans negotiated through collective 
                bargaining" (Health Policy Review).
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg border">
              <h4 className="font-bold text-orange-700 mb-3">Charity Care Failures</h4>
              <p className="text-gray-700">
                "Nonprofit hospitals have introduced charity care programs, yet investigative reports 
                reveal that many still sue patients for unpaid bills" (Johns Hopkins University).
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Repercussions() {
  return (
    <main className="min-h-screen">
      <Hero 
        title="Human & Economic Costs" 
        subtitle="The devastating consequences of a broken system" 
      />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">The Burden on Americans</h3>
          <p className="text-lg">
            Medical debt remains the leading cause of personal bankruptcy in the United States, cited in two-thirds of all filings. Chronic illness and delayed treatment perpetuate poverty and reduce national productivity.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <DataCard 
              title="Medical Bankruptcy" 
              value="66%" 
              subtitle="of personal bankruptcies"
              source="NBER 2023" 
              color="red"
            />
            <DataCard 
              title="Care Delayed Due to Cost" 
              value="29%" 
              subtitle="of Americans"
              source="Commonwealth Fund" 
              color="orange"
            />
            <DataCard 
              title="Medications Skipped" 
              value="18%" 
              subtitle="due to high costs"
              source="KFF 2023" 
              color="purple"
            />
          </div>

          <Quote 
            text="The moral cost is equally profound: a society that normalizes preventable suffering erodes its own democratic legitimacy."
          />
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-6">The Coverage Illusion</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="mb-6">
                Nearly one in five insured adults report being denied a medical service by their insurer in the past year. OECD nations provide automatic coverage for basic care; the U.S. system often denies or delays treatment through pre-authorization barriers and coverage disputes.
              </p>
              <div className="flex justify-center space-x-12">
                <DonutChart value={20} label="Claims Denied" />
                <DonutChart value={33} label="Cost-Related Avoidance" />
              </div>
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
          </div>
        </section>
      </div>
    </main>
  );
}

function Solutions() {
  const savingsData = [
    { label: "Admin Waste", value: 500 },
    { label: "Drug Prices", value: 150 },
    { label: "Preventive Care", value: 200 },
    { label: "Total", value: 850 },
  ];

  return (
    <main className="min-h-screen">
      <Hero 
        title="The Path Forward" 
        subtitle="Universal healthcare as the only moral and practical solution" 
      />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Addressing Counterarguments</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-6 text-red-800">Common Objections</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-red-600 mr-3 text-xl">✗</div>
                  <span>Would increase taxes and government spending</span>
                </li>
                <li className="flex items-start">
                  <div className="text-red-600 mr-3 text-xl">✗</div>
                  <span>Would stifle medical innovation</span>
                </li>
                <li className="flex items-start">
                  <div className="text-red-600 mr-3 text-xl">✗</div>
                  <span>Reduces patient choice and freedom</span>
                </li>
                <li className="flex items-start">
                  <div className="text-red-600 mr-3 text-xl">✗</div>
                  <span>Too politically difficult to implement</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <h4 className="font-bold text-xl mb-6 text-green-800">Evidence-Based Responses</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-green-600 mr-3 text-xl">✓</div>
                  <span>Total citizen costs decrease as admin overhead drops</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-3 text-xl">✓</div>
                  <span>OECD data shows universal systems maintain robust innovation</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-3 text-xl">✓</div>
                  <span>Private insurance often restricts choice more than universal systems</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-3 text-xl">✓</div>
                  <span>Medicare expansion shows phased approaches can succeed</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-8">The Economic Case for Universal Care</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="mb-6">
                "A single-payer or universal healthcare model offers the most coherent solution for combining efficiency, equity, and accountability. Under such a system, administrative waste would shrink dramatically: studies estimate that eliminating redundant billing and insurance overhead could redirect more than $500 billion annually toward direct patient care."
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="font-bold">Preventive care would expand, reducing long-term costs and improving population health outcomes.</p>
              </div>
            </div>
            <BarChart 
              title="Projected Annual Savings (Billions USD)"
              data={savingsData}
              height={240}
            />
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-6">International Success Stories</h4>
              <p className="mb-4">
                "Evidence from other OECD nations disproves the argument that universal systems stifle innovation. Germany, Japan, and Sweden all maintain robust biotech and pharmaceutical industries while guaranteeing universal access."
              </p>
              <ComparisonTable 
                data={[
                  { metric: "Innovation Ranking", us: "3rd", oecd: "Germany 1st, Japan 2nd" },
                  { metric: "Coverage Rate", us: "90%", oecd: "99-100%" },
                  { metric: "Patient Satisfaction", us: "Low", oecd: "High" },
                  { metric: "Wait Times", us: "Variable", oecd: "Comparable or better" },
                ]}
              />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6">Implementation Roadmap</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-6 bg-blue-100 rounded-xl">
                  <div className="text-3xl font-bold text-blue-800 mb-2">1</div>
                  <p className="font-bold">Political Will</p>
                </div>
                <div className="text-center p-6 bg-green-100 rounded-xl">
                  <div className="text-3xl font-bold text-green-800 mb-2">2</div>
                  <p className="font-bold">Public Education</p>
                </div>
                <div className="text-center p-6 bg-purple-100 rounded-xl">
                  <div className="text-3xl font-bold text-purple-800 mb-2">3</div>
                  <p className="font-bold">Phased Transition</p>
                </div>
                <div className="text-center p-6 bg-orange-100 rounded-xl">
                  <div className="text-3xl font-bold text-orange-800 mb-2">4</div>
                  <p className="font-bold">Equity Focus</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl border">
            <h3 className="text-2xl font-bold mb-6">Video Analysis: Solutions in Action</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/BytzrjEfyfA"
                  title="How Single Payer Systems Work"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/0vCOic4J4_U"
                  title="International Healthcare Models"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
          <h3 className="text-3xl font-bold mb-6">The Final Argument</h3>
          <p className="text-xl text-gray-800 mb-6 max-w-3xl mx-auto">
            "The failures of American healthcare are not accidental; they are the predictable outcome of a system designed to privilege profit over patients."
          </p>
          <p className="text-2xl font-bold text-blue-800">
            "The death of care is not inevitable, but reversing it requires moral courage equal to the scale of the problem."
          </p>
        </section>
      </div>
    </main>
  );
}

function Resources() {
  return (
    <main className="min-h-screen">
      <Hero 
        title="MLA Resources & Works Cited" 
        subtitle="Complete annotated bibliography and data sources" 
      />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <section>
          <h3 className="text-2xl font-bold mb-8">Works Cited (MLA Format)</h3>
          <div className="space-y-6">
            {[
              {
                citation: "American Public Health Association. Policy Statement: Single-Payer and Public Health Reform.",
                details: "APHA, 2022, https://www.apha.org/policies-and-advocacy/public-health-policy-statements.",
                color: "blue"
              },
              {
                citation: "Commonwealth Fund. Mirror, Mirror 2023: Reflecting Poorly on U.S. Health Care.",
                details: "Aug. 2023, https://www.commonwealthfund.org/publications/fund-reports/2023/aug/mirror-mirror-2023.",
                color: "green"
              },
              {
                citation: "Organisation for Economic Co-operation and Development. Health at a Glance 2023: OECD Indicators.",
                details: "OECD Publishing, 2023, https://www.oecd.org/health/health-at-a-glance/.",
                color: "purple"
              },
              {
                citation: "Health System Tracker. The Burden of Medical Debt in the United States.",
                details: "Peterson-KFF, 2023, https://www.healthsystemtracker.org/brief/the-burden-of-medical-debt-in-the-united-states/.",
                color: "red"
              },
              {
                citation: "Kaiser Family Foundation Employer Health Benefits Survey: 2023 Summary of Findings.",
                details: "KFF, 2023, https://www.kff.org/health-costs/report/2023-employer-health-benefits-survey/.",
                color: "orange"
              }
            ].map((item, index) => (
              <div key={index} className={`border-l-4 border-${item.color}-500 pl-6 py-4 bg-${item.color}-50`}>
                <p className="font-bold text-gray-900">{item.citation}</p>
                <p className="text-gray-600 mt-2">{item.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-xl">
          <h4 className="text-xl font-bold mb-6">Data Sources & Methodology</h4>
          <p className="mb-4">This project synthesizes data from:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>OECD Health at a Glance 2023 report</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Commonwealth Fund international comparisons</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>CDC National Vital Statistics</span>
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Kaiser Family Foundation surveys</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>Academic research from NBER and Johns Hopkins</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span>World Index of Healthcare Innovation</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

// ---- App Root ----
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/history" element={<History />} />
          <Route path="/crisis" element={<Crisis />} />
          <Route path="/opposition" element={<Opposition />} />
          <Route path="/repercussions" element={<Repercussions />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<Introduction />} />
        </Routes>

        <footer className="border-t bg-white mt-16">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-xl font-bold text-blue-800 mb-4">Healthcare Justice Project</div>
                <p className="text-sm text-gray-600">
                  Research and advocacy initiative documenting America's healthcare crisis. 
                  Based on "The Death of Care" by AJ James.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-gray-900">Research Team</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>AJ James — Research & Analysis</p>
                  <p>Professor Warner — Faculty Advisor</p>
                  <p>English 102 — Fall 2025</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-gray-900">Data Sources</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>• OECD Health at a Glance 2023</p>
                  <p>• Commonwealth Fund International Comparisons</p>
                  <p>• Kaiser Family Foundation</p>
                  <p>• CDC National Vital Statistics</p>
                </div>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center">
              <p className="text-sm text-gray-500">
                © 2025 Healthcare Justice Project. Educational use only. All data properly cited.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
