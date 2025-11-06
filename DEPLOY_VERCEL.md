# 🚀 GUIA DE DEPLOY NO VERCEL

---

## ❌ PROBLEMA: TELA PRETA/VAZIA

**Causa:** React Router precisa de configurações específicas no Vercel para funcionar corretamente.

**Solução:** Arquivos `vercel.json` e `vite.config.js` já foram configurados!

---

## ✅ ARQUIVOS CONFIGURADOS

### **1. vercel.json** (✅ Criado)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```
**O que faz:** Redireciona todas as rotas para index.html (necessário para React Router)

### **2. vite.config.js** (✅ Atualizado)
```javascript
{
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
}
```
**O que faz:** Garante que o build seja feito corretamente

---

## 🔄 FAZER NOVO DEPLOY

### **OPÇÃO 1: Via Git (Recomendado)**

**1. Fazer commit das mudanças:**
```bash
git add .
git commit -m "fix: adicionar configurações para Vercel"
git push origin main
```

**2. Vercel detecta automaticamente e faz novo deploy**
- Aguarde 2-3 minutos
- Acesse: https://armazemskateshopcombr.vercel.app/

---

### **OPÇÃO 2: Via Dashboard Vercel**

**1. Acesse o Dashboard:**
```
https://vercel.com/dashboard
```

**2. Encontre seu projeto:**
- Clique em "armazemskateshopcombr"

**3. Ir em "Deployments":**
- Clique no último deployment
- Clique "Redeploy"
- Selecione "Use existing Build Cache" = OFF
- Clique "Redeploy"

---

### **OPÇÃO 3: Via Vercel CLI**

**1. Instalar Vercel CLI:**
```bash
npm install -g vercel
```

**2. Fazer login:**
```bash
vercel login
```

**3. Deploy:**
```bash
cd c:\xampp\htdocs\armazem_skate_shop2.0
vercel --prod
```

---

## 🔧 CONFIGURAÇÕES DO VERCEL

### **No Dashboard Vercel:**

**1. Settings > General:**
```
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**2. Settings > Environment Variables:**
```
(Nenhuma necessária por enquanto)
```

---

## 🧪 VERIFICAR SE FUNCIONOU

### **1. Acesse o site:**
```
https://armazemskateshopcombr.vercel.app/
```

### **2. Teste as rotas:**
```
/ (Home)
/produtos (Produtos)
/produto/1 (Produto específico)
/sobre (Sobre)
/contato (Contato)
/login (Login)
/esqueceu-senha (Esqueceu senha)
```

### **3. Verifique no console do navegador:**
```
F12 > Console
Não deve ter erros
```

---

## 🐛 TROUBLESHOOTING

### **Problema 1: Ainda tela preta**

**Solução:**
1. Limpar cache do Vercel:
   - Dashboard > Deployments
   - Redeploy sem cache
2. Verificar logs de build:
   - Dashboard > Deployments > View Function Logs

---

### **Problema 2: Erro 404 nas rotas**

**Solução:**
```bash
# Verificar se vercel.json está no root
# Verificar se tem:
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

### **Problema 3: Imagens não aparecem**

**Solução:**
```javascript
// Usar caminhos absolutos
<img src="/logo_armazem.png" />

// OU importar
import logo from '/logo_armazem.png'
<img src={logo} />
```

---

### **Problema 4: Build falha**

**Verificar:**
```bash
# Testar build localmente
npm run build

# Se der erro, consertar primeiro localmente
npm run dev
```

---

## 📊 LOGS DO VERCEL

### **Ver logs de erro:**

**1. Durante o build:**
```
Dashboard > Deployments > [Latest] > Building
```

**2. Durante execução:**
```
Dashboard > Deployments > [Latest] > Function Logs
```

---

## ✅ CHECKLIST DE DEPLOY

