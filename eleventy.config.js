import { execSync } from 'child_process'
import logToConsole from 'eleventy-plugin-console-plus'

export default (eleventyConfig) => {
  eleventyConfig.addPlugin(logToConsole, {});

  eleventyConfig.on("eleventy.after", () => {
    execSync(`npx @tailwindcss/cli -i src/styles/tailwind.css -o dist/main.css`);
  });

  eleventyConfig.setServerOptions({ watch: ["dist/main.css"] });
  eleventyConfig.addWatchTarget("src/styles/tailwind.css");
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