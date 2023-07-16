import { Starship } from './starship.interface';
import { Character } from './character.interface';

export * from './card-resource-types.enum';
export * from './starship.interface';
export * from './character.interface';
export type ResourcesUnionType = Starship | Character;
