// var box1 = document.getElementById("box1");
// var box2 = document.getElementById("box2");
// var box3 = document.getElementById("box3");
// var box4 = document.getElementById("box4");
// var box5 = document.getElementById("box5");
// var box6 = document.getElementById("box6");
// var box7 = document.getElementById("box7");
// var box8 = document.getElementById("box8");
// var box9 = document.getElementById("box9");
// var box0 = document.getElementById("box0");

// XMLHttpRequest (XHR) nesnesi oluşturma
var xhr = new XMLHttpRequest();
var url = 'https://jsonplaceholder.typicode.com/posts'; // örnek API url'i

// API verilerini çekme
xhr.open('GET', url, true);
xhr.onload = function () {
    var veriler = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        veriListele(veriler); // Verileri listelemek için fonksiyonu çağır
    } else {
        console.error(veriler);
    }
    console.log(veriler);
}
xhr.send(null);

// API verilerini HTML listesi halinde görüntülemek için fonksiyon
function veriListele(veriler) {
    var veriListesi = document.getElementById('par');
    var div = document.createElement('div');
    div.className = 'veri-kutusu';
    div.innerHTML = '<h3>' + veriler[0].title + '</h3>' + '<p>' + veriler[0].body + '</p>';
    veriListesi.appendChild(div);
    for (var i = 1; i < veriler.length; i++) {
        var div = document.createElement('div');
        div.className = 'veri-kutusu';
        div.innerHTML = '<h3>' + veriler[i].title + '</h3>' + '<p>' + veriler[i].body + '</p>';
        veriListesi.appendChild(div);
    }
}







































// const main = document.getElementById("title1");
// let dataArr = [];

// const getText = async () => {
//     let data = 
// }


// const url = "https://jsonplaceholder.typicode.com/posts";

// const dataArr = []; 
// const getText = () => {
    
//     fetch(url)
//     .then((response) => {
//         return response.json()
//     })
//     .then((data) =>
//     data.map((item)=> {
//     document.getElementById("par").innerHTML = item.title},
//     console.log(data),
//     ))
// }
// getText();
