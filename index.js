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
        step.innerHTML = String(stepsLabel);
        step.classList.add("disabled");
        stepsLabel++;
    });

    connectors.forEach(connector => {
        connector.classList.add("disabled");
    });

    steps[0].classList.remove("disabled");
    disableButtonBack();
}

setUp();

let currentStep = 1;
let currentConnector = 0;

const enableNextStep = () => {
    console.log(currentStep, currentConnector);

    if (currentStep < steps.length) {

        steps[currentStep].classList.remove("disabled");
        connectors[currentConnector].classList.remove("disabled");

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

        steps[currentStep].classList.add("disabled");
        connectors[currentConnector].classList.add("disabled");
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