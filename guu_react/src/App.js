	// Importieren der CSS-Stylesheet-Datei für die App-Komponente
	import './App.css';
	
	/**
	 * Die App-Komponente ist die Hauptkomponente der Anwendung.
	 * Diese Komponente rendert eine einfache Benutzeroberfläche mit 
	 * einer Begrüssungsnachricht.
	 *
	 * @returns {JSX.Element} - Das JSX-Element, das die 
	 *                          Benutzeroberfläche der App-Komponente
	 *                          darstellt.
	 */
	
	function App() {
	  const name = 'Ulas Güvenç'; // Ersetzen Sie <Ihr Name> durch Ihren Namen
	  return (
	    <div className="App">
	      <main>
	        <h1>Herzlichen Glückwunsch!</h1>
	        <p class="name">{name}</p>
	        <p>Sie können jetzt auch mit React entwickeln.</p>
	      </main>
	    </div>
	  );
	}
	
	// Export der App-Komponente für die Verwendung in anderen Teilen
	// der Anwendung
	export default App;
