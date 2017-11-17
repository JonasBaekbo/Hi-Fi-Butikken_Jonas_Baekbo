(function () {
    var parseQueryString = function (url) {
        var urlParams = {};
        url.replace(
            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
            function ($0, $1, $2, $3) {
                urlParams[$1] = $3;
            }
        );

        return urlParams;
    }

    var urlToParse = location.search;
    var url = parseQueryString(urlToParse);

    var param = JSON.stringify(url)
    console.log(url)
    if (url.search != null) {
        console.log('HEJ');
        var input = url.search;
        fetch('http://localhost:1337/produkt/soeg/' + url.search) // Fetch fra http://localhost:1337/produkt/soeg/ med parametret url.search og udskriv i elementet med ID'et content
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                document.getElementById('content').innerHTML = `<h2>Søge resultater</h2><br><p>Du søgte i vores varekatalog og du søgte efter <b>${input}</b></p>`;
                data.forEach(function (element) {
                    document.getElementById('content').innerHTML += `<a href="?produkt=${element.ID}">${element.navn}</a><br>`;
                }, this);
            });
        return false;
    }
    else {
        function alle() {
            const placeholder = document.querySelector('#content');
            fetch('http://localhost:1337/produkt').then((response) => {  // Fetch fra http://localhost:1337/produkt og udskriv i elementet med ID'et content
                return response.json();
            })
                .then(function (data) {
                    var type = '';
                    var article = document.createElement('DIV');
                    data.forEach(function (item) {
                        var indhold = document.createElement('DIV');
                        indhold.classList.add('col-md-3');
                        indhold.innerHTML += `<h2>${item.type}</h2>`;
                        item.prod.forEach(function (prod) {
                            indhold.innerHTML += `
                        <a href="?produkt=${prod.id}">${prod.navn}</a><br>
                        `;
                        }
                            , this);
                        article.appendChild(indhold);
                    })

                    return article;
                })
                .then(function (article) {
                    placeholder.appendChild(article);
                });


        };
        function en(varenr) {
            fetch(`http://localhost:1337/produkt/${varenr}`) // Fetch fra http://localhost:1337/produkt/ med parametret varenr og udskriv i elementet med ID'et content
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    document.getElementById('content').innerHTML = `<a href="produkt.html">Tilbage til alle produkter</a><br><br><img src="http://localhost:1337/images/${data[0].billede}" alt="${data[0].navn}"><h3>${data[0].navn}</h3><p>Pris: ${data[0].pris}</p><p>Producent: ${data[0].producent}</p><p>Kategori: ${data[0].kategori}</p><p>Beskrivelse:<br> ${data[0].beskrivelse}</p>`;
                })
        }
        document.addEventListener('DOMContentLoaded', function () {
            if (url.produkt != null) {
                en(url.produkt);
            }
            else if (url.kategori != null) {
                fetch('http://localhost:1337/kategori/' + url.kategori) // Fetch fra http://localhost:1337/kategori/ med parametret url.kategori og udskriv i elementet med ID'et content
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        //console.log(data);
                        document.getElementById('content').innerHTML = `<h2>Søge resultater</h2><br><p>Du søgte efter <b>${data[0].kategori}</b></p>`;
                        data.forEach(function (element) {
                            document.getElementById('content').innerHTML += `<a href="?produkt=${element.ID}">${element.navn}</a><br>`;
                        }, this);
                    });
            }
            else {
                alle();
            }
        });
    }
})();