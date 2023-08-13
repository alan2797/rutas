import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-componente-tres',
  templateUrl: './componente-tres.component.html',
  styleUrls: ['./componente-tres.component.scss'],
})
export class ComponenteTresComponent {
  ID!: number;
  NAME!: string;
  EDAD!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.ID = Number(this.route.snapshot.paramMap.get('id'));
    this.NAME = String(this.route.snapshot.paramMap.get('name'));
    this.EDAD = Number(this.route.snapshot.paramMap.get('edad'));
  }
}
