import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-black tracking-tighter text-white uppercase">
            DODO TAHIROU<span className="text-blue-500">.</span>
          </span>
          <div className="flex gap-6 items-center uppercase text-[10px] font-bold tracking-widest">
            <a href="#experience" className="hidden md:block hover:text-blue-400">Parcours</a>
            <a href="#projets" className="hidden md:block hover:text-blue-400">Projets</a>
            <a href="https://linkedin.com/in/dodo-tahirou" target="_blank" className="bg-blue-600 px-4 py-2 rounded-full text-white">LinkedIn</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
            Élève Ingénieur IA & Data Science | Software Engineer
          </div>
          <h1 className="text-5xl md:text-[70px] font-black text-white leading-none tracking-tighter mb-8 uppercase">
            DODO TAHIROU <br/> 
            <span className="text-blue-600">ABDOUL SALAM</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mb-10">
            Futur ingénieur d’État à l' <span className="text-white">EMSI Rabat</span>. Expert en détection de malwares via <span className="text-blue-400">Deep Learning (92%)</span> et développeur full-stack aguerri. Passionné par l'innovation technologique et le leadership associatif.
          </p>
          <div className="flex flex-wrap gap-4">
             <a href="mailto:dodotahirouabdoulsalam2003@gmail.com" className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:bg-blue-500 hover:text-white transition-all">ME CONTACTER</a>
             <div className="flex items-center gap-4 px-4 text-sm font-mono text-slate-500">
                <span>Rabat, Maroc</span>
                <span>•</span>
                <span>+212 638402716</span>
             </div>
          </div>
        </div>
      </section>

      {/* EXPÉRIENCE PROFESSIONNELLE */}
      <section id="experience" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <h2 className="text-xs font-bold text-blue-500 uppercase tracking-[0.3em] mb-12">Expérience Récente</h2>
        <div className="bg-white/5 p-8 rounded-[40px] border border-white/5 flex flex-col md:flex-row justify-between items-start gap-6">
          <div>
            <span className="text-blue-400 font-mono text-sm">AOÛT 2024 – OCTOBRE 2024</span>
            <h3 className="text-2xl font-black text-white mt-2">Software Engineer</h3>
            <p className="text-lg text-slate-400">Technorium Company, Niamey</p>
          </div>
          <ul className="text-sm space-y-3 max-w-md">
            <li className="flex gap-2"><span>▹</span> Développement de modules Front-end & Back-end (JS / Java).</li>
            <li className="flex gap-2"><span>▹</span> Optimisation de scripts système pour la performance.</li>
            <li className="flex gap-2"><span>▹</span> Collaboration en équipe Agile pour déploiement numérique.</li>
          </ul>
        </div>
      </section>

      {/* COMPÉTENCES (Extraites du CV) */}
      <section className="bg-white/5 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Web & Mobile</h4>
            <p className="text-slate-400 font-mono text-xs leading-loose">React, React Native, Node.js, JavaScript, Tailwind</p>
          </div>
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm">IA & ML</h4>
            <p className="text-slate-400 font-mono text-xs leading-loose">Machine Learning, CNN, TensorFlow, Python, Data Science</p>
          </div>
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm">Génie Logiciel</h4>
            <p className="text-slate-400 font-mono text-xs leading-loose">Java, C# (.NET), C++, SQL, NoSQL (MongoDB)</p>
          </div>
        </div>
      </section>

      {/* PROJETS ACADÉMIQUES */}
      <section id="projets" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-black text-white mb-12 uppercase tracking-tighter">Réalisations Clés</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-slate-900 p-10 rounded-[40px] border border-white/5">
            <h3 className="text-2xl font-black text-white mb-4">Détection de Malwares via CNN</h3>
            <p className="text-slate-400 text-sm mb-6 italic underline">Précision record : 92%</p>
            <p className="text-slate-500 text-sm leading-relaxed">Modèle de Deep Learning haute précision développé pour l'identification automatique de menaces cyber.</p>
          </div>

          <div className="bg-slate-900 p-10 rounded-[40px] border border-white/5">
            <h3 className="text-2xl font-black text-white mb-4">Plateforme Médicale .NET</h3>
            <p className="text-slate-400 text-sm mb-6">C# .NET | SQL</p>
            <p className="text-slate-500 text-sm leading-relaxed">Système complet de prise de rendez-vous pour une clinique médicale, optimisant les flux patients.</p>
          </div>

        </div>
      </section>

      {/* LEADERSHIP SECTION (Ton gros point fort !) */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-blue-600 rounded-[50px] mb-20 text-center">
        <h2 className="text-white font-black text-3xl mb-8 uppercase tracking-tighter italic">Leadership & Engagement</h2>
        <div className="grid md:grid-cols-2 gap-10 text-white/90">
          <div>
            <h4 className="font-black text-lg">Président (Vice-Président)</h4>
            <p className="text-sm">Association de la Fraternité Africaine à Errachidia (AFAE)</p>
          </div>
          <div>
            <h4 className="font-black text-lg">Secrétaire Général</h4>
            <p className="text-sm">Association des Étudiants Nigériens au Maroc (ANEM)</p>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em]">
        © {new Date().getFullYear()} Dodo Tahirou Abdoul Salam - EMSI Rabat
      </footer>
    </div>
  );
}

export default App;