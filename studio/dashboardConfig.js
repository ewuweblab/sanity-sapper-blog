export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '60b6a18003fa312fd000eca2',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-a1uypzy1',
                  apiId: 'bd2ee737-29b4-4d1f-8733-5236088637dd'
                },
                {
                  buildHookId: '60b6a180b0132236de1c84e9',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-9q26u3ka',
                  apiId: '8e7e144f-d172-4007-9262-94c72cb1c0bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ewuweblab/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-9q26u3ka.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
