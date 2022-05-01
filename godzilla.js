//cerco i li che devono andare nella variabile
  const lis = document.querySelectorAll("#bottom__menu > li");
  console.log(lis);
//uso forEach che esegue una funzione fornita una volta per ogni elemento dell'array.
  lis.forEach((li) => {
//creo una funzione con un EventListener
    li.addEventListener("click", (e) => {
      //e.preventDefault();
      //e.stopPropagation();
      //creo una variabile che identifica la destinazione corrente dell'evento
      const target = e.currentTarget;
      if (
        target.classList.contains("active")
      ) {
        return; //return istruzione termina l'esecuzione della funzione e specifica un valore da restituire al chiamante della funzione.
      }
      lis.forEach((item) => pulisci(item, "active"));
      setClass(target, "active");
    });
  });
function pulisci(node, className) {
  node.classList.remove(className);
}
function setClass(node, className) {
  node.classList.add(className);
}
