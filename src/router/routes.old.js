const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/splash',
    component: () => import('layouts/EmptyLayout.vue'),
    meta: { transition: 'slide-fade-out' },
    children: [
      { path: '', name: 'splash', component: () => import('pages/SplashPage.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/EmptyLayout.vue'),
    meta: { transition: 'fade' },
    children: [
      { path: '', name: 'login', component: () => import('pages/LoginPage.vue') }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', name: 'register', component: () => import('pages/RegisterPage.vue') }
    ]
  },
  {
    path: '/:id/product',
    component: () => import('layouts/ViewLayout.vue'),
    children: [
      { path: '', name: 'product.view', component: () => import('pages/ProductViewPage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
