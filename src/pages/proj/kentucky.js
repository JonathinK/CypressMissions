import React from "react"
import KentuckyImage from "../../components/ProjectsBanners/KentuckyBanner"
import styled from "styled-components"
import Layout from "../../components/layout"
import Brush from "../../svg/assets/brushw.svg"
import { breakpoints } from "../../utils/breakpoints"
import { graphql } from "gatsby"
import Seo from "../../components/seo"

import {  GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col } from 'react-bootstrap';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

import 'bootstrap/dist/css/bootstrap.min.css';

const Kentucky = ({ data }) => {

    return(
        <Layout>
            <Seo title="Rebuilding Kentucky" />
            <BackgroundWrap>
                <div>
                  <KentuckyImage />  
                </div>
                <Overlay />
            </BackgroundWrap>
            <TitleWrap>
                <div>
                    <StyledBrush />
                    <h2>Kentucky</h2>
                </div>
            </TitleWrap>
            <Info>
              <p>It's been 6 months since the devastating tornadoes ripped through kentucky. Family's are are still displaced looking for help but, the local Cayce Recovery team has done an amazing job to 
              organize and expedite the projects focusing on individuals that have the greatest need. We have a team of 6 along with several other volunteers and NGOs. A team from Heart/911 has flown out to
              assist us with this project. We will be focusing on Don Wright with this project.</p>
            </Info>

            <PhotoGridWrap>
                <Container> 
                    <SimpleReactLightbox>
                        <SRLWrapper>
                            <Row>
                                {data.gallery.edges.map(({node}) => (
                                <Col  lg={3} md={4} sm={6}  key={node.id} className="py-3"> 
                                <a href={node.publicURL}>
                                    <GatsbyImage 
                                    image={node.childImageSharp.gatsbyImageData} 
                                    alt=""
                                    style={{
                                        boxShadow:`10px 10px 10px rgba(0,0,0,.3)`,
                                        borderRadius: `5px`}}
                                    />
                                    </a>
                                </Col>
                                ))} 
                            </Row>
                        </SRLWrapper>
                    </SimpleReactLightbox>    
                </Container> 
            </PhotoGridWrap>
        </Layout>
    )
}

export default Kentucky

export const pageQuery = graphql`
    query {
        gallery: allFile(filter: {relativeDirectory: {eq: "Kentucky"}}
        sort: {fields: root, order: DESC}) {
            edges {
              node {
                id
                base
                publicURL
                childImageSharp {
                  gatsbyImageData(
                    height:500
                    width: 800
                    transformOptions: {fit: COVER, cropFocus: CENTER}
                    placeholder: BLURRED
                    webpOptions: {quality: 70}
                    quality: 50 
                  )
                }
              }
            }
          }
    }
`

const BackgroundWrap = styled.div`
    display:grid;
    grid-template-rows: repeat(3,1fr);
    grid-template-columns: repeat(2,1fr);
    position:relative;
    height:50vh;
    width:100%;

    div{
        grid-area: 1 / 1 / 4 / 3;
    }
`
const Overlay = styled.div`
    grid-area: 1 / 1 / 4 / 3;
    position:relative;
    background:rgba(0,0,0,.2);
`
const TitleWrap = styled.div`
    width:100%;
    height:150px;
    div{
        height:100%;
        max-width:30rem;
        width:90%;
        margin: 0 auto;
        display:grid;
        grid-template-columns:1fr;
        grid-template-rows:1fr;
        text-align:center;
        align-items:center;

        h2{
           grid-area: 1 / 1 / 2 / 2; 
           font-family: flood-std, sans-serif;
           font-weight: 300;
           font-size: clamp(1.8rem,6vw,3rem);
           letter-spacing:2px;
           margin:0;
           color:#199453;
        }
    }
`
const StyledBrush = styled(Brush)`
    grid-area: 1 / 1 / 2 / 2;
`

const Info = styled.div`
    max-width:60rem;
    margin:2rem auto;
    width:90%;

    h3{
        font-family:flood-std, sans-serif;
        font-weight:300;
        font-size:clamp(1.4rem, 4vw, 2.5rem);
        letter-spacing:2px;
        color:#199534;
        margin:0 0 1rem 0;
    }

    p{
        font-family: co-text, sans-serif;
        font-size: clamp(.9rem,2vw, 1.2rem);
        line-height:28px;
        color:#5f5f5f;
        margin:0;
        letter-spacing:1px;

        strong{
            color:black;
        }
    }
    @media ${breakpoints.sm}{
        text-align:center;
    }
    `
    const PhotoGridWrap = styled.div`
        max-width:80rem;
        margin: 2rem auto;
    `