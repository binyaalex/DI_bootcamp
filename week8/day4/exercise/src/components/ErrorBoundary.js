import React from 'react';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      errorInfo: null
    }
  }
  componentDidCatch(error,errorInfo) {
    this.setState({error:error,errorInfo:errorInfo})
  }

  render(){
    console.log(this.state.error,this.state.errorInfo);
    if(this.state.error){
      return(
        <div>
          <h2>Something went wrong...</h2>
          <detail>
            {this.state.error && this.state.error.toString()}
            <br/>
            {this.state.errorInfo.componentStack}
          </detail>
        </div>
      )
    }
    return this.props.children;
  }
}
export default ErrorBoundary
