// 'use client'
// import { useEffect, useRef, useState } from 'react'

// const RED    = '#C41E1E'
// const BORDER = '#E5E4E0'
// const TEXT   = '#0A0A0A'
// const FONT_B = "'Inter', 'Helvetica Neue', sans-serif"

// function PinIcon() {
//   return (
//     <svg width="11" height="13" viewBox="0 0 11 13" fill="none"
//       style={{ flexShrink: 0, marginTop: '1px' }} aria-hidden="true">
//       <path d="M5.5 1C3.015 1 1 3.015 1 5.5c0 3.5 4.5 7 4.5 7S10 9 10 5.5C10 3.015 7.985 1 5.5 1z"
//         stroke="currentColor" strokeWidth="0.9"/>
//       <circle cx="5.5" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="0.9"/>
//     </svg>
//   )
// }

// export default function PlacesInput({ label, value, onChange, required, dir, placeholder = '' }) {
//   const inputRef  = useRef(null)
//   const acRef     = useRef(null)
//   const [focused, setFocused] = useState(false)

//   useEffect(() => {
//     if (typeof window === 'undefined') return
//     if (!window.google?.maps?.places) return

//     acRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
//       fields: ['formatted_address', 'name', 'geometry'],
//       types:  ['geocode', 'establishment'],
//     })

//     acRef.current.addListener('place_changed', () => {
//       const place = acRef.current.getPlace()
//       const val   = place.formatted_address || place.name || ''
//       onChange(val)
//       if (inputRef.current) inputRef.current.value = val
//     })
//   }, [])

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
//       {label && (
//         <label style={{
//           fontSize: '9px', fontFamily: FONT_B, fontWeight: 500,
//           letterSpacing: '0.2em', textTransform: 'uppercase',
//           color: focused ? RED : 'rgba(10,10,10,0.45)',
//           transition: 'color 0.2s',
//         }}>
//           {label}{required && <span style={{ color: RED, marginLeft: '3px' }}>*</span>}
//         </label>
//       )}
//       <div style={{ position: 'relative' }}>
//         <input
//           ref={inputRef}
//           defaultValue={value}
//           onFocus={() => setFocused(true)}
//           onBlur={e  => { setFocused(false); onChange(e.target.value) }}
//           onChange={e => onChange(e.target.value)}
//           placeholder={placeholder || 'Search address or place…'}
//           required={required}
//           autoComplete="off"
//           dir={dir}
//           style={{
//             width:           '100%',
//             boxSizing:       'border-box',
//             padding:         '12px 14px 12px 36px',
//             fontSize:        'clamp(0.82rem,1.1vw,0.9rem)',
//             fontFamily:      FONT_B,
//             fontWeight:      300,
//             color:           TEXT,
//             backgroundColor: focused ? 'rgba(196,30,30,0.04)' : '#FFFFFF',
//             border:          `1px solid ${focused ? RED : BORDER}`,
//             borderRadius:    0,
//             outline:         'none',
//             appearance:      'none',
//             transition:      'border-color 0.2s, background-color 0.2s',
//           }}
//         />
//         {/* Pin icon */}
//         <span style={{
//           position:  'absolute',
//           left:      dir === 'rtl' ? 'auto' : '12px',
//           right:     dir === 'rtl' ? '12px'  : 'auto',
//           top:       '50%',
//           transform: 'translateY(-50%)',
//           color:     focused ? RED : 'rgba(10,10,10,0.3)',
//           display:   'flex',
//           pointerEvents: 'none',
//           transition: 'color 0.2s',
//         }}>
//           <PinIcon />
//         </span>
//       </div>

