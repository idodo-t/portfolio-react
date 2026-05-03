import React from 'react';
import { Bot, Shield, Cpu, Database, Layout, Globe, Server, Scale, BarChart3, BookOpen, Mail, Phone, MapPin, Download } from 'lucide-react';

function App() {
  const cvPath = "/Cv_AbdoulSalam_dodoTahirou.pdf";
  const myEmail = "idodo1212@yahoo.com";

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30 text-left">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter text-white uppercase">
            DODO TAHIROU<span className="text-blue-500">.</span>
          </span>
          <div className="flex gap-4 md:gap-6 items-center uppercase text-[10px] font-bold tracking-widest">
            <a href="#projets" className="hidden md:block hover:text-blue-400">Projets</a>
            <a href={cvPath} target="_blank" rel="noopener noreferrer" className="text-blue-400 border border-blue-400/30 px-3 py-1.5 rounded-full hover:bg-blue-400 hover:text-white transition-all">CV PDF</a>
            <a href="https://linkedin.com/in/dodo-tahirou" target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-4 py-2 rounded-full text-white hover:bg-blue-500 transition-all">LinkedIn</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-black uppercase tracking-[0.2em]">
            <span>🏆 Vice-Champion — Médaille d'Argent | Hackathon EMSI 2026</span>
          </div>
          <h1 className="text-5xl md:text-[70px] font-black text-white leading-none tracking-tighter mb-8 uppercase">
            DODO TAHIROU <br/> 
            <span className="text-blue-600">ABDOUL SALAM</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mb-10">
            Élève Ingénieur d'État en <span className="text-white font-bold">IA & Data Science</span> à l'EMSI Rabat. Spécialisé en <span className="text-blue-400 font-bold">Deep Learning, RAG, et IA Agentique</span>. Développeur full-stack aguerri et leader associatif engagé.
          </p>
          
          <div className="flex flex-wrap gap-4 items-center mb-10">
             <a href={`mailto:${myEmail}`} className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:bg-blue-500 hover:text-white transition-all uppercase text-sm flex items-center gap-2">
               <Mail size={18} /> Me Contacter
             </a>
             <a href={cvPath} download className="bg-blue-600/10 border border-blue-600/20 text-blue-400 px-8 py-4 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all uppercase text-sm flex items-center gap-2">
               <Download size={18} /> Télécharger CV
             </a>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-mono text-slate-500 border-t border-white/5 pt-8">
            <span className="flex items-center gap-2"><MapPin size={14}/> Rabat, Maroc</span>
            <span className="flex items-center gap-2"><Phone size={14}/> +212 638 402 716 / +227 926 538 85</span>
            <span className="flex items-center gap-2"><Mail size={14}/> {myEmail}</span>
          </div>
        </div>
      </section>

      {/* SECTION COMPETENCES */}
      <section className="bg-white/5 py-16 px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <SkillGroup title="IA Avancée" skills="LLM, RAG, IA Agentique, LangChain, Prompt Engineering" />
          <SkillGroup title="IA & ML" skills="Deep Learning, CNN, TensorFlow, Scikit-learn, Python" />
          <SkillGroup title="Web & Mobile" skills="React, React Native, Node.js, JavaScript, Java" />
          <SkillGroup title="Systèmes & Dev" skills="MongoDB, SQL, BI (ETL), Linux, Cybersec" />
        </div>
      </section>

      {/* SECTION PROJETS */}
      <section id="projets" className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-4">Portfolio</h2>
          <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic">Réalisations Clés</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard icon={<Shield size={24} />} title="Détection Malwares" tech="Deep Learning | CNN" desc="Identification de menaces avec une précision record de 96%." />
          <ProjectCard icon={<Bot size={24} />} title="IA Agentique & RAG" tech="LangChain | Vector DB" desc="Agent conversationnel avec mémoire vectorielle pour documents." />
          <ProjectCard icon={<Globe size={24} />} title="LLM & Prompt Eng." tech="Chain-of-Thought" desc="Fine-tuning de modèles et techniques de Few-Shot prompting." />
          <ProjectCard icon={<BarChart3 size={24} />} title="Machine Learning" tech="Modèle Prédictif" desc="Prédiction du taux d'occupation hôtelier via régression." />
          <ProjectCard icon={<Cpu size={24} />} title="Système IoT MQTT" tech="Dashboard Temps Réel" desc="Monitoring de capteurs via protocole MQTT et analytique." />
          <ProjectCard icon={<Database size={24} />} title="Décisionnel / BI" tech="ETL | Data Warehouse" desc="Entrepôt de données et tableaux de bord analytiques." />
          <ProjectCard icon={<BookOpen size={24} />} title="NoSQL & MongoDB" tech="Gestion Bibliothèque" desc="Base de données non-relationnelle pour grands volumes." />
          <ProjectCard icon={<Layout size={24} />} title="Plateforme Médicale" tech="C# .NET | SQL" desc="Web app de prise de rendez-vous pour clinique médicale." />
          <ProjectCard icon={<Server size={24} />} title="Linux & Cybersec" tech="Administration" desc="Durcissement système et gestion des vulnérabilités." />
          <ProjectCard icon={<Scale size={24} />} title="Éthique de l'IA" tech="Conformité RGPD" desc="Déploiement responsable de systèmes intelligents." />
        </div>
      </section>

      {/* FORMATION & EXPÉRIENCE */}
      <section id="parcours" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-black text-white uppercase mb-8 flex items-center gap-2 underline decoration-blue-500">Expérience</h3>
            <div className="bg-white/5 p-8 rounded-[30px] border border-white/5 hover:border-blue-500/20 transition-all">
              <span className="text-blue-400 font-mono text-xs uppercase tracking-widest">Août – Oct 2024</span>
              <h4 className="text-lg font-black text-white mt-2">Software Engineer</h4>
              <p className="text-slate-500 text-sm mb-4 italic">Technorium Company, Niamey</p>
              <ul className="text-xs space-y-2 text-slate-400">
                <li>▹ Développement front-end/back-end (JS & Java)</li>
                <li>▹ Optimisation de scripts système</li>
                <li>▹ Collaboration en équipe Agile</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-black text-white uppercase mb-8 flex items-center gap-2 underline decoration-blue-500">Formation</h3>
            <div className="space-y-6">
              <EducationItem title="Ingénieur d'État — IA & Data Science" school="EMSI, Rabat" date="En cours" />
              <EducationItem title="Licence — Génie Logiciel" school="FST Errachidia, Maroc" date="2023–2024" />
              <EducationItem title="DEUST — Math, Info & Physique" school="FST Errachidia" date="2021–2023" />
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-blue-600 rounded-[50px] mb-20 text-center shadow-2xl shadow-blue-500/20 mx-4">
        <h2 className="text-white font-black text-2xl mb-12 uppercase tracking-tighter italic">Leadership & Engagement</h2>
        <div className="grid md:grid-cols-3 gap-8 text-white">
          <LeadershipItem title="Président (et VP)" org="Assoc. Fraternité Africaine (AFAE)" />
          <LeadershipItem title="Secrétaire Gén." org="Assoc. Étudiants Nigériens (ANEM)" />
          <LeadershipItem title="Membre actif" org="Conféd. Étudiants Africains (CESAM)" />
        </div>
      </section>

      <footer className="py-10 text-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em] border-t border-white/5">
        © {new Date().getFullYear()} Dodo Tahirou Abdoul Salam • IA & DATA SCIENCE
      </footer>
    </div>
  );
}

