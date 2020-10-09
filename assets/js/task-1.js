function clickTask1() {
    let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
    let input = prompt("Sekarang Hari Apa Sih? 😱");
    let output = document.getElementById("hasil-hari");

    switch (input) {
        case hari[0]:
            output.innerHTML = "Besok adalah hari Selasa 👒";
            break;
        case hari[1]:
            output.innerHTML = "Besok adalah hari Rabu 🌹";
            break;
        case hari[2]:
            output.innerHTML = "Besok adalah hari Kamis 😱";
            break;
        case hari[3]:
            output.innerHTML = "Besok adalah hari Jumat 🐳";
            break;
        case hari[4]:
            output.innerHTML = "Besok adalah hari Sabtu ⚡";
            break;
        case hari[5]:
            output.innerHTML = "Besok adalah hari Minggu 🎉";
            break;
        case hari[6]:
            output.innerHTML = "Besok adalah hari Senin ⌚";
            break;
        default:
            output.innerHTML = "Hmmm ada yang salah ⛔";
    }
}