module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        "case-study": {
          field: "slug",
          references: "title",
        },
        guide: {
          field: "slug",
          references: "title",
        },
        "news-story": {
          field: "slug",
          references: "title",
        },
        post: {
          field: "slug",
          references: "title",
        },
        term: {
          field: "slug",
          references: "title",
        },
        video: {
          field: "slug",
          references: "title",
        },
        webinar: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  "strapi-blurhash": {
    enabled: true,
    config: {
      regenerateOnUpdate: true,
    },
  },
});
