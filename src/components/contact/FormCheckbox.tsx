import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'
import { useController, type Control, type FieldValues, type Path } from 'react-hook-form'

interface FormCheckboxProps<T extends FieldValues> {
  name: Path<T>
  control: Control<T>
  label: string
}

export default function FormCheckbox<T extends FieldValues>({
  name,
  control,
  label,
}: FormCheckboxProps<T>) {
  const { field, fieldState } = useController({ name, control })

  return (
    <FormControl error={Boolean(fieldState.error)}>
      <FormControlLabel
        control={
          <Checkbox
            checked={Boolean(field.value)}
            onChange={(event) => field.onChange(event.target.checked)}
            onBlur={field.onBlur}
            color="secondary"
          />
        }
        label={<Typography variant="body2">{label}</Typography>}
      />
      {fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
    </FormControl>
  )
}
