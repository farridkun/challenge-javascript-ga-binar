function clickTask3() {
    let input = prompt("Masukan Angka Genap 🎢");
    let angka = [];

    for (genap = 1; genap <= input; genap++) {
        if (genap % 2 == 0) {
            angka.push(genap);
        }
    }
    document.getElementById('info-genap').innerText = "Hasil angka genap dari " + input + " 🧨";
    document.getElementById('hasil-genap').innerText = "(0, " + angka.join(", ") + ")";
}