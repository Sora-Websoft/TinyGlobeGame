// Tiny Globe : mode hors ligne.
// Au premier lancement, tout le jeu est mis de côté sur le téléphone ; ensuite il marche sans connexion.
// La page est toujours redemandée en ligne d'abord : quand une nouvelle version est publiée, elle arrive au lancement suivant.
const VERSION = 'tg-542395038b';
const FILES = [
 "./",
 "index.html",
 "manifest.webmanifest",
 "assets/bg.jpg",
 "assets/icon-180.png",
 "assets/icon-192.png",
 "assets/icon-512.png",
 "assets/icon-64.png",
 "assets/icon-maskable.png",
 "assets/icon.png",
 "assets/logo.png",
 "assets/music_desert.mp3",
 "assets/music_intro.mp3",
 "assets/music_sea.mp3",
 "assets/music_snow.mp3",
 "assets/plaque.jpg",
 "assets/sprites/d_cactus.webp",
 "assets/sprites/d_chameau.webp",
 "assets/sprites/d_chouette.webp",
 "assets/sprites/d_decor.webp",
 "assets/sprites/d_dromadaire.webp",
 "assets/sprites/d_fennec.webp",
 "assets/sprites/d_lanterne.webp",
 "assets/sprites/d_maison_terre.webp",
 "assets/sprites/d_mirage.webp",
 "assets/sprites/d_montgolfiere.webp",
 "assets/sprites/d_nomade.webp",
 "assets/sprites/d_oasis.webp",
 "assets/sprites/d_palmier.webp",
 "assets/sprites/d_pyramide.webp",
 "assets/sprites/d_scarabee.webp",
 "assets/sprites/d_souk.webp",
 "assets/sprites/d_tapis.webp",
 "assets/sprites/d_temple.webp",
 "assets/sprites/d_tente.webp",
 "assets/sprites/d_vent.webp",
 "assets/sprites/g_cadeau.webp",
 "assets/sprites/i_d_lanternes.webp",
 "assets/sprites/i_d_or.webp",
 "assets/sprites/i_d_sable.webp",
 "assets/sprites/i_d_voie_lactee.webp",
 "assets/sprites/i_m_bulles.webp",
 "assets/sprites/i_m_perles.webp",
 "assets/sprites/i_m_plancton.webp",
 "assets/sprites/i_m_rayons.webp",
 "assets/sprites/i_n_aurore.webp",
 "assets/sprites/i_n_feu.webp",
 "assets/sprites/i_n_neige.webp",
 "assets/sprites/i_n_or.webp",
 "assets/sprites/m_algues.webp",
 "assets/sprites/m_benitier.webp",
 "assets/sprites/m_bernard.webp",
 "assets/sprites/m_chateau.webp",
 "assets/sprites/m_cheminee.webp",
 "assets/sprites/m_coffre.webp",
 "assets/sprites/m_coquillage.webp",
 "assets/sprites/m_dauphin.webp",
 "assets/sprites/m_decor.webp",
 "assets/sprites/m_epave.webp",
 "assets/sprites/m_hippocampe.webp",
 "assets/sprites/m_meduse.webp",
 "assets/sprites/m_pieuvre.webp",
 "assets/sprites/m_plongeur.webp",
 "assets/sprites/m_poisson_bleu.webp",
 "assets/sprites/m_poisson_jaune.webp",
 "assets/sprites/m_poisson_lanterne.webp",
 "assets/sprites/m_poisson_lune.webp",
 "assets/sprites/m_raie.webp",
 "assets/sprites/m_recif.webp",
 "assets/sprites/m_sous_marin.webp",
 "assets/sprites/m_tortue.webp",
 "assets/sprites/n_bonhomme.webp",
 "assets/sprites/n_canadair.webp",
 "assets/sprites/n_chapelle.webp",
 "assets/sprites/n_decor.webp",
 "assets/sprites/n_etang.webp",
 "assets/sprites/n_grand_sapin.webp",
 "assets/sprites/n_habitant.webp",
 "assets/sprites/n_hibou.webp",
 "assets/sprites/n_igloo.webp",
 "assets/sprites/n_lampadaire.webp",
 "assets/sprites/n_lune.webp",
 "assets/sprites/n_maison.webp",
 "assets/sprites/n_maison_bleue.webp",
 "assets/sprites/n_marche.webp",
 "assets/sprites/n_nuage.webp",
 "assets/sprites/n_ours.webp",
 "assets/sprites/n_patineur.webp",
 "assets/sprites/n_pingouin.webp",
 "assets/sprites/n_renne.webp",
 "assets/sprites/n_sapin.webp",
 "assets/sprites/n_train_loco.webp",
 "assets/sprites/n_train_wagon.webp",
 "assets/sprites/n_traineau.webp",
 "assets/velvet.jpg",
 "assets/wood.jpg"
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== 'tg-fonts').map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET') return;
  // polices Google : gardées dès la première visite
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open('tg-fonts').then(c => c.match(req).then(hit => hit || fetch(req).then(r => { c.put(req, r.clone()); return r; }))));
    return;
  }
  if (url.origin !== location.origin) return;
  // la page : en ligne d'abord, sinon la copie
  if (req.mode === 'navigate' || url.pathname.endsWith('/index.html')) {
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(VERSION).then(c => c.put('index.html', cp)); return r; }).catch(() => caches.match('index.html')));
    return;
  }
  // images, musiques : la copie d'abord (instantané), sinon en ligne
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(r => { if (r.ok) { const cp = r.clone(); caches.open(VERSION).then(c => c.put(req, cp)); } return r; })));
});
