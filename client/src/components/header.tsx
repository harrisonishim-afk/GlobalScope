import logoPath from "../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logoPath} alt="Globalscope Logo" className="h-10 w-auto" />
            <h1 className="text-2xl font-semibold text-gray-900">Globalscope</h1>
          </div>
          <div>
            <span className="text-sm text-gray-500">Your window to global news</span>
          </div>
        </div>
      </div>
    </header>
  );
}
