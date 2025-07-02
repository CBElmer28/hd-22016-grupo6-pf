import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SobreNosotros from '../components/Servicios/SobreNosotros';
import { describe, it, expect } from 'vitest';

describe('Componente SobreNosotros', () => {
  const renderWithRouter = ui => render(<MemoryRouter>{ui}</MemoryRouter>);

  it('debe mostrar el título de bienvenida', () => {
    renderWithRouter(<SobreNosotros />);
    expect(screen.getByText(/bienvenido a zentauri quead/i)).toBeInTheDocument();
  });

  it('debe mostrar la sección de misión', () => {
    renderWithRouter(<SobreNosotros />);
    expect(screen.getByText(/nuestra misión/i)).toBeInTheDocument();
  });

  it('debe mostrar la sección de visión', () => {
    renderWithRouter(<SobreNosotros />);
    expect(screen.getByText(/nuestra visión/i)).toBeInTheDocument();
  });
});
