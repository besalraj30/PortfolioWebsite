import React, {Component} from 'react';
import './Skills.css';

class Skills extends Component{
    render(){
        
    
    return(
    <section>
        <h1 style={{color: "white"}}>SKILLS</h1>
        <div class="demo-preview">
            
            <h1></h1>
            <div class="progress progress-striped active">
                <div role="progressbar " style={{width: "40%"}} class="progress-bar progress-bar-info"><span style={{color: "black", fontWeight: "bold",textAlign: "left"}}>HTML</span>
                </div>
            </div>
            <h1>

            </h1>
            <div class="progress progress-striped active">
                <div role="progressbar " style={{width: "55%"}} class="progress-bar progress-bar-info"><span style={{color: "black", fontWeight: "bold", textAlign: "left"}}>CSS</span>
                </div>
            </div>
            <h1>

            </h1>
            <div class="progress progress-striped active">
                <div role="progressbar " style={{width: "85%"}} class="progress-bar progress-bar-info"><span style={{color: "black", fontWeight: "bold", textAlign: "left"}}>JAVASCRIPT</span>
                </div>
            </div>
            <h1>

            </h1>
            <div class="progress progress-striped active">
                <div role="progressbar " style={{width: "70%"}} class="progress-bar progress-bar-info"><span style={{color: "black", fontWeight: "bold", textAlign: "left"}}>REACTJS</span>
                </div>
            </div>
            <h1>

            </h1>
        </div>
    </section>

    );
    }
}

export default Skills;