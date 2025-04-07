import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< Updated upstream
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSlideToggleModule],
=======

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
>>>>>>> Stashed changes
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'materialUI';
}
