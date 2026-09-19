import Typography from '@mui/material/Typography'
import type { ServiceIconKey } from '../../types'
import Card from './Card'
import IconBadge from './IconBadge'
import { SERVICE_ICONS } from './serviceIcons'

interface FeatureCardProps {
  icon: ServiceIconKey
  title: string
  text: string
}

export default function FeatureCard({ icon, title, text }: FeatureCardProps) {
  return (
    <Card interactive>
      <IconBadge icon={SERVICE_ICONS[icon]} />
      <Typography variant="h3" component="h3" className="card__title">
        {title}
      </Typography>
      <Typography variant="body2" className="card__text">
        {text}
      </Typography>
    </Card>
  )
}
