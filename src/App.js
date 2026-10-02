import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CalendarRange,
  CheckCircle2,
  Cpu,
  Database,
  Download,
  Github,
  GraduationCap,
  Layout,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Phone,
  Server,
  Shield,
  Sparkles,
  SunMedium,
  Target,
  Trophy,
} from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

const cvPath = `${process.env.PUBLIC_URL}/Cv_AbdoulSalam_dodoTahirou.pdf`;
const myEmail = 'dodotahirouabdoulsalam2003@gmail.com';
const linkedinUrl = 'https://www.linkedin.com/in/idodo12';
const githubUrl = 'https://github.com/';
const photoPath = '/maphoto.png';

const experience = [
  {
    title: 'Data & Innovation Engineering Intern',
    company: 'France Monceau',
    location: 'Paris, France (remote)',
    period: 'since July 2026',
    description: 'Development of an intelligent e-commerce platform including online store, CRM, call center and AI-based decision support tools.',
  },
  {
    title: 'Software Development Intern',
    company: '3LM Solutions',
    location: 'Bizerte, Tunisia (remote)',
    period: 'since July 2026',
    description: 'CRM development, call center module, business interface and contribution to mobile application development.',
  },
  {
    title: 'Software Engineering Intern',
    company: 'Technorium Company',
    location: 'Niamey, Niger',
    period: 'Aug–Oct 2024',
    description: 'Front-end and back-end development with JavaScript and Java, along with system script optimization and team collaboration.',
  },
];

const education = [
  {
    title: 'Master 2 MIAGE IA2 — Applied AI',
    school: 'Université Côte d’Azur, France',
    period: '2026–2027',
    note: 'Dual degree — program held in Morocco',
  },
  {
    title: 'State Engineering Degree — Computer Science & Networks, spec. AI & Data Science',
    school: 'EMSI, Rabat',
    period: 'En Cours',
    note: '',
  },
  {
    title: "Bachelor's Degree — Software Engineering",
    school: 'FST Errachidia',
    period: '2023–2024',
    note: '',
  },
  {
    title: 'DEUST — Math, CS & Physics',
    school: 'FST Errachidia',
    period: '2021–2023',
    note: '',
  },
];

