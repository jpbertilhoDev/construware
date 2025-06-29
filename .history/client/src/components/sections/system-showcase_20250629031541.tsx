import { motion } from "framer-motion";

const showcaseFeatures = [
  {
    id: 2,
    title: "Planejamento Inteligente",
    subtitle: "Analisamos seu negócio e criamos a solução perfeita para suas necessidades específicas.",
    gradient: "from-purple-500 via-blue-500 to-cyan-500",
    mockupContent: (
      <div className="bg-gray-900/90 rounded-lg p-4 text-xs font-mono">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="text-blue-400">// Análise do seu negócio</div>
          <div className="text-green-400">const solucao = {"{"}</div>
          <div className="ml-4 text-white">objetivo: <span className="text-yellow-400">"Aumentar vendas 40%"</span>,</div>
          <div className="ml-4 text-white">prazo: <span className="text-green-400">"3 meses"</span>,</div>
          <div className="ml-4 text-white">resultado: <span className="text-cyan-400">"Sistema sob medida"</span></div>
          <div className="text-green-400">{"};"}</div>
          <div className="text-purple-400 mt-2">🎯 Foco no que realmente importa</div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Desenvolvimento Colaborativo",
    subtitle: "Você acompanha cada etapa e participa das decisões importantes do seu projeto.",
    gradient: "from-pink-500 via-red-500 to-orange-500",
    mockupContent: (
      <div className="bg-gray-900/90 rounded-lg p-4 text-xs font-mono">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="text-blue-400">// Seu projeto em andamento</div>
          <div className="text-green-400">projeto.status({"{"}</div>
          <div className="ml-4 text-white">etapa: <span className="text-green-400">"Desenvolvimento"</span>,</div>
          <div className="ml-4 text-white">progresso: <span className="text-green-400">"75% concluído"</span>,</div>
          <div className="ml-4 text-white">próxima_reunião: <span className="text-yellow-400">"Sexta-feira"</span></div>
          <div className="text-green-400">{"});"}</div>
          <div className="text-purple-400 mt-2">📞 Comunicação constante</div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Entrega e Suporte",
    subtitle: "Seu sistema fica no ar, funcionando perfeitamente, com nossa equipe cuidando de tudo.",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    mockupContent: (
      <div className="bg-gray-900/90 rounded-lg p-4 text-xs font-mono">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="text-blue-400">// Seu sistema funcionando</div>
          <div className="text-green-400">sistema.status({"{"}</div>
          <div className="ml-4 text-white">funcionando: <span className="text-green-400">"✓ 24/7"</span>,</div>
          <div className="ml-4 text-white">velocidade: <span className="text-green-400">"✓ Rápido"</span>,</div>
          <div className="ml-4 text-white">suporte: <span className="text-cyan-400">"🚀 Sempre disponível"</span></div>
          <div className="text-green-400">{"});"}</div>
          <div className="text-purple-400 mt-2">⚡ Você foca no seu negócio</div>
        </div>
      </div>
    )
  }
];

export function SystemShowcase() {
  return (
    <section className="py-40 bg-[#0C0C0C] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/15 via-purple-500/10 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/15 via-cyan-500/10 to-transparent blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-8 backdrop-blur-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
            Nosso Processo
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Como{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              trabalhamos
            </span>{" "}
            para você
          </h2>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Nosso processo de desenvolvimento garante que você receba exatamente 
            o que sua empresa precisa para crescer e se destacar.
          </p>
        </motion.div>

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
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                  <span className="mr-2">✦</span> 
                  Etapa {feature.id - 1}
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


const showcaseFeatures = [
  {
    id: 2,
    title: "Planejamento Inteligente",
    subtitle: "Analisamos seu negócio e criamos a solução perfeita para suas necessidades específicas.",
    gradient: "from-purple-500 via-blue-500 to-cyan-500",
    mockupContent: (
      <div className="bg-gray-900/90 rounded-lg p-4 text-xs font-mono">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="text-blue-400">// Análise do seu negócio</div>
          <div className="text-green-400">const solucao = {"{"}</div>
          <div className="ml-4 text-white">objetivo: <span className="text-yellow-400">"Aumentar vendas 40%"</span>,</div>
          <div className="ml-4 text-white">prazo: <span className="text-green-400">"3 meses"</span>,</div>
          <div className="ml-4 text-white">resultado: <span className="text-cyan-400">"Sistema sob medida"</span></div>
          <div className="text-green-400">{"};"}</div>
          <div className="text-purple-400 mt-2">🎯 Foco no que realmente importa</div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Desenvolvimento Colaborativo",
    subtitle: "Você acompanha cada etapa e participa das decisões importantes do seu projeto.",
    gradient: "from-pink-500 via-red-500 to-orange-500",
    mockupContent: (
      <div className="bg-gray-900/90 rounded-lg p-4 text-xs font-mono">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="text-blue-400">// Seu projeto em andamento</div>
          <div className="text-green-400">projeto.status({"{"}</div>
          <div className="ml-4 text-white">etapa: <span className="text-green-400">"Desenvolvimento"</span>,</div>
          <div className="ml-4 text-white">progresso: <span className="text-green-400">"75% concluído"</span>,</div>
          <div className="ml-4 text-white">próxima_reunião: <span className="text-yellow-400">"Sexta-feira"</span></div>
          <div className="text-green-400">{"});"}</div>
          <div className="text-purple-400 mt-2">📞 Comunicação constante</div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Entrega e Suporte",
    subtitle: "Seu sistema fica no ar, funcionando perfeitamente, com nossa equipe cuidando de tudo.",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    mockupContent: (
      <div className="bg-gray-900/90 rounded-lg p-4 text-xs font-mono">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="text-blue-400">// Seu sistema funcionando</div>
          <div className="text-green-400">sistema.status({"{"}</div>
          <div className="ml-4 text-white">funcionando: <span className="text-green-400">"✓ 24/7"</span>,</div>
          <div className="ml-4 text-white">velocidade: <span className="text-green-400">"✓ Rápido"</span>,</div>
          <div className="ml-4 text-white">suporte: <span className="text-cyan-400">"🚀 Sempre disponível"</span></div>
          <div className="text-green-400">{"});"}</div>
          <div className="text-purple-400 mt-2">⚡ Você foca no seu negócio</div>
        </div>
      </div>
    )
  }
];

export function SystemShowcase() {
  return (
    <section className="py-40 bg-[#0C0C0C] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/15 via-purple-500/10 to-transparent blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-500/15 via-cyan-500/10 to-transparent blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-8 backdrop-blur-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
            Nosso Processo
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Como{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              trabalhamos
            </span>{" "}
            para você
          </h2>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-light">
            Nosso processo de desenvolvimento garante que você receba exatamente 
            o que sua empresa precisa para crescer e se destacar.
          </p>
        </motion.div>

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
              <div className="flex-1 space-y-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/60">
                  <span className="mr-2">✦</span> 
                  Etapa {feature.id - 1}
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
