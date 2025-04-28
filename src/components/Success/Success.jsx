import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirige al home después de 5 segundos
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>🎉 ¡Gracias por tu compra!</h1>
      <p>Tu pago fue aprobado correctamente.</p>
      <p>Estamos preparando tu envío 🚚.</p>
      <p>Serás redirigido a la página principal en unos segundos...</p>
    </div>
  );
}

export default Success;
