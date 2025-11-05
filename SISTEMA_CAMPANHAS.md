# 🎯 SISTEMA DE CAMPANHAS SAZONAIS

**Data:** Novembro 2024  
**Localização:** `src/pages/Home.jsx`  
**Status:** ✅ ATIVO

---

## 📋 O QUE FOI IMPLEMENTADO

### **1. Meta Tags SEO para Compartilhamento**
```html
<!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
<meta property="og:image" content="/logo_armazem.png" />
<meta property="og:title" content="Armazém Skate Shop - Onde o Asfalto Encontra a Onda" />

<!-- Twitter Card -->
<meta name="twitter:image" content="/logo_armazem.png" />
<meta name="twitter:title" content="Armazém Skate Shop" />
```

**Resultado:**
- ✅ Quando compartilhar link no WhatsApp, Facebook, Twitter → Logo aparece
- ✅ Título e descrição profissionais
- ✅ Preview bonito em todas as redes sociais

---

### **2. Sistema de Banners Sazonais/Promocionais**

Um sistema **super fácil** de gerenciar campanhas no Hero Section da Home!

---

## 🎨 CAMPANHAS DISPONÍVEIS

### **1. 🌴 Esquenta Verão** (ATIVA)
```javascript
{
  id: 'esquenta-verao',
  title: '🌴 Esquenta Verão',
  subtitle: 'Armazém Skate Shop',
  description: 'Prepare-se para o verão com até 40% OFF em pranchas e acessórios!',
  image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80',
  active: true,  // ← ATIVA
}
```

---

### **2. ❄️ Liquidação de Inverno**
```javascript
{
  id: 'liquidacao-inverno',
  title: '❄️ Liquidação de Inverno',
  subtitle: 'Armazém Skate Shop',
  description: 'Mega liquidação! Até 70% OFF em vestuário e acessórios de inverno',
  image: 'https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=1920&q=80',
  active: false,
}
```

---

### **3. 🔥 Black Friday Armazém**
```javascript
{
  id: 'black-friday',
  title: '🔥 Black Friday Armazém',
  subtitle: 'Surf & Skate',
  description: 'Os melhores preços do ano! Até 50% OFF em TUDO + Frete Grátis',
  image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1920&q=80',
  active: false,
}
```

---

### **4. 🎒 Volta às Aulas**
```javascript
{
  id: 'volta-as-aulas',
  title: '🎒 Volta às Aulas',
  subtitle: 'Armazém Skate Shop',
  description: 'Começe o ano com estilo! 30% OFF em mochilas, ténis e skates',
  image: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=1920&q=80',
  active: false,
}
```

---

### **5. 👨‍👦 Especial Dia dos Pais**
```javascript
{
  id: 'dia-dos-pais',
  title: '👨‍👦 Especial Dia dos Pais',
  subtitle: 'Armazém Skate Shop',
  description: 'Presenteie o paizão com os melhores produtos! Kits especiais até 40% OFF',
  image: 'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?w=1920&q=80',
  active: false,
}
```

---

### **6. ✨ Nova Coleção 2025**
```javascript
{
  id: 'lancamento-colecao',
  title: '✨ Nova Coleção 2025',
  subtitle: 'Armazém Skate Shop',
  description: 'Confira os lançamentos da temporada! Estilo e performance para você',
  image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=1920&q=80',
  active: false,
}
```

---

### **7. 🏄 Padrão (Onde o asfalto encontra a onda)**
```javascript
{
  id: 'padrao',
  title: 'Onde o asfalto encontra a onda',
  subtitle: '',
  description: 'As melhores marcas de surf e skate em um só lugar',
  image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1920&q=80',
  active: false,
}
```

---

## 🚀 COMO USAR

### **Alterar Campanha Ativa:**

**1. Abra o arquivo:**
```
src/pages/Home.jsx
```

**2. Encontre o array `campaigns` (linha ~13):**
```javascript
const campaigns = [
  { id: 'esquenta-verao', active: true },   // ← ATIVA
  { id: 'liquidacao-inverno', active: false },
  { id: 'black-friday', active: false },
  // ...
];
```

