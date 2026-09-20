/* EDITE AQUI o conteúdo do estúdio. Os arquivos de imagem ficam em assets/.
   Artista: { name: 'Nome', specialty: 'Estilo', photo: 'assets/nome.jpg', instagram: 'https://...' }
   Depoimento real: { name: 'Nome autorizado', text: 'Texto autorizado' }
   Para publicar os trabalhos reais, substitua gallery e altere galleryIsReference para false. */
window.ANANKE_CONTENT = {
  whatsapp: '5531997231459',
  galleryIsReference: true,
  // A foto coletiva está em assets/equipe.png. Adicione perfis individuais aqui quando desejar.
  artists: [],
  reviews: [],
  gallery: [
    { image: 'assets/tattoo-1.jpg', title: 'Contraste & presença', category: 'blackwork', label: 'Blackwork', alt: 'Referência de tatuagem com contraste em tinta preta' },
    { image: 'assets/tattoo-2.jpg', title: 'A beleza do detalhe', category: 'fineline', label: 'Fine line', alt: 'Referência do processo de tatuagem com linhas delicadas' },
    { image: 'assets/tattoo-3.jpg', title: 'Arte em processo', category: 'realismo', label: 'Realismo', alt: 'Referência do trabalho de um tatuador sobre a pele' },
    { image: 'assets/tattoo-4.jpg', title: 'Livre para ser', category: 'autoral', label: 'Autoral', alt: 'Referência de desenho em processo de tatuagem' }
  ]
};
