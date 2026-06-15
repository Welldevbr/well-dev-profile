# 🚀 Well Dev Profile

Bem-vindo ao meu portfólio pessoal! Este projeto é uma aplicação web moderna desenvolvida com as tecnologias mais atuais do ecossistema React.

## 📋 Sobre

**Well Dev Profile** é um portfólio dinâmico e responsivo que showcaseia meus projetos, habilidades e experiência como desenvolvedor. O projeto foi construído com foco em performance, boas práticas e uma excelente experiência do usuário.

## 🛠️ Stack Tecnológico

- **React** - Biblioteca JavaScript para construção de interfaces de usuário
- **Next.js** - Framework React com suporte a SSR e geração estática
- **TypeScript** - Tipagem estática para JavaScript, garantindo maior segurança e qualidade do código
- **CSS/Tailwind** - Estilização moderna e responsiva

## ✨ Funcionalidades Principais

- 📱 **Design Responsivo** - Totalmente adaptado para dispositivos mobile, tablet e desktop
- 🎨 **Interface Moderna** - UI/UX intuitiva e atrativa
- 📊 **Repositórios em Destaque** - Integração com a API pública do GitHub para exibir meus repositórios em tempo real
- 🖼️ **Galeria de Imagens** - Fotos armazenadas no Google Drive, carregadas dinamicamente
- ⚡ **Performance Otimizada** - Carregamento rápido e eficiente
- 🔄 **Dados Dinâmicos** - Conteúdo atualizado em tempo real através de APIs

## 🔌 Integrações

### GitHub API
O portfólio consome a [API pública do GitHub](https://docs.github.com/en/rest) para:
- Buscar repositórios em destaque
- Exibir informações detalhadas dos projetos
- Mostrar estatísticas e atividades

### Google Drive
Integração com Google Drive para:
- Armazenar e servir imagens do portfólio
- Atualizar galeria de fotos dinamicamente
- Otimização de armazenamento em nuvem

## 🚀 Como Começar

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Welldevbr/well-dev-profile.git

# Acesse o diretório
cd well-dev-profile

# Instale as dependências
npm install
# ou
yarn install
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# GitHub API (opcional, para limite maior de requisições)
NEXT_PUBLIC_GITHUB_TOKEN=seu_token_github

# Google Drive (configurar conforme necessário)
NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID=seu_folder_id
```

### Executando Localmente

```bash
# Desenvolvimento
npm run dev
# ou
yarn dev

# Produção
npm run build
npm run start
```

Acesse `http://localhost:3000` no seu navegador.

## 📁 Estrutura do Projeto

```
well-dev-profile/
├── src/
│   ├── components/     # Componentes React reutilizáveis
│   ├── pages/         # Páginas Next.js
│   ├── styles/        # Estilos globais
│   ├── services/      # Serviços e integrações com APIs
│   ├── types/         # Tipos TypeScript
│   └── utils/         # Funções utilitárias
├── public/            # Arquivos estáticos
├── .env.local         # Variáveis de ambiente
├── next.config.js     # Configuração do Next.js
├── tsconfig.json      # Configuração do TypeScript
└── package.json       # Dependências do projeto
```

## 🎯 Recursos Principais

### 1. Galeria de Projetos
Exibe repositórios GitHub em destaque com:
- Nome e descrição
- Linguagens utilizadas
- Links diretos para o repositório
- Estatísticas (stars, forks)

### 2. Galeria de Imagens
Imagens armazenadas no Google Drive:
- Carregamento dinâmico
- Otimizado para web
- Galeria responsiva

### 3. Seção Sobre
Apresentação pessoal com:
- Informações profissionais
- Skills e tecnologias
- Links para contato

## 🌐 Deploy

Este projeto pode ser facilmente deployado em plataformas como:
- [Vercel](https://vercel.com) (recomendado para Next.js)
- [Netlify](https://www.netlify.com)
- [GitHub Pages](https://pages.github.com)

### Deploy na Vercel

```bash
npm install -g vercel
vercel
```

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📧 Contato

- **GitHub**: [@Welldevbr](https://github.com/Welldevbr)
- **Email**: Entre em contato através do portfólio

---

Feito com ❤️ por [Welldevbr](https://github.com/Welldevbr)
