import React, { Component } from 'react';


class GraphBars extends Component {

    render() {

        return (
            <div className="GraphBox">
                {/*<div className='labels'>
                    <h4> { this.props.label } </h4>
                </div>*/}

              <div className="GraphBars" id={this.props.label} style = {{ height: this.props.value*5 +"px" }}>
                  <p>{this.props.value}</p>
              </div>

            </div>
        );
    }
}


export default GraphBars;