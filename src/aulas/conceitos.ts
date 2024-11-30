import { amplitude } from "../functions/amplitude"
import { accumulatedFrequency, accumulatedRelativeFrequency, prettierFrequency, realFrequency, relativeFrequency } from "../functions/frequency"
import { sigma } from "../functions/sigma"

const notas = [
  7, 5, 9,  5, 8, 5, 8, 9, 10, 8,
  6, 6, 7, 7, 7, 5, 5, 5, 6, 6
]
const leite = [
  0.98, 1, 1.01, 0.98, 0.99,
  0.99, 1.01, 1.01, 1, 0.99,
  1, 1.02, 0.98, 0.99, 1,
  0.99, 1, 1.01, 0.98, 0.99
]

const fi = realFrequency(leite)
const Fi = accumulatedFrequency(fi)
const fr = relativeFrequency(Fi)
const Fr = accumulatedRelativeFrequency(fr)


console.table(prettierFrequency(Fr))
console.log('Amplitude: ', amplitude(leite))
console.log('Total frequência: ', sigma(fr, 'frequency'))
console.log('Total frequência relativa: ', sigma(fr, 'relative'))