import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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

const QuestionsList = ({dispatch}) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
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
          setQuestions(allQuestions);
      });
  }, []);

  const renderTableActions = () => {
    return(
      <Column type="action">
        <MenuItem label="Edit" onClick={(e, data) => console.log(`Edit`)} />
        <MenuItem label="Delete" onClick={(e, data) => console.log(`Delete`)} />
      </Column>
    );
  };

  const onSelect = (selectedRow) => {
    dispatch({
      type: 'SELECT_QUESTION',
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
        {renderTableActions()}
    </Table>
  </TableContainer>
  )
}

const mapStateToProps = state => {
  return { 
    authenticated: state.authenticated,
    questionSelected: state.questionSelected
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList); 