import TextField from '@mui/material/TextField'
import type { HTMLAttributes } from 'react'
import { useController, type Control, type FieldValues, type Path } from 'react-hook-form'

interface FormTextFieldProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
  type?: string
  placeholder?: string
  autoComplete?: string
  inputMode?: HTMLAttributes<HTMLInputElement>['inputMode']
  multiline?: boolean
  minRows?: number
  format?: (value: string) => string
}

export default function FormTextField<T extends FieldValues>({
  name,
  control,
  inputMode,
  format,
  ...textFieldProps
}: FormTextFieldProps<T>) {
  const { field, fieldState } = useController({ name, control })

  return (
    <TextField
      {...textFieldProps}
      {...field}
      onChange={(event) => field.onChange(format ? format(event.target.value) : event.target.value)}
      error={Boolean(fieldState.error)}
      helperText={fieldState.error?.message}
      slotProps={inputMode ? { htmlInput: { inputMode } } : undefined}
    />
  )
}
