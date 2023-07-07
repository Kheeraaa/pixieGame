# Pixie Game

This code implements a game called "Pixie Game." The game involves controlling a character named Pixie and avoiding collisions with dynamically created obstacles. The code is structured as follows:

1. Selecting DOM Elements:
   - The `pixie` element represents the main character of the game.
   - The `startPlayButton` element is a button used to start the game.

2. Variable Initialization:
   - `positionX` and `positionY` store the starting position of the Pixie character.
   - The `obstacles` array holds dynamically created obstacles.
   - `score` keeps track of the player's score.
   - `gameStarted` is a boolean flag indicating whether the game is running.

3. `updatePosition()`:
   - This function updates the position of the Pixie character on the screen by modifying its CSS transform property.

4. `createObstacle()`:
   - This function dynamically creates a new obstacle element (`div`) and adds the CSS class "obstacle" to it.
   - The obstacle is positioned randomly along the x-axis.
   - The obstacle is appended to the `body` element and added to the `obstacles` array.

5. `moveLeft()` and `moveRight()`:
   - These functions handle the left and right movement of the Pixie character.
   - They check if the character is allowed to move in the respective direction based on the boundaries of the game screen.
   - If allowed, the position is updated, and `updatePosition()` is called.

6. `checkCollision()`:
   - This function detects collisions between the Pixie character and the obstacles.
   - It uses the `getBoundingClientRect()` method to retrieve the bounding rectangles of both elements and checks if they intersect.
   - If a collision is detected, the `endGame()` function is called.

7. `updateScore()`:
   - This function updates the score displayed on the screen by modifying the inner text of the score element.

8. `resetGame()`:
   - This function resets the game state.
   - It sets the Pixie character back to its starting position, removes all obstacles from the DOM and the `obstacles` array, and resets the score.
   - It also updates the position and score on the screen.

9. `endGame()`:
   - This function is called when a collision occurs.
   - It displays an alert with the final score, resets the game, shows the start button again, and sets `gameStarted` to `false`.

10. `startGame()`:
    - This function is called when the start button is clicked.
    - It checks if the game is already running (`gameStarted` is `false`), hides the start button, and sets `gameStarted` to `true`.
    - It starts two intervals:
      - The first interval creates obstacles at a regular interval (every 1 second), increments the score, and updates the score displayed on the screen.
      - The second interval handles the movement of the obstacles.
        - It updates their positions by incrementing their `top` CSS property by 10 pixels.
        - If an obstacle reaches the bottom of the screen, it is removed from the DOM and the `obstacles` array.
        - After updating the positions, it calls `checkCollision()` to detect any collisions.

11. Event Listeners:
    - The code adds an event listener to the `keydown` event on the `document`.
    - If the game is running, it checks the keyCode of the pressed key.
    - If the left arrow key (keyCode 37) is pressed, it calls `moveLeft()`.
    - If the right arrow key (keyCode 39) is pressed, it calls `moveRight()`.
    - Additionally, an event listener is added to the `click` event on the `startPlayButton`.
    - When the button is clicked, the `startGame()` function is called.

In summary, this code sets up a game where the player controls a character called Pixie using the left and right arrow keys. The objective is to avoid colliding with dynamically created obstacles that move down the screen. The game keeps track of the score, displays it on the screen, and allows the player to start a new game after a collision occurs.
