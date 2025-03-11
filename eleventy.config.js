import logToConsole from 'eleventy-plugin-console-plus'
import tailwindcss from 'eleventy-plugin-tailwindcss-4'

export default (eleventyConfig) => {
  eleventyConfig.addPlugin(logToConsole, {});
  eleventyConfig.addPlugin(tailwindcss, {
    input: './src/css/tailwind.css',
    output:'./dist/styles.css'
  });
};

export const config = {
  htmlTemplateEngine: "njk",
  dir: {
    input: "src",
    output: "dist",
    includes: '_partials/',
    layouts: '_partials/_layouts',
    data: '_data'
  },
}; 