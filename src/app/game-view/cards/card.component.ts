import { Directive, Input } from '@angular/core';
import { Resource } from '../../../types';

@Directive({
  selector: 'starwars-game-card',
  standalone: true,
})
export class CardDirective<T extends Resource> {
  @Input({ required: true }) data!: T;
  @Input({ required: true }) rival!: T;
}
