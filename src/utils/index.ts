import costs from './../assets/costs.csv'
import { Cost, CostsByModel, Usage } from '../types'

const costsByModel: CostsByModel = costs.reduce(
  (acc: CostsByModel, cost: Cost) => {
    acc[cost.model] = cost
    return acc
  },
  {}
)

/* model cost of input usage * usage_input + model cost of output usage * usage_output */
export const getUsageCost = (usage: Usage) => {
  const modelCost = costsByModel[usage.model]
  return (
    modelCost.input * usage.usage_input + modelCost.output * usage.usage_output
  )
}

export const stringToDate = (string: string) => {
  const pattern = /(\d{2})\.(\d{2})\.(\d{4})/
  return new Date(string.replace(pattern, '$3-$2-$1'))
}
