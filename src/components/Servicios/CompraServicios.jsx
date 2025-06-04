import React from 'react';
import { Container, Card, Form, Row, Col, InputGroup, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import modelocompra from '../../assets/modelocompra.jpg';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';

const MercedesSearchForm = () => {
  return (
    <>
      <Navbar />
      <Container className="px-0 my-0">
        {/* Sección Promocional con texto superpuesto directamente sobre la imagen */}
        <Card
          className="mb-4 border-0 p-0 overflow-hidden"
          style={{ height: '700px', position: 'relative', left: '-17.5rem', width: '100vw' }}
        >
          {/* Imagen de fondooooo  */}
          <Image
            src={modelocompra}
            alt="Vehículo premium de ocasión"
            className="w-100 h-100 object-fit-cover"
            style={{ position: 'absolute', top: 0, left: 0 }}
          />

          {/* Capa de superposición con texto */}
          <div
            className="position-absolute w-100 h-100 d-flex align-items-center"
            style={{
              background:
                'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
              padding: '3rem',
              zIndex: 2, // Asegura que esté sobre la imagen correspondiente
              top: 0,
              left: 0,
            }}
          >
            <div className="text-white" style={{ maxWidth: '600px' }}>
              <h1 className="mb-4" style={{ fontWeight: '600', fontSize: '2.5rem' }}>
                Nuestros vehículos premium de ocasión
              </h1>

              <ul className="list-unstyled mb-4" style={{ fontSize: '1.2rem' }}>
                <li className="mb-3 d-flex align-items-center">
                  <span className="me-2" style={{ fontSize: '1.5rem' }}>
                    ✓
                  </span>
                  <span>2 años de garantía [1]</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="me-2" style={{ fontSize: '1.5rem' }}>
                    ✓
                  </span>
                  <span>Vehículos matriculados en 2024</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="me-2" style={{ fontSize: '1.5rem' }}>
                    ✓
                  </span>
                  <span>Cargador gratis para híbridos y eléctricos.</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <span className="me-2" style={{ fontSize: '1.5rem' }}>
                    ✓
                  </span>
                  <span>Entrega inmediata</span>
                </li>
              </ul>

              <small className="text-white-50" style={{ fontSize: '0.9rem' }}>
                [1] Oferta sujeta a financiación con Zentauri Quead Services.
              </small>
            </div>
          </div>
        </Card>

        {/* Resto del formulario (se mantiene igual) */}
        <Card className="p-3 shadow-sm border-0 bg-light w-100">
          <h1
            className="text-center mb-0"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
            }}
          >
            Encuentra tu Zentauri Quead Certified de ocasión ahora
          </h1>
        </Card>

        {/* Subcontenedor Fusionado (2 y 3) */}
        <Card className="p-0 shadow-sm">
          <Row className="g-0">
            {' '}
            {/* g-0 elimina el espacio entre columnas */}
            {/* Sección principal (2/3) */}
            <Col lg={8} className="p-4">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Modelos</strong>
                    </Form.Label>
                    <InputGroup>
                      <Form.Select>
                        <option>Cualquiera</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Carrocería</strong>
                    </Form.Label>
                    <InputGroup>
                      <Form.Select>
                        <option>Cualquiera</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Kilometraje</strong>
                    </Form.Label>
                    <InputGroup>
                      <Form.Select>
                        <option>Cualquiera km</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Tipo de combustible</strong>
                    </Form.Label>
                    <InputGroup>
                      <Form.Select>
                        <option>Cualquiera</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Fecha de matriculación</strong>
                    </Form.Label>
                    <InputGroup>
                      <Form.Select>
                        <option>Cualquiera</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      <strong>Precio</strong>
                    </Form.Label>
                    <InputGroup>
                      <Form.Select>
                        <option>Cualquiera €</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            {/* Sección secundaria (1/3) - fusionada visualmente */}
            <Col lg={4} className="p-4 d-flex flex-column">
              <Form.Group className="mb-3">
                <Form.Label>
                  <strong>Ciudad</strong>
                </Form.Label>
                <InputGroup>
                  <Form.Select>
                    <option>Cualquiera</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  <strong>Radio</strong>
                </Form.Label>
                <InputGroup>
                  <Form.Select>
                    <option>Cualquiera</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>

              <div className="mt-auto d-flex flex-column gap-2">
                <Button variant="outline-primary" className="w-100">
                  Búsqueda detallada
                </Button>
                <Button variant="primary" className="w-100">
                  Mostrar 3.493 vehículos
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
        <Card className="mt-4 shadow-sm">
          <Card.Footer className="text-center bg-light">
            <small>Ubica nuestros concesionarios certificados</small>
          </Card.Footer>
        </Card>

        <div classname="map-section">
          <div classname="gmap-frame">
            <iframe
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av.%20Benavides%203900+(Zentauri%20Quead)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/collections/personal-trackers/">Personal GPS</a>
            </iframe>
          </div>
        </div>
      </Container>

      {/* Footer fuera del Container */}
      <Footer />
    </>
  );
};

export default MercedesSearchForm;
