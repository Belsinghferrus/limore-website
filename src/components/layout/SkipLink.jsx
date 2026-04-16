'use client'

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{
        position:  'absolute',
        left:      '-9999px',
        top:       'auto',
        width:     '1px',
        height:    '1px',
        overflow:  'hidden',
      }}
      onFocus={e => {
        e.currentTarget.style.left       = '16px'
        e.currentTarget.style.top        = '16px'
        e.currentTarget.style.width      = 'auto'
        e.currentTarget.style.height     = 'auto'
        e.currentTarget.style.overflow   = 'visible'
        e.currentTarget.style.zIndex     = '99999'
        e.currentTarget.style.padding    = '12px 20px'
        e.currentTarget.style.background = '#C41E1E'
        e.currentTarget.style.color      = '#fff'
      }}
      onBlur={e => {
        e.currentTarget.style.left   = '-9999px'
        e.currentTarget.style.width  = '1px'
        e.currentTarget.style.height = '1px'
      }}
    >
      Skip to main content
    </a>
  )
}