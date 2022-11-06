function createGame(player1, player2, hour){
    return `


        <li> 
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong> ${hour} </strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>


    `
}

let delay = -0.5;
function createCard(date, day, games){
    delay = delay + 0.5;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2> ${date} <span> ${day} </span></h2>

        <ul>
            ${games}
        </ul>

    </div>
    `
}

 document.querySelector("#cards").innerHTML = 



     createCard("21/11", "segunda", createGame("brazil", "cameroon", "08:00") + createGame("hungary", "argentina", "13:00") + createGame("colombia", "japan", "20:00")) +
     createCard("24/11", "quinta", createGame("jordan", "cameroon", "08:00") + createGame("india", "armenia", "14:00") + createGame("comoros","jordan","19:00"));

     
 

 