const projects = [
  {
    id: 'malware-detection',
    title: 'Malware Detection via CNN',
    category: 'AI',
    tech: 'CNN • TensorFlow • Deep Learning',
    metric: '96% accuracy',
    summary: 'Deep-learning model for detecting malware patterns from structured input data with high predictive performance.',
    description: 'This project focuses on building an intelligent malware detection system using convolutional neural networks. The goal was to learn patterns in malware-related features and separate malicious samples from benign ones with strong generalization and a low false-negative rate.',
    context: 'Academic AI project focused on applied deep learning and classification performance.',
    role: 'I designed and implemented the model pipeline, from data preparation and feature transformation to training, validation, and performance evaluation.',
    contributions: [
      'Developed the CNN-based classification pipeline in Python using TensorFlow/Keras.',
      'Cleaned and normalized the dataset to improve model consistency and training quality.',
      'Evaluated model behavior using accuracy, loss curves, and validation analysis.',
      'Documented the architecture choices and optimization process for a replicable workflow.'
    ],
    techStack: ['Python', 'TensorFlow', 'Keras', 'CNN', 'NumPy', 'Pandas', 'Scikit-learn', 'Jupyter Notebook'],
    results: ['96% accuracy on the validation/test evaluation', 'Strong classification performance for malware detection tasks', 'Satisfactory robustness for an applied deep-learning proof of concept'],
    githubUrl: '[ADD: GitHub repository link]',
    demoUrl: '[ADD: demo or notebook link]',
    icon: <Shield size={22} />,
  },
  {
    id: 'nutritional-detection',
    title: 'Nutritional Detection via Computer Vision',
    category: 'AI',
    tech: 'YOLOv8 ',
    metric: '92% accuracy',
    summary: 'Computer-vision system for detecting food items and nutritional cues to support practical decision-making in food-related contexts.',
    description: 'This project explores automated object detection for food recognition and nutritional analysis using computer vision. The system was designed to identify items from images and support agricultural and health-oriented applications where rapid visual interpretation is valuable.',
    context: 'Applied computer-vision project combining image analysis and practical use cases in health and agriculture.',
    role: 'I contributed to the model pipeline, dataset preparation, and evaluation strategy for the detection system.',
    contributions: [
      'Worked with image annotation and dataset preparation for training an object-detection model.',
      'Configured the YOLOv8 pipeline for food and nutrition detection tasks.',
      'Assessed model performance and refined the detection workflow for improved accuracy.',
      'Explored how computer vision can be applied to decision support in real-world scenarios.'
    ],
    techStack: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch', 'Computer Vision', 'PFA', 'Labeling tools', 'Google Colab'],
    results: ['92% accuracy on the target detection task', 'Improved visual recognition for food-related pattern detection', 'Demonstrated practical potential for AI-assisted nutrition or agriculture workflows'],
    githubUrl: '[ADD: GitHub repository link]',
    demoUrl: '[ADD: demo or sample inference link]',
    icon: <BrainCircuit size={22} />,
  },
  {
    id: 'agentic-ai-rag',
    title: 'Agentic AI & RAG Conversational Assistant',
    category: 'AI',
    tech: 'LangChain • Vector Memory • Few-Shot',
    metric: 'Advanced reasoning',
    summary: 'Conversational assistant combining retrieval-augmented generation, memory, and reasoning chains for deeper contextual interactions.',
    description: 'This project implements an AI assistant that goes beyond a simple chatbot by combining retrieval mechanisms, vector memory, few-shot prompting, and agentic behavior to answer questions more intelligently and contextually. It is designed for document-based interaction and advanced reasoning tasks.',
    context: 'AI prototype / advanced LLM application built around retrieval and reasoning workflows.',
    role: 'I worked on the assistant architecture, prompt strategy, retrieval setup, and the integration of memory-aware conversational logic.',
    contributions: [
      'Built the RAG pipeline using vector retrieval and document chunking strategies.',
      'Implemented memory-aware interactions for contextual continuity across exchanges.',
      'Applied few-shot prompting and reasoning-oriented prompt design to improve answer quality.',
      'Explored fine-tuning and agentic orchestration ideas for more autonomous interactions.'
    ],
    techStack: ['Python', 'LangChain', 'RAG', 'Vector databases', 'Prompt Engineering', 'Few-Shot Learning', 'Chain-of-Thought reasoning', 'LLM APIs', 'Fine-tuning workflows'],
    results: ['Improved contextual relevance through retrieval and memory', 'More coherent multi-turn dialogue behavior', 'Strong prototype for advanced LLM application design'],
    githubUrl: '[ADD: GitHub repository link]',
    demoUrl: '[ADD: live demo or prototype link]',
    icon: <Bot size={22} />,
  },
  {
    id: 'hotel-forecasting',
    title: 'Hotel-Occupancy ML Forecasting',
    category: 'Data',
    tech: 'ML • Regression • Scikit-learn',
    metric: 'Predictive analytics',
    summary: 'Machine-learning forecasting system for hotel occupancy trends to improve planning and business decisions.',
    description: 'This project focuses on predicting room occupancy using historical and feature-based data. The objective was to turn operational data into actionable forecasts that can support pricing, staffing, and planning decisions in hospitality environments.',
    context: 'Data-science project centered on forecasting and decision support in a business context.',
    role: 'I handled the end-to-end pipeline: data cleaning, feature engineering, model selection, training, validation, and communication of the results.',
    contributions: [
      'Developed forecasting models using regression and machine-learning techniques.',
      'Prepared datasets and engineered predictors from operational patterns.',
      'Compared model performance to identify the most suitable forecasting approach.',
      'Translated analytical outputs into business-facing insights.'
    ],
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Regression models', 'Feature engineering', 'Jupyter Notebook', 'Data visualization'],
    results: ['Forecasting model for hotel occupancy estimation', 'Improved planning insight for operational decision-making', 'Demonstrated value of predictive analytics for a service business'],
    githubUrl: '[ADD: GitHub repository link]',
    demoUrl: '[ADD: notebook or dashboard link]',
    icon: <BarChart3 size={22} />,
  },
  {
    id: 'bi-etl-dwh',
    title: 'BI / ETL Data Warehouse',
    category: 'Data',
    tech: 'ETL • BI • Data Modeling',
    metric: 'Decision support',
    summary: 'Data warehouse and ETL design for structured reporting, dashboards, and business decision support.',
    description: 'This project covers the design of a business intelligence architecture based on ETL pipelines and structured data warehousing. The goal was to transform raw operational data into reliable analytical information for dashboards, reporting, and decision-making.',
    context: 'Data-engineering project with enterprise-style analytics and reporting goals.',
    role: 'I contributed to the design of the warehouse model, ETL logic, and reporting structure to support analytical use cases.',
    contributions: [
      'Modeled and structured data for analytical reporting.',
      'Designed ETL processes to clean, transform, and load source data.',
      'Worked on business-oriented dashboard logic and KPI organization.',
      'Built a foundation for decision-support workflows based on reliable data.'
    ],
    techStack: ['SQL', 'ETL pipelines', 'Data modeling', 'Business Intelligence', 'Power BI or Tableau', 'Database design', 'Data warehousing concepts', 'Data cleaning tools'],
    results: ['Structured analytical reporting workflow', 'Improved visibility into operational performance', 'Ready-to-use foundation for dashboard-based business decisions'],
    githubUrl: '[ADD: GitHub repository link]',
    demoUrl: '[ADD: dashboard screenshot or demo link]',
    icon: <Database size={22} />,
  },
  {
    id: 'iot-dashboard',
    title: 'Real-Time IoT Dashboard (MQTT)',
    category: 'Data',
    tech: 'MQTT • IoT • Dashboard',
    metric: 'Live monitoring',
    summary: 'Real-time monitoring dashboard for connected devices and sensor data using MQTT-based communication.',
    description: 'This project focuses on building an operational monitoring system where IoT sensor data is streamed in real time and visualized through a dashboard. The result is a practical observability tool for infrastructure and device-level monitoring.',
    context: 'IoT / monitoring project centered on real-time data flow and system visibility.',
    role: 'I participated in the architecture and implementation of the data flow, from MQTT message handling to the live dashboard interface.',
    contributions: [
      'Connected sensors or simulated devices to a real-time messaging layer.',
      'Implemented MQTT-based communication and data streaming logic.',
      'Built a dashboard to visualize live metrics and operational events.',
      'Focused on monitoring usability and responsiveness.'
    ],
    techStack: ['MQTT', 'Python', 'JavaScript', 'Node.js', 'React', 'IoT protocols', 'Real-time dashboards', 'WebSockets or streaming interfaces'],
    results: ['Live monitoring of device and sensor states', 'Improved operational visibility in real time', 'Practical IoT dashboard prototype for observability use cases'],
    githubUrl: '[ADD: GitHub repository link]',
    demoUrl: '[ADD: live dashboard or video demo link]',
    icon: <Cpu size={22} />,
  },
  {
    id: 'mongodb-library-system',
    title: 'MongoDB Library Management System',
    category: 'Full-Stack',
    tech: 'MongoDB • Node.js • React',
    metric: 'Data-driven app',
    summary: 'NoSQL-based library management platform for catalog management, user records, loans, and document workflows.',
    description: 'This application was designed to centralize library operations such as book management, member records, borrowing flows, and administrative processes. The project highlights full-stack development with a document-oriented database architecture.',
    context: 'Full-stack project for a practical, data-driven application in a library administration scenario.',
    role: 'I contributed to both the back-end logic and the front-end interface to support users and administrators in daily operations.',
    contributions: [
      'Designed the data model for books, users, and loans using MongoDB.',
      'Built the application logic for catalog management and borrowing processes.',
      'Developed a user-friendly interface for operational tasks and tracking.',
      'Structured the system to support easy maintenance and data expansion.'
    ],
    techStack: ['MongoDB', 'Node.js', 'Express.js', 'React', 'JavaScript', 'REST API', 'NoSQL modeling', 'Bootstrap or CSS', 'Authentication flow'],
    results: ['Centralized library operations in one platform', 'Realistic data-driven workflow for resource management', 'Strong example of full-stack application design'],
    githubUrl: '[ADD: GitHub repository link]',
    demoUrl: '[ADD: app demo or screenshots link]',
    icon: <Layout size={22} />,
  },
  {
    id: 'linux-hardening',
    title: 'Linux / Cybersecurity Server Hardening',
    category: 'Cybersecurity',
    tech: 'Linux • Security • Hardening',
    metric: 'System resilience',
    summary: 'Server hardening project focused on security baseline improvements, access control, and system resilience.',
    description: 'This project addresses infrastructure security by hardening a Linux server and reinforcing the configuration against common attack vectors. The focus was on building a more secure and resilient system environment through configuration and access-management best practices.',
    context: 'Cybersecurity and systems administration project focused on secure infrastructure practices.',
    role: 'I worked on the security setup, baseline improvements, and the analysis of key hardening measures needed for a safer server environment.',
    contributions: [
      'Reviewed server configurations and identified security gaps.',
      'Applied hardening principles for access control and service protection.',
      'Improved auditability and system-level security posture.',
      'Documented recommended practices for a more resilient Linux environment.'
    ],
    techStack: ['Linux', 'Ubuntu or Debian', 'Bash', 'Security hardening', 'Firewall configuration', 'User permissions', 'System monitoring', 'SSH hardening'],
    results: ['Strengthened system configuration for improved resilience', 'Reduced exposure to common infrastructure risks', 'Practical cybersecurity hardening workflow'],
    githubUrl: '[ADD: GitHub repository link or documentation]',
    demoUrl: '[ADD: screenshots or environment notes]',
    icon: <Server size={22} />,
  },
  {
    id: 'medical-booking-platform',
    title: 'C#.NET Medical Booking Platform',
    category: 'Full-Stack',
    tech: 'C# • .NET • SQL',
    metric: 'Clinical workflow',
    summary: 'Medical appointment platform designed to streamline patient scheduling, consultation management, and administrative workflows.',
    description: 'This project is a healthcare-oriented booking platform built to manage appointment scheduling and administrative coordination. The system is intended to improve medical workflow organization and simplify patient booking experiences.',
    context: 'Full-stack professional software project in a healthcare management scenario.',
    role: 'I contributed to the application design and implementation of the booking and workflow logic within a .NET environment.',
    contributions: [
      'Developed the core business flow for appointment scheduling and patient management.',
      'Structured the application architecture for maintainability and clarity.',
      'Integrated data persistence and business logic in a robust application setup.',
      'Focused on user workflow efficiency and practical healthcare use cases.'
    ],
    techStack: ['C#', '.NET', 'SQL', 'Entity Framework', 'ASP.NET', 'Database design', 'UI / business logic', 'System modeling'],
    results: ['Simplified medical appointment scheduling workflow', 'Improved structure and visibility for patient operations', 'Strong example of workflow-oriented full-stack design'],
    githubUrl: '[ADD: GitHub repository link]',
    demoUrl: '[ADD: demo or screenshots link]',
    icon: <Building2 size={22} />,
  },
];

