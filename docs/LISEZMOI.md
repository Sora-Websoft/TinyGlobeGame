# Tiny Globe : version à installer sur téléphone

Ce dossier `docs` contient le jeu complet, prêt à être mis en ligne avec GitHub Pages.
Une fois en ligne, il s'installe sur un téléphone comme une application (icône, plein écran, jeu sans connexion).

## Mettre en ligne (une seule fois)

1. Sur github.com, crée un dépôt, par exemple `tinyglobe` (public : GitHub Pages est gratuit pour les dépôts publics).
2. Dans `D:\GIT\TinyGlobeGame`, ouvre un terminal et tape :

   ```
   git init
   git add docs
   git commit -m "Tiny Globe"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/tinyglobe.git
   git push -u origin main
   ```

   Seul le dossier `docs` est envoyé : le dossier `sources` (les images d'origine, lourdes) reste sur ton ordinateur.
   Pour que Git l'ignore aussi plus tard, le fichier `.gitignore` à côté de `docs` contient déjà la ligne `sources/`.

3. Sur la page du dépôt : **Settings → Pages**. Dans « Build and deployment », choisis
   **Source : Deploy from a branch**, puis **Branch : main** et le dossier **/docs**. Clique sur **Save**.
4. Une ou deux minutes plus tard, le jeu est en ligne à l'adresse
   `https://TON-PSEUDO.github.io/tinyglobe/` (elle s'affiche en haut de la page Settings → Pages).

## Installer sur un téléphone

- **iPhone** : ouvrir le lien dans **Safari** → bouton **Partager** → **Sur l'écran d'accueil**.
- **Android** : ouvrir le lien dans **Chrome** → **Installer l'application** (ou menu ⋮ → **Ajouter à l'écran d'accueil**).

Au premier lancement, tout le jeu est gardé sur le téléphone : ensuite il marche même sans connexion.
La partie est sauvegardée sur chaque téléphone.

## Publier une nouvelle version

Remplace le contenu de `docs` par la nouvelle version, puis :

```
git add docs
git commit -m "Nouvelle version"
git push
```

Les téléphones la récupèrent tout seuls au lancement suivant (ou au deuxième lancement s'ils étaient hors ligne).

## Bouton DEV

Il est caché dans cette version. Pour le retrouver, ajoute `#dev` à la fin du lien :
`https://TON-PSEUDO.github.io/tinyglobe/#dev`
