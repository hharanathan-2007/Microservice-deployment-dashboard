import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Microservice Deployment Dashboard</h1>
        <p>Deployment monitoring and validation overview</p>
      </header>

      <section className="summary">
        <div className="card">
          <h3>Total Deployments</h3>
          <h2>12</h2>
        </div>

        <div className="card">
          <h3>Successful</h3>
          <h2>8</h2>
        </div>

        <div className="card">
          <h3>Failed</h3>
          <h2>2</h2>
        </div>

        <div className="card">
          <h3>Running</h3>
          <h2>2</h2>
        </div>
      </section>

      <section className="deployment-card">
        <h2>Latest Deployment</h2>

        <div className="deployment-info">
          <p><strong>Service:</strong> Payment Service</p>
          <p><strong>Version:</strong> 2.4.0</p>
          <p><strong>Environment:</strong> Production</p>
          <p><strong>Status:</strong> SUCCESS</p>
        </div>

        <h3>Deployment Stages</h3>

        <div className="stages">
          <div className="stage success">
            <strong>✓ Build</strong>
            <span>SUCCESS</span>
          </div>

          <div className="stage success">
            <strong>✓ Test</strong>
            <span>SUCCESS</span>
          </div>

          <div className="stage success">
            <strong>✓ Deploy</strong>
            <span>SUCCESS</span>
          </div>
        </div>
      </section>

      <section className="deployment-card">
        <h2>Validation Results</h2>

        <div className="validation">
          <p><strong>Validation:</strong> PASS</p>
          <p><strong>Decision:</strong> ALLOW</p>
          <p><strong>Findings:</strong> 0</p>
        </div>
      </section>
    </div>
  );
}

export default App;
