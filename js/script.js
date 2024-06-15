function calcular(){
  const homens = document.getElementById(`homens`).value;
  const mulheres = document.getElementById(`mulheres`).value;
  const crianças = document.getElementById(`crianças`).value;

  const carneBovina = (homens * 0.5) + (mulheres * 0.4) + (crianças * 0.2);
  const frango = (homens * 0.3) + (mulheres * 0.2) + (crianças * 0.1);
  const linguiça = (homens * 0.2) + (mulheres * 0.2) + (crianças * 0.1);
  const refrigerante = (homens * 0.5) + (mulheres * 0.5) + (crianças * 0.5);
  const cerveja = (homens * 1.0) + (mulheres * 0.5);

  document.getElementById(`resultados`).innerHTML = `
  <li>${carneBovina.toFixed(1)}Kg de Carne Bovina</li>
  <li>${frango.toFixed(1)}Kg de Frango</li>
  <li>${linguiça.toFixed(1)}Kg de Linguiça</li>
  <li>${refrigerante.toFixed(1)}L de Refrigerante</li>
  <li>${cerveja.toFixed(1)}L de Cerveja</li>
  `;
}

