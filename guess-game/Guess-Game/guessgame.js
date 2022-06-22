
    // let textInput = Number(document.getElementById("inp").value);

       

    let textInput = Number(document.getElementById("inp").value);
    const btn = document.getElementById("submit");
    let randomNumber = Math.floor(Math.random() * 100 +1);
    let guesses = document.getElementById('guess');
    let lastResult = document.getElementById('lResult');
    let lowOrHi = document.getElementById('lowOrHi_Result');
    let guessSubmit = document.getElementById('guessSubmit');
    let guessCount = 1;
    let resetButton;

    btn.addEventListener('click', () =>{
        
        // document.getElementById('show-text').innerHTML = textInput;
        if (guessCount === 1 ){
            guesses.textContent = 'Previous guesses ';
            guesses.textContent  +=  +textInput + ' ';
        }

        if (textInput === randomNumber){
            lastResult.textContent = 'Congratulations ! You got it right';
            lastResult.style.backgroundColor = 'green';
            lastResult.style.color = 'white';
            lowOrHi.textContent = '';
            // setGameOver();
        }
        else if (guessCount === 3){
            lastResult.textContent = '!!! GAME OVER !!!';
            lastResult.style.backgroundColor = 'grey';
            // lowOrHi.textContent = '';
            setGameOver();
        }
        else{
            lastResult.textContent = 'Ooops !!! Wrong !';
            lastResult.style.backgroundColor = 'red';
            lastResult.style.color= 'white';
                if(textInput < randomNumber){
                    lowOrHi.textContent = 'Last guess was too low';
                }
                else if (textInput > randomNumber){
                    lowOrHi.textContent = 'Last guess was too high';
                }
        }

        guessCount++;
  textInput.value = '';
  
    });

    function setGameOver() {
      textInput.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Start new game';
      document.body.append(resetButton);
      resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
    guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  textInput.disabled = false;
  guessSubmit.disabled = false;
  textInput.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}





  console.log(randomNumber);

    

    

