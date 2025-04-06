function shareLink() {
    const url = window.location.href;
  
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Confira este link:',
        url: url
      }).then(() => {
        console.log('Compartilhado com sucesso');
      }).catch((error) => {
        console.error('Erro ao compartilhar:', error);
      });
    } else {
      // fallback: copiar para a área de transferência
      navigator.clipboard.writeText(url).then(() => {
        alert("Link copiado para a área de transferência!");
      }).catch(err => {
        console.error("Erro ao copiar link:", err);
      });
    }
  }
