import { NextResponse } from 'next/server'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL || 'http://192.168.0.70:8080'

async function proxyRequest(req: Request, params: { path: string[] }, method: string) {
  try {
    const path = params?.path?.join('/') || ''
    const url = new URL(`${API_BASE.replace(/\/$/, '')}/${path}`)
    // preserve querystring
    const incomingUrl = new URL(req.url)
    incomingUrl.searchParams.forEach((v, k) => url.searchParams.append(k, v))

    const headers: Record<string, string> = {}
    req.headers.forEach((v, k) => {
      // do not forward host header
      if (k.toLowerCase() === 'host') return
      headers[k] = v
    })

    const options: RequestInit = {
      method,
      headers,
      // forward body if present
      body: ['GET', 'HEAD'].includes(method) ? undefined : await req.text(),
    }

    const res = await fetch(url.toString(), options)
    const contentType = res.headers.get('content-type') || 'application/octet-stream'
    const body = await res.text()

    return new NextResponse(body, {
      status: res.status,
      headers: { 'content-type': contentType },
    })
  } catch (err) {
    console.error('Proxy error:', err)
    return NextResponse.json({ error: 'Proxy error' }, { status: 500 })
  }
}

export async function GET(req: Request, { params }: { params: { path: string[] } }) {
  return proxyRequest(req, params, 'GET')
}

export async function POST(req: Request, { params }: { params: { path: string[] } }) {
  return proxyRequest(req, params, 'POST')
}

export async function PUT(req: Request, { params }: { params: { path: string[] } }) {
  return proxyRequest(req, params, 'PUT')
}

export async function DELETE(req: Request, { params }: { params: { path: string[] } }) {
  return proxyRequest(req, params, 'DELETE')
}

export async function PATCH(req: Request, { params }: { params: { path: string[] } }) {
  return proxyRequest(req, params, 'PATCH')
}

export async function OPTIONS(req: Request, { params }: { params: { path: string[] } }) {
  return proxyRequest(req, params, 'OPTIONS')
}
