export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">Gift For You</h1>
      <p className="mt-4 text-muted-foreground">Create personalized gift pages</p>
      <div className="mt-8 flex gap-4">
        <a href="/templates" className="px-6 py-3 bg-black text-white rounded-lg">Browse Templates</a>
        <a href="/dashboard" className="px-6 py-3 border rounded-lg">Dashboard</a>
      </div>
    </main>
  )
}
