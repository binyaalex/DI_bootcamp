import BuggyCounter from './components/BuggyCounter'
import ErrorBoundary from './components/ErrorBoundary'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <p><b>Click on the numbers to increase the counters.<br/>
      The counter is programmed to throw error when it reaches 5. This simulates a JavaScript error in a component.</b></p>
      <hr/>
      <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
      <ErrorBoundary>
          <BuggyCounter/>
          <BuggyCounter/>
      </ErrorBoundary>
      <hr/>
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
      <hr/>
      <p>This counter is not inside of boundary. So if crashes, all other components are deleted.</p>
      <BuggyCounter/>
    </>
  );
}

export default App;
