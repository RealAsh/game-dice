function rollDice() {
    let goldCoins = 0;

    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '.');
        if (roll === 1) {
            break;
        }
        else if (roll < 4) {
            continue;
        }
        else if (roll === 4) {
            alert('Unfortunately you rolled a 4.');
            if (goldCoins > 0) {
                alert('1 gold coin has been removed from your balance!');
                goldCoins--;
                alert('Now you currently have ' + goldCoins + ' in total! - Still.. lets keep going!');
            }
            else {
                alert('There was nothing to take! - Your current coin balance remains at 0.')
            }
        }
        else {
            alert('Congratulations, you win ' + roll + ' gold coins!'); // We can also use variable roll here to idicate how many coins have been won as Per game rules as stated coins provided is === a winning roll. Obvioiusly if there was a different litteral value for the coins receieved than exactly the same as the roll achieved we would need to make seperate variables to hold appropriate values. 
            goldCoins += roll; // actually add result of winning roll to our current goldCoins variable so that it can keep a running sum.
            alert('You currently have ' + goldCoins + ' in total! - Lets try to win more!');
        }
    }
    alert('Game over, no more rolls!'); // moved game over statement from frst if block to here as it amkes more sense here. As we need to indicate game over also in case that user gets through the max nunmber of rolls we have set on the game, with the paramaters currently set for the for loop.  
    alert('You have won a total of ' + goldCoins + ' gold coins'); // at end of game alert user to their final coin total. note alert is outside of the main game event loop  (for-loop) but still inside the block of the function (which we use to call the game in its entirity): 'rollDice()'.     
}