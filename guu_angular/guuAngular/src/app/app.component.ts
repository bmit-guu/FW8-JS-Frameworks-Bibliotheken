import { Component } from '@angular/core';
// Import von Angular Core und zusätzlichen Modulen für Funktionalität
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // Der Selektor definiert, wie die Komponente im HTML verwendet wird
  standalone: true, // Mit 'standalone' kann die Komponente unabhängig verwendet werden
  imports: [CommonModule, RouterOutlet], // Importiert benötigte Module für die Komponente
  templateUrl: './app.component.html', // Verknüpft das HTML-Template
  styleUrls: ['./app.component.css'] // Verknüpft die CSS-Stylesheets
})
export class AppComponent {
  title = 'Herzlichen Glückwunsch!'; // Eine Eigenschaft 'title', die im Template genutzt werden kann
  meinName = 'Ulas Güvenç'; // Fügt Ihren Namen hinzu
  currentYear = new Date().getFullYear(); // Fügt das aktuelle Jahr hinzu
  // Hier könnten weitere Funktionen oder Eigenschaften hinzugefügt werden
}

// Beachten Sie, dass Sie den '<Ihr Name>' in der App-Komponente und im Template entsprechend Ihrer Anleitung anpassen sollten.