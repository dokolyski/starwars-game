import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'starwars-game-initial-page',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'text-center',
  },
})
export class InitialPageComponent {
  private readonly _router = inject(Router);
  navigateToResourceSelection() {
    this._router.navigate(['/select-resource']);
  }
}
