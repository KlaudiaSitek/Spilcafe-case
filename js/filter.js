
function opdaterSpil() {

  // Hent teksten fra søgefeltet
  let tekst = document.getElementById("soeg").value;
  tekst = tekst.toLowerCase().trim();

  // Søg i spillenes navne
  let resultat = spil.filter(function(etSpil) {
    return etSpil.navn.toLowerCase().includes(tekst);
  });

  // Hent den valgte kategori
  let kategori = document.querySelector(
    'input[name="kategori"]:checked'
  ).value;

  // Filtrer efter kategori
  if (kategori != "") {
    resultat = resultat.filter(function(etSpil) {
      return etSpil.kategorier.includes(kategori);
    });
  }

  // Filtrer efter spilletid
  let tid = Number(document.getElementById("tid").value);

  document.getElementById("tidtekst").textContent = tid;

  resultat = resultat.filter(function(etSpil) {
    return etSpil.maxTid <= tid;
  });

  // Sortér spillene
  let sortering = document.getElementById("sortering").value;

  if (sortering == "titel") {
    resultat.sort(function(a, b) {
      return a.navn.localeCompare(b.navn, "da");
    });
  }

  if (sortering == "tid") {
    resultat.sort(function(a, b) {
      return a.maxTid - b.maxTid;
    });
  }

  // Vis spillene på siden
  document.getElementById("resultater").innerHTML = "";

  resultat.forEach(function(etSpil) {
    document.getElementById("resultater").innerHTML +=
      "<div class='spilkort'>" +
      "<h3>" + etSpil.navn + "</h3>" +
      "<p>" + etSpil.kategorier.join(", ") + "</p>" +
      "<p>" + etSpil.spillerTekst + "</p>" +
      "</div>";
  });

}

opdaterSpil();
