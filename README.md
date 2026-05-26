# PoE2 Build Oracle - Class Randomizer

Um sorteador de builds para Path of Exile 2 com visual premium e informações detalhadas das ascensões.

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar o ambiente e rodar o site no seu computador:

### 1. Pré-requisitos
Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em sua máquina. Você pode baixar em [nodejs.org](https://nodejs.org/).

### 2. Clonar o Repositório
Abra o seu terminal e rode:
```bash
git clone https://github.com/Hauszler/poe2_roullete.git
cd poe2_roullete
```

### 3. Instalar Dependências
Dentro da pasta do projeto, instale os pacotes necessários:
```bash
npm install
```

### 4. Rodar o Servidor de Desenvolvimento
Inicie o projeto localmente:
```bash
npm run dev
```
O terminal exibirá um link (geralmente `http://localhost:5173`). Abra-o no seu navegador para ver o site funcionando!

### 5. Gerar Build para Produção
Se quiser gerar os arquivos otimizados para subir em um servidor:
```bash
npm run build
```
Os arquivos serão gerados na pasta `dist/`.

## ✨ Funcionalidades
- **Sorteio Aleatório**: Seleciona uma das 8 classes lançadas e sua respectiva ascensão.
- **Informações da Wiki**: Exibe detalhes específicos de cada ascensão (ex: mecânicas de Blood Mage, Witchhunter, etc).
- **Visual PoE2**: Estética sombria com texturas de couro, fontes góticas e cores douradas.
- **Responsivo**: Funciona em diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Vanilla CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Google Fonts (Cinzel & Spectral)](https://fonts.google.com/)

---
Criado para facilitar a escolha de builds no Path of Exile 2!
