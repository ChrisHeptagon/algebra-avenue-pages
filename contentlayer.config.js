import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

export const Notes = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'string',
      description: 'The date of the post',
      required: true,
    },
    description: {
        type: 'string',
        required: true,
    },
    thumbnail: {
        type: 'string',
        required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `notes/${post._raw.flattenedPath}`,
    },
    slug: {
        type: 'string',
        resolve: (post) => post._raw.sourceFileName.replace(/\\.mdx$/,''),
    }
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Notes],
  mdx: { 
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
  }
})


/* 
  "title": "Quadratics: Focus and Directrix",
  "description": "Learn about the line and point important for understanding Parabolas.",
  "date": "1/1/2023",
  "thumbnail": "/images/focus-directix.png",
*/