function clickTask1() {
    let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"];
    let input = prompt("Sekarang Hari Apa Sih?");

    switch (input) {
        case hari[0]:
            alert("Besok Selasa");
            break;
        case hari[1]:
            alert("Besok Rabu");
            break;
        case hari[2]:
            alert("Besok Kamis");
            break;
        case hari[3]:
            alert("Besok Jumat");
            break;
        case hari[4]:
            alert("Besok Sabtu");
            break;
        case hari[5]:
            alert("Besok Minggu");
            break;
        case hari[6]:
            alert("Besok Senin");
            break;
        default:
            alert("Hmmm ada yang salah ⛔");
    }
}