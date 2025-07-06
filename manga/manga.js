(function () {
    const h3List = Array.from(document.querySelectorAll("h3"));
    const total = h3List.length;

    h3List.forEach((h3, index) => {
        const numero = total - index;
        h3.textContent = `${numero} - ${h3.textContent}`;
    });
})()
