# 📧 Setup EmailJS - IA Consultora

## Para ativar envio automático de emails:

### 1. Criar conta no EmailJS
- Acesse: https://www.emailjs.com/
- Criar conta gratuita (até 200 emails/mês)

### 2. Configurar Serviço de Email
- Dashboard → Email Services → Add New Service
- Escolher: Gmail, Outlook, ou outro
- Configurar e obter SERVICE_ID

### 3. Criar Template de Email
- Dashboard → Email Templates → Create New Template
- Template sugerido:

```
Assunto: Relatório IA Personalizado - {{to_name}}

Olá {{to_name}},

{{message}}

---
Equipa Construware
contato@construware.pt
+351 963 901 577
```

### 4. Atualizar Código
No arquivo `ai-consultant.tsx`, trocar:

```typescript
const EMAIL_SERVICE_ID = 'service_construware';     // → Seu Service ID
const EMAIL_TEMPLATE_ID = 'template_relatorio';     // → Seu Template ID  
const EMAIL_PUBLIC_KEY = 'your_public_key_here';    // → Sua Public Key
```

### 5. Testar
- Reiniciar aplicação
- Testar IA com email real
- Verificar recebimento

## Fallback Atual ✅
- Sem configuração → Abre cliente de email local
- Com configuração → Envio automático
- **Sempre funciona!** 

## Para ativar envio automático de emails:

### 1. Criar conta no EmailJS
- Acesse: https://www.emailjs.com/
- Criar conta gratuita (até 200 emails/mês)

### 2. Configurar Serviço de Email
- Dashboard → Email Services → Add New Service
- Escolher: Gmail, Outlook, ou outro
- Configurar e obter SERVICE_ID

### 3. Criar Template de Email
- Dashboard → Email Templates → Create New Template
- Template sugerido:

```
Assunto: Relatório IA Personalizado - {{to_name}}

Olá {{to_name}},

{{message}}

---
Equipa Construware
contato@construware.pt
+351 963 901 577
```

### 4. Atualizar Código
No arquivo `ai-consultant.tsx`, trocar:

```typescript
const EMAIL_SERVICE_ID = 'service_construware';     // → Seu Service ID
const EMAIL_TEMPLATE_ID = 'template_relatorio';     // → Seu Template ID  
const EMAIL_PUBLIC_KEY = 'your_public_key_here';    // → Sua Public Key
```

### 5. Testar
- Reiniciar aplicação
- Testar IA com email real
- Verificar recebimento

## Fallback Atual ✅
- Sem configuração → Abre cliente de email local
- Com configuração → Envio automático
- **Sempre funciona!** 