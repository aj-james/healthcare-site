// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// ---- ENHANCED STYLES ----
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Open+Sans:wght@300;400;600&display=swap');
  
  * {
    font-family: 'Open Sans', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }
  
  .gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .gradient-text {
    background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .card-gradient-1 {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
  
  .card-gradient-2 {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  }
  
  .card-gradient-3 {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }
  
  .card-gradient-4 {
    background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  }
  
  .card-gradient-5 {
    background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  }
  
  .pulse {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  .float {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

// Add styles to document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

// ---- COLORFUL COMPONENTS ----
const Nav = () => (
  <header className="gradient-bg text-white shadow-xl">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-extrabold flex items-center">
        <span className="mr-3">🏥</span>
        <span className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Healthcare Justice
        </span>
      </div>
      <nav className="space-x-6 hidden md:flex">
        {["Introduction", "History", "Crisis", "Opposition", "Repercussions", "Solutions", "Resources"].map((item) => (
          <Link 
            key={item}
            to={item === "Introduction" ? "/" : `/${item.toLowerCase()}`}
            className="text-white hover:text-yellow-300 font-semibold text-sm transition-all hover:underline hover:scale-105"
          >
            {item}
          </Link>
        ))}
      </nav>
      <button className="md:hidden text-white text-2xl">☰</button>
    </div>
  </header>
);

const Hero = ({ title, subtitle }) => (
  <section className="relative overflow-hidden">
    {/* Animated background */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20"></div>
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    }}></div>
    
    <div className="relative max-w-7xl mx-auto px-6 py-16 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text">
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-white bg-black bg-opacity-50 inline-block px-6 py-3 rounded-full">
        {subtitle}
      </p>
      <div className="mt-8 flex justify-center space-x-4">
        <div className="w-4 h-4 bg-pink-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
      </div>
    </div>
  </section>
);

const ColorfulCard = ({ title, value, icon, color = "blue" }) => {
  const colors = {
    blue: "card-gradient-2",
    red: "card-gradient-1", 
    green: "card-gradient-3",
    purple: "from-purple-500 to-pink-500",
    orange: "from-orange-500 to-red-500",
    pink: "from-pink-500 to-rose-500"
  };
  
  return (
    <div className={`${colors[color]} text-white rounded-2xl p-6 shadow-2xl transform transition-transform hover:scale-105 hover:rotate-1 float`}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <div className="text-sm font-bold bg-white bg-opacity-30 px-3 py-1 rounded-full">NEW</div>
      </div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div className="text-sm opacity-90">{title}</div>
      <div className="mt-4 h-1 w-12 bg-white bg-opacity-50 rounded-full"></div>
    </div>
  );
};

const AnimatedChart = ({ data, title }) => (
  <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-8 shadow-2xl">
    <h3 className="text-2xl font-bold mb-6 flex items-center">
      <span className="mr-3">📊</span>
      {title}
    </h3>
    <div className="space-y-6">
      {data.map((item, index) => (
        <div key={index} className="relative">
          <div className="flex justify-between mb-2">
            <span className="font-bold">{item.label}</span>
            <span className="font-bold text-yellow-300">{item.value}</span>
          </div>
          <div className="h-6 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full pulse ${index % 3 === 0 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 
                         index % 3 === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 
                         'bg-gradient-to-r from-green-500 to-emerald-500'}`}
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
          <div className="absolute top-0 right-0 text-xs text-gray-400">
            {item.percentage}%
          </div>
        </div>
      ))}
    </div>
    <div className="mt-6 flex justify-center space-x-2">
      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    </div>
  </div>
);

const ComparisonCard = ({ us, oecd, label }) => (
  <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 shadow-xl border border-gray-200 transform hover:scale-105 transition-all">
    <div className="text-center mb-4">
      <span className="text-lg font-bold text-gray-800">{label}</span>
    </div>
    <div className="flex justify-between items-center">
      <div className="text-center">
        <div className="text-3xl font-bold text-red-600">🇺🇸</div>
        <div className="text-xl font-bold text-red-700 mt-2">{us}</div>
        <div className="text-sm text-gray-600">United States</div>
      </div>
      <div className="text-2xl text-gray-400">vs</div>
      <div className="text-center">
        <div className="text-3xl font-bold text-green-600">🌍</div>
        <div className="text-xl font-bold text-green-700 mt-2">{oecd}</div>
        <div className="text-sm text-gray-600">OECD Average</div>
      </div>
    </div>
  </div>
);

const VideoCard = ({ url, title, description }) => (
  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-6 shadow-2xl border-2 border-white">
    <h4 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
      <span className="mr-3">🎬</span>
      {title}
    </h4>
    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-4">
      <iframe
        src={url}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

// ---- FESTIVE PAGES ----
function Introduction() {
  const spendingData = [
    { label: "United States", value: "$12,914", percentage: 100 },
    { label: "Germany", value: "$8,456", percentage: 65 },
    { label: "Canada", value: "$6,857", percentage: 53 },
    { label: "UK", value: "$5,698", percentage: 44 },
    { label: "OECD Avg", value: "$6,987", percentage: 54 },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Hero 
        title="THE DEATH OF CARE" 
        subtitle="America's Healthcare Crisis: Paying More, Getting Less" 
      />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Animated Stats Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-8 gradient-text flex items-center justify-center">
            <span className="mr-4">⚡</span>
            The American Healthcare Paradox
            <span className="ml-4">⚡</span>
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-3xl shadow-lg">
            <span className="font-bold text-purple-700">The United States spends more on healthcare than any other nation, yet its outcomes consistently rank among the lowest in the developed world.</span> In 2023, health expenditure reached approximately $12,914 per person, almost twice the average of the 38 high-income countries.
          </p>
        </div>

        {/* Colorful Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <ColorfulCard 
            title="Per Capita Spending" 
            value="$12,914" 
            icon="💰" 
            color="blue"
          />
          <ColorfulCard 
            title="Uninsured Americans" 
            value="28M+" 
            icon="🏥" 
            color="red"
          />
          <ColorfulCard 
            title="With Medical Debt" 
            value="100M" 
            icon="💸" 
            color="green"
          />
          <ColorfulCard 
            title="GDP on Healthcare" 
            value="18%" 
            icon="📊" 
            color="purple"
          />
        </div>

        {/* Quote Section */}
        <div className="mb-16 p-8 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-3xl shadow-2xl text-white transform hover:scale-105 transition-transform">
          <div className="text-6xl mb-4">"</div>
          <p className="text-2xl font-bold mb-6">
            The failures of the U.S. healthcare system are deliberate and unfair, fueled by greed, racism, and denial, and universal healthcare is the only solution consistent with American values.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-lg">— AJ James, "The Death of Care"</div>
            <div className="text-3xl">🏆</div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <AnimatedChart 
            title="Health Expenditure Per Capita (2023)"
            data={spendingData}
          />
          
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="mr-3">🎯</span>
                Key Performance Gaps
              </h3>
              <div className="space-y-6">
                <ComparisonCard 
                  label="Infant Mortality"
                  us="5.4/1000"
                  oecd="3.8/1000"
                />
                <ComparisonCard 
                  label="Life Expectancy"
                  us="76.4 years"
                  oecd="80.3 years"
                />
                <ComparisonCard 
                  label="Admin Costs"
                  us="8% of spending"
                  oecd="2-3%"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <VideoCard 
            url="https://www.youtube.com/embed/pZHiIGFLN8Y"
            title="The American Healthcare Paradox Explained"
            description="Why does the US spend the most but get the worst outcomes?"
          />
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-8 text-white shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="mr-3">🎪</span>
            Did You Know?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white bg-opacity-20 rounded-2xl">
              <div className="text-4xl mb-2">💊</div>
              <div className="font-bold">100% Higher</div>
              <div className="text-sm">US drug prices vs OECD average</div>
            </div>
            <div className="text-center p-4 bg-white bg-opacity-20 rounded-2xl">
              <div className="text-4xl mb-2">🏛️</div>
              <div className="font-bold">$143M Spent</div>
              <div className="text-sm">Lobbying against reform in 2018</div>
            </div>
            <div className="text-center p-4 bg-white bg-opacity-20 rounded-2xl">
              <div className="text-4xl mb-2">⚖️</div>
              <div className="font-bold">66% Bankruptcies</div>
              <div className="text-sm">Caused by medical debt</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function History() {
  const timeline = [
    { year: "1940s", event: "WWII wage controls", detail: "Employers offer health insurance as alternative to raises", color: "bg-blue-500" },
    { year: "1965", event: "Medicare & Medicaid", detail: "Public programs established, but many excluded", color: "bg-green-500" },
    { year: "1990s", event: "Managed Care Era", detail: "Rise of HMOs and insurance bureaucracy", color: "bg-purple-500" },
    { year: "2010", event: "Affordable Care Act", detail: "Expanded coverage but kept private system", color: "bg-red-500" },
    { year: "2023", event: "Record Spending", detail: "$12,914 per person, worst outcomes", color: "bg-yellow-500" },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Hero 
        title="HISTORICAL ROOTS" 
        subtitle="How America Chose Profit Over People" 
      />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3">📜</span>
              The Employer-Based System
            </h3>
            <p className="text-gray-700 mb-6">
              Employer-based healthcare developed during World War II, when wage controls led companies to offer insurance instead of salary increases. What started as a temporary solution became the backbone of American healthcare.
            </p>
            <div className="flex space-x-4">
              <div className="flex-1 bg-white rounded-2xl p-4 text-center">
                <div className="text-2xl mb-2">🇪🇺</div>
                <div className="font-bold text-blue-600">European Model</div>
                <div className="text-sm">Healthcare as a public good</div>
              </div>
              <div className="flex-1 bg-white rounded-2xl p-4 text-center">
                <div className="text-2xl mb-2">🇺🇸</div>
                <div className="font-bold text-red-600">American Model</div>
                <div className="text-sm">Healthcare as a commodity</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-3">📈</span>
              The Cost of Privatization
            </h3>
            <div className="space-y-4">
              {[
                { year: "1960", value: "5% of GDP" },
                { year: "1980", value: "9% of GDP" },
                { year: "2000", value: "13% of GDP" },
                { year: "2020", value: "18% of GDP" },
                { year: "2024", value: "19% of GDP" },
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full">
                    {item.year}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="font-bold text-lg">{item.value}</div>
                    <div className="text-gray-600">Healthcare spending</div>
                  </div>
                  <div className="text-2xl">💰</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
            📅 Healthcare Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'pr-1/2 pl-8' : 'pl-1/2 pr-8'}`}>
                <div className={`${item.color} w-8 h-8 rounded-full absolute top-0 ${index % 2 === 0 ? 'right-0 mr-4' : 'left-0 ml-4'} transform -translate-y-1/2`}></div>
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold mb-2">{item.year}</div>
                  <div className="text-xl font-bold text-gray-800 mb-2">{item.event}</div>
                  <div className="text-gray-600">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Racism Section */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 text-white shadow-2xl mb-16">
          <h3 className="text-3xl font-bold mb-6 flex items-center">
            <span className="mr-3">⚖️</span>
            Structural Racism in Healthcare
          </h3>
          <p className="text-xl mb-8">
            "The racial inequities that marked mid-century America were built directly into this system. Segregated hospitals, discriminatory employment policies, and unequal access to insurance left Black and Indigenous communities disproportionately excluded."
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-20 p-6 rounded-2xl">
              <div className="text-4xl mb-4">🤰</div>
              <div className="text-3xl font-bold">3x Higher</div>
              <div className="text-lg">Black maternal mortality rate</div>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-2xl">
              <div className="text-4xl mb-4">🏥</div>
              <div className="text-3xl font-bold">2x More Likely</div>
              <div className="text-lg">Uninsured for Black Americans</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Additional pages would follow similar colorful patterns...

// ---- SIMPLIFIED ROUTES FOR NOW ----
function Crisis() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Hero 
        title="CURRENT CRISIS" 
        subtitle="The Shocking Numbers Behind the Failure" 
      />
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold mb-8 gradient-text">🚨 Coming Soon: More Colorful Charts! 🚨</h2>
        <p className="text-xl text-gray-700 mb-12">This page would show all the crisis data with vibrant visualizations</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ColorfulCard title="Admin Waste" value="8%" icon="📋" color="red" />
          <ColorfulCard title="Drug Prices" value="100%+" icon="💊" color="blue" />
          <ColorfulCard title="Claims Denied" value="20%" icon="❌" color="purple" />
          <ColorfulCard title="Life Expectancy" value="76.4" icon="📉" color="green" />
        </div>
      </div>
    </main>
  );
}

function Opposition() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Hero 
        title="OPPOSITION" 
        subtitle="Who's Fighting Against Reform" 
      />
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold mb-8 gradient-text">💸 Billions Spent to Block Change 💸</h2>
        <p className="text-xl text-gray-700 mb-12">This page would expose corporate lobbying with dramatic visuals</p>
      </div>
    </main>
  );
}

function Solutions() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <Hero 
        title="SOLUTIONS" 
        subtitle="The Path to Universal Healthcare" 
      />
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-bold mb-8 gradient-text">🌈 A Better Future is Possible 🌈</h2>
        <p className="text-xl text-gray-700 mb-12">This page would show international success stories with hopeful designs</p>
        <div className="grid md:grid-cols-2 gap-8">
          <VideoCard 
            url="https://www.youtube.com/embed/BytzrjEfyfA"
            title="How Single Payer Works"
            description="Learn how other countries provide better care for less"
          />
          <VideoCard 
            url="https://www.youtube.com/embed/0vCOic4J4_U"
            title="International Models"
            description="See successful healthcare systems around the world"
          />
        </div>
      </div>
    </main>
  );
}

