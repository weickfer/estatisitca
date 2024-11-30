export function isObject(any: any): any is object {
  return typeof any === 'object'
}

export function isNumber(any: any): any is number {
  return typeof any === 'number'
}

export function isNumArray(any: any): any is number[] {
  return typeof any[0] === 'number'
}