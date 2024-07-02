import React, { useState, useEffect } from 'react';
import './recordPlaqueScore.scss';
import { DisplayQuestions } from "../../components/Components.jsx";
import StepperComponent from "../../layout/stepper/StepperComponent.jsx";
import { useQuestions } from "../../contexts/QuestionsContext.jsx";

const RecordPlaqueScore = () => {
    const { state, setQuestions } = useQuestions();
    const [questions, setLocalQuestions] = useState(state.recordPlaqueScore);

    useEffect(() => {
        setLocalQuestions(state.recordPlaqueScore);
        console.log("Questions in context:", state.recordPlaqueScore);
    }, [state.recordPlaqueScore]);

    const handleNext = () => {
        setQuestions('recordPlaqueScore', questions);
    };

    return (
        <div className="record-plaque-score">
            <StepperComponent selectedStep={"Record Plaque Score"} />
            <DisplayQuestions
                questions={questions}
                setQuestions={setLocalQuestions}
                navigatePath={'/radiographs'}
                sectionType={'RecordPlaqueScore'}
                onNext={handleNext}
            />
        </div>
    );
};

export default RecordPlaqueScore;
