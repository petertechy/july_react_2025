import { Component } from "react";

class ClassReact extends Component {
    constructor(props) {
        super(props);
    }
    state = { myNumber: 12, myName: "Oladokun" }
    
    increase = () =>{
        this.setState({myNumber: this.state.myNumber + 1, myName: "James"})
        console.log(this.state.myNumber)
    }

    componentDidMount(){
        console.log("This component has mounted")
    }

    componentDidUpdate(){
        console.log("This component has updated")
    }

    componentWillUnmount(){
        console.log("This component is about to unmount")
    }
    
    render() { 
        // console.log(this.props)
        return ( 
            <>
                <h1>Hello, {this.props.title} {this.state.myName} {this.state.myNumber}</h1>

                <button onClick={this.increase}>Increase Number</button>
            </>
         );
    }
}
 
export default ClassReact ;