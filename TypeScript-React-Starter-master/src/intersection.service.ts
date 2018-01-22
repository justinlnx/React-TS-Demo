import { IServer } from './dataModels/index';

enum tags {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
  Yellow = 'YELLOW'
}

function intersection<T>(array1: T[], array2: T[]): T[] {
  return array1.filter(element1 => {
    return array2.find(element2 => {
      return element2 === element1;
    });
  });
}

/* use case: looking for products with the same tag
  array A: list of tags from server A
  array B: list of tags frmo server B
  Objective: find the common tags between server A and server B
*/
var a = [tags.Red, tags.Green, tags.Blue];
var b = [tags.Red, tags.Yellow, tags.Blue];
var c = intersection<string>(a, b);
console.log(c); // expected to be ['RED', 'BLUE']

/* use case: looking for the common servers between multiple sites
   array s1: list of servers from site 1
   array s2: list of servers from site 2
*/

function GetServersBySite(siteId: string) {
  return [];
}

var server1: IServer[] = GetServersBySite('site-id-1');
var server2: IServer[] = GetServersBySite('site-id-2');
var res = intersection<IServer>(server1, server2);