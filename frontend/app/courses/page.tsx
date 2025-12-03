import Link from 'next/link';
export default function Courses() {
  const courses = [{ id: 'c1', title: 'Introducción a SUMAYÕ', slug: 'introduccion-sumayo' }];
  return (
    <div>
      <h1 className="text-2xl font-bold">Cursos</h1>
      <div className="mt-4 space-y-3">
        {courses.map(c => <Link key={c.id} href={`/courses/${c.slug}`} className="block p-4 border rounded">{c.title}</Link>)}
      </div>
    </div>
  );
}
