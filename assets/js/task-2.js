function clickTask2() {
    let nilai = ["A", "B", "C", "D", "Tidak Lulus"];
    let input = prompt("Silahkan masukan angka 💯");
    let output = document.getElementById("hasil-nilai");

    if (!isNaN(input) && input >= 0) {
        if (input <= 100 && input >= 90) {
            output.innerHTML = "Nilai anda adalah " + nilai[0] + " ✅";
        } else if (input <= 89 && input >= 75) {
            output.innerHTML = "Nilai anda adalah " + nilai[1] + " 🟢";
        } else if (input <= 74 && input >= 60) {
            output.innerHTML = "Nilai anda adalah " + nilai[2] + " 🟡";
        } else if (input <= 59 && input >= 50) {
            output.innerHTML = "Nilai anda adalah " + nilai[3] + " 🟠";
        } else if (input <= 49 && input >= 0) {
            output.innerHTML = "Maaf Anda " + nilai[4] + "🔴";
        } else {
            output.innerHTML = "Maaf Angka anda melibihi Batas 📛";
        }
    } else {
        output.innerHTML = "Maaf inputan anda salah ⛔";
    }

}