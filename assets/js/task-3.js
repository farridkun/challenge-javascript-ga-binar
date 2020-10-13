// Pemanggilan Task 3
function clickTask3() {
    // Menentukan variabel
    let input = prompt("Masukan Angka Genap 🎢");
    let angka = [];
    let infoGenap = document.getElementById("info-genap");
    let hasilGenap = document.getElementById("hasil-genap");

    // Mengeksekusi value dari input
    if (input >= 2) {
        for (genap = 0; genap <= input; genap++) {
            if (genap % 2 == 0) {
                angka.push(genap);
                infoGenap.innerText = "Hasil angka genap dari " + input + " 🧨";
                hasilGenap.innerText = "(" + angka.join(", ") + ")";
            } else {
                infoGenap.innerText = "Ini bukan angka genap 😮";
                hasilGenap.innerText = "";
            }
        }
    } else {
        infoGenap.style.display = "none";
        hasilGenap.innerText = "Inputan anda salah 😪";
    }
}