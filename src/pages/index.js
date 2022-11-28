import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
import Articles from "../components/sections/articles"
import About from "../components/sections/about"
import Interests from "../components/sections/interests"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"
import { splashScreen, seoTitleSuffix } from "../../config"

const IndexPage = ({ data }) => {
  const { seoTitle, useSeoTitleSuffix } = data.index.edges[0].node.frontmatter
  const withSuffix = useSeoTitleSuffix === "true"
  return (
    <Layout splashScreen={splashScreen}>
      <SEO
        title={withSuffix ? `${seoTitle} - ${seoTitleSuffix}` : `${seoTitle}`}
      />
      <Hero content={data.hero.edges} />
      {/* Articles is populated via Medium RSS Feed fetch */}
      {false && <Articles />}
      <About content={data.about.edges} />
      <Interests content={data.interests.edges} />
      {/* <Projects content={data.projects.edges} /> */}
      {/* <Contact content={data.contact.edges} /> */}
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
{
  index: allMdx(filter: {internal: {contentFilePath: {regex: "/index/index/"}}}) {
    edges {
      node {
        frontmatter {
          seoTitle
          useSeoTitleSuffix
        }
      }
    }
  }
  hero: allMdx(filter: {internal: {contentFilePath: {regex: "/index/hero/"}}}) {
    edges {
      node {
        body
        frontmatter {
          greetings
          title
          subtitlePrefix
          subtitle
          icon {
            childImageSharp {
              fluid(maxWidth: 60, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  about: allMdx(filter: {internal: {contentFilePath: {regex: "/index/about/"}}}) {
    edges {
      node {
        body
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  interests: allMdx(
    filter: {internal: {contentFilePath: {regex: "/index/interests/"}}}
  ) {
    edges {
      node {
        frontmatter {
          title
          shownItems
          interests {
            name
            icon {
              childImageSharp {
                fixed(width: 20, height: 20, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
  projects: allMdx(
    filter: {internal: {contentFilePath: {regex: "/index/projects/"}}, frontmatter: {visible: {eq: "true"}}}
    sort: {frontmatter: {position: ASC}}
  ) {
    edges {
      node {
        body
        frontmatter {
          title
          category
          emoji
          external
          github
          screenshot {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          tags
          position
          buttonVisible
          buttonUrl
          buttonText
        }
      }
    }
  }
  contact: allMdx(
    filter: {internal: {contentFilePath: {regex: "/index/contact/"}}}
  ) {
    edges {
      node {
        body
        frontmatter {
          title
          name
          email
          profileImage {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`
