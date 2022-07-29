import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      const tick = () => {
        const toRotate = ['Web Developer', 'Web Designer', 'UI/UX Designer'];
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updateText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && updateText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
        }
      };
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi i'm webdecoded `}
                    <span className="wrap">{text}</span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ea et quas, corrupti vero blanditiis dignissimos impedit
                      necessitatibus voluptatum natus laborum, accusamus error
                      aliquid veniam quam, nisi inventore eaque ullam molestias.
                    </p>
                    <button onClick={() => console.log('connect')}>
                      Let's connect
                      <ArrowRightCircle size={25} />
                    </button>
                  </h1>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
