let roll1 =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1024px-Dice-1-b.svg.png";
      let roll2 =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Dice-2-b.svg/600px-Dice-2-b.svg.png";
      let roll3 =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Dice-3-b.svg/600px-Dice-3-b.svg.png";
      let roll4 =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/768px-Dice-4-b.svg.png";
      let roll5 =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/768px-Dice-5-b.svg.png";
      let roll6 =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Dice-6a-b.svg/1024px-Dice-6a-b.svg.png";

      let dice_count = 0;

      function set() {
        let count = parseInt(document.getElementById("count").value);
        if (isNaN(count)) {
          count = 0;
        }
        dice_count = count;
        let htmlStrings = "";
        for (let i = 1; i < dice_count + 1; i++) {
          htmlStrings += `<div class="dice" id="die${i}"></div>`;
        }
        document.getElementById("dice-container").innerHTML = htmlStrings;
      }

      function rollAll() {
        set();
        if (dice_count === 0) {
          alert("No dice count given! Set the number of dice!");
        }
        for (let i = 1; i < dice_count + 1; i++) {
          roll(`die${i}`);
        }
      }
      function roll(dieId) {
        let die = parseInt(Math.random() * 6 + 1);
        switch (die) {
          case 1:
            document.getElementById(dieId).innerHTML = `<img src="${roll1}" />`;
            break;
          case 2:
            document.getElementById(dieId).innerHTML = `<img src="${roll2}"/>`;
            break;
          case 3:
            document.getElementById(dieId).innerHTML = `<img src="${roll3}"/>`;
            break;
          case 4:
            document.getElementById(dieId).innerHTML = `<img src="${roll4}"/>`;
            break;
          case 5:
            document.getElementById(dieId).innerHTML = `<img src="${roll5}"/>`;
            break;
          default:
            document.getElementById(dieId).innerHTML = `<img src="${roll6}"/>`;
            break;
        }
        console.log(die);
      }