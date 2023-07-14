import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CardResourceTypes } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'starwars-game-select-resource',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './select-resource.component.html',
  styleUrls: ['./select-resource.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex space-x-4',
  },
})
export class SelectResourceComponent {
  protected readonly CardResourceTypes = CardResourceTypes;
  private readonly _router = inject(Router);

  startGame(selectedResource: CardResourceTypes) {
    this._router.navigate(['/game'], {
      queryParams: { resource: selectedResource },
    });
  }
}
