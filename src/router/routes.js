const routes = [
    {
        path: '/login',
        component: () => import('@/views/login')
    },
    {
        // 壳
        path:　'/menu',
        component: () => import('@/views/menu'),
        children: [
            {
                path: 'picking-process',
                component: () => import('@/views/picking-process')
            },
            {
                path:'mass-zone',
                component: () => import('@/views/mass-zon')
            }
        ]
    },
];

export default routes;
