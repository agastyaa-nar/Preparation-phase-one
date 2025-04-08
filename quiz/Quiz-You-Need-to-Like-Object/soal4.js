/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
    //code here

    let result = []
    let resultFinal = []
    let sortirBiaya = []
    let hasil = {
        name : "",
        departureCity : "",
        destinationCity : "",
        transport : "",
        totalCost : 0,
    }

    let kota = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"]


    for (let i = 0 ; i < arr.length; i++){
        result = arr[i].split("-")

        hasil.name = result[0]
        hasil.departureCity = result[1]
        hasil.destinationCity = result[2]
        hasil.transport = result[3]
        

        let indexBerangkat = 0
        let indexTujuan = 0

        for (let j = 0 ; j < kota.length; j++){
            if (result[2] === kota[j]) {
                indexTujuan = j
            }
        }

        for (let k = 0 ; k < kota.length; k++){
            if (result[1] === kota[k]) {
                indexBerangkat = k
            }
        }

        let biaya = 0

        if (result[3] === "Pesawat"){
            biaya = 275000
        } else if (result[3] === "Kereta"){
            biaya = 250000
        } else {
            biaya = 225000
        }

        if (emoney === "OVO"){
            biaya = (biaya - (biaya * 15 / 100)) * (Math.abs(indexTujuan - indexBerangkat))
        } else if (emoney === "Dana"){
            biaya = (biaya - (biaya * 10 / 100)) * (Math.abs(indexTujuan - indexBerangkat))
        } else if (emoney === "Gopay"){
            biaya = (biaya - (biaya * 5 / 100)) * (Math.abs(indexTujuan - indexBerangkat))
        } else {
            biaya = biaya * (Math.abs(indexTujuan - indexBerangkat))
        }

        hasil.totalCost = biaya
        sortirBiaya.push(hasil)

        hasil = {
            name : "",
            departureCity : "",
            destinationCity : "",
            transport : "",
            totalCost : 0,
        }
    }

    for (let l = 0 ; l < sortirBiaya.length - 1; l++){
        for (let m = 0; m < sortirBiaya.length - 1; m++){
            if (sortirBiaya[m].totalCost < sortirBiaya[m + 1].totalCost){
                let temp = sortirBiaya[m]
                sortirBiaya[m] = sortirBiaya[m + 1]
                sortirBiaya[m + 1] = temp
            }
        }
    }
    resultFinal = sortirBiaya

    return resultFinal
  };
  
  console.log(travelingIndonesia(['Danang-Yogyakarta-Semarang-Bis', 'Alif-Denpasar-Surabaya-Kereta', 'Bahari-Semarang-Denpasar-Pesawat'], 'OVO'));
  /*
  [ { name: 'Bahari',
      departureCity: 'Semarang',
      destinationCity: 'Denpasar',
      transport: 'Pesawat',
      totalCost: 467500 },
    { name: 'Alif',
      departureCity: 'Denpasar',
      destinationCity: 'Surabaya',
      transport: 'Kereta',
      totalCost: 212500 },
    { name: 'Danang',
      departureCity: 'Yogyakarta',
      destinationCity: 'Semarang',
      transport: 'Bis',
      totalCost: 191250 } ]
  */
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Shafur-Surabaya-Yogyakarta-Kereta', 'Taufik-Semarang-Surabaya-Pesawat', 'Alex-Yogyakarta-Semarang-Kereta'], 'Dana'));
  // /*
  // [ { name: 'Shafur',
  //     departureCity: 'Surabaya',
  //     destinationCity: 'Yogyakarta',
  //     transport: 'Kereta',
  //     totalCost: 450000 },
  //   { name: 'Taufik',
  //     departureCity: 'Semarang',
  //     destinationCity: 'Surabaya',
  //     transport: 'Pesawat',
  //     totalCost: 247500 },
  //   { name: 'Alex',
  //     departureCity: 'Yogyakarta',
  //     destinationCity: 'Semarang',
  //     transport: 'Kereta',
  //     totalCost: 225000 } ]
  // */
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Andika-Denpasar-Surabaya-Bis', 'Katy-Surabaya-Denpasar-Pesawat'], 'Gopay'));
  // /*
  // [ { name: 'Katy',
  //     departureCity: 'Surabaya',
  //     destinationCity: 'Denpasar',
  //     transport: 'Pesawat',
  //     totalCost: 261250 },
  //   { name: 'Andika',
  //     departureCity: 'Denpasar',
  //     destinationCity: 'Surabaya',
  //     transport: 'Bis',
  //     totalCost: 213750 } ]
  // */
  console.log("==================================================================================================");
  console.log(travelingIndonesia(['Putra-Denpasar-Yogyakarta-Pesawat'], 'Cash'));
  // /*
  // [ { name: 'Putra',
  //     departureCity: 'Denpasar',
  //     destinationCity: 'Yogyakarta',
  //     transport: 'Pesawat',
  //     totalCost: 825000 } ]
  // */
  console.log(travelingIndonesia([], 'Cash')); // [];