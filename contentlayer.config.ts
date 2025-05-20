import {
  ComputedFields,
  defineDocumentType,
  LocalDocument,
  makeSource,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc: LocalDocument) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc: LocalDocument) =>
      doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    published: { type: "date", required: true },
  },
  computedFields,
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] });