//       {/* Inject autocomplete dropdown styles to match Limore */}
//       <style>{`
//         .pac-container {
//           background:    #FFFFFF !important;
//           border:        1px solid #E5E4E0 !important;
//           border-top:    2px solid #C41E1E !important;
//           border-radius: 0 !important;
//           box-shadow:    0 12px 40px rgba(0,0,0,0.1) !important;
//           font-family:   'Inter', sans-serif !important;
//           padding:       4px 0 !important;
//           margin-top:    2px !important;
//         }
//         .pac-item {
//           padding:      10px 14px !important;
//           font-size:    11px !important;
//           font-weight:  300 !important;
//           color:        #0A0A0A !important;
//           border-top:   1px solid rgba(229,228,224,0.6) !important;
//           cursor:       pointer !important;
//           line-height:  1.5 !important;
//           font-family:  'Inter', sans-serif !important;
//         }
//         .pac-item:first-child { border-top: none !important; }
//         .pac-item:hover,
//         .pac-item-selected { background: rgba(196,30,30,0.05) !important; }
//         .pac-item-query {
//           font-size:   12px !important;
//           font-weight: 400 !important;
//           color:       #0A0A0A !important;
//           font-family: 'Inter', sans-serif !important;
//         }
//         .pac-matched { color: #C41E1E !important; font-weight: 500 !important; }
//         .pac-icon { display: none !important; }
//         .pac-logo::after { display: none !important; }
//       `}</style>
//     </div>
//   )
// }



'use client'
import { useEffect, useRef, useState, useId } from 'react'

const RED    = '#C41E1E'
const BORDER = '#E5E4E0'
const TEXT   = '#0A0A0A'
const FONT_B = "'Inter', 'Helvetica Neue', sans-serif"

function PinIcon() {
  return (
    <svg width="11" height="13" viewBox="0 0 11 13" fill="none"
      style={{ flexShrink: 0, marginTop: '1px' }} aria-hidden="true">
      <path d="M5.5 1C3.015 1 1 3.015 1 5.5c0 3.5 4.5 7 4.5 7S10 9 10 5.5C10 3.015 7.985 1 5.5 1z"
        stroke="currentColor" strokeWidth="0.9"/>
      <circle cx="5.5" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="0.9"/>
    </svg>
  )
}

