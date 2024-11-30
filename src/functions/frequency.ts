import { fix } from "../utils/fix"
import { rall } from "./rall"
import { sigma } from "./sigma"

export function realFrequency(data: number[]) {
  const unique = rall([...new Set(data)])
  return unique.map(value => ({
    item: value,
    frequency: data.filter(v => v === value).length
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
  const total = sigma(data, 'frequency')
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