# Dashboard de Gestão

Este projeto é um **Dashboard de Gestão** desenvolvido em **React** com integração de gráficos, filtros dinâmicos e autenticação. Ele permite visualizar e analisar métricas como vendas, usuários ativos e lucro líquido.

## 🚀 Tecnologias Utilizadas

- **React** ⚛️
- **Material UI (MUI)** 🎨
- **Tailwind CSS** 💅
- **Recharts** 📊
- **Bootstrap (Angular)** 📦
- **LocalStorage** 🔐
- **Fake Store API** 🌐
- **Zustand** 📌
- **TypeScript** 🛠️
- **Jest-Dom (Testes Unitários)** 🧪
- **Jenkins (CI/CD)** ⚙️
- **GitHub Actions** 🚀

## 📂 Estrutura do Projeto
```
📦 dashboard
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 SettingsModal.tsx
 ┃ ┃ ┣ 📜 ProductList.tsx
 ┃ ┃ ┣ 📂 charts
 ┃ ┃ ┃ ┣ 📜 ProfitChart.tsx
 ┃ ┃ ┃ ┣ 📜 SalesChart.tsx
 ┃ ┃ ┃ ┣ 📜 UsersChart.tsx
 ┃ ┃ ┣ 📂 filters
 ┃ ┃ ┃ ┣ 📜 DateFilter.tsx
 ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📜 useProducts.tsx
 ┃ ┣ 📂 models
 ┃ ┃ ┣ 📜 Products.ts
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Dashboard.tsx
 ┃ ┃ ┣ 📜 ProductList.tsx
 ┃ ┣ 📂 services
 ┃ ┃ ┣ 📜 apiService.ts
 ┃ ┣ 📂 styles
 ┃ ┃ ┣ 📜 global.css
 ┃ ┣ 📜 App.tsx
 ┃ ┣ 📜 index.tsx
 ┣ 📜 package.json
 ┣ 📜 README.md
```

## ⚙️ Instalação e Configuração

### 1️⃣ Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/dashboard.git
cd dashboard
```

### 2️⃣ Instalar Dependências
```bash
yarn install
# ou
npm install
```

### 3️⃣ Executar o Projeto
```bash
yarn dev
# ou
npm run dev
```
Acesse **http://localhost:3000/** no navegador.

## 🔑 Funcionalidades Principais

✔️ **Autenticação de Usuário** (Login e Registro) 🔐
✔️ **Gráficos interativos** com Recharts 📊
✔️ **Filtros Dinâmicos** (Últimos 7 dias, Mês Atual, Últimos 6 meses) 📅
✔️ **Salvamento de Preferências no LocalStorage** 💾
✔️ **Responsividade Completa** 📱💻
✔️ **Integração com API Fake Store** 📡
✔️ **Testes Unitários com Jest-Dom** 🧪
✔️ **Deploy Automatizado com CI/CD (Jenkins & GitHub Actions)** 🚀

## 📊 Gráficos Implementados
- **Lucro Líquido** 💰
- **Usuários Ativos** 👥
- **Vendas Mensais** 📈

## 📝 Como Contribuir
1. **Fork** o repositório 🍴
2. **Crie uma branch** (`git checkout -b feature/nova-funcionalidade`) 🌱
3. **Commit suas alterações** (`git commit -m 'Adiciona nova funcionalidade'`) 💡
4. **Envie um Pull Request** 📩

📌 **Desenvolvido por [Gustavo Caramelo]** 🚀

