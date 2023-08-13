import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rutas';

  constructor(private router: Router) {}

  paginaTres() {
    this.router.navigate(['/tres/', { id: 100, name: 'vladi', edad: 12 }]);
  }
}
