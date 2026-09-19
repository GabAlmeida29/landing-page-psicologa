# Landing Page | Psicóloga

Landing page de apresentação profissional para uma psicóloga (projeto de exemplo com a persona **Milena Denardi**). Site 100% front-end, sem back-end, com foco em visual acolhedor, acessibilidade e fácil personalização.

> Todos os dados (nome, CRP, telefone, e-mail, endereço, valores, formação, depoimentos) são **fictícios** e devem ser substituídos antes de qualquer publicação.

## Stack

- React 19 + TypeScript
- Vite
- Material UI (componentes e tema) + CSS global
- React Hook Form + Zod (formulário de contato e validação)
- ESLint + Prettier

## Seções

Header fixo com menu mobile, Hero, Sobre, Áreas de atuação, Como funciona, Depoimentos, Perguntas frequentes (FAQ), Contato (formulário, dados e mapa), Rodapé e botão flutuante de WhatsApp.

O formulário de contato valida os campos no front-end e, como não há back-end, não envia os dados a lugar nenhum: ao concluir, oferece continuar a conversa pelo WhatsApp com a mensagem já preenchida.

## Requisitos

- Node.js `^20.19.0` ou `>=22.12.0`
- npm

## Como rodar

```bash
npm install
npm run dev
```

O site sobe em `http://localhost:5173`.

## Scripts

| Comando           | Descrição                                   |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento                 |
| `npm run build`   | Checagem de tipos (`tsc`) e build de produção |
| `npm run preview` | Serve o build de produção localmente        |
| `npm run lint`    | Roda o ESLint                               |

## Personalização

| O que alterar                                   | Onde                                                        |
| ----------------------------------------------- | ----------------------------------------------------------- |
| Textos, contatos, CRP, WhatsApp, links, imagens | `src/constants.ts`                                          |
| Paleta de cores, fontes e raios                 | `PALETTE`, `FONTS` e `RADII` em `src/constants.ts`          |
| Estilos globais e layout                        | `src/styles/global.css`                                     |
| Tema dos componentes MUI                        | `src/theme/index.ts`                                        |
| Fotos                                           | `public/images/` (ver abaixo)                               |
| Título e meta tags (SEO)                        | `index.html`                                                |

### Fotos

Coloque as imagens em `public/images/` com os nomes abaixo (proporção vertical 4:5; PNG/WebP com fundo transparente ficam sobre o degradê da moldura):

- `milena-hero.webp`: foto principal (Hero)
- `milena-sobre.webp`: foto da seção "Sobre"

Para usar outros nomes ou formatos, ajuste o objeto `IMAGES` em `src/constants.ts`. Se o arquivo não existir, o site exibe um placeholder no lugar.

### WhatsApp

O número fica em `SITE.whatsapp`, no formato internacional, somente dígitos (`55` + DDD + número). O número exibido no contato e os links `wa.me` são gerados a partir dele.

## Estrutura do projeto

```
src/
├── components/
│   ├── layout/      # Header, Footer, menu mobile, botão flutuante de WhatsApp
│   ├── sections/    # Hero, About, Services, HowItWorks, Testimonials, Faq, Contact
│   ├── contact/     # Formulário, campos, dados de contato e mapa
│   └── ui/          # Blocos reutilizáveis (Section, Card, Photo, Reveal, ...)
├── constants.ts     # Textos, dados do site, paleta e configurações
├── hooks/           # Lógica reutilizável (formulário, animação, menu)
├── schemas/         # Validação com Zod
├── utils/           # Máscara de telefone, links, helpers de texto
├── theme/           # Tema MUI e variáveis CSS geradas a partir da paleta
├── providers/       # Providers globais (tema, CSS base)
├── styles/          # CSS global
└── types.ts
```

Os componentes só compõem outros componentes e leem `constants.ts`; estilos ficam em `global.css` e regras de negócio em `hooks/`, `schemas/` e `utils/`.

## Observações antes de publicar

- Substitua todos os dados fictícios (CRP, contatos, endereço, valores, formação e números como "sessões realizadas").
- Depoimentos em publicidade de psicólogos podem ter restrições do Conselho Federal de Psicologia. Confirme as normas vigentes; para remover a seção, tire `<Testimonials />` de `src/App.tsx` e o link correspondente em `NAV_LINKS`.
- O mapa usa o embed do Google Maps a partir do endereço em `SITE.address`, sem chave de API. Confira se aponta para o local correto.
- Ajuste `<title>` e meta tags em `index.html` para o domínio e o nome reais.

## Deploy

O resultado de `npm run build` é uma pasta `dist/` estática, que pode ser publicada em qualquer hospedagem de arquivos estáticos (Vercel, Netlify, GitHub Pages, Cloudflare Pages etc.).
