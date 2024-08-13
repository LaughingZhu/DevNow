import { defineConfig } from 'tinacms';
import { categories } from '../src/data/category';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.PUBLIC_GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.PUBLIC_TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public'
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'doc',
        label: 'Posts',
        path: 'src/content/doc',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true
          },
          {
            type: 'string',
            name: 'desc',
            label: 'Desc',
            required: true,
            description: 'The image used for the cover of the post'
          },
          // 发布时间
          {
            type: 'string',
            name: 'publishDate',
            label: 'PublishDate',
            required: true
          },
          {
            type: 'string',
            name: 'image',
            label: 'Image',
            required: true
          },
          {
            type: 'string',
            required: true,
            name: 'category',
            label: 'Category',
            description: 'Select an category for this post',
            options: [
              ...categories.map((item) => {
                return {
                  label: item.title,
                  value: item.slug
                };
              })
            ]
          },
          // 作者
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true
          },
          // 标签
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            required: true,
            list: true,
            ui: {
              component: 'tags'
            }
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Draft',
            description: 'If this is checked the post will not be published'
          },
          // 是否置顶
          {
            type: 'boolean',
            name: 'pin',
            label: 'Pin',
            required: false
          },

          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true
          }
        ]
      }
    ]
  }
});
