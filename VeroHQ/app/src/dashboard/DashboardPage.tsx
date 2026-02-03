export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">VeroHQ Dashboard</h1>
        <p className="text-lg text-muted-foreground mb-8">Manage your releases and track your progress</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Active Releases</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">Team Members</h2>
            <p className="text-3xl font-bold">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
