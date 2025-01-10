const eleventySass = require("eleventy-sass");

module.exports = function(eleventyConfig){

  pathPrefix: "/pallets-copy/",
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy("img");
  return {
    dir: {
      output: "_build",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
}  