export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">LATRAMVIP</h1>
        <p className="mt-2 text-lg">
          Comunidad de entretenimiento digital con beneficios exclusivos
        </p>
        <a
          href="https://stake.com/?c=LATRAMVIP"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-green-500 text-black px-6 py-3 rounded-lg font-semibold"
        >
          ACCEDER A BENEFICIOS
        </a>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-6 py-10">
        <div>
          <div className="text-3xl">🎁</div>
          <p className="mt-2">Bonos de bienvenida</p>
        </div>
        <div>
          <div className="text-3xl">💰</div>
          <p className="mt-2">Recompensas instantáneas</p>
        </div>
        <div>
          <div className="text-3xl">🎲</div>
          <p className="mt-2">Comunidad privada</p>
        </div>
      </section>

      <section className="px-6 py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Cómo funciona?</h2>
        <ol className="space-y-4">
          <li>1. Aptate en la comunidad</li>
          <li>2. Activá tu código LATRAMVIP</li>
          <li>3. Disfrutá recompensas instantáneas</li>
        </ol>
      </section>

      <footer className="text-center text-sm text-gray-400 py-6 px-4">
        Contenido para mayores de 21 años. Promovemos entretenimiento responsable.
        <br />
        CUIT: 20-XXXXXXXX-X | Domicilio: San Francisco, Córdoba, Argentina
      </footer>
    </main>
  );
}