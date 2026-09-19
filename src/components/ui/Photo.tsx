import PersonOutlined from '@mui/icons-material/PersonOutlined'
import { A11Y, TEXTS } from '../../constants'
import { useImageFallback } from '../../hooks/useImageFallback'
import type { PhotoShape } from '../../types'
import { cx } from '../../utils/classNames'

interface PhotoProps {
  src: string
  alt: string
  shape: PhotoShape
  eager?: boolean
  className?: string
}

export default function Photo({ src, alt, shape, eager = false, className }: PhotoProps) {
  const { failed, onError } = useImageFallback()

  return (
    <div className={cx('photo', `photo--${shape}`, className)}>
      {failed ? (
        <div role="img" aria-label={A11Y.photoPlaceholder(alt)} className="photo__placeholder">
          <PersonOutlined className="photo__placeholder-icon" />
          <span className="photo__placeholder-text">
            {TEXTS.photo.placeholderPrefix} <code>public{src}</code>
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          onError={onError}
          className="photo__image"
        />
      )}
    </div>
  )
}
