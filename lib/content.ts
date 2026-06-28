// ============================================================
// Recanto do Açaí · Estações — conteúdo da landing de eventos
// Toda a copy vive aqui (fonte única de verdade).
// TODO(Moisés): revisar os itens marcados com [CONFIRMAR].
// ============================================================

export const site = {
  name: "Recanto do Açaí",
  brandTag: "Estações",
  // [CONFIRMAR] número oficial do Recanto (hoje é o mesmo do Prometheus/MSC).
  whatsapp: "5521981749450",
  whatsappDisplay: "(21) 98174-9450",
  region: "Guadalupe · Marechal Hermes — Zona Norte do Rio de Janeiro",
  // [CONFIRMAR] raio de atendimento + taxa de deslocamento.
  serviceArea: "Atendemos o Rio de Janeiro e região",
  // Domínio IDN (com acentos) convertido para punycode/ASCII — exigido por
  // canonical, OpenGraph, sitemap, robots e JSON-LD (precisam ser ASCII).
  // Forma legível: https://eventos.recantodoaçaiestações.com.br
  url: "https://eventos.xn--recantodoaaiestaes-hvbg80a.com.br",
  instagram: "https://www.instagram.com/recanto_do_acai_guadalule/",
  instagramHandle: "@recanto_do_acai_guadalule",
  tiktok: "https://www.tiktok.com/@recantodoacaiestacoes",
  tiktokHandle: "@recantodoacaiestacoes",
  facebook: "https://facebook.com/recantomarechal",
} as const;

// Pacote base — [CONFIRMAR] todos estes números com o Moisés.
export const baseService = {
  durationHours: 3,
  guests: 50,
  includedFlavors: 2,
  attendants: 1,
} as const;

export const nav = [
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "O que inclui", href: "/#inclui" },
  { label: "Galeria", href: "/#galeria" },
  { label: "Pacotes", href: "/#pacotes" },
  { label: "Orçamento", href: "/#orcamento" },
  { label: "Dúvidas", href: "/#faq" },
  { label: "Blog", href: "/blog" },
] as const;

export const hero = {
  badge: "Estações gourmet para eventos · Rio de Janeiro",
  titleLead: "Garanta a estação de açaí na sua festa",
  titleHighlight: "100% online",
  subtitle:
    "Açaí e sorvete gourmet servidos na hora. Escolha o pacote, confirme a data e reserve seu dia em 2 minutos direto na página.",
  ctaPrimary: "Reserve sua data agora",
  ctaSecondary: "Simular orçamento",
  ctaNote: "Confirmação imediata · data bloqueada na agenda na hora 🔒",
  stats: [
    { value: "Na hora", label: "Servido fresquinho" },
    { value: "À vontade", label: "Acompanhamentos" },
    { value: "Stripe", label: "Pagamento 100% seguro" },
  ],
};

export const eventTypes = {
  title: "Para qualquer celebração",
  subtitle: "Do casamento ao aniversário de 1 ano — reserve a estação perfeita para o seu dia.",
  items: [
    { icon: "Heart", label: "Casamentos" },
    { icon: "Crown", label: "15 anos" },
    { icon: "Cake", label: "Aniversário de 1 ano" },
    { icon: "Baby", label: "Chá revelação" },
    { icon: "PartyPopper", label: "Festa infantil" },
    { icon: "GraduationCap", label: "Formaturas" },
    { icon: "Users", label: "Festa de rua / condomínio" },
    { icon: "Briefcase", label: "Corporativo" },
  ],
};

export const howItWorks = {
  title: "Reserva em 4 passos simples",
  subtitle: "Tudo online direto na página, sem necessidade de chat ou burocracia.",
  steps: [
    {
      n: "01",
      title: "Escolha seu Menu",
      desc: "Selecione entre o pacote simples de Açaí ou Sorvete Gourmet, ou o nosso mais pedido Combo duplo para agradar a todos os convidados.",
    },
    {
      n: "02",
      title: "Simule Adicionais",
      desc: "Caso tenha mais de 120 convidados, configure os adicionais de tamanho diretamente no nosso formulário de orçamento.",
    },
    {
      n: "03",
      title: "Confirme com o Sinal",
      desc: "Pague o sinal de 50% em ambiente seguro via Stripe (cartão em até 3x sem juros) para bloquear a data na nossa agenda oficial na hora.",
    },
    {
      n: "04",
      title: "Aproveite a Festa",
      desc: "Nossa equipe chega com antecedência para montar a estação e servir tudo à vontade. O saldo restante você acerta apenas no dia do evento!",
    },
  ],
};

