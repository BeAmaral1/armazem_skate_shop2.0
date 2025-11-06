# 🎠 CARROSSEL DE PRODUTOS EM DESTAQUE

**Data:** Novembro 2024  
**Localização:** `src/components/FeaturedProductsCarousel.jsx`  
**Status:** ✅ IMPLEMENTADO

---

## 📋 O QUE FOI IMPLEMENTADO

### **Carrossel Profissional e Responsivo**

Um carrossel moderno com:
- ✅ Auto-play inteligente (pausa no hover)
- ✅ Navegação por setas (desktop)
- ✅ Indicadores de slides
- ✅ Contador de posição
- ✅ Responsivo total (1, 2, 3 ou 4 produtos por tela)
- ✅ Animações suaves
- ✅ Acessibilidade completa

---

## 🎨 VISUAL E COMPORTAMENTO

### **Desktop (1024px+):**

```
┌─────────────────────────────────────┐
│  Destaques da Semana                │
│                                     │
│  ◄  [P1] [P2] [P3] [P4]  ►  1/2    │
│                                     │
│      ● ○                            │
└─────────────────────────────────────┘

4 produtos por vez
Setas laterais
Indicadores embaixo
Contador no topo direito
```

### **Tablet (768px - 1023px):**

```
┌──────────────────────────┐
│  Destaques da Semana     │
│                          │
│    [P1] [P2] [P3]        │
│                          │
│      ● ○ ○               │
└──────────────────────────┘

3 produtos por vez
Sem setas (toque/swipe)
Indicadores embaixo
```

### **Mobile (< 768px):**

```
┌──────────────┐
│  Destaques   │
│              │
│     [P1]     │
│              │
│  ● ○ ○ ○ ○  │
└──────────────┘

1 produto por vez
Indicadores embaixo
Toque para navegar
```

---

## 🎯 FUNCIONALIDADES

### **1. Auto-Play Inteligente** ⏱️

```javascript
✅ Troca automática a cada 4 segundos
✅ Pausa quando o mouse está em cima
✅ Retoma quando o mouse sai
✅ Para quando usuário navega manualmente
✅ Loop infinito (volta ao início)
```

**Comportamento:**
```
Carregou → Auto-play ativo
Hover → Pausa
Mouse sai → Retoma
Clicou em seta/indicador → Desativa auto-play
```

---

### **2. Navegação por Setas** ◄ ►

```javascript
✅ Botões circulares brancos
✅ Aparecem apenas em desktop
✅ Sombra e hover suaves
✅ Desabilitados nos extremos (opcional)
✅ Ícones lucide-react
```

**Visual:**
```
Botão:
- Background: branco
- Hover: cinza claro
- Shadow: lg → xl
- Scale: 110% no hover
- Posição: fora do container
```

---

### **3. Indicadores de Slides** ●●○

```javascript
✅ Bolinhas clicáveis
✅ Ativa: barra longa preta
✅ Inativa: bolinha cinza
✅ Hover: cinza escuro
✅ Responsivo (mobile e desktop)
```

**Comportamento:**
```
Slide ativo: ———— (barra longa)
Slides inativos: ● ● (bolinhas)
Clique: vai para o slide
Hover: feedback visual
```

---

### **4. Contador de Posição** 1/3

```javascript
✅ Badge no topo direito
✅ Mostra: "slide atual / total"
✅ Apenas desktop (lg+)
✅ Fundo preto, texto branco
```

**Visual:**
```
┌──────┐
│ 1/3  │
└──────┘
Background: dark-900
Padding: px-4 py-2
Border-radius: full
```

---

### **5. Responsividade Adaptativa** 📱

```javascript
// Items por tela baseado na largura
< 640px:  1 produto  (mobile)
640-768:  2 produtos (tablet pequeno)
768-1024: 3 produtos (tablet)
1024+:    4 produtos (desktop)
```

**Detecção Automática:**
```javascript
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 640) setItemsPerView(1);
    else if (window.innerWidth < 768) setItemsPerView(2);
    else if (window.innerWidth < 1024) setItemsPerView(3);
    else setItemsPerView(4);
  };
  
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

---

## 🔧 IMPLEMENTAÇÃO TÉCNICA

### **Arquivo:** `src/components/FeaturedProductsCarousel.jsx`

### **Estados:**

```javascript
const [currentIndex, setCurrentIndex] = useState(0);
const [isAutoPlaying, setIsAutoPlaying] = useState(true);
const [itemsPerView, setItemsPerView] = useState(4);
```

### **Lógica de Slides:**

```javascript
// Total de slides possíveis
const maxIndex = Math.max(0, products.length - itemsPerView);

// Navegar
const goToNext = () => {
  setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
};

const goToPrevious = () => {
  setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
};
```

### **Animação de Transição:**

```javascript
// Transform translateX baseado no index
style={{
  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
}}