**3. Mude o `active` para `true` na campanha desejada:**
```javascript
// ANTES - Esquenta Verão ativa
{ id: 'esquenta-verao', active: true },
{ id: 'black-friday', active: false },

// DEPOIS - Black Friday ativa
{ id: 'esquenta-verao', active: false },
{ id: 'black-friday', active: true },  // ← Mudou para true
```

**4. Salve o arquivo - PRONTO! 🎉**

---

## 🎨 CRIAR NOVA CAMPANHA

### **Template:**
```javascript
{
  id: 'sua-campanha',                    // ID único
  title: '🎉 Título da Campanha',       // Título grande
  subtitle: 'Armazém Skate Shop',       // Badge acima do título (opcional)
  description: 'Descrição promocional', // Subtítulo
  image: 'URL_DA_IMAGEM',               // Imagem de fundo (1920x1080)
  active: false,                         // true = ativa, false = inativa
}
```

---

### **Exemplo - Dia das Mães:**
```javascript
{
  id: 'dia-das-maes',
  title: '💐 Especial Dia das Mães',
  subtitle: 'Armazém Skate Shop',
  description: 'Presenteie quem você ama! Até 35% OFF em vestuário e acessórios',
  image: 'https://images.unsplash.com/photo-XXXXX',
  active: false,
}
```

---

### **Exemplo - Natal:**
```javascript
{
  id: 'natal',
  title: '🎄 Natal Armazém',
  subtitle: 'Surf & Skate',
  description: 'O presente perfeito está aqui! Até 50% OFF + Embrulho Grátis',
  image: 'https://images.unsplash.com/photo-XXXXX',
  active: false,
}
```

---

### **Exemplo - Carnaval:**
```javascript
{
  id: 'carnaval',
  title: '🎭 Esquenta Carnaval',
  subtitle: 'Armazém Skate Shop',
  description: 'Caia na folia com estilo! 30% OFF em toda linha street',
  image: 'https://images.unsplash.com/photo-XXXXX',
  active: false,
}
```

---

## 🖼️ DICAS DE IMAGENS

### **Requisitos:**
```
✅ Largura mínima: 1920px
✅ Proporção: 16:9
✅ Formato: JPG (melhor performance)
✅ Qualidade: 80-85%
✅ Ação/Movimento: Pessoas surfando/skatando
```

### **Onde Encontrar:**
```
1. Unsplash.com (gratuito)
2. Pexels.com (gratuito)
3. Banco de imagens próprio
4. Fotos profissionais contratadas
```

### **Pesquisas Sugeridas:**
```
- "surfing wave action"
- "skateboarding urban"
- "beach sunset surf"
- "skate park aerial"
- "surf lifestyle"
```

---

## 📱 VISUAL NO SITE

### **Estrutura:**
```
┌────────────────────────────────────┐
│                                    │
│  [Armazém Skate Shop]  ← Badge    │
│                                    │
│  🌴 Esquenta Verão    ← Título    │
│                                    │
│  Prepare-se para o verão...        │
│  ← Descrição                       │
│                                    │
│  [Compre Agora] [Conheça...]      │
│                                    │
│  Imagem de Fundo                   │
└────────────────────────────────────┘
```

---

## 🎯 QUANDO USAR CADA CAMPANHA

### **🌴 Esquenta Verão**
```
Período: Nov - Fev
Foco: Surf, pranchas, acessórios praia
```

### **❄️ Liquidação de Inverno**
```
Período: Jun - Ago
Foco: Vestuário, casacos, moletons
```

### **🔥 Black Friday**
```
Período: Novembro (última sexta)
Foco: Descontos massivos em tudo
```

### **🎒 Volta às Aulas**
```
Período: Jan - Fev
Foco: Mochilas, tênis, skates entry-level
```

### **👨‍👦 Dia dos Pais**
```
Período: Agosto
Foco: Kits, presentes, produtos premium
```

### **✨ Lançamento Coleção**
```
Período: Início de estações
Foco: Novos produtos, tendências
```

### **🏄 Padrão**
```
Período: Sem promoção ativa
Foco: Institucional, branding
```

---

## 📊 CALENDÁRIO SUGERIDO

### **Janeiro - Fevereiro**
```
🎒 Volta às Aulas
```