export const included = {
  title: "Estrutura e serviço gourmet inclusos",
  subtitle:
    "Montagem, equipe e insumos estão no pacote. Você só escolhe onde a estação será montada.",
  items: [
    {
      icon: "IceCream",
      img: "/images/produtos/creme-flocos.jpg",
      title: "Açaí & Cremes Especiais",
      desc: "Fórmula ultra cremosa, livre de cristais de gelo e feita com insumos selecionados de alta qualidade.",
    },
    {
      icon: "Utensils",
      img: "/images/estacao/estacao-complementos.jpg",
      title: "Mesa de Toppings Premium",
      desc: "Acompanhamentos liberados, com frutas cortadas no dia e marcas líderes de mercado.",
    },
    {
      icon: "UserCheck",
      img: "/images/eventos/equipe-recanto-evento.jpg",
      title: "Atendimento Profissional",
      desc: "Atendentes uniformizados e treinados para servir com simpatia, agilidade e total capricho.",
    },
    {
      icon: "Truck",
      img: "/images/estacao/estacao-atendente-salao.jpg",
      title: "Logística Sob Medida",
      desc: "Transporte, montagem e desmontagem rápidos e silenciosos. Zero trabalho para o anfitrião.",
    },
  ],
  note: "Atendimento de aprox. 3h · pensado para até 120 convidados base · 2 sabores inclusos. Precisa de mais? A gente personaliza pra você.",
};

export const packages = {
  title: "Opções de Pacotes",
  subtitle: "Garanta a exclusividade da sua data com 50% de entrada — pagamento online, seguro e imediato. Atendemos apenas 1 evento por data na agenda.",
  scarcity: "⚡ Reserva imediata — sua data bloqueada na hora",
  options: [
    {
      id: "unico",
      name: "Açaí ou Sorvete",
      price: 1490,
      tagline: "A escolha clássica para surpreender",
      features: [
        "Açaí premium OU creme gourmet (você escolhe)",
        "Mesa de acompanhamentos liberada",
        "Equipe uniformizada servindo na hora",
        "Insumos e logística inclusos",
      ],
      highlighted: false,
      cta: "Quero este pacote",
    },
    {
      id: "combo",
      name: "Açaí + Sorvete",
      price: 1690,
      tagline: "A experiência completa para seu evento",
      badge: "Mais escolhido",
      features: [
        "Açaí premium E creme gourmet — os dois!",
        "Mesa de acompanhamentos liberada",
        "Equipe uniformizada servindo na hora",
        "Insumos e logística inclusos",
        "Agrada quem ama açaí e quem prefere creme gourmet",
      ],
      highlighted: true,
      cta: "Quero o combo",
    },
  ],
  anchorTitle: "Por que o combo vale mais a pena?",
  anchor:
    "Por um investimento de apenas R$ 200 a mais, você oferece açaí E sorvete. A melhor escolha para garantir que 100% dos seus convidados saiam satisfeitos.",
  addons: {
    title: "Quer turbinar a mesa?",
    items: [
      { name: "Sabor extra premium", price: 350, desc: "Aquele sabor especial pra impressionar." },
      { name: "Sabor extra normal", price: 250, desc: "Mais variedade pra alegrar os convidados." },
    ],
  },
};

export const flavors = {
  title: "Acompanhamentos liberados na mesa",
  subtitle: "Tudo liberado pra montar do seu jeito, sem limite.",
  groups: [
    { icon: "Apple", title: "Frutas", items: ["Banana"] },
    {
      icon: "Cookie",
      title: "Crocantes & granulados",
      items: ["Granola", "Ovomaltine crocante", "Paçoca", "Amendoim", "Granulado", "Leite em pó"],
    },
    {
      icon: "Candy",
      title: "Doces & caldas",
      items: ["Confetes", "Jujuba", "Leite condensado", "Calda de morango", "Chocolate"],
    },
  ],
};

export const differentials = {
  title: "Por que escolher o Recanto?",
  subtitle: "O cuidado que faz o convidado voltar na mesa o evento inteiro.",
  items: [
    {
      icon: "Award",
      img: "/images/produtos/acai-cremoso-colher.jpg",
      title: "Qualidade Incomparável",
      desc: "Fórmula premium ultra cremosa, livre de cristais de gelo. Um sabor marcante do primeiro ao último convidado.",
    },
    {
      icon: "Sparkles",
      img: "/images/estacao/estacao-atendente-salao.jpg",
      title: "Montado na Hora",
      desc: "Sem potes prontos ou congelados: nossa equipe monta cada taça de forma personalizada na frente do convidado.",
    },
    {
      icon: "HandHeart",
      img: "/images/eventos/festa-tema-rei-leao.jpg",
      title: "Tranquilidade Total",
      desc: "Nós transportamos, montamos, servimos e cuidamos da limpeza do espaço. Você só curte a sua comemoração.",
    },
  ],
};

