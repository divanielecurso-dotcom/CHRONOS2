import React, { useState, useEffect } from 'react';
import { 
  Hourglass, Menu, ArrowRight, UserPlus, BookOpen, Edit3, 
  LineChart, Clock, GraduationCap, Check, FileText, CheckCircle, 
  Globe, Landmark, Factory, Map, Briefcase, Megaphone, X,
  Instagram, Linkedin, Twitter, Mail, Users
} from 'lucide-react';

const Modal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm fade-in">
      <div className="bg-[#fdf5e6] p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-[#e8dcc7] relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-[#4a3728] hover:text-[#8b5a2b]">
          <X size={24} />
        </button>
        <div className="text-center mb-6">
          <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-[#8b5a2b] to-[#cd853f] flex items-center justify-center text-white shadow-lg mb-4">
            <Hourglass size={24} />
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#2c1e16]">{title}</h2>
          <p className="text-[#4a3728] mt-2 opacity-80">Funcionalidade em desenvolvimento.</p>
        </div>
        <button onClick={onClose} className="w-full bg-[#8b5a2b] hover:bg-[#7a4e25] text-white py-3 rounded-lg font-medium transition-colors">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('historia');
  const [modalConfig, setModalConfig] = useState({ isOpen: false, title: '' });

  const openModal = (title) => setModalConfig({ isOpen: true, title });
  const closeModal = () => setModalConfig({ isOpen: false, title: '' });

  // Injetar estilos globais, fontes e animações personalizadas
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap');
      
      body {
        font-family: 'Inter', sans-serif;
      }
      .font-serif {
        font-family: 'Playfair Display', serif;
      }
      
      /* Custom scrollbar */
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: #f1f1f1; }
      ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      
      .fade-in { animation: fadeIn 0.4s ease-in; }
      @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
      }
      
      .card-hover { transition: all 0.3s ease; }
      .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(139, 90, 43, 0.2);
      }

      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      .animate-blob { animation: blob 7s infinite; }
      .animation-delay-2000 { animation-delay: 2s; }
      .animation-delay-4000 { animation-delay: 4s; }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div className="bg-[#fdf5e6] text-[#4a3728] font-sans antialiased selection:bg-[#8b5a2b] selection:text-white flex flex-col min-h-screen scroll-smooth">
      
      {}
      <nav className="bg-[#faf0e6]/90 backdrop-blur-md sticky top-0 z-50 border-b border-[#e8dcc7] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8b5a2b] to-[#cd853f] flex items-center justify-center text-white shadow-lg transform group-hover:scale-105 transition-transform">
                  <Hourglass size={20} />
                </div>
                <span className="font-serif font-bold text-2xl text-[#2c1e16] tracking-tight">CHRONOS</span>
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-[#4a3728] hover:text-[#8b5a2b] font-medium transition-colors">Início</a>
              <a href="#disciplinas" className="text-[#4a3728] hover:text-[#8b5a2b] font-medium transition-colors">Disciplinas</a>
              <a href="#cursos" className="text-[#4a3728] hover:text-[#8b5a2b] font-medium transition-colors">Cursos</a>
              <a href="#pesquisadores" className="text-[#4a3728] hover:text-[#8b5a2b] font-medium transition-colors">Pesquisadores</a>
              <button 
                className="text-[#8b5a2b] hover:text-[#7a4e25] font-medium transition-colors"
                onClick={() => openModal('Acessar Conta')}
              >
                Entrar
              </button>
              <button 
                className="bg-[#8b5a2b] hover:bg-[#7a4e25] text-white px-5 py-2 rounded-full font-medium transition-colors shadow-md shadow-[#8b5a2b]/30"
                onClick={() => openModal('Criar Conta')}
              >
                Cadastrar
              </button>
            </div>
            
            <div className="flex items-center md:hidden">
              <button 
                type="button" 
                className="text-[#4a3728] hover:text-[#8b5a2b] focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#faf0e6] border-b border-[#e8dcc7] fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#inicio" className="block px-3 py-2 rounded-md text-base font-medium text-[#4a3728] hover:text-[#8b5a2b] hover:bg-[#f0e4d4]">Início</a>
              <a href="#disciplinas" className="block px-3 py-2 rounded-md text-base font-medium text-[#4a3728] hover:text-[#8b5a2b] hover:bg-[#f0e4d4]">Disciplinas</a>
              <a href="#cursos" className="block px-3 py-2 rounded-md text-base font-medium text-[#4a3728] hover:text-[#8b5a2b] hover:bg-[#f0e4d4]">Cursos</a>
              <a href="#pesquisadores" className="block px-3 py-2 rounded-md text-base font-medium text-[#4a3728] hover:text-[#8b5a2b] hover:bg-[#f0e4d4]">Pesquisadores</a>
              <button onClick={() => openModal('Acessar Conta')} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-[#8b5a2b] hover:bg-[#f0e4d4]">Entrar</button>
              <button onClick={() => openModal('Criar Conta')} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-[#8b5a2b] hover:bg-[#7a4e25] mt-2">Cadastrar</button>
            </div>
          </div>
        )}
      </nav>

      {}
      <header id="inicio" className="relative bg-[#2c1e16] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Compreenda o Passado, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d2b48c] to-[#cd853f]">Construa o Futuro.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#d2b48c] mb-8 max-w-2xl mx-auto lg:mx-0 opacity-90">
              Acesse cursos estruturados, conteúdos aprofundados, atividades interativas e acompanhe seu progresso na plataforma definitiva de História e Sociologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={() => openModal('Criar Conta')} className="bg-[#8b5a2b] hover:bg-[#7a4e25] text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-[#8b5a2b]/40 text-center flex items-center justify-center gap-2">
                Criar Conta Gratuita <ArrowRight size={18} />
              </button>
              <a href="#cursos" className="bg-transparent hover:bg-white/10 text-white px-8 py-3 rounded-full font-medium transition-all border border-[#d2b48c]/50 text-center flex items-center justify-center">
                Explorar Cursos
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#8b5a2b] rounded-full mix-blend-overlay filter blur-2xl opacity-60 animate-blob"></div>
              <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-[#cd853f] rounded-full mix-blend-overlay filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 -left-20 w-28 h-28 bg-[#a0522d] rounded-full mix-blend-overlay filter blur-2xl opacity-60 animate-blob animation-delay-4000"></div>
              
              <img src="https://placehold.co/600x400/3e2723/d7ccc8?text=Hist%C3%B3ria+%26+Sociologia" alt="Ilustração Estudos" className="relative rounded-2xl shadow-2xl border border-[#5d4037] transform -rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover h-64 md:h-80 sepia-[0.3]" />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Temas de Estudo (renomeado para corresponder ao menu) */}
        <section id="disciplinas" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-sm font-bold text-[#8b5a2b] tracking-wider uppercase mb-2">Como Funciona</h2>
              <h3 className="text-3xl font-serif font-bold text-[#2c1e16]">Uma Plataforma Completa para seu Aprendizado</h3>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { icon: UserPlus, title: '1. Cadastro', desc: 'Visitantes criam contas como Alunos para acessar a plataforma.', bg: 'bg-[#f5deb3]', color: 'text-[#8b5a2b]' },
                { icon: BookOpen, title: '2. Cursos & Conteúdos', desc: 'Professores publicam cursos estruturados e materiais de estudo.', bg: 'bg-[#e6d5b8]', color: 'text-[#8b5a2b]' },
                { icon: Edit3, title: '3. Atividades', desc: 'Alunos resolvem questionários e realizam atividades práticas.', bg: 'bg-[#dcb68a]', color: 'text-[#2c1e16]' },
                { icon: LineChart, title: '4. Resultados', desc: 'O sistema gera resultados e salva o progresso do aluno automaticamente.', bg: 'bg-[#c6a377]', color: 'text-white' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-[#e8dcc7] card-hover">
                  <div className={`w-12 h-12 ${feature.bg} ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon size={24} />
                  </div>
                  <h4 className="font-bold text-[#2c1e16] mb-2">{feature.title}</h4>
                  <p className="text-sm text-[#4a3728] opacity-90">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {}
        <section id="cursos" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-[#8b5a2b] tracking-wider uppercase mb-2">Catálogo</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#2c1e16]">Cursos Disponíveis</h3>
              <div className="w-24 h-1 bg-[#cd853f] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Course 1 */}
              <div className="bg-[#fdf5e6] rounded-2xl overflow-hidden border border-[#e8dcc7] shadow-sm hover:shadow-lg transition-all card-hover flex flex-col">
                <img src="https://placehold.co/400x200/8b5a2b/fdf5e6?text=Brasil+Colonial" alt="Curso Brasil Colonial" className="w-full h-40 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold bg-[#f5deb3] text-[#8b4513] px-2 py-1 rounded uppercase tracking-wider">História</span>
                    <span className="text-xs text-[#4a3728] flex items-center"><Clock size={14} className="mr-1" /> 40h</span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-[#2c1e16] mb-2">História do Brasil Colonial</h4>
                  <p className="text-[#4a3728] text-sm mb-4 opacity-90 flex-grow">Curso completo sobre a formação do Brasil, abordando a economia, sociedade e política do período colonial.</p>
                  <div className="border-t border-[#e8dcc7] pt-4 mt-auto flex justify-between items-center">
                    <span className="text-xs text-[#4a3728]">Prof. Ana Costa</span>
                    <button className="text-[#8b5a2b] font-semibold hover:text-[#5c2e0b] text-sm" onClick={() => openModal('Acesso ao Curso')}>Acessar Conteúdo</button>
                  </div>
                </div>
              </div>

              {/* Course 2 */}
              <div className="bg-[#fdf5e6] rounded-2xl overflow-hidden border border-[#e8dcc7] shadow-sm hover:shadow-lg transition-all card-hover flex flex-col">
                <img src="https://placehold.co/400x200/5c4033/fdf5e6?text=Sociologia+Clássica" alt="Curso Sociologia" className="w-full h-40 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold bg-[#e6d5b8] text-[#5c4033] px-2 py-1 rounded uppercase tracking-wider">Sociologia</span>
                    <span className="text-xs text-[#4a3728] flex items-center"><Clock size={14} className="mr-1" /> 60h</span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-[#2c1e16] mb-2">Fundamentos da Sociologia</h4>
                  <p className="text-[#4a3728] text-sm mb-4 opacity-90 flex-grow">Estudo aprofundado dos pensadores clássicos: Marx, Durkheim e Weber e suas metodologias.</p>
                  <div className="border-t border-[#e8dcc7] pt-4 mt-auto flex justify-between items-center">
                    <span className="text-xs text-[#4a3728]">Prof. Carlos Lima</span>
                    <button className="text-[#8b5a2b] font-semibold hover:text-[#5c2e0b] text-sm" onClick={() => openModal('Acesso ao Curso')}>Acessar Conteúdo</button>
                  </div>
                </div>
              </div>

              {/* Course 3 */}
              <div className="bg-[#fdf5e6] rounded-2xl overflow-hidden border border-[#e8dcc7] shadow-sm hover:shadow-lg transition-all card-hover flex flex-col">
                <img src="https://placehold.co/400x200/cd853f/fdf5e6?text=Movimentos+Sociais" alt="Movimentos Sociais" className="w-full h-40 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold bg-[#f5deb3] text-[#8b4513] px-2 py-1 rounded uppercase tracking-wider">Interdisciplinar</span>
                    <span className="text-xs text-[#4a3728] flex items-center"><Clock size={14} className="mr-1" /> 30h</span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-[#2c1e16] mb-2">Movimentos Sociais e Cidadania</h4>
                  <p className="text-[#4a3728] text-sm mb-4 opacity-90 flex-grow">Análise histórica e sociológica das lutas por direitos, feminismo, movimento negro e sustentabilidade.</p>
                  <div className="border-t border-[#e8dcc7] pt-4 mt-auto flex justify-between items-center">
                    <span className="text-xs text-[#4a3728]">Prof. Maria Souza</span>
                    <button className="text-[#8b5a2b] font-semibold hover:text-[#5c2e0b] text-sm" onClick={() => openModal('Acesso ao Curso')}>Acessar Conteúdo</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {}
        <section className="py-16 bg-[#2c1e16] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#3a281d] rounded-3xl p-8 md:p-12 border border-[#4a3525] shadow-2xl relative overflow-hidden">
              <GraduationCap size={180} className="absolute -bottom-10 -right-10 text-[#4a3525] opacity-50" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="bg-[#8b5a2b] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">Área do Aluno</span>
                  <h3 className="text-3xl font-serif font-bold mb-4">Acompanhe seu Progresso</h3>
                  <p className="text-[#d2b48c] mb-6 leading-relaxed">
                    A plataforma CHRONOS oferece uma área exclusiva onde você pode visualizar os conteúdos dos cursos, responder a questionários interativos, salvar seu progresso e verificar seus resultados de forma contínua.
                  </p>
                  <ul className="space-y-3 mb-8 text-sm">
                    <li className="flex items-center"><Check size={16} className="text-[#cd853f] mr-3" /> Acesso a materiais didáticos estruturados.</li>
                    <li className="flex items-center"><Check size={16} className="text-[#cd853f] mr-3" /> Atividades e questionários avaliativos.</li>
                    <li className="flex items-center"><Check size={16} className="text-[#cd853f] mr-3" /> Relatórios de desempenho e notas (Ex: 8.5/10).</li>
                    <li className="flex items-center"><Check size={16} className="text-[#cd853f] mr-3" /> Registro automático de último acesso (Ex: 75% concluído).</li>
                  </ul>
                  <button onClick={() => openModal('Criar Conta')} className="bg-[#d2b48c] text-[#2c1e16] hover:bg-[#e6d5b8] px-6 py-2 rounded-lg font-bold transition-colors shadow-lg">
                    Junte-se à Turma
                  </button>
                </div>
                
                <div className="bg-[#1f150f] rounded-xl p-6 border border-[#3e2a1d]">
                  <h4 className="text-lg font-bold mb-4 border-b border-[#3e2a1d] pb-2">Meu Painel (Exemplo)</h4>
                  
                  {/* Mock Progress */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Curso: História do Brasil Colonial</span>
                      <span className="text-[#cd853f]">75%</span>
                    </div>
                    <div className="w-full bg-[#3a281d] rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#8b5a2b] to-[#cd853f] h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  {/* Mock Activities */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-[#d2b48c]">Próximas Atividades:</h5>
                    <div className="bg-[#2c1e16] p-3 rounded border border-[#3e2a1d] flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <FileText size={20} className="text-[#8b5a2b]" />
                        <div>
                          <p className="text-sm font-medium">Questionário 1: Ciclo do Ouro</p>
                          <p className="text-xs text-gray-400">Tipo: Múltipla escolha</p>
                        </div>
                      </div>
                      <span className="bg-[#8b5a2b]/20 text-[#d2b48c] text-xs px-2 py-1 rounded">Pendente</span>
                    </div>
                    <div className="bg-[#2c1e16] p-3 rounded border border-[#3e2a1d] flex justify-between items-center opacity-70">
                      <div className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-green-500" />
                        <div>
                          <p className="text-sm font-medium">Atividade 1: Estrutura Social</p>
                          <p className="text-xs text-gray-400">Nota: 8.5 | Concluído em: 01/07/25</p>
                        </div>
                      </div>
                      <span className="text-xs text-green-500">Concluído</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {}
        <section id="temas" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-sm font-bold text-[#8b5a2b] tracking-wider uppercase mb-2">Organização Curricular</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#2c1e16]">Temas de Estudo (ENEM & BNCC)</h3>
              </div>
              <div className="mt-4 md:mt-0 flex bg-[#f4eadd] rounded-lg p-1 border border-[#e8dcc7]">
                <button 
                  onClick={() => setActiveTab('historia')} 
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${activeTab === 'historia' ? 'bg-white shadow-sm text-[#2c1e16]' : 'text-[#8c7361] hover:text-[#2c1e16]'}`}
                >
                  História
                </button>
                <button 
                  onClick={() => setActiveTab('sociologia')} 
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${activeTab === 'sociologia' ? 'bg-white shadow-sm text-[#2c1e16]' : 'text-[#8c7361] hover:text-[#2c1e16]'}`}
                >
                  Sociologia
                </button>
              </div>
            </div>

            {/* History Topics */}
            {activeTab === 'historia' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
                {[
                  { icon: Globe, title: 'Brasil Colonial', items: ['Economia açucareira e estrutura social', 'Escravidão e resistência (Quilombos)', 'Expansão territorial no Brasil Colônia'], highlight: 'Tema com alta incidência no ENEM' },
                  { icon: Landmark, title: 'Antiguidade Clássica', items: ['Noções de cidadania e política (Grécia)', 'O papel das mulheres na Grécia e Roma', 'Escravidão e trabalho livre no mundo antigo', 'O alcance do Império Romano'] },
                  { icon: Factory, title: 'Era Vargas e República', items: ['O Estado Novo e autoritarismo', 'A Primeira República (Oligárquica)', 'Ditadura Civil-Militar no Brasil (1964-1985)', 'Redemocratização e Constituição de 1988'] },
                  { icon: Map, title: 'História da África', items: ['Civilizações e Povos antigos (Egito e outros)', 'Reinos, impérios e cidades-estados', 'O tráfico de escravizados moderno', 'Imperialismo e a partilha da África'] }
                ].map((topic, idx) => (
                  <div key={idx} className="bg-[#fdf5e6] border border-[#e8dcc7] rounded-xl p-6 hover:border-[#8b5a2b] hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#f5deb3] flex items-center justify-center text-[#8b4513]">
                        <topic.icon size={20} />
                      </div>
                      <h4 className="font-bold text-lg text-[#2c1e16]">{topic.title}</h4>
                    </div>
                    <ul className="text-[#4a3728] text-sm space-y-2 list-disc list-inside opacity-90">
                      {topic.items.map((item, i) => <li key={i}>{item}</li>)}
                      {topic.highlight && <li className="font-medium text-[#8b4513] mt-2 list-none">{topic.highlight}</li>}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Sociology Topics */}
            {activeTab === 'sociologia' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
                {[
                  { icon: Briefcase, title: 'Trabalho e Sociedade', items: ['Organização do trabalho (Taylorismo, Fordismo)', 'Conceito de trabalho contemporâneo', 'Relações de produção e luta de classes'], highlight: 'Tema muito frequente (8.77% no ENEM)' },
                  { icon: Megaphone, title: 'Cidadania e Movimentos', items: ['Direitos Humanos e de minorias', 'Movimentos feministas, negros e LGBTQIA+', 'Movimentos por terra e ambiente'], highlight: 'Top 1 em incidência (20.6% no ENEM)' }
                ].map((topic, idx) => (
                  <div key={idx} className="bg-[#fdf5e6] border border-[#e8dcc7] rounded-xl p-6 hover:border-[#a0522d] hover:shadow-md transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#e6d5b8] flex items-center justify-center text-[#5c4033]">
                        <topic.icon size={20} />
                      </div>
                      <h4 className="font-bold text-lg text-[#2c1e16]">{topic.title}</h4>
                    </div>
                    <ul className="text-[#4a3728] text-sm space-y-2 list-disc list-inside opacity-90">
                      {topic.items.map((item, i) => <li key={i}>{item}</li>)}
                      {topic.highlight && <li className="font-medium text-[#5c4033] mt-2 list-none">{topic.highlight}</li>}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="pesquisadores" className="py-20 bg-[#f4eadd] border-t border-[#e8dcc7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-[#8b5a2b] tracking-wider uppercase mb-2">Nosso Time</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#2c1e16]">Pesquisadores e Docentes</h3>
              <div className="w-24 h-1 bg-[#cd853f] mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Dr. Roberto Almeida', role: 'Doutor em História Social', img: 'https://placehold.co/150x150/8b5a2b/fdf5e6?text=RA', desc: 'Especialista em História do Brasil Império e movimentos abolicionistas.' },
                { name: 'Dra. Helena Farias', role: 'PhD em Sociologia Política', img: 'https://placehold.co/150x150/5c4033/fdf5e6?text=HF', desc: 'Pesquisadora focada em dinâmicas de poder, cidadania e gênero na América Latina.' },
                { name: 'Prof. Carlos Eduardo', role: 'Mestre em Arqueologia', img: 'https://placehold.co/150x150/cd853f/fdf5e6?text=CE', desc: 'Líder do grupo de estudos sobre sociedades antigas e pré-colombianas.' }
              ].map((prof, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#e8dcc7] card-hover flex flex-col items-center">
                  <img src={prof.img} alt={prof.name} className="w-24 h-24 rounded-full mb-4 border-4 border-[#f4eadd] shadow-md object-cover" />
                  <h4 className="text-xl font-serif font-bold text-[#2c1e16] mb-1">{prof.name}</h4>
                  <p className="text-sm text-[#8b5a2b] font-medium mb-3">{prof.role}</p>
                  <p className="text-[#4a3728] text-sm opacity-90">{prof.desc}</p>
                  <div className="mt-4 pt-4 border-t border-[#e8dcc7] w-full flex justify-center gap-3 text-[#a0522d]">
                    <button className="hover:text-[#5c2e0b] transition-colors"><Mail size={18} /></button>
                    <button className="hover:text-[#5c2e0b] transition-colors"><Linkedin size={18} /></button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button onClick={() => openModal('Todos os Pesquisadores')} className="inline-flex items-center gap-2 text-[#8b5a2b] font-bold hover:text-[#5c2e0b] transition-colors bg-white px-6 py-3 rounded-full border border-[#e8dcc7] shadow-sm hover:shadow-md">
                <Users size={18} /> Ver Corpo Docente Completo
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#2c1e16] pt-16 pb-8 border-t border-[#1f150f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <a href="#" className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8b5a2b] to-[#cd853f] flex items-center justify-center text-white">
                  <Hourglass size={16} />
                </div>
                <span className="font-serif font-bold text-xl text-white tracking-tight">CHRONOS</span>
              </a>
              <p className="text-[#d2b48c] text-sm leading-relaxed mb-6">
                Plataforma dedicada ao ensino aprofundado e democratização do conhecimento em História e Sociologia para estudantes e pesquisadores.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-[#d2b48c] hover:text-white transition-colors bg-[#3a281d] p-2 rounded-full hover:bg-[#8b5a2b]">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-[#d2b48c] hover:text-white transition-colors bg-[#3a281d] p-2 rounded-full hover:bg-[#8b5a2b]">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-[#d2b48c] hover:text-white transition-colors bg-[#3a281d] p-2 rounded-full hover:bg-[#8b5a2b]">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-sm">Plataforma</h4>
              <ul className="space-y-3">
                <li><a href="#inicio" className="text-[#d2b48c] hover:text-white transition-colors text-sm">Página Inicial</a></li>
                <li><a href="#cursos" className="text-[#d2b48c] hover:text-white transition-colors text-sm">Catálogo de Cursos</a></li>
                <li><a href="#disciplinas" className="text-[#d2b48c] hover:text-white transition-colors text-sm">Áreas de Estudo</a></li>
                <li><button onClick={() => openModal('Certificados')} className="text-[#d2b48c] hover:text-white transition-colors text-sm">Certificados</button></li>
              </ul>
            </div>

            {/* Institucional */}
            <div>
              <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-sm">Institucional</h4>
              <ul className="space-y-3">
                <li><a href="#pesquisadores" className="text-[#d2b48c] hover:text-white transition-colors text-sm">Corpo Docente</a></li>
                <li><button onClick={() => openModal('Sobre Nós')} className="text-[#d2b48c] hover:text-white transition-colors text-sm">Sobre o Chronos</button></li>
                <li><button onClick={() => openModal('Trabalhe Conosco')} className="text-[#d2b48c] hover:text-white transition-colors text-sm">Trabalhe Conosco</button></li>
                <li><button onClick={() => openModal('Contato')} className="text-[#d2b48c] hover:text-white transition-colors text-sm">Fale Conosco</button></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-4 tracking-wider uppercase text-sm">Newsletter</h4>
              <p className="text-[#d2b48c] text-sm mb-4">Receba artigos e novidades mensais sobre ciências humanas.</p>
              <form className="flex" onSubmit={(e) => { e.preventDefault(); openModal('Inscrição na Newsletter'); }}>
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="bg-[#3a281d] text-white border border-[#4a3525] rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-[#8b5a2b] text-sm"
                  required
                />
                <button type="submit" className="bg-[#8b5a2b] hover:bg-[#7a4e25] text-white px-3 py-2 rounded-r-lg transition-colors">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-[#3a281d] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#a89078] text-sm">
              &copy; {new Date().getFullYear()} Chronos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <button onClick={() => openModal('Termos de Uso')} className="text-[#a89078] hover:text-white text-sm transition-colors">Termos de Uso</button>
              <button onClick={() => openModal('Privacidade')} className="text-[#a89078] hover:text-white text-sm transition-colors">Privacidade</button>
            </div>
          </div>
        </div>
      </footer>

      <Modal isOpen={modalConfig.isOpen} onClose={closeModal} title={modalConfig.title} />
    </div>
  );
}