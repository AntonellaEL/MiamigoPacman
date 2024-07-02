window.onload = function() {
    const audio = new Audio('sound/Pacman-Game-Start-Sound.mp3');
    audio.volume = 0.3; 
    audio.loop = true;
    audio.play();

    const pacman = document.getElementById('pacman');
    const scoreElement = document.getElementById('score');
    const gameOverElement = document.getElementById('game-over'); 
    let score = 0;

    function updateScore(points) {
        score += points;
        scoreElement.textContent = score.toString().padStart(4, '0');

        if (score >= 5000) {
            gameOverElement.style.display = 'block'; 
            audio.pause(); 
            clearInterval(ghostInterval); 
        }
    }

    function moveGhost() {
        const ghost = document.createElement('img');
        ghost.src = 'images/fantasmito.png';
        ghost.alt = 'Ghost';
        ghost.classList.add('ghost');
        ghost.style.position = 'absolute';
        ghost.style.width = '100px'; 
        ghost.style.height = '100px'; 
        ghost.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        ghost.style.top = Math.random() * (window.innerHeight - 100) + 'px';
        document.body.appendChild(ghost);

        ghost.addEventListener('click', function() {
            document.body.removeChild(ghost);
            pacman.style.left = ghost.style.left;
            pacman.style.top = ghost.style.top;
            updateScore(100);
        });
    }

    const ghostInterval = setInterval(moveGhost, 2000); 

};

