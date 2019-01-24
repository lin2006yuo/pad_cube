const routes = [
    {
        path: '/login',
        component: () => import('@/views/login')
    },
    {
        path:　'/menu',
        component: () => import('@/views/menu'),
        children: [
            {
                // 九宫格表
                path: 'page',
                component: () => import('@/views/page')
            },
            {
                path: ''
            }

        ]
    },
];

export default routes;