const skills = [
  { label: 'Advanced AI', values: ['LLM', 'RAG', 'Agentic AI', 'LangChain', 'Prompt Engineering'] },
  { label: 'Deep Learning', values: ['CNN', 'TensorFlow', 'Scikit-learn', 'Computer Vision'] },
  { label: 'Full-Stack', values: ['React', 'React Native', 'Node.js', 'JavaScript', 'Java', 'C/C++', 'PHP'] },
  { label: 'Data & Cloud', values: ['MongoDB', 'MySQL', 'PostgreSQL', 'BI', 'ETL', 'Oracle Cloud Infrastructure'] },
  { label: 'Certifications', values: ['OCI AI Foundations Associate (2026)', 'Intro to Big Data', 'Agile Project Management', 'React Native', 'React Basics'] },
  { label: 'Languages', values: ['English (advanced)', 'French (native)', 'Hausa (native)', 'Zarma (native)', 'Darija (basic)'] },
];

const stats = [
  { label: 'project outcomes', value: 12, suffix: '+' },
  { label: 'AI & Data projects', value: 96, suffix: '%' },
  { label: 'certifications', value: 5, suffix: '' },
  { label: 'years of learning', value: 6, suffix: '+' },
];

const projectFilters = ['All', 'AI', 'Full-Stack', 'Data', 'Cybersecurity'];

