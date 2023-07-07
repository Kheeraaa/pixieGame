 // pixie Game
 const pixie = document.getElementById('pixie');
 const startPlayButton = document.getElementById('startPlayButton');
 let positionX = 230; // Starting position X
 let positionY = 435; // Starting position Y
 let obstacles = [];
 let score = 0;
 let gameStarted = false;

 function updatePosition() {
     pixie.style.transform = `translate(${positionX}px, ${positionY}px)`;
 }

 function createObstacle() {
     const obstacle = document.createElement('div');
     obstacle.classList.add('obstacle');
     const randomX = Math.floor(Math.random() * 435);
     obstacle.style.left = `${randomX}px`;
     obstacle.style.top = '0px';
     document.body.appendChild(obstacle);
     obstacles.push(obstacle);
 }

 function moveLeft() {
     if (positionX > 0) {
         positionX -= 10;
         updatePosition();
     }
 }

 function moveRight() {
     if (positionX < 435) {
         positionX += 10;
         updatePosition();
     }
 }

 function checkCollision() {
     for (let obstacle of obstacles) {
         const rect1 = pixie.getBoundingClientRect();
         const rect2 = obstacle.getBoundingClientRect();
         if (
             rect1.x < rect2.x + rect2.width &&
             rect1.x + rect1.width > rect2.x &&
             rect1.y < rect2.y + rect2.height &&
             rect1.y + rect1.height > rect2.y
         ) {
             endGame();
             return;
         }
     }
 }

 function updateScore() {
     const scoreElement = document.getElementById('score');
     scoreElement.innerText = `Score: ${score}`;
 }

 function resetGame() {
     positionX = 230; // Starting position X
     positionY = 435; // Starting position Y
     obstacles.forEach(obstacle => obstacle.remove());
     obstacles = [];
     score = 0;
     updatePosition();
     updateScore();
 }

 function endGame() {
     alert(`Game Over! Your Score: ${score}`);
     resetGame();
     startPlayButton.style.display = 'block';
     gameStarted =false;
 }

 function startGame() {
     if (!gameStarted) {
         startPlayButton.style.display = 'none';
         gameStarted = true;

         setInterval(() => {
             createObstacle();
             score++;
             updateScore();
         }, 1000);

         setInterval(() => {
             for (let obstacle of obstacles) {
                 const obstaclePosition = parseInt(obstacle.style.top);
                 obstacle.style.top = `${obstaclePosition + 10}px`;
                 if (obstaclePosition >= 480) {
                     obstacle.remove();
                     obstacles.splice(obstacles.indexOf(obstacle), 1);
                 }
             }
             checkCollision();
         }, 50);
     }
 }

 document.addEventListener('keydown', function (event) {
     if (gameStarted) {
         switch (event.keyCode) {
             case 37: // Left Arrow
                 moveLeft();
                 break;
             case 39: // Right Arrow
                 moveRight();
                 break;
         }
     }
 });

 startPlayButton.addEventListener('click', startGame);