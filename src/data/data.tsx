import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background-1.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jim Alcock.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Bradford based <strong className="text-stone-100">Senior Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Aire Logic Ltd</strong> helping build health-tech and machine learning software.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Krav maga</strong>,
        renovating my <strong className="text-stone-100">Mid-century Bungalow</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">West Yorkshire</strong> with my two dogs and loving wife.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ` 
  I'm a Bradford based Senior Software Engineer, currently working at Aire Logic Ltd helping build health-tech and machine learning software.
  I'm a hard working, self-motivated, and enthusiastic individual with a passion for technology and a keen eye for detail.
  My core skills are in backend development using Python, AWS, and Docker, but I also have experience in frontend development using React and Typescript.
  `,
  aboutItems: [
    {label: 'Location', text: 'Bradford, West Yorkshire', Icon: MapIcon},
    {label: 'Age', text: '33', Icon: CalendarIcon},
    {label: 'Nationality', text: 'British/English', Icon: FlagIcon},
    {label: 'Interests', text: 'Krav Maga, Muay Thai, DIY', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Huddersfield', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Aire Logic Ltd.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'German',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 3,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'C#',
        level: 5,
      },
      {
        name: 'Rust',
        level: 4,
      },
    ],
  },
  {
    name: 'DevOps Technologies',
    skills: [
      {
        name: 'Docker',
        level: 9,
      },
      {
        name: 'Kubernetes',
        level: 7,
      },
      {
        name: 'AWS',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
 
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2008',
    location: 'University of Huddersfield',
    title: 'Computer Games Programming BSc (Hons)',
    content: <p>I've always been a keen gamer, and computer enthusaist, so naturally I chose a more game focus learning experience
    to help me get into the industry. I learned a lot about programming, and the games industry, but ultimately decided that I wanted to work on more general software.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - Present',
    location: 'Aire Logic Ltd',
    title: 'Senior Software Developer',
    content: (
        <p> 
          I'm currently working as a Senior Software Developer at Aire Logic Ltd. I'm working on a variety of projects, using a variety of technologies, including Python, AWS, and React. 
          <br /><br /><u>Key achievements include:</u><br />
            ● Working as part of the data engineering team to help the NHS with their COVID-19 response<br />
            ● Creating an Immunisation Fhir API to help central all vaccination data used by the NHS<br />
            ● Creating a React based UI to help users manage their data<br />
        </p>
    ),
  },
  {
    date: 'April 2021 - July 2021',
    location: 'ANS Group Ltd',
    title: 'Senior Software Developer',
    content: (
      <p>
        ANS is a leader in secure, cloud-led digital transformation technology and services, and the largest privately owned hosting provider in the UK.
        I worked as part of the Cyber-Security team, helping to develop a new product to automate threat analyse and prevention.
        <br /><br /><u>Key achievements include:</u><br />
          ● Standardise and automate deploy of entire data flow infrastructure via Ansible<br />
          ● Contribute towards the development of in-house micro-service and SAAS projects including SOC and threat monitoring based products<br />
          ● Developing a Python based API to handle data requestsBuilt entire dev infrastructure to increase speed of development and allow for safe testing of new deployments<br />
      </p>
    ),
  },
  {
    date: 'December 2014 - April 2021',
    location: 'Gardner Denver UK Ltd',
    title: 'Python Developer/Software Developer',
    content: (
      <p> I worked as the sole end-to-end python developer at Gardner Denver Uk ltd Bradford.
        I managed the entire development process, from requirements gathering, to deployment and support.
        <br /><br /><u>Key achievements include:</u><br />
          ● Efficiently re-organised and automated hardware distribution and collection.<br />
          ● Creating internal tooling to increase productivity and efficency.<br />
          ●	Designed, Created and Maintained a python/django-based web portal for customers to upload/update mission critical files.<br />
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Matthew Pattinson',
      text: 'Sorting through the morass of conflicting advice and standards to set up the development environment for the new Vaccination programme APIs was a painstaking process for Jim. Not only did he set everything up quickly and efficiently, but he also documented it - kudos!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Adam Waller',
      text: 'Jims work is of high quality and he is keen to adhere to best practice when developing software and this is ultimately good for the client and patients',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Hasnat Abdul',
      text: 'Jim is very knowledgable in a vast amount of areas that makes working with him a pleasure, he is excellent technically and always provides good advice. I think he would be excellent in a mentoring and leadership role within a team',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I check my emails regularly, so feel free to reach out if you have any questions or opportunities',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@jimalcock.dev',
      href: 'mailto:reachout@jimalcock.dev',
    },
    {
      type: ContactType.Location,
      text: 'Bradford, West Yorkshire, UK',
      href: 'https://www.google.com/maps/place/Bradford/@53.7970698,-1.8367601,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@snowboundship',
      href: 'https://www.instagram.com/snowboundship/',
    },
    {
      type: ContactType.Github,
      text: 'jalcock501',
      href: 'https://github.com/jalcock501',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jalcock501'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/17200721/snowboundship53'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/james-alcock-424ba560/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/snowboundship/'},
];