const leadershipEntries = [
  {
    title: 'Secretary General',
    org: 'Association of Nigerien Students in Morocco (ANEM)',
    period: '2022 – 2023',
    summary: 'I serve as Secretary General of the Association of Nigerien Students in Morocco, where I support coordination, communication and student representation across the community.',
    description: 'I was appointed Secretary General of the Association of Nigerien Students in Morocco in Errachidia section. My mission is to create a climate of unity, brotherhood and cohesion within the Nigerian community in Morocco, while also promoting NIGERIAN culture and strengthening student engagement through structured leadership.',
    impact: 'This role helped me strengthen my communication, coordination, and leadership skills while contributing to the welfare, visibility, and unity of the Nigerien student community.',
    contributions: [
      'Coordinate internal communication, documentation, and organizational planning.',
      'Support the structuring of meetings, student mobilization, and event preparation.',
      'Help maintain cohesion among students and strengthen cultural identity within the diaspora.',
      'Contribute to student representation and engagement activities across the community.'
    ],
    highlights: ['Student leadership', 'Community coordination', 'Representation and communication'],
  },
  {
    title: 'President and Vice-President',
    org: 'Association of the African fraternity in Errachidia (AFAE)',
    period: '2022 – 2024',
    summary: 'I was appointed Vice President of the African Students Association in Errachidia and later led the association through a period of growth and community mobilization.',
    description: 'Right at the beginning of my first academic year at FST Errachidia, I was appointed Vice President of the Association La Fraternité Africaine a Errachidia. During this year I learned to create the conditions to bring together the different student communities, especially the sub-Saharan communities. In 2022, I was elected president of this association and had the opportunity to meet the highest authorities of the city of Errachidia. We organized a lot of events especially during the months of Ramadan and the holidays. We had adopted a posture of unity of all Africans together. It has been a great experience because it earned me a re-election to the following year.',
    impact: 'This leadership experience strengthened my ability to organize communities, support cultural inclusion, and manage collective initiatives with a strong social purpose.',
    contributions: [
      'Led the association during a critical phase of student unity and mobilization.',
      'Organized events and community initiatives centered on inclusion and belonging.',
      'Built bridges between different African student communities in Errachidia.',
      'Supported the association’s long-term visibility and internal stability.'
    ],
    highlights: ['Community leadership', 'Student mobilization', 'Cultural and social inclusion'],
  },
  {
    title: 'Active Member',
    org: 'CESAM / Student and Community Networks',
    period: '2021 – Present',
    summary: 'I remain active in student and community networks where I contribute to collaboration, engagement, and social impact initiatives.',
    description: 'I am involved in student and community initiatives where leadership, exchange, and solidarity are central. These roles allow me to stay connected to collective action and support student life beyond the classroom.',
    impact: 'These engagements helped me develop a strong sense of responsibility, team coordination, and social commitment within my academic environment.',
    contributions: [
      'Participate in collective student initiatives and community engagement efforts.',
      'Support networking and collaboration between student groups.',
      'Contribute to inclusive and socially meaningful activities.',
      'Strengthen a culture of teamwork and collective responsibility.'
    ],
    highlights: ['Teamwork', 'Student engagement', 'Community support'],
  },
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [activeFilter, setActiveFilter] = useState('All');
  const [counts, setCounts] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedLeadership, setSelectedLeadership] = useState(null);

  useEffect(() => {
    if (!selectedProject && !selectedLeadership) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
        setSelectedLeadership(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, selectedLeadership]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            const targetValue = stats[index].value;
            let current = 0;
            const increment = Math.max(1, Math.ceil(targetValue / 60));
            const timer = setInterval(() => {
              current += increment;
              setCounts((prev) => ({ ...prev, [index]: Math.min(current, targetValue) }));
              if (current >= targetValue) clearInterval(timer);
            }, 24);
          }
        });
      },
      { threshold: 0.5 }
    );

    const elements = document.querySelectorAll('.stat-card');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') || 'Hello';
    const email = formData.get('email') || '';
    const message = formData.get('message') || '';
    const subject = encodeURIComponent('Portfolio inquiry');
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="app-shell">
      <nav className="topbar">
        <div className="container nav-inner">
          <a href="#home" className="brand">
            DODO TAHIROU <span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>
            <a href={linkedinUrl} target="_blank" rel="noreferrer" className="button button-primary small-button">
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      <main id="home">
        <section className="hero section-spacing">
          <div className="container hero-grid">
            <div className="profile-card reveal">
              <div className="profile-glow" />
              <img
                src={photoPath}
                alt="Dodo Tahirou Abdoul Salam"
                onError={(e) => {
                  if (!e.target.src.includes('maphoto.jpeg')) e.target.src = '/maphoto.jpeg';
                  else if (!e.target.src.includes('maphoto.jpg')) e.target.src = '/maphoto.jpg';
                }}
              />
            </div>

            <div className="hero-copy reveal">
              <div className="badge-row">
                <span className="badge badge-gold"><Trophy size={14} /> Silver Medal — EMSI Innovation AI TechForGood Hackathon 2026</span>
                <span className="badge badge-blue"><Sparkles size={14} /> Double Degree — EMSI × Université Côte d’Azur</span>
              </div>

              <h1>
                Dodo Tahirou <span>Abdoul Salam</span>
              </h1>

              <p className="lead">
                Double Degree Candidate specializing in AI & Data Science (EMSI) and Applied Artificial Intelligence (Master 2 MIAGE, Université Côte d’Azur). Focused on LLM, RAG, Agentic AI, Deep Learning and Computer Vision.
              </p>

              <div className="availability-box">
                <Target size={18} />
                <span>Available for a 6-month PFE internship (AI / ML / Data Science) starting February 2027</span>
              </div>

              <div className="cta-row">
                <a href="#contact" className="button button-primary">
                  <Mail size={18} /> Contact Me
                </a>
                <a href={cvPath} download className="button button-secondary">
                  <Download size={18} /> Download CV
                </a>
                <a href={linkedinUrl} target="_blank" rel="noreferrer" className="button button-ghost">
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a href={githubUrl} target="_blank" rel="noreferrer" className="button button-ghost">
                  <Github size={18} /> GitHub
                </a>
              </div>

              <div className="hero-meta">
                <div><MapPin size={14} /> Rabat, Morocco</div>
                <div><Phone size={14} /> +212 638 402 716</div>
                <div><Mail size={14} /> {myEmail}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="quick-summary section-spacing gradient-panel">
          <div className="container summary-grid">
            <div className="summary-card reveal">
              <BriefcaseBusiness size={22} />
              <h3>Profile</h3>
              <p>AI/Data Science engineer in training with a strong interest in LLMs, computer vision, intelligent systems and applied decision support.</p>
            </div>
            <div className="summary-card reveal">
              <GraduationCap size={22} />
              <h3>Education</h3>
              <p>Double degree candidate in AI & Data Science and Applied Artificial Intelligence with a strong academic foundation in software engineering.</p>
            </div>
            <div className="summary-card reveal">
              <Target size={22} />
              <h3>Focus</h3>
              <p>LLM, RAG, Agentic AI, Deep Learning, Computer Vision, and data-driven product engineering for real-world impact.</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section-spacing">
          <div className="container">
            <SectionHeader eyebrow="Career" title="Experience & impact" description="Professional exposure across software engineering, AI projects and digital product delivery." />
            <div className="timeline timeline-experience">
              {experience.map((item) => (
                <TimelineItem key={item.company + item.period} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing entrepreneur-panel">
          <div className="container entrepreneur-wrap reveal">
            <div className="entrepreneur-header">
              <span className="section-kicker">Entrepreneurship</span>
              <h3>Founder & CEO — Salam Tech Africa</h3>
            </div>
            <p>
              Tech startup dedicated to digital solutions and innovation in Africa, combining product thinking, technology and pragmatic impact for underserved ecosystems.
            </p>
          </div>
        </section>

        <section className="section-spacing">
          <div className="container">
            <SectionHeader eyebrow="Education" title="Academic path" description="An academic journey built around AI, data engineering, software design and applied intelligence." />
            <div className="timeline timeline-education">
              {education.map((item) => (
                <EducationItem key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-spacing">
          <div className="container">
            <SectionHeader eyebrow="Portfolio" title="Flagship projects" description="Selected work combining AI, data, software engineering and operational impact." />

            <div className="filter-row reveal">
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="project-grid">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.title} project={project} onOpen={() => setSelectedProject(project)} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-spacing">
          <div className="container">
            <SectionHeader eyebrow="Skills" title="AI, data and engineering stack" description="A multidisciplinary profile spanning machine learning, software engineering and cloud-native applications." />

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card reveal" key={skill.label}>
                  <h3>{skill.label}</h3>
                  <div className="tag-list">
                    {skill.values.map((value) => (
                      <span key={value} className="tag">{value}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing stats-panel">
          <div className="container stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card reveal" key={stat.label} data-index={index}>
                <strong>
                  {counts[index] || 0}
                  {stat.suffix}
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-spacing leadership-block">
          <div className="container leadership-wrap reveal">
            <SectionHeader eyebrow="Leadership" title="Leadership & engagement" description="Professional and student leadership centered on community building and collective impact." />
            <div className="leadership-grid">
              {leadershipEntries.map((item) => (
                <LeadershipItem key={item.title + item.org} item={item} onOpen={() => setSelectedLeadership(item)} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-spacing author-section">
          <div className="container author-wrap reveal">
            <div className="author-content">
              <span className="section-kicker">Author</span>
              <h3>Le Codeur de Niamey</h3>
              <p>
                Author of the novel <strong>Le Codeur de Niamey</strong> by Albarkeyzé Dan Mallam, about an African youth building an AI tool and navigating the intersection between technology, ambition and identity.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-spacing contact-section">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <SectionHeader eyebrow="Contact" title="Let’s build something impactful" description="Open to internship opportunities in AI, ML and Data Science starting February 2027." />
              <div className="contact-badges">
                <span className="availability-pill"><CalendarRange size={16} /> Open to opportunities</span>
                <span className="availability-pill muted"><CheckCircle2 size={16} /> February 2027</span>
              </div>
            </div>

            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project or internship opportunity" required />
              </div>
              <button type="submit" className="button button-primary full-width">
                <ArrowRight size={18} /> Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button type="button" className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">
              ×
            </button>

            <div className="project-modal-header">
              <div className="project-modal-icon">{selectedProject.icon}</div>
              <div>
                <span className="project-category modal-category">{selectedProject.category}</span>
                <h3 id="project-modal-title">{selectedProject.title}</h3>
              </div>
            </div>

            <p className="project-modal-summary">{selectedProject.summary}</p>

            <div className="project-modal-grid">
              <div>
                <div className="project-modal-section">
                  <h4>Overview</h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="project-modal-section">
                  <h4>Context</h4>
                  <p>{selectedProject.context}</p>
                </div>

                <div className="project-modal-section">
                  <h4>My role & contributions</h4>
                  <ul>
                    {selectedProject.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="project-modal-section">
                  <h4>Tech stack</h4>
                  <div className="tag-list modal-tag-list">
                    {selectedProject.techStack.map((item) => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </div>
                </div>

                <div className="project-modal-section">
                  <h4>Key results</h4>
                  <ul>
                    {selectedProject.results.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-modal-section">
                  <h4>Links</h4>
                  <div className="project-modal-links">
                    {selectedProject.githubUrl && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="button button-secondary small-button">
                        GitHub
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="button button-ghost small-button">
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedLeadership && (
        <div className="project-modal-overlay" onClick={() => setSelectedLeadership(null)}>
          <div className="project-modal" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="leadership-modal-title">
            <button type="button" className="modal-close" onClick={() => setSelectedLeadership(null)} aria-label="Close leadership details">
              ×
            </button>

            <div className="project-modal-header">
              <div className="project-modal-icon"><BriefcaseBusiness size={28} /></div>
              <div>
                <span className="project-category modal-category">Leadership</span>
                <h3 id="leadership-modal-title">{selectedLeadership.title}</h3>
              </div>
            </div>

            <p className="project-modal-summary">{selectedLeadership.summary}</p>

            <div className="project-modal-grid">
              <div>
                <div className="project-modal-section">
                  <h4>Organization</h4>
                  <p><strong>{selectedLeadership.org}</strong></p>
                  <p>{selectedLeadership.period}</p>
                </div>

                <div className="project-modal-section">
                  <h4>Role overview</h4>
                  <p>{selectedLeadership.description}</p>
                </div>
              </div>

              <div>
                <div className="project-modal-section">
                  <h4>Key contributions</h4>
                  <ul>
                    {selectedLeadership.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-modal-section">
                  <h4>Impact</h4>
                  <p>{selectedLeadership.impact}</p>
                </div>

                <div className="project-modal-section">
                  <h4>Highlights</h4>
                  <div className="tag-list modal-tag-list">
                    {selectedLeadership.highlights.map((item) => (
                      <span key={item} className="tag">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Dodo Tahirou Abdoul Salam</span>
          <span>AI • Data Science • Innovation</span>
        </div>
      </footer>

      <Analytics />
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header reveal">
      <span className="section-kicker">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function TimelineItem({ item }) {
  return (
    <div className="timeline-item reveal">
      <div className="timeline-dot" />
      <div className="timeline-card">
        <span className="time-tag">{item.period}</span>
        <h3>{item.title}</h3>
        <h4>{item.company}</h4>
        <p className="location-line"><MapPin size={14} /> {item.location}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

function EducationItem({ item }) {
  return (
    <div className="timeline-item reveal">
      <div className="timeline-dot" />
      <div className="timeline-card education-card">
        <span className="time-tag">{item.period}</span>
        <h3>{item.title}</h3>
        <h4>{item.school}</h4>
        {item.note && <p className="note-line">{item.note}</p>}
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card reveal" onClick={onOpen} role="button" tabIndex={0} onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onOpen();
      }
    }}>
      <div className="project-icon">{project.icon}</div>
      <div className="project-topline">
        <span className="project-category">{project.category}</span>
        <span className="project-metric">{project.metric}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-tech">{project.tech}</p>
      <p>{project.summary}</p>
    </article>
  );
}

function LeadershipItem({ item, onOpen }) {
  return (
    <div className="leadership-item reveal" onClick={onOpen} role="button" tabIndex={0} onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onOpen();
      }
    }}>
      <h3>{item.title}</h3>
      <p>{item.org}</p>
    </div>
  );
}

export default App;