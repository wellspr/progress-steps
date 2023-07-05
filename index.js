const steps = document.querySelectorAll(".step");
const connectors = document.querySelectorAll(".connector");
const buttonBack = document.querySelector(".back");
const buttonNext = document.querySelector(".next");

const disableButtonBack = () => buttonBack.setAttribute("disabled", true);
const disableButtonNext = () => buttonNext.setAttribute("disabled", true);
const enableButtonBack = () => buttonBack.removeAttribute("disabled");
const enableButtonNext = () => buttonNext.removeAttribute("disabled");

const setUp = () => {
    let stepsLabel = 1;

    steps.forEach(step => {
        step.querySelector(".label").innerHTML = String(stepsLabel);
        stepsLabel++;
    });

    disableButtonBack();
}

setUp();

let currentStep = 1;
let currentConnector = 0;

const enableNextStep = () => {
    console.log(currentStep, currentConnector);

    if (currentStep < steps.length) {
        connectors[currentConnector].classList.add("connector-enabled");
        steps[currentStep].classList.add("step-enabled");

        currentStep++;
        currentConnector++;
    }

    if (currentStep > 1) {
        enableButtonBack();
    }

    if (currentStep === steps.length) {
        disableButtonNext();
    }
};

const disablePreviousStep = () => {
    console.log(currentStep, currentConnector);

    if (currentStep > 1) {

        currentStep--;
        currentConnector--;

        steps[currentStep].classList.add("disabled"); // Lasts 200ms

        setTimeout(() => {
            steps[currentStep].classList.remove("disabled");
            connectors[currentConnector].classList.add("disabled");
        }, 200);
        
        setTimeout(() => {
            connectors[currentConnector].classList.remove("disabled");
            steps[currentStep].classList.remove("step-enabled");
            connectors[currentConnector].classList.remove("connector-enabled");
        }, 400);
    }

    if (currentStep === 1) {
        disableButtonBack();
    }

    if (currentStep < steps.length) {
        enableButtonNext()
    }
};

buttonNext.addEventListener("click", enableNextStep);
buttonBack.addEventListener("click", disablePreviousStep);