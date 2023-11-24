/**
 * @type {import("tinacms").Collection}
 */
export default {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  defaultItem: () => {
    return {
      title: 'A default title',
      body: 'What a nice body'
    }
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string", label: "Tags", name: "tags", list: true,
      defaultItem: () => {
        return `A tag`;
      }
    },
    {
      type: "string",
      label: "Blog Post Body",
      name: "body",
      isBody: true,
      ui: {
        component: "textarea"
      }
    },
    {
      type: "object",
      label: "Authors",
      name: "authors",
      list: true,
      fields: [
        {
          type: "string",
          label: "Name",
          name: "name",
        },
        {
          type: "string",
          label: "Email",
          name: "email"
        }
      ]
    }
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    }
  }
};
