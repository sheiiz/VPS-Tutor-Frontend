import React, { useState, useEffect } from 'react';
import './hematologicalRecordings.scss';
import { DisplayQuestions } from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";

const HematologicalRecordings = () => {
    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.hematologicalRecordings);

    useEffect(() => {
        setLocalQuestions(state.hematologicalRecordings);
        console.log("Questions in context:", state.hematologicalRecordings);
    }, [state.hematologicalRecordings]);

    const handleNext = () => {
        setQuestions('hematologicalRecordings', questions);
    };

    return (
        <div className="hematological-recordings">
            <StepperComponent selectedStep={"Hematological Recordings"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/diagnosis'}
                sectionType={"HematologicalRecordings"}
                onNext={handleNext}
            />
        </div>
    );
};

export default HematologicalRecordings;
