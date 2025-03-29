document.addEventListener('DOMContentLoaded', () => {
    const simBtn = document.getElementById('simBtn');
    const naoBtn = document.getElementById('naoBtn');
    const heart = document.getElementById('heart');
    const video = document.getElementById('video');

    // When "SIM" is clicked, show the heart and video
    simBtn.addEventListener('click', () => {
        heart.classList.remove('hidden');
        video.classList.remove('hidden');
        video.play();
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