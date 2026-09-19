import ExpandMore from '@mui/icons-material/ExpandMore'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'

interface FaqItemProps {
  id: string
  question: string
  answer: string
  defaultExpanded?: boolean
}

export default function FaqItem({ id, question, answer, defaultExpanded = false }: FaqItemProps) {
  return (
    <Accordion defaultExpanded={defaultExpanded}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
        className="faq__summary"
      >
        <Typography className="faq__question">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails className="faq__details">
        <Typography variant="body2" className="faq__answer">
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
