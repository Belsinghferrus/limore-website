'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

// ─── Tokens ────────────────────────────────────────────────────────────────────
const RED     = '#C8102E'
const BG      = '#0D0D0D'
const BORDER  = 'rgba(255,255,255,0.07)'
const BORDER2 = 'rgba(255,255,255,0.12)'
const TEXT    = '#F8F7F4'
const MUTED   = 'rgba(248,247,244,0.45)'
const FAINT   = 'rgba(248,247,244,0.13)'
const FONT_B  = 'Inter, sans-serif'
const FONT_D  = 'Cormorant Garamond, Georgia, serif'

const DAYS   = ['Su','Mo','Tu','We','Th','Fr','Sa']
const MONTHS = ['January','February','March','April','May','June',
                'July','August','September','October','November','December']

// ─── Helpers ───────────────────────────────────────────────────────────────────
function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}
function getFirstDayOfWeek(year, month) {
  return new Date(year, month, 1).getDay()
}
function pad(n) {
  return String(n).padStart(2, '0')
}
function formatDisplay(dateStr, timeStr) {
  if (!dateStr) return ''
  const [y, m, d] = dateStr.split('-')
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  const base = `${d} ${months[parseInt(m, 10) - 1]} ${y}`
  return timeStr ? `${base} — ${timeStr}` : base
}
function getTodayStr() {
  const t = new Date()
  return `${t.getFullYear()}-${pad(t.getMonth() + 1)}-${pad(t.getDate())}`
}

// ─── Icons ─────────────────────────────────────────────────────────────────────
function ChevronLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.2"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1" y="3" width="14" height="12" rx="1.5"
        stroke="currentColor" strokeWidth="1.1"/>
      <path d="M1 7h14" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      <rect x="4" y="9.5" width="2" height="2" rx="0.4" fill="currentColor"/>
      <rect x="7.5" y="9.5" width="2" height="2" rx="0.4" fill="currentColor"/>
      <rect x="11" y="9.5" width="2" height="2" rx="0.4" fill="currentColor"/>
    </svg>
  )
}
function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.1"/>
      <path d="M8 5v3.5l2.5 1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  )
}