### **Março - Abril**
```
🏄 Padrão ou ✨ Lançamento Outono
```

### **Maio**
```
💐 Dia das Mães (criar nova)
```

### **Junho - Agosto**
```
❄️ Liquidação de Inverno
👨‍👦 Dia dos Pais (Agosto)
```

### **Setembro - Outubro**
```
✨ Lançamento Coleção Primavera
```

### **Novembro**
```
🔥 Black Friday
🌴 Esquenta Verão (pré)
```

### **Dezembro**
```
🎄 Natal (criar nova)
🎉 Ano Novo (criar nova)
```

---

## 🔧 TROUBLESHOOTING

### **Problema: Nenhuma campanha aparece**
```
Solução: Verifique se pelo menos uma tem active: true
Se todas estiverem false, o sistema usa a última (padrão)
```

### **Problema: Imagem não carrega**
```
Solução: Verifique a URL da imagem
Use URLs diretas (não encurtadas)
Teste a URL no navegador primeiro
```

### **Problema: Texto cortado em mobile**
```
Solução: Mantenha títulos com max 30 caracteres
Descrições com max 70 caracteres
```

### **Problema: Emoji não aparece**
```
Solução: Use emojis Unicode nativos (✅)
Copie e cole direto no código
```

---

## ✅ CHECKLIST DE MUDANÇA

Ao trocar de campanha:

```
☐ Escolher campanha adequada à época
☐ Mudar active: true na campanha desejada
☐ Mudar active: false nas outras
☐ Verificar se título e descrição estão corretos
☐ Verificar se imagem é apropriada
☐ Salvar arquivo
☐ Testar no navegador (desktop e mobile)
☐ Verificar se texto está legível sobre a imagem
☐ Confirmar que botões funcionam
```

---

## 💡 IDEIAS EXTRAS DE CAMPANHAS

### **Possíveis Campanhas Futuras:**
```
1. 🏖️ Circuito de Verão
   "Competições, eventos, descontos para atletas"

2. 🎸 Festival de Skate
   "Apoio a eventos locais, cultura skate"

3. 🌊 Ondas de Ofertas
   "Promoções relâmpago semanais"

4. 🛹 Skate Week
   "Semana do skate com workshops e descontos"

5. 👟 Mega Outlet
   "Queima de estoque com até 80% OFF"

6. 🎁 Compre & Ganhe
   "Na compra de X leve Y de brinde"

7. 🚚 Frete Grátis Brasil
   "Semana de frete grátis para todo Brasil"

8. 🏆 Aniversário Armazém
   "Celebração com descontos especiais"
```

---

## 📈 MÉTRICAS DE SUCESSO

### **Acompanhar:**
```
✅ Taxa de clique no botão "Compre Agora"
✅ Tempo de permanência na Home
✅ Taxa de conversão por campanha
✅ Compartilhamentos nas redes sociais
✅ Feedback dos clientes
```

---

## 🎉 RESULTADO FINAL

**Agora você tem:**

```
✅ Logo aparece ao compartilhar links
✅ 7 campanhas pré-configuradas
✅ Sistema fácil de alternar
✅ Visual profissional
✅ Totalmente responsivo
✅ Fácil manutenção
✅ Escalável (adicione quantas quiser)
```

---

## 🚀 PRÓXIMOS PASSOS SUGERIDOS

1. **Criar imagem social personalizada:**
   - Design com logo + slogan
   - Tamanho: 1200x630px
   - Salvar em: `/public/social-share.jpg`
   - Usar nas meta tags

2. **Automatizar campanhas:**
   - Sistema de agendamento
   - Ativar/desativar por data
   - Integração com calendário

3. **A/B Testing:**
   - Testar diferentes textos
   - Medir performance
   - Otimizar conversões

4. **Banco de imagens:**
   - Fotos profissionais próprias
   - Sessões de fotos temáticas
   - Consistência visual

---

**Sistema criado:** Campanhas Sazonais + SEO Social  
**Facilidade:** ⭐⭐⭐⭐⭐ (muito fácil de usar)  
**Impacto:** ⭐⭐⭐⭐⭐ (alto - visual e conversão)  
**Manutenção:** ⭐⭐⭐⭐⭐ (mínima - só mudar `active`)
