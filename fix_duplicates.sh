#!/bin/bash

# Lista de arquivos que podem ter duplicações
files=(
  "client/src/components/dashboards/ConstructionDashboard.tsx"
  "client/src/components/dashboards/FinanceDashboard.tsx"
  "client/src/components/dashboards/AcaiDashboard.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Verificando $file..."
    
    # Procurar por export default ou export function/const duplicados
    first_export=$(grep -n "export default\|export function\|export const" "$file" | head -1 | cut -d: -f1)
    second_export=$(grep -n "export default\|export function\|export const" "$file" | tail -n +2 | head -1 | cut -d: -f1)
    
    if [ ! -z "$second_export" ] && [ "$first_export" != "$second_export" ]; then
      echo "Encontradas duplicações em $file. Primeira export na linha $first_export, segunda na linha $second_export"
      
      # Encontrar onde termina a primeira função/componente
      end_line=$(awk "NR>$first_export && /^}/ {print NR; exit}" "$file")
      if [ ! -z "$end_line" ]; then
        echo "Cortando $file na linha $end_line"
        head -n "$end_line" "$file" > "temp_$(basename $file)" && mv "temp_$(basename $file)" "$file"
      fi
    else
      echo "Nenhuma duplicação encontrada em $file"
    fi
  fi
done
