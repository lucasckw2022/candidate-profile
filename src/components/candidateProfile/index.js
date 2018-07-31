import React, { Component } from 'react';
import { APIHelper } from '../comon/helper';
import { globalVariable } from '../comon/config';
import Candidate from './Candidate'

class CandidateProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {}
    this.switchCandidate = this.switchCandidate.bind(this)
  }

  switchCandidate(prev){
    let selectedCandidate = this.state.selectedCandidate
    prev ? selectedCandidate = (selectedCandidate == 0 ? this.state.candidates.length -1 : selectedCandidate - 1) : selectedCandidate = selectedCandidate + 1
    selectedCandidate = selectedCandidate % this.state.candidates.length
    this.setState({selectedCandidate})
  }

  componentWillMount(){
    APIHelper('GET', globalVariable.candidateProfileAPI).then((response)=>{
      this.setState({candidates: response.data, selectedCandidate: 0})
    })
  }
  
  render() {
    const { candidates, selectedCandidate } = this.state
    return (
      <div className="candidate-profiles">
        {
          candidates && (selectedCandidate < candidates.length) && (
            <div>
              {
                candidates.length > 0 ? (
                  <p className="indicator">{`Showing Candiate: ${selectedCandidate + 1} / ${candidates.length}`}</p>
                ) : <p className="indicator">There is no candidte profile</p>
              }
              <button className="btn candidate-switch prev" onClick={()=>{this.switchCandidate(true)}}/>
              <button className="btn candidate-switch next" onClick={()=>{this.switchCandidate(false)}}/>
              <Candidate candidate={candidates[selectedCandidate]} />
            </div>
          )
        }
      </div>
    );
  }
}

export default CandidateProfile;
