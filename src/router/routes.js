const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        components: {
          top: () => import('@/components/HeaderComponent.vue'),
          default: () => import('pages/IndexPage.vue'),
          footer: () => import('@/components/FooterComponent.vue')
        }
      }
    ]
  },
  {
    path: '/:id/product',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'product.view',
        components: {
          top: () => import('@/components/MenuComponent.vue'),
          default: () => import('pages/ProductViewPage.vue'),
          footer: () => import('@/components/FooterViewComponent.vue')
        }
      }
    ]
  },
  {
    path: '/splash',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {
        path: '',
        name: 'splash',
        component: () => import('pages/SplashPage.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('pages/LoginPage.vue')
      }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {
        path: '',
        name: 'register',
        component: () => import('pages/RegisterPage.vue')
      }
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
