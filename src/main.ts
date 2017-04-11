declare function require(name:string): any;

type Data = { [key: string]: string[] }

export const namedays = <Data>require('../data/namedays.json')
export const extNamedays = <Data>require('../data/namedays-extended.json')
