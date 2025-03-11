import { execSync } from 'child_process'
import logToConsole from 'eleventy-plugin-console-plus'

export const tailwindcss = (eleventyConfig, options) => {
  eleventyConfig.addWatchTarget(options.input);
  eleventyConfig.on("eleventy.after", () => {
    execSync(
      `npx @tailwindcss/cli -i ${options.input} -o ${options.output}`
    );
  });
  eleventyConfig.setServerOptions({
    watch: [options.output]
  })
}
export default (eleventyConfig) => {
  eleventyConfig.addPlugin(logToConsole, {});
  eleventyConfig.addPlugin(tailwindcss, {
    input: 'src/css/tailwind.css',
    output: 'dist/styles.css'
  });
};

export const config = {
  dir: {
    input: "src",
    output: "dist",
    includes: '_partials/',
    layouts: '_partials/_layouts',
    data: '_data'
  },
};