export default [
  {
    path: '/',
    name: '管理页',
    layouts: false,
    routes: [
      {
        path: '/',
        name: '欢迎',
        hideInMenu: true,
        component: './index',
      },
    ],
  },
];
