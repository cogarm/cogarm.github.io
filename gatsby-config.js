module.exports = {
  siteMetadata: {
    siteUrl: `https://monumental-chimera-b1ace3.netlify.app/`,
    name: 'Soyeon Oh',
    title: `Soyeon | Developer`,
    description: `Seoul-based developer with interests in web development, AI, and interactive mashup services.`,
    author: `Soyeon`,
    github: `https://github.com/cogarm`,
    linkedin: `https://www.linkedin.com`, 

    // About Me Section
    about: `컴퓨터공학 전공으로 웹 개발과 AI 프로젝트를 중심으로 공부하고 있습니다.`,

    // Projects List
    projects: [
      {
        name: 'Air Pollution Inquiry Mashup',
        description:
          '공공 데이터(OpenAPI)와 Mashup 기술을 활용하여 대기오염 정보를 시각화하고 사용자 위치 기반으로 실시간 조회할 수 있는 웹 애플리케이션.',
        link: 'https://github.com/cogarm',
      },
      {
        name: '서울시 문화행사 알리미 PWA',
        description:
          '서울시 문화행사 데이터를 기반으로 PWA 기능(오프라인 지원, 홈 화면 추가)을 적용한 모바일 친화형 웹앱.',
        link: 'https://2023810096soyeon-culture.netlify.app/',
      },
      {
        name: 'Kakao Map 서울시 공공도서관 검색 Mashup',
        description:
          'Kakao Map API와 서울시 공공도서관 OpenAPI를 이용하여 지도로 도서관을 검색하고 위치, 주소, 상세 정보를 제공하는 Mashup 프로젝트.',
        link: 'https://2023810096soyeon-seoullibrarysearch.netlify.app/',
      },
    ],

    // Experience 
    experience: [
      {
        name: 'Student Developer',
        description: 'Web Development & AI Projects, 2023 - Present',
      }
    ],

    // Skills Section
    skills: [
      {
        name: 'Frontend',
        description:
          'HTML, CSS, JavaScript, React, TailwindCSS',
      },
      {
        name: 'Backend',
        description: 'Node.js, Express, Flask (기초)',
      },
      {
        name: 'APIs & Data',
        description:
          'REST API, OpenAPI 활용, Mashup 서비스 구축, JSON 데이터 처리',
      },
      {
        name: 'Tools',
        description:
          'Git, GitHub, Netlify, Vercel, Render, Figma',
      },
    ],
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
