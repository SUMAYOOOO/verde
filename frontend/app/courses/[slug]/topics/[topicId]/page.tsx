'use client';
import axios from 'axios';
export default function Topic({ params }: any) {
  const { slug, topicId } = params;
  const handlePay = async () => {
    try {
      const res = await axios.post('/api/payments/checkout', { topicId, successUrl: window.location.href, cancelUrl: window.location.href });
      if (res.data.url) window.location.href = res.data.url;
    } catch(e) { alert('Error'); }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold">Tema {topicId}</h1>
      <div className="mt-4">
        <p>Contenido del tema...</p>
        <button onClick={handlePay} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">Comprar (USD 9.99)</button>
      </div>
    </div>
  );
}
