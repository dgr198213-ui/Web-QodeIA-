import { NextRequest, NextResponse } from 'next/server';
import { callAgentBackend } from '@/lib/api-config';

export async function POST(
  request: NextRequest,
  { params }: { params: { slug?: string[] } }
) {
  // El frontend llama a /api/agent, slug es undefined.
  // El frontend llama a /api/agent/reload, slug es ['reload'].
  const pathSuffix = params.slug ? `/${params.slug.join('/')}` : '';
  const path = `/api/agent${pathSuffix}`;

  const body = await request.json().catch(() => ({}));

  try {
    const response = await callAgentBackend(path, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Authorization': request.headers.get('Authorization') || '',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug?: string[] } }
) {
  const pathSuffix = params.slug ? `/${params.slug.join('/')}` : '';
  const path = `/api/agent${pathSuffix}`;

  try {
    const response = await callAgentBackend(path, {
      method: 'GET',
      headers: {
        'Authorization': request.headers.get('Authorization') || '',
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
