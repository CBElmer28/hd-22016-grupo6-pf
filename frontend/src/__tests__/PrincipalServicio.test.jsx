import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Principal from '../components/Servicios/PrincipalServicio';
import { describe, it, expect, beforeEach, vi } from 'vitest';

describe('Componente PrincipalServicio', () => {
  const renderWithRouter = ui => render(<MemoryRouter>{ui}</MemoryRouter>);

  beforeEach(() => {
    global.HTMLMediaElement.prototype.play = vi.fn();
    global.HTMLMediaElement.prototype.pause = vi.fn();
  });

  it('debe mostrar el overlay de carga inicialmente', () => {
    renderWithRouter(<Principal />);
    expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();
  });

  it('debe renderizar las 4 cards de servicios', async () => {
    renderWithRouter(<Principal />);
    await waitFor(() => {
      const serviceCards = screen.getAllByTestId('service-card');
      expect(serviceCards).toHaveLength(4);
    });
  });

  it('debe renderizar el slider con 3 slides', async () => {
    renderWithRouter(<Principal />);
    await waitFor(() => {
      const slideButtons = screen.getAllByRole('button', { name: /Ir al slide/i });
      expect(slideButtons).toHaveLength(3);
    });
  });

  it('debe cambiar de slide al hacer clic en los indicadores', async () => {
    renderWithRouter(<Principal />);
    await waitFor(() => {
      const slideIndicators = screen.getAllByRole('button', { name: /Ir al slide/i });
      fireEvent.click(slideIndicators[1]);
      expect(slideIndicators[1].className).toContain('bg-primary');
    });
  });

  it('debe navegar entre slides con los botones de anterior/siguiente', async () => {
    renderWithRouter(<Principal />);
    const prevButton = screen.getByText(/Anterior/i);
    const nextButton = screen.getByText(/Siguiente/i);
    const slideTitles = screen.getAllByRole('heading', { level: 3 });

    expect(slideTitles[0]).toBeInTheDocument();

    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(slideTitles[1]).toBeInTheDocument();
    });

    fireEvent.click(prevButton);
    await waitFor(() => {
      expect(slideTitles[0]).toBeInTheDocument();
    });
  });

  it('debe renderizar el Navbar y el Footer', async () => {
    renderWithRouter(<Principal />);
    await waitFor(() => {
      expect(screen.getByRole('navigation')).toBeInTheDocument();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });
  });
});
