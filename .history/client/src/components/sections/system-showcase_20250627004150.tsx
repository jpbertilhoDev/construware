import { motion } from "framer-motion";

const showcaseFeatures = [
  {
    id: 1,
    title: "Dashboard Inteligente",
    subtitle: "Visão completa de todos os seus projetos em tempo real.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    mockupContent: (
      <div className="relative w-full h-full overflow-hidden rounded-lg">
        <img 
          src="/dashboard-screenshot.png" 
          alt="Dashboard do Sistema Construware"
          className="w-full h-full object-cover object-top rounded-lg shadow-2xl"
          style={{ 
            maxHeight: '400px',
            objectPosition: 'top center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-lg"></div>
        {/* Overlay com informações em destaque */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <div className="flex items-center justify-between text-white text-sm">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Sistema Online</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-400">12 Projetos Ativos</span>
                <span className="text-blue-400">€125.000 Receita</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    isScreenshot: true
  },
  {
    id: 2,
    title: "Controle Financeiro Avançado",
    subtitle: "Monitore custos e orçamentos em tempo real com precisão total.",
    gradient: "from-purple-500 via-blue-500 to-cyan-500",
    mockupContent: (
      <div className="bg-gray-900/90 rounded-lg p-4 text-xs font-mono">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="text-blue-400">// Dashboard Financeiro</div>
          <div className="text-green-400">const orcamento = {"{"}</div>
          <div className="ml-4 text-white">previsto: <span className="text-yellow-400">"R$ 2.850.000"</span>,</div>
          <div className="ml-4 text-white">executado: <span className="text-green-400">"R$ 2.720.000"</span>,</div>
          <div className="ml-4 text-white">economia: <span className="text-cyan-400">"4.6%"</span></div>
          <div className="text-green-400">{"};"}</div>
          <div className="text-purple-400 mt-2">📊 Relatórios automáticos</div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Colaboração em Tempo Real",
    subtitle: "Equipes conectadas trabalhando de forma sincronizada.",
    gradient: "from-pink-500 via-red-500 to-orange-500",
    mockupContent: (
      <div className="bg-gray-900/90 rounded-lg p-4 text-xs font-mono">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="text-blue-400">// Equipe Online</div>
          <div className="text-green-400">equipe.status({"{"}</div>
          <div className="ml-4 text-white">arquiteto: <span className="text-green-400">"online"</span>,</div>
          <div className="ml-4 text-white">engenheiro: <span className="text-green-400">"editando"</span>,</div>
          <div className="ml-4 text-white">mestre_obra: <span className="text-yellow-400">"em campo"</span></div>
          <div className="text-green-400">{"});"}</div>
          <div className="text-purple-400 mt-2">🔄 Sincronização automática</div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "IA Preditiva",
    subtitle: "Inteligência artificial prevê problemas antes que aconteçam.",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    mockupContent: (
      <div className="bg-gray-900/90 rounded-lg p-4 text-xs font-mono">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="text-blue-400">// IA Construware</div>
          <div className="text-green-400">ia.analise_preditiva({"{"}</div>
          <div className="ml-4 text-white">clima: <span className="text-yellow-400">"chuva em 2 dias"</span>,</div>
          <div className="ml-4 text-white">sugestao: <span className="text-cyan-400">"antecipar concretagem"</span>,</div>
          <div className="ml-4 text-white">economia: <span className="text-green-400">"R$ 15.000"</span></div>
          <div className="text-green-400">{"});"}</div>
          <div className="text-purple-400 mt-2">🤖 Decisões inteligentes</div>
        </div>
      </div>
    )
  }
];

export function SystemShowcase() {
  return (
    <section className="py-40 bg-[#0C0C0C] relative overflow-hidden">
      {/* Background elements - Inspirado no estilo Cursor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/15 via-purple-500/10 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/15 via-cyan-500/10 to-transparent blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div 
          className="text-center mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-8 backdrop-blur-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
            Tecnologia de ponta
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Sistema que{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              revoluciona
            </span>{" "}
            a construção
          </h2>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Cada funcionalidade foi projetada para simplificar processos complexos 
            e acelerar a entrega dos seus projetos.
          </p>
        </motion.div>

        {/* Showcase features */}
        <div className="space-y-40">
          {showcaseFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-24`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Content */}
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                  <span className="mr-2">✦</span> 
                  Feature {feature.id - 1}
                </div>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-white/70 leading-relaxed font-light">
                    {feature.subtitle}
                  </p>
                </div>
              </div>

              {/* Mockup - Versão maior e mais destacada */}
              <div className="flex-1 relative">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02, rotate: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`relative rounded-2xl bg-gradient-to-br ${feature.gradient} p-[2px] shadow-2xl shadow-${feature.gradient.split('-')[1]}/20`}>
                    <div className="bg-[#0A0A0A] rounded-xl p-8 backdrop-blur-md">
                      <div className="transform scale-110">
                        {feature.mockupContent}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Elementos flutuantes e decorativos */}
                <motion.div
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-full blur-md"
                  animate={{ y: [0, -15, 0], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-md"
                  animate={{ y: [0, 15, 0], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                
                {/* Pontos decorativos */}
                <div className="absolute -right-10 bottom-1/2 w-24 h-24 flex flex-wrap gap-2 opacity-30">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full bg-${feature.gradient.split('-')[2]}/80`}></div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}