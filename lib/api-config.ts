/**
 * Configuración de Conexión del Ecosistema QodeIA
 * Gestiona las URLs del Agente y Howard OS
 */

export const API_CONFIG = {
  // El motor de ejecución y memoria operativa
  AGENT_URL: process.env.NEXT_PUBLIC_AGENT_URL || 'http://localhost:3001',
  
  // El sistema experto de arquitectura y contexto
  HOWARD_OS_URL: process.env.NEXT_PUBLIC_HOWARD_OS_URL || 'http://localhost:3002',
  
  // Endpoints específicos
  ENDPOINTS: {
    AGENT_CHAT: '/api/agent',
    MCP_STATS: '/api/mcp/stats',
    MCP_TEST: '/api/mcp/test',
    MCP_AUTH: '/api/mcp/auth/google',
  }
};

/**
 * Helper para realizar peticiones al Agente
 */
export async function callAgent(endpoint: string, options: RequestInit = {}) {
  const url = `${API_CONFIG.AGENT_URL}${endpoint}`;
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  
  if (!response.ok) {
    throw new Error(`Error en la llamada al Agente: ${response.statusText}`);
  }
  
  return response.json();
}
