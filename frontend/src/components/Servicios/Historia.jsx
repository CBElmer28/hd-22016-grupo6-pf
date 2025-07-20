import React from 'react';
import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import historiaBackground from '../../assets/fondohistoria.png';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';
import logo from '../../assets/logo2.png'; // Asegúrate de importar tu logo

const Historia = () => {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <Container fluid className="px-0">
        {/* Sección con imagen de fondo y texto superpuesto */}
        <Card
          className="mb-4 border-0 p-0 overflow-hidden"
          style={{
            height: '700px',
            position: 'relative',
            width: '100%',
            backgroundColor: '#000',
          }}
        >
          <Image
            src={historiaBackground}
            alt="Historia de Zentauri Quead"
            className="w-100 h-100 object-fit-cover"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: 0.5,
            }}
          />

          <div
            className="position-absolute w-100 h-100 d-flex align-items-center"
            style={{
              background:
                'linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
              padding: '3rem',
              zIndex: 2,
              top: 0,
              left: 0,
            }}
          >
            <div className="text-white" style={{ maxWidth: '600px' }}>
              <h1 className="mb-4 display-3 fw-bold">Historia de Zentauri Quead</h1>
              <p className="mb-4 fs-5 text-light">
                Descubra los grandes momentos que definieron nuestra trayectoria en la industria
                automotriz.
              </p>
            </div>
          </div>
        </Card>

        {/* Sección de contenido histórico */}
        <Container className="my-5 py-4">
          <Row className="justify-content-center">
            <Col lg={8} className="border-start border-3 border-primary ps-4">
              {/* Sección 1: Nacimiento de la marca */}
              <section className="mb-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="bg-primary rounded-circle me-3"
                    style={{ width: '12px', height: '12px' }}
                  ></div>
                  <h2 className="mb-0 fw-bold text-primary">Nacimiento de la marca</h2>
                </div>
                <p className="mb-4 fs-5 text-light">
                  La historia de Zentauri Quead comenzó hace más de medio siglo, revolucionando el
                  concepto de movilidad premium en Sudamérica. Nuestros fundadores, Alejandro
                  Zentauri y Marcus Quead, visionarios de la industria, establecieron los estándares
                  de excelencia que nos definen hoy.
                </p>
                <p className="mb-4 fs-5 text-light">
                  El espíritu innovador de nuestros fundadores nos llevó a lograr hitos importantes
                  como la introducción del primer sistema de seguridad integrado en la región y el
                  desarrollo de tecnologías pioneras en eficiencia de combustible.
                </p>
                <p className="fs-5 text-light">
                  En 1975, Zentauri Quead firmó un acuerdo histórico con fabricantes europeos que
                  permitió traer tecnología de punta al mercado local, marcando el comienzo de una
                  nueva era en la automoción sudamericana.
                </p>
              </section>

              {/* Sección 2: Expansión y crecimiento */}
              <section className="mb-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="bg-primary rounded-circle me-3"
                    style={{ width: '12px', height: '12px' }}
                  ></div>
                  <h2 className="mb-0 fw-bold text-primary">Expansión y crecimiento</h2>
                </div>
                <p className="mb-4 fs-5 text-light">
                  En la década de 1980, Zentauri Quead expandió sus operaciones a lo largo del
                  continente, estableciendo centros de distribución y servicio en seis países.
                  Nuestro compromiso con la calidad y la satisfacción del cliente nos posicionó como
                  líderes en el segmento premium.
                </p>
                <p className="fs-5 text-light">
                  El lanzamiento de nuestra línea de vehículos certificados en 1992 estableció un
                  nuevo paradigma en el mercado de autos usados, ofreciendo garantías extendidas y
                  rigurosos procesos de inspección que se convirtieron en referencia de la
                  industria.
                </p>
              </section>

              {/* Sección 3: Innovación y futuro */}
              <section className="mb-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="bg-primary rounded-circle me-3"
                    style={{ width: '12px', height: '12px' }}
                  ></div>
                  <h2 className="mb-0 fw-bold text-primary">Innovación y futuro</h2>
                </div>
                <p className="mb-4 fs-5 text-light">
                  En el nuevo milenio, Zentauri Quead abrazó la movilidad sostenible, siendo
                  pioneros en la introducción de vehículos híbridos y eléctricos en la región.
                  Nuestro centro de innovación, establecido en 2010, continúa desarrollando
                  soluciones para la movilidad del futuro.
                </p>
                <p className="fs-5 text-light">
                  Hoy, con más de 50 concesionarios en 12 países, mantenemos nuestro compromiso con
                  la excelencia, ofreciendo experiencias de movilidad que combinan tradición e
                  innovación, siempre con el sello de calidad Zentauri Quead.
                </p>
              </section>

              {/* Sección del logo */}
              <section className="mb-5">
                <div className="d-flex align-items-center mb-4">
                  <div
                    className="bg-primary rounded-circle me-3"
                    style={{ width: '12px', height: '12px' }}
                  ></div>
                  <h2 className="mb-0 fw-bold text-primary">Nuestro símbolo</h2>
                </div>
                <div className="d-flex flex-column flex-md-row align-items-center">
                  <div className="me-md-5 mb-4 mb-md-0">
                    <div
                      className="p-4 rounded"
                      style={{
                        width: '250px',
                        height: '250px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#1a1a1a',
                        border: '1px solid #333',
                      }}
                    >
                      {/* Logo de Zentauri Quead */}
                      <Image
                        src={logo}
                        alt="Logo Zentauri Quead"
                        fluid
                        style={{ maxWidth: '100%', maxHeight: '100%' }}
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fs-5 text-light">
                      El símbolo de Zentauri Quead representa nuestra dualidad fundacional: el
                      círculo azul simboliza la excelencia tecnológica de Zentauri, mientras que el
                      caballo plateado representa la pasión por la movilidad de Quead.
                    </p>
                    <p className="fs-5 text-light">
                      Adoptado en 1982, nuestro logo ha evolucionado manteniendo su esencia. La
                      versión actual, diseñada en 2015, refleja nuestro compromiso con un futuro
                      sostenible sin perder de vista nuestras raíces.
                    </p>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>

        {/* Sección de museo/innovación */}
        <Card className="border-0 bg-dark py-5" style={{ backgroundColor: '#0a0a0a' }}>
          <Container>
            <Row className="g-4">
              <Col md={4}>
                <div
                  className="text-center p-4 h-100"
                  style={{ backgroundColor: '#1a1a1a', borderRadius: '10px' }}
                >
                  <h3 className="mb-3 fw-bold text-primary">Museo</h3>
                  <p className="fs-5 text-light">
                    Visite nuestro museo virtual y explore la historia de Zentauri Quead a través de
                    piezas icónicas.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div
                  className="text-center p-4 h-100"
                  style={{ backgroundColor: '#1a1a1a', borderRadius: '10px' }}
                >
                  <h3 className="mb-3 fw-bold text-primary">Innovación</h3>
                  <p className="fs-5 text-light">
                    A favor de la movilidad sin accidentes y sin emisiones.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div
                  className="text-center p-4 h-100"
                  style={{ backgroundColor: '#1a1a1a', borderRadius: '10px' }}
                >
                  <h3 className="mb-3 fw-bold text-primary">Diseño</h3>
                  <p className="fs-5 text-light">
                    Damos forma al lenguaje del automóvil del futuro.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Card>
      </Container>

      <Footer />
    </div>
  );
};

export default Historia;
