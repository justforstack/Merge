import React,{Component} from 'react'
class ErrorBoundary extends Component{
constructor(props){
  super(props);
  this.state = { error: null};
}
static getDerivedStateFromError(error) {
  // Update state to render the fallback UI
  return { error: error };
}
componentDidCatch(error) {
  this.setState({
    error: error
  })
}
render() {
  if (this.state.error) {
    // Error path
    return (
      <div>
        <h2>Something went wrong.</h2>
        {/* <details style={{ whiteSpace: 'pre-wrap' }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details> */}
      </div>
    );
  }
  // Normally, just render children
  return this.props.children;
}  

}
export default ErrorBoundary