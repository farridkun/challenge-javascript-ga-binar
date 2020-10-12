// Pemanggilan Task 4
function clickTask4() {
    // Menentukan variabel
    let input = prompt("Masukan Angka Ganjil 🎡");
    let angka = [];
    let infoGanjil = document.getElementById("info-ganjil");
    let hasilGanjil = document.getElementById("hasil-ganjil");

    // Mengeksekusi value dari input
    if (input >= 0) {
        for (ganjil = 1; ganjil <= input; ganjil++) {
            if (ganjil % 1 == 0) {
                angka.push(ganjil);
                infoGanjil.innerText = "Hasil angka ganjil dari " + input + " 🎑";
                hasilGanjil.innerText = "(0, " + angka.join(", ") + ")";
            }
        }
    } else {
        infoGanjil.innerText = "";
        hasilGanjil.innerText = "Inputan anda salah 😪";
    }
}