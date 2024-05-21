import { Models, SelectOptions, Types } from '@/types'
import { Select } from './Select'
import React from 'react'

type Props = {
  model: Models
  type: Types
  onModelChange: (value: string) => void
  onTypeChange: (value: string) => void
}

export const Filters = ({
  model,
  type,
  onModelChange,
  onTypeChange,
}: Props) => {
  const modelOptions = React.useMemo(
    (): SelectOptions => [
      { label: 'Select model', value: Models.all },
      { label: Models.model1, value: Models.model1 },
      { label: Models.model2, value: Models.model2 },
      { label: Models.model3, value: Models.model3 },
    ],
    []
  )

  const typeOptions = React.useMemo(
    (): SelectOptions => [
      { label: 'Select type', value: Types.all },
      { label: Types.first, value: Types.first },
      { label: Types.second, value: Types.second },
      { label: Types.third, value: Types.third },
    ],
    []
  )

  return (
    <div className='flex gap-4'>
      <Select
        options={modelOptions}
        value={model}
        onChange={onModelChange}
      />
      <Select
        options={typeOptions}
        value={type}
        onChange={onTypeChange}
      />
    </div>
  )
}
