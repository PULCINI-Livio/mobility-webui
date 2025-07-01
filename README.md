# Guide

Cloner le dépôt, placez-vous ensuite dans le dossier ```mobility-map```.

## Installer l'application
Si vous possédez ou que vous avez généré un fichier de type ```mobility-map Setup 0.0.0.exe```, il vous suffit de l'exécuter pour lancer le processus d'installation, vous pourrez ensuite lancer l'application comme n'importe quelle application présente sur votre bureau.

## Lancer l'application en mode développement (React uniquement)
Cette section explique comment exécuter l'application React seule, sans Electron, dans un navigateur web.

### Prérequis
- Node.js (version 18 ou plus récente)

- Un terminal (cmd, PowerShell, Terminal macOS, etc.)

- Accès à Internet (pour l'installation des dépendances)

### Étapes
Ouvrir un terminal et naviguer jusqu'au dossier du projet :

```cd chemin/vers/votre/projet/mobility-map```

Installer les dépendances :

```npm install```

Démarrer le serveur de développement avec Vite :

```npm run dev```

L'application sera disponible à l'adresse http://localhost:5173 dans votre navigateur.


## Lancer l'application avec Electron (version desktop en développement)
Cette section permet de lancer l'application React packagée dans une fenêtre Electron, pour simuler l'exécution bureau.

### Étapes
Compiler l'application React avec Vite :

```npm run build```

Cela génère un dossier dist/ contenant l'application optimisée.

Lancer Electron :

```npm run electron```

Une fenêtre Electron s'ouvrira avec le rendu de l'application.

### Empaqueter l'application (version distribuable)
Cette étape permet de générer un exécutable .exe (sous Windows) ou .app / .dmg (sous macOS).

### Remarques
Il est impossible de générer un .app ou .dmg pour macOS depuis un système Windows.

Pour cela, utiliser un Mac ou un service comme GitHub Actions avec macOS runner.

### Étapes
Générer le build de production :

```npm run dist```

Un dossier dist/ sera généré, contenant le fichier exécutable :

Windows : fichier .exe

macOS : fichier .app ou .dmg

Ce fichier peut être distribué à des utilisateurs finaux sans qu'ils aient besoin de Node.js.

### Dépannage
Si la fenêtre Electron est vide ou blanche :

Vérifier que le fichier vite.config.js contient :

```base: './'```

Pour afficher la console de débogage dans la fenêtre Electron :

Appuyer sur ```Ctrl + Shift + I``` dans la fenêtre

Ou ajouter cette ligne dans le fichier main.js ou main.cjs :
 
```win.webContents.openDevTools();```

# Modification du code

Le projet est codé principalement en javascript avec le framework React. 

Pour en savoir plus sur React, cliquez [ici](https://react.dev).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