export default function PlacesInput({
  label,
  value,
  onChange,
  required,
  dir,
  placeholder = '',
}) {
  const containerRef = useRef(null)
  const visibleRef   = useRef(null)
  const elementRef   = useRef(null)
  const inputId      = useId()
  const [focused, setFocused] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.google?.maps?.places?.PlaceAutocompleteElement) return

    const ac = new window.google.maps.places.PlaceAutocompleteElement({
      types: ['geocode', 'establishment'],
    })

    // Invisible overlay on top of the visible input
    Object.assign(ac.style, {
      position: 'absolute',
      inset:    '0',
      width:    '100%',
      height:   '100%',
      opacity:  '0',
      zIndex:   '2',
      cursor:   'text',
    })

    containerRef.current?.appendChild(ac)
    elementRef.current = ac

    ac.addEventListener('gmp-placeselect', async (e) => {
      try {
        const place = e.place
        await place.fetchFields({ fields: ['displayName', 'formattedAddress'] })
        const val = place.formattedAddress || place.displayName || ''
        onChange(val)
        if (visibleRef.current) visibleRef.current.value = val
      } catch (_) {}
    })

    // Mirror focus state so our border/label animate correctly
    ac.addEventListener('focus', () => setFocused(true))
    ac.addEventListener('blur',  () => setFocused(false))

    return () => {
      ac.remove()
      elementRef.current = null
    }
  }, [])

  // Sync if value changes externally
  useEffect(() => {
    if (visibleRef.current && value !== undefined) {
      visibleRef.current.value = value
    }
  }, [value])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontSize:      '9px',
            fontFamily:    FONT_B,
            fontWeight:    500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         focused ? RED : 'rgba(10,10,10,0.45)',
            transition:    'color 0.2s',
            userSelect:    'none',
          }}
        >
          {label}
          {required && <span style={{ color: RED, marginLeft: '3px' }}>*</span>}
        </label>
      )}

      <div ref={containerRef} style={{ position: 'relative' }}>
        {/* Visible styled input — read-only, passes clicks to element above */}
        <input
          ref={visibleRef}
          id={inputId}
          type="text"
          defaultValue={value}
          placeholder={placeholder || 'Search address or place…'}
          readOnly
          tabIndex={-1}
          aria-hidden="true"
          dir={dir}
          style={{
            width:           '100%',
            boxSizing:       'border-box',
            padding:         '12px 14px 12px 36px',
            fontSize:        'clamp(0.82rem, 1.1vw, 0.9rem)',
            fontFamily:      FONT_B,
            fontWeight:      300,
            color:           TEXT,
            backgroundColor: focused ? 'rgba(196,30,30,0.04)' : '#FFFFFF',
            border:          `1px solid ${focused ? RED : BORDER}`,
            borderRadius:    0,
            outline:         'none',
            appearance:      'none',
            transition:      'border-color 0.2s, background-color 0.2s',
            pointerEvents:   'none',
            position:        'relative',
            zIndex:          1,
          }}
        />

        {/* Pin icon */}
        <span style={{
          position:      'absolute',
          left:          dir === 'rtl' ? 'auto' : '12px',
          right:         dir === 'rtl' ? '12px'  : 'auto',
          top:           '50%',
          transform:     'translateY(-50%)',
          color:         focused ? RED : 'rgba(10,10,10,0.3)',
          display:       'flex',
          pointerEvents: 'none',
          transition:    'color 0.2s',
          zIndex:        3,
        }}>
          <PinIcon />
        </span>
      </div>

      <style>{`
        /* New API dropdown */
        .gmp-place-autocomplete-container,
        gmp-place-autocomplete-container {
          border:        1px solid #E5E4E0 !important;
          border-top:    2px solid #C41E1E !important;
          border-radius: 0 !important;
          box-shadow:    0 12px 40px rgba(0,0,0,0.1) !important;
          font-family:   'Inter', sans-serif !important;
          background:    #FFFFFF !important;
          padding:       4px 0 !important;
          margin-top:    2px !important;
        }
        .gmp-place-autocomplete-suggestion {
          padding:     10px 14px !important;
          font-size:   11px !important;
          font-weight: 300 !important;
          color:       #0A0A0A !important;
          border-top:  1px solid rgba(229,228,224,0.6) !important;
          cursor:      pointer !important;
          line-height: 1.5 !important;
          font-family: 'Inter', sans-serif !important;
          background:  #FFFFFF !important;
        }
        .gmp-place-autocomplete-suggestion:first-child { border-top: none !important; }
        .gmp-place-autocomplete-suggestion:hover,
        .gmp-place-autocomplete-suggestion[aria-selected="true"] {
          background: rgba(196,30,30,0.05) !important;
        }
        .gmp-place-autocomplete-suggestion-main-text {
          font-size: 12px !important; font-weight: 400 !important;
          color: #0A0A0A !important; font-family: 'Inter', sans-serif !important;
        }
        .gmp-place-autocomplete-suggestion-secondary-text {
          font-size: 10px !important; font-weight: 300 !important;
          color: rgba(10,10,10,0.45) !important;
        }
        .gmp-place-autocomplete-suggestion-main-text mark,
        .gmp-place-autocomplete-suggestion-secondary-text mark {
          color: #C41E1E !important; font-weight: 500 !important;
          background: transparent !important; text-decoration: none !important;
        }
        .gmp-place-autocomplete-attribution { display: none !important; }

        /* Legacy pac- kept as fallback */
        .pac-container {
          background: #FFFFFF !important; border: 1px solid #E5E4E0 !important;
          border-top: 2px solid #C41E1E !important; border-radius: 0 !important;
          box-shadow: 0 12px 40px rgba(0,0,0,0.1) !important;
          font-family: 'Inter', sans-serif !important;
          padding: 4px 0 !important; margin-top: 2px !important;
        }
        .pac-item {
          padding: 10px 14px !important; font-size: 11px !important;
          font-weight: 300 !important; color: #0A0A0A !important;
          border-top: 1px solid rgba(229,228,224,0.6) !important;
          cursor: pointer !important; line-height: 1.5 !important;
          font-family: 'Inter', sans-serif !important;
        }
        .pac-item:first-child { border-top: none !important; }
        .pac-item:hover, .pac-item-selected { background: rgba(196,30,30,0.05) !important; }
        .pac-item-query { font-size: 12px !important; font-weight: 400 !important; color: #0A0A0A !important; }
        .pac-matched { color: #C41E1E !important; font-weight: 500 !important; }
        .pac-icon { display: none !important; }
        .pac-logo::after { display: none !important; }
      `}</style>
    </div>
  )
}