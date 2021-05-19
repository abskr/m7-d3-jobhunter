import React from 'react';
import { Button, Card } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import {addToFavAction, removeFromFavAction} from '../reduxFolder/actions/index.js'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  favJob: state.fav.jobs
})

const mapDispatchToProps = dispatch => ({
  addToFav: (jobObj) => dispatch(addToFavAction(jobObj)),
  removeFromFav: (jobObj) => dispatch(removeFromFavAction(jobObj))
})

function JobCard({
  history,
  jobDesc,
  submitJobId,
  addToFav,
  removeFromFav, 
  favJobs,
}) {
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

          <Button variant='danger' onClick={() => addToFav(jobDesc)}>
            Add to favorite
          </Button>
          <Button variant='outline-danger' onClick={() => removeFromFav(jobDesc)}>
            Add to favorite
          </Button>
 
      </Card.Body>
    </Card>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(JobCard));