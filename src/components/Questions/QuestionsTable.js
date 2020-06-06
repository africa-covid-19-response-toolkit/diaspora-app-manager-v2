import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import firebase from "../../api/firebase/firestore";
import connectEmulatorToApp from "../../api/firebase/connect";
import { Table, Column } from 'react-rainbow-components';

const TableContainer = styled.section`
    justify-content: center;  
    width: 90%; 
    margin-top: 100px;
    height: 600;
`;
TableContainer.displayName = "TableContainer";

const tableContainerStyles = { height: 600 };

const QuestionsTable = ({ dispatch }) => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = () => {
    const db = firebase.firestore();
    connectEmulatorToApp(db); 

    db // Fetch questions from firestore
      .collection("questions")
      .orderBy(firebase.firestore.FieldPath.documentId())
      .onSnapshot(snapshot => {
          let allQuestions = snapshot.docs.map(doc => ({
              id: doc.id, 
              ...doc.data()
          }));
          allQuestions = filterQuestions(allQuestions);
          setQuestions(allQuestions);
          dispatch({
            type: 'LOAD_QUESTIONS',
            allQuestions
          });
      });
  }

  useEffect(() => {
    async function fetchData() {
      return await getQuestions();
    } 
    fetchData(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const filterQuestions = (questions) => {
    return questions.filter((currQuestion) => {
      return parseInt(currQuestion.id) > 0;
    });
  };

  const onSelect = (selectedRow) => {
    const rowNum = parseInt(Object.keys(selectedRow)[0]);
    dispatch({
      type: 'SELECT_QUESTION',
      rowNum, 
      selection: selectedRow[0] 
    })
  };

  return (
    <TableContainer>
      <Table 
        data={questions} 
        maxRowSelection={1}
        showCheckboxColumn={true}
        onRowSelection={onSelect}
        style={tableContainerStyles} 
        keyField="id"
      >
        <Column header="Question" field="id" />
        <Column header="Prompt" field="text.eng" />
    </Table>
  </TableContainer>
  )
}

const mapStateToProps = state => {
  return { 
    authenticated: state.authenticated,
    questions: state.questions,
    questionSelected: state.questionSelected
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsTable); 