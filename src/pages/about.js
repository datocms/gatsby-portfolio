import React from 'react'
import Link from 'gatsby-link'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'

const About = ({ data: { about } }) => (
  <article className="sheet">
    <HelmetDatoCms seo={about.seoMetaTags} />
    <div className="sheet__inner">
      <h1 className="sheet__title">{about.title}</h1>
      <p className="sheet__lead">{about.subtitle}</p>
      <div className="sheet__gallery">
        <Img sizes={about.photo.sizes} />
      </div>
      <div
        className="sheet__body"
        dangerouslySetInnerHTML={{
          __html: about.bioNode.childMarkdownRemark.html,
        }}
      />
    </div>
  </article>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        sizes(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
