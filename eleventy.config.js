
import logToConsole from 'eleventy-plugin-console-plus'
import pluginWebc from "@11ty/eleventy-plugin-webc";

export default (eleventyConfig) => {

  eleventyConfig.addPlugin(logToConsole, {});


  eleventyConfig.addPassthroughCopy({
    "src/styles/main.css": "./main.css",
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: '_partials/',
      layouts: '_partials/_layouts',
      data: '_data'
    },
  };
};