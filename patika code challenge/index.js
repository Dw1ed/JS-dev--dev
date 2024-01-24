var isim = prompt("Lütfen adinizi girin:");
console.log(document.getElementById("hosgeldiniz").innerHTML);
document.getElementById("hosgeldiniz").innerHTML=`Merhaba ${isim} Hoşgeldiniz! `
function showDateTime() {
    // Tarih ve saat bilgisini al
    var currentDateTime = new Date();

    // Tarih ve saat bilgisini göstermek için HTML elementini seç
    var dateTimeElement = document.getElementById("datetime");

    // Tarih ve saat bilgisini HTML elementine ekle
    dateTimeElement.innerHTML = "Şu anki tarih ve zaman: " + currentDateTime;
}
window.onload = showDateTime;
