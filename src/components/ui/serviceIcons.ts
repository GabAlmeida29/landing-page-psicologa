import BedtimeOutlined from '@mui/icons-material/BedtimeOutlined'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Groups2Outlined from '@mui/icons-material/Groups2Outlined'
import PsychologyAltOutlined from '@mui/icons-material/PsychologyAltOutlined'
import SelfImprovementOutlined from '@mui/icons-material/SelfImprovementOutlined'
import WorkOutlined from '@mui/icons-material/WorkOutlined'
import type { ElementType } from 'react'
import type { ServiceIconKey } from '../../types'

export const SERVICE_ICONS: Record<ServiceIconKey, ElementType> = {
  anxiety: SelfImprovementOutlined,
  mood: PsychologyAltOutlined,
  selfEsteem: FavoriteBorder,
  relationships: Groups2Outlined,
  career: WorkOutlined,
  transition: BedtimeOutlined,
}
