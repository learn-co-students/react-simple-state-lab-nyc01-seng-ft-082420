import React from 'react'

class Cell extends React.Component {

    state = {
        
        color: this.props.value
    }
    // onClick must update the state color to #333
    clickHandler = () => {
        this.setState({color: '#333'})
        
    }
    render() {
        console.log(this.props.value)
        return(
            <div className="cell" style={{backgroundColor: `${this.state.color}`}} onClick={this.clickHandler}>
                
                { /* {this.props.value} */ }

            </div>
        )
    }

}


export default Cell