import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "../../api/firebase/firestore";
import connectEmulatorToApp from "../../api/firebase/connect";
import { Table, Column, MenuItem } from 'react-rainbow-components';

const TableContainer = styled.section`
    justify-content: center;  
    width: 90%; 
    margin-top: 100px;
    height: 600;
`;
TableContainer.displayName = "TableContainer";

const tableContainerStyles = { height: 600 };

const filterQuestions = (questions) => {
  return questions.filter(function (currQuestion) {
    return parseInt(currQuestion.id) > 0;
  });
};

const QuestionsList = () => {
  const [questions, setQuestions] = useState([]);
  
  const getQuestions = async (unmounted) => {
    const db = firebase.firestore();
    connectEmulatorToApp(db); 

    db
      .collection("questions")
      .orderBy(firebase.firestore.FieldPath.documentId())
      .onSnapshot(snapshot => {
          let allQuestions = snapshot.docs.map(doc => ({
              id: doc.id, 
              ...doc.data()
          }));
          allQuestions = filterQuestions(allQuestions);
          if (!unmounted)
            setQuestions(allQuestions);
      });
  }

  useEffect(() => {
    let unmounted = false;
    async function fetchData() {
      await getQuestions(unmounted);
    }
    return () => {
      fetchData();
      unmounted = true
    }
  }, []);

  const renderTableActions = () => {
    return(
      <Column type="action">
        <MenuItem label="Edit" onClick={(e, data) => console.log(`Edit`)} />
        <MenuItem label="Delete" onClick={(e, data) => console.log(`Delete`)} />
      </Column>
    );
  }

  return (
    <TableContainer>
      <Table data={questions} style={tableContainerStyles} keyField="id">
        <Column header="Question" field="id" />
        <Column header="Prompt" field="text.eng" />
        {renderTableActions()}
    </Table>
  </TableContainer>
  )
}

export default QuestionsList; 