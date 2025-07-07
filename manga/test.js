(function () {
    const likes = Math.floor(Math.random() * 1000);
    const dislikes = Math.floor(Math.random() * 1000);
    const total = likes + dislikes;

    // Calcula a largura proporcional
    const likesPercent = (likes / total) * 100;
    const dislikesPercent = 100 - likesPercent;

    // Atualiza a barra
    document.getElementById("likesBar").style.width = likesPercent + "%";
    document.getElementById("dislikesBar").style.width = dislikesPercent + "%";

    // Atualiza os números
    document.getElementById("likesNum").textContent = likes;
    document.getElementById("dislikesNum").textContent = dislikes;

})()
