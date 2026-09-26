
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
          <button 
            className="bg-(--primary) rounded-md px-4 py-2 text-sm font-medium hover:bg-(--primary-hover)"
          >
            Generate SQL
          </button>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)]">
        <aside className="w-64 shrink-0 border-r border-(--border) bg-(--surface) p-4">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-(--text-secondary)">
            Tables
          </h2>
          <div className="mt-6 rounded-lg border border-dashed border-(--border) p-4 text-center">
            <p className="text-sm font-medium">
              No tables yet
            </p>
            <p className="mt-2 text-sm text-(--text-secondary)">
              Create a table to start designing your schema.
            </p>
          </div>
        </aside>

        <section className="flex-1 p-6">
          <p className="text-(--text-secondary)">Schema canvas</p>
        </section>
      </div>
    </main>
  );
}
