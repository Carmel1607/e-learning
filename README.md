#E-Learning - Plateforme d'Apprentissage en Ligne

Coursea est une application web moderne de e-learning conçue pour offrir une expérience d'apprentissage immersive et intuitive. Ce projet a été réalisé dans le cadre d'un test technique, respectant une maquette précise et intégrant des fonctionnalités avancées comme la simulation de doublage audio.

## 🚀 Fonctionnalités Principales

### 👤 Espace Utilisateur
- **Authentification complète** : Pages de connexion et d'inscription avec un design moderne.
- **Tableau de bord (Dashboard)** : Vue d'ensemble des cours suivis, des mentors et des recommandations.
- **Exploration des cours** : Catalogue complet avec système de filtrage par catégorie et tri.
- **Détails du cours** : Page immersive incluant :
    - Lecteur vidéo haute qualité.
    - **Simulation de Doublage** : Possibilité de basculer entre la piste audio originale (EN) et une piste doublée (FR) en un clic.
    - Liste des modules interactive.
    - Informations détaillées sur le mentor et points clés du cours.

### 🛠️ Espace Administration
- **Dashboard Admin** : Statistiques clés (total cours, étudiants, revenus) et gestion de la liste des cours.
- **Création de cours** : Formulaire ergonomique permettant d'ajouter :
    - Informations générales (titre, auteur, catégorie, description).
    - Gestion dynamique des modules (titre et durée).
    - Gestion des médias (image de couverture, URL vidéo, fichiers audio originaux et doublés).

### 🔐 Gestion des Rôles
- Accès différencié selon le rôle (`user` ou `admin`).
- Menu latéral adaptatif affichant les options d'administration uniquement pour les profils autorisés.

## 🛠️ Stack Technique

- **Frontend** : React.js (JSX)
- **Styling** : Tailwind CSS (v4)
- **Navigation** : React Router Dom
- **Icônes** : Lucide React
- **Animations** : Motion (framer-motion)
- **Typographie** : Plus Jakarta Sans

## 📦 Installation et Lancement

1. **Cloner le projet**
   ```bash
   git clone <url-du-depot>
   cd <nom-du-projet>
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'application en mode développement**
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:3000`.

## 📂 Structure du Projet

```text
src/
├── components/     # Composants réutilisables (Sidebar, Layout, Cards, Modals)
├── data/           # Données statiques (mockData.js)
├── pages/          # Pages de l'application (Login, Dashboard, Admin, etc.)
├── App.jsx         # Configuration des routes
├── index.css       # Configuration Tailwind et polices
└── main.jsx        # Point d'entrée de l'application
```

## 💡 Simulation de Doublage

La fonctionnalité de doublage est implémentée de manière simulée dans la page `CourseDetail.jsx`. Elle permet de démontrer comment une plateforme pourrait gérer plusieurs pistes audio pour une même vidéo. 
- **Bouton "Activer le doublage"** : Bascule l'état de l'interface et simule le changement de source audio tout en maintenant la synchronisation visuelle.

## 📝 Configuration des Rôles

Pour tester les deux interfaces (Utilisateur et Admin), vous pouvez modifier manuellement le rôle dans le fichier :
`src/data/mockData.js`

```javascript
export const user = {
  // ...
  role: "admin" // Changez en "user" pour voir la vue étudiant
};
```

# La partie backend n'est pas faite dsl
J'ai mis plus de temps sur le design et le front
Certaines fonctionnalités du front egalement n'ont pas encore été faites
