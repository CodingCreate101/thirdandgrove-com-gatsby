/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import ProjectsSlider from '../components/ProjectsSlider';
import WhatWeDo from '../components/WhatWeDo';
import InsightsSlider from '../components/InsightsSlider';
import LogoGrid from '../components/LogoGrid';
import SplitSection from '../components/SplitSection';
import { ContactUs, BeUs } from '../components/Prefooter';

export default () => {
  return (
    <Layout
      headerData={{
        metaTitle: `We are an obsessive digital innovation company`,
        title: (
          <>
            We are an <span className='underline'>obsessive</span> digital
            innovation company.
          </>
        ),
        mobileMinHeight: '93vh',
      }}
    >
      <ProjectsSlider />
      <WhatWeDo />
      <InsightsSlider />
      <LogoGrid title='A Few of Our Friends' />
      <SplitSection>
        <ContactUs />
        <BeUs />
      </SplitSection>
    </Layout>
  );
};

// define fragments
export const query = graphql`
  fragment InsightFragment on insight {
    id
    title
    field_inverse_header
    field_image {
      alt
    }
    created(formatString: "MMMM DD YYYY")
    path {
      alias
    }
    relationships {
      node_type {
        name
      }
      uid {
        name
      }
      field_image {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 530, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
          childImageSlideMobile: childImageSharp {
            fluid(maxWidth: 325, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
          childImageSlideDesktop: childImageSharp {
            fluid(maxWidth: 450, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      field_components {
        ... on component__text {
          relationships {
            component_type {
              name
            }
          }
          field_body {
            processed
          }
        }
        ... on component__image {
          id
          field_image {
            alt
          }
          relationships {
            component_type {
              name
            }
            field_image {
              id
              localFile {
                publicURL
                childImageSharp {
                  fluid(maxWidth: 630, maxHeight: 630) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  fragment CaseStudyFragment on case_study {
    id
    title
    field_subtitle
    field_inverse_header
    field_image_arrangement
    field_image {
      alt
    }
    field_secondary_image {
      alt
    }
    field_tertiary_image {
      alt
    }
    path {
      alias
    }
    relationships {
      field_tags {
        name
      }
      field_image {
        id
        localFile {
          publicURL
          childImageSharp {
            fluid(maxWidth: 850, maxHeight: 850) {
              ...GatsbyImageSharpFluid
            }
          }
          childImageMobile: childImageSharp {
            fixed(width: 335, height: 260) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeA: childImageSharp {
            fixed(width: 450, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeB: childImageSharp {
            fixed(width: 380, height: 420) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeC: childImageSharp {
            fixed(width: 420, height: 340) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      field_secondary_image {
        id
        localFile {
          publicURL
          childImageSharp {
            fluid(maxWidth: 850, maxHeight: 850) {
              ...GatsbyImageSharpFluid
            }
          }
          childImageMobile: childImageSharp {
            fixed(width: 1, height: 1) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeA: childImageSharp {
            fixed(width: 250, height: 180) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeB: childImageSharp {
            fixed(width: 340, height: 260) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeC: childImageSharp {
            fixed(width: 270, height: 210) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      field_tertiary_image {
        id
        localFile {
          publicURL
          childImageSharp {
            fluid(maxWidth: 850, maxHeight: 850) {
              ...GatsbyImageSharpFluid
            }
          }
          childImageMobile: childImageSharp {
            fixed(width: 1, height: 1) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeA: childImageSharp {
            fixed(width: 250, height: 495) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeB: childImageSharp {
            fixed(width: 230, height: 210) {
              ...GatsbyImageSharpFixed
            }
          }
          childImageTypeC: childImageSharp {
            fixed(width: 320, height: 210) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
