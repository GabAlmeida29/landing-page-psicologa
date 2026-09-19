import Typography from '@mui/material/Typography'

interface InfoTileProps {
  label: string
  value: string
}

export default function InfoTile({ label, value }: InfoTileProps) {
  return (
    <div className="info-tile">
      <Typography className="info-tile__label">{label}</Typography>
      <Typography className="info-tile__value">{value}</Typography>
    </div>
  )
}
