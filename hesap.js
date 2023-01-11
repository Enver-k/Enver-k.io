
function AlanHesap() {
    if (document.getElementById("Select1").value === "ka1") { 
    var alan =(document.getElementById("x").value);
    var taban = alan / 100 * 35;
    var izin = alan /2;
document.getElementById("xx").innerHTML = ("Parselde, Maksimum " + taban + " metrekaresi tabanda olmak koşuluyla, toplam " + izin + " metrekare gelişme hakkı vardır. Maksimum bina yüksekliği 8.2 metredir");}

 else if (document.getElementById("Select1").value === "ka2") {
  var alan =(document.getElementById("x").value);
    var taban = alan / 100 * 20;
    var izin = alan / 100 * 35;
document.getElementById("xx").innerHTML = ("Parselde, Maksimum " + taban + " metrekaresi tabanda olmak koşuluyla, toplam " + izin + " metrekare gelişme hakkı vardır. Maksimum bina yüksekliği 8.2 metredir");
}

else if (document.getElementById("Select1").value === "köyiçi") {
  var alan =(document.getElementById("x").value);
  var taban = alan / 100 * 40;
  var izin = alan / 100 * 60;
  document.getElementById("xx").innerHTML = ("Parselde, Maksimum " + taban + " metrekaresi tabanda olmak koşuluyla, toplam " + izin + " metrekare gelişme hakkı vardır. Maksimum bina yüksekliği 7.6 metredir")
}

else if (document.getElementById("Select1").value === "kırsal") {
  var alan =(document.getElementById("x").value);
  var izin = alan / 100 * 20;
  document.getElementById("xx").innerHTML = ("Parselde toplam " + izin + " metrekare gelişme hakkı vardır. Maksimum bina yüksekliği 8.2 metredir")
}

else if (document.getElementById("Select1").value === "tarımsal") {
  document.getElementById("xx").innerHTML = ("Yeterli yol olması ve uygunluk görüşü olması halinde 2 dönümden küçük parsellerde 1, büyük parsellerde 2 adet konuta izin verilir. Konutların alanı 200 metrekareyi geçemez. Maksimum bina yüksekliği 8.2 metredir ")
}

else {
alert("hata");
  }
}

  function Parselle() { 
    if (document.getElementById("Select1").value === "ka1") {
    let parcelCount =  document.getElementById("x").value;
    parcelCount = parcelCount / 600;
    document.getElementById("xx2").innerHTML = ("Parselde, açılabilecek arsa büyüklüğü minimum 600 metrekaredir.KAMUYA TERK EDİLECEK ALANLAR DİKKATE ALINMAZSA, İlgili parselde YAKLAŞIK " + Math.floor(parcelCount) + " arsa açılabilir.");
    }
    else if (document.getElementById("Select1").value === "ka2") {
      let parcelCount =  document.getElementById("x").value;
      parcelCount = parcelCount / 1000;
      document.getElementById("xx2").innerHTML = ("Parselde, açılabilecek arsa büyüklüğü minimum 1000 metrekaredir.KAMUYA TERK EDİLECEK ALANLAR DİKKATE ALINMAZSA, İlgili parselde YAKLAŞIK " + Math.floor(parcelCount) + " arsa açılabilir.");
    }
  
    else if (document.getElementById("Select1").value === "köyiçi") {
      let parcelCount =  document.getElementById("x").value;
      parcelCount = parcelCount / 300;
      document.getElementById("xx2").innerHTML = ("Parselde, açılabilecek arsa büyüklüğü minimum 300 metrekaredir.KAMUYA TERK EDİLECEK ALANLAR DİKKATE ALINMAZSA, İlgili parselde YAKLAŞIK " + Math.floor(parcelCount) + " arsa açılabilir.");
    }
  
    else if (document.getElementById("Select1").value === "kırsal") {
      let parcelCount =  document.getElementById("x").value;
      parcelCount = parcelCount / 2000;
      document.getElementById("xx2").innerHTML = ("Parselde, açılabilecek arsa büyüklüğü minimum 2000 metrekaredir.KAMUYA TERK EDİLECEK ALANLAR DİKKATE ALINMAZSA, İlgili parselde YAKLAŞIK " + Math.floor(parcelCount) + " arsa açılabilir.");
    }
  
    else if (document.getElementById("Select1").value === "tarımsal") {
      document.getElementById("xx2").innerHTML = ("Tarımsal Gelişme Alanlarında parselasyon yapılamaz");
    }
  }

  function order66() {
    AlanHesap();
    Parselle();
  }