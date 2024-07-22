const cakeImage = document.getElementById('cake-image');
const messageContainer = document.getElementById('message-container');

cakeImage.addEventListener('click', () => {
  cakeImage.src = 'Remove background project-2 (2).png'; // Replace with the blown-out cake image
  messageContainer.style.display = 'block';
});
