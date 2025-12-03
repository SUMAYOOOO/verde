import Link from 'next/link';
export default function CoursePage({ params }: any) {
  const topics = [{ id: 't1', title: 'Fundamentos', isFree: true }, { id: 't2', title: 'Tema Premium', isFree: false }];
  const slug = params.slug;
  return (
    <div>
      <h1 className="text-2xl font-bold">Curso: {slug}</h1>
      <div className="mt-4 space-y-2">
        {topics.map(t => (
          <div key={t.id} className="p-3 border rounded flex justify-between items-center">
            <div>
              <div className="font-semibold">{t.title}</div>
              <div className="text-sm text-gray-500">{t.isFree ? 'Gratis' : 'Pago'}</div>
            </div>
            <Link href={`/courses/${slug}/topics/${t.id}`} className="text-purple-600">Ver</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
