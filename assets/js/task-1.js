function clickTask1() {
    let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
    let input = prompt("Sekarang Hari Apa Sih? 😱");

    switch (input) {
        case hari[0]:
            document.getElementById("hasil-hari").innerHTML = "Besok adalah hari Selasa 👒";
            break;
        case hari[1]:
            document.getElementById("hasil-hari").innerHTML = "Besok adalah hari Rabu 🌹";
            break;
        case hari[2]:
            document.getElementById("hasil-hari").innerHTML = "Besok adalah hari Kamis 😱";
            break;
        case hari[3]:
            document.getElementById("hasil-hari").innerHTML = "Besok adalah hari Jumat 🐳";
            break;
        case hari[4]:
            document.getElementById("hasil-hari").innerHTML = "Besok adalah hari Sabtu ⚡";
            break;
        case hari[5]:
            document.getElementById("hasil-hari").innerHTML = "Besok adalah hari Minggu 🎉";
            break;
        case hari[6]:
            document.getElementById("hasil-hari").innerHTML = "Besok adalah hari Senin ⌚";
            break;
        default:
            document.getElementById("hasil-hari").innerHTML = "Hmmm ada yang salah ⛔";
    }
}