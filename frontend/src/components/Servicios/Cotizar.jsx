import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';
import mercedesBackground from '../../assets/mercedes-bg.jpg';

const Cotizar = () => {
    return (
        <>
            <Navbar />
            <div className="py-6"></div>

            {/* Contenedor principal con imagen de fondo SIN difuminado */}
            <div style={{
                backgroundImage: `url(${mercedesBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: 'calc(100vh - 200px)',
                padding: '50px 0',
                position: 'relative'
            }}>
                {/* Capa oscura semitransparente más suave */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.15)',
                    zIndex: 1
                }}></div>
                
                <Container className="my-5" style={{ position: 'relative', zIndex: 2 }}>
                    <Card className="shadow-lg p-4 mb-5" style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.82)',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                        maxWidth: '800px',
                        marginLeft: '0',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '8px'
                    }}>
                        <h2 className="text-2xl font-bold mb-4" style={{ color: '#222' }}>Cotizar aquí</h2>
                        <p className="mb-4" style={{ color: '#444' }}>
                            Completa tus datos para recibir una cotización personalizada de tu Mercedes-Benz.
                        </p>

                        <Form>
                            {/* Datos personales */}
                            <div className="row mb-4">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <Form.Group controlId="formNombre">
                                        <Form.Label style={{ color: '#333', fontWeight: '500' }}>Nombre completo*</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Ingresa tu nombre" 
                                            required 
                                            style={{ 
                                                borderRadius: '4px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.7)'
                                            }}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group controlId="formDNI">
                                        <Form.Label style={{ color: '#333', fontWeight: '500' }}>DNI*</Form.Label>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Ingresa tu DNI" 
                                            required 
                                            style={{ 
                                                borderRadius: '4px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.7)'
                                            }}
                                        />
                                    </Form.Group>
                                </div>
                            </div>

                            {/* Datos de contacto */}
                            <div className="row mb-4">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <Form.Group controlId="formTelefono">
                                        <Form.Label style={{ color: '#333', fontWeight: '500' }}>Teléfono*</Form.Label>
                                        <Form.Control 
                                            type="tel" 
                                            placeholder="Ej: 999888777" 
                                            required 
                                            style={{ 
                                                borderRadius: '4px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.7)'
                                            }}
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group controlId="formEmail">
                                        <Form.Label style={{ color: '#333', fontWeight: '500' }}>Correo electrónico*</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            placeholder="tucorreo@ejemplo.com" 
                                            required 
                                            style={{ 
                                                borderRadius: '4px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.7)'
                                            }}
                                        />
                                    </Form.Group>
                                </div>
                            </div>

                            {/* Datos del vehículo */}
                            <h4 className="mb-3" style={{ color: '#222' }}>Datos de tu vehículo</h4>
                            <div className="row mb-4">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <Form.Group controlId="formModelo">
                                        <Form.Label style={{ color: '#333', fontWeight: '500' }}>Modelo*</Form.Label>
                                        <Form.Select 
                                            required 
                                            style={{ 
                                                borderRadius: '4px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.7)'
                                            }}
                                        >
                                            <option value="">Selecciona tu modelo</option>
                                            <option>Clase A</option>
                                            <option>Clase C</option>
                                            <option>Clase E</option>
                                            <option>GLC</option>
                                            <option>GLE</option>
                                            <option>Otro</option>
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                                <div className="col-md-6">
                                    <Form.Group controlId="formAnio">
                                        <Form.Label style={{ color: '#333', fontWeight: '500' }}>Año*</Form.Label>
                                        <Form.Select 
                                            required 
                                            style={{ 
                                                borderRadius: '4px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.7)'
                                            }}
                                        >
                                            <option value="">Selecciona el año</option>
                                            {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                                                <option key={year}>{year}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </div>
                            </div>

                            {/* Servicio requerido */}
                            <Form.Group className="mb-4" controlId="formServicio">
                                <Form.Label style={{ color: '#333', fontWeight: '500' }}>Servicio que necesitas*</Form.Label>
                                <Form.Select 
                                    required 
                                    style={{ 
                                        borderRadius: '4px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.7)'
                                    }}
                                >
                                    <option value="">Selecciona un servicio</option>
                                    <option>Mantenimiento programado</option>
                                    <option>Reparación mecánica</option>
                                    <option>Reparación eléctrica</option>
                                    <option>Revisión general</option>
                                    <option>Diagnóstico</option>
                                </Form.Select>
                            </Form.Group>

                            {/* Comentarios adicionales */}
                            <Form.Group className="mb-4" controlId="formComentarios">
                                <Form.Label style={{ color: '#333', fontWeight: '500' }}>Comentarios adicionales</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={3} 
                                    placeholder="Describe cualquier detalle adicional..." 
                                    style={{ 
                                        borderRadius: '4px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.7)'
                                    }}
                                />
                            </Form.Group>

                            {/* Botón de envío */}
                            <div className="d-grid">
                                <Button 
                                    variant="primary" 
                                    type="submit" 
                                    size="lg"
                                    style={{
                                        backgroundColor: '#0078D7',
                                        border: 'none',
                                        borderRadius: '4px',
                                        padding: '12px',
                                        fontWeight: '600',
                                        marginTop: '10px'
                                    }}
                                >
                                    Reserva tu cita aquí
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Cotizar;