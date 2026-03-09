import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const token = process.env.TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_TOKEN || process.env['telegram.bot.token'] || process.env.TELEGRAM_BOT
    const chatId = process.env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT || process.env['telegram.chat.id'] || process.env.TELEGRAM_CHAT

    if (!token || !chatId) {
      return NextResponse.json({ error: 'Missing Telegram configuration' }, { status: 500 })
    }

    const text = `Mensagem do portfólio\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}`

    const telegramRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
    })

    if (!telegramRes.ok) {
      const details = await telegramRes.text()
      console.error('Telegram API error', details)
      return NextResponse.json({ error: 'Telegram API error', details }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
