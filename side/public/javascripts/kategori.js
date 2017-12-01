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

    var urlToParse = location.kategori;
    var url = parseQueryString(urlToParse);

    var param = JSON.stringify(url)
    console.log(url)
    if (url.kategori != null) {
        console.log('HEJ');
        var input = url.kategori;
        console.log(url.kategori);
        // alert('HEJ FRA ALERT')
        fetch('http://128.199.57.136:1337/kategori' + url.kategori) // Fetch fra http://128.199.57.136:1337/kategori og udskriv i elementet med ID'et content
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data);
                document.getElementById('content').innerHTML = `<h2>Søge resultater</h2><br><p>Du søgte efter <b>${input}</b></p>`;
                data.forEach(function (element) {
                    document.getElementById('content').innerHTML += `<a href="?produkt=${element.ID}">${element.kategori}</a><br>`;
                }, this);
            });
    }
    return false;
})