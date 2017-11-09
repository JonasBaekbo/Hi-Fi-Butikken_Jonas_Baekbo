function test(){
    var input = document.getElementById("search").value;
    window.location = `http://localhost:3000/produkt.html?search=${input}`;
    return false;
}
