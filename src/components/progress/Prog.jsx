import React from 'react';
import ProgressBar from "react-bootstrap/ProgressBar";
const Prog = (props) => {
    return (
        <div>
            <ProgressBar className="mb-3" style={{height: '1.5rem'}}>
         <ProgressBar variant={props.variant1} now={props.now1} key={props.key1} label={props.labelskill} />
         <ProgressBar variant={props.variant2} now={props.now2} key={props.key2}/>
       </ProgressBar>
       <div> 

  {/* <ProgressBar className="mb-3" style={{height: '1.5rem'}}>
         <ProgressBar style={{ backgroundColor: 'green' }} now={20} key={1} label='css' />
         <ProgressBar style={{ backgroundColor: 'red' }} now={50} key={2}/>
       </ProgressBar> */}
</div>
        </div>
    );
}

export default Prog;
