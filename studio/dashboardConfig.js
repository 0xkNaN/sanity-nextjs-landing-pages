export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '603eebfc4f0e347c5c8c4531',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5zph6gjr',
                  apiId: '1b05b9c9-3488-4520-8d5d-db83b345e68c'
                },
                {
                  buildHookId: '603eebfc15957072e7f482a6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qawsq82r',
                  apiId: 'b0420c83-f749-42a3-8b79-65bbdb356002'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/0xkNaN/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qawsq82r.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
