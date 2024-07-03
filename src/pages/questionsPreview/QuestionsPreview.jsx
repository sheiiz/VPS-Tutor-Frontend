import React from 'react';
import {Box, Button, Container} from '@mui/material';
import { useQuestions } from "../../contexts/QuestionsContext.jsx";
import QuestionsSection from "../../components/questionsSection/QuestionsSection.jsx";
import {RenderHistoryQuestions} from "../../components/Components.jsx";
import { useHistoryQuestions } from '../../contexts/HistoryQuestionsContext.jsx';
import RenderCaseDetails from "../../components/renderCaseDetails/RenderCaseDetails.jsx";
import {useNavigate} from "react-router-dom";
import {useCase} from "../../contexts/CaseContext.jsx";
import {DentalChart} from "../Pages.jsx";


const QuestionsPreview = () => {
    const { state: questionsState} = useQuestions();
    const { clearAllQuestions } = useQuestions();
    const { state: historyState} = useHistoryQuestions();
    const {clearHistoryQuestions} = useHistoryQuestions()
    const { clearCaseDetails } = useCase();
    const navigate = useNavigate();

    const handleCreateNewCase = () => {
        clearAllQuestions();
        clearHistoryQuestions();
        clearCaseDetails();
        navigate('/createCase');
    };

    return (
        <Container>
            <RenderCaseDetails/>
            <RenderHistoryQuestions historyQuestions={historyState.historyQuestions} />
            <QuestionsSection questions={questionsState.periodontalScreeningQuestions} sectionTitle="Periodontal Screening Questions" />
            <QuestionsSection questions={questionsState.softTissueAssessment} sectionTitle="Soft Tissue Assessment" />
            <QuestionsSection questions={questionsState.hardTissueAssessment} sectionTitle="Hard Tissue Assessment" />
            <QuestionsSection questions={questionsState.recordPlaqueScore} sectionTitle="Record Plaque Score" />
            <QuestionsSection questions={questionsState.radiographs} sectionTitle="Radiographs" />
            <QuestionsSection questions={questionsState.sensibilityRecordings} sectionTitle="Sensibility Recordings" />
            <QuestionsSection questions={questionsState.hematologicalRecordings} sectionTitle="Hematological Recordings" />
            <QuestionsSection questions={questionsState.diagnosis} sectionTitle="Diagnosis" />

            <Box display="flex" justifyContent="space-between" mt={2}>
                <Button onClick={() => navigate('/diagnosis')} variant="outlined" color="primary" sx={{ marginRight: 1 }}>
                    Back
                </Button>
                <Button onClick={handleCreateNewCase} variant="contained" color="primary">
                    Create New Case
                </Button>
            </Box>
        </Container>
    );
};

export default QuestionsPreview;
