// export interface Hero {
//   id: number;
//   name: string;
// }

// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

// export interface Welcome {
//   code:            number;
//   status:          string;
//   copyright:       string;
//   attributionText: string;
//   attributionHTML: string;
//   etag:            string;
//   data:            Data;
// }

// export interface Data {
//   offset:  number;
//   limit:   number;
//   total:   number;
//   count:   number;
//   results: Hero[];
// }

export interface Hero {
  data: {

    total: number;
    results: Results[];
  }

}

export interface Results {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
}

export interface Comics {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

export interface ComicsItem {
  resourceURI: string;
  name: string;
}

export interface Stories {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

export interface StoriesItem {
  resourceURI: string;
  name: string;
  type: Type;
}

export enum Type {
  Cover = "cover",
  InteriorStory = "interiorStory",
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface URL {
  type: string;
  url: string;
}