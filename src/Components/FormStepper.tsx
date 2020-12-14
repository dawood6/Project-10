import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import PersonalData from "./PersonalData";
import ContactData from "./ContactData";
import AddressData from "./AddressData";
import AnimatedChekmark from "./AnimatedCheckmark";

function getSteps() {
    return ["Personal Details", "Contact Details", "Address Details"];
}

function getStepContent(stepIndex: number, handleNext: () => void) {
    switch (stepIndex) {
        case 0:
            return <PersonalData handleNext={handleNext} />;
        case 1:
            return <ContactData handleNext={handleNext} />;
        case 2:
            return <AddressData handleNext={handleNext} />;
        default:
            return "Unknown stepIndex";
    }
}

export default function FormStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    return (
        <div >
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography >
                            All steps completed
                            <AnimatedChekmark />
                        </Typography>
                    </div>
                ) : (
                        <div>
                            <Typography >
                                {getStepContent(activeStep, handleNext)}
                            </Typography>
                        </div>
                    )}
            </div>
        </div >
    );
}
