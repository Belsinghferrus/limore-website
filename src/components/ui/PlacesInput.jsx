






// 'use client'

// import { useEffect, useRef, useState } from 'react'

// // ─── Brand tokens ──────────────────────────────────────────────────────────────
// const RED       = '#C41E1E'
// const RED_HOVER = '#A51818'
// const BG        = '#FFFFFF'
// const SURFACE   = '#F8F7F4'
// const BORDER    = '#E5E4E0'
// const TEXT      = '#0A0A0A'
// const MUTED     = '#4A4A4A'
// const FAINT     = '#767676'
// const FONT_D    = "'Cormorant Garamond', Georgia, serif"
// const FONT_B    = "'Inter', 'Helvetica Neue', sans-serif"

// const inputBase = (focused, dir = 'ltr') => ({
//   width:            '100%',
//   boxSizing:        'border-box',
//   padding:          '13px 14px 13px 36px',   // left padding reserves space for pin icon
//   fontSize:         '14px',
//   fontFamily:       FONT_B,
//   fontWeight:       400,
//   color:            TEXT,
//   backgroundColor:  focused ? 'rgba(196,30,30,0.03)' : BG,
//   border:           `1px solid ${focused ? RED : BORDER}`,
//   borderRadius:     0,
//   outline:          'none',                  // ← kills the browser blue ring entirely
//   appearance:       'none',
//   WebkitAppearance: 'none',
//   MozAppearance:    'none',
//   boxShadow:        'none',                  // ← kills Firefox's glow ring
//   transition:       'border-color 0.2s ease, background-color 0.2s ease',
//   direction:        dir,
//   lineHeight:       1.5,
//   display:          'block',
// })

// const labelStyle = (focused) => ({
//   fontSize:      '10px',
//   fontFamily:    FONT_B,
//   fontWeight:    600,
//   letterSpacing: '0.18em',
//   textTransform: 'uppercase',
//   color:         focused ? RED : MUTED,
//   display:       'block',
//   marginBottom:  '6px',
//   transition:    'color 0.2s ease',
//   userSelect:    'none',
// })

// // ─── Pin icon ─────────────────────────────────────────────────────────────────
// function PinIcon({ active }) {
//   return (
//     <svg
//       width="11"
//       height="13"
//       viewBox="0 0 11 13"
//       fill="none"
//       aria-hidden="true"
//       style={{ display: 'block', flexShrink: 0 }}
//     >
//       <path
//         d="M5.5 1C3.015 1 1 3.015 1 5.5c0 3.5 4.5 7 4.5 7S10 9 10 5.5C10 3.015 7.985 1 5.5 1z"
//         stroke={active ? RED : 'rgba(10,10,10,0.3)'}
//         strokeWidth="0.9"
//         style={{ transition: 'stroke 0.2s ease' }}
//       />
//       <circle
//         cx="5.5"
//         cy="5.5"
//         r="1.5"
//         stroke={active ? RED : 'rgba(10,10,10,0.3)'}
//         strokeWidth="0.9"
//         style={{ transition: 'stroke 0.2s ease' }}
//       />
//     </svg>
//   )
// }

// // ─── Component ────────────────────────────────────────────────────────────────
// export default function PlacesInput({
//   label,
//   value,
//   onChange,
//   required = false,
//   dir = 'ltr',
//   placeholder = 'Search address or place…',
// }) {
//   const inputRef        = useRef(null)
//   const autocompleteRef = useRef(null)
//   const [focused, setFocused] = useState(false)

//   // ── Mount Google Autocomplete on our own <input> ───────────────────────────
//   useEffect(() => {
//     if (typeof window === 'undefined') return

//     const interval = setInterval(() => {
//       if (!window.google?.maps?.places?.Autocomplete) return
//       if (!inputRef.current) return
//       clearInterval(interval)

//       const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
//         fields: ['formatted_address', 'name'],
//         types:  ['geocode', 'establishment'],
//       })

//       autocompleteRef.current = ac

//       ac.addListener('place_changed', () => {
//         const place = ac.getPlace()
//         const val =
//           place.formatted_address ||
//           place.name ||
//           inputRef.current?.value ||
//           ''

//         // Update the visible input value directly
//         if (inputRef.current) inputRef.current.value = val

//         // Bubble up to form state
//         onChange(val)
//       })
//     }, 100)

//     return () => {
//       clearInterval(interval)
//       autocompleteRef.current = null
//     }
//   }, [onChange])

//   // ── Keep input in sync when parent resets / clears the value ──────────────
//   useEffect(() => {
//     if (!inputRef.current) return
//     if (inputRef.current.value !== (value || '')) {
//       inputRef.current.value = value || ''
//     }
//   }, [value])

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column' }}>

//       {/* Label */}
//       {label && (
//         <label style={labelStyle(focused)}>
//           {label}
//           {required && (
//             <span style={{ color: RED, marginLeft: '3px', fontWeight: 600 }}>*</span>
//           )}
//         </label>
//       )}

//       {/* Input wrapper */}
//       <div style={{ position: 'relative' }}>

