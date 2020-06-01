import React, {Component} from "react";
import styled from "styled-components";
import { Table, Column, MenuItem } from 'react-rainbow-components';

const TableContainer = styled.section`
    justify-content: center;  
    width: 90%; 
    margin-top: 100px;
    height: 600;
`;
TableContainer.displayName = "TableContainer";

const tableContainerStyles = { height: 600 };

class QuestionsList extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <TableContainer>
        <Table style={tableContainerStyles} keyField="id">
          <Column header="Question" field="name" />
          <Column header="Prompt" field="company" />
          <Column type="action">
            <MenuItem label="Edit" onClick={(e, data) => console.log(`Edit`)} />
            <MenuItem label="Delete" onClick={(e, data) => console.log(`Delete`)} />
        </Column>
      </Table>
    </TableContainer>
    )
  }
}

export default QuestionsList; 