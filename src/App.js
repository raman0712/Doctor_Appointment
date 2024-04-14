import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import DataTable from './components/DataTable';
import './styles.css'; // Import custom CSS file

function App() {
  const [formData, setFormData] = useState(null);

  const handleSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="container">
      <h1 className="mt-5 mb-4">Doctor's Appointment Form</h1>
      <div className="row">
        <div className="col-md-6">
          <FormComponent onSubmit={handleSubmit} />
        </div>
      </div>
      {formData && (
        <div className="row">
          <div className="col-md-6">
            <h2 className="mt-5 mb-4">Submitted Data</h2>
            <DataTable data={formData} width="1000px" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
