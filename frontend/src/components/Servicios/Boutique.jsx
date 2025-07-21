import React from 'react';
import { Container, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../General/Navbar';
import Footer from '../General/Footer';
import BoutiqueBackground from '../../assets/banner-boutique.jpg';
import Boutique1 from '../../assets/mercedesjulio1.jpg';
import Boutique2 from '../../assets/billetera.jpg';
import Boutique3 from '../../assets/carros.jpg';

const BoutiquePage = () => {
    const products = [
        {
            id: 1,
            name: 'Colección Limitada 2023',
            description: 'Artículos exclusivos de la nueva colección',
            price: 'Desde S/. 250',
            imageUrl: Boutique1,
        },
        {
            id: 2,
            name: 'Billetera Modelo Clásico',
            description: 'Edición especial del modelo emblemático',
            price: 'Desde S/. 350',
            imageUrl: Boutique2,
        },
        {
            id: 3,
            name: 'Accesorios Deportivos',
            description: 'Diseños inspirados en la línea AMG',
            price: 'Desde S/. 180',
            imageUrl: Boutique3,
        },
    ];

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />

            {/* Hero Banner - Ahora con Container fluid y sin padding lateral */}
            <Container fluid className="px-0">
                <Card
                    className="mb-4 border-0 p-0 overflow-hidden"
                    style={{
                        height: '500px',
                        position: 'relative',
                        width: '100%',
                        backgroundColor: '#000',
                    }}
                >
                    <Image
                        src={BoutiqueBackground}
                        alt="Mercedes-Benz Boutique"
                        className="w-100 h-100 object-fit-cover"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: 0.7,
                        }}
                    />

                    <div
                        className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center"
                        style={{
                            background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
                            zIndex: 2,
                        }}
                    >
                        <div className="text-center text-white px-4" style={{ maxWidth: '800px' }}>
                            <h1 className="display-4 fw-bold mb-4">Mercedes-Benz Boutique</h1>
                            <p className="fs-4">
                                Descubre nuestra exclusiva colección de accesorios y artículos de lujo
                            </p>
                        </div>
                    </div>
                </Card>
            </Container>

            {/* Contenido principal con márgenes normales */}
            <Container className="my-5">
                {/* Colecciones destacadas */}
                <section className="mb-5">
                    <h2 className="text-center mb-5 display-5 fw-bold">Colecciones Destacadas</h2>
                    <div className="row g-4">
                        {products.map((product) => (
                            <div key={product.id} className="col-md-4">
                                <Card className="h-100 border-0 bg-dark text-white" style={{ backgroundColor: '#1a1a1a' }}>
                                    <div style={{ height: '250px', overflow: 'hidden' }}>
                                        <Card.Img
                                            variant="top"
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="h-100 object-fit-cover"
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="fs-4 fw-bold">{product.name}</Card.Title>
                                        <Card.Text className="text-muted">{product.description}</Card.Text>
                                        <div className="d-flex justify-content-between align-items-center mt-3">
                                            <span className="fs-5 fw-bold">{product.price}</span>
                                            <button className="btn btn-light">
                                                Ver detalles
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Beneficios */}
                <section className="mb-5 py-4">
                    <h2 className="text-center mb-5 display-5 fw-bold">Beneficios Exclusivos</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="text-center p-4 h-100 border border-secondary rounded" style={{ backgroundColor: '#1a1a1a' }}>
                                <div className="fs-1 mb-3">🚚</div>
                                <h3 className="fw-bold mb-3">Envío Gratis</h3>
                                <p className="text-white">Para compras mayores a S/. 500</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center p-4 h-100 border border-secondary rounded" style={{ backgroundColor: '#1a1a1a' }}>
                                <div className="fs-1 mb-3">🎁</div>
                                <h3 className="fw-bold mb-3">Embalaje de Regalo</h3>
                                <p className="text-white">Presentación premium para tus compras</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center p-4 h-100 border border-secondary rounded" style={{ backgroundColor: '#1a1a1a' }}>
                                <div className="fs-1 mb-3">⭐</div>
                                <h3 className="fw-bold mb-3">Productos Exclusivos</h3>
                                <p className="text-white">Solo disponibles para clientes Mercedes-Benz</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="py-5 mb-4 rounded" style={{ backgroundColor: '#1a1a1a' }}>
                    <div className="text-center px-3" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 className="display-6 fw-bold mb-3">Mantente Informado</h2>
                        <p className="fs-5 text-white mb-4">
                            Suscríbete para recibir novedades sobre nuestros lanzamientos
                        </p>
                        <form className="row g-2 justify-content-center">
                            <div className="col-md-8">
                                <input
                                    type="email"
                                    className="form-control form-control-lg bg-dark text-white border-secondary"
                                    placeholder="Ingresa tu correo electrónico"
                                />
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-light btn-lg w-100" type="submit">
                                    Suscribirse
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </Container>

            <Footer />
        </div>
    );
};

export default BoutiquePage;