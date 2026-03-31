const campoNome = document.getElementById('nome-jogador');
const botaoParticipar = document.getElementById('btn-participar');
const mensagem = document.getElementById('mensagem-validacao');
const secaoPix = document.getElementById('secao-pix');
const btnWhatsapp = document.getElementById('btn-enviar-comprovante');

const jogadores = [
    {Nome: "Jean", posiçao: "Meia-Atacante", Numero: 10, Foto: "img/jogador1.jpg" },
    {Nome: "Davi Felipe", posiçao: "Volante/Meia", Numero: 19,Foto: "img/jogador1.jpg" },
    {Nome: "Giovani Reis", posiçao: "Volante/Meia", Numero: 8, Foto: "img/jogador1.jpg" },
    {Nome: "Carlos Adriem", posiçao: "Lateral-Direito", Numero: 21, Foto: "img/jogador1.jpg" },
    {Nome: "Ronald", posiçao: "Meia-Atacante", Numero: 7, Foto: "img/jogador1.jpg" },
    {Nome: "Salatiel Junior", posiçao: "Lateral-Direito", Numero: 17, Foto: "img/jogador1.jpg" },
    {Nome: "VT", posiçao: "Zagueiro", Numero: 3, Foto: "img/jogador1.jpg" },
    {Nome: "Richard Ytalo", posiçao: "Lateral-Esquerdo", Numero: 14, Foto: "img/jogador1.jpg" },
    {Nome: "Gabriel Aguiar", posiçao: "Zagueiro", Numero: 4, Foto: "img/jogador1.jpg" },
    {Nome: "Arlisson Marques", posiçao: "Atacante", Numero: 9, Foto: "img/jogador1.jpg" },
    {Nome: "Nilo de Sá", posiçao: "Atacante", Numero: 26, Foto: "img/NILO.jpg" },
    {Nome: "Kayo Victor", posiçao: "Volante/Meia", Numero: 33, Foto: "img/jogador1.jpg" },
    {Nome: "Kayo Mackayat", posiçao: "Zagueiro", Numero: 6, Foto: "img/jogador1.jpg" },
    {Nome: "Caio Augusto", posiçao: "Atacante", Numero: 11, Foto: "img/jogador1.jpg" },
    {Nome: "Juan Pietro", posiçao: "Atacante/Meia", Numero: 90, Foto: "img/jogador1.jpg" },
    {Nome: "Henry", posiçao: "Lateral-Esquerdo", Numero: 20, Foto: "img/jogador1.jpg" },
    {Nome: "Marcos Chucre", posiçao: "Meia-Atacante", Numero: 16, Foto: "img/jogador1.jpg" },
    {Nome: "Kauã Dias", posiçao: "Zagueiro", Numero: 99, Foto: "img/jogador1.jpg" },
    {Nome: "Vinicius", posiçao: "Goleiro", Numero: 1, Foto: "img/jogador1.jpg" },
    {Nome: "Gabriel Araújo", posiçao: "Goleiro", Numero: 22, Foto: "img/jogador1.jpg" },
];

const confirmados = []

botaoParticipar.addEventListener('click', () => {
    const nomeDigitado = campoNome.value.trim();
    const jogadorEncontrado = jogadores.find(j => j.Nome.toLowerCase() === nomeDigitado.toLowerCase());

    const listaNoStorage = JSON.parse(localStorage.getItem('confirmados')) || [];
    
    const jaConfirmado = jogadorEncontrado && listaNoStorage.includes(jogadorEncontrado.Nome);
    

    if (!jogadorEncontrado) {
        mensagem.innerText = "Nome não encontrado no elenco do Montenegro!";
        mensagem.style.color = "yellow";
        secaoPix.classList.remove('pix-visivel'); 
    } 
    else if (jaConfirmado) {
        mensagem.innerText = `Calma, jogador ${jogadorEncontrado.Nome}, você já está na lista!`;
        mensagem.style.color = "cyan";
        secaoPix.classList.remove('pix-visivel');
    } 
    else {
        mensagem.innerText = `Olá ${jogadorEncontrado.Nome}! Pague para confirmar sua participação.`;
        mensagem.style.color = "#2ecc71";
        secaoPix.classList.add('pix-visivel');
        
        const mensagemWpp = `Olá! Sou o ${jogadorEncontrado.Nome} e aqui está o comprovante.`;
        const linkWpp = `https://wa.me/5591981505258?text=${encodeURIComponent(mensagemWpp)}`;

        btnWhatsapp.onclick = () => {
            window.open(linkWpp, '_blank');
            confirmarPresenca(jogadorEncontrado.Nome);
        };
    }
});

function confirmarPresenca(nome) {
    let ListaConfirmados = JSON.parse(localStorage.getItem('confirmados')) || [];

    if(!ListaConfirmados.includes(nome)) {
        ListaConfirmados.push(nome);
        localStorage.setItem('confirmados', JSON.stringify(ListaConfirmados));
    }

    atualizarListaTela();
}

function copiarChave() {
    const chave = "046.007.752-01"
    navigator.clipboard.writeText(chave);
    alert("Pix copiado!");
}

function atualizarListaTela() {
    const listaUl = document.getElementById('lista-confirmados');
    const confirmadosStorage = JSON.parse(localStorage.getItem('confirmados')) || [];

    listaUl.innerHTML = "";

    confirmadosStorage.forEach(nome => {
        const li = document.createElement('li');
        li.innerText = `Já ta confirmado ${nome}`
        listaUl.appendChild(li);
    });
}
atualizarListaTela();