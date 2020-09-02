export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4f59e1e3b6fa7d0e0f8a64',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-mfng5tkc',
                  apiId: '62bc8856-9745-4994-81fa-29a5479e5c85'
                },
                {
                  buildHookId: '5f4f59e1d140bb8ee64c8061',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-fq67z6je',
                  apiId: '02d91c87-24c0-4209-b4c4-04bd0bae6f9e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tbillborn/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-fq67z6je.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
