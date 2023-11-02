import { useState } from 'react';
import './CustomerList.css';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CustomerList() {
  const [filterValue, setFilterValue] = useState('');
  const {employee} = useSelector((state) => state)
  const columns = [
    {
      id: 'id',
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: 'First Name',
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => row.startDate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: (row) => row.department,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: (row) => row.dateBirth,
      sortable: true,
    },
    {
      name: 'Street',
      selector: (row) => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: (row) => row.zipCode,
      sortable: true,
    },
  ];

  const handleChange = (e) => {
    const newValue = e.target.value.toLocaleLowerCase();
    setFilterValue(newValue);
  };
  const dataFiltered = employee.filter((people) => {
    return people.firstName.toLocaleLowerCase().includes(filterValue) || people.lastName.toLocaleLowerCase().includes(filterValue);
  });

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <input className="search" type="text" value={filterValue} onChange={handleChange} />
      <DataTable columns={columns} data={dataFiltered} pagination />
      <Link to={"/create"}>ADD Employee</Link>
    </div>
  );
}

export default CustomerList;
