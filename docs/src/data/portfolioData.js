import ensoArt from "../assets/art/enso.jpg";
import dataWaveArt from "../assets/art/data_wave.jpg";
import ikigaiGardenArt from "../assets/art/ikigai_garden.jpg";
import kiranaArt from "../assets/art/kirana_art.jpg";

export const ART_ASSETS = {
  enso: ensoArt,
  dataWave: dataWaveArt,
  ikigaiGarden: ikigaiGardenArt,
  kiranaArt: kiranaArt,
};

export const PERSONAL_INFO = {
  name: "Amithab T S",
  title: "Data Analyst in Progress.",
  subtitle: "SQL · Python · Power BI · Storytelling",
  kanjiTitle: "データアナリスト",
  kanjiSubtitle: "データから価値を紡ぐ",
  bioHeadline: "Who's behind the data?",
  bioParagraphs: [
    "I'm Amithab T S — a third-year B.Tech student in AI & Data Science Engineering at Dr. N.G.P Institute of Technology, Coimbatore. Every project I touch starts with a business question, not a spreadsheet.",
    "I work end-to-end: raw SQL queries → Python cleaning → dashboards stakeholders can actually read. Currently 6 months into a structured Data Analyst roadmap."
  ],
  github: "https://github.com/Amithab88",
  linkedin: "https://linkedin.com/in/amithab87",
  hackerrank: "https://www.hackerrank.com/profile/h242430101",
  email: "amithab88@example.com",
  responseWindow: "Within 24 hours"
};

export const TOOLS = [
  { slug: "python", alt: "Python", category: "Code" },
  { slug: "mysql", alt: "MySQL", category: "Database" },
  { slug: "microsoftexcel", alt: "Excel", category: "BI" },
  { slug: "powerbi", alt: "Power BI", category: "BI" },
  { slug: "pandas", alt: "Pandas", category: "Wrangling" },
  { slug: "numpy", alt: "NumPy", category: "Math" },
  { slug: "streamlit", alt: "Streamlit", category: "Apps" },
  { slug: "github", alt: "GitHub", category: "DevOps" },
  { slug: "flask", alt: "Flask", category: "Backend" },
  { slug: "canva", alt: "Canva", category: "Design" },
];

export const SKILL_CATEGORIES = [
  { id: "all", label: "All Skills", kanji: "全伝" },
  { id: "db", label: "Database & SQL", kanji: "基盤" },
  { id: "scripting", label: "Python & Wrangling", kanji: "加工" },
  { id: "bi", label: "BI & Visualization", kanji: "可視" },
  { id: "stats", label: "Math & Storytelling", kanji: "統計" },
];

