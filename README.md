# UFF CC Site

Website oficial da UFF Consulting.

## Sobre o Projeto

Este repositório contém o desenvolvimento do novo website da UFF Consulting. O projeto foi estruturado utilizando tecnologias modernas do ecossistema React para garantir:

* Escalabilidade
* Componentização
* Facilidade de manutenção
* Boa experiência de desenvolvimento
* Performance
* Padronização entre os desenvolvedores

---

# Stack do Projeto

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* React Router DOM
* Lucide React

## Ferramentas de Desenvolvimento

* ESLint
* Prettier
* Git + GitHub
* npm

---

# Pré-requisitos

Antes de iniciar o projeto, instale:

* Node.js (recomendado: versão LTS)
* npm
* Git
* VSCode

## Extensões recomendadas do VSCode

* ES7+ React/Redux
* Tailwind CSS IntelliSense
* Prettier
* ESLint
* Error Lens

---

# Clonando o Projeto

```bash
git clone https://github.com/Tech-and-Analytics/uff-cc-site.git
```

Entre na pasta:

```bash
cd uff-cc-site
```

---

# Instalação do Projeto

Após clonar o repositório, rode:

```bash
npm install
```

Esse comando irá instalar todas as dependências já configuradas no projeto.

⚠️ Não é necessário reinstalar Vite, Tailwind, shadcn/ui ou outras bibliotecas manualmente.

---

# Executando o Projeto

Para iniciar o ambiente de desenvolvimento:

```bash
npm run dev
```

O projeto ficará disponível em:

```bash
http://localhost:5173
```

---

# Scripts Disponíveis

## Rodar ambiente de desenvolvimento

```bash
npm run dev
```

## Gerar build de produção

```bash
npm run build
```

## Visualizar build localmente

```bash
npm run preview
```

## Executar lint

```bash
npm run lint
```

---

# Estrutura de Pastas

```bash
src/
│
├── assets/          # Imagens, ícones e arquivos estáticos
├── components/      # Componentes reutilizáveis
├── pages/           # Páginas da aplicação
├── layouts/         # Estruturas de layout
├── routes/          # Configuração de rotas
├── services/        # Comunicação com APIs
├── hooks/           # Custom hooks
├── contexts/        # Context API
├── providers/       # Providers globais
├── lib/             # Configurações e utilitários
├── utils/           # Funções auxiliares
├── styles/          # Estilos globais
└── main.tsx         # Entrada da aplicação
```

---

# Padrões do Projeto

## Componentização

* Componentes devem ser pequenos e reutilizáveis
* Evitar lógica excessiva dentro da interface
* Separar responsabilidade entre UI e regra de negócio

## Nomeação

### Componentes

Utilizar PascalCase:

```bash
HeroSection.tsx
Navbar.tsx
Footer.tsx
```

### Hooks

Sempre iniciar com `use`:

```bash
useAuth.ts
useTheme.ts
```

### Funções e variáveis

Utilizar camelCase:

```ts
const userName = 'Marcos'

function handleLogin() {}
```

---

# Convenções de Commit

Padrão recomendado:

```bash
feat: adiciona seção hero
fix: corrige responsividade da navbar
style: ajusta espaçamentos
refactor: reorganiza componente card
```

---

# Fluxo de Trabalho com Git

## 1. Atualizar branch principal

```bash
git checkout main
git pull origin main
```

## 2. Criar uma nova branch

```bash
git checkout -b feature/nome-da-feature
```

Exemplo:

```bash
git checkout -b feature/navbar
```

---

## 3. Fazer alterações e commits

```bash
git add .
git commit -m "feat: adiciona navbar"
```

---

## 4. Enviar branch para o GitHub

```bash
git push origin feature/navbar
```

---

## 5. Abrir Pull Request

Após finalizar:

* Abrir Pull Request
* Solicitar revisão
* Aguardar aprovação antes do merge

---

# Responsividade

O projeto deve funcionar corretamente em:

* Desktop
* Tablet
* Mobile

Sempre testar diferentes resoluções antes de subir alterações.

---

# Padronização Visual

## Tailwind CSS

Utilizar preferencialmente classes utilitárias do Tailwind.

Evitar CSS isolado sem necessidade.

## shadcn/ui

Sempre priorizar componentes do shadcn/ui quando fizer sentido.

Exemplos:

* Button
* Card
* Dialog
* Sheet
* Input

---

# Organização das Features

Cada feature deve buscar:

* Alta coesão
* Baixo acoplamento
* Facilidade de manutenção
* Reutilização de componentes

---

# Deploy

O deploy do projeto será realizado utilizando a Vercel.

## Build automática

Toda alteração aprovada na branch principal poderá gerar uma nova versão de deploy.

---

# Boas Práticas

* Manter código limpo e legível
* Evitar componentes muito grandes
* Remover códigos não utilizados
* Evitar duplicação de lógica
* Sempre revisar antes de subir
* Priorizar acessibilidade
* Priorizar performance

---

# Dúvidas

Em caso de dúvidas:

* Consultar a documentação das tecnologias
* Perguntar no grupo do projeto
* Abrir discussão no GitHub

---

# Links Úteis

## React

[https://react.dev/](https://react.dev/)

## Vite

[https://vitejs.dev/](https://vitejs.dev/)

## Tailwind CSS

[https://tailwindcss.com/](https://tailwindcss.com/)

## shadcn/ui

[https://ui.shadcn.com/](https://ui.shadcn.com/)

## TypeScript

[https://www.typescriptlang.org/](https://www.typescriptlang.org/)

## React Router DOM

[https://reactrouter.com/](https://reactrouter.com/)

---

# Objetivo do Projeto

Construir uma plataforma moderna, profissional e escalável que represente a UFF Consulting e ofereça uma excelente experiência para os usuários.
