# 🎮 Tic-Tac-Redux

A browser-based Tic-Tac-Toe game built with React and Redux. This project demonstrates state management using Redux and modular component architecture in a simple game environment.

![React](https://img.shields.io/badge/React-18-blue) ![Redux](https://img.shields.io/badge/Redux-Toolkit-purple) ![Status](https://img.shields.io/badge/Status-Active-brightgreen)

## 🚀 Features

- Classic Tic-Tac-Toe gameplay
- State management with Redux
- Modular React components
- Game reset and replay functionality
- Visual game board with player turn indicators
- Responsive layout for desktop and mobile

## 📦 Project Structure

```
tic-tac-redux/
├── app/                 # Main application logic
│   ├── main.jsx         # Entry point for React app
│   └── components/      # React components
├── styles/              # CSS stylesheets
├── images/              # Game icons and assets
├── test/                # Test files
├── index.html           # Main HTML file
├── config.js            # JSPM configuration
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## 🛠️ Installation

1. Clone the repository:

   ```
   git clone https://github.com/SLS-BLN/tic-tac-redux.git
   cd tic-tac-redux
   ```

2. Install global dependencies:

   ```
   npm install -g n
   n latest
   npm install -g jspm jspm-server babel babel-cli babel-node \
     babel-preset-es2015 babel-preset-stage-0 babel-preset-react
   ```

3. Install project dependencies:

   ```
   npm install
   jspm install
   ```

4. Start the development server:

   ```
   jspm-server
   ```

5. Open the app in your browser:
   ```
   http://localhost:8080
   ```

## 🌐 API

No external API is used. All game logic is handled locally via Redux state and React components.

## 🐞 Known Issues / TODOs

- Add AI opponent mode
- Improve mobile responsiveness
- Add sound effects and animations
- Implement score tracking across games
