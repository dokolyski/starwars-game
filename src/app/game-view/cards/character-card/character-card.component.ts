import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDirective } from '../card.component';
import { Character } from '../../../../types';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'starwars-game-character-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterCardComponent extends CardDirective<Character> {}
