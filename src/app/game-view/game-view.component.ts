import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardDataAccessService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CardResourceTypes,
  Character,
  ResourcesUnionType,
  Starship,
} from '../../types';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from './cards/card.component';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'starwars-game-game-view',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    CardComponent,
    MatButtonModule,
    CardComponent,
    MatListModule,
  ],
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
  providers: [CardDataAccessService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameViewComponent implements OnInit {
  private readonly _cardDataAccessService = inject(CardDataAccessService);
  private readonly _cdRef = inject(ChangeDetectorRef);
  private readonly _router = inject(Router);
  readonly resourceType: CardResourceTypes =
    inject(ActivatedRoute).snapshot.queryParams['resource'];
  readonly CardResourceTypes = CardResourceTypes;
  cardsData: ResourcesUnionType[] = [];
  result: [number, number] = [0, 0];
  winner?: 0 | 1;

  ngOnInit() {
    this._loadRandomCards();
  }

  nextTurn() {
    this.cardsData = [];
    this.winner = undefined;
    this._loadRandomCards();
  }

  finishGame() {
    this._router.navigate(['/']);
  }

  private async _loadRandomCards() {
    this.cardsData.push(
      await this._cardDataAccessService.getRandomCard(this.resourceType)
    );
    this._cdRef.markForCheck();
    this.cardsData.push(
      await this._cardDataAccessService.getRandomCard(this.resourceType)
    );
    this.winner = this._whoIsTheWinner();
    this._cdRef.markForCheck();
  }

  private _whoIsTheWinner(): undefined | 0 | 1 {
    const decidingProp =
      this.resourceType === CardResourceTypes.People ? 'mass' : 'crew';
    const [card1, card2] = this.cardsData as [
      Character & Starship,
      Character & Starship
    ];
    return isNaN(+card1[decidingProp]) ||
      isNaN(+card2[decidingProp]) ||
      +card1[decidingProp] === +card2[decidingProp]
      ? undefined
      : +card2[decidingProp] > +card1[decidingProp]
      ? 1
      : 0;
  }
}
