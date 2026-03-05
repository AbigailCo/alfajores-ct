import "./App.css";
import * as C from "./components";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <C.Navbar />

      <main className="grow">
        {/* Después va el Hero y el armador */}
        <C.Hero />
        <C.Presentacion />
        <C.Sabores/>
         <C.PedidoSection />
         <C.Contacto/>
      </main>
        
      <C.Footer />
    </div>
  );
}

export default App;
