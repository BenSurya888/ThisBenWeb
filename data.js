const namaSaya ="Ben Surya";
let usia = 17;

let biodata = document.getElementById('biodata');

function membuatBioBata() {
    let zaman;
    if(usia > 2 && usia <= 10 ) {
        zaman = "zaman anak kecil";
    }
    else if (usia > 10 && usia <= 18) {
        zaman = "zaman remaja";
    }
    else if (usia > 18 && usia <= 25) {
        zaman = "zaman dewasa";
    }
    else if (usia > 25 && usia <= 30){
        zaman = "zaman tua";
    }
    else if (usia > 30){
        zaman = "zaman lebih dari tua"
    }
    else{
        console.log('zaman bayi');
    }

    return biodata.innerHTML = zaman;
}
console.log('Nama = ', namaSaya);
console.log('Umur = ', usia);
membuatBioBata();