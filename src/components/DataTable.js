import React from 'react';

const DataTable = ({ data, width }) => {
  return (
    <div className="table-container" style={{ width: width }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Doctor's Name</th>
            <th scope="col">Patient's Name</th>
            <th scope="col">Patient's Age</th>
            <th scope="col">Recording Date</th>
            <th scope="col">Audio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.doctorName}</td>
            <td>{data.patientName}</td>
            <td>{data.patientAge}</td>
            <td>{data.recordingDate}</td>
            <td>
              <audio controls>
                <source src={URL.createObjectURL(data.audioFile)} />
              </audio>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
