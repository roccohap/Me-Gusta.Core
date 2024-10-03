// Selecciona todos los botones de "Like"
document.querySelectorAll('.like-button').forEach((button, index) => {
    button.addEventListener('click', function() {
      // Selecciona el contador de "likes" relacionado a este botón
      let likesCount = this.previousElementSibling;

      // Obtén el número actual de likes
      let currentLikes = parseInt(likesCount.textContent);

      // Incrementa el número de likes
      currentLikes++;

      // Actualiza el texto con el nuevo número de likes
      likesCount.textContent = `${currentLikes} like(s)`;
    });
});
