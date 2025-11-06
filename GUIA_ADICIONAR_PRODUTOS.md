# 📦 GUIA COMPLETO: ADICIONAR PRODUTOS REAIS

**Data:** Novembro 2024  
**Arquivo:** `src/data/products.js`  
**Status:** ✅ SISTEMA DE ESTOQUE IMPLEMENTADO

---

## 📋 ÍNDICE

1. [Como Adicionar Produtos](#como-adicionar-produtos)
2. [Estrutura de um Produto](#estrutura-de-um-produto)
3. [Como Adicionar Imagens](#como-adicionar-imagens)
4. [Sistema de Estoque](#sistema-de-estoque)
5. [Categorias e Subcategorias](#categorias-e-subcategorias)
6. [Exemplos Práticos](#exemplos-práticos)
7. [Dicas e Boas Práticas](#dicas-e-boas-práticas)

---

## 🎯 COMO ADICIONAR PRODUTOS

### **Passo 1: Abrir o Arquivo**

```
Navegue até: src/data/products.js
```

### **Passo 2: Localizar o Array de Produtos**

```javascript
export const products = [
  // Produtos existentes...
];
```

### **Passo 3: Adicionar Novo Produto**

```javascript
export const products = [
  // ... produtos existentes ...
  
  // SEU NOVO PRODUTO AQUI
  {
    id: 15,  // Próximo ID disponível
    name: 'Nome do Produto',
    category: 'Categoria',
    price: 299.90,
    stock: 10,  // QUANTIDADE EM ESTOQUE
    // ... outros campos
  }
];
```

---

## 📝 ESTRUTURA DE UM PRODUTO

### **Campos Obrigatórios:**

```javascript
{
  id: 1,                    // Número único (não repetir!)
  name: 'Nome do Produto',  // Nome completo
  category: 'Categoria',    // Surf, Skate, Vestuário, Acessórios, Calçados
  price: 299.90,            // Preço em reais
  stock: 10,                // QUANTIDADE EM ESTOQUE (0 = fora de estoque)
  image: 'URL da imagem',   // Imagem principal
  images: ['url1', 'url2'], // Galeria de imagens
  description: 'Descrição detalhada do produto',
  sizes: ['P', 'M', 'G'],   // Tamanhos disponíveis
  colors: ['Preto'],        // Cores disponíveis
  brand: 'Marca',           // Marca do produto
  inStock: true,            // true ou false (legado, use stock)
  featured: false,          // Aparece em destaque? true/false
  rating: 4.5,              // Avaliação (0-5)
  reviews: []               // Array de avaliações
}
```

---

## 🖼️ COMO ADICIONAR IMAGENS

### **Opção 1: Upload de Imagens (RECOMENDADO)**

**1. Criar pasta de imagens:**
```
public/
  └── images/
      └── products/
          ├── produto-1/
          │   ├── principal.jpg
          │   ├── lateral.jpg
          │   └── detalhe.jpg
          └── produto-2/
              └── principal.jpg
```

**2. Referenciar no código:**
```javascript
{
  id: 1,
  name: 'Tênis Nike SB',
  image: '/images/products/produto-1/principal.jpg',
  images: [
    '/images/products/produto-1/principal.jpg',
    '/images/products/produto-1/lateral.jpg',
    '/images/products/produto-1/detalhe.jpg'
  ],
  // ...
}
```

### **Opção 2: URLs Externas (Temporário)**

```javascript
{
  id: 1,
  image: 'https://seusite.com/imagens/produto.jpg',
  images: [
    'https://seusite.com/imagens/produto-1.jpg',
    'https://seusite.com/imagens/produto-2.jpg',
  ],
  // ...
}
```

### **Opção 3: Unsplash (Para Testes)**

```javascript
{
  id: 1,
  image: 'https://images.unsplash.com/photo-XXXXXXXX?w=800&q=80',
  // ...
}
```

---

## 📊 SISTEMA DE ESTOQUE

### **Como Funciona:**

```javascript
{
  id: 1,
  name: 'Produto Exemplo',
  stock: 10,  // ← CAMPO DE ESTOQUE
  // ...
}
```

### **Estados Possíveis:**

| Stock | Status | Comportamento |
|-------|--------|---------------|
| `0` | **Fora de Estoque** | Badge vermelho, botão WhatsApp |
| `1-5` | **Estoque Baixo** | Alerta laranja "Últimas unidades" |
| `6+` | **Em Estoque** | Normal, sem alertas |

---

## 🔴 PRODUTO FORA DE ESTOQUE

### **Configuração:**

```javascript
{
  id: 5,
  name: 'Prancha Longboard 9\'6"',
  category: 'Surf',
  price: 3500.00,
  stock: 0,  // ← FORA DE ESTOQUE
  image: '/images/prancha.jpg',
  // ... outros campos
}
```

### **O que acontece:**

```
✅ Badge "FORA DE ESTOQUE" sobre a imagem
✅ Botão "Indisponível" no card
✅ Alerta vermelho na página do produto
✅ Botão WhatsApp substituindo "Adicionar ao Carrinho"
✅ Mensagem automática pré-preenchida
✅ Status "Produto Fora de Estoque" nas informações
```

### **Mensagem WhatsApp Automática:**

```
Olá! Gostaria de saber quando o produto "[Nome do Produto]" (ID: [ID]) estará disponível novamente.
```

---

## ⚠️ PRODUTO COM ESTOQUE BAIXO

### **Configuração:**

```javascript
{
  id: 6,
  name: 'Óculos Oakley Holbrook',
  category: 'Acessórios',
  price: 599.90,
  stock: 3,  // ← ESTOQUE BAIXO (1-5 unidades)
  // ...
}
```

### **O que acontece:**

```
✅ Alerta "⚠️ Apenas 3 unidades disponíveis" no card
✅ Banner laranja "Últimas Unidades!" na página do produto
✅ Status "Estoque Limitado" nas informações
✅ Funciona normalmente (pode adicionar ao carrinho)
```

---

## ✅ PRODUTO EM ESTOQUE

### **Configuração:**

```javascript
{
  id: 7,
  name: 'Camiseta Element',
  category: 'Vestuário',
  price: 129.90,
  stock: 50,  // ← EM ESTOQUE (6+ unidades)
  // ...
}
```

### **O que acontece:**

```
✅ Funciona normalmente
✅ Badge "Destaque" (se featured: true)
✅ Sem alertas de estoque
✅ Status "Em estoque - Envio imediato"
```

---

## 📂 CATEGORIAS E SUBCATEGORIAS

### **Categorias Principais:**

```javascript
category: 'Surf'         // Pranchas, acessórios de surf
category: 'Skate'        // Shapes, trucks, rodas
category: 'Vestuário'    // Roupas em geral
category: 'Acessórios'   // Óculos, bonés, mochilas
category: 'Calçados'     // Tênis, sandálias
```

### **Subcategorias (Opcional):**

```javascript
{
  category: 'Acessórios',
  subcategory: 'oculos',  // Para filtro fino
}
```

**Subcategorias disponíveis:**

```
Acessórios: oculos, tocas, relogios, correntes, bones
Vestuário:  camisetas, camisa-longa, moletons, regatas
Calçados:   masculino, feminino
```

---

## 💡 EXEMPLOS PRÁTICOS

### **Exemplo 1: Tênis em Estoque**

```javascript
{
  id: 15,
  name: 'Tênis Nike SB Dunk Low Pro',
  category: 'Calçados',
  subcategory: 'masculino',
  price: 799.90,
  oldPrice: 999.90,  // Preço anterior (para mostrar desconto)
  stock: 25,  // 25 unidades em estoque
  image: '/images/products/tenis-nike-sb/principal.jpg',
  images: [
    '/images/products/tenis-nike-sb/principal.jpg',
    '/images/products/tenis-nike-sb/lateral.jpg',
    '/images/products/tenis-nike-sb/sola.jpg',
    '/images/products/tenis-nike-sb/detalhe.jpg'
  ],
  description: 'Tênis Nike SB Dunk Low Pro com design clássico e conforto excepcional. Perfeito para skate e uso casual. Solado de borracha aderente e cabedal em couro sintético durável.',
  sizes: ['38', '39', '40', '41', '42', '43', '44'],
  colors: ['Preto/Branco', 'Azul Marinho', 'Cinza'],
  brand: 'Nike',
  inStock: true,
  featured: true,  // Aparece nos destaques
  rating: 4.8,
  reviews: [
    {
      id: 1,
      author: 'João Silva',
      rating: 5,
      comment: 'Tênis top! Muito confortável e bonito.',
      date: '2024-11-01'
    },
    {
      id: 2,
      author: 'Maria Santos',
      rating: 4,
      comment: 'Ótimo para skate, recomendo!',
      date: '2024-10-28'
    }
  ]
}
```

---

### **Exemplo 2: Produto FORA DE ESTOQUE**

```javascript
{
  id: 16,
  name: 'Prancha Lost Puddle Jumper 5\'10"',
  category: 'Surf',
  price: 2899.90,
  stock: 0,  // ← FORA DE ESTOQUE
  image: '/images/products/prancha-lost/principal.jpg',
  images: [
    '/images/products/prancha-lost/principal.jpg',
    '/images/products/prancha-lost/lateral.jpg'
  ],
  description: 'Prancha de surf Lost Puddle Jumper. Design híbrido perfeito para ondas pequenas a médias. Espuma EPS de alta qualidade e construção PU com fibra de vidro.',
  sizes: ['5\'6"', '5\'8"', '5\'10"', '6\'0"'],
  colors: ['Branco'],
  brand: 'Lost',
  inStock: false,
  featured: false,
  rating: 4.9,
  reviews: []
}
```

**Resultado:**
- ❌ Badge "FORA DE ESTOQUE"
- ❌ Botão "Indisponível" no card
- ✅ Botão WhatsApp na página do produto
- ✅ Mensagem: "Olá! Gostaria de saber quando o produto 'Prancha Lost Puddle Jumper 5\'10"' (ID: 16) estará disponível novamente."

---

### **Exemplo 3: Produto com ESTOQUE BAIXO**

```javascript
{
  id: 17,
  name: 'Boné Vans Classic Patch',
  category: 'Acessórios',
  subcategory: 'bones',
  price: 89.90,
  stock: 2,  // ← APENAS 2 UNIDADES
  image: '/images/products/bone-vans/principal.jpg',
  images: [
    '/images/products/bone-vans/principal.jpg',
    '/images/products/bone-vans/lateral.jpg'
  ],
  description: 'Boné Vans Classic Patch com design atemporal. Tecido resistente, ajuste confortável e logo bordado. Perfeito para o dia a dia.',
  sizes: ['Único'],
  colors: ['Preto', 'Marinho', 'Verde'],
  brand: 'Vans',
  inStock: true,
  featured: false,
  rating: 4.5,
  reviews: []
}
```

**Resultado:**
- ⚠️ Alerta: "Apenas 2 unidades disponíveis" no card
- ⚠️ Banner laranja "Últimas Unidades!" na página do produto
- ✅ Ainda pode comprar normalmente

---

## 📸 GUIA DE IMAGENS

### **Tamanhos Recomendados:**

```
Imagem Principal (card): 800x800px (1:1 - quadrada)
Galeria de Imagens: 1200x1200px (1:1)
Banner de Categoria: 1920x1080px (16:9)
```

### **Formatos Aceitos:**

```
✅ JPG / JPEG (melhor compressão)
✅ PNG (com transparência)
✅ WebP (moderno, menor tamanho)
❌ GIF (não recomendado para produtos)
```

### **Dicas de Fotografia:**

```
✅ Fundo branco ou neutro
✅ Boa iluminação
✅ Múltiplos ângulos (frente, lateral, detalhe)
✅ Alta resolução
✅ Produto centralizado
✅ Consistência entre fotos
```

### **Ferramentas de Otimização:**

```
TinyPNG: https://tinypng.com/
Squoosh: https://squoosh.app/
ImageOptim: https://imageoptim.com/
```

---

## 🎨 CORES DISPONÍVEIS

### **Cores Comuns:**

```javascript
colors: ['Preto', 'Branco', 'Cinza', 'Azul', 'Verde', 'Vermelho']
```

### **Cores Específicas:**

```javascript
// Para Roupas
colors: ['Preto', 'Branco', 'Azul Marinho', 'Cinza Mescla', 'Verde Militar']

// Para Calçados
colors: ['Preto/Branco', 'All Black', 'Azul Marinho/Branco', 'Cinza']

// Para Acessórios
colors: ['Preto Fosco', 'Espelhado Azul', 'Tartaruga', 'Transparente']
```

---

## 📏 TAMANHOS DISPONÍVEIS

### **Roupas:**

```javascript
sizes: ['PP', 'P', 'M', 'G', 'GG', 'XG']
// ou
sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
```

### **Calçados:**

```javascript
sizes: ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45']
```

### **Pranchas de Surf:**

```javascript
sizes: ['5\'6"', '5\'8"', '5\'10"', '6\'0"', '6\'2"', '6\'4"']
```

### **Shapes de Skate:**

```javascript
sizes: ['7.75"', '8.0"', '8.125"', '8.25"', '8.5"']
```

### **Tamanho Único:**

```javascript
sizes: ['Único']
```

---

## ⭐ SISTEMA DE AVALIAÇÕES

### **Adicionar Avaliações:**

```javascript
reviews: [
  {
    id: 1,
    author: 'Nome do Cliente',
    rating: 5,  // 1 a 5 estrelas
    comment: 'Comentário do cliente aqui',
    date: '2024-11-06'  // Formato: YYYY-MM-DD
  },
  {
    id: 2,
    author: 'Outro Cliente',
    rating: 4,
    comment: 'Muito bom, recomendo!',
    date: '2024-11-05'
  }
]
```

### **Média de Avaliações:**

```javascript
rating: 4.7,  // Média calculada manualmente
```

---

## 💰 PREÇOS E DESCONTOS

### **Produto SEM Desconto:**

```javascript
{
  price: 299.90,
  oldPrice: null,  // ou omitir o campo
}
```

### **Produto COM Desconto:**

```javascript
{
  price: 239.90,      // Preço atual (com desconto)
  oldPrice: 299.90,   // Preço anterior
  // Badge automático: -20%
}
```

**Cálculo do desconto:**
```
Desconto = ((oldPrice - price) / oldPrice) * 100
Desconto = ((299.90 - 239.90) / 299.90) * 100
Desconto = 20%
```

---

## 🏷️ BADGES AUTOMÁTICOS

### **Badge de Desconto:**

```javascript
{
  price: 199.90,
  oldPrice: 249.90,  // ← Gera badge "-20%"
}
```

### **Badge de Destaque:**

```javascript
{
  featured: true,  // ← Gera badge "Destaque"
  stock: 10,       // Só aparece se tiver estoque
}
```

### **Badge Fora de Estoque:**

```javascript
{
  stock: 0,  // ← Gera badge "FORA DE ESTOQUE"
}
```

---

## 🔗 LINKS E URLs

### **Link para Produto:**

```
/produto/[ID]

Exemplo: /produto/15
```

### **Link por Categoria:**

```
/produtos?categoria=vestuario
/produtos?categoria=acessorios&sub=oculos
```

---

## 📝 TEMPLATE COMPLETO

```javascript
{
  // IDENTIFICAÇÃO
  id: 0,  // ← MUDAR! Próximo ID disponível
  name: 'Nome Completo do Produto',
  
  // CATEGORIA
  category: 'Categoria',  // Surf, Skate, Vestuário, Acessórios, Calçados
  subcategory: 'subcategoria',  // Opcional
  
  // PREÇO
  price: 0.00,  // Preço atual
  oldPrice: null,  // Preço anterior (se houver desconto)
  
  // ESTOQUE
  stock: 0,  // ← QUANTIDADE DISPONÍVEL
  inStock: true,  // true se stock > 0
  
  // IMAGENS
  image: '/images/products/produto/principal.jpg',
  images: [
    '/images/products/produto/principal.jpg',
    '/images/products/produto/lateral.jpg',
    '/images/products/produto/detalhe.jpg'
  ],
  
  // DESCRIÇÃO
  description: 'Descrição detalhada do produto. Fale sobre características, materiais, benefícios e diferenciais.',
  
  // VARIAÇÕES
  sizes: ['P', 'M', 'G', 'GG'],
  colors: ['Preto', 'Branco'],
  
  // MARCA
  brand: 'Nome da Marca',
  
  // DESTAQUE
  featured: false,  // true para aparecer nos destaques
  
  // AVALIAÇÕES
  rating: 4.5,  // Média (0-5)
  reviews: [
    {
      id: 1,
      author: 'Nome',
      rating: 5,
      comment: 'Comentário',
      date: '2024-11-06'
    }
  ]
}
```

---

## ⚠️ ERROS COMUNS

### **1. ID Duplicado**
```
❌ id: 1,  // Já existe!
✅ id: 25,  // Novo ID único
```

### **2. Estoque Indefinido**
```
❌ stock: undefined,  // Causa erro
✅ stock: 0,          // Fora de estoque
✅ stock: 10,         // Em estoque
```

### **3. Imagem Quebrada**
```
❌ image: 'imagem.jpg',  // Caminho relativo errado
✅ image: '/images/products/imagem.jpg',  // Caminho absoluto
```

### **4. Categoria Inválida**
```
❌ category: 'Roupa',    // Inconsistente
✅ category: 'Vestuário',  // Padrão definido
```

### **5. Preço com Vírgula**
```
❌ price: '299,90',  // String
✅ price: 299.90,    // Number
```

---

## ✅ CHECKLIST DE PRODUTO

```
□ ID único e sequencial
□ Nome claro e descritivo
□ Categoria correta
□ Preço em formato numérico (ponto, não vírgula)
□ Stock definido (0 ou mais)
□ Imagem principal carregada
□ Galeria de imagens (mín. 2)
□ Descrição completa
□ Tamanhos disponíveis
□ Cores disponíveis
□ Marca informada
□ Status featured (true/false)
□ Rating e reviews (opcional)
□ Todas as imagens funcionando
□ Produto testado no site
```

---

## 🚀 PRÓXIMOS PASSOS

### **1. Adicione Seus Produtos**

```
Edite: src/data/products.js
Adicione seus produtos reais
Configure o estoque corretamente
```

### **2. Organize as Imagens**

```
Crie: public/images/products/
Adicione fotos de qualidade
Otimize o tamanho dos arquivos
```

### **3. Configure o WhatsApp**

```
Edite: src/components/WhatsAppButton.jsx (Linha 6)
Edite: src/pages/ProductDetail.jsx (Linha 317)
Coloque seu número: 5511987654321
```

### **4. Teste Tudo**

```
✓ Produtos aparecem na listagem
✓ Imagens carregam corretamente
✓ Estoque funciona (em estoque / fora)
✓ WhatsApp abre com mensagem certa
✓ Desconto é calculado corretamente
```

---

**Guia completo de como adicionar produtos! 📦✨**

**Agora você pode adicionar seus produtos reais com controle total de estoque! 🎯**
