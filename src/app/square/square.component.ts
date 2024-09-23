import { Component, Input } from '@angular/core';
import { MaterialModule } from '../material/material.module';


@Component({
  selector: 'app-square',
  standalone: true,
  imports: [MaterialModule],
  template: `<button>{{ value }}</button>`,
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  @Input() value: 'X' | 'O' = 'X';
}
