export type Model = 'model1' | 'model2' | 'model3'
export type Type = 'first' | 'second' | 'third'

export enum Models {
  model1 = 'model1',
  model2 = 'model2',
  model3 = 'model3',
  all = 'all'
}

export enum Types {
  first = 'first',
  second = 'second',
  third = 'third',
  all = 'all'
}

export type Usage = {
  type: Type
  model: Model
  created_at: string
  usage_input: number
  usage_output: number
}

export type Cost = {
  model: Model
  input: number
  output: number
}

export type CostsByModel = Record<Model, Cost>

export type DailyCost = {
  date: Date
  cost: number
}

export type Series = {
  label: string
  data: DailyCost[]
}

export type SelectOptions = {
  label: string
  value: string
}[]