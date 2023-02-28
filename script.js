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
}
xhr.send(null);

// API verilerini HTML listesi halinde görüntülemek için fonksiyon
function veriListele(veriler) {
    
    var dataList = document.getElementById('dataList');
    for (let i = 0; i < 10; i++) {
        // allbox
        var allbox = document.createElement('div');
        allbox.className = 'allbox';

        var inputbox = document.createElement('div');
        inputbox.className = 'inputbox';

        var textbox = document.createElement('div');
        textbox.className = 'textbox';    
        textbox.innerHTML = '<h3>' + veriler[i].title + '</h3>' + '<p>' + veriler[i].body + '</p>';

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        inputbox.appendChild(checkbox, inputbox.firstChild);
        allbox.appendChild(inputbox, allbox.firstChild);
        allbox.appendChild(textbox, allbox);
        dataList.appendChild(allbox);
    }
    
    // var veriListesi = document.getElementById('veri-listesi');
    // for (var i = 0; i < veriler.length; i++) {
        
        // veri kutusu
        // var div2 = document.createElement('div');
        
        // var div = document.createElement('div');
        // div2.className = 'input-kutusu';

        // div.className = 'veri-kutusu';
        // div.innerHTML = '<h2>' + veriler[i].title + '</h2>' + '<p>' + veriler[i].body + '</p>';
        
        // checkbox inputu
        // var checkbox = document.createElement('input');
        // checkbox.type = 'checkbox';
        // checkbox.name = 'secili_veriler[]';
        
        // div2.innerHTML = '<h3> slfkdjslkjsd </h3>';
        // checkbox.value = veriler[i].id;
        
        // div.insertBefore(div2, div.firstChild);
        // div'i sayfaya ekle
        
        // 
        // veriListesi.appendChild(div2);
    // }
}




























// XMLHttpRequest (XHR) nesnesi oluşturma
// var xhr = new XMLHttpRequest();
// var url = 'https://jsonplaceholder.typicode.com/posts';  örnek API url'i

// API verilerini çekme
// xhr.open('GET', url, true);
// xhr.onload = function () {
//     var veriler = JSON.parse(xhr.responseText);
//     if (xhr.readyState == 4 && xhr.status == "200") {
//        veriListele(veriler);  Verileri listelemek için fonksiyonu çağır
//     } else {
//         console.error(veriler);
//     }
//     console.log(veriler);
// }
// xhr.send(null);

// API verilerini HTML listesi halinde görüntülemek için fonksiyon
// function veriListele(veriler) {
//     var veriListesi = document.getElementById('par');
//     var checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     var div = document.createElement('div');
//     div.className = 'veri-kutusu';
//     div.innerHTML = '<h3>' + veriler[0].title + '</h3>' + '<p>' + veriler[0].body + '</p>';
//     veriListesi.appendChild(div);
//     for (var i = 1; i < veriler.length; i++) {
//         var checkbox = document.createElement('input');
//         checkbox.type = 'checkbox';
//         var div = document.createElement('div');
//         div.className = 'veri-kutusu';
//         div.innerHTML = '<h3>' + veriler[i].title + '</h3>' + '<p>' + veriler[i].body + '</p>';
//         veriListesi.appendChild(div);
//     }
// }
