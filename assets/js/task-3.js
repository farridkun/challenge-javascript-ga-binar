function clickTask3() {
    let input = prompt("Masukan Angka Genap 〽");

    if (!isNaN(input) && input >= 0) {
        for (genap = 0; genap <= input; genap++) {
            if (genap % 2 === 0) {
                // document.getElementById("hasil-genap").innerHTML = genap++;
            } else {
                document.getElementById("hasil-genap").value = "Ini bukan angka genap ⛔";
            }
        }
    } else {
        alert("Input anda salah ⛔");
    }
}