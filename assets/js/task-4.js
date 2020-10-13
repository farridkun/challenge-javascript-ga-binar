// Pemanggilan Task 4
function clickTask4() {
    // Menentukan variabel
    let input = prompt("Masukan Angka Ganjil 🎡");
    let angka = [];
    let infoGanjil = document.getElementById("info-ganjil");
    let hasilGanjil = document.getElementById("hasil-ganjil");

    // Mengeksekusi value dari input
    if (input >= 2) {
        for (ganjil = 0; ganjil <= input; ganjil++) {
            if (ganjil % 2 == 0) {
                infoGanjil.innerText = "Ini bukan angka ganjil 😮";
                hasilGanjil.innerText = "";
            } else {
                angka.push(ganjil);
                infoGanjil.innerText = "Hasil angka ganjil dari " + input + " 🎑";
                hasilGanjil.innerText = "(0, " + angka.join(", ") + ")";
            }
        }
    } else {
        infoGanjil.style.display = "none";
        hasilGanjil.innerText = "Inputan anda salah 😪";
    }
}