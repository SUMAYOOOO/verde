import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">SUMAYÕ</h1>
      <p className="mt-4">Plataforma educativa MVP</p>
      <Link href="/courses" className="text-purple-600">Ver cursos</Link>
    </div>
  );
}
