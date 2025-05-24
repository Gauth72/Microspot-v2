# MicroSpot - Marketplace de Micro-Emplacements

MicroSpot est une plateforme de mise en relation entre propriétaires de petites parcelles de terrain et professionnels recherchant des emplacements pour leurs activités commerciales (distributeurs automatiques, kiosques à pizza, micro-boutiques, etc.).

## Fonctionnalités principales

- Création et gestion d'annonces de parcelles
- Recherche avancée avec filtres (surface, localisation, type d'emplacement)
- Système de messagerie entre utilisateurs
- Gestion des profils utilisateurs (propriétaires et professionnels)
- Interface responsive et optimisée SEO

## Technologies utilisées

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma (ORM)
- NextAuth.js (Authentication)
- PostgreSQL

## Installation

```bash
# Installation des dépendances
npm install

# Configuration de la base de données
npx prisma generate
npx prisma db push

# Lancement du serveur de développement
npm run dev
```

## Variables d'environnement

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="votre-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## Structure du projet

```
src/
├── app/              # Routes et pages Next.js
├── components/       # Composants React réutilisables
├── lib/             # Utilitaires et configurations
├── prisma/          # Schéma et migrations de base de données
└── types/           # Types TypeScript
```
