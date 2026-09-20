# ANANKE | Tattoo Studio

Site responsivo em **HTML, CSS e JavaScript puro**, sem dependências de instalação.

## Abrir

Abra `index.html` no navegador. Para servir localmente, execute:

```sh
python3 -m http.server 4173
```

Acesse `http://localhost:4173`.

## Personalizar fotos e conteúdos

Edite **`content.js`**. Esse arquivo concentra os artistas, a galeria, as avaliações e o número do WhatsApp.

### Artistas

1. Coloque as fotos na pasta `assets/` (ex.: `assets/gabriel.jpg`).
2. Substitua cada artista no campo `artists`:

```js
{
  name: 'Nome do artista',
  specialty: 'Blackwork · Autoral',
  photo: 'assets/gabriel.jpg',
  instagram: 'https://www.instagram.com/usuario/'
}
```

Os cartões se atualizam automaticamente. Enquanto não houver fotos, o site exibe uma apresentação neutra com “Em breve”.

### Portfólio

Substitua as entradas de `gallery` por trabalhos reais, mantendo os campos `image`, `title`, `category`, `label` e `alt`. Categorias suportadas: `blackwork`, `fineline`, `realismo`, `autoral`. Depois altere `galleryIsReference` para `false`.

As imagens atuais são **referências visuais de banco de imagens**, não trabalhos atribuídos à ANANKE. Confirme a classificação dos trabalhos reais ao cadastrá-los.

### Avaliações

Adicione somente depoimentos reais e autorizados em `reviews`:

```js
reviews: [
  { name: 'Nome do cliente', text: 'Depoimento real autorizado.' }
]
```

A seção de apresentação é substituída automaticamente pelos depoimentos.

### Contato e endereço

O WhatsApp está configurado para **(31) 99723-1459**. O formulário prepara uma mensagem; o visitante confirma o envio no próprio WhatsApp. Nenhum dado do formulário é armazenado pelo site.

O endereço informado é **Av. Portugal, Santa Amélia, Belo Horizonte/MG**. Adicione o número e atualize os links de mapa em `index.html` quando o endereço completo estiver disponível. O mapa atual mostra a região, não uma localização exata verificada do estúdio.

O monograma “A” é uma aplicação tipográfica provisória. Substitua pela marca original quando o arquivo do logotipo estiver disponível.

## Publicar com GitHub Pages

No repositório, abra **Settings → Pages → Deploy from a branch**, selecione **main** e **/ (root)** e salve. Quando a publicação concluir, o endereço esperado será:

https://gabrielbeniciofn123.github.io/ANANKE-Tattoo-Studio/

O endereço só funciona depois de ativar o Pages e concluir a publicação.

## Arquivos

- `index.html`: estrutura, textos, formulário, localização e FAQ.
- `styles.css`: visual, animações e adaptação para celulares.
- `script.js`: filtros, galeria ampliada, menu, artistas, avaliações e WhatsApp.
- `content.js`: conteúdos editáveis.
- `assets/`: fotografias e ícone.

## Créditos das fotografias de referência

Fotografias de banco de imagens disponíveis no Pexels:

- [Antoni Shkraba Studio — foto 7005740](https://www.pexels.com/photo/a-man-tattooing-a-client-s-arm-7005740/)
- [Labskiii — foto 12509427](https://www.pexels.com/photo/close-up-of-hand-tattooing-on-arm-12509427/)
- [JAY AG — foto 27411379](https://www.pexels.com/photo/a-tattooed-arm-with-a-tattoo-on-it-27411379/)
- [Kaybeesgramm — foto 30773999](https://www.pexels.com/photo/close-up-of-a-tattoo-being-inked-on-arm-30773999/)
- [Marlon Schmeiski — foto 26571333](https://www.pexels.com/photo/a-man-tattooing-arm-26571333/)
- [Foto 10681099](https://www.pexels.com/photo/man-tattooing-arm-10681099/)

Tipografia: Cormorant Garamond e Manrope via Google Fonts, com alternativas locais. O mapa depende do Google Maps. Links de WhatsApp e Instagram usam serviços externos.
