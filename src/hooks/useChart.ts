import usages from './../assets/usages.csv'
import { AxisOptions } from 'react-charts'
import { getUsageCost, stringToDate } from '../utils'
import { DailyCost, Series, Usage, Models, Types } from '../types'
import React from 'react'

export const useChart = () => {
  const [model, setModel] = React.useState<Models>(Models.all)
  const [type, setType] = React.useState<Types>(Types.all)

  const onModelChange = React.useCallback(
    (value: string) => setModel(value as Models),
    []
  )
  const onTypeChange = React.useCallback(
    (value: string) => setType(value as Types),
    []
  )

  const data = React.useMemo((): Series[] => {
    const costByDays: Record<string, number> = usages.reduce(
      (acc: Record<string, number>, usage: Usage) => {
        /* checking filters */
        if (model !== Models.all && model !== usage.model) return acc
        if (type !== Types.all && type !== usage.type) return acc

        /* accumulating cost of usage by day */
        acc[usage.created_at] =
          (acc[usage.created_at] ?? 0) + getUsageCost(usage)
        return acc
      },
      []
    )

    return [
      {
        label: 'Cost',
        data: Object.entries(costByDays)
          .map((item) => ({
            date: stringToDate(item[0]),
            cost: Math.round(item[1]),
          }))
          .sort((a, b) => +b.date - +a.date),
      },
    ]
  }, [model, type])

  const primaryAxis = React.useMemo(
    (): AxisOptions<DailyCost> => ({
      getValue: (datum) => datum.date,
    }),
    []
  )

  const secondaryAxes = React.useMemo(
    (): AxisOptions<DailyCost>[] => [
      {
        getValue: (datum) => datum.cost,
      },
    ],
    []
  )

  return {
    model,
    type,
    onModelChange,
    onTypeChange,
    data,
    primaryAxis,
    secondaryAxes,
  }
}
