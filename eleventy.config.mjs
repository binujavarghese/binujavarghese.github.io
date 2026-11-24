import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Rewrites links like /about/ so the site works at any GitHub Pages address
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // All blog posts, newest first
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").filter((p) => !p.data.draft).reverse()
  );

     eleventyConfig.addFilter("topicInfo", (topics, name) => (topics || []).find((t) => String(t.name).trim() === String(name || "").trim()) || {});
    (posts || []).filter((p) => String(p.data.topic || "").trim() === String(topic || "").trim())
  );
  eleventyConfig.addFilter("featured", (posts) => {
    const f = (posts || []).filter((p) => p.data.featured);
    return f.length ? f : posts;
  });
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));
  eleventyConfig.addFilter("readableDate", (d) =>
    new Date(d).toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("isoDate", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("readingTime", (content) => {
    const words = String(content || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200)) + " min read";
  });
  eleventyConfig.addFilter("slugify2", (s) =>
    String(s).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
  );
  eleventyConfig.addShortcode("year", () => String(new Date().getFullYear()));
  eleventyConfig.addFilter("topicInfo", (topics, name) => (topics || []).find((t) => t.name === name) || {});

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix: process.env.PATH_PREFIX || "/",
  };
}
