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
    if (url.search != null){
        console.log('HEJ');
        var input = url.search;
        console.log(url.search);
       // alert('HEJ FRA ALERT')
       fetch('http://localhost:1337/produkt/soeg/' + url.search)
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
    else{
function alle () {
    const placeholder = document.querySelector('#content');
fetch('http://localhost:1337/produkt').then((response) => {
    return response.json();
})
    .then(function (data) {
        var type = '';
        var   article = document.createElement('DIV');
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
        fetch(`http://localhost:1337/produkt/${varenr}`)
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            // nu er json objektet lagt ind i data variablen, udskriv data
            console.log(data);
            document.getElementById('content').innerHTML =  `<a href="produkt.html">Tilbage til alle produkter</a><br><br><img src="images/${data[0].billede}" alt="${data[0].navn}"><h3>${data[0].navn}</h3><p>Pris: ${data[0].pris}</p><p>Producent: ${data[0].producent}</p><p>Kategori: ${data[0].kategori}</p><p>Beskrivelse:<br> ${data[0].beskrivelse}</p>`;
        })
    }
document.addEventListener('DOMContentLoaded', function () {
    if (url.produkt != null) {
        en(url.produkt);
    }
    else if (url.kategori != null) {
               fetch('http://localhost:1337/kategori/' + url.kategori)
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
    else{
        alle();
    }
});
    }
})();