// Pemanggilan Task 4
function clickTask4() {
    // Menentukan variabel
    let input = prompt("Masukan Angka Ganjil 🎡");
    let angka = [];

    // Mengeksekusi value dari input
    for (ganjil = 1; ganjil <= input; ganjil++) {
        if (ganjil % 1 == 0) {
            angka.push(ganjil);
        }
    }
    document.getElementById('info-ganjil').innerText = "Hasil angka ganjil dari " + input + " 🎑";
    document.getElementById('hasil-ganjil').innerText = "(0, " + angka.join(", ") + ")";
}