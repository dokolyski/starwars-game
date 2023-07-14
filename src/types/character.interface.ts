import { Resource } from './resource.interface';

export interface Character extends Resource {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  name: string;
  homeworld: string;
}
