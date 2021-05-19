import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import {addToFavAction} from '../reduxFolder/actions/index.js'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => ({
  addToFav: jobObj =>
    dispatch(addToFavAction(jobObj))
})

function JobCard({history, jobDesc, submitJobId, addToFav}) {
  return (
    <Card className='mb-3'>
      <Card.Header>{jobDesc.company}</Card.Header>
      <Card.Body>
        <Card.Title>{jobDesc.title}</Card.Title>
        {/* <div
          dangerouslySetInnerHTML={{ __html: jobDesc.description }}
        /> */}
        <Button
          variant='primary'
          onClick={() =>
            submitJobId(jobDesc.id).then(history.push(`/results/${jobDesc.id}`))
          }
        >
          Apply now!
        </Button>
        <Button
          variant='danger'
          onClick={() => addToFav(jobDesc)}
        >
          Add to favorite
        </Button>
      </Card.Body>
    </Card>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(JobCard));