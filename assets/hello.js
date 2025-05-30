let isim;

function ismial() {
isim = prompt('Bir isim giriniz: ');
// console.log(isim); consolda isim gözüksün istersek aktif ederiz.
}


function selamla() {
    console.log(`Selamlar ${isim}`);
}


ismial();
selamla();

localStorage.setItem('isim', JSON.stringify(ismial));