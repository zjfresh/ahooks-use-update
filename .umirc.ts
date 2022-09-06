import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      name: '首页',
      path: '/index',
      component: './Index',
    },
    {
      name: '首次异加载 一级栏正常 - CRUD 示例',
      path: '/table',
      component: './Docs',
    },
    {
      path: '/mid',
      name: '菜单',
      routes: [
        {
          name: '首页',
          path: '/mid/index',
          component: './Index',
        },
        // {
        //   name: '权限演示',
        //   path: '/mid/access',
        //   component: './Access',
        // },
        {
          name: '首次异加载 二级栏异常 CRUD 示例',
          path: '/mid/table',
          component: './Docs',
        },
      ],
    },
  ],
  npmClient: 'pnpm',
});
