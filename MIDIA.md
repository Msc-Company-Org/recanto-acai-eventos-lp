# Catálogo de mídia — Recanto do Açaí Eventos

Inventário das imagens reais em `public/`, com nomenclatura, avaliação e uso recomendado
na landing page. Mantém o padrão **kebab-case em PT** (bom p/ SEO de imagem).

> Convenção de pastas:
> - `public/brand/` — logos e marca
> - `public/images/produtos/` — macro de produto (açaí, cremes)
> - `public/images/estacao/` — a estação/carrinho montada
> - `public/images/eventos/` — equipe e festas reais (prova social)

## Marca

| Arquivo | O que é | Avaliação | Uso na LP |
|---|---|---|---|
| `brand/logo-recanto-acai.jpg` | Logo completo (tigela roxa + texto "Recanto do Açaí" ™), 1024×1024, fundo off-white | ✅ Nítido, alta resolução. **Falta versão com fundo transparente (PNG/SVG)** | Header, footer, OG image |
| `brand/logo-recanto-acai-icone.jpg` | Só o ícone (tigela), pequeno (15 KB), fundo branco | ⚠️ Baixa resolução; serve como favicon/selo. **Pedir SVG** | Favicon, watermark, selo |

## Produtos (macro)

| Arquivo | O que é | Avaliação | Uso na LP |
|---|---|---|---|
| `images/produtos/acai-cremoso-colher.jpg` | Macro do açaí cremoso sendo servido com colher de sorvete | ✅✅ Excelente apetite-appeal, cor forte. **2 MB — otimizar** | Hero (fundo/lado), seção Sabores |
| `images/produtos/creme-flocos.jpg` | Macro de creme branco com flocos/pedaços, sendo mexido | ✅ Bom apetite-appeal. **1 MB — otimizar.** ❓Confirmar o sabor exato | Seção Sabores / Diferenciais |

## Estação (setup montado)

| Arquivo | O que é | Avaliação | Uso na LP |
|---|---|---|---|
| `images/estacao/estacao-complementos.jpg` | Detalhe dos complementos (paçoca, granulado, confetes), coberturas, copos e colheres com a marca | ✅✅ Mostra fartura/variedade — ótimo p/ "o que está incluído". **836 KB — otimizar** | Seção "Incluído" / Diferenciais |
| `images/estacao/estacao-atendente-salao.jpg` | Estação completa montada num salão + atendente uniformizada | ✅ Mostra o serviço profissional montado | "Como funciona" / Hero secundário |

## Eventos (prova social)

| Arquivo | O que é | Avaliação | Uso na LP |
|---|---|---|---|
| `images/eventos/equipe-recanto-evento.jpg` | Equipe de 4 pessoas uniformizadas (roxo) num evento | ✅ Humaniza a marca, prova social. Iluminação fraca | "Sobre" / Depoimentos / rodapé |
| `images/eventos/festa-tema-rei-leao.jpg` | Festa infantil decorada (tema Rei Leão) com a estação no contexto | ✅ Mostra o tipo de evento atendido (festa infantil). Estação pouco visível | Seção "Tipos de evento" (festa infantil) |

## Pendências / pedir ao cliente
- **Logo em PNG/SVG transparente** (atual é JPG com fundo).
- **Otimizar** as macros (`acai-cremoso-colher` 2 MB, `creme-flocos` 1 MB) → WebP/AVIF + `next/image`.
- **Vídeos** (mencionados) para seção de vídeo/hero.
- Confirmar o **sabor** de `creme-flocos.jpg`.
- Mais fotos: clientes consumindo, montagem da estação, casamento/corporativo (hoje só temos festa infantil).
