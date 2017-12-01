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
    fetch(`http://128.199.57.136:1337/producent`, {
        'method': 'GET',
        'headers': {
            'Authorization': localStorage.getItem('token'),
            'userID': localStorage.getItem('userid')
        },
        'mode': 'cors',
        'cache': 'default'
    }
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var placeholder = document.querySelector("#opdaterproducent_id")
            data.forEach(function (element) {
                // Opretter option elementer med forskellige values og forskellige navne m.h.p. producenter
                var option = document.createElement('OPTION');
                option.value = element.ID;
                var optionName = document.createTextNode(element.producent);
                option.appendChild(optionName);
                placeholder.appendChild(option);
            })
        });
    fetch(`http://128.199.57.136:1337/kategori`, {
        'method': 'GET',
        'headers': {
            'Authorization': localStorage.getItem('token'),
            'userID': localStorage.getItem('userid')
        },
        'mode': 'cors',
        'cache': 'default'
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var placeholder = document.querySelector("#opdaterkategori_id")
            data.forEach(function (element) {
                // Opretter option elementer med forskellige values og forskellige navne m.h.p. kategorier
                var option = document.createElement('OPTION');
                option.value = element.ID;
                var optionName = document.createTextNode(element.kategori);
                option.appendChild(optionName);
                placeholder.appendChild(option);

            })
        });
    if (url.id != null) { //Hvis der er et url parameter med navnet id
        var input = url.id; // variabel input som indeholder url parametret id
        // Visning af et produkt på admin siden // Redigering af eksisterende produkter på admin siden
        fetch(`http://128.199.57.136:1337/produkt/${input}`, { //Fetch et produkt med idet som er i input via HTTP metoden GET
            'method': 'GET',
            'headers': {
                'Authorization': localStorage.getItem('token'),
                'userID': localStorage.getItem('userid')
            },
            'mode': 'cors',
            'cache': 'default'
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                data.forEach(function (item) {
                    // tager fat i det element som har id'et content i html og giver det en value
                    document.querySelector('#opdaternavn').value = item.navn;
                    document.querySelector('#opdaterpris').value = item.pris;
                    document.querySelector('#opdaterbeskrivelse').value = item.beskrivelse;
                    document.querySelector('#opdaterkategori_id').value = item.fk_kategori_id;
                    document.querySelector('#opdaterproducent_id').value = item.fk_producent;
                    document.querySelector('#oldProductImage').value = item.billede;
                    console.log(item);

                    document.querySelector('#gemmmm').addEventListener('click', (event3) => { // Tager fat i id'et gemmmm på html siden og giver den en click event
                        event3.preventDefault();// Formularen skal ikke opføre sig som den plejer
                        let navn = document.querySelector('#opdaternavn').value; // Tager fat i id'et opdaternavns value på html siden.
                        let pris = document.querySelector('#opdaterpris').value; // Tager fat i id'et opdaterpris' value på html siden.
                        let beskrivelse = document.querySelector('#opdaterbeskrivelse').value; // Tager fat i id'et opdaterbeskrivelses value på html siden.
                        let kategori = document.querySelector('#opdaterkategori_id').value; // Ttager fat i id'et opdaterkategori_ids value på html siden.
                        let producent = document.querySelector('#opdaterproducent_id').value; // Tager fat i id'et opdaterproducent_ids value på html siden.
                        let billede = document.querySelector('#oldProductImage').value; // Tager fat i id'et oldProductImages value på html siden.
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
                            let data = new FormData(form); // Få fat i formular dataen
                            let url = `http://128.199.57.136:1337/produkt/${input}`;
                            let init = {
                                'method': 'put',
                                'headers': {
                                    'Authorization': localStorage.getItem('token'),
                                    'userID': localStorage.getItem('userid')
                                },
                                'body': data,
                                'cache': 'no-cache'
                            }
                            // Sender information til databasen via HTTP metoden PUT
                            let request = new Request(url, init);
                            fetch(request)
                                .then(response => { window.location.replace('produkter.html'); }).catch(err => { console.log(err) });
                        }
                    })
                })
            })
    };
})();