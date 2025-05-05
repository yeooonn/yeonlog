const URL = {
  HOME: '/',
  BLOG: {
    getBlogPost: (id: string) => `/blog/${id}`,
  },
  ABOUT: {
    PROFILE: '/about',
    SKILLS: '/about/skills',
    PROJECTS: '/about/projects',
    BLOG: '/about/blog',
    CONTACT: '/about/contact',
  },
  DOCS: {
    HOME: '/docs',
    INTRO: '/docs/intro',
    BASIC: '/docs/basic',
  },
} as const;

export default URL;
