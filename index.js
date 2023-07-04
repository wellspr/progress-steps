const steps = document.querySelectorAll(".step");
const connectors = document.querySelectorAll(".connector");

let stepLabel = 0;

steps.forEach(step => {
    stepLabel++;
    step.innerHTML = String(stepLabel);
    step.classList.add("disabled");
});

connectors.forEach(con => {
    con.classList.add("disabled");
});

steps[0].classList.remove("disabled");