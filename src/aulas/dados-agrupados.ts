import { Amplitude } from "../functions/amplitude"
import { accumulatedFrequency, accumulatedRelativeFrequency, realFrequency, relativeFrequency } from "../functions/frequency"
import { Collect, CollectAll, Groups } from "../functions/groups"

const ruidos = [
  73.94,66.84,66.16,64.78,63.14,61.89,60.32,56.67,
  71.46,64.43,66.01,64.71,62.69,61.49,60.22,56.03,
  71.52,64.17,65.70,65.81,62.57,60.96,60.14,55.89,
  70.08,63.29,65.08,64.15,61.92,60.74,59.36,55.77
]

console.log('Amplitude: ', Amplitude(ruidos))

const groups = Groups(ruidos, 4)
const collect = CollectAll(ruidos, groups)

const Fi = accumulatedFrequency(collect)
const fr = relativeFrequency(Fi)
const Fr = accumulatedRelativeFrequency(fr)

console.table(Fr)