// app/actions/submitForm.js
'use server'

const URLS = {
  booking:   process.env.APPS_SCRIPT_URL,
  corporate: process.env.CORPORATE_ENQUIRY_URL,
  limore360:     process.env.LIMORE360_APPLY_URL,
}

export async function submitForm(type, payload) {
  const url = URLS[type]

  if (!url) throw new Error(`No URL configured for form type: ${type}`)

  const body = new URLSearchParams(payload).toString()

  await fetch(url, {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })

  return { success: true }
}