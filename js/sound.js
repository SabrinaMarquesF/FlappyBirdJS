const sound = new Audio('som/sound.mp3');

sound.load();

document.addEventListener('keydown', () => {
    
    if (sound.paused) {
        sound.play().catch(error => {
            console.log('Erro ao tentar reproduzir o som:', error);
        });
    }
});
