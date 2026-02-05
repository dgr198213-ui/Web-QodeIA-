#!/bin/bash
# Script para configurar variables de entorno en Vercel para Web QodeIA
# Ejecutar desde el directorio del proyecto: ./configure-vercel-env.sh

set -e

PROJECT_NAME="web-qode-ia"
TEAM_ID="team_JAdXWfQ7CTEn4X65PX7iNJ5E"

echo "🚀 Configurando variables de entorno para $PROJECT_NAME en Vercel..."
echo ""

# Función para añadir variable de entorno
add_env() {
  local key=$1
  local value=$2
  local env_type=${3:-"production preview development"}
  
  echo "📝 Añadiendo $key..."
  
  for env in $env_type; do
    echo "$value" | vercel env add "$key" "$env" --yes 2>/dev/null || echo "  ⚠️  $key ya existe en $env"
  done
}

# Supabase Operativa (Agente)
add_env "NEXT_PUBLIC_SUPABASE_URL" "https://nknevqndawnokiaickkl.supabase.co"
add_env "NEXT_PUBLIC_SUPABASE_ANON_KEY" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rbmV2cW5kYXdub2tpYWlja2tsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NjYwNDYsImV4cCI6MjA4NTM0MjA0Nn0.-bbHiVQFBsThmIOw4DRxAuk1YQbPFrp4FPvWELxjU5M"

# Supabase Conocimiento (Howard OS)
add_env "NEXT_PUBLIC_KNOWLEDGE_SUPABASE_URL" "https://tztypjxqklxygfzbpkmm.supabase.co"
add_env "NEXT_PUBLIC_KNOWLEDGE_SUPABASE_ANON_KEY" "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6dHlwanhxa2x4eWdmemJwa21tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk0NjI5MTAsImV4cCI6MjA4NTAzODkxMH0.3rdL5389_b2evuZclL9pMOarn_Od3vg6Uwj-p--iZc8"

# URLs del Ecosistema
add_env "NEXT_PUBLIC_AGENT_URL" "https://mi-agente-qode-ia.vercel.app"
add_env "NEXT_PUBLIC_HOWARD_OS_URL" "https://plataforma-qd.vercel.app"
add_env "NEXT_PUBLIC_IDE_URL" "https://plataforma-qd.vercel.app"

# Configuración del Sitio
add_env "NEXT_PUBLIC_URL" "https://web-qode-ia.vercel.app"
add_env "NEXT_PUBLIC_SITE_URL" "https://qodeia.com"
add_env "NEXT_PUBLIC_CONTACT_EMAIL" "qodeia_info@gmail.com"

echo ""
echo "✅ Configuración completada!"
echo ""
echo "⚠️  NOTA: La variable GOOGLE_CLIENT_ID debe ser configurada manualmente"
echo "   cuando tengas las credenciales de Google Cloud Console."
echo ""
echo "🔄 Para aplicar los cambios, ejecuta:"
echo "   vercel --prod"
