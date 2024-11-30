import { fix } from "../utils/fix"

export function amplitude(data: number[]) {
  const max = Math.max(...data)
  const min = Math.min(...data)

  return fix(max - min)
}