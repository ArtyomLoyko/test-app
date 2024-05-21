import {
  Select as _Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { SelectOptions } from '@/types'

type Props = {
  options: SelectOptions
  value: string
  placeholder?: string
  onChange: (value: string) => void
}

export const Select = ({
  options,
  value,
  placeholder = '',
  onChange,
}: Props) => {
  return (
    <_Select value={value} onValueChange={onChange}>
      <SelectTrigger className='w-[200px] h-[50px] text-xl'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((o) => (
          <SelectItem key={o.label} value={o.value} className='text-xl'>
            {o.label}
          </SelectItem>
        ))}
      </SelectContent>
    </_Select>
  )
}
