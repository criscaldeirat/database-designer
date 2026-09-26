
export default function Home() {
  return (
    <main className="min-h-screen bg-(--background) text-(--text-primary)">
      <header
        className="flex h-16 items-center justify-between border-b border-(--border) bg-(--surface) px-6"
      >
        {/* Nome da aplicacao */}
        <div>
          <h1 className="text-lg font-semibold">DataBase Designer</h1>
        </div>
        {/* Botoes para criacao */}
        <div>
          <button 
            className="rounded-md border border-(--border) bg-(--surface) px-4 py-2 text-sm font-medium text-(--text-primary)"
          >
            New Table
          </button>
          <button className="bg-(--primary) rounded-md px-4 py-2 text-sm font-medium hover:bg-(--primary-hover)">Generate SQL</button>
        </div>
      </header>

      <div className="flex">
        <aside>

        </aside>

        <section>

        </section>
      </div>
    </main>
  );
}
