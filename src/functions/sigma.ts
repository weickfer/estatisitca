import { isObject } from "../types/is"


export function Sigma(data: number[] | Record<string, any>[], key?: string) {
  const element = data[0]

  if(typeof element !== 'number' && key) {
    return Sigma(
      data.map(object => {
        if(isObject(object)) {
          return object[key]
        }
      })
    )
  }

  return (data as number[]).reduce((acc, element) => acc + element, 0)
}