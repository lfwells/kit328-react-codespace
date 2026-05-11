import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/multiply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          num1: parseFloat(num1),
          num2: parseFloat(num2)
        })
      });

      const data = await response.json();
      if (response.ok) {
        setResult(`Result: ${data.result}`);
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (error) {
      setResult(`Error: Could not connect to API`);
    }
  };

  return (
    <div className="App">
      <h1>Multiply Numbers (by lfwells)</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>First Number:</label>
          <input 
            type="number" 
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Second Number:</label>
          <input 
            type="number" 
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            required
            style={{ width: '100%', padding: '0.5rem', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '0.5rem', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Calculate
        </button>
      </form>

      {result && (
        <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8f9fa', border: '1px solid #dee2e6' }}>
          {result}
        </div>
      )}
    </div>
  );
}

export default App;