export const SKILLS = [
  {
    id: "sql",
    label: "SQL & Querying",
    category: "db",
    pct: 90,
    color: "#00d68f",
    kanji: "構文",
    rank: "達人 · Master Level",
    summary: "Expert analytical querying, multi-table joins, and complex window functions for sub-second business metrics.",
    capabilities: [
      "Window Functions (ROW_NUMBER, RANK, DENSE_RANK)",
      "Common Table Expressions (CTEs) & Subqueries",
      "Query Optimization & Indexing Strategies",
      "Aggregations & Rollup Grouping Sets"
    ],
    projectUsed: "CricPulseIQ & Kirana Predict",
    codeSnippet: "WITH metrics AS (\n  SELECT player, AVG(score) OVER(PARTITION BY format) as avg_score\n  FROM cricket_stats\n)\nSELECT * FROM metrics WHERE avg_score > 50;"
  },
  {
    id: "mysql",
    label: "MySQL Database",
    category: "db",
    pct: 80,
    color: "#f59e0b",
    kanji: "基盤",
    rank: "熟練 · Codebasics Certified",
    summary: "Relational schema design, normalization, constraint enforcement, and data integrity pipelines.",
    capabilities: [
      "Schema Design (3NF Normalization)",
      "Foreign Keys & ACID Transactions",
      "Stored Procedures & Trigger Automation",
      "Bulk ETL Data Ingestion"
    ],
    projectUsed: "Kirana Predict Store Database",
    codeSnippet: "CREATE TABLE inventory (\n  sku_id VARCHAR(20) PRIMARY KEY,\n  stock_level INT NOT NULL,\n  reorder_point INT CHECK (stock_level >= 0)\n);"
  },
  {
    id: "excel",
    label: "Excel & Sheets",
    category: "bi",
    pct: 85,
    color: "#00b4d8",
    kanji: "表計",
    rank: "上級 · Advanced Specialist",
    summary: "Executive financial modeling, automated Pivot tables, dynamic lookups, and presentation-ready chart suites.",
    capabilities: [
      "XLOOKUP, INDEX/MATCH & Nested Logic",
      "Pivot Tables, Slicers & Power Pivot",
      "What-If Analysis & Scenario Manager",
      "Conditional Formatting & Macro Basics"
    ],
    projectUsed: "Financial forecasting & KPI trackers",
    codeSnippet: "=XLOOKUP(A2, Products!A:A, Products!D:D, 0, 0)"
  },
  {
    id: "powerbi",
    label: "Power BI & DAX",
    category: "bi",
    pct: 75,
    color: "#e879f9",
    kanji: "可視",
    rank: "精通 · Intermediate Pro",
    summary: "Interactive corporate dashboards, star-schema data modeling, and custom DAX calculated measures.",
    capabilities: [
      "Star Schema Data Modeling",
      "DAX Measures (CALCULATE, FILTER, DATESYTD)",
      "Custom Drillthroughs & Bookmarks",
      "Automated Refresh & Power Query M"
    ],
    projectUsed: "Store Performance & Sales Analytics",
    codeSnippet: "Sales_YoY_Growth = \nVAR CurrentSales = [Total_Sales]\nVAR PrevSales = CALCULATE([Total_Sales], SAMEPERIODLASTYEAR('Calendar'[Date]))\nRETURN DIVIDE(CurrentSales - PrevSales, PrevSales)"
  },
  {
    id: "python",
    label: "Python Analytics",
    category: "scripting",
    pct: 80,
    color: "#f59e0b",
    kanji: "蛇言",
    rank: "熟練 · Core Language",
    summary: "Automating data cleaning, REST API integrations, web scrapers, and predictive forecasting pipelines.",
    capabilities: [
      "Data Manipulation & Cleaning Automation",
      "REST API Data Extraction & JSON Parsing",
      "Streamlit App Development",
      "Machine Learning Pipeline Integration"
    ],
    projectUsed: "Kirana Predict & Asteroid Impact",
    codeSnippet: "import requests, pandas as pd\nres = requests.get('https://api.nasa.gov/neo/rest/v1/feed')\ndf = pd.json_normalize(res.json()['near_earth_objects'])"
  },
  {
    id: "pandas",
    label: "Pandas & NumPy",
    category: "scripting",
    pct: 72,
    color: "#00d68f",
    kanji: "数値",
    rank: "上級 · Vector Processing",
    summary: "High-performance vector operations, missing data imputation, outlier detection, and time-series resamplers.",
    capabilities: [
      "Vectorized Data Transformation",
      "Time-Series Rolling Windows & Resampling",
      "Multi-Index GroupBy & Pivot Wrangling",
      "Outlier Detection & Z-Score Imputation"
    ],
    projectUsed: "Retail SKU Demand Aggregations",
    codeSnippet: "df['rolling_7d_demand'] = (\n  df.groupby('sku')['sales']\n    .transform(lambda x: x.rolling(7, min_periods=1).mean())\n)"
  },
  {
    id: "stats",
    label: "Applied Statistics",
    category: "stats",
    pct: 75,
    color: "#f97316",
    kanji: "統計",
    rank: "学術 · Statistical Grounding",
    summary: "Hypothesis testing, probability distributions, A/B test analysis, and linear regression validation.",
    capabilities: [
      "Hypothesis Testing (p-values, t-tests, ANOVA)",
      "Descriptive & Inferential Metrics",
      "Regression Diagnostics & Correlation Matrix",
      "Probability Modeling for Risk Scoring"
    ],
    projectUsed: "Asteroid Impact Probability & Prophet",
    codeSnippet: "from scipy import stats\nt_stat, p_val = stats.ttest_ind(control_group, variant_group)\nprint(f'Statistically Significant: {p_val < 0.05}')"
  },
  {
    id: "storytelling",
    label: "Data Storytelling",
    category: "stats",
    pct: 70,
    color: "#00b4d8",
    kanji: "物語",
    rank: "伝達 · Decision Facilitator",
    summary: "Translating ambiguous statistical models into clear executive insights that drive confident decision-making.",
    capabilities: [
      "Executive Summary & Insight Distillation",
      "Visual Hierarchy & Cognitive Load Reduction",
      "Business Case ROI Justification",
      "Stakeholder Presentations & Narrative Flow"
    ],
    projectUsed: "Client Project Deliverables & Reports",
    codeSnippet: "// Key Stakeholder Takeaway: \n// 30% reduction in safety stock overhead achieved \n// with zero stockout incidents across 6 months."
  },
];

