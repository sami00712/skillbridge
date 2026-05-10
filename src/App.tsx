/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  ChevronRight, 
  Menu, 
  X, 
  Search, 
  Code, 
  Terminal, 
  GraduationCap,
  Layout,
  ExternalLink,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Github,
  Moon,
  Sun
} from 'lucide-react';
import { WEB_DEV_COURSE, PYTHON_AI_COURSE, Module, Topic, projectsData } from './constants/courseData';
import { cn } from './lib/utils';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Chatbot } from './components/Chatbot';

// --- Types ---
type Page = 'landing' | 'docs' | 'projects' | 'about-creator';

// --- Components ---

const Navbar = ({ onNavigate, currentPage, onOpenDocs, progressPercentage, userLevel, learningScore }: { 
  onNavigate: (page: Page) => void, 
  currentPage: Page,
  onOpenDocs: () => void,
  progressPercentage: number,
  userLevel: string,
  learningScore: number
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const handleOpenDocs = () => {
    onOpenDocs();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleNavigate('landing')}
        >
          <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white border border-gold shadow-lg overflow-hidden scale-100 group-hover:scale-110 transition-transform">
            <GraduationCap size={20} />
          </div>
          <span className="font-bold text-lg tracking-tight text-brand-blue-dark uppercase text-nowrap">
            Skill Bridge <span className="text-gold-dark">Academy</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => handleNavigate('landing')}
            className={cn(
              "text-sm font-bold uppercase tracking-wide transition-colors hover:text-brand-blue",
              currentPage === 'landing' ? "text-brand-blue" : "text-slate-600"
            )}
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigate('projects')}
            className={cn(
              "text-sm font-bold uppercase tracking-wide transition-colors hover:text-brand-blue",
              currentPage === 'projects' ? "text-brand-blue" : "text-slate-600"
            )}
          >
            Projects
          </button>
          <button 
            onClick={() => handleOpenDocs()}
            className={cn(
              "text-sm font-bold uppercase tracking-wide transition-colors hover:text-brand-blue",
              currentPage === 'docs' ? "text-brand-blue" : "text-slate-600"
            )}
          >
            Curriculum
          </button>
          <button 
            onClick={() => handleNavigate('about-creator')}
            className={cn(
              "text-sm font-bold uppercase tracking-wide transition-colors hover:text-brand-blue",
              currentPage === 'about-creator' ? "text-brand-blue" : "text-slate-600"
            )}
          >
            About Creator
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end mr-2">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Learning Score:</span>
              <span className="text-[10px] font-black text-brand-blue bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">{learningScore} XP</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gold transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
              </div>
              <span className="text-[10px] font-extrabold text-brand-blue">{progressPercentage}%</span>
            </div>
          </div>
          <button 
            onClick={onOpenDocs}
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-lg bg-brand-blue text-white font-bold text-sm transition-all shadow-xl shadow-blue-200 hover:bg-brand-blue-dark border-b-4 border-gold-dark"
          >
            Start Learning <ArrowRight size={16} />
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-brand-blue p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              <button 
                onClick={() => handleNavigate('landing')}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl font-bold uppercase tracking-wider text-sm",
                  currentPage === 'landing' ? "bg-brand-blue text-white" : "bg-slate-50 text-slate-600"
                )}
              >
                Home <ChevronRight size={16} />
              </button>
              <button 
                onClick={() => handleNavigate('projects')}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl font-bold uppercase tracking-wider text-sm",
                  currentPage === 'projects' ? "bg-brand-blue text-white" : "bg-slate-50 text-slate-600"
                )}
              >
                Building Projects <ChevronRight size={16} />
              </button>
              <button 
                onClick={() => handleOpenDocs()}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl font-bold uppercase tracking-wider text-sm",
                  currentPage === 'docs' ? "bg-brand-blue text-white" : "bg-slate-50 text-slate-600"
                )}
              >
                Curriculum <ChevronRight size={16} />
              </button>
              <button 
                onClick={() => handleNavigate('about-creator')}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl font-bold uppercase tracking-wider text-sm",
                  currentPage === 'about-creator' ? "bg-brand-blue text-white" : "bg-slate-50 text-slate-600"
                )}
              >
                About Creator <ChevronRight size={16} />
              </button>
              <button 
                onClick={handleOpenDocs}
                className="mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-brand-blue text-white font-extrabold shadow-lg border-b-4 border-gold-dark"
              >
                Start Learning Now <ArrowRight size={18} />
              </button>

              <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Training Progress</span>
                  <span className="text-[10px] font-extrabold text-white bg-gold px-2 py-0.5 rounded-md uppercase">{userLevel}</span>
                </div>
                <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-brand-blue transition-all duration-700" style={{ width: `${progressPercentage}%` }}></div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs font-bold text-slate-500">{progressPercentage}% Completed</span>
                  <span className="text-xs font-extrabold text-brand-blue-dark">Khipro Batch 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onStartLearning, onExploreProjects }: { onStartLearning: () => void, onExploreProjects: () => void }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Orbs - softened for light theme */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-brand-blue text-[11px] font-bold px-4 py-1.5 rounded-full border border-blue-100 mb-8 tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
            </span>
            CRAFTED WITH ❤️ BY SAMI QAIMKHANI
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-brand-blue-dark leading-tight mb-8 max-w-4xl mx-auto tracking-tight">
            Learn <span className="text-gold-dark underline decoration-brand-blue/10 underline-offset-8">AI Web Development</span> <br/>& <span className="text-gold-dark underline decoration-brand-blue/10 underline-offset-8">Python AI</span> from Scratch
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-12 leading-relaxed">
            Master the art of modern engineering. From HTML basics to deploying production-ready AI tools, Skill Bridge Academy Khipro provides a professional pathway for aspiring developers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={onStartLearning}
              className="w-full sm:w-auto px-10 py-4 bg-brand-blue text-white font-extrabold rounded-xl shadow-2xl shadow-blue-200 hover:bg-brand-blue-dark transition-all flex items-center justify-center gap-3 border-b-4 border-gold group"
            >
              Start Learning Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={onExploreProjects}
              className="w-full sm:w-auto px-10 py-4 bg-white text-brand-blue-dark font-extrabold rounded-xl border-2 border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Explore Projects <Sparkles size={18} className="text-gold-dark" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
              { title: "Foundation First", desc: "Master computer science fundamentals before diving into syntax.", icon: <BookOpen className="text-brand-blue" /> },
              { title: "AI Integration", desc: "Learn to build and prompt modern AI tools like Claude and Gemini.", icon: <Sparkles className="text-gold-dark" /> },
              { title: "Hands-on Projects", desc: "Build a mini SaaS and AI apps during the final project phase.", icon: <Code className="text-slate-600" /> }
          ].map((item, idx) => (
            <div key={idx} className={cn(
              "p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm text-left group hover:shadow-xl transition-all duration-300",
              idx === 2 ? "border-l-4 border-l-brand-blue" : ""
            )}>
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg text-brand-blue-dark mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const DocsPage = ({ 
  onBack,
  activeModule,
  setActiveModule,
  activeTopic,
  setActiveTopic,
  completedTopics,
  toggleTopicCompletion,
  progressPercentage,
  userLevel,
  learningScore,
  allTopicsFlat,
  currentCourseData
}: { 
  onBack: () => void,
  activeModule: Module,
  setActiveModule: (m: Module) => void,
  activeTopic: Topic,
  setActiveTopic: (t: Topic) => void,
  completedTopics: string[],
  toggleTopicCompletion: (id: string) => void,
  progressPercentage: number,
  userLevel: string,
  learningScore: number,
  allTopicsFlat: { mod: Module, topic: Topic }[],
  currentCourseData: Module[]
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const [searchQuery, setSearchQuery] = useState('');

  const currentIndex = allTopicsFlat.findIndex(item => item.topic.id === activeTopic.id);
  
  const handleNext = () => {
    // Auto-mark as complete when moving forward
    if (!completedTopics.includes(activeTopic.id)) {
      toggleTopicCompletion(activeTopic.id);
    }

    if (currentIndex < allTopicsFlat.length - 1) {
      const { mod, topic } = allTopicsFlat[currentIndex + 1];
      setActiveModule(mod);
      setActiveTopic(topic);
      document.getElementById('main-content-area')?.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const { mod, topic } = allTopicsFlat[currentIndex - 1];
      setActiveModule(mod);
      setActiveTopic(topic);
      document.getElementById('main-content-area')?.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleTopicSelect = (mod: Module, top: Topic) => {
    setActiveModule(mod);
    setActiveTopic(top);
    document.getElementById('main-content-area')?.scrollTo({ top: 0, behavior: 'instant' });
    if (window.innerWidth < 768) setSidebarOpen(false);
  };

  const filteredData = useMemo(() => {
    if (!searchQuery) return currentCourseData;
    return currentCourseData.map(mod => ({
      ...mod,
      topics: mod.topics.filter(t => 
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(mod => mod.topics.length > 0);
  }, [searchQuery, currentCourseData]);

  return (
    <div className="flex h-screen bg-white pt-16">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-brand-blue-dark/40 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Elegant Dark */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-brand-blue-dark border-r border-white/5 transition-transform md:relative md:translate-x-0 pt-16 flex flex-col shadow-2xl md:shadow-none",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-4 flex flex-col gap-4">
           <div className="text-[10px] uppercase tracking-widest font-bold text-slate-500 px-2">
             Curriculum Modules
           </div>
           <div className="relative px-2">
             <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
             <input 
               type="text" 
               placeholder="Search..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full bg-slate-800/50 border border-slate-700/50 rounded-md py-1.5 pl-9 pr-3 text-xs text-slate-300 focus:outline-none focus:ring-1 focus:ring-gold transition-all"
             />
           </div>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-6 pb-20">
          <div className="space-y-1">
            {filteredData.map((mod) => (
              <div key={mod.id} className="space-y-1">
                <div className="px-3 py-2 text-[11px] font-bold text-slate-500 uppercase tracking-tighter mt-4">
                   {mod.title}
                </div>
                {mod.topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleTopicSelect(mod as Module, topic)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center justify-between group",
                      activeTopic.id === topic.id 
                        ? "bg-brand-blue/30 text-white border-l-2 border-gold shadow-lg" 
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    )}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {completedTopics.includes(topic.id) && (
                        <CheckCircle2 size={12} className="text-green-400 shrink-0" />
                      )}
                      <span className="truncate">{topic.title}</span>
                    </div>
                    {activeTopic.id === topic.id && <ChevronRight size={14} className="text-gold" />}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Progress Bar in Sidebar */}
        <div className="p-6 border-t border-slate-800">
          <div className="text-[10px] text-slate-500 uppercase mb-2 font-bold">Your Progress</div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-blue transition-all duration-500" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-[10px] font-bold">
            <span className="text-slate-400">{progressPercentage}% Complete</span>
            <span className="text-brand-blue uppercase">{userLevel}</span>
          </div>
        </div>
      </aside>

      {/* Main Content - Clean & Light */}
      <main id="main-content-area" className="flex-1 overflow-y-auto bg-white scroll-smooth relative">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="max-w-4xl mx-auto px-6 py-12 lg:px-12 relative">
          {/* Breadcrumbs & Mobile Toggle */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <span className="hover:text-brand-blue cursor-pointer transition-colors" onClick={onBack}>Skill Bridge</span>
              <ChevronRight size={12} />
              <span className="text-slate-500">{activeModule.title}</span>
              <ChevronRight size={12} />
              <span className="text-brand-blue">{activeTopic.title}</span>
            </div>
            
            <button 
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 rounded-lg bg-slate-50 text-brand-blue border border-slate-100 hover:bg-slate-100 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Content Head */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-blue-dark mb-6 tracking-tight">
              {activeTopic.title}
            </h1>
            <div className="flex flex-wrap gap-3">
               <span className={cn(
                 "px-4 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border",
                 activeTopic.beginnerFriendly 
                  ? "bg-green-50 text-green-700 border-green-100" 
                  : "bg-purple-50 text-purple-700 border-purple-100"
               )}>
                 {activeTopic.beginnerFriendly ? "Beginner Friendly" : "Intermediate Level"}
               </span>
               <span className="px-4 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-[10px] font-extrabold uppercase tracking-widest">
                 Module {activeModule.id}
               </span>
            </div>
          </div>

          {/* Article Section */}
          <div className="prose prose-slate max-w-none prose-h2:text-brand-blue-dark prose-p:text-slate-600 prose-p:text-lg prose-p:leading-relaxed">
            <div className="space-y-16">
              {/* Explanation */}
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-brand-blue border border-blue-100">
                    <BookOpen size={24} />
                  </div>
                  <h2 className="text-3xl font-extrabold m-0">Fundamentals</h2>
                </div>
                <div className="text-slate-600 space-y-4">
                   <p>{activeTopic.explanation}</p>
                </div>
              </section>

              {/* Real-life Example */}
              {activeTopic.example && (
                <section className="p-8 rounded-[2rem] bg-brand-blue-dark text-white shadow-2xl relative overflow-hidden group">
                   <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all"></div>
                   <div className="flex items-center gap-3 mb-6">
                     <Sparkles size={24} className="text-gold" />
                     <span className="font-extrabold uppercase tracking-[0.2em] text-xs text-gold">Real-world Analogy</span>
                   </div>
                   <p className="text-blue-100 text-xl font-medium italic leading-relaxed m-0">"{activeTopic.example}"</p>
                </section>
              )}

              {/* Code Section */}
              {activeTopic.code && (
                <section>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100">
                      <Terminal size={24} />
                    </div>
                    <h2 className="text-3xl font-extrabold m-0">Technical Snippet</h2>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-[#1e1e1e]">
                    <div className="flex items-center justify-between px-6 py-3 bg-brand-blue-dark/50 border-b border-white/5">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{activeTopic.language || 'code'}</span>
                       <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                       </div>
                    </div>
                    <SyntaxHighlighter 
                      language={activeTopic.language || 'javascript'} 
                      style={vscDarkPlus}
                      customStyle={{ margin: 0, padding: '32px', fontSize: '15px', background: 'transparent' }}
                    >
                      {activeTopic.code}
                    </SyntaxHighlighter>
                  </div>
                </section>
              )}

              {/* Practice Tasks */}
              <section>
                 <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 border border-green-100">
                      <CheckCircle2 size={24} />
                    </div>
                    <h2 className="text-3xl font-extrabold m-0">Hands-on Practice</h2>
                  </div>
                  <div className="grid gap-4">
                    {activeTopic.tasks.map((task, i) => (
                      <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-100 items-start shadow-sm hover:shadow-md transition-shadow">
                        <span className="font-extrabold text-brand-blue text-lg">0{i+1}</span>
                        <p className="text-slate-600 font-medium m-0">{task}</p>
                      </div>
                    ))}
                  </div>
              </section>

              {/* Homework */}
              <section className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-10 shadow-2xl shadow-slate-100">
                 <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-extrabold text-brand-blue-dark flex items-center gap-3 m-0">
                      <GraduationCap className="text-gold-dark" size={32} /> Homework Assignment
                    </h2>
                    <span className="px-3 py-1 bg-gold/10 text-gold-dark text-[10px] font-bold rounded-lg border border-gold/20 uppercase tracking-widest">Khipro Batch</span>
                 </div>
                 <div className="space-y-6">
                    {activeTopic.homework.map((hw, i) => (
                      <div key={i} className="flex gap-4 items-start group">
                        <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {i+1}
                        </div>
                        <p className="text-slate-600 leading-relaxed font-medium m-0">{hw}</p>
                      </div>
                    ))}
                 </div>

                 {/* Completion Action */}
                 <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center">
                   <button
                    onClick={() => toggleTopicCompletion(activeTopic.id)}
                    className={cn(
                      "flex items-center gap-3 px-8 py-4 rounded-2xl font-extrabold transition-all border-2 shadow-sm uppercase tracking-wider transition-all duration-300",
                      completedTopics.includes(activeTopic.id)
                        ? "bg-green-500 text-white border-green-500 hover:bg-green-600 shadow-green-100"
                        : "bg-white text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white"
                    )}
                   >
                     {completedTopics.includes(activeTopic.id) ? (
                       <><CheckCircle2 size={20} /> Lesson Completed</>
                     ) : (
                       <>Mark as Complete</>
                     )}
                   </button>
                 </div>
              </section>
            </div>
            
            {/* Footer Nav Controls */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between px-4 pb-20">
              <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all border shadow-sm",
                  currentIndex === 0 
                    ? "opacity-30 cursor-not-allowed border-slate-100 text-slate-300" 
                    : "text-brand-blue border-slate-200 hover:bg-slate-50 hover:border-brand-blue/30"
                )}
              >
                 <ChevronRight size={18} className="rotate-180" /> Previous Step
              </button>
              <div className="hidden md:flex flex-col items-center gap-1">
                <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                  {userLevel} • {progressPercentage}%
                </div>
                <div className="text-[10px] font-black text-brand-blue uppercase tracking-tighter bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  {learningScore} XP Points
                </div>
              </div>
              <button 
                onClick={handleNext}
                disabled={currentIndex === allTopicsFlat.length - 1}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all border shadow-sm",
                  currentIndex === allTopicsFlat.length - 1 
                    ? "opacity-30 cursor-not-allowed border-slate-100 text-slate-300" 
                    : "bg-brand-blue text-white border-brand-blue hover:bg-brand-blue-dark"
                )}
              >
                 Next Lesson <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

const ProjectsPage = ({ onViewModule }: { onViewModule: (moduleId: string) => void }) => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-brand-blue-dark mb-6">Course Projects</h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-xl">
            At Skill Bridge Academy, we believe in "Learning by Doing". Here are the professional projects you will build throughout the curriculum.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all group border-b-4 border-b-brand-blue flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 bg-blue-50 text-brand-blue text-[10px] font-bold rounded-full uppercase tracking-widest border border-blue-100">
                  {project.module}
                </span>
                <span className={cn(
                  "px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-widest border",
                  project.difficulty === 'Beginner' ? "bg-green-50 text-green-700 border-green-100" :
                  project.difficulty === 'Intermediate' ? "bg-blue-50 text-blue-700 border-blue-100" :
                  "bg-purple-50 text-purple-700 border-purple-100"
                )}>
                  {project.difficulty}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-brand-blue-dark mb-4 group-hover:text-brand-blue transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 mb-8 leading-relaxed flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="bg-slate-50 text-slate-400 text-[10px] font-bold px-2 py-1 rounded border border-slate-100">
                    #{t}
                  </span>
                ))}
              </div>
              {/* Removed View Project Module button per user request */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutCreatorPage = () => {
  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[3rem] p-10 lg:p-20 shadow-2xl border border-slate-100 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-40 h-40 rounded-full bg-slate-100 border-4 border-brand-blue/20 p-1 mb-8 shadow-xl overflow-hidden">
              <div className="w-full h-full rounded-full bg-brand-blue-dark flex items-center justify-center text-white overflow-hidden">
                <img 
                  src="https://i.ibb.co/hJLtZP2j/profile.jpg" 
                  alt="Muhammad Sami QaimKhani"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-blue-dark mb-4 tracking-tight">
              Muhammad Sami QaimKhani
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-extrabold uppercase tracking-widest mb-8">
              AI Engineer & Technical Mentor
            </div>

            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mb-12">
              Expert AI Engineer dedicated to empowering the youth of Khipro with cutting-edge technical education, machine learning expertise, and modern software engineering skills.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 w-full max-w-2xl">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center gap-2 group hover:bg-white hover:shadow-xl transition-all">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Direct Contact</span>
                <a href="mailto:samiqaimkhani43@gmail.com" className="text-brand-blue font-bold text-lg hover:underline">
                  samiqaimkhani43@gmail.com
                </a>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center gap-2 group hover:bg-white hover:shadow-xl transition-all">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Location</span>
                <span className="text-brand-blue-dark font-bold text-lg">
                  Khipro, Sindh, Pakistan
                </span>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-slate-100 w-full flex justify-center gap-8">
               <div className="flex flex-col items-center gap-1">
                 <span className="text-3xl font-extrabold text-brand-blue-dark">2026</span>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Current Batch</span>
               </div>
               <div className="w-px h-12 bg-slate-100"></div>
               <div className="flex flex-col items-center gap-1">
                 <span className="text-3xl font-extrabold text-brand-blue-dark">10+</span>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Syllabus Modules</span>
               </div>
               <div className="w-px h-12 bg-slate-100"></div>
               <div className="flex flex-col items-center gap-1">
                 <span className="text-3xl font-extrabold text-brand-blue-dark">AI</span>
                 <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Core Focus</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState<Page>('landing');
  const [courseType, setCourseType] = useState<'web' | 'python'>('web');
  const [showCourseModal, setShowCourseModal] = useState(false);
  
  const currentCourseData = useMemo(() => {
    return courseType === 'web' ? WEB_DEV_COURSE : PYTHON_AI_COURSE;
  }, [courseType]);

  const [activeModule, setActiveModule] = useState(currentCourseData[0]);
  const [activeTopic, setActiveTopic] = useState(currentCourseData[0].topics[0]);

  // Update active module/topic when switching courses
  useEffect(() => {
    setActiveModule(currentCourseData[0]);
    setActiveTopic(currentCourseData[0].topics[0]);
  }, [courseType, currentCourseData]);

  const [completedTopics, setCompletedTopics] = useState<string[]>(() => {
    const saved = localStorage.getItem('completedTopics');
    return saved ? JSON.parse(saved) : [];
  });

  const allTopicsFlat = useMemo(() => {
    return currentCourseData.flatMap(mod => 
      mod.topics.map(topic => ({ mod, topic }))
    );
  }, [currentCourseData]);

  const totalTopicsCount = allTopicsFlat.length;
  
  // Calculate progress only for topics in the current active course
  const currentCourseCompletedCount = useMemo(() => {
    const currentCourseTopicIds = allTopicsFlat.map(item => item.topic.id);
    return completedTopics.filter(id => currentCourseTopicIds.includes(id)).length;
  }, [completedTopics, allTopicsFlat]);

  const progressPercentage = totalTopicsCount > 0 
    ? Math.floor((currentCourseCompletedCount / totalTopicsCount) * 100) 
    : 0;

  // Learning Score (10 points per topic)
  const learningScore = currentCourseCompletedCount * 10;
    
  const userLevel = useMemo(() => {
    if (progressPercentage === 0) return 'NOT STARTED';
    if (progressPercentage < 5) return 'NEWBIE';
    if (progressPercentage < 15) return 'BEGINNER';
    if (progressPercentage < 30) return 'LEARNER';
    if (progressPercentage < 50) return 'RISING STAR';
    if (progressPercentage < 75) return 'INTERMEDIATE';
    if (progressPercentage < 90) return 'ADVANCED';
    if (progressPercentage < 100) return 'MASTER';
    return 'ALUMNI / ZEN MASTER';
  }, [progressPercentage]);

  useEffect(() => {
    localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
  }, [completedTopics]);

  const toggleTopicCompletion = (topicId: string) => {
    setCompletedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId) 
        : [...prev, topicId]
    );
  };

  const handleViewProjectModule = (moduleId: string) => {
    // Search in both courses
    let mod = WEB_DEV_COURSE.find(m => m.id === moduleId);
    if (mod) {
      setCourseType('web');
    } else {
      mod = PYTHON_AI_COURSE.find(m => m.id === moduleId);
      if (mod) setCourseType('python');
    }

    if (mod) {
      setActiveModule(mod);
      setActiveTopic(mod.topics[0]);
      setPage('docs');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-gold/30">
      <Navbar 
        currentPage={page} 
        onNavigate={setPage} 
        onOpenDocs={() => setShowCourseModal(true)}
        progressPercentage={progressPercentage}
        userLevel={userLevel}
        learningScore={learningScore}
      />
      
      <AnimatePresence>
        {showCourseModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCourseModal(false)}
              className="absolute inset-0 bg-brand-blue-dark/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => setShowCourseModal(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-50 text-slate-400 hover:text-brand-blue transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-10">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-blue-dark mb-2">Select Your Journey</h2>
                <p className="text-slate-500">Pick a course to start your transformation</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <button 
                  onClick={() => { setCourseType('web'); setPage('docs'); setShowCourseModal(false); }}
                  className="group p-8 rounded-[2rem] border-2 border-slate-100 bg-slate-50 hover:bg-white hover:border-brand-blue hover:shadow-xl transition-all text-left"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                    <Layout size={28} />
                  </div>
                  <h3 className="text-xl font-black text-brand-blue-dark mb-2">AI Web Development</h3>
                  <p className="text-slate-500 text-xs mb-4">Frontend, Backend & Next.js AI Apps</p>
                  <div className="flex items-center gap-1 text-brand-blue font-bold text-xs">
                    Start Learning <ArrowRight size={14} />
                  </div>
                </button>

                <button 
                  onClick={() => { setCourseType('python'); setPage('docs'); setShowCourseModal(false); }}
                  className="group p-8 rounded-[2rem] border-2 border-slate-100 bg-slate-50 hover:bg-white hover:border-gold hover:shadow-xl transition-all text-left"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold-dark mb-6 group-hover:scale-110 transition-transform text-gold-dark">
                    <Terminal size={28} />
                  </div>
                  <h3 className="text-xl font-black text-brand-blue-dark mb-2">AI Python</h3>
                  <p className="text-slate-500 text-xs mb-4">Foundations, Agents & FastAPI AI</p>
                  <div className="flex items-center gap-1 text-gold-dark font-bold text-xs">
                    Start Learning <ArrowRight size={14} />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {page === 'landing' ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero 
              onStartLearning={() => setShowCourseModal(true)} 
              onExploreProjects={() => setPage('projects')} 
            />
            
            {/* Course Selection Section */}
            <div className="max-w-7xl mx-auto px-4 py-10 relative">
               <div className="text-center mb-16">
                 <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-blue-dark mb-4">Choose Your Path</h2>
                 <p className="text-slate-500">Select a course to see the curriculum</p>
               </div>
               <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 <button 
                  onClick={() => { setCourseType('web'); setPage('docs'); }}
                  className={cn(
                    "p-10 rounded-[2.5rem] border-2 transition-all text-left group",
                    courseType === 'web' ? "border-brand-blue bg-white shadow-2xl" : "border-slate-100 bg-slate-50 hover:border-brand-blue/30"
                  )}
                 >
                   <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                     <Layout size={32} />
                   </div>
                   <h3 className="text-2xl font-black text-brand-blue-dark mb-2">AI Web Development</h3>
                   <p className="text-slate-500 text-sm mb-6">Master HTML, CSS, TypeScript, and Next.js to build professional web applications.</p>
                   <div className="flex items-center gap-2 text-brand-blue font-bold text-sm">
                     View 5 Modules <ArrowRight size={16} />
                   </div>
                 </button>

                 <button 
                  onClick={() => { setCourseType('python'); setPage('docs'); }}
                  className={cn(
                    "p-10 rounded-[2.5rem] border-2 transition-all text-left group",
                    courseType === 'python' ? "border-gold bg-white shadow-2xl" : "border-slate-100 bg-slate-50 hover:border-gold/30"
                  )}
                 >
                   <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold-dark mb-6 group-hover:scale-110 transition-transform text-gold-dark">
                     <Terminal size={32} />
                   </div>
                   <h3 className="text-2xl font-black text-brand-blue-dark mb-2">Python & AI</h3>
                   <p className="text-slate-500 text-sm mb-6">Learn Python foundations, logic, AI agents, and backend development with FastAPI.</p>
                   <div className="flex items-center gap-2 text-gold-dark font-bold text-sm">
                     View 6 Phases <ArrowRight size={16} />
                   </div>
                 </button>
               </div>
            </div>

            {/* Features Section - Styled with Theme */}
            <div className="max-w-7xl mx-auto px-4 py-32 relative">
               <div className="text-center mb-20 relative">
                 <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-blue-dark mb-6">Master Modern Engineering</h2>
                 <p className="text-slate-600 max-w-2xl mx-auto text-xl leading-relaxed">We provide a premium, structured learning environment for students in Khipro to bridge the gap between education and high-demand careers.</p>
               </div>
               
               <div className="grid md:grid-cols-3 gap-10">
                 {[
                   { title: "Localized Modules", desc: "Designed for Khipro, teaching in local context with world-class standards.", icon: <Layout className="text-gold" />, badge: "Community" },
                   { title: "Real-World Impact", desc: "Every module ends with a project that you can add to your professional portfolio.", icon: <Code className="text-brand-blue" />, badge: "Career" },
                   { title: "AI-Powered Training", desc: "We don't just teach code, we teach you how to leverage AI to triple your productivity.", icon: <Terminal className="text-gold-dark" />, badge: "AI Tech" }
                 ].map((item, i) => (
                   <div key={i} className="group relative p-12 rounded-[3rem] bg-white border border-slate-100 hover:border-gold/30 hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center">
                     <div className="absolute top-6 right-8">
                       <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 border border-slate-100 px-3 py-1 rounded-full group-hover:border-gold group-hover:text-gold transition-colors">
                         {item.badge}
                       </span>
                     </div>
                     <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center mb-10 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-all group-hover:rotate-6">
                       {item.icon}
                     </div>
                     <h3 className="text-2xl font-extrabold text-brand-blue-dark mb-6">{item.title}</h3>
                     <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                   </div>
                 ))}
               </div>
            </div>

            {/* Curriculum Preview Section */}
            <div className="bg-brand-blue-dark py-32 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-3xl rounded-full translate-x-1/2"></div>
              <div className="max-w-7xl mx-auto px-4 relative">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20 text-center lg:text-left">
                  <div className="max-w-3xl">
                    <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight">Structured Path to Mastery</h2>
                    <p className="text-blue-100/70 text-xl leading-relaxed">Our curriculum spans 10 comprehensive modules covering everything from the basics of internet technology to advanced AI tool development.</p>
                  </div>
                  <button 
                    onClick={() => setPage('docs')}
                    className="flex items-center gap-3 px-8 py-4 bg-white text-brand-blue-dark rounded-xl font-extrabold hover:bg-gold hover:text-slate-950 transition-all shadow-2xl"
                  >
                    Explore Modules <ArrowRight size={24} />
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentCourseData.slice(0, 8).map((mod, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-gold/30 transition-all cursor-pointer group">
                      <div className="text-gold text-[10px] font-extrabold mb-4 uppercase tracking-widest opacity-60 group-hover:opacity-100">Step {i + 1}</div>
                      <h4 className="text-white font-extrabold text-xl group-hover:text-gold transition-colors">{mod.title.split(': ')[1] || mod.title}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium CTA Section */}
            <div className="max-w-5xl mx-auto px-4 py-40">
              <div className="relative rounded-[4rem] bg-white border border-slate-100 p-16 lg:p-24 overflow-hidden text-center shadow-[0_50px_100px_rgba(0,0,0,0.05)] border-b-8 border-brand-blue">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-gold/5 rounded-full blur-3xl"></div>
                <div className="relative">
                  <h2 className="text-4xl lg:text-7xl font-extrabold text-brand-blue-dark mb-10 tracking-tighter">Ready to Build Your Future?</h2>
                  <p className="text-slate-500 text-xl max-w-2xl mx-auto mb-16 leading-relaxed">Unlock world-class curriculum and project-based learning. Join Skill Bridge Academy in Khipro today.</p>
                  <button 
                    onClick={() => setPage('projects')}
                    className="px-14 py-6 rounded-2xl bg-brand-blue text-white font-extrabold text-2xl hover:bg-brand-blue-dark transition-all transform hover:scale-105 shadow-2xl shadow-blue-200 border-b-4 border-gold group"
                  >
                    Explore Projects Now <span className="inline-block group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : page === 'docs' ? (
          <motion.div
            key="docs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <DocsPage 
              onBack={() => setPage('landing')} 
              activeModule={activeModule}
              setActiveModule={setActiveModule}
              activeTopic={activeTopic}
              setActiveTopic={setActiveTopic}
              completedTopics={completedTopics}
              toggleTopicCompletion={toggleTopicCompletion}
              progressPercentage={progressPercentage}
              userLevel={userLevel}
              learningScore={learningScore}
              allTopicsFlat={allTopicsFlat}
              currentCourseData={currentCourseData}
            />
          </motion.div>
        ) : page === 'projects' ? (
          <motion.div
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectsPage onViewModule={handleViewProjectModule} />
          </motion.div>
        ) : (
          <motion.div
            key="about-creator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AboutCreatorPage />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Footer - Elegant & Minimal */}
      <footer className="py-20 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white border border-gold shadow-lg">
                 <GraduationCap size={20} />
               </div>
               <span className="font-extrabold text-brand-blue-dark text-xl uppercase tracking-tighter">Skill Bridge <span className="text-gold-dark">Khipro</span></span>
             </div>
             
             <div className="flex flex-wrap gap-12 text-sm font-bold text-slate-400 uppercase tracking-widest">
               <a href="#" className="hover:text-brand-blue transition-colors">Curriculum</a>
               <a href="#" className="hover:text-brand-blue transition-colors">GitHub</a>
               <a href="#" className="hover:text-brand-blue transition-colors">Support</a>
               <a href="#" className="hover:text-brand-blue transition-colors">Team</a>
             </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-50 text-[10px] font-bold text-slate-300 uppercase tracking-[0.3em]">
             <span>&copy; 2026 Skill Bridge Academy Khipro. Elite Educational Platform.</span>
             <div className="mt-4 md:mt-0 flex gap-4">
               <span>V2.1.4 PRODUCTION</span>
               <span className="text-gold">KHIPRO BATCH OPEN</span>
             </div>
          </div>
        </div>
      </footer>
      
      <Chatbot />
    </div>
  );
}
