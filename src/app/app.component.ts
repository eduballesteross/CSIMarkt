import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';  // Importa el FooterComponent
import { HeaderComponent } from './components/header/header.component';  // Importa el HeaderComponent

@Component({
  selector: 'app-root',
  standalone: true, // Componente independiente
  imports: [RouterOutlet,  FooterComponent],  // Incluye HeaderComponent y FooterComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSIMarkt';
}
