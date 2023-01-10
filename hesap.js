
function AlanHesap() {
    if (document.getElementById("Select1").value === "ka1") { 
    var alan =(document.getElementById("x").value);
    var taban = alan / 100 * 35;
    var izin = alan /2;
document.getElementById("xx").innerHTML = ("Parselde, Maksimum " + taban + " metrekaresi tabanda olmak koşuluyla, toplam " + izin + " metrekare gelişme hakkı vardır");}

 else if (document.getElementById("Select1").value === "ka2") {
  var alan =(document.getElementById("x").value);
    var taban = alan / 100 * 20;
    var izin = alan / 100 * 35;
document.getElementById("xx").innerHTML = ("Parselde, Maksimum " + taban + " metrekaresi tabanda olmak koşuluyla, toplam " + izin + " metrekare gelişme hakkı vardır");
}

else if (document.getElementById("Select1").value === "köyiçi") {
  var alan =(document.getElementById("x").value);
  var taban = alan / 100 * 40;
  var izin = alan / 100 * 60;
  document.getElementById("xx").innerHTML = ("Parselde, Maksimum " + taban + " metrekaresi tabanda olmak koşuluyla, toplam " + izin + " metrekare gelişme hakkı vardır")
}

else if (document.getElementById("Select1").value === "kırsal") {
  var alan =(document.getElementById("x").value);
  var izin = alan / 100 * 20;
  document.getElementById("xx").innerHTML = ("Parselde toplam " + izin + " metrekare gelişme hakkı vardır")
}

else if (document.getElementById("Select1").value === "tarımsal") {
  document.getElementById("xx").innerHTML = ("Yeterli yol olması ve uygunluk görüşü olması halinde 2 dönümden küçük parsellerde 1, büyük parsellerde 2 adet konuta izin verilir. Konutların alanı 200 metrekareyi geçemez. ")
}

else {
alert("hata");
  }}