import Typography from '@mui/material/Typography'
import { stepNumber } from '../../utils/text'

interface StepItemProps {
  index: number
  title: string
  text: string
}

export default function StepItem({ index, title, text }: StepItemProps) {
  return (
    <div>
      <Typography aria-hidden className="step__number">
        {stepNumber(index)}
      </Typography>
      <Typography variant="h3" component="h3" className="step__title">
        {title}
      </Typography>
      <Typography variant="body2" className="step__text">
        {text}
      </Typography>
    </div>
  )
}
