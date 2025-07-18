
    const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      Ties: 0
    };

    updateScoreElement();

    let computerMove = '';

    function updateScoreElement() {
      document.querySelector('.js-score').innerHTML =
        `Wins: ${score.wins}, Ties: ${score.Ties}, Losses: ${score.losses}`;
    }

    function pickComputermove() {
      const randomNumber = Math.random();
      if (randomNumber < 1 / 3) {
        return 'Rock';
      } else if (randomNumber < 2 / 3) {
        return 'Paper';
      } else {
        return 'Scissors';
      }
    }

    function playgame(playerMove) {
      computerMove = pickComputermove();
      let result = '';

      if (playerMove === 'Rock') {
        if (computerMove === 'Rock') result = 'Tie';
        else if (computerMove === 'Paper') result = 'You lose';
        else result = 'You win';
      }

      else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') result = 'You win';
        else if (computerMove === 'Paper') result = 'Tie';
        else result = 'You lose';
      }

      else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') result = 'You lose';
        else if (computerMove === 'Paper') result = 'You win';
        else result = 'Tie';
      }

      // Update score
      if (result === 'You win') score.wins++;
      else if (result === 'You lose') score.losses++;
      else score.Ties++;

      localStorage.setItem('score', JSON.stringify(score));
      updateScoreElement();

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `
        <div class="moves-container">
          <div class="player">
            <img src="images/${playerMove}-emoji.png" class="move-icon">
            <p class="result-head">You</p>
          </div>
          <div class="computer">
            <img src="images/${computerMove}-emoji.png" class="move-icon">
            <p class="result-header">Computer</p>
          </div>
        </div>
      `;
    }