// ─── Calendar Panel ────────────────────────────────────────────────────────────
function CalendarPanel({ value, min, onChange }) {
  const today    = new Date()
  const initDate = value ? new Date(value + 'T00:00') : today
  const [viewYear,  setViewYear]  = useState(initDate.getFullYear())
  const [viewMonth, setViewMonth] = useState(initDate.getMonth())

  const selectedStr = value
  const minDate     = min ? new Date(min + 'T00:00') : new Date(today.setHours(0, 0, 0, 0))

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  const daysInMonth = getDaysInMonth(viewYear, viewMonth)
  const firstDay    = getFirstDayOfWeek(viewYear, viewMonth)
  const cells       = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const nowStr = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`

  return (
    <div style={{ padding: '16px 16px 12px' }}>
      {/* Month nav */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'14px' }}>
        <button onClick={prevMonth} aria-label="Previous month"
          style={{ background:'none', border:`1px solid ${BORDER}`, color:MUTED,
            width:'28px', height:'28px', display:'flex', alignItems:'center',
            justifyContent:'center', cursor:'pointer', borderRadius:'0', transition:'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor=BORDER2; e.currentTarget.style.color=TEXT }}
          onMouseLeave={e => { e.currentTarget.style.borderColor=BORDER;  e.currentTarget.style.color=MUTED }}>
          <ChevronLeft />
        </button>
        <span style={{ fontSize:'11px', fontFamily:FONT_D, fontWeight:400,
          color:TEXT, letterSpacing:'0.12em', textTransform:'uppercase' }}>
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button onClick={nextMonth} aria-label="Next month"
          style={{ background:'none', border:`1px solid ${BORDER}`, color:MUTED,
            width:'28px', height:'28px', display:'flex', alignItems:'center',
            justifyContent:'center', cursor:'pointer', borderRadius:'0', transition:'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor=BORDER2; e.currentTarget.style.color=TEXT }}
          onMouseLeave={e => { e.currentTarget.style.borderColor=BORDER;  e.currentTarget.style.color=MUTED }}>
          <ChevronRight />
        </button>
      </div>

      {/* Day labels */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:'2px', marginBottom:'6px' }}>
        {DAYS.map(d => (
          <div key={d} style={{ textAlign:'center', fontSize:'8px', fontFamily:FONT_B,
            fontWeight:500, letterSpacing:'0.1em', color:FAINT, padding:'4px 0', textTransform:'uppercase' }}>
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(7,1fr)', gap:'2px' }}>
        {cells.map((day, i) => {
          if (!day) return <div key={`e-${i}`} />
          const dateStr  = `${viewYear}-${pad(viewMonth + 1)}-${pad(day)}`
          const cellDate = new Date(dateStr + 'T00:00')
          const isPast   = cellDate < minDate
          const isToday  = dateStr === nowStr
          const isSel    = dateStr === selectedStr
          return (
            <button key={day} disabled={isPast} onClick={() => !isPast && onChange(dateStr)}
              style={{ background:isSel ? RED : 'transparent',
                border:isToday && !isSel ? `1px solid rgba(200,16,46,0.4)` : '1px solid transparent',
                color:isPast ? FAINT : isSel ? 'white' : TEXT,
                cursor:isPast ? 'not-allowed' : 'pointer',
                fontSize:'11px', fontFamily:FONT_B, fontWeight:isSel ? 500 : 300,
                padding:'7px 0', textAlign:'center', opacity:isPast ? 0.35 : 1,
                transition:'all 0.15s', borderRadius:'0' }}
              onMouseEnter={e => { if (!isPast && !isSel) e.currentTarget.style.background='rgba(200,16,46,0.12)' }}
              onMouseLeave={e => { if (!isSel) e.currentTarget.style.background='transparent' }}>
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Time Panel ────────────────────────────────────────────────────────────────
function TimePanel({ value, onChange }) {
  const [hour,   setHour]   = useState(value ? parseInt(value.split(':')[0]) % 12 || 12 : 9)
  const [minute, setMinute] = useState(value ? parseInt(value.split(':')[1]) : 0)
  const [period, setPeriod] = useState(value ? (parseInt(value.split(':')[0]) >= 12 ? 'PM' : 'AM') : 'AM')

  const commit = useCallback((h, m, p) => {
    let h24 = h
    if (p === 'AM' && h === 12) h24 = 0
    if (p === 'PM' && h !== 12) h24 = h + 12
    onChange(`${pad(h24)}:${pad(m)}`)
  }, [onChange])

  const setH = (h) => { setHour(h);   commit(h, minute, period) }
  const setM = (m) => { setMinute(m); commit(hour, m, period) }
  const setP = (p) => { setPeriod(p); commit(hour, minute, p) }

  const hours   = Array.from({ length: 12 }, (_, i) => i + 1)
  const minutes = [0,5,10,15,20,25,30,35,40,45,50,55]

  const scrollStyle = {
    display:'flex', flexDirection:'column', gap:'2px',
    overflowY:'auto', maxHeight:'180px',
    scrollbarWidth:'none', msOverflowStyle:'none',
  }
  const itemStyle = (active) => ({
    padding:'8px 0', textAlign:'center', fontSize:'13px', fontFamily:FONT_B,
    fontWeight:active ? 500 : 300, color:active ? TEXT : MUTED,
    background:active ? 'rgba(200,16,46,0.12)' : 'transparent',
    borderLeft:active ? `2px solid ${RED}` : '2px solid transparent',
    cursor:'pointer', transition:'all 0.15s', userSelect:'none',
  })

  return (
    <div style={{ padding:'16px' }}>
      <div style={{ fontSize:'8px', fontFamily:FONT_B, fontWeight:500,
        letterSpacing:'0.18em', color:FAINT, textTransform:'uppercase',
        marginBottom:'12px', textAlign:'center' }}>
        Select Time
      </div>
      <div style={{ display:'flex', gap:'8px', alignItems:'flex-start' }}>
        {/* Hours */}
        <div style={{ flex:1 }}>
          <div style={{ fontSize:'8px', fontFamily:FONT_B, color:FAINT,
            letterSpacing:'0.12em', textAlign:'center', textTransform:'uppercase', marginBottom:'6px' }}>Hr</div>
          <div style={scrollStyle}>
            {hours.map(h => (
              <div key={h} onClick={() => setH(h)} style={itemStyle(h === hour)}
                onMouseEnter={e => { if (h !== hour) e.currentTarget.style.color=TEXT }}
                onMouseLeave={e => { if (h !== hour) e.currentTarget.style.color=MUTED }}>
                {pad(h)}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ alignSelf:'center', color:MUTED, fontSize:'16px', fontFamily:FONT_D, marginTop:'20px' }}>:</div>

        {/* Minutes */}
        <div style={{ flex:1 }}>
          <div style={{ fontSize:'8px', fontFamily:FONT_B, color:FAINT,
            letterSpacing:'0.12em', textAlign:'center', textTransform:'uppercase', marginBottom:'6px' }}>Min</div>
          <div style={scrollStyle}>
            {minutes.map(m => (
              <div key={m} onClick={() => setM(m)} style={itemStyle(m === minute)}
                onMouseEnter={e => { if (m !== minute) e.currentTarget.style.color=TEXT }}
                onMouseLeave={e => { if (m !== minute) e.currentTarget.style.color=MUTED }}>
                {pad(m)}
              </div>
            ))}
          </div>
        </div>

        {/* AM/PM */}
        <div style={{ display:'flex', flexDirection:'column', gap:'6px', marginTop:'22px' }}>
          {['AM','PM'].map(p => (
            <button key={p} onClick={() => setP(p)}
              style={{ padding:'8px 10px', fontSize:'10px', fontFamily:FONT_B, fontWeight:500,
                letterSpacing:'0.1em', background:period===p ? RED : 'transparent',
                color:period===p ? 'white' : MUTED,
                border:`1px solid ${period===p ? RED : BORDER}`,
                cursor:'pointer', transition:'all 0.2s', borderRadius:'0' }}
              onMouseEnter={e => { if (period !== p) e.currentTarget.style.borderColor=BORDER2 }}
              onMouseLeave={e => { if (period !== p) e.currentTarget.style.borderColor=BORDER }}>
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Main DateTimePicker ───────────────────────────────────────────────────────
export default function DateTimePicker({
  label,
  dateValue,
  timeValue,
  onDateChange,
  onTimeChange,
  required,
  dir = 'ltr',
  minDate,
}) {
  // ✅ FIX 1: Hydration guard — render nothing interactive until client is mounted
  const [isMounted, setIsMounted] = useState(false)
  const [open,      setOpen]      = useState(false)
  const [tab,       setTab]       = useState('date')
  const [focused,   setFocused]   = useState(false)
  // ✅ FIX 2: Track if we're on mobile for repositioning
  const [isMobile,  setIsMobile]  = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    setIsMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [open])

  // Lock body scroll on mobile when picker is open
  useEffect(() => {
    if (isMobile && open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMobile, open])

  const handleDateChange = (d) => {
    onDateChange(d)
    setTab('time')
  }

  const todayStr     = isMounted ? getTodayStr() : ''
  const displayValue = formatDisplay(dateValue, timeValue)
  const hasValue     = !!dateValue

  // ✅ FIX 1: Return a stable, non-interactive placeholder during SSR
  if (!isMounted) {
    return (
      <div style={{ position: 'relative', direction: dir }}>
        {label && (
          <label style={{ display:'block', fontSize:'9px', fontFamily:FONT_B, fontWeight:500,
            letterSpacing:'0.18em', textTransform:'uppercase', color:MUTED, marginBottom:'8px' }}>
            {label}{required && <span style={{ color:RED, marginLeft:'3px' }}>*</span>}
          </label>
        )}
        <div style={{ width:'100%', padding:'13px 16px', background:'transparent',
          borderBottom:`1px solid ${BORDER}`, borderTop:'1px solid transparent',
          borderLeft:'1px solid transparent', borderRight:'1px solid transparent',
          display:'flex', alignItems:'center', gap:'10px' }}>
          <span style={{ color:FAINT, display:'flex' }}><CalendarIcon /></span>
          <span style={{ fontSize:'12px', fontFamily:FONT_B, fontWeight:300,
            color:FAINT, letterSpacing:'0.02em' }}>Select date &amp; time</span>
        </div>
      </div>
    )
  }

  // ✅ FIX 2: Dropdown position styles — fixed+centered on mobile, absolute on desktop
  const dropdownStyle = isMobile
    ? {
        position:        'fixed',
        top:             '50%',
        left:            '50%',
        transform:       'translate(-50%, -50%)',
        zIndex:          99999,
        width:           'calc(100vw - 32px)',
        maxWidth:        '340px',
        maxHeight:       '90vh',
        overflowY:       'auto',
        backgroundColor: BG,
        borderTop:       `2px solid ${RED}`,
        borderLeft:      `1px solid rgba(255,255,255,0.09)`,
        borderRight:     `1px solid rgba(255,255,255,0.09)`,
        borderBottom:    `1px solid rgba(255,255,255,0.09)`,
        boxShadow:       '0 20px 60px rgba(0,0,0,0.9)',
        animation:       'dtp-in 0.2s cubic-bezier(0.16,1,0.3,1)',
      }
    : {
        position:        'absolute',
        top:             'calc(100% + 6px)',
        left:            dir === 'rtl' ? 'auto' : 0,
        right:           dir === 'rtl' ? 0 : 'auto',
        zIndex:          9999,
        minWidth:        '272px',
        backgroundColor: BG,
        borderTop:       `2px solid ${RED}`,
        borderLeft:      `1px solid rgba(255,255,255,0.09)`,
        borderRight:     `1px solid rgba(255,255,255,0.09)`,
        borderBottom:    `1px solid rgba(255,255,255,0.09)`,
        boxShadow:       '0 20px 60px rgba(0,0,0,0.7)',
        animation:       'dtp-in 0.2s cubic-bezier(0.16,1,0.3,1)',
      }

  return (
    <div ref={ref} style={{ position:'relative', direction:dir }}>
      {/* ── Label ── */}
      {label && (
        <label style={{ display:'block', fontSize:'9px', fontFamily:FONT_B, fontWeight:500,
          letterSpacing:'0.18em', textTransform:'uppercase',
          color:focused || open ? 'rgba(200,16,46,0.8)' : MUTED,
          marginBottom:'8px', transition:'color 0.2s' }}>
          {label}{required && <span style={{ color:RED, marginLeft:'3px' }}>*</span>}
        </label>
      )}

      {/* ── Trigger input ── */}
      <button type="button"
        onClick={() => setOpen(o => !o)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-haspopup="true"
        aria-expanded={open}
        style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between',
          gap:'10px', padding:'13px 16px', background:'transparent', border:'none',
          borderBottom:`1px solid ${open || focused ? RED : BORDER}`,
          borderTop:`1px solid ${open || focused ? 'rgba(200,16,46,0.15)' : 'transparent'}`,
          borderLeft:`1px solid ${open || focused ? 'rgba(200,16,46,0.15)' : 'transparent'}`,
          borderRight:`1px solid ${open || focused ? 'rgba(200,16,46,0.15)' : 'transparent'}`,
          cursor:'pointer', textAlign:dir === 'rtl' ? 'right' : 'left', transition:'border-color 0.2s' }}>

        {/* Left: calendar icon + value */}
        <div style={{ display:'flex', alignItems:'center', gap:'10px', flex:1, minWidth:0 }}>
          <span style={{ color:hasValue ? RED : FAINT, flexShrink:0, display:'flex' }}>
            <CalendarIcon />
          </span>
          <span style={{ fontSize:'12px', fontFamily:FONT_B, fontWeight:300,
            color:hasValue ? TEXT : FAINT, whiteSpace:'nowrap', overflow:'hidden',
            textOverflow:'ellipsis', letterSpacing:'0.02em' }}>
            {hasValue ? displayValue : 'Select date & time'}
          </span>
        </div>

        {/* ✅ FIX 3: Clock icon — always visible, color indicates state */}
        <span style={{
          color: timeValue ? RED : FAINT,
          flexShrink: 0,
          display: 'flex',
          transition: 'color 0.2s',
          opacity: timeValue ? 1 : 0.5,
        }}>
          <ClockIcon />
        </span>
      </button>

      {/* ✅ FIX 2: Mobile backdrop overlay */}
      {open && isMobile && (
        <div
          onClick={() => setOpen(false)}
          style={{ position:'fixed', inset:0, zIndex:99998,
            background:'rgba(0,0,0,0.75)', backdropFilter:'blur(2px)' }}
        />
      )}

      {/* ── Dropdown panel ── */}
      {open && (
        <div style={dropdownStyle}>
          {/* Tab bar */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', borderBottom:`1px solid ${BORDER}` }}>
            {[
              { key:'date', icon:<CalendarIcon />, label:'Date' },
              { key:'time', icon:<ClockIcon />,    label:'Time' },
            ].map(({ key, icon, label: tLabel }) => (
              <button key={key} type="button" onClick={() => setTab(key)}
                style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'7px',
                  padding:'11px', background:tab===key ? 'rgba(200,16,46,0.08)' : 'transparent',
                  borderBottom:tab===key ? `2px solid ${RED}` : '2px solid transparent',
                  borderTop:'none', borderLeft:'none',
                  borderRight:key==='date' ? `1px solid ${BORDER}` : 'none',
                  color:tab===key ? RED : MUTED, fontSize:'9px', fontFamily:FONT_B,
                  fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase',
                  cursor:'pointer', transition:'all 0.2s' }}>
                {icon}
                {tLabel}
                {key==='date' && dateValue && (
                  <span style={{ width:'5px', height:'5px', borderRadius:'50%', background:RED, flexShrink:0 }}/>
                )}
                {key==='time' && timeValue && (
                  <span style={{ width:'5px', height:'5px', borderRadius:'50%', background:RED, flexShrink:0 }}/>
                )}
              </button>
            ))}
          </div>

          {/* Panel content */}
          {tab === 'date' && (
            <CalendarPanel value={dateValue} min={minDate || todayStr} onChange={handleDateChange} />
          )}
          {tab === 'time' && (
            <TimePanel value={timeValue} onChange={onTimeChange} />
          )}

          {/* Footer */}
          {dateValue && timeValue && (
            <div style={{ padding:'10px 16px', borderTop:`1px solid ${BORDER}`,
              display:'flex', alignItems:'center', justifyContent:'space-between', gap:'10px' }}>
              <span style={{ fontSize:'10px', fontFamily:FONT_B, fontWeight:300,
                color:MUTED, letterSpacing:'0.04em' }}>
                {formatDisplay(dateValue, timeValue)}
              </span>
              <button type="button" onClick={() => setOpen(false)}
                style={{ padding:'8px 16px', background:RED, color:'white', border:'none',
                  fontSize:'9px', fontFamily:FONT_B, fontWeight:500, letterSpacing:'0.18em',
                  textTransform:'uppercase', cursor:'pointer', flexShrink:0, transition:'background-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background='#A50D25'}
                onMouseLeave={e => e.currentTarget.style.background=RED}>
                Confirm
              </button>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes dtp-in {
          from { opacity:0; transform:translateY(-6px) scale(0.98); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        div::-webkit-scrollbar { display:none; }
      `}</style>
    </div>
  )
}