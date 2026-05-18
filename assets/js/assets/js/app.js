console.log("AGvoid Dashboard Loaded");

function simulate(load, energy) {
  const efficiency = (energy / load) * 100;
  const loss = load - energy;

  return {
    efficiency: efficiency.toFixed(2),
    loss: loss.toFixed(2),
    status: energy > load ? "OPTIMAL" : "INEFFICIENT"
  };
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("runSim");

  if (!btn) return;

  btn.addEventListener("click", () => {
    const load = parseFloat(document.getElementById("load").value);
    const energy = parseFloat(document.getElementById("energy").value);

    const result = simulate(load, energy);

    document.getElementById("output").innerHTML = `
      Efficiency: ${result.efficiency}% <br>
      Loss: ${result.loss} <br>
      Status: ${result.status}
    `;
  });
});
