function clickTask1() {
    let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
    let input = prompt("Sekarang Hari Apa Sih?");

    switch (input) {
        case hari[0]:
            alert("Besok adalah Selasa");
            break;
        case hari[1]:
            alert("Besok adalah Rabu");
            break;
        case hari[2]:
            alert("Besok adalah Kamis");
            break;
        case hari[3]:
            alert("Besok adalah Jumat");
            break;
        case hari[4]:
            alert("Besok adalah Sabtu");
            break;
        case hari[5]:
            alert("Besok adalah Minggu");
            break;
        case hari[6]:
            alert("Besok adalah Senin");
            break;
        default:
            alert("Hmmm ada yang salah ⛔");
    }
}