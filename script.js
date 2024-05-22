document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const answer = this.parentElement.nextElementSibling;
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
            this.textContent = this.textContent === '+' ? '-' : '+';
        });
    });
});