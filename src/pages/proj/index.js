import React from "react"
import Layout from "../../components/layout"
import * as BannerStyle from "../../styles/projects.module.css"
import { breakpoints } from "../../utils/breakpoints"
import { BgImage } from "gbimage-bridge"
import { graphql, useStaticQuery } from "gatsby"
import  { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import ProjectsBrush from "../../svg/assets/brushw.svg"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const Projects = () => {
    const { placeholderImage } = useStaticQuery(
        graphql`
          query {
            placeholderImage:file(relativePath: {eq: "projects.jpg"}) {
              childImageSharp {
                gatsbyImageData(
                  width: 4000
                  quality: 60
                  webpOptions: {quality: 70}
                  aspectRatio: 1.5
                  placeholder: BLURRED
                  formats: AUTO
                )
              }
            }
          }
        `
      );
      const pluginImage = getImage(placeholderImage);
    return(
        <Layout>
            <ProjectsBackgroundGrid>
                <Background> 
                 <BgImage image={pluginImage} className={BannerStyle.projects} />
                 </Background>
                 <Overlay />
                    <Text>
                        <p>
                            To all donors and volunteers that make our work possible, Cypress says <strong>thank you</strong>. Find out more about how to get involved 
                            on our <a href="https://www.facebook.com/CypressMissions/">Facebook</a> and <a href="https://www.instagram.com/cypressmissions/">Instagram</a> pages.
                        </p>
                    </Text>
                 
            </ProjectsBackgroundGrid>   
                <ProjectsTitle>
                     <div>
                        <StyledProjectsBrush />
                        <h2>Projects</h2>
                     </div>
                 </ProjectsTitle>
                 <ProjectsWrapper>
                {/* PuertoRico Trip */}
                <section>
                    <div>
                       
                        <StaticImage 
                            src="../../images/puertorico.jpg"
                            alt="Puerto Rico Image"
                            placeholder="blurred"
                        />
                        
                    </div>
                    <div>
                        <h3>Puerto Rico</h3>
                        <p>Puerto Rico has never fully recovered from the devastation left in the wake of hurricane Maria, which claimed over 3,000 lives. Following the storm in September 2017, Cypress began 
                            cleaning up the neighborhoods around Vega Baja, patching roofs and building friendships with town leaders. Cypress is now focused on education reform on the island, with the goal of 
                            motivating the next generation of leaders. </p> 
                             <Link to="/proj/puertorico">See More</Link>           
                    </div>
                </section>
                {/* Bahamas */}
                <section>
                    <div>
                        <StaticImage 
                            src="../../images/bahamas.jpg"
                            alt="Bahamas Image"
                            aspectRatio={1.5}
                        />
                    </div>
                    <div>
                        <h3>Bahamas</h3>
                        <p>Hurricane Dorian was considered the worst natural disaster in the history of the Bahamas. Known as a <strong>"Category Hell"</strong> storm, the Abaco islands were in complete ruin when Cypress took 
                        it's first trip to Marsh Harbour and Green Turtle Cay in October 2019. Since then, Cypress has returned over a dozen times, getting people back into their homes and rebuilding the island chain's compromised infrastructure.</p>
                        <Link to="/proj/bahamas">See More</Link>  
                    </div>
                </section>
                {/* Haiti */}
                <section>
                    <div>
                        <StaticImage 
                            src="../../images/haiti.jpg"
                            alt="Haiti Image"
                            placeholder="blurred"
                        />
                    </div>
                    <div>
                        <h3>Haiti</h3>
                        <p>The poorest country in the Western Hemisphere, Haiti has been ground zero for American non-profits. Unfourtunately so much of the humanitarian aid brought to the island is spoiled or wasted, but Cypress remains committed 
                            to finding unique ways of making a lasting impact.
                        </p>
                        <Link to="/proj/haiti">See More</Link>  
                    </div>
                </section>
                {/* London */}
                <section>
                <div>
                    <StaticImage 
                            src="../../images/london.jpg"
                            alt="Puerto Rico Image"
                            placeholder="blurred"
                        />
                    </div> 
                    <div>
                        <h3>London</h3>
                        <p>Cypress partnered with the community group <strong>Welcome Syrian Families</strong> to provide affordable housing for refugee families fleeing worn-torn Syria.</p>
                        <Link to="/proj/london">See More</Link>  
                    </div>
                </section>{
                /* Bulgaria */}
                <section>
                <div>
                    <StaticImage 
                            src="../../images/bulgaria.jpg"
                            alt="Puerto Rico Image"
                            placeholder="blurred"
                        />
                        
                    </div>
                    <div>
                        <h3>Bulgaria</h3>
                        <p>Cypress Missions came to the remote village of Malomir, Bulgaria. The first objective was repairing the church, which will serve as a local center in one of the most vulnerable regions in Europe. 
                            Cypress performed much needed repairs in the kindergarten in the village, as well as donating school materials to more than 50 children in the village of Tenevo.
                         </p>
                         <Link to="/proj/bulgaria">See More</Link>
                    </div>
                </section>
                {/* New Jersey */}
                <section>
                <div> 
                    <StaticImage 
                            src="../../images/newjersey.jpg"
                            alt="Puerto Rico Image"
                            placeholder="blurred"
                        />
                        
                    </div>
                    <div>
                       <h3>New Jersey</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Quis risus sed vulputate odio ut enim blandit volutpat. Elit ut aliquam purus sit amet luctus venenatis lectus. Id diam maecenas ultricies mi eget. 
                        Cras adipiscing enim eu turpis egestas pretium aenean. Massa sed elementum tempus egestas sed sed risus. Tempor orci eu lobortis elementum nibh. 
                        </p>
                         <Link to="/proj/newjersey">See More</Link>
                    </div>
                </section>
            </ProjectsWrapper>
        </Layout>
    )
}
export default Projects

const ProjectsBackgroundGrid = styled.div`
    display:grid;
    grid-template-rows: repeat(3,1fr);
    grid-template-columns: repeat(2,1fr);
    position:relative;    
`
const Background = styled.div`
    grid-area: 1 / 1 / 4 / 3;
`
const Overlay = styled.div`
    grid-area: 1 / 1 / 4 / 3;
    position:relative;
    background:rgba(0,0,0,.2);
`
const Text = styled.div`
    background:rgba(255,255,255,.7);
    border-radius:20px;
    display:flex;
    flex-flow:column;
    height:auto;
    justify-content:center;
    align-items:center;
    position:absolute;
    bottom:0;
    right:0;
    max-width:40rem;
    margin: 0 2rem 2rem 0;

    p{
        font-family: co-text, sans-serif;
        font-size:clamp(.8rem,3.5vw,1.5rem);
        margin:1rem 0;
        width:100%;
        padding:0 1rem;
        text-align:center;
    }
    @media ${breakpoints.md}{
        margin:0;
        margin-left:auto;
        margin-right:auto;
        margin-bottom:2rem;
        width:90%;
        left:0;
    }
`
const ProjectsTitle = styled.div`
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
           font-size: clamp(1.6rem,6vw,3rem);
           letter-spacing:2px;
           margin:0;
           color:#199453;
        }
    }
`
const StyledProjectsBrush = styled(ProjectsBrush)`
    grid-area: 1 / 1 / 2 / 2;
`
const ProjectsWrapper = styled.main`
   section{
        display:flex;
        flex-flow:column;
        
        div:first-child{
            overflow:hidden;
                div{
                    transition: transform .5s ease-in-out;
                        :hover{
                            transform:scale(1.1);
                        
                            }
                    }
        }


   h3{
        font-family:flood-std, sans-serif;
        font-weight:300;
        font-size:clamp(1.8rem, 4vw, 2.5rem);
        letter-spacing:2px;
        color:#199534;
        margin:0;
    }
    p{
        font-family: co-text, sans-serif;
        font-size: clamp(.9rem,2vw, 1.2rem);
        line-height:28px;
        color:#5f5f5f;
        margin:0;
        letter-spacing:1px;
        width:90%;

        strong{
            color:black;
        }
    }

    a{
        background:#199534;
        border-radius:10px;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        max-height:4rem;
        height:10vw;
        min-height:3rem;
        max-width:12rem;
        font-family: flood-std, sans-serif;
        text-decoration:none;
        font-size:clamp(1rem, 4vw, 1.3rem);
        box-shadow: 0px 10px 10px rgba(0,0,0,.3);
        transition: box-shadow .2s ease-in-out;
        :active{
            box-shadow:none;
            
        }
    }
    }
    @media ${breakpoints.xl}{
        section{
            display:grid;
            margin:5rem auto;
            max-width:1920px;
            height:auto;
            overflow:hidden;  
            padding:1rem 0;
            
            
            p{
                width:90%;
                margin:1rem 0 1.5rem 0;
            }
            h3{
                margin:0;
            }
        }
        section:nth-child(odd){
            grid-template-columns: 35% 10% 55%;
            grid-template-rows:auto;
           
            div:first-child{
                grid-area: 1 / 1 / 2 / 2;
            }
           
            div:nth-child(2){
                grid-area: 1 / 3 / 2 / 4;
                
               

            }
        }
        section:nth-child(even){
            grid-template-columns:55% 10% 35%;
            grid-template-row:1fr;
            
            div:first-child{
                grid-area: 1 / 3 / 2 / 4;

            }
            div:nth-child(2){
                grid-area: 1 / 1 / 2 / 2;
                padding-left:10%;
                
                
            }
        }
    }
    @media ${breakpoints.lg}{
        section{
            display:grid;
            flex-flow:column;
            justify-content:center;
            align-items:flex-start;
            width:70%;
            margin: 5rem auto;
            h3{
                margin-top:1rem;
            }
            p{
                width:100%;
                margin: 1rem 0;
            }
            a{
                margin-bottom:1rem;
            }
        }

        
    }
    @media ${breakpoints.md}{
        section{
            justify-content:center;
            align-items:center;
            text-align:center;
            margin:4rem auto;
            overflow:hidden;
            perspective: 1000px;

            h3{
                margin: 1.5rem 0;
            }
            p{
                margin:0 auto;
                margin-bottom:2rem;
                
            }
            a{
                margin: 0 auto 1rem auto;
            }

            div:first-child{
                width: 90%;
                
                margin: 0 auto;

                div{
                    width:100%;
                }
            }
        }
    }
`