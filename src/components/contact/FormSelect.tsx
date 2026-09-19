import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import { useController, type Control, type FieldValues, type Path } from 'react-hook-form'

interface FormSelectProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  options: readonly string[]
}

export default function FormSelect<T extends FieldValues>({
  name,
  control,
  label,
  options,
}: FormSelectProps<T>) {
  const { field } = useController({ name, control })

  return (
    <TextField {...field} select label={label}>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  )
}
