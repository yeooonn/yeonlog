const URL = {
  HOME: '/',
  BLOG: {
    getBlogPost: (id: number) => `/blog/${id}`,
  },
  ABOUT: {
    PROFILE: '/about',
    SKILLS: '/about/skills',
    PROJECTS: '/about/projects',
    BLOG: '/about/blog',
    CONTACT: '/about/contact',
  },
} as const;

export default URL;
