import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Starship } from '../../../../types';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CardDirective } from '../card.component';

@Component({
  selector: 'starwars-game-starship-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarshipCardComponent extends CardDirective<Starship> {}
