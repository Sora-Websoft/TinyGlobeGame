# Tiny Globe : version à installer sur téléphone

Ce dossier `docs` contient le jeu complet, prêt à être mis en ligne avec GitHub Pages.
Une fois en ligne, il s'installe sur un téléphone comme une application (icône, plein écran, jeu sans connexion).

## Mettre en ligne (une seule fois)

Le dépôt est `D:\GIT\TinyGlobeGame\TinyGlobeGame`, et le jeu est dans son dossier `docs`.

1. **Valider les fichiers**
   - Avec GitHub Desktop : les fichiers `docs/…` et `.gitignore` apparaissent dans « Changes ». Écris un résumé (par exemple « Tiny Globe ») et clique sur **Commit to main**.
   - En ligne de commande, depuis `D:\GIT\TinyGlobeGame\TinyGlobeGame` : `git add .` puis `git commit -m "Tiny Globe"`.
2. **Publier le dépôt**
   - Avec GitHub Desktop : clique sur **Publish repository**. Décoche « Keep this code private » : GitHub Pages est gratuit pour les dépôts publics.
   - En ligne de commande : crée un dépôt vide sur github.com, puis :
     ```
     git remote add origin https://github.com/TON-PSEUDO/TinyGlobeGame.git
     git push -u origin main
     ```
3. **Activer Pages** : sur la page du dépôt, ouvre **Settings → Pages**. Dans « Build and deployment », choisis :
   - **Source : Deploy from a branch** ;
   - **Branch : main** et le dossier **/docs** ;
   - puis clique sur **Save**.
4. Une ou deux minutes plus tard, le jeu est en ligne à l'adresse `https://TON-PSEUDO.github.io/TinyGlobeGame/`. Elle s'affiche en haut de **Settings → Pages**.

Les images d'origine (dossier `D:\GIT\TinyGlobeGame\sources`) sont en dehors du dépôt : elles ne partent pas sur GitHub.

## Installer sur un téléphone

- **iPhone** : ouvrir le lien dans **Safari** → bouton **Partager** → **Sur l'écran d'accueil**.
- **Android** : ouvrir le lien dans **Chrome** → **Installer l'application** (ou menu ⋮ → **Ajouter à l'écran d'accueil**).

Au premier lancement, tout le jeu est gardé sur le téléphone : ensuite, il marche même sans connexion.
La partie est sauvegardée sur chaque téléphone.

## Publier une nouvelle version

Remplace le contenu de `docs` par la nouvelle version, puis fais **Commit** et **Push origin** (ou `git add docs`, `git commit`, `git push`).
Les téléphones la récupèrent tout seuls au lancement suivant.

## Bouton DEV

Il est caché dans cette version. Pour le retrouver, ajoute `#dev` à la fin du lien :
`https://TON-PSEUDO.github.io/TinyGlobeGame/#dev`