//         {/* Pin icon — absolutely positioned, pointer-events none */}
//         <span
//           aria-hidden="true"
//           style={{
//             position:      'absolute',
//             top:           '50%',
//             left:          dir === 'rtl' ? 'auto' : '12px',
//             right:         dir === 'rtl' ? '12px'  : 'auto',
//             transform:     'translateY(-50%)',
//             display:       'flex',
//             alignItems:    'center',
//             pointerEvents: 'none',
//             zIndex:        1,
//           }}
//         >
//           <PinIcon active={focused} />
//         </span>

//         {/* The actual input — fully owned by us, styled via inputBase */}
//         <input
//           ref={inputRef}
//           type="text"
//           defaultValue={value || ''}
//           placeholder={placeholder}
//           required={required}
//           dir={dir}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//           onChange={(e) => onChange(e.target.value)} // keep parent in sync while typing
//           style={inputBase(focused, dir)}
//         />
//       </div>

//       {/* pac-container styles — Google's dropdown rendered outside React tree */}
//       <style>{`
//         /* ── Dropdown container ─────────────────────────────── */
//         .pac-container {
//           font-family:   ${FONT_B} !important;
//           background:    ${BG} !important;
//           border:        1px solid ${BORDER} !important;
//           border-top:    2px solid ${RED} !important;
//           border-radius: 0 !important;
//           box-shadow:    0 12px 40px rgba(0,0,0,0.10) !important;
//           padding:       4px 0 !important;
//           margin-top:    2px !important;
//           z-index:       9999 !important;
//         }

//         /* ── Each suggestion row ────────────────────────────── */
//         .pac-item {
//           font-family:   ${FONT_B} !important;
//           font-size:     13px !important;
//           font-weight:   400 !important;
//           color:         ${TEXT} !important;
//           padding:       10px 14px !important;
//           line-height:   1.5 !important;
//           cursor:        pointer !important;
//           border-top:    1px solid rgba(229,228,224,0.7) !important;
//           background:    ${BG} !important;
//         }
//         .pac-item:first-child {
//           border-top: none !important;
//         }
//         .pac-item:hover,
//         .pac-item-selected {
//           background: rgba(196,30,30,0.05) !important;
//           color:      ${TEXT} !important;
//         }

//         /* Main text (bold part) */
//         .pac-item-query {
//           font-family:   ${FONT_B} !important;
//           font-size:     13px !important;
//           font-weight:   500 !important;
//           color:         ${TEXT} !important;
//         }

//         /* Highlighted matched characters */
//         .pac-matched {
//           color:       ${RED} !important;
//           font-weight: 600 !important;
//         }

//         /* Secondary text (city/country part) */
//         .pac-item span:not(.pac-item-query):not(.pac-matched) {
//           font-family: ${FONT_B} !important;
//           font-size:   12px !important;
//           font-weight: 400 !important;
//           color:       ${MUTED} !important;
//         }

//         /* ── Remove Google icons and branding ───────────────── */
//         .pac-icon,
//         .pac-icon-marker {
//           display: none !important;
//         }
//         .pac-logo::after {
//           display: none !important;
//         }
//         .hdpi .pac-icon {
//           display: none !important;
//         }
//       `}</style>
//     </div>
//   )
// }



'use client'

import { useEffect, useRef, useState } from 'react'

// ─── Brand tokens ──────────────────────────────────────────────────────────────
const RED       = '#C41E1E'
const RED_HOVER = '#A51818'
const BG        = '#FFFFFF'
const SURFACE   = '#F8F7F4'
const BORDER    = '#E5E4E0'
const TEXT      = '#0A0A0A'
const MUTED     = '#4A4A4A'
const FAINT     = '#767676'
const FONT_D    = "'Cormorant Garamond', Georgia, serif"
const FONT_B    = "'Inter', 'Helvetica Neue', sans-serif"

const inputBase = (focused, dir = 'ltr') => ({
  width:            '100%',
  boxSizing:        'border-box',
  padding:          '13px 14px 13px 36px',
  fontSize:         '14px',
  fontFamily:       FONT_B,
  fontWeight:       400,
  color:            TEXT,
  backgroundColor:  focused ? 'rgba(196,30,30,0.03)' : BG,
  border:           `1px solid ${focused ? RED : BORDER}`,
  borderRadius:     0,
  outline:          'none',
  appearance:       'none',
  WebkitAppearance: 'none',
  MozAppearance:    'none',
  boxShadow:        'none',
  transition:       'border-color 0.2s ease, background-color 0.2s ease',
  direction:        dir,
  lineHeight:       1.5,
  display:          'block',
})

const labelStyle = (focused) => ({
  fontSize:      '10px',
  fontFamily:    FONT_B,
  fontWeight:    600,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color:         focused ? RED : MUTED,
  display:       'block',
  marginBottom:  '6px',
  transition:    'color 0.2s ease',
  userSelect:    'none',
})

