document.addEventListener('DOMContentLoaded', () => {
    const simBtn = document.getElementById('simBtn');
    const naoBtn = document.getElementById('naoBtn');
    const heart = document.getElementById('heart');

    // When "SIM" is clicked, show the heart
    simBtn.addEventListener('click', () => {
        heart.classList.remove('hidden');
    });

    // Make the "NÃO" button impossible to click by moving it away
    naoBtn.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - naoBtn.offsetWidth;
        const maxY = window.innerHeight - naoBtn.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        naoBtn.style.position = 'fixed';
        naoBtn.style.left = randomX + 'px';
        naoBtn.style.top = randomY + 'px';
    });
}); 