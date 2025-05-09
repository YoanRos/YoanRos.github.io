import { ref } from 'vue'

export const projects = ref([
  {
    id: 1,
    title: 'Oz Ensemble',
    description:
      'Mobile application designed to help users handle their alcohol consumption. As a Full Stack Developer at Selego, I was responsible for overseeing the end-to-end development of this project, focusing on client communication and project specifications.',
    pageName: 'Oz',
    logoUrl: 'logos/logo_oz.png',
    link: 'https://ozensemble.fabrique.social.gouv.fr/',
    technologies: ['React Native', 'PostgreSQL', 'Prisma'],
  },
  {
    id: 2,
    title: 'Jobmaker',
    description:
      'Web application focusing on clearing companies employees career paths. Promoted to Lead Developer, I managed the support, project specifications, roadmap, and client communication to ensure successful project delivery and alignment with client expectations.',
    pageName: 'Jobmaker',
    logoUrl: 'logos/logo_jobmaker.png',
    link: 'https://jobmaker.fr/',
    technologies: ['React', 'MongoDB', 'AWS'],
  },
  {
    id: 3,
    title: 'Zurban',
    description:
      'Mobile app to reorganize your contacts from all your sources. Spearheaded the creation of this R&D initiative for managing contacts, leading the communication with the client and coordinating development efforts with a team of developers.',
    pageName: 'Zurban',
    logoUrl: 'logos/logo_zurban.png',
    technologies: ['React Native', 'WatermelonDB'],
  },
  {
    id: 4,
    title: 'PetClub',
    description:
      'Social mobile app allowing pets to socialize. Defined the project roadmap and prepared client billing, ensuring smooth execution and timely invoicing as part of my role as a Full Stack Developer.',
    pageName: 'PetClub',
    logoUrl: 'logos/logo_petclub.png',
    link: 'https://petclub.fr/',
    technologies: ['React Native', 'MongoDB'],
  },
  {
    id: 5,
    title: 'Maison Mat',
    description:
      'Social mobile app developed for gay men looking for true relationships. Contributed to new features and improvements as a Full Stack Developer, focusing on delivering high-quality, user-centered solutions.',
    pageName: 'MaisonMat',
    logoUrl: 'logos/logo_maison_matrimoniale.png',
    link: 'https://maisonmatrimoniale.com/',
    technologies: ['React Native', 'Firebase'],
  },
  {
    id: 6,
    title: 'Accounting',
    description:
      'Internal web app of Selego, regrouping plenty of accounting features. Developed accounting features and integrated third-party services, ensuring the project adhered to best practices in software development.',
    pageName: 'Accounting',
    logoUrl: 'logos/logo_accounting.png',
    technologies: ['React', 'MongoDB', 'CleverCloud'],
  },
  {
    id: 7,
    title: 'Emeis',
    description:
      'Web app featuring AI to treat admin documents. Helped on the project to develop new features, focusing on creating user-friendly and accessible software as part of my role as a Full Stack Developer.',
    pageName: 'Emeis',
    logoUrl: 'logos/logo_emeis.png',
    link: 'https://www.selego.co/en/use-cases/ia-generative-conformite-contrats',
    technologies: ['React', 'MongoDB', 'CleverCloud'],
  },
])

export const technologyUrls = {
  React: 'https://react.dev/',
  'React Native': 'https://reactnative.dev/',
  PostgreSQL: 'https://www.postgresql.org/',
  Prisma: 'https://www.prisma.io/',
  MongoDB: 'https://www.mongodb.com/',
  AWS: 'https://aws.amazon.com/',
  WatermelonDB: 'https://github.com/Nozbe/WatermelonDB',
  Firebase: 'https://firebase.google.com/',
  CleverCloud: 'https://www.clever-cloud.com/',
}

export const technologyIconUrls = {
  CleverCloud: '/icons/icon_clevercloud.png',
  MongoDB: '/icons/icon_mongodb.png',
  PostgreSQL: '/icons/icon_postgresql.svg',
  Prisma: '/icons/icon_prisma.png',
  WatermelonDB: '/icons/icon_watermelondb.png',
}