// ---- APP ROOT ----
export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/history" element={<History />} />
          <Route path="/crisis" element={<Crisis />} />
          <Route path="/opposition" element={<Opposition />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="*" element={<Introduction />} />
        </Routes>

        <footer className="gradient-bg text-white py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="text-4xl font-bold mb-6">🏥 Healthcare Justice Project 🏥</div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-xl font-bold mb-4">Research Team</div>
                <div className="space-y-2">
                  <div>AJ James — Research Lead</div>
                  <div>Professor Warner — Advisor</div>
                  <div>English 102 — Fall 2025</div>
                </div>
              </div>
              <div>
                <div className="text-xl font-bold mb-4">Data Sources</div>
                <div className="space-y-1 text-sm">
                  <div>OECD Health at a Glance</div>
                  <div>Commonwealth Fund</div>
                  <div>Kaiser Family Foundation</div>
                  <div>CDC National Statistics</div>
                </div>
              </div>
              <div>
                <div className="text-xl font-bold mb-4">Visual Design</div>
                <div className="space-y-1 text-sm">
                  <div>Animated Charts</div>
                  <div>Gradient Colors</div>
                  <div>Interactive Elements</div>
                  <div>Mobile Responsive</div>
                </div>
              </div>
            </div>
            <div className="border-t border-white border-opacity-30 pt-8">
              <div className="text-2xl mb-4">🎉 Making Research Fun & Engaging! 🎉</div>
              <p className="text-sm opacity-80">
                This project transforms academic research into an engaging, colorful experience.
                All data is properly cited and based on peer-reviewed sources.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
