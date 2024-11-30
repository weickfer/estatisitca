import { Amplitude } from "./amplitude"
import { realFrequency } from "./frequency"
import { Rall } from "./rall"

type Group = [min: number, max: number]

export function Groups(data: number[], classesQuantity: number): Group[] {
  const amplitude = Amplitude(data)
  const distribution = Math.round(amplitude / classesQuantity)  
  const root = Math.floor(Math.min(...data))
   
  return Array(classesQuantity)
    .fill(0)
    .map((_, i) => [
      root + (distribution * i),
      root + (distribution * i) + distribution,
    ])
}

export function Collect(data: number[], [min, max]: Group) {
  const group = data.filter(item => item >= min && item < max)

  return {
    item: `[${min}, ${max}[`,
    frequency: group.length
  }
  // return realFrequency(data, (current, item) => )
}

export function CollectAll(data: number[], groups: Group[]) {
  return groups.map(group => Collect(data, group))
}