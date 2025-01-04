# CodeQuest Portfolio 🎮

![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-blue)
![License](https://img.shields.io/badge/License-MIT-green)

> Un portfolio interactif gamifié pour développeurs, transformant l'exploration de vos compétences en une aventure immersive.

![Portfolio Preview](https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=1170)

## ✨ Caractéristiques

- 🎮 **Interface Gamifiée**: Exploration interactive des compétences et projets
- 🌓 **Mode Sombre/Clair**: Thème adaptatif pour un confort visuel optimal
- ⚡ **Animations Fluides**: Transitions et effets visuels avec Framer Motion
- 📱 **Responsive Design**: Compatible avec tous les appareils
- 🔍 **SEO Optimisé**: Structure optimisée pour les moteurs de recherche

## 🚀 Technologies Utilisées

- **Frontend**: React, TypeScript, Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Effets Texte**: Typed.js
- **Build Tool**: Vite

## 🛠️ Installation

1. Clonez le repository
\`\`\`bash
git clone https://github.com/votre-username/codequest.git
\`\`\`

2. Installez les dépendances
\`\`\`bash
cd codequest
npm install
\`\`\`

3. Lancez le serveur de développement
\`\`\`bash
npm run dev
\`\`\`

## 📁 Structure du Projet

\`\`\`
codequest/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Introduction.tsx   # Section d'accueil
│   │   │   ├── Projects.tsx       # Projets réalisés
│   │   │   ├── Skills.tsx         # Compétences techniques
│   │   │   ├── Experience.tsx     # Parcours professionnel
│   │   │   └── Contact.tsx        # Formulaire de contact
│   │   ├── icons/
│   │   │   └── Logo.tsx           # Logo personnalisé
│   │   └── theme/
│   │       └── ThemeToggle.tsx    # Switch thème clair/sombre
│   ├── hooks/
│   │   └── useTheme.ts           # Hook pour la gestion du thème
│   ├── pages/
│   │   └── Home.tsx              # Page principale
│   └── types/
│       └── index.ts              # Types TypeScript
└── ...
\`\`\`

## 🎯 Sections Principales

### 1. Introduction
- Bio professionnelle animée
- Avatar personnalisé
- Téléchargement de CV
- Animation de texte dynamique

### 2. Projets
- Cartes de projets interactives
- Liens vers les démos et GitHub
- Tags des technologies utilisées
- Effets de survol élégants

### 3. Compétences
- Visualisation des compétences par catégorie
- Barres de progression animées
- Interface intuitive
- Mise à jour facile des compétences

### 4. Expérience
- Timeline professionnelle
- Parcours académique
- Réalisations clés
- Animations au défilement

### 5. Contact
- Formulaire de contact interactif
- Liens vers les réseaux sociaux
- Design moderne et épuré
- Validation des entrées

## 🔧 Personnalisation

1. **Informations Personnelles**
   - Modifiez \`src/components/sections/Introduction.tsx\` pour vos informations
   - Ajoutez votre photo dans la section Introduction

2. **Projets**
   - Mettez à jour le tableau \`projects\` dans \`src/components/sections/Projects.tsx\`
   - Ajoutez vos captures d'écran de projets

3. **Compétences**
   - Personnalisez les compétences dans \`src/components/sections/Skills.tsx\`
   - Ajustez les niveaux et catégories

4. **Expérience**
   - Modifiez \`experiences\` dans \`src/components/sections/Experience.tsx\`
   - Ajoutez votre parcours professionnel

## 📱 Responsive Design

- Mobile First Design
- Breakpoints optimisés
- Navigation adaptative
- Images responsives

## 🎨 Thèmes

- Mode clair/sombre automatique
- Couleurs personnalisables via Tailwind
- Transitions fluides
- Contraste optimal

## 📈 Performance

- Lazy loading des images
- Code splitting automatique
- Optimisation des assets
- Score Lighthouse optimisé

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (\`git checkout -b feature/amelioration\`)
3. Commit vos changements (\`git commit -m 'Ajout d'une fonctionnalité'\`)
4. Push sur la branche (\`git push origin feature/amelioration\`)
5. Ouvrir une Pull Request

## 📄 License

MIT © [Votre Nom]

---

Créé avec ❤️ par [Votre Nom]
