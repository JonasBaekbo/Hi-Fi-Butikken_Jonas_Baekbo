// Fetch fra http://128.199.57.136:1337/kategori og udskriv i elementet med ID'et footerkat
fetch("http://128.199.57.136:1337/kategori").then((response) => {
    return response.json();
}).then((data) => {
    data.forEach(function (element) {
        document.getElementById("footerkat").innerHTML += `<li><a href="produkt.html?kategori=${element.ID}">${element.kategori}</a></li>`;
    }, this);

});