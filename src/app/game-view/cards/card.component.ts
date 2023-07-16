import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ResourcesUnionType } from '../../../types';

@Component({
  selector: 'starwars-game-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() data?: ResourcesUnionType;
  @Input() winner?: boolean;
}
