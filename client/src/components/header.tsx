import { Newspaper } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Newspaper className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-semibold text-gray-900">LocalNews</h1>
          </div>
          <div>
            <span className="text-sm text-gray-500">Stay informed, locally</span>
          </div>
        </div>
      </div>
    </header>
  );
}
