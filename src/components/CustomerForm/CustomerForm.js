import './CustomerForm.css';

import React, { useRef, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import {Modal} from 'modal-react-wealth-health';
import { save } from './../../features/employeeSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function CustomerForm() {
  const statesDB = [
    {
      name: 'Alabama',
      abbreviation: 'AL',
    },
    {
      name: 'Alaska',
      abbreviation: 'AK',
    },
    {
      name: 'American Samoa',
      abbreviation: 'AS',
    },
    {
      name: 'Arizona',
      abbreviation: 'AZ',
    },
    {
      name: 'Arkansas',
      abbreviation: 'AR',
    },
    {
      name: 'California',
      abbreviation: 'CA',
    },
    {
      name: 'Colorado',
      abbreviation: 'CO',
    },
    {
      name: 'Connecticut',
      abbreviation: 'CT',
    },
    {
      name: 'Delaware',
      abbreviation: 'DE',
    },
    {
      name: 'District Of Columbia',
      abbreviation: 'DC',
    },
    {
      name: 'Federated States Of Micronesia',
      abbreviation: 'FM',
    },
    {
      name: 'Florida',
      abbreviation: 'FL',
    },
    {
      name: 'Georgia',
      abbreviation: 'GA',
    },
    {
      name: 'Guam',
      abbreviation: 'GU',
    },
    {
      name: 'Hawaii',
      abbreviation: 'HI',
    },
    {
      name: 'Idaho',
      abbreviation: 'ID',
    },
    {
      name: 'Illinois',
      abbreviation: 'IL',
    },
    {
      name: 'Indiana',
      abbreviation: 'IN',
    },
    {
      name: 'Iowa',
      abbreviation: 'IA',
    },
    {
      name: 'Kansas',
      abbreviation: 'KS',
    },
    {
      name: 'Kentucky',
      abbreviation: 'KY',
    },
    {
      name: 'Louisiana',
      abbreviation: 'LA',
    },
    {
      name: 'Maine',
      abbreviation: 'ME',
    },
    {
      name: 'Marshall Islands',
      abbreviation: 'MH',
    },
    {
      name: 'Maryland',
      abbreviation: 'MD',
    },
    {
      name: 'Massachusetts',
      abbreviation: 'MA',
    },
    {
      name: 'Michigan',
      abbreviation: 'MI',
    },
    {
      name: 'Minnesota',
      abbreviation: 'MN',
    },
    {
      name: 'Mississippi',
      abbreviation: 'MS',
    },
    {
      name: 'Missouri',
      abbreviation: 'MO',
    },
    {
      name: 'Montana',
      abbreviation: 'MT',
    },
    {
      name: 'Nebraska',
      abbreviation: 'NE',
    },
    {
      name: 'Nevada',
      abbreviation: 'NV',
    },
    {
      name: 'New Hampshire',
      abbreviation: 'NH',
    },
    {
      name: 'New Jersey',
      abbreviation: 'NJ',
    },
    {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
    {
      name: 'New York',
      abbreviation: 'NY',
    },
    {
      name: 'North Carolina',
      abbreviation: 'NC',
    },
    {
      name: 'North Dakota',
      abbreviation: 'ND',
    },
    {
      name: 'Northern Mariana Islands',
      abbreviation: 'MP',
    },
    {
      name: 'Ohio',
      abbreviation: 'OH',
    },
    {
      name: 'Oklahoma',
      abbreviation: 'OK',
    },
    {
      name: 'Oregon',
      abbreviation: 'OR',
    },
    {
      name: 'Palau',
      abbreviation: 'PW',
    },
    {
      name: 'Pennsylvania',
      abbreviation: 'PA',
    },
    {
      name: 'Puerto Rico',
      abbreviation: 'PR',
    },
    {
      name: 'Rhode Island',
      abbreviation: 'RI',
    },
    {
      name: 'South Carolina',
      abbreviation: 'SC',
    },
    {
      name: 'South Dakota',
      abbreviation: 'SD',
    },
    {
      name: 'Tennessee',
      abbreviation: 'TN',
    },
    {
      name: 'Texas',
      abbreviation: 'TX',
    },
    {
      name: 'Utah',
      abbreviation: 'UT',
    },
    {
      name: 'Vermont',
      abbreviation: 'VT',
    },
    {
      name: 'Virgin Islands',
      abbreviation: 'VI',
    },
    {
      name: 'Virginia',
      abbreviation: 'VA',
    },
    {
      name: 'Washington',
      abbreviation: 'WA',
    },
    {
      name: 'West Virginia',
      abbreviation: 'WV',
    },
    {
      name: 'Wisconsin',
      abbreviation: 'WI',
    },
    {
      name: 'Wyoming',
      abbreviation: 'WY',
    },
  ];
  const dispatch = useDispatch();
  const [selectedBirth, setSelectedBirth] = useState();
  const [selectedStart, setSelectedStart] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const refbirth = useRef();
  const formref = useRef();
  const refstart = useRef();

  //const navigate = useNavigate();

  const handleClickBirth = (event) => {
    event.preventDefault();
    refbirth.current.style.display = 'block';
  };

  const handleClickStart = (event) => {
    event.preventDefault();
    refstart.current.style.display = 'block';
  };

  const handleUnClick = (event) => {
    console.log(event.target)
    document.body.addEventListener('click', (event)=>{
      if(formref.current){
        if (formref.current.contains(event.target) || refbirth.current.contains(event.target) || refstart.current.contains(event.target)) {
            if(event.target.id === 'startDate' && refbirth.current.style.display === 'block'){
                refbirth.current.style.display = 'none'
            }else if (event.target.id === 'dateBirth' && refstart.current.style.display === 'block'){
                refstart.current.style.display = 'none'
            }else if ((event.target.id !== 'startDate' && event.target.id !== 'dateBirth') && (refstart.current.style.display === 'block' || refbirth.current.style.display === 'block')){
              refbirth.current.style.display = 'none';
              refstart.current.style.display = 'none';
            }
        } else {
          refbirth.current.style.display = 'none';
          refstart.current.style.display = 'none';
        }
      }
    })

  }

  const saveEmployee = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let employee = { firstName: data.get('firstName'), lastName: data.get('lastName'), startDate: data.get('startDate'), department: data.get('department'), dateBirth: data.get('dateBirth'), street: data.get('street'), city: data.get('city'), state: data.get('state'), zipCode: data.get('zipCode') };
    dispatch(save(employee))
    setIsOpen(true);
  };

  return (
    <div className="Customform">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to={'/'}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form ref={formref} onSubmit={saveEmployee}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" minLength="3" required/>

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" minLength="3" required/>

          <label htmlFor="dateBirth">Date of Birth</label>
          <input name='dateBirth' onFocus={handleClickBirth} onBlur={handleUnClick} defaultValue={selectedBirth ? format(selectedBirth, 'dd/MM/yyyy') : ''} type="text" id="dateBirth" required />

          <label htmlFor="startDate">Start Date</label>
          <input name='startDate' onFocus={handleClickStart} onBlur={handleUnClick} defaultValue={selectedStart ? format(selectedStart, 'dd/MM/yyyy') : ''} type="text" id="startDate" required />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input name="street" id="street" type="text" minLength="3" required />

            <label htmlFor="city">City</label>
            <input id="city" name="city" type="text" minLength="3" required />

            <label htmlFor="state">State</label>
            <select name="state" id="state">
              {statesDB.map((state, index) => (
                <option key={index}>{state.name}</option>
              ))}
            </select>

            <label htmlFor="zipCode">Zip Code</label>
            <input id="zipCode" name="zipCode" type="number" minLength="3" required />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select className="department" id="department" name='department'>
            <option>Sales</option>
            <option>Human resources</option>
            <option>Marketing</option>
            <option>Legal</option>
          </select>
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
      <div ref={refbirth} className="DayPickerBirthContainer">
        <DayPicker className="DayPickerBirth" mode="single" selected={selectedBirth} onSelect={setSelectedBirth} />
      </div>
      <div ref={refstart} className="DayPickerStartContainer">
        <DayPicker className="DayPickerBirth" mode="single" selected={selectedStart} onSelect={setSelectedStart} />
      </div>
      <Modal
        display={isOpen}
        title={'employee created'}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
}

export default CustomerForm;
