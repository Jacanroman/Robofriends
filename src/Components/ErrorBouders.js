import React, {Component} from 'react';

class ErrorBoundry extends Component{
    consturctor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    // con React 16 tenemos un component para cambiar los 
    //estados

    componentDidCatch(error, info){
        this.setState({hasError:true})
    }

    render(){
        if (this.state.hasError){
            return <h1>Oooopss. That is not good</h1>
        }
        return this.props.children
    }
}


export default ErrorBoundry;