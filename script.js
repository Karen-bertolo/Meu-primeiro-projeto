function mostrarMensagem() {
let nome = prompt("Digite seu nome:");
    if (!nome || nome.trim() === "") {
        document.getElementById("mensagem").innerText =
            "Por favor, digite um nome válido.";
        return;
    }

    let apenasLetras = /^[A-Za-zÀ-ÿ\s]+$/;
        if (!apenasLetras.test(nome)) {
            document.getElementById("mensagem").innerText =
            "Nome inválido. Digite apenas letras.";
        return;
    }

    document.getElementById("mensagem").innerText =
        "Bem-vindo(a), " + nome + "! 🚀";
}