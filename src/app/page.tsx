import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow p-6">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}
