import type { ServiceIconKey } from './types'

export const PALETTE = {
  cream: '#FBF7F2',
  paper: '#F4ECE2',
  sand: '#E9DDCC',
  surface: '#FFFDFA',
  terracotta: '#B5745A',
  terracottaDark: '#94583F',
  olive: '#6B705C',
  oliveLight: '#A5A58D',
  text: '#3B322C',
  muted: '#7A6E64',
  line: '#E4D8C8',
  ink: '#2F2A25',
  shadow: '#5A3C28',
  photoTint: '#F0E4D3',
  white: '#FFFFFF',
  whatsapp: '#25D366',
  whatsappHover: '#1EBE5A',
} as const

export const FONTS = {
  serif: '"Fraunces Variable", Georgia, serif',
  sans: '"Inter Variable", system-ui, -apple-system, "Segoe UI", sans-serif',
} as const

export const RADII = {
  card: 20,
  tile: 14,
  input: 14,
  pill: 999,
} as const

export const CONFIG = {
  revealThreshold: 0.12,
  revealStaggerMs: 100,
  revealStaggerColumns: 3,
  heroRevealDelayMs: 150,
  contactRevealDelayMs: 120,
  aboutRevealDelayMs: 120,
  nameMinLength: 3,
  messageMinLength: 10,
  messageMaxLength: 600,
  phoneMaxDigits: 11,
  phoneValidLengths: [10, 11] as number[],
  countryCodeLength: 2,
} as const

export const SITE = {
  name: 'Milena Silva',
  firstName: 'Milena',
  title: 'Psicóloga Clínica',
  crp: 'CRP 07/00000',
  approach: 'Terapia Cognitivo-Comportamental (TCC)',
  whatsapp: '5554999999999',
  email: 'milena@gmail.com',
  instagram: 'milena_silva',
  address: {
    line1: 'Rua Senador Pinheiro, 304',
    line2: 'Rodrigues · Passo Fundo/RS · CEP 99070-220',
  },
  hours: 'Segunda a sexta, das 8h às 19h',
} as const

export const URLS = {
  whatsapp: 'https://wa.me/',
  instagram: 'https://instagram.com/',
  mapsEmbed: 'https://www.google.com/maps',
} as const

export const IMAGES = {
  hero: '/images/milena-hero.webp',
  about: '/images/milena-sobre.webp',
} as const

export const SECTION_IDS = {
  top: 'top',
  content: 'conteudo',
  about: 'sobre',
  services: 'atuacao',
  howItWorks: 'como-funciona',
  testimonials: 'depoimentos',
  faq: 'duvidas',
  contact: 'contato',
} as const

export const NAV_LINKS = [
  { label: 'Sobre', href: `#${SECTION_IDS.about}` },
  { label: 'Atuação', href: `#${SECTION_IDS.services}` },
  { label: 'Como funciona', href: `#${SECTION_IDS.howItWorks}` },
  { label: 'Depoimentos', href: `#${SECTION_IDS.testimonials}` },
  { label: 'Dúvidas', href: `#${SECTION_IDS.faq}` },
  { label: 'Contato', href: `#${SECTION_IDS.contact}` },
] as const

export const MODALITIES = ['Online', 'Presencial', 'Ainda não sei'] as const

export const CURRENT_YEAR = new Date().getFullYear()

export const LABELS = {
  scheduleConversation: 'Agendar conversa',
  scheduleWhatsApp: 'Agendar pelo WhatsApp',
  knowMyWork: 'Conheça meu trabalho',
  sendMessage: 'Enviar mensagem',
  sendAnother: 'Enviar outra mensagem',
  openWhatsApp: 'Abrir conversa no WhatsApp',
  whatsapp: 'WhatsApp',
  email: 'E-mail',
  instagram: 'Instagram',
  office: 'Consultório',
  hours: 'Horários',
} as const

export const A11Y = {
  skipLink: 'Pular para o conteúdo',
  openMenu: 'Abrir menu',
  closeMenu: 'Fechar menu',
  mainNav: 'Navegação principal',
  mobileNav: 'Navegação mobile',
  footerNav: 'Rodapé',
  chatOnWhatsApp: 'Conversar no WhatsApp',
  contactForm: 'Formulário de contato',
  mapTitle: 'Localização do consultório',
  heroPhoto: `Retrato de ${SITE.name}`,
  aboutPhoto: `${SITE.name} em seu consultório`,
  photoPlaceholder: (alt: string) => `Espaço reservado: ${alt}`,
} as const

