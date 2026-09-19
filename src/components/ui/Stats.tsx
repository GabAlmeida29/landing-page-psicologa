import Typography from '@mui/material/Typography'

interface StatsProps {
  items: readonly { value: string; label: string }[]
}

export default function Stats({ items }: StatsProps) {
  return (
    <div className="stats">
      {items.map((item) => (
        <div key={item.label}>
          <Typography className="stat__value">{item.value}</Typography>
          <Typography className="stat__label">{item.label}</Typography>
        </div>
      ))}
    </div>
  )
}
