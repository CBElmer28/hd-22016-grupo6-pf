import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import headerImage from '../../assets/mercedes-dentro.jpg';
import imagenRecorrido from '../../assets/primeraimg.jpg';
import imagenServicio from '../../assets/segundaimg.jpg';
import imagenConcesionarios from '../../assets/terceraimg.jpg';
import imagenManuales from '../../assets/cuartaimg.jpg';
import imagenEmail from '../../assets/email-contacto.jpg';
import imagenAsistencia from '../../assets/asistencia-mercedes.jpg';
import imagenChat from '../../assets/chat-mercedes.jpg';
import imagenPreguntas from '../../assets/preguntas-mercedes.jpg';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';

const TemasEstrella = () => {
  return (
    <>
      <Navbar />
      <div className="font-sans bg-gray-50">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] md:h-[920px] overflow-hidden">
          <img
            src={headerImage}
            alt="Mercedes-Benz"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contacto.</h1>
            <p className="text-xl md:text-2xl text-white">Ponte en contacto con Mercedes-Benz</p>
          </div>
        </div>

        <div className="py-6"></div>

        {/* Contenido principal */}
        <Container>
          <div className="mb-5">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Temas estrella</h1>
            <hr className="mb-5" />

            {/* Fila con las 3 cartas */}
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
              {/* Recorrido de prueba */}
              <div className="col">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={imagenRecorrido} alt="Recorrido de prueba" />
                  <Card.Body>
                    <Card.Title>Recorrido de prueba</Card.Title>
                    <Card.Text>
                      ¿Has encontrado el coche de tus sueños y quieres probarlo?
                    </Card.Text>
                    <Button variant="primary" className="w-100">
                      Reservar
                    </Button>
                  </Card.Body>
                </Card>
              </div>

              {/* Cita de servicio */}
              <div className="col">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={imagenServicio} alt="Cita de servicio" />
                  <Card.Body>
                    <Card.Title>Cita de servicio</Card.Title>
                    <Card.Text>
                      Desde la inspección hasta el cambio de neumáticos: reserva tu cita.
                    </Card.Text>
                    <Button variant="primary" className="w-100">
                      Agendar cita
                    </Button>
                  </Card.Body>
                </Card>
              </div>

              {/* Concesionarios */}
              <div className="col">
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={imagenConcesionarios} alt="Concesionarios" />
                  <Card.Body>
                    <Card.Title>Concesionarios</Card.Title>
                    <Card.Text>Encuentra tu concesionario Mercedes-Benz más cercano.</Card.Text>
                    <Button variant="primary" className="w-100">
                      Buscar
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>

            {/* Sección Manuales */}
            <Card className="shadow-sm mb-5">
              <div className="row g-0">
                <div className="col-md-4">
                  <Card.Img
                    src={imagenManuales}
                    alt="Manuales"
                    className="h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-8">
                  <Card.Body className="p-4">
                    <Card.Title>Manuales de instrucciones</Card.Title>
                    <Card.Text>
                      Accede al manual completo de tu vehículo Mercedes-Benz en formato digital o
                      descargado en PDF.
                    </Card.Text>
                    <div className="d-flex gap-3">
                      <Button variant="primary">Ver manual online</Button>
                      <Button variant="outline-primary">Descargar PDF</Button>
                    </div>
                  </Card.Body>
                </div>
              </div>
            </Card>

            {/* Nueva sección: Ayuda y contacto */}
            <div className="mb-5">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Ayuda y contacto</h1>
              <hr className="mb-5" />

              {/* Grid 2x2 */}
              <div className="row row-cols-1 row-cols-md-2 g-4">
                {/* Fila 1 - Columna 1: Email */}
                <div className="col">
                  <Card className="h-100 shadow-sm">
                    <div className="row g-0 h-100">
                      <div className="col-md-4">
                        <Card.Img
                          src={imagenEmail}
                          alt="Contacto por email"
                          className="h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-md-8">
                        <Card.Body className="p-4">
                          <Card.Title className="text-xl font-semibold">E-Mail</Card.Title>
                          <Card.Text>
                            ¿Prefieres escribirnos? No dudes en ponerte en contacto con nosotros en
                            cualquier momento a través de nuestro formulario de contacto.
                          </Card.Text>
                          <Button variant="primary">Contactar por email</Button>
                        </Card.Body>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Fila 1 - Columna 2: Asistencia */}
                <div className="col">
                  <Card className="h-100 shadow-sm">
                    <div className="row g-0 h-100">
                      <div className="col-md-4">
                        <Card.Img
                          src={imagenAsistencia}
                          alt="Asistencia Mercedes"
                          className="h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-md-8">
                        <Card.Body className="p-4">
                          <Card.Title className="text-xl font-semibold">Asistencia</Card.Title>
                          <Card.Text>
                            Puedes contactarnos llamando al: <strong>(01) 512-9827</strong> o
                            escribiendo a: <strong>ayudazentauriqead@gmail.com</strong>.
                          </Card.Text>
                          <div className="d-flex gap-2">
                            <Button variant="primary">Llamar ahora</Button>
                            <Button variant="outline-primary">Enviar email</Button>
                          </div>
                        </Card.Body>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Fila 2 - Columna 1: Chat */}
                <div className="col">
                  <Card className="h-100 shadow-sm">
                    <div className="row g-0 h-100">
                      <div className="col-md-4">
                        <Card.Img
                          src={imagenChat}
                          alt="Chat Mercedes"
                          className="h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-md-8">
                        <Card.Body className="p-4">
                          <Card.Title className="text-xl font-semibold">Chat</Card.Title>
                          <Card.Text>
                            También puedes chatear con nosotros haciendo clic en el icono de chat
                            situado en la esquina inferior derecha.
                          </Card.Text>
                          <Button variant="primary">Iniciar chat</Button>
                        </Card.Body>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Fila 2 - Columna 2: Preguntas */}
                <div className="col">
                  <Card className="h-100 shadow-sm">
                    <div className="row g-0 h-100">
                      <div className="col-md-4">
                        <Card.Img
                          src={imagenPreguntas}
                          alt="Preguntas Mercedes"
                          className="h-100"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className="col-md-8">
                        <Card.Body className="p-4">
                          <Card.Title className="text-xl font-semibold">Mercedes-Benz</Card.Title>
                          <Card.Text>
                            ¿Tienes alguna pregunta sobre Mercedes-Benz? Estaremos encantados de
                            ayudarte.
                          </Card.Text>
                          <Button variant="primary">Más información</Button>
                        </Card.Body>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default TemasEstrella;
