function test() {
    var input = document.getElementById("search").value;
    window.location = `http://128.199.57.136:3000/produkt.html?search=${input}`; // Redirect til http://128.199.57.136:3000/produkt.html?search=(Hvad der er skrevet i søgebaren)
    return false;
}
