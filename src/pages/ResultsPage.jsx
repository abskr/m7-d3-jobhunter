import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components'
import JobCard from '../components/JobCard.jsx'

function ResultsPage(props) {
  return (
    <Container>
      <RowContainer>
        <Col xs={12} md={{ span: 8, offset: 2 }}>
          {props.searchResults && 
            props.searchResults.map(result => (
              <JobCard submitJobId={props.submitJobId} key={result.id} jobDesc={result}/>
            ))
          }
        </Col>
      </RowContainer>
    </Container>
  );
}

const RowContainer = styled(Row)`
  margin-top: 3vh
`

export default ResultsPage;