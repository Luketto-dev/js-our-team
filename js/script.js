//Per la pagina ‘Chi siamo’ del nostro sito aziendale, dobbiamo sviluppare la sezione “Il nostro team”.
//Definiamo un array di oggetti che rappresentano i membri del team.
//Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
//Milestone 1:
//stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
//Milestone 2:
//stampare i dati all’interno di un contenitore nella pagina html in modo dinamico, creando per ciascun membro del team 
//un elemento html che conterrà i suoi dati.

// creo array con all interno oggetti che rappresentano i membri del team
const team = [
    {
        nome: "Luca",
        ruolo: "Front-End Developer",
        foto: "img/new-team-member-02.jpg"
    },
    {
        nome: "Ludovica",
        ruolo: "Dirigente",
        foto: "img/angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Barbara",
        ruolo: "Graphic Designer",
        foto: "img/barbara-ramos-graphic-designer.jpg"
    },
    {
        nome: "Federico",
        ruolo: "Consulente",
        foto: "img/walter-gordon-office-manager.jpg"
    },
    {
        nome: "Silvia",
        ruolo: "Segretaria",
        foto: "img/new-team-member-03.jpg"

    },
    {
        nome: "Paolo",
        ruolo: "Back-end Developer",
        foto: "img/scott-estrada-developer.jpg"

    }
]

// mi vado a prendere il contenitore dove andro a inserire tutti i membri
const teamContainer = document.querySelector(".team-container")

// ciclo sull aray team
for (let i = 0; i < team.length; i++) {
    let membro = team[i]
    // stampo in console nome, ruolo, foto di ogni membro
    console.log(membro.nome, membro.ruolo, membro.foto)

    // faccio innerHtml del template
    teamContainer.innerHTML += createCard(membro)

}


function createCard(user){
    // creo il template per inserirlo nell html
    let template = `<div class="team-card">
                        <div class="card-image">
                        <img
                            src= "${user.foto}"
                            alt="Wayne Barnett"
                        />
                        </div>
                        <div class="card-text">
                        <h3>${user.nome}</h3>
                        <p>${user.ruolo}</p>
                        </div>
                    </div>`

    return template
}