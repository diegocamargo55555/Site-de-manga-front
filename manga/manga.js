(function () {
    const h3List = Array.from(document.querySelectorAll("h3"));
    const total = h3List.length;

    h3List.forEach((h3, index) => {
        const numero = total - index;
        h3.textContent = `${numero} - ${h3.textContent}`;
    });
})()


/*
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
*/