export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      {/* Frase de propósito */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">
          Construyo micro‑SaaS en público, empezando desde cero y sin saber programar.
        </h1>
        <p className="mt-3 text-gray-600">
          Documento cada paso (errores incluidos) y priorizo validar antes de construir.
        </p>
      </section>

      {/* 3 problemas */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold">Problemas que voy a explorar primero</h2>
        <ul className="mt-4 space-y-3 list-disc pl-6">
          <li><strong>Descubrimiento de ideas:</strong> recopilar y ordenar búsquedas reales sobre ideas de SaaS.</li>
          <li><strong>Validación rápida:</strong> medir interés con páginas “fake-door” y métricas simples.</li>
          <li><strong>Automatización mínima:</strong> micro‑herramientas que ahorren tiempo a creadores solitarios.</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <a
          href="https://x.com/bypivi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded bg-black px-5 py-3 text-white text-sm font-medium hover:bg-gray-900"
        >
          Seguir el proceso en X.com (@bypivi)
        </a>
      </section>
    </main>
  );
}
