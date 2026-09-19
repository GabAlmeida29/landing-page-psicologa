import FormatQuote from '@mui/icons-material/FormatQuote'
import Typography from '@mui/material/Typography'
import Card from './Card'

interface QuoteCardProps {
  text: string
  author: string
}

export default function QuoteCard({ text, author }: QuoteCardProps) {
  return (
    <Card as="figure" column>
      <FormatQuote className="quote__icon" />
      <Typography component="blockquote" className="quote__text">
        {text}
      </Typography>
      <Typography component="figcaption" variant="body2" className="quote__author">
        {author}
      </Typography>
    </Card>
  )
}