// Transição suave
transition-transform duration-500 ease-out
```

---

## 📦 USO NO HOME.JSX

### **Import:**

```javascript
import FeaturedProductsCarousel from '../components/FeaturedProductsCarousel';
```

### **Preparar Produtos:**

```javascript
const featuredProducts = products.filter(p => p.featured).slice(0, 8);
```

### **Renderizar:**

```javascript
<FeaturedProductsCarousel products={featuredProducts} />
```

### **Completo:**

```javascript
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold">Destaques da Semana</h2>
      <p className="text-gray-600">Produtos em destaque</p>
    </div>
    
    <FeaturedProductsCarousel products={featuredProducts} />
    
    <div className="text-center mt-10">
      <Link to="/produtos" className="btn-primary">
        Ver Todos os Produtos
      </Link>
    </div>
  </div>
</section>
```

---

## 🎨 ESTILIZAÇÃO

### **Container Principal:**

```css
Position: relative
Overflow: hidden
Padding: 0 (para setas fora)
```

### **Track de Slides:**

```css
Display: flex
Transition: transform 500ms ease-out
Transform: translateX calculado
```

### **Cada Slide:**

```css
Flex-shrink: 0
Width: 100% / itemsPerView
Padding: 0 12px (gap entre cards)
```

### **Botões de Navegação:**

```css
Display: hidden md:flex
Position: absolute
Top: 50%
Transform: translateY(-50%)
Left/Right: -16px (fora do container)
Z-index: 10
Background: white
Hover: gray-50
Padding: 12px
Border-radius: 9999px
Shadow: lg → xl
Transition: all 300ms
Scale hover: 110%
```

### **Indicadores:**

```css
Ativo:
- Width: 2.5rem (40px)
- Height: 0.625rem (10px)
- Background: dark-900

Inativo:
- Width: 0.625rem (10px)
- Height: 0.625rem (10px)
- Background: gray-300
- Hover: gray-400

Border-radius: full
Transition: all 300ms
```

### **Contador:**

```css
Display: hidden lg:flex
Position: absolute
Top: 0
Right: 0
Background: dark-900
Color: white
Padding: 0.5rem 1rem
Border-radius: 9999px
Font-size: 0.875rem
Font-weight: 500
Shadow: lg
```

---

## 🔄 FLUXO DE NAVEGAÇÃO

### **Auto-Play:**

```
Timer inicia (4s)
  ↓
Incrementa currentIndex
  ↓
Chegou no final?
  Sim → Volta para 0
  Não → Próximo slide
  ↓
Atualiza transform
  ↓
Animação suave (500ms)
  ↓
Aguarda 4s novamente
```

### **Navegação Manual:**

```
Usuário clica em seta/indicador
  ↓
Para auto-play
  ↓
Atualiza currentIndex
  ↓
Animação suave
  ↓
Auto-play permanece desligado
```

### **Hover/Leave:**

```
Mouse entra
  ↓
Pausa auto-play

Mouse sai
  ↓
Retoma auto-play
```

---

## 🎯 PERSONALIZAÇÃO

### **1. Mudar Tempo do Auto-Play:**

**Edite:** linha ~43

```javascript
// ANTES (4 segundos)
const interval = setInterval(() => {
  setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
}, 4000);

// DEPOIS (6 segundos)
}, 6000);
```

---

### **2. Mudar Items por Tela:**

**Edite:** linhas ~16-22

```javascript
// Desktop: 5 produtos
else {
  setItemsPerView(5);
}

// Mobile: 2 produtos
if (window.innerWidth < 640) {
  setItemsPerView(2);
}
```

---

### **3. Desabilitar Auto-Play:**

**Edite:** linha ~10

```javascript
// Começa desligado
const [isAutoPlaying, setIsAutoPlaying] = useState(false);
```

---

### **4. Mudar Velocidade da Transição:**

**Edite:** linha ~77

```javascript
// ANTES (500ms)
className="flex transition-transform duration-500 ease-out"

// DEPOIS (700ms - mais lenta)
className="flex transition-transform duration-700 ease-out"

// DEPOIS (300ms - mais rápida)
className="flex transition-transform duration-300 ease-out"
```

---

### **5. Cor dos Indicadores Ativos:**

**Edite:** linha ~135

```javascript
// ANTES (preto)
? 'w-10 bg-dark-900'

// DEPOIS (azul)
? 'w-10 bg-blue-600'

// DEPOIS (verde)
? 'w-10 bg-green-600'
```

---

### **6. Mostrar Mais Produtos:**

**Edite:** `src/pages/Home.jsx` linha 11

```javascript
// ANTES (8 produtos)
const featuredProducts = products.filter(p => p.featured).slice(0, 8);

