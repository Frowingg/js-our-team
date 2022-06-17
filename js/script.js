// inizializzo le variabili
const teamContainer = document.querySelector('.team-container');

// creo l'object contenente le informazioni
const infoMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img:'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chied Editor',
        img:'img/angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Menager',
        img:'img/walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Menager',
        img:'img/angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img:'img/scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img:'img/barbara-ramos-graphic-designer.jpg'
    },
]


for(let i = 0; i<=5; i++) {
    teamContainer.innerHTML +=     
    `<div class="team-card">
        <div class="card-image">
            <img src="${infoMembers[i].img}" alt="${infoMembers[i].name}" />
        </div>
        <div class="card-text">
            <h3>${infoMembers[i].nome}</h3>
            <p>${infoMembers[i].role}</p>
        </div>
    </div>`
}
