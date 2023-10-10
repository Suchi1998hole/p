const toggleButton = document.getElementById('toggleButton');
const nav = document.getElementById('nav');

toggleButton.addEventListener('click', () => {
    nav.classList.toggle('expanded');
});
