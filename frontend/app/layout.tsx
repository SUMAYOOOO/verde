import './globals.css';
import Link from 'next/link';
export const metadata = { title: 'SUMAYÕ' };
export default function RootLayout({ children }: any) {
  return (
    <html lang="es">
      <body>
        <header className="bg-white shadow p-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/"><img src="/assets/logo.svg" alt="logo" width="140"/></Link>
            <nav className="space-x-4">
              <Link href="/courses">Cursos</Link>
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/login" className="text-purple-600">Iniciar sesión</Link>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
