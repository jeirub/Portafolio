import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import logo from "../assets/img/DSC_5978 Yeison Rubio.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Frontend Developer", "Web Designer", "Freelancer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }


  return (
    <section className="banner" id="home">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <br></br>
        <br></br>
        <br></br>
      </div>
      <Container>
        
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenidos a mi portafolio</span>
            <h1>
              {`Hola, Soy Jeisson `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
            Soy un estudiante de último semestre en Ingeniería de Sistemas,
            especializado en el desarrollo frontend. Mi habilidad para trabajar
            con tecnologías como JavaScript, HTML, CSS, Python, React, Git, y GitHub
            se ha reflejado en proyectos académicos. Mi fascinación por la tecnología
            y el desarrollo de software me ha llevado a capacitarme cada dia. 
            he superado desafíos técnicos y estoy comprometido a seguir aprendiendo y
            creciendo como desarrollador. 
            Mi visión es contribuir al futuro del desarrollo de software, aprovechando
            mis habilidades y manteniéndome al tanto de las últimas tendencias en el campo.
            </p>
            <button onClick={() => console.log("connect")}>
              Let’s connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};
