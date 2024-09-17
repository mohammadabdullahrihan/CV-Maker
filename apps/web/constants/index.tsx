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
import { EXPERIENCES } from './EXPERIENCES'
import { EDUCATIONS } from './EDUCATIONS'
import { PROJECTS } from './PROJECTS'
import { CONTRIBUTIONS } from './CONTRIBUTIONS'
import { TECHNOLOGIES } from './TECHNOLOGIES'

export const WEBSITE = {
   url:
      process.env.NEXT_PUBLIC_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '') ||
      '',
   image: `${process.env.NEXT_PUBLIC_URL}/me.jpg`,
   color: '#000',
   name: 'Dmitrii Selikhov - CTO, Software Architect, Technical Lead',
   title: 'Dmitrii Selikhov - CTO, Software Architect, Technical Lead',
   email: 'dmitrii.selikhov@gmail.com',
   telegram: 'https://t.me/idimetrix',
   description: 'Dmitrii Selikhov - CTO, Software Architect, Technical Lead',
   keywords: [
      'cv',
      'cv-creator',
      'cv-builder',
      'free-cv-builder',
      'resume',
      'resume-creator',
      'resume-builder',
      'free-resume-builder',
      'react',
      'react.js',
      'next',
      'next.js',
      'tailwind',
      'tailwind-ui',
      'tailwind-css',
      'javascript',
      'typescript',
      'HTML5',
      'CSS3',
   ].join(', '),
   about: 'Dmitrii Selikhov - CTO, Software Architect, Technical Lead',
   phone: null,
}

export const RESUME: Resume = {
   name: 'Dmitrii Selikhov',
   nick: 'DI',
   nameLink: 'https://www.linkedin.com/in/dimetrix',

   initials: 'DS',
   initialsLink: 'https://www.linkedin.com/in/dimetrix',

   locations: LOCATIONS,
   languages: LANGUAGES,

   avatar: '/me.jpg',
   avatarLink: 'https://www.linkedin.com/in/dimetrix',

   summary: 'CTO, Software Architect, Technical Lead',
   summaryLink: 'https://www.linkedin.com/in/dimetrix',

   about: (
      <div>
         <div>
            With a <b>Master’s degree in Mathematics and Computer Science</b>{' '}
            and over <b>15 years of professional experience (including MBA)</b>{' '}
            in both startups and enterprises, I am a strategic leader
            specializing in guiding products from initial concept to successful
            launch. I excel in managing teams of up to 100 members, fostering
            high-performance cultures, and driving innovation. My collaborative
            leadership style enables me to engage effectively in both technical
            and business discussions, whether internally or with clients. My
            expertise spans <b>WEB2</b> and <b>WEB3</b> sectors, leveraging
            technologies such as JavaScript/TypeScript (React.js, Next.js,
            Vue.js, Nuxt.js, Svelte, Stencil, Angular), alongside back-end
            systems using Node.js, Nest.js, Go, Rust, and Move. I am experienced
            in monolithic, microservices, and serverless architectures deployed
            on AWS, Azure, and Google Cloud platforms.
         </div>
         <br />
         <div>
            <b>Competencies:</b> Architecture • Integration Strategy • 0 - 1
            Product Development • API Design and Development • UI/UX Design and
            Development • Software Development • Global/Local People Management
            (Onshore/Offshore) • Product/Project Management • Process
            Structuration and Optimization • Executive Leadership • Continuous
            Improvements • Professional Services
         </div>
      </div>
   ),
   aboutLink: 'https://www.linkedin.com/in/dimetrix',

   website: 'https://www.linkedin.com/in/dimetrix',

   contact: {
      website: WEBSITE.url || '/',
      call: 'https://calendly.com/dmitry-selikhov',
      email: 'dmitrii.selikhov@gmail.com',
      phone: '+1 829 957 6440',
      cv: `${WEBSITE.url}/cv.pdf`,
      resume: `${WEBSITE.url}/resume.pdf`,
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

   technologies: TECHNOLOGIES,

   experiences: EXPERIENCES,

   educations: EDUCATIONS,

   skills: SKILLS,

   projects: PROJECTS,

   contributions: CONTRIBUTIONS,

   characteristics: [
      'self-motivated',
      'self-organized',
      'self-conscious',
      'self-control',
      'responsible',
      'honest',
      'fair',
      'hardworking',
      'energetic',
      'sociable',
      'purposeful',
      'resourcefulness',
      'cheerfulness',
      'patience',
      'principles',
      'decisive',
      'careful',
      'friendly',
      'enjoy learning and teaching',
   ],
}
