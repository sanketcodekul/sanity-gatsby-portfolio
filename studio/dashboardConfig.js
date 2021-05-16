export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '60a138307b087d3332b8a0d0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xpo23e4k',
                  apiId: '01188248-86b2-4ca6-a187-0c82650334b2'
                },
                {
                  buildHookId: '60a138306be48b97da3f8af9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-bhdctuyu',
                  apiId: '7ef8b788-824f-4aee-bb0d-62248f3c1bad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sanketcodekul/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-bhdctuyu.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
