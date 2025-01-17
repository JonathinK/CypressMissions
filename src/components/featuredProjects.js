import { useStaticQuery, graphql} from 'gatsby';
import React from 'react';
import { Card, FeatureContainer, Heading3, Heading4, MediaContainer, NavLink, Paragraph } from '../styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';


export const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(limit: 3) {
        nodes {
          codeId
          contentful_id
          slug
          projectLocation
          projectTitle
          featureImage {
            altText
            codeId
            contentful_id
            externalName
            asset {
              contentful_id
              gatsbyImageData(
                layout: FULL_WIDTH, 
                placeholder: BLURRED, 
                quality: 90
                resizingBehavior: SCALE,
                )
            }
          }
        }
      }
    }
  `)
  const featureCards = data?.allContentfulProject?.nodes || "";
  return(
    <FeatureContainer $ProjectsFeature>
      {featureCards.map((card) => {
        return(
          <Card $FeaturedProject key={card.contentful_id}>
            <NavLink to={`/portfolio/${card.slug}`}/>
            <MediaContainer className="featured_projects_image">
              <GatsbyImage
                image={getImage(card.featureImage.asset)}
                loading="lazy"y
                className="full_image"
                alt={card.featureImage.altText || ''}
              />
            </MediaContainer>
            <div className="project_info">
              <Heading3>{card.projectTitle}</Heading3>
              <Paragraph className='white_text'>{card.projectLocation}</Paragraph>
            </div>
          </Card>
        )
      })}
    </FeatureContainer>
  )
}