import React from 'react';
import get from 'lodash/get';

import Header from '../components/header';
import Layout from '../components/layout';
import SectionAbout from '../components/section-about';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SEO from '../components/seo';

const Index = ({ data }) => {
  // siteMetadata에서 필요한 정보 가져오기
  const about = get(data, 'site.siteMetadata.about', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const experience = get(data, 'site.siteMetadata.experience', false);
  const skills = get(data, 'site.siteMetadata.skills', false);

  return (
    <Layout>
      <SEO />
      <Header metadata={data.site.siteMetadata} noBlog={true} />
      {about && <SectionAbout about={about} />}
      {projects && projects.length > 0 && <SectionProjects projects={projects} />}
      {experience && experience.length > 0 && (
        <SectionExperience experience={experience} />
      )}
      {skills && skills.length > 0 && <SectionSkills skills={skills} />}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
        projects {
          name
          description
          link
        }
        experience {
          name
          description
          link
        }
        skills {
          name
          description
        }
      }
    }
  }
`;

