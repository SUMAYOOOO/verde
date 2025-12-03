'use client';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const router = useRouter();
  const handle = async () => {
    try {
      const res = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.accessToken);
      router.push('/dashboard');
    } catch(e) { alert('Login failed'); }
  };
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Iniciar sesión</h2>
      <input className="w-full p-2 border mt-4" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="w-full p-2 border mt-2" placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button onClick={handle} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">Entrar</button>
    </div>
  );
}
