// Fetch fra http://localhost:1337/kategori og udskriv i elementet med ID'et footerkat
fetch("http://localhost:1337/kategori").then((response) => {
    return response.json();
}).then((data) => {
    data.forEach(function (element) {
        document.getElementById("footerkat").innerHTML += `<li><a href="produkt.html?kategori=${element.ID}">${element.kategori}</a></li>`;
    }, this);

});