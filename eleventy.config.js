import logToConsole from 'eleventy-plugin-console-plus'

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