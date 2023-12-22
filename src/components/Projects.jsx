import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { BrowserRouter as Router } from "react-router-dom";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/Cocktail.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/Calculadora.png";
import projImg4 from "../assets/img/Cantinflas.jpg";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";


export const Projects = () => {

    const projects = [
        {
          id: 1,
          title: "API Cocktail App",
          description: "Design & Development",
          imgUrl: projImg1,
          url:"https://cocktail-xi.vercel.app/"
        },
        {
          title: "API Pokedex App",
          description: "Design & Development",
          imgUrl: projImg2,
          url:"https://pokedex-8rtr-5nta60spo-jeisson-andres-rubios-projects.vercel.app/"
        },
        {
          title: "Calculator",
          description: "Design & Development",
          imgUrl: projImg3,
          url:"https://calculadora-full.vercel.app/"
        },
        {
          title: "Web Tributo Cantinflas",
          description: "Design & Development",
          imgUrl: projImg4,
          url:"https://web-tributo-olive.vercel.app/"
        },
        {
          title: "DuckHunt Game",
          description: "Design & Development",
          imgUrl: projImg5,
          url:"https://duckhunt-delta.vercel.app/"
        },
        
      ];

      const projectsTwo = [
        
      ]

    return (
      <Router>
                <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" >
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {projects.map((project, index) => {
                                        return (
                                            <ProjectCard key={index} {...project} />
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>

                            <Tab.Pane eventKey="second">
                                <Row>
                                    {projectsTwo.map((projectsTwo, index) => {
                                        return (
                                            
                                            <ProjectCard key={index} {...projectsTwo} />
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""/>
        </section>
      </Router>
    );
}