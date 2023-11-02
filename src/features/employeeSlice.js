import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'employee',
  initialState: {
    employee: [
      {
        id: 1,
        firstName: 'Jean',
        lastName: 'Kouakou',
        startDate: '2011-10-10',
        department: 'Comptability',
        dateBirth: '1982-01-10',
        street: '22 Edgard Louis',
        city: 'Paris',
        state: 'France',
        zipCode: '17000',
      },
      {
        id: 2,
        firstName: 'Bernard',
        lastName: 'Leon',
        startDate: '2009-05-10',
        department: 'Research',
        dateBirth: '1977-03-21',
        street: '12 Henri de la paix',
        city: 'Toulouse',
        state: 'France',
        zipCode: '54000',
      },
      {
        id: 3,
        firstName: 'Hubert',
        lastName: 'Maton',
        startDate: '2012-02-15',
        department: 'Investigation',
        dateBirth: '1989-05-12',
        street: '19 Rue de Wazemmes',
        city: 'Lille',
        state: 'France',
        zipCode: '59000',
      },
      {
        id: 4,
        firstName: 'Bernardette',
        lastName: 'Leontine',
        startDate: '2005-05-10',
        department: ' financial',
        dateBirth: '1877-09-31',
        street: 'rue Saint-charles',
        city: 'Reinne',
        state: 'France',
        zipCode: '12000',
      },
    ],
  },
  reducers: {
    save: (state, action) => {
      const { payload } = action;
      payload.id = state.employee.length-1
      state.employee = [...state.employee, payload];
      console.log(state.employee)
      
    },
  },
});

// Action creators are generated for each case reducer function

const { actions, reducer } = userSlice;
export const { save } = actions;
export default reducer;
