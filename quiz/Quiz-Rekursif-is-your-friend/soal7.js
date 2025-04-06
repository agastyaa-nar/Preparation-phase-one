/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
    //code here
    if (equation === 0) return ""

    let toString = String(equation)
    let digitPertama = Number(toString[0])
    let count = toString.length - 1;
    let hasil = digitPertama * Math.pow(10, count)
    let sisa = equation - hasil

    if (sisa === 0){
        return String(hasil)
    }

    return hasil + " + " + parseNumber(sisa)
  }
  
  console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
  console.log(parseNumber(90)) // 90
  console.log(parseNumber(2333)) // 2000+300+30+3