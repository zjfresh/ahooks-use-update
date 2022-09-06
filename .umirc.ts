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
      name: '文档示例',
      path: '/docs',
      component: './Docs',
    },
  ],
  npmClient: 'pnpm',
});
