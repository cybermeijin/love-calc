function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();

  if (name1 === "" || name2 === "") {
    alert("Por favor, digite os dois nomes.");
  } else {
    const lovePercentage = Math.floor(Math.random() * 101);
    const result = document.getElementById("result");
    result.innerHTML = `A chance de sucesso do relacionamento entre ${name1} e ${name2} é de: ${lovePercentage}%`;

    if (lovePercentage < 30) {
      result.innerHTML += "<br> Nâo é muito promissor. Continue procurando...";
    } else if (lovePercentage >= 30 && lovePercentage < 70) {
      result.innerHTML += "<br> O relacionamento tem potencial. Dê uma chance!";
    } else {
      result.innerHTML += "<br> Grande chance de sucesso! O amor está no ar!!";
    }
  }
}
