import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardResourceTypes, ResourcesUnionType } from '../../types';
import { getRandomInt } from '../../utils';
import { firstValueFrom, map, switchMap } from 'rxjs';

@Injectable()
export class CardDataAccessService {
  readonly #url = 'https://www.swapi.tech/api/';
  readonly #http = inject(HttpClient);
  readonly #totalRecords: { [key in CardResourceTypes]?: number } = {};

  async getRandomCard(resource: CardResourceTypes) {
    this.#totalRecords[resource] ||= await firstValueFrom(
      this.#getResourceNumber(resource)
    );
    return firstValueFrom(this.#getRandomCardData(resource));
  }

  #getRandomCardData(resource: CardResourceTypes) {
    // logic in getRandomCardPair ensures that total records number is already loaded
    return this.#getItemDataUrl(
      resource,
      getRandomInt(this.#totalRecords[resource]!)
    ).pipe(
      switchMap((itemFullUrl) =>
        this.#http.get<{ result: { properties: ResourcesUnionType } }>(
          itemFullUrl
        )
      ),
      map((response) => response.result.properties)
    );
  }

  #getResourceNumber(resource: CardResourceTypes) {
    return this.#http
      .get<{ total_records: number }>(this.#url + resource)
      .pipe(map(({ total_records }) => total_records));
  }

  #getItemDataUrl(resource: CardResourceTypes, pageNumber: number) {
    return this.#http
      .get<{ results: [{ url: string }] }>(this.#url + resource, {
        params: {
          page: pageNumber,
          limit: 1,
        },
      })
      .pipe(map((page) => page.results[0].url));
  }
}
