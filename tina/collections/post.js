/**
 * @type {import('tinacms').Collection}
 */
export default {
  label: "Blog Posts",
  name: "post",
  path: "content/post",
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {type: "string", label: "Tags", name: "tags", list: true},
    {
      type: "string",
      label: "Blog Post Body",
      name: "body",
      isBody: true,
      ui: {
        component: "textarea",
      },
    },
  ],
  ui: {
    router: ({ document }) => {
      return `/posts/${document._sys.filename}`;
    },
  },
};