export const gallery = {
  title: "A experiência Recanto, ao vivo",
  subtitle:
    "Fotos reais dos nossos eventos — da estação montada ao açaí cremoso servido na hora.",
  items: [
    {
      src: "/images/produtos/acai-cremoso-colher.jpg",
      alt: "Açaí cremoso premium servido com colher de sorvete",
      caption: "Açaí cremoso, na hora",
    },
    {
      src: "/images/estacao/estacao-atendente-salao.jpg",
      alt: "Estação de açaí montada com atendente uniformizada no salão de festas",
      caption: "Sua estação montada",
    },
    {
      src: "/images/estacao/estacao-complementos.jpg",
      alt: "Mesa de acompanhamentos liberados do Recanto do Açaí",
      caption: "Mesa liberada",
    },
    {
      src: "/images/produtos/creme-flocos.jpg",
      alt: "Creme premium com flocos servido nas estações do Recanto",
      caption: "Cremes premium",
    },
    {
      src: "/images/eventos/equipe-recanto-evento.jpg",
      alt: "Equipe uniformizada do Recanto do Açaí em um evento",
      caption: "Equipe uniformizada",
    },
    {
      src: "/images/eventos/festa-tema-rei-leao.jpg",
      alt: "Estação de açaí em festa infantil temática",
      caption: "Festas inesquecíveis",
    },
  ],
};

export const testimonials = {
  title: "Quem provou, recomenda",
  subtitle: "Histórias de festas que ficaram ainda mais doces.",
  items: [
    {
      name: "Marina & Rafael",
      event: "Casamento · Vila da Penha",
      text: "A estação de açaí foi o ponto alto da festa. Montaram tudo na hora e os convidados não largaram a mesa a noite inteira. Serviço impecável do começo ao fim.",
    },
    {
      name: "Patrícia Gomes",
      event: "15 anos da Júlia · Guadalupe",
      text: "Fechei o combo de açaí e sorvete e foi a melhor decisão. Equipe pontual, uniformizada e super atenciosa. Minha filha e as amigas amaram cada detalhe.",
    },
    {
      name: "Camila Andrade",
      event: "1 aninho do Theo · Marechal Hermes",
      text: "Açaí cremoso de verdade, sem aquele gelo. As crianças e os adultos adoraram montar do jeito deles. Recomendo de olhos fechados!",
    },
    {
      name: "Letícia & Bruno",
      event: "Chá revelação · Pavuna",
      text: "Atendimento nota 10. Combinamos tudo pelo WhatsApp sem stress e no dia chegaram cedo pra montar. A mesa de acompanhamentos liberada foi um sucesso.",
    },
    {
      name: "Anderson Lima",
      event: "Confraternização da empresa · Irajá",
      text: "Contratamos para o evento de fim de ano e superou a expectativa. Profissionais ágeis e a qualidade do açaí impressionou o escritório inteiro.",
    },
    {
      name: "Fernanda Rocha",
      event: "Aniversário de 30 anos · Madureira",
      text: "Já é a segunda vez que contrato. Cremosidade absurda, atendimento caprichado e zero preocupação pra mim. Virou presença obrigatória nas minhas festas.",
    },
  ],
};

export const faq = {
  title: "Perguntas frequentes",
  items: [
    {
      q: "Qual a antecedência para reservar?",
      a: "Quanto antes, melhor — as datas mais concorridas esgotam rápido. Fale com a gente no WhatsApp e confirmamos a disponibilidade da sua data na hora.",
    },
    {
      q: "Vocês decoram a mesa?",
      a: "O nosso serviço é o açaí/sorvete premium + acompanhamentos servidos pela nossa equipe. A decoração da mesa fica por sua conta (ou da sua decoradora), do jeitinho que você imaginou.",
    },
    {
      q: "Quantos convidados o pacote atende?",
      a: "O pacote base é pensado para cerca de 50 convidados. Tem mais gente? A gente monta um orçamento sob medida pra você.",
    },
    {
      q: "Quais as formas de pagamento?",
      a: "Trabalhamos com as principais formas de pagamento, e a reserva da data é confirmada com um sinal. Combinamos todos os detalhes no WhatsApp.",
    },
    {
      q: "Atendem qual região?",
      a: "Somos da Zona Norte do Rio (Guadalupe / Marechal Hermes) e atendemos a cidade e região. Confirme a cobertura para o seu endereço no WhatsApp.",
    },
    {
      q: "O que está incluso no preço?",
      a: "Insumos premium, acompanhamentos, equipe uniformizada servindo na hora e toda a logística. Sem surpresas.",
    },
  ],
};

export const finalCta = {
  title: "Sua data ainda está livre?",
  subtitle:
    "Reserve agora com 50% de entrada — 100% online, sem precisar de chat. Atendemos poucos eventos por data e as de fim de semana esgotam primeiro. Garanta a sua antes que reservem.",
  cta: "Reserve sua data",
};

export const footer = {
  tagline: "Estações de açaí e sorvete gourmet para eventos.",
  group: "Uma marca do grupo MSC Company.",
};

/** Mensagem padrão pré-preenchida do WhatsApp (CTA genérico). */
export const waDefaultMessage =
  "Olá, Recanto! 🍇 Vi a página de eventos e quero um orçamento. Pode me ajudar?";