export const STATS = [
  { val: 4, suffix: "+", label: "Projects Shipped", kanji: "実績" },
  { val: 90, suffix: "%", label: "SQL Proficiency", kanji: "熟練" },
  { val: 3, suffix: "rd", label: "Year Student", kanji: "学年" },
  { val: 6, suffix: "mo", label: "Roadmap Progress", kanji: "歩み" },
];

export const CREDENTIALS = [
  { text: "HackerRank SQL Gold Badge", color: "#00d68f" },
  { text: "MySQL — Codebasics Certified", color: "#00b4d8" },
  { text: "Google DA Certificate — In Progress", color: "#f59e0b" },
];

export const IKIGAI_ITEMS = [
  {
    id: "love",
    kanji: "好き",
    title: "What I Love",
    subtitle: "Passion & Curiosity",
    desc: "Finding patterns in messy, real-world data and discovering the stories hidden within rows.",
    tag: "情熱 (Passion)"
  },
  {
    id: "good",
    kanji: "得意",
    title: "What I'm Good At",
    subtitle: "Craft & Technical Skills",
    desc: "Complex SQL queries, Python data pipelines, statistical modeling, and intuitive dashboarding.",
    tag: "技能 (Skill)"
  },
  {
    id: "need",
    kanji: "必要",
    title: "What The World Needs",
    subtitle: "Impact & Clarity",
    desc: "Clear, evidence-backed insights that empower businesses and communities to make confident choices.",
    tag: "使命 (Mission)"
  },
  {
    id: "paid",
    kanji: "稼げる",
    title: "What I Can Be Paid For",
    subtitle: "Value & Profession",
    desc: "Data Analyst & Business Analyst roles that drive measurable efficiency and revenue growth.",
    tag: "天職 (Vocation)"
  },
];

