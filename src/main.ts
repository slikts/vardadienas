declare function require(name:string): any;

export interface Data {
  [key: string]: string[]
}

export const names = <Data>require('../data/names.json')
export const extended = <Data>require('../data/extended.json')
