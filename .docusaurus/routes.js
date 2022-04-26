
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','95d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','2f6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','056'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','897'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','6a2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','15f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','6b2'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive','469'),
    exact: true
  },
  {
    path: '/first-blog-post',
    component: ComponentCreator('/first-blog-post','048'),
    exact: true
  },
  {
    path: '/index-none',
    component: ComponentCreator('/index-none','32e'),
    exact: true
  },
  {
    path: '/long-blog-post',
    component: ComponentCreator('/long-blog-post','d1b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','ccc'),
    exact: true
  },
  {
    path: '/mdx-blog-post',
    component: ComponentCreator('/mdx-blog-post','389'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags','9f7'),
    exact: true
  },
  {
    path: '/tags/docusaurus',
    component: ComponentCreator('/tags/docusaurus','d28'),
    exact: true
  },
  {
    path: '/tags/facebook',
    component: ComponentCreator('/tags/facebook','2ff'),
    exact: true
  },
  {
    path: '/tags/hello',
    component: ComponentCreator('/tags/hello','30f'),
    exact: true
  },
  {
    path: '/tags/hola',
    component: ComponentCreator('/tags/hola','c8b'),
    exact: true
  },
  {
    path: '/welcome',
    component: ComponentCreator('/welcome','fa2'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','9dd'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','5ba'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations','f00'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','859'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document','35e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page','2c8'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','732'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features','072'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','048'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site','a66'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','a80'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
