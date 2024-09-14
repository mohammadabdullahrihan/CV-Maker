const ZERO: string[] = [''] // 0
const ONE: string[] = ['Radix UI', 'Headless UI', 'Shadcn UI'] // 1
const TWO: string[] = ['Move', 'Canva', 'Ark UI', 'Chakra UI'] // 2
const THREE: string[] = ['Dribbble', 'BUN', 'Undici'] // 3
const FOUR: string[] = [
   'Go',
   'Rust',
   'Cassandra',
   'Realm',
   'PlanetScale',
   'OpenAI',
   'ChatGPT',
   'Solidity',
   'Rust',
] // 4
const FIVE: string[] = [
   'Fastify',
   'Webflow',
   'Wix',
   'Bubble',
   'Retool',
   'KnexORM',
   'Zustand',
   'SWR',
] // 5
const SIX: string[] = [
   'Figma',
   'CircleCI',
   'ChipperCI',
   'GitLabCI',
   'React Context',
   'React Hooks',
   'Styled Components',
   'Tailwind UI',
   'Tailwind CSS',
   'Docker',
   'Kubernetes',
   'Terraform',
   'tRPC',
   'gRPC',
   'Zod',
   'Yup',
   'Prisma',
   'Cloudflare',
   'Shadow DOM',
] // 6
const SEVEN: string[] = [
   'Go',
   'Blockchain',
   'Crypto',
   'NFT',
   'BEP-20',
   'ERC-20',
   'ERC-721',
   'ERC-1155',
   'GitHub Actions',
   'BitBucket Pipelines',
   'Vite',
   'Rollup',
   'Lerna',
   'PNPM',
   'TURBO',
   'Stripe',
   'Wise',
   'PayPal',
   'Checkout',
   'TypeORM',
   'DrizzleORM',
   'TypeORM',
   'Vercel',
   'Netlify',
   'Heroku',
] // 7
const EIGHT: string[] = [
   'TypeScript',
   'React.js',
   'Next.js',
   'Vue.js',
   'Nuxt.js',
   'Svelte',
   'Stencil',
   'Angular',
   'Nest.js',
   'React Native',
   'React Query',
   'React Router',
   'Redux',
   'Remix',
   'Storybook',
   'Ant Design',
   'Firebase',
   'Invision',
   'Sketch',
   'Apollo GraphQL',
   'Apollo Server',
   'Apollo Client',
   'Chart.js',
   'Day.js',
   'Moment.js',
   'Ionic',
   'MUI',
   'Material Design',
   'Material UI/UX',
   'Chakra UI',
   'Semantic UI',
   'RxDB',
   'RxJS',
   'Web3',
   'Web3.js',
   'Ethers',
   'Ethers.js',
   'JAM stack',
   'MERN stack',
   'MEAN stack',
   'Virtual DOM',
] // 8
const NINE: string[] = [
   'Webpack',
   'Nodemon',
   'NVM',
   'PM2',
   'D3.js',
   'P5.js',
   'Three.js',
   'Paper.js',
   'Fabric.js',
   'Kinetic.js',
   'Easel.js',
   'YARN',
   'DigitalOcean',
   'GoDaddy',
   'MobX',
   'Web Components',
   'Module Federation',
] // 9
const TEN: string[] = [
   'HTML5',
   'CSS3',
   'Canvas 2D',
   'Canvas 3D',
   'NoSQL',
   'MongoDB',
   'DynamoDB',
   'SQLite',
   'Kafka',
   'ActiveMQ',
   'RabbitMQ',
   'Bootstrap',
   'Jasmine',
   'Jest',
   'Mocha',
   'Chai',
   'Less',
   'SASS',
   'SCSS',
   'Stylus',
] // 10
const ELEVEN: string[] = [
   'Gulp',
   'Grunt',
   'SequalizeORM',
   'Axios',
   'Fetch',
   'Serverless',
] // 11
const TWELVE: string[] = [
   'Agile',
   'Scrum',
   'Express.js',
   'Koa.js',
   'GraphQL',
   'Angular.js',
   'WebSocket',
   'Socket.io',
] // 12
const THIRTEEN: string[] = [] // 13
const FOURTEEN: string[] = [
   'Adobe',
   'Adobe Photoshop',
   'Adobe Illustrator',
   'AJAX',
   'XHR',
] // 14
const FIFTEEN: string[] = [
   'JavaScript',
   'Node.js',
   'SQL',
   'MySQL',
   'PostgreSQL',
   'MariaDB',
   'Redis',
   'Memcached',
   'HTML',
   'CSS',
   'Git',
   'Svn',
   'GitHub',
   'GitLab',
   'BitBucket',
   'Gimp',
   'NPM',
   'AWS',
   'Azure',
   'Vim',
   'Linux',
   'Apache',
   'Nginx',
   'LAMP stack',
   'Monolithic',
   'Microservices',
   'Pub-Sub',
   'Kanban',
   'CI/CD',
] // 15

export const SKILLS: {
   name: string
   years: number
}[] = [
   ...ZERO.filter(Boolean).map((name) => ({ name, years: 0 })),
   ...ONE.filter(Boolean).map((name) => ({ name, years: 1 })),
   ...TWO.filter(Boolean).map((name) => ({ name, years: 2 })),
   ...THREE.filter(Boolean).map((name) => ({ name, years: 3 })),
   ...FOUR.filter(Boolean).map((name) => ({ name, years: 4 })),
   ...FIVE.filter(Boolean).map((name) => ({ name, years: 5 })),
   ...SIX.filter(Boolean).map((name) => ({ name, years: 6 })),
   ...SEVEN.filter(Boolean).map((name) => ({ name, years: 7 })),
   ...EIGHT.filter(Boolean).map((name) => ({ name, years: 8 })),
   ...NINE.filter(Boolean).map((name) => ({ name, years: 9 })),
   ...TEN.filter(Boolean).map((name) => ({ name, years: 10 })),
   ...ELEVEN.filter(Boolean).map((name) => ({ name, years: 11 })),
   ...TWELVE.filter(Boolean).map((name) => ({ name, years: 12 })),
   ...THIRTEEN.filter(Boolean).map((name) => ({ name, years: 13 })),
   ...FOURTEEN.filter(Boolean).map((name) => ({ name, years: 14 })),
   ...FIFTEEN.filter(Boolean).map((name) => ({ name, years: 15 })),
]