// COMPOSANTS UTILES
function SkillGroup({ title, skills }) {
  return (
    <div>
      <h4 className="text-blue-500 font-bold text-[10px] uppercase tracking-widest mb-4">{title}</h4>
      <p className="text-sm text-slate-300 font-medium leading-relaxed">{skills}</p>
    </div>
  );
}

function ProjectCard({ icon, title, tech, desc }) {
  return (
    <div className="group bg-slate-900/50 p-8 rounded-[35px] border border-white/5 hover:border-blue-500/40 transition-all duration-300">
      <div className="mb-6 bg-[#020617] w-12 h-12 rounded-2xl flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform text-blue-500">
        {icon}
      </div>
      <h3 className="text-lg font-black text-white mb-1 uppercase tracking-tight">{title}</h3>
      <p className="text-blue-500 font-mono text-[10px] mb-4 font-bold uppercase">{tech}</p>
      <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function EducationItem({ title, school, date }) {
  return (
    <div className="border-l-2 border-slate-800 pl-6 hover:border-blue-500 transition-colors">
      <h4 className="text-white font-bold uppercase text-sm">{title}</h4>
      <p className="text-xs text-slate-500">{school} • {date}</p>
    </div>
  );
}

function LeadershipItem({ title, org }) {
  return (
    <div className="px-4">
      <h4 className="font-black text-lg uppercase leading-tight">{title}</h4>
      <p className="text-[10px] opacity-70 mt-2 uppercase tracking-widest font-bold">{org}</p>
    </div>
  );
}

export default App;