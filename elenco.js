const jogadores = [
    {Nome: "Jean", posiçao: "Meia-Atacante", Numero: 10, Foto: "img/jogador1.jpg" },
    {Nome: "Davi Felipe", posiçao: "Volante/Meia", Numero: 19,Foto: "img/jogador1.jpg" },
    {Nome: "Giovani Reis", posiçao: "Volante/Meia", Numero: 8, Foto: "img/jogador1.jpg" },
    {Nome: "Adriem Santos", posiçao: "Lateral-Direito", Numero: 21, Foto: "img/jogador1.jpg" },
    {Nome: "Ronald", posiçao: "Meia-Atacante", Numero: 7, Foto: "img/jogador1.jpg" },
    {Nome: "Salatiel Junior", posiçao: "Lateral-Direito", Numero: 17, Foto: "img/jogador1.jpg" },
    {Nome: "VT", posiçao: "Zagueiro", Numero: 3, Foto: "img/jogador1.jpg" },
    {Nome: "Ytalo", posiçao: "Lateral-Esquerdo", Numero: 14, Foto: "img/jogador1.jpg" },
    {Nome: "Gabriel Aguiar", posiçao: "Zagueiro", Numero: 4, Foto: "img/jogador1.jpg" },
    {Nome: "Arlisson Marques", posiçao: "Atacante", Numero: 9, Foto: "img/jogador1.jpg" },
    {Nome: "Nilo de Sá", posiçao: "Atacante", Numero: 26, Foto: "img/NILO.jpg" },
    {Nome: "Kayo Victor", posiçao: "Volante/Meia", Numero: 33, Foto: "img/jogador1.jpg" },
    {Nome: "Kayo", posiçao: "Zagueiro", Numero: 6, Foto: "img/jogador1.jpg" },
    {Nome: "Caio Augusto", posiçao: "Atacante", Numero: 11, Foto: "img/jogador1.jpg" },
    {Nome: "Juan Pietro", posiçao: "Atacante/Meia", Numero: 90, Foto: "img/jogador1.jpg" },
    {Nome: "Henry", posiçao: "Lateral-Esquerdo", Numero: 20, Foto: "img/jogador1.jpg" },
    {Nome: "Marcos Chucre", posiçao: "Meia-Atacante", Numero: 16, Foto: "img/jogador1.jpg" },
    {Nome: "Kauã Dias", posiçao: "Zagueiro", Numero: 99, Foto: "img/jogador1.jpg" },
    {Nome: "Vinicius", posiçao: "Goleiro", Numero: 1, Foto: "img/jogador1.jpg" },
    {Nome: "Gabriel Araújo", posiçao: "Goleiro", Numero: 22, Foto: "img/jogador1.jpg" },
]

const container = document.getElementById('elenco-lista');

function desenharCards(){
    container.innerHTML = jogadores.map(jogador => {
        return `
            <div class="card-jogador">
                <div class="foto-container">
                    <img src="${jogador.Foto}" alt="${jogador.Nome}">
                    <span class="numero">${jogador.Numero}</span>
                </div>
                <div class="info-jogador">
                    <h3>${jogador.Nome}</h3>
                    <p>${jogador.posiçao}</p>
                </div>
            </div>
        `;
    }).join('')
}

desenharCards();