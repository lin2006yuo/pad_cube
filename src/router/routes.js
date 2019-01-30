const routes = [
    {
      path: '/',
      redirect: '/menu'
    },
    {
        path: '/login',
        component: () => import('@/views/login')
    },
    {
        path:　'/menu',
        component: () => import('@/views/menu'),
        children: [
            {
                path: 'picking-process',
                component: () => import('@/views/picking-process'),
                children: [
                    {
                        path: 'picking-process-detail',
                        component: () => import('@/views/picking-process/picking-process-detail'),
                        children: [
                            {
                                name: 'detailSku',
                                path: 'detail-sku',
                                component: () => import('@/views/picking-process/detail-sku')
                            }
                        ]
                    },
                ]
            },
        ]
    },
];

export default routes;
