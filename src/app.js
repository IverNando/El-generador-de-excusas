function excusas () {
  let who = ['El gato', 'La abuela', 'Un pirata', 'Mi roomie'];
  let action = ['se comió', 'quemó', 'apostó y perdió', 'escondió'];
  let what = ['mi ordenador', 'mis ahorros', 'la bicicleta','el bocadillo','las llaves de la casa'];
  let when = ['esta noche', 'mientras veia al jujalag', 'ayer, durante la cena', ', eso fue esta tarde, lo juro.'];


function excusaRandom (situaciones) {
  return situaciones [Math.floor(Math.random() * situaciones.length)];

}

return (
  excusaRandom (who) + ' ' +
  excusaRandom (action) + ' ' + 
  excusaRandom (what) + ' ' +
  excusaRandom (when)  
); 
}

window.addEventListener('DOMContentLoaded', () => {
  const excusaElemento = document.getElementById ('excusa');
  if (excusaElemento) {
    excusaElemento.textContent = excusas () ;
  }
});
  