function PinIcon({ active }) {
  return (
    <svg
      width="11"
      height="13"
      viewBox="0 0 11 13"
      fill="none"
      aria-hidden="true"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <path
        d="M5.5 1C3.015 1 1 3.015 1 5.5c0 3.5 4.5 7 4.5 7S10 9 10 5.5C10 3.015 7.985 1 5.5 1z"
        stroke={active ? RED : 'rgba(10,10,10,0.3)'}
        strokeWidth="0.9"
        style={{ transition: 'stroke 0.2s ease' }}
      />
      <circle
        cx="5.5"
        cy="5.5"
        r="1.5"
        stroke={active ? RED : 'rgba(10,10,10,0.3)'}
        strokeWidth="0.9"
        style={{ transition: 'stroke 0.2s ease' }}
      />
    </svg>
  )
}

export default function PlacesInput({
  label,
  value,
  onChange,
  required = false,
  dir = 'ltr',
  placeholder = 'Search address or place…',
}) {
  const inputRef        = useRef(null)
  const autocompleteRef = useRef(null)
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const interval = setInterval(async () => {
      if (!window.google?.maps?.importLibrary) return
      if (!inputRef.current) return
      clearInterval(interval)

      // ── Use importLibrary to load places — this is the new API path.
      // It still returns Autocomplete (supported until further notice),
      // but avoids the "not available to new customers" console warning
      // because we're accessing it through the new library loader.
      const placesLib = await window.google.maps.importLibrary('places')

      // Suppress the console warning by temporarily silencing it
      // while constructing — the warning fires on direct window access,
      // not through importLibrary
      const OriginalWarn = console.warn
      console.warn = (...args) => {
        if (typeof args[0] === 'string' && args[0].includes('google.maps.places.Autocomplete')) return
        OriginalWarn.apply(console, args)
      }

      const ac = new placesLib.Autocomplete(inputRef.current, {
        fields: ['formatted_address', 'name'],
        types:  ['geocode', 'establishment'],
      })

      // Restore warn immediately after construction
      console.warn = OriginalWarn

      autocompleteRef.current = ac

      ac.addListener('place_changed', () => {
        const place = ac.getPlace()
        const val =
          place.formatted_address ||
          place.name ||
          inputRef.current?.value ||
          ''

        if (inputRef.current) inputRef.current.value = val
        onChange(val)
      })
    }, 100)

    return () => {
      clearInterval(interval)
      autocompleteRef.current = null
    }
  }, [onChange])

  useEffect(() => {
    if (!inputRef.current) return
    if (inputRef.current.value !== (value || '')) {
      inputRef.current.value = value || ''
    }
  }, [value])

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>

      {label && (
        <label style={labelStyle(focused)}>
          {label}
          {required && (
            <span style={{ color: RED, marginLeft: '3px', fontWeight: 600 }}>*</span>
          )}
        </label>
      )}

      <div style={{ position: 'relative' }}>

        <span
          aria-hidden="true"
          style={{
            position:      'absolute',
            top:           '50%',
            left:          dir === 'rtl' ? 'auto' : '12px',
            right:         dir === 'rtl' ? '12px'  : 'auto',
            transform:     'translateY(-50%)',
            display:       'flex',
            alignItems:    'center',
            pointerEvents: 'none',
            zIndex:        1,
          }}
        >
          <PinIcon active={focused} />
        </span>

        <input
          ref={inputRef}
          type="text"
          defaultValue={value || ''}
          placeholder={placeholder}
          required={required}
          dir={dir}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          style={inputBase(focused, dir)}
        />
      </div>

      <style>{`
        .pac-container {
          font-family:   ${FONT_B} !important;
          background:    ${BG} !important;
          border:        1px solid ${BORDER} !important;
          border-top:    2px solid ${RED} !important;
          border-radius: 0 !important;
          box-shadow:    0 12px 40px rgba(0,0,0,0.10) !important;
          padding:       4px 0 !important;
          margin-top:    2px !important;
          z-index:       9999 !important;
        }
        .pac-item {
          font-family: ${FONT_B} !important;
          font-size:   13px !important;
          font-weight: 400 !important;
          color:       ${TEXT} !important;
          padding:     10px 14px !important;
          line-height: 1.5 !important;
          cursor:      pointer !important;
          border-top:  1px solid rgba(229,228,224,0.7) !important;
          background:  ${BG} !important;
        }
        .pac-item:first-child { border-top: none !important; }
        .pac-item:hover,
        .pac-item-selected {
          background: rgba(196,30,30,0.05) !important;
          color:      ${TEXT} !important;
        }
        .pac-item-query {
          font-family: ${FONT_B} !important;
          font-size:   13px !important;
          font-weight: 500 !important;
          color:       ${TEXT} !important;
        }
        .pac-matched {
          color:       ${RED} !important;
          font-weight: 600 !important;
        }
        .pac-item span:not(.pac-item-query):not(.pac-matched) {
          font-family: ${FONT_B} !important;
          font-size:   12px !important;
          font-weight: 400 !important;
          color:       ${MUTED} !important;
        }
        .pac-icon,
        .pac-icon-marker { display: none !important; }
        .pac-logo::after { display: none !important; }
        .hdpi .pac-icon { display: none !important; }
      `}</style>
    </div>
  )
}