import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';

const Cotizar = () => {
    return (
        <>
            <Navbar />
            <div className="py-6"></div>
            <Container className="my-5">
                <Card className="shadow-sm p-4 mb-5">
                    <h2 className="text-2xl font-bold mb-4">Cotizar aquí</h2>
                    <p className="text-gray-600 mb-4">
                        Completa tus datos para recibir una cotización personalizada de tu Mercedes-Benz.
                    </p>

                    <Form>
                        {/* Datos personales */}
                        <div className="row mb-4">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <Form.Group controlId="formNombre">
                                    <Form.Label>Nombre completo*</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa tu nombre" required />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="formDNI">
                                    <Form.Label>DNI*</Form.Label>
                                    <Form.Control type="text" placeholder="Ingresa tu DNI" required />
                                </Form.Group>
                            </div>
                        </div>

                        {/* Datos de contacto */}
                        <div className="row mb-4">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <Form.Group controlId="formTelefono">
                                    <Form.Label>Teléfono*</Form.Label>
                                    <Form.Control type="tel" placeholder="Ej: 999888777" required />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Correo electrónico*</Form.Label>
                                    <Form.Control type="email" placeholder="tucorreo@ejemplo.com" required />
                                </Form.Group>
                            </div>
                        </div>

                        {/* Datos del vehículo */}
                        <h4 className="mb-3">Datos de tu vehículo</h4>
                        <div className="row mb-4">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <Form.Group controlId="formModelo">
                                    <Form.Label>Modelo*</Form.Label>
                                    <Form.Select required>
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
                                    <Form.Label>Año*</Form.Label>
                                    <Form.Select required>
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
                            <Form.Label>Servicio que necesitas*</Form.Label>
                            <Form.Select required>
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
                            <Form.Label>Comentarios adicionales</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Describe cualquier detalle adicional..." />
                        </Form.Group>

                        {/* Botón de envío */}
                        <div className="d-grid">
                            <Button variant="primary" type="submit" size="lg">
                                Solicitar cotización
                            </Button>
                        </div>
                    </Form>
                </Card>
              
            </Container>
            <Footer />
        </>
    );
};

export default Cotizar;