export const MESSAGES = {
  whatsappGreeting: `Olá, ${SITE.firstName}! Vi seu site e gostaria de agendar uma conversa inicial.`,
  whatsappFromForm: (data: { nome: string; modalidade: string; mensagem: string }) =>
    `Olá, ${SITE.firstName}! Me chamo ${data.nome}. Preferência: ${data.modalidade}. ${data.mensagem}`,
  contactSuccess: (firstName: string) =>
    `Mensagem registrada, ${firstName}! Para agilizar, você pode continuar a conversa direto no WhatsApp.`,
} as const

export const FORM = {
  labels: {
    name: 'Nome',
    phone: LABELS.whatsapp,
    email: 'E-mail (opcional)',
    modality: 'Modalidade de preferência',
    message: 'Como posso te ajudar?',
  },
  phonePlaceholder: '(00) 00000-0000',
  consent: 'Concordo em compartilhar meus dados para que a psicóloga entre em contato (LGPD).',
  validation: {
    name: 'Informe seu nome',
    phone: 'Informe um WhatsApp válido com DDD',
    email: 'E-mail inválido',
    messageMin: `Conte um pouco mais (mín. ${CONFIG.messageMinLength} caracteres)`,
    messageMax: `Máximo de ${CONFIG.messageMaxLength} caracteres`,
    consent: 'É necessário concordar para continuar',
  },
} as const

