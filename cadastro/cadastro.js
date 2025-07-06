function validarFormulario() {
    let valido = true;

    document.getElementById("erroTitulo").textContent = "";
    document.getElementById("erroPremissa").textContent = "";
    document.getElementById("erroData").textContent = "";
    document.getElementById("erroAutor").textContent = "";

    const titulo = document.getElementById("titulo").value.trim();
    const premissa = document.getElementById("premissa").value.trim();
    const data = document.getElementById("data").value;
    const autor = document.getElementById("autor").value.trim();
    const hoje = new Date().toISOString().split("T")[0];

    if (titulo === "") {
        document.getElementById("erroTitulo").textContent = "O título é obrigatório.";
        valido = false;
    }

    if (premissa === "") {
        document.getElementById("erroPremissa").textContent = "A premissa é obrigatória.";
        valido = false;
    }

    if (data === "") {
        document.getElementById("erroData").textContent = "A data de lançamento é obrigatória.";
        valido = false;
    } else if (data > hoje) {
        document.getElementById("erroData").textContent = "A data não pode estar no futuro.";
        valido = false;
    }

    if (autor === "") {
        document.getElementById("erroAutor").textContent = "O autor é obrigatório.";
        valido = false;
    }
    
    valido && alert("Cadastrado com sucesso")
    
    return valido;
}
