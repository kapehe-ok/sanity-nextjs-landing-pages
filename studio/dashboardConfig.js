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
                  buildHookId: '5f4c02a3a0882959557b0674',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-j6dy8wti',
                  apiId: 'cd3881bb-0f35-49e4-abcf-de5115811055'
                },
                {
                  buildHookId: '5f4c02a386e53715dbedaf59',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-mni6r91s',
                  apiId: '75a9f6df-827c-4910-a3c7-6869567cbdaf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-mni6r91s.netlify.app', category: 'apps'}
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
