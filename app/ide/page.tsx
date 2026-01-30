'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function IDEPage() {
  const [iframeUrl, setIframeUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    const loadIDE = async () => {
      try {
        // Verificar autenticación
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          router.push('/login');
          return;
        }

        // Obtener token de sesión
        const { data: { session } } = await supabase.auth.getSession();
        
        if (!session) {
          throw new Error('No se pudo obtener la sesión');
        }

        // Construir URL con token
        const ideUrl = process.env.NEXT_PUBLIC_IDE_URL || 'https://plataforma-qd.vercel.app';
        const url = `${ideUrl}?token=${session.access_token}&user_id=${user.id}`;
        
        setIframeUrl(url);
        setLoading(false);
      } catch (err: any) {
        console.error('Error loading IDE:', err);
        setError(err.message || 'Error al cargar el IDE');
        setLoading(false);
      }
    };

    loadIDE();
  }, [supabase, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-qodeia-dark-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-qodeia-mint-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Cargando Howard OS...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-qodeia-dark-900 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-white mb-2">Error</h1>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-gradient-to-r from-qodeia-blue-500 to-qodeia-mint-500 text-white rounded-lg hover:shadow-lg transition-all"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full bg-qodeia-dark-900">
      {/* Header Bar */}
      <div className="h-16 bg-qodeia-dark-800 border-b border-qodeia-blue-500/20 flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push('/')}
            className="text-gray-400 hover:text-white transition-colors"
            title="Volver al inicio"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-2xl">💻</span>
            <h1 className="text-lg font-semibold text-white">Howard OS</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/agente"
            className="px-4 py-2 bg-qodeia-blue-500/20 text-qodeia-mint-400 rounded-lg hover:bg-qodeia-blue-500/30 transition-all flex items-center gap-2"
          >
            <span>🤖</span>
            <span className="text-sm font-medium">Agente IA</span>
          </a>
          
          <button
            onClick={() => window.location.reload()}
            className="text-gray-400 hover:text-white transition-colors"
            title="Recargar IDE"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>
      </div>

      {/* IDE Iframe */}
      <div className="h-[calc(100vh-4rem)]">
        <iframe
          src={iframeUrl}
          className="w-full h-full border-0"
          title="Howard OS IDE"
          allow="clipboard-read; clipboard-write"
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
        />
      </div>

      {/* Loading Overlay (shown briefly while iframe loads) */}
      <div className="fixed inset-0 bg-qodeia-dark-900 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500" id="iframe-loader">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-qodeia-mint-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Inicializando IDE...</p>
        </div>
      </div>
    </div>
  );
}