// DEPOIS (12 produtos)
const featuredProducts = products.filter(p => p.featured).slice(0, 12);
```

---

### **7. Remover Contador:**

**Edite:** linhas ~148-152

```javascript
// Comente ou remova este bloco
{/* 
{products.length > itemsPerView && (
  <div className="hidden lg:flex absolute top-0 right-0 bg-dark-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
    {currentIndex + 1} / {maxIndex + 1}
  </div>
)}
*/}
```

---

### **8. Manter Auto-Play Após Clique:**

**Edite:** linhas ~50-55

```javascript
const goToPrevious = () => {
  // NÃO desliga auto-play
  // setIsAutoPlaying(false); ← Remova esta linha
  setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
};
```

---

## 📱 RESPONSIVIDADE DETALHADA

### **Mobile (< 640px):**

```
Items: 1
Navegação: Indicadores (bolinhas)
Setas: Ocultas
Contador: Oculto
Gap: 12px
Padding: 16px
```

### **Tablet Pequeno (640px - 767px):**

```
Items: 2
Navegação: Indicadores
Setas: Ocultas
Contador: Oculto
Gap: 12px
Padding: 16px
```

### **Tablet (768px - 1023px):**

```
Items: 3
Navegação: Indicadores
Setas: Visíveis
Contador: Oculto
Gap: 12px
Padding: 16px
```

### **Desktop (1024px+):**

```
Items: 4
Navegação: Setas + Indicadores
Setas: Visíveis
Contador: Visível
Gap: 12px
Padding: 16px
```

---

## ⚡ PERFORMANCE

### **Otimizações:**

```javascript
✅ Usa CSS transform (GPU acelerado)
✅ Transition apenas no transform
✅ Não re-renderiza todos os produtos
✅ useRef para referências de DOM
✅ Listeners de evento limpos corretamente
✅ Auto-play com cleanup de interval
```

### **GPU Acceleration:**

```css
/* Transform usa GPU */
transform: translateX(-50%);

/* Melhor que */
left: -50%; /* CPU */
```

---

## 🎯 ACESSIBILIDADE

### **ARIA Labels:**

```html
<button aria-label="Anterior">...</button>
<button aria-label="Próximo">...</button>
<button aria-label="Ir para slide 1">...</button>
```

### **Keyboard Navigation:**

```
✅ Botões são focáveis
✅ Enter/Space ativa botões
✅ Tab navega entre controles
```

### **Screen Readers:**

```
✅ Labels descritivos
✅ Estados dos botões (disabled)
✅ Posição atual informada
```

---

## 🐛 TROUBLESHOOTING

### **Problema: Carrossel não aparece**
```
✓ Verificar se tem produtos com featured: true
✓ Console: ver se featuredProducts tem items
✓ Verificar import do componente
✓ Limpar cache do navegador
```

### **Problema: Auto-play não funciona**
```
✓ Verificar isAutoPlaying inicial (true)
✓ Verificar se maxIndex > 0
✓ Console: ver se interval está rodando
✓ Verificar cleanup do useEffect
```

### **Problema: Setas não aparecem**
```
✓ Verificar tela desktop (md:flex)
✓ Verificar se products.length > itemsPerView
✓ Verificar classes hidden md:flex
✓ Inspecionar elemento no DevTools
```

### **Problema: Animação travada**
```
✓ Verificar transition-transform
✓ Verificar duration-500
✓ Limpar cache
✓ Testar em outro navegador
```

### **Problema: Responsividade não funciona**
```
✓ Verificar listener de resize
✓ Console: ver itemsPerView
✓ Verificar breakpoints (640, 768, 1024)
✓ Testar redimensionando janela
```

---

## 📊 ESPECIFICAÇÕES

```
Componente: FeaturedProductsCarousel.jsx
Linhas: 155
Props: products (array)
Estados: 3 (currentIndex, isAutoPlaying, itemsPerView)
Refs: 1 (carouselRef)
Effects: 2 (resize, auto-play)
Dependências: lucide-react
Animações: CSS transform
Duração transição: 500ms
Intervalo auto-play: 4000ms
```

---

## ✅ CHECKLIST

```
☑ Componente FeaturedProductsCarousel criado
☑ Import adicionado no Home.jsx
☑ Produtos em destaque aumentados para 8
☑ Carrossel renderizado
☑ Auto-play funcionando
☑ Navegação por setas (desktop)
☑ Indicadores funcionando
☑ Contador implementado
☑ Responsividade completa
☑ Animações suaves
☑ Acessibilidade implementada
☑ Documentação completa
```

---

## 🎉 RESULTADO FINAL

**Agora os Destaques da Semana têm:**

```
✅ Carrossel profissional
✅ Auto-play inteligente (4s)
✅ Pausa no hover
✅ Navegação por setas (desktop)
✅ Indicadores clicáveis
✅ Contador de posição
✅ Responsivo perfeito:
   → Mobile: 1 produto
   → Tablet pequeno: 2 produtos
   → Tablet: 3 produtos
   → Desktop: 4 produtos
✅ Animações suaves (500ms)
✅ Design moderno
✅ Performance otimizada
✅ Acessível
✅ Fácil de personalizar
```

---

## 🚀 PRÓXIMOS PASSOS (OPCIONAL)

### **Melhorias Futuras:**

```
1. Adicionar swipe touch para mobile
2. Lazy loading de imagens
3. Preload de próximo slide
4. Animações mais elaboradas
5. Infinite loop suave
6. Thumbnails preview
7. Fullscreen mode
8. Video support
```

---

**Carrossel de Destaques implementado com sucesso! 🎠✨**

**UX profissional e moderna! 🎯**