export const CASE_STUDIES = [
  {
    iconSlug: "streamlit",
    title: "Kirana Predict",
    subtitle: "AI Demand Forecasting",
    image: kiranaArt,
    tagKanji: "店舗予測",
    problem: "Small kirana stores over-ordering stock, draining cash flow and creating waste.",
    approach: "Built ML forecasting pipeline with Prophet + MySQL. Learns from 6 months of sales history to predict weekly demand per SKU. Automated reorder emails.",
    outcome: "Projected 30% overstock reduction. Live Streamlit dashboard for one-glance restocking decisions.",
    tools: ["Python", "Prophet", "MySQL", "Streamlit"],
    link: "https://github.com/Amithab88/Kirana-Predict"
  },
  {
    iconSlug: "python",
    title: "CricPulseIQ",
    subtitle: "Sports Analytics Engine",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
    tagKanji: "競技分析",
    problem: "Coaches lacked objective tools to compare player performance across formats.",
    approach: "SQL CTEs and window functions compute composite scores — batting average, strike rate, economy — normalized per innings and format.",
    outcome: "Surfaced 3 patterns invisible in raw scorecards. Interactive dashboard filters by role and format.",
    tools: ["Python", "SQL", "CTEs", "Window Functions"],
    link: "https://github.com/Amithab88"
  },
  {
    iconSlug: "flask",
    title: "Asteroid Impact",
    subtitle: "Orbital Risk Model",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    tagKanji: "軌道解析",
    problem: "NASA orbital datasets are too complex for non-specialists to assess risk from.",
    approach: "Flask web app ingests JPL orbital parameters, computes impact probability via physics formulas, renders interactive D3.js trajectory charts.",
    outcome: "Full pipeline: ingest → transform → visualize. Translates scientific data into readable risk scores.",
    tools: ["Python", "Flask", "NASA API", "D3.js"],
    link: "https://github.com/Amithab88"
  },
  {
    iconSlug: "opencv",
    title: "Object Recognition AI",
    subtitle: "Real-Time Vision Pipeline",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tagKanji: "視覚知能",
    problem: "Manual image tagging is slow and error-prone at scale.",
    approach: "YOLOv8 + OpenCV pipeline. Frame extraction, bounding box annotation, confidence thresholding in a single optimized Python script.",
    outcome: "Real-time multi-class detection at 24fps. Demonstrates applied ML pipeline skills for data preprocessing roles.",
    tools: ["Python", "YOLOv8", "OpenCV", "NumPy"],
    link: "https://github.com/Amithab88"
  },
];

export const JOURNEY_EVENTS = [
  {
    year: "Jan 2024",
    label: "B.Tech Begins",
    detail: "Enrolled in AI & Data Science Engineering at Dr. N.G.P IT, Coimbatore.",
    type: "education",
    kanji: "始"
  },
  {
    year: "Mar 2024",
    label: "First SQL Project",
    detail: "Wrote first analytical queries on real datasets — the beginning of the data journey.",
    type: "database",
    kanji: "問"
  },
  {
    year: "Jun 2024",
    label: "MySQL Certified",
    detail: "Codebasics MySQL certification — window functions, CTEs, subqueries mastered.",
    type: "certificate",
    kanji: "証"
  },
  {
    year: "Sep 2024",
    label: "Kirana Predict",
    detail: "First end-to-end ML project — demand forecasting for real retail stores.",
    type: "project",
    kanji: "創"
  },
  {
    year: "Dec 2024",
    label: "HackerRank SQL Gold",
    detail: "Earned Gold SQL badge through competitive analytical problem solving.",
    type: "award",
    kanji: "誉"
  },
  {
    year: "Feb 2025",
    label: "CricPulseIQ",
    detail: "Advanced SQL analytics — window functions, CTEs, and interactive dashboards.",
    type: "project",
    kanji: "脈"
  },
  {
    year: "Apr 2025",
    label: "Google DA Cert",
    detail: "Enrolled in Google Data Analytics Certificate on Coursera — in progress.",
    type: "certificate",
    kanji: "修"
  },
  {
    year: "Jun 2025",
    label: "Asteroid + CV AI",
    detail: "Full-stack data products and computer vision ML pipelines shipped.",
    type: "project",
    kanji: "宙"
  },
  {
    year: "2026 →",
    label: "Internship Target",
    detail: "Actively applying for Data Analyst and Business Analyst internship roles.",
    type: "goal",
    kanji: "躍"
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home", kanji: "家" },
  { label: "Profile", href: "#profile", kanji: "略" },
  { label: "Ikigai", href: "#ikigai", kanji: "甲" },
  { label: "Skills", href: "#toolkit", kanji: "術" },
  { label: "Work", href: "#case-studies", kanji: "作" },
  { label: "Timeline", href: "#journey", kanji: "歴" },
  { label: "Contact", href: "#contact", kanji: "信" }
];
