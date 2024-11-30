import { fix } from "../utils/fix"

export function Amplitude(data: number[]) {
  const max = Math.max(...data)
  const min = Math.min(...data)

  return fix(max - min)
}