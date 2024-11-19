import React, { useEffect } from 'react';
import $ from 'jquery'; // Required for DataTables
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 5 CSS
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'; // DataTables Bootstrap 5 styles
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-bs5';

const DataList = () => {
  useEffect(() => {
    // Initialize DataTable after the component mounts
    $('#myTable').DataTable();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div className="container my-5">
      <table id="myTable" className="table table-striped table-bordered w-100">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start Date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>Software Engineer</td>
            <td>New York</td>
            <td>29</td>
            <td>2016/01/01</td>
            <td>$120,000</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>Project Manager</td>
            <td>London</td>
            <td>34</td>
            <td>2018/03/14</td>
            <td>$95,000</td>
          </tr>
          {/* More rows */}
        </tbody>
      </table>
    </div>
  );
};

export default DataList;
