# Crystal Collector Game
There will be four crystals displayed as buttons on the page.
The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.


The player wins if their total score matches the random number from the beginning of the game.
The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.


When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

<h2>Notes</h2>
Using Jquery has made this assignment surprisingly intuitive.  Grabbing button ids with $ and sensing click input in the same line of code made it really easy to program.

I initially tried to check for win or lose conditions once, outside of the button click arguments, and after the first newGame() initialization.  The game would not restart when conditions were met. It worked when I put this same if/else check into each button behavior.  Will look into why the latter format works while the former does not.

<h3>Link to deployed GitHub</h3>
<a href="https://edwardmara.github.io/unit-4-game/">edwardmara.github.io</a>
