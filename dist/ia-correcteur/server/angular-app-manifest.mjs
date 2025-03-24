
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/connexion"
  },
  {
    "renderMode": 2,
    "route": "/inscription"
  },
  {
    "renderMode": 2,
    "route": "/pdashboard"
  },
  {
    "renderMode": 2,
    "route": "/mesetudiant"
  },
  {
    "renderMode": 2,
    "route": "/creerexamen"
  },
  {
    "renderMode": 2,
    "route": "/revoircorrect"
  },
  {
    "renderMode": 2,
    "route": "/examenscreer"
  },
  {
    "renderMode": 2,
    "route": "/edashboard"
  },
  {
    "renderMode": 2,
    "route": "/eexamens"
  },
  {
    "renderMode": 2,
    "route": "/examsav"
  },
  {
    "renderMode": 2,
    "route": "/depot-exams"
  },
  {
    "renderMode": 2,
    "route": "/resultats"
  },
  {
    "renderMode": 2,
    "route": "/details"
  },
  {
    "renderMode": 2,
    "redirectTo": "/connexion",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28402, hash: '64840a995edb5baa40f225716fadb6d61dc257adae624a0a6ae547d4e247b767', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17140, hash: '3c50f43ab9b2951b32e0532a47319689e3dbc34e713746c920ec6eb7a8ad918b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 40461, hash: '748482179edafb79ba7ab99d0d65d3891254c90d9969d499a5f879ea2e8a8de8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'connexion/index.html': {size: 39547, hash: '4a636b82a1e653fe5209dc91540c3f2b800ff2f982b78828a7fac21612f3d37a', text: () => import('./assets-chunks/connexion_index_html.mjs').then(m => m.default)},
    'creerexamen/index.html': {size: 39547, hash: '4a636b82a1e653fe5209dc91540c3f2b800ff2f982b78828a7fac21612f3d37a', text: () => import('./assets-chunks/creerexamen_index_html.mjs').then(m => m.default)},
    'mesetudiant/index.html': {size: 39547, hash: '4a636b82a1e653fe5209dc91540c3f2b800ff2f982b78828a7fac21612f3d37a', text: () => import('./assets-chunks/mesetudiant_index_html.mjs').then(m => m.default)},
    'inscription/index.html': {size: 38130, hash: '896c4436d62bca9f19876b93492d07f99656cb9e42aff40346f1db43977b1174', text: () => import('./assets-chunks/inscription_index_html.mjs').then(m => m.default)},
    'revoircorrect/index.html': {size: 39547, hash: '4a636b82a1e653fe5209dc91540c3f2b800ff2f982b78828a7fac21612f3d37a', text: () => import('./assets-chunks/revoircorrect_index_html.mjs').then(m => m.default)},
    'edashboard/index.html': {size: 39547, hash: '4a636b82a1e653fe5209dc91540c3f2b800ff2f982b78828a7fac21612f3d37a', text: () => import('./assets-chunks/edashboard_index_html.mjs').then(m => m.default)},
    'examenscreer/index.html': {size: 39547, hash: '4a636b82a1e653fe5209dc91540c3f2b800ff2f982b78828a7fac21612f3d37a', text: () => import('./assets-chunks/examenscreer_index_html.mjs').then(m => m.default)},
    'eexamens/index.html': {size: 39547, hash: '4a636b82a1e653fe5209dc91540c3f2b800ff2f982b78828a7fac21612f3d37a', text: () => import('./assets-chunks/eexamens_index_html.mjs').then(m => m.default)},
    'depot-exams/index.html': {size: 39547, hash: '4a636b82a1e653fe5209dc91540c3f2b800ff2f982b78828a7fac21612f3d37a', text: () => import('./assets-chunks/depot-exams_index_html.mjs').then(m => m.default)},
    'pdashboard/index.html': {size: 39547, hash: '4a636b82a1e653fe5209dc91540c3f2b800ff2f982b78828a7fac21612f3d37a', text: () => import('./assets-chunks/pdashboard_index_html.mjs').then(m => m.default)},
    'examsav/index.html': {size: 39547, hash: '4a636b82a1e653fe5209dc91540c3f2b800ff2f982b78828a7fac21612f3d37a', text: () => import('./assets-chunks/examsav_index_html.mjs').then(m => m.default)},
    'resultats/index.html': {size: 39547, hash: '4a636b82a1e653fe5209dc91540c3f2b800ff2f982b78828a7fac21612f3d37a', text: () => import('./assets-chunks/resultats_index_html.mjs').then(m => m.default)},
    'details/index.html': {size: 39547, hash: '4a636b82a1e653fe5209dc91540c3f2b800ff2f982b78828a7fac21612f3d37a', text: () => import('./assets-chunks/details_index_html.mjs').then(m => m.default)},
    'styles-DVGJGP36.css': {size: 28541, hash: 't8lYO6znN/U', text: () => import('./assets-chunks/styles-DVGJGP36_css.mjs').then(m => m.default)}
  },
};
