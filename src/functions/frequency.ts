import { fix } from "../utils/fix"
import { Rall } from "./rall"
import { Sigma } from "./sigma"

export function realFrequency(data: number[], condition = (current: number, item: number) => item === current) {
  const unique = Rall([...new Set(data)])
  return unique.map(value => ({
    item: value,
    frequency: data.filter(item => condition(value, item)).length
  }))
}

type RealFrequency = ReturnType<typeof realFrequency>

export function accumulatedFrequency(data: RealFrequency) {
  let acc = 0  

  return data.map(value => {
    acc += value.frequency

    return {
      ...value,
      accumulatedFrequency: acc
    }
  })
}

export function relativeFrequency(data: RealFrequency) {
  const total = Sigma(data, 'frequency')
  const calculate = (value: number) => (value / total) * 100

  return data.map(value => ({
    ...value,
    relative: fix(calculate(value.frequency))
  }))
}

type RelativeFrequency = ReturnType<typeof relativeFrequency>

export function accumulatedRelativeFrequency(data: RelativeFrequency) {
  let acc = 0  
  
  return data.map(value => {
    acc += value.relative

    return {
      ...value,
      accumulatedRelativeFrequency: fix(acc)
    }
  })
}


type AccumulatedRelativeFrequency = ReturnType<typeof accumulatedRelativeFrequency>

export function prettierFrequency(data: AccumulatedRelativeFrequency) {
  const prettier = (n: number) => `${n}%`
  return data.map(value => ({
    ...value,
    relative: prettier(value.relative),
    accumulatedRelativeFrequency: prettier(value.accumulatedRelativeFrequency)
  }))
}