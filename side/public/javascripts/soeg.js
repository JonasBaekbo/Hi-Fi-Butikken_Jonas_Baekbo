function test() {
    var input = document.getElementById("search").value;
    window.location = `http://localhost:3000/produkt.html?search=${input}`; // Redirect til http://localhost:3000/produkt.html?search=(Hvad der er skrevet i søgebaren)
    return false;
}
