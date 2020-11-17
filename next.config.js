// next.config.js
const withMdxEnhanced = require("next-mdx-enhanced");
const readingTime = require("reading-time");
const containers = require("remark-containers");
const slug = require("remark-slug");
const headings = require("remark-autolink-headings");

module.exports = withMdxEnhanced({
  layoutPath: "layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  remarkPlugins: [containers, slug, headings],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      // Pretty bad implementation to strip HTML but good enough for this report
      cleanText = mdxContent.replace(/<\/?[^>]+(>|$)/g, "");
      const time = readingTime(cleanText);
      time.words = time.words - 44;
      return { time };
    },
    phase: "both",
  },
})(/* your normal nextjs config */);
