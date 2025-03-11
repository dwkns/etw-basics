import 'dotenv/config'

const site = {
  name: "Site Name",
  theme: {
   colour: '#93C5FD'
  },
  development: {
    domain: 'localhost',
    baseURL: 'https://localhost:8080',
    debug: true,
  },
  staging: {
    domain: 'staging-tiny-start.netlify.app',
    baseURL: 'https://staging-tiny-start.netlify.app',
    debug: true,
  },
  production: {
    domain: 'tiny-start.netlify.app',
    baseURL: 'https://tiny-start.netlify.app',
    debug: false,
  },
  currentYear: new Date().getFullYear(),
  currentDate: new Date(),
  version: Math.random().toString(36).substr(2, 8),
  currentEnv: process.env.CURRENT_ENV
}

// Log a warning to the console if CURRENT_ENV variable is not set.
if (!site.currentEnv) {
  const red = "\x1b[31m";
  const reset = "\x1b[0m";
  console.log(`${red}
The ${reset}CURRENT_ENV ${red}enviroment variable is not set. Things may not work as expected. 
Expected ${reset}CURRENT_ENV=< development | staging | production > ${red}.
Check your enviroment variables or ${reset}.env ${red}file.${reset} 
`);
} 

export default site 