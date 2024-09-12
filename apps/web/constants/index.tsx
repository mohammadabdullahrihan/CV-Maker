import { Resume } from '../types'
import {
   faLinkedin,
   faGithub,
   faTelegram,
   faNpm,
   faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { SKILLS } from './SKILLS'
import { LOCATIONS } from './LOCATIONS'
import { LANGUAGES } from './LANGUAGES'

export const WEBSITE = {
   url: process.env.NEXT_PUBLIC_URL,
   image: `${process.env.NEXT_PUBLIC_URL}/blogs.png`,
   color: '#000',
   name: 'Print-Friendly, Free CV Maker',
   title: 'Print-Friendly, Free CV Maker',
   email: 'dmitrii.selikhov@gmail.com',
   telegram: 'https://t.me/idimetrix',
   description: 'Print-Friendly, Free CV Maker',
   keywords: [
      'react',
      'resume',
      'reactjs',
      'nextjs',
      'cv',
      'resume-creator',
      'next',
      'resume-builder',
      'cv-creator',
      'tailwind',
      'tailwindcss',
      'cv-builder',
   ].join(', '),
   about: 'Print-Friendly, Free CV Maker',
   phone: null,
}

export const RESUME: Resume = {
   name: 'Dmitrii Selikhov',
   nameLink: 'https://www.linkedin.com/in/dimetrix',

   initials: 'DS',
   initialsLink: 'https://www.linkedin.com/in/dimetrix',

   locations: LOCATIONS,
   languages: LANGUAGES,

   avatar:
      'https://avatars.githubusercontent.com/u/6536323?s=400&u=d69d2b12d4006d24030aa6e2e11fce02f15a86fe&v=4',
   avatarLink: 'https://www.linkedin.com/in/dimetrix',

   summary: 'CTO, Software Architect, Technical Lead',
   summaryLink: 'https://www.linkedin.com/in/dimetrix',

   about: `As a EXPERT FULL-STACK SOFTWARE ENGINEER, I specialize in taking products from concept to launch. I am skilled at leading teams and fostering environments where individuals can perform at their highest potential. Currently, I work mostly with Web2/Web3 applications using JS/TS (React, Next.js, Vue, Nuxt.js, Svelte, Stencil, Angular) and Node/Go/Rust/Move using monolithic, microservices, serverless architectures based on AWS, Azure and Google cloud services`,
   aboutLink: 'https://www.linkedin.com/in/dimetrix',

   website: 'https://www.linkedin.com/in/dimetrix',

   contact: {
      email: 'dmitrii.selikhov@gmail.com',
      // phone: '+18298032444',
      cv: 'https://freecvmaker.vercel.app/cv.pdf',
      resume: 'https://freecvmaker.vercel.app/resume.pdf',
      socials: [
         {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/dimetrix',
            icon: faLinkedin,
         },
         {
            name: 'Github',
            url: 'https://github.com/idimetrix',
            icon: faGithub,
         },
         {
            name: 'Npm',
            url: 'https://www.npmjs.com/~dimetrix',
            icon: faNpm,
         },
         {
            name: 'Telegram',
            url: 'https://t.me/idimetrix',
            icon: faTelegram,
         },
         {
            name: 'Twitter',
            url: 'https://x.com/idimetrix',
            icon: faTwitter,
         },
      ],
   },
   experiences: [
      {
         company: 'CheapHotelsHub.com',
         link: 'https://cheaphotelshub.com',
         badges: ['Office', 'Full-Time'],
         title: 'Chief Technology Officer',
         logo: undefined,
         start: 'Aug 2023',
         end: undefined,
         description:
            'CTO, Technical Leadership, Marketing, Digital Marketing, Online Marketing, Google Ads and Technology Management',
      },

      {
         company: 'Super Studios Inc.',
         link: 'https://www.superstudios.io',
         badges: ['Remote', 'Full-Time'],
         title: 'Senior Full Stack Developer',
         logo: undefined,
         start: 'Mar 2023',
         end: 'Aug 2023',
         description: `⭐ Created Vue/Nuxt.js/Pinia/JavaScript/TypeScript responsive HTML5/CSS3 website https://superstudios.io/
⭐ Created Vue/Nuxt.js/Pinia/JavaScript/TypeScript responsive HTML5/CSS3 website https://superverse.cool/
⭐ Worked on the NFT platform https://impostors.gg/
⭐ Worked on the OpenSea competitor https://gigamart.com/ - technical solutions, improvements, features.
⭐ Handled 0-1 implementations, features.`,
      },

      {
         company: 'University of Miami',
         link: 'https://miami.edu',
         badges: ['Remote', 'Full-Time'],
         title: 'Lead Software Engineer',
         logo: undefined,
         start: 'Aug 2022',
         end: 'Mar 2023',
         description: `Skills: JavaScript · SQL · MySQL · Jira · Test Automation · DevOps · NoSQL · Continuous Integration and Continuous Delivery (CI/CD) · Next.js · Agile Methodologies · Cypress · Microsoft Azure · React.js · MongoDB · Test-Driven Development · Material UI · TypeScript · Nest.js · Bitbucket · Unit Testing · Figma`,
      },

      {
         company: 'Tier1 Financial Solutions',
         link: 'https://www.tier1fin.com',
         badges: ['Remote', 'Full-Time'],
         title: 'Node.js/React.js Full Stack Tech Lead ',
         logo: undefined,
         start: 'Jan 2022',
         end: 'Aug 2022',
         description: `Skills: JavaScript · SQL · MySQL · Node.js · React Hooks · RESTful architecture · NoSQL · Storybooks · Next.js · Team Leadership · Microsoft Azure · REST APIs · Vercel · React.js · MongoDB · Leadership · TypeScript · Nest.js · React Context`,
      },

      {
         company: 'AB InBev',
         link: 'https://www.ab-inbev.com',
         badges: ['Remote', 'Full-Time'],
         title: 'Node.js/React.js Tech Lead Engineer',
         logo: undefined,
         start: 'Apr 2021',
         end: 'Jan 2022',
         description: `Skills: JavaScript · React Native · Node.js · CRM Integration · RESTful architecture · Next.js · Agile Methodologies · Team Leadership · CRM Databases · Microsoft Azure · Kafka Streams · React.js · Leadership · Bank Reconciliation · Apache Kafka · TypeScript · Amazon Web Services (AWS) · Scrum · RabbitMQ`,
      },

      {
         company: 'CiiRUS Vacation Rental Software',
         link: 'https://www.ciirus.com',
         badges: ['Remote', 'Full-Time'],
         title: 'Full Stack Engineer',
         logo: undefined,
         start: 'Jul 2020',
         end: 'Mar 2021',
         description: `Skills: JavaScript · AngularJS · Agile Methodologies · Microsoft Azure · TypeScript · CSS3`,
      },

      {
         company: 'Freelance',
         link: '',
         badges: ['Remote', 'Full-Time'],
         title: 'Senior Front-end Developer | Back-end Engineer, Team Leader',
         logo: undefined,
         start: 'Sep 2017',
         end: 'Jun 2020',
         description: `Skills: JavaScript · Node.js · AngularJS · Vue.js · REST APIs · React.js · TypeScript`,
      },

      {
         company: 'Cronix MicroSystems',
         link: '',
         badges: ['Office', 'Full-Time'],
         title: 'Chief Technology Officer',
         logo: undefined,
         start: 'Mar 2016',
         end: 'Sep 2017',
         description: `Skills: Agile Methodologies · Team Leadership · Leadership · Scrum`,
      },

      {
         company: 'Guru.com',
         link: 'https://guru.com',
         badges: ['Remote', 'Full-Time'],
         title: 'Senior Software Developer Team Lead',
         logo: undefined,
         start: 'Jan 2015',
         end: 'Mar 2016',
         description: `Skills: JavaScript · Node.js · Webpack · HTML5 · TypeScript · CSS3`,
      },

      {
         company: 'Scopic Software',
         link: 'https://scopicsoftware.com',
         badges: ['Remote', 'Full-Time'],
         title: 'Senior Web Developer',
         logo: undefined,
         start: 'Feb 2014',
         end: 'Jan 2015',
         description: `Skills: JavaScript · Node.js · HTML5 · CSS3`,
      },

      {
         company: 'Stork',
         link: '',
         badges: ['Office', 'Full-Time'],
         title: 'Full Stack Engineer',
         logo: undefined,
         start: 'Sep 2011',
         end: 'Jan 2014',
         description: `Skills: JavaScript · HTML5 · CSS3`,
      },

      {
         company: 'Oryol State Technical University (Oryol STU)',
         link: 'https://int.oreluniver.ru/en',
         badges: ['Office', 'Internship'],
         title: 'Front-end | Back-end: Trainee Developer',
         logo: undefined,
         start: 'Sep 2009',
         end: 'Sep 2011',
         description: `Skills: JavaScript · MySQL · Node.js · HTML5 · CSS3`,
      },

      // {
      //    company: '',
      //    link: '',
      //    badges: ['Remote', 'Full-Time'],
      //    title: '',
      //    logo: undefined,
      //    start: '',
      //    end: '',
      //    description: ``,
      // },
   ],

   educations: [
      {
         company: 'Oryol State Technical University (Oryol STU)',
         link: '',
         badges: [],
         title: 'Mathematician. System programmer. Computer science.',
         logo: undefined,
         start: '2012',
         end: '2014',
         description: `Master's degree in mathematician, system programming and computer science.`,
      },

      {
         company: 'Oryol State Technical University (Oryol STU)',
         link: '',
         badges: [],
         title: 'Mathematician. System programmer. Computer science.',
         logo: undefined,
         start: '2007',
         end: '2012',
         description: `Bachelor's degree in mathematician, system programming and computer science.`,
      },
   ],

   skills: SKILLS,

   projects: [
      {
         company: `Cheap Hotels Hub`,
         link: 'https://cheaphotelshub.com',
         badges: [
            'CTO',
            'Technical Leadership',
            'Marketing',
            'Digital Marketing',
         ],
         title: `Cheap Hotels Hub`,
         logo: undefined,
         start: undefined,
         end: undefined,
         description: `This online hotel reservation service sets the gold standard. With a seamless user interface, an extensive range of options, and impeccable customer support.`,
      },

      {
         company: `Super Studios`,
         link: 'https://www.superstudios.io',
         badges: ['WEB3', 'Nuxt.js', 'Vue.js', 'Crypto', 'Token'],
         title: `Super Studios`,
         logo: undefined,
         start: undefined,
         end: undefined,
         description: `Build decentralized Web3 products to accelerate the world's adoption of crypto technology.`,
      },

      {
         company: `Super Verse`,
         link: 'https://superverse.co',
         badges: ['WEB3', 'Nuxt.js', 'Vue.js', 'Crypto', 'Token'],
         title: `Super Verse`,
         logo: undefined,
         start: undefined,
         end: undefined,
         description: `The decentralized autonomous organization that powers the SUPER ecosystem.`,
      },

      {
         company: `Impostors`,
         link: 'https://impostors.gg',
         badges: ['WEB3', 'Nuxt.js', 'Vue.js', 'Crypto', 'NFT'],
         title: `Impostors`,
         logo: undefined,
         start: undefined,
         end: undefined,
         description: `A Free-to-Play Social Deduction Game Riddled with Intrigue, Excitement, and a Dash of Mystery`,
      },

      {
         company: `DFinance`,
         link: 'https://dfinance.co',
         badges: [
            'WEB3',
            'Nuxt.js',
            'Vue.js',
            'React.js',
            'Next.js',
            'Cosmos',
            'Move',
         ],
         title: `DFinance`,
         logo: undefined,
         start: undefined,
         end: undefined,
         description: `Dfinance enables you to create and trade your own blockchain-based financial instruments with natural language tools.`,
      },

      {
         company: `Pontem Network`,
         link: 'https://pontem.network',
         badges: ['WEB3', 'Wallet', 'Explorer', 'React.js', 'Next.js', 'AI'],
         title: `Pontem Network`,
         logo: undefined,
         start: undefined,
         end: undefined,
         description: `Pontem is the multichain product studio behind Lumio — the L2 for every VM on every chain. Build once, deploy everywhere with Lumio.`,
      },

      {
         company: `Z-Tech`,
         link: 'https://www.linkedin.com/company/z-tech',
         badges: [
            'Node.js',
            'JavaScript',
            'TypeScript',
            'React.js',
            'Next.js',
            'NoSQL',
            'SQL',
         ],
         title: `Z-Tech`,
         logo: undefined,
         start: undefined,
         end: undefined,
         description: `Z-Tech is an innovation group part of Anheuser-Busch Inbev which mission is to empower small and medium-size businesses to change the world through technology.`,
      },

      {
         company: `Tier1 Financial Solutions`,
         link: 'https://tier1fin.com',
         badges: ['MySQL', 'PostgreSQL', 'Node.js', 'Nest.js', 'CI/CD'],
         title: `Tier1 Financial Solutions`,
         logo: undefined,
         start: undefined,
         end: undefined,
         description: `Global leader in CRM software for capital markets & investment banking.`,
      },

      // {
      //    company: ``,
      //    link: '',
      //    badges: [''],
      //    title: ``,
      //    logo: undefined,
      //    start: undefined,
      //    end: undefined,
      //    description: ``,
      // },
   ],
}
