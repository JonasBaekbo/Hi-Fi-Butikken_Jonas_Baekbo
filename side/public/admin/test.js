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
    fetch(`http://localhost:1337/producent`, {
        'method': 'GET',
        'headers': {
            'Authorization': localStorage.getItem('token'),
            'userID': localStorage.getItem('userid')
        },
        'mode': 'cors',
        'cache': 'default'
    }) // fetch udskriver API'et
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            var placeholder = document.querySelector("#opdaterproducent_id")
            data.forEach(function (element) {
                // tager fat i det element som har id'et content i html
                var option = document.createElement('OPTION');
                option.value = element.ID;
                var optionName = document.createTextNode(element.producent);
                option.appendChild(optionName);
                placeholder.appendChild(option);
                // Redigering af eksisterende produkter
            })
        });
    fetch(`http://localhost:1337/kategori`, {
        'method': 'GET',
        'headers': {
            'Authorization': localStorage.getItem('token'),
            'userID': localStorage.getItem('userid')
        },
        'mode': 'cors',
        'cache': 'default'
    }) // fetch udskriver API'et
        .then((response) => {
            // grib svarets indhold (body) og send det som et json objekt til næste .then()
            return response.json();
        })
        .then((data) => {
            var placeholder = document.querySelector("#opdaterkategori_id")
            data.forEach(function (element) {
                // tager fat i det element som har id'et content i html
                var option = document.createElement('OPTION');
                option.value = element.ID;
                var optionName = document.createTextNode(element.kategori);
                option.appendChild(optionName);
                placeholder.appendChild(option);

                // Redigering af eksisterende produkter
            })
        });
    if (url.id != null) {
        var input = url.id;
        console.log(url.search);
        // Visning af et produkt på admin siden // Redigering af eksisterende produkter på admin siden
        fetch(`http://localhost:1337/produkt/${input}`, {
            'method': 'GET',
            'headers': {
                'Authorization': localStorage.getItem('token'),
                'userID': localStorage.getItem('userid')
            },
            'mode': 'cors',
            'cache': 'default'
        }) // fetch udskriver API'et
            .then((response) => {
                // grib svarets indhold (body) og send det som et json objekt til næste .then()
                return response.json();
            })
            .then((data) => {
                // nu er json objektet lagt ind i data variablen, udskriv data
                var type = ''; // tager fat i id'et content som er på html siden og gør at det vises i content på html siden
                data.forEach(function (item) { // forEach indeholder det som skal vises på siden
                    // tager fat i det element som har id'et content i html
                    document.querySelector('#opdaternavn').value = item.navn;
                    document.querySelector('#opdaterpris').value = item.pris;
                    document.querySelector('#opdaterbeskrivelse').value = item.beskrivelse;
                    document.querySelector('#opdaterkategori_id').value = item.fk_kategori_id;
                    document.querySelector('#opdaterproducent_id').value = item.fk_producent;
                    document.querySelector('#oldProductImage').value = item.billede;
                    console.log(item);

                    document.querySelector('#gemmmm').addEventListener('click', (event3) => { // .querySelector tager fat i id'et gemm på html siden. addEventListener gør at man kan klikke på gemm også sker der et event.
                        event3.preventDefault();
                        let navn = document.querySelector('#opdaternavn').value; // .querySelector tager fat i id'et navn på html siden.
                        let pris = document.querySelector('#opdaterpris').value; // .querySelector tager fat i id'et pris på html siden.
                        let beskrivelse = document.querySelector('#opdaterbeskrivelse').value; // .querySelector tager fat i id'et beskrivelse på html siden.
                        let kategori = document.querySelector('#opdaterkategori_id').value; // .querySelector tager fat i id'et kategori_id på html siden.
                        let producent = document.querySelector('#opdaterproducent_id').value; // .querySelector tager fat i id'et producent_id på html siden.
                        let billede = document.querySelector('#oldProductImage').value;
                        console.log(navn, pris, beskrivelse, kategori, producent, billede);
                        if (navn == "") {
                            alert("Angiv navn");
                        } else if (pris == "") {
                            alert("Angiv en pris");
                        } else if (beskrivelse == "") {
                            alert("Angiv en beskrivelse");
                        } else if (kategori == "") {
                            alert('Angiv en kategori');
                        } else if (producent == "") {
                            alert("Angiv en producent");
                        } else {
                            let form = document.querySelector('#productForm form');
                            let data = new FormData(form);
                            let url = `http://localhost:1337/produkt/${input}`;
                            let init = {
                                'method': 'put',
                                'headers': {
                                    'Authorization': localStorage.getItem('token'),
                                    'userID': localStorage.getItem('userid')
                                },
                                'body': data,
                                'cache': 'no-cache'
                            }
                            let request = new Request(url, init);
                            // API'et/routet, det som der står i URL'en i browseren, init er variablen fra ovenover. 
                            fetch(request) // fetch udskriver API'et
                                .then(response => { window.location.replace('produkter.html'); }).catch(err => { console.log(err) });
                        }
                    })
                })
            })
    };
})();