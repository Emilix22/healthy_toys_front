import { useState } from 'react';

function CalcularEnvio() {
  const [codigoPostal, setCodigoPostal] = useState('');
  const [costoEnvio, setCostoEnvio] = useState(null);
  const [error, setError] = useState('');

  const handleCalcular = async () => {
    try {
      const response = await fetch('http://localhost:3000/mercadoPago/calcular_envio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          zip_code: codigoPostal,
          peso: 6000,  // gramos
          ancho: 90,   // centímetros
          alto: 10,
          largo: 90,
          precio: 160000  // precio del producto en pesos argentinos
        })
      });

      const data = await response.json();

      if (data.costoEnvio !== undefined) {
        setCostoEnvio(data.costoEnvio);
        setError('');
      } else {
        setError('No se pudo calcular el costo de envío.');
      }
    } catch (error) {
      console.error(error);
      setError('Error consultando el envío.');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '20px' }}>
      <h3>📦 Calculá tu envío</h3>
      <input
        type="text"
        placeholder="Código Postal"
        value={codigoPostal}
        onChange={(e) => setCodigoPostal(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={handleCalcular}>Calcular Envío</button>

      {costoEnvio !== null && (
        <div style={{ marginTop: '10px' }}>
          ✈️ <strong>Costo de envío:</strong> ${costoEnvio}
        </div>
      )}

      {error && (
        <div style={{ marginTop: '10px', color: 'red' }}>
          ⚠️ {error}
        </div>
      )}
    </div>
  );
}

export default CalcularEnvio;
