declare function require(name:string): any;

export interface Data {
  [key: string]: string[]
}

export const namedays = <Data>require('../data/namedays.json')
export const extNamedays = <Data>require('../data/namedays-extended.json')
