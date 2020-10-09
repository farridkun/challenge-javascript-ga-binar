function clickTask2() {
    let nilai = ["A", "B", "C", "D", "Tidak Lulus"];
    let input = prompt("Silahkan masukan angka");

    if (!isNaN(input) && input >= 0) {
        if (input <= 100 && input >= 90) {
            alert("Nilai anda adalah " + nilai[0]);
        } else if (input <= 89 && input >= 75) {
            alert("Nilai anda adalah " + nilai[1]);
        } else if (input <= 74 && input >= 60) {
            alert("Nilai anda adalah " + nilai[2]);
        } else if (input <= 59 && input >= 50) {
            alert("Nilai anda adalah " + nilai[3]);
        } else if (input <= 49 && input >= 0) {
            alert("Maaf Anda " + nilai[4])
        } else {
            alert("Maaf Angka anda melibihi Batas");
        }
    } else {
        alert("Maaf inputan anda salah ⛔");
    }

}