```
✅ vercel.json criado
✅ vite.config.js configurado
✅ package.json com scripts corretos
✅ .gitignore correto
✅ Commit feito
✅ Push para Git
✅ Vercel faz novo deploy
✅ Site funcionando
✅ Rotas funcionando
✅ Imagens carregando
```

---

## 🎯 PRÓXIMOS PASSOS APÓS DEPLOY

### **1. Domínio Personalizado:**
```
Dashboard > Settings > Domains
Adicionar: www.armazemskate.com.br
```

### **2. Analytics:**
```
Dashboard > Analytics
Ativar Vercel Analytics
```

### **3. Otimizações:**
```
- Ativar Image Optimization
- Ativar Edge Functions
- Configurar CDN
```

---

## 🌐 VARIÁVEIS DE AMBIENTE (Futuro)

### **Para produção:**

**Dashboard > Settings > Environment Variables:**

```bash
# API
VITE_API_URL=https://sua-api.com

# Google Analytics
VITE_GA_ID=UA-XXXXXXXXX-X

# Outras configs
VITE_ENV=production
```

---

## 📱 TESTAR EM MÚLTIPLOS DISPOSITIVOS

### **Depois do deploy:**

```
Desktop:  https://armazemskateshopcombr.vercel.app/
Mobile:   https://armazemskateshopcombr.vercel.app/
Tablet:   https://armazemskateshopcombr.vercel.app/
```

**Ferramentas de teste:**
- Chrome DevTools (F12 > Toggle Device)
- BrowserStack
- LambdaTest

---

## 🔄 ATUALIZAR O SITE

### **Fluxo de trabalho:**

```bash
# 1. Fazer mudanças locais
npm run dev

# 2. Testar
# Verificar se está tudo ok

# 3. Build local (opcional)
npm run build
npm run preview

# 4. Commit
git add .
git commit -m "feat: nova funcionalidade"

# 5. Push
git push origin main

# 6. Vercel faz deploy automático
# Aguardar 2-3 minutos
```

---

## 📊 MONITORAMENTO

### **Vercel fornece:**

```
✅ Uptime monitoring
✅ Performance metrics
✅ Error tracking
✅ Analytics
✅ Logs em tempo real
```

**Acesse:**
```
Dashboard > [Seu Projeto] > Analytics
```

---

## 🎨 SEO NO VERCEL

### **Já está configurado!**

```
✅ Meta tags Open Graph
✅ Twitter Cards
✅ Structured Data
✅ Sitemap (criar futuramente)
✅ robots.txt (criar futuramente)
```

---

## 🚨 IMPORTANTE

### **URLs no código:**

**Atualizar quando tiver domínio próprio:**

```javascript
// src/components/SEO.jsx (linha 14)
const siteUrl = 'https://armazemskateshopcombr.vercel.app';

// Depois com domínio:
const siteUrl = 'https://www.armazemskate.com.br';
```

---

## ✅ COMANDOS RÁPIDOS

```bash
# Ver preview local
npm run build && npm run preview

# Deploy via CLI
vercel --prod

# Ver logs
vercel logs

# Ver info do projeto
vercel inspect
```

---

## 🎯 RESULTADO ESPERADO

### **Depois do deploy correto:**

```
✅ Site abre normalmente
✅ Todas as rotas funcionam
✅ Imagens carregam
✅ Navegação OK
✅ SEO funcionando
✅ Mobile responsivo
✅ Performance alta
```

---

## 📞 SUPORTE

### **Se ainda não funcionar:**

**1. Verificar logs:**
```
vercel logs --follow
```

**2. Limpar tudo e começar de novo:**
```bash
# Deletar .vercel/
rm -rf .vercel

# Novo deploy
vercel --prod
```

**3. Suporte Vercel:**
```
https://vercel.com/support
```

---

## 🎉 DEPLOY COMPLETO!

**Com as configurações feitas, seu site deve funcionar perfeitamente no Vercel!**

**Faça o commit e push, e em poucos minutos estará no ar! 🚀**

---

**Qualquer dúvida, verifique os logs no Dashboard do Vercel!**
