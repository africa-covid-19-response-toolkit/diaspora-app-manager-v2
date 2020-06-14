import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Table, Column } from 'react-rainbow-components';
import getQuestions from "../../api/firebase/local/getQuestions";

const TableContainer = styled.section`
    justify-content: center;  
    width: 90%; 
    margin-top: 100px;
    height: 600;
`;
TableContainer.displayName = "TableContainer";
const tableContainerStyles = { height: 600 };

const QuestionsTable = ({ dispatch, loading }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      dispatch({
        type: 'LOAD_QUESTIONS',
        loading: true
      });
      const allQuestions = await getQuestions();
      setQuestions(allQuestions);
      dispatch({
        type: 'DONE_LOADING_QUESTIONS', 
        allQuestions, 
        loading: false
      });
    } 
    fetchData(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        isLoading={loading}
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
    loading: state.loading, 
    questionSelected: state.questionSelected
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(QuestionsTable); 