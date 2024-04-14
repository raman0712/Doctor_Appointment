import React, { useState } from 'react';

const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    doctorName: '',
    patientName: '',
    patientAge: '',
    recordingDate: '',
    audioFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, audioFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="doctorName" className="form-label">Doctor's Name</label>
        <input type="text" className="form-control" id="doctorName" name="doctorName" value={formData.doctorName} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="patientName" className="form-label">Patient's Name</label>
        <input type="text" className="form-control" id="patientName" name="patientName" value={formData.patientName} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="patientAge" className="form-label">Patient's Age</label>
        <input type="number" className="form-control" id="patientAge" name="patientAge" value={formData.patientAge} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="recordingDate" className="form-label">Recording Date</label>
        <input type="date" className="form-control" id="recordingDate" name="recordingDate" value={formData.recordingDate} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="audioFile" className="form-label">Upload Audio File</label>
        <input type="file" className="form-control" id="audioFile" name="audioFile" onChange={handleFileChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default FormComponent;
