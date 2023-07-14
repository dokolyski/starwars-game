import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardDataAccessService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { CardResourceTypes, Resource } from '../../types';
import { StarshipCardComponent } from './cards/starship-card/starship-card.component';
import { CharacterCardComponent } from './cards/character-card/character-card.component';

@Component({
  selector: 'starwars-game-game-view',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    StarshipCardComponent,
    CharacterCardComponent,
  ],
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
  providers: [CardDataAccessService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameViewComponent {
  private readonly _cardDataAccessService = inject(CardDataAccessService);

  readonly resourceType: CardResourceTypes =
    inject(ActivatedRoute).snapshot.queryParams['resource'];
  getCardsData$: Promise<[Resource, Resource]> =
    this._cardDataAccessService.getRandomCardPair(this.resourceType);
}