export const TEXTS = {
  header: {
    role: `Psicóloga · ${SITE.crp}`,
  },
  photo: {
    placeholderPrefix: 'Adicione a foto em',
  },
  hero: {
    eyebrow: 'Psicoterapia individual · Online e presencial',
    title: 'Um espaço seguro para você se ouvir, se entender e recomeçar.',
    text: 'Atendo adultos e adolescentes com escuta acolhedora, ética e baseada em evidências. Sem pressa e sem julgamentos: no seu tempo, do seu jeito.',
    highlights: [
      'Atendimento online e presencial',
      'Sigilo e ética profissional',
      'Primeira conversa sem compromisso',
    ],
  },
  about: {
    eyebrow: 'Sobre mim',
    title: `Prazer, sou a ${SITE.firstName}.`,
    paragraphs: [
      'Sou psicóloga clínica e acredito que a terapia é, antes de tudo, uma relação de confiança. Meu trabalho é caminhar ao seu lado para que você compreenda o que sente, reconheça seus recursos e construa mudanças possíveis no dia a dia.',
      'Trabalho com Terapia Cognitivo-Comportamental, uma abordagem com sólida base científica, combinada com uma escuta sensível e individualizada. Cada pessoa chega com uma história única, e o processo terapêutico respeita isso.',
    ],
    credentialsTitle: 'Formação e abordagem',
    credentials: [
      'Graduação em Psicologia, ATITUS',
      'Especialização em Terapia Cognitivo-Comportamental',
      'Formação complementar em Terapia do Esquema',
      'Supervisão clínica e estudo continuado',
    ],
    stats: [
      { value: '8+', label: 'anos de experiência clínica' },
      { value: '2.500+', label: 'sessões realizadas' },
      { value: '100%', label: 'sigilo garantido' },
    ],
  },
  services: {
    eyebrow: 'Áreas de atuação',
    title: 'Com o que posso te ajudar',
    intro:
      'Alguns dos temas que mais acompanho no consultório. Se o seu não está na lista, vale conversarmos.',
    items: [
      {
        icon: 'anxiety',
        title: 'Ansiedade e estresse',
        text: 'Preocupação constante, pensamentos acelerados, crises de pânico e sensação de estar sempre no limite.',
      },
      {
        icon: 'mood',
        title: 'Depressão e humor',
        text: 'Tristeza persistente, desânimo, falta de energia e perda de interesse pelo que antes fazia sentido.',
      },
      {
        icon: 'selfEsteem',
        title: 'Autoestima e autoconhecimento',
        text: 'Autocrítica excessiva, insegurança e o desejo de se conhecer melhor e tomar decisões com mais clareza.',
      },
      {
        icon: 'relationships',
        title: 'Relacionamentos e família',
        text: 'Dificuldades em vínculos afetivos, comunicação, limites e conflitos familiares.',
      },
      {
        icon: 'career',
        title: 'Carreira e burnout',
        text: 'Esgotamento profissional, cobrança, transição de carreira e equilíbrio entre trabalho e vida pessoal.',
      },
      {
        icon: 'transition',
        title: 'Luto e momentos de transição',
        text: 'Perdas, mudanças e fases de vida que pedem acolhimento e reorganização emocional.',
      },
    ] satisfies { icon: ServiceIconKey; title: string; text: string }[],
  },
  howItWorks: {
    eyebrow: 'Como funciona',
    title: 'Do primeiro contato ao acompanhamento',
    steps: [
      {
        title: 'Primeiro contato',
        text: 'Você me chama pelo WhatsApp e conversamos rapidamente sobre o que motivou a busca e os melhores horários.',
      },
      {
        title: 'Sessão de acolhimento',
        text: 'Na primeira sessão nos conhecemos, entendo sua demanda e explico como a terapia funciona.',
      },
      {
        title: 'Plano terapêutico',
        text: 'Definimos juntos objetivos, frequência e as estratégias que fazem sentido para o seu caso.',
      },
      {
        title: 'Acompanhamento',
        text: 'Sessões regulares, com revisão periódica do processo para acompanhar sua evolução.',
      },
    ],
    info: [
      { label: 'Duração', value: '50 minutos por sessão' },
      { label: 'Modalidade', value: 'Online ou presencial' },
      { label: 'Frequência', value: 'Semanal ou quinzenal' },
      { label: 'Investimento', value: 'A partir de R$ 180 por sessão' },
    ],
  },
  testimonials: {
    eyebrow: 'Depoimentos',
    title: 'O que dizem sobre o processo',
    note: 'Depoimentos ilustrativos, apenas para composição visual do layout.',
    items: [
      {
        text: 'Cheguei sem saber por onde começar. Aos poucos fui entendendo meus padrões e hoje lido com a ansiedade de um jeito muito mais leve.',
        author: 'Paciente A.',
      },
      {
        text: `A ${SITE.firstName} tem uma escuta cuidadosa e direta ao mesmo tempo. Me senti acolhida desde a primeira sessão, mesmo online.`,
        author: 'Paciente B.',
      },
      {
        text: 'A terapia me deu ferramentas práticas para o trabalho e para os relacionamentos. Foi uma das melhores decisões que tomei.',
        author: 'Paciente C.',
      },
    ],
  },
  faq: {
    eyebrow: 'Dúvidas frequentes',
    title: 'Perguntas que costumo receber',
    items: [
      {
        question: 'Como sei se preciso de terapia?',
        answer:
          'Não é preciso estar em crise para começar. Se você sente que algo te incomoda, que está difícil lidar com emoções, decisões ou relações, ou simplesmente quer se conhecer melhor, a terapia pode ajudar.',
      },
      {
        question: 'A terapia online funciona?',
        answer:
          'Sim. O atendimento online segue as normas do Conselho Federal de Psicologia e tem eficácia comparável ao presencial para a maioria das demandas. Você só precisa de internet estável e um local reservado.',
      },
      {
        question: 'Quanto tempo dura o tratamento?',
        answer:
          'Depende de cada pessoa e dos objetivos definidos. A TCC costuma ser focada e estruturada, e revisamos o processo periodicamente para ajustar o caminho.',
      },
      {
        question: 'Atende por convênio ou plano de saúde?',
        answer:
          'O atendimento é particular. Emito recibo para você solicitar reembolso ao seu plano, caso ele ofereça essa cobertura.',
      },
      {
        question: 'O que acontece se eu precisar faltar ou remarcar?',
        answer:
          'Peço aviso com pelo menos 24 horas de antecedência para remarcarmos sem custo. Combinamos os detalhes na primeira sessão.',
      },
      {
        question: 'O que é conversado na terapia fica em sigilo?',
        answer:
          'Sim. O sigilo profissional é garantido pelo Código de Ética do Psicólogo, com exceções previstas em lei, que sempre serão explicadas com transparência.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos conversar?',
    text: 'Envie uma mensagem e retorno em até 1 dia útil. O primeiro contato é sem compromisso.',
    instagramHandle: `@${SITE.instagram}`,
  },
  footer: {
    role: `${SITE.title} · ${SITE.crp}`,
    tagline: 'Psicoterapia com acolhimento, ética e respeito ao seu tempo.',
    notice:
      'Este site tem caráter informativo e não substitui atendimento psicológico ou médico. Em situação de crise ou risco, procure o CVV (ligue 188, 24h) ou o serviço de urgência mais próximo (SAMU 192).',
    copyright: `© ${CURRENT_YEAR} ${SITE.name} · ${SITE.crp}. Todos os direitos reservados.`,
  },
} as const
