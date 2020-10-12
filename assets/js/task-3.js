// Pemanggilan Task 3
function clickTask3() {
    // Menentukan variabel
    let input = prompt("Masukan Angka Genap 🎢");
    let angka = [];
    let infoGenap = document.getElementById("info-genap");
    let hasilGenap = document.getElementById("hasil-genap");

    // Mengeksekusi value dari input
    if (input >= 2) {
        for (genap = 1; genap <= input; genap++) {
            if (genap % 2 == 0) {
                angka.push(genap);
                infoGenap.innerText = "Hasil angka genap dari " + input + " 🧨";
                hasilGenap.innerText = "(0, " + angka.join(", ") + ")";
            }
        }
    } else {
        infoGenap.innerText = "";
        hasilGenap.innerText = "Inputan anda salah 😪";
    }
}