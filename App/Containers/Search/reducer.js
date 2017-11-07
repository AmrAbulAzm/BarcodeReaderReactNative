const initialState = {
  employees: []
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
         case 'SET_EMPLOYEES' :
            return {
                ...state,
                employees : action.employees
            };
        case 'CHOOSE_EMPLOYEE' :
           return {
               ...state,
               employee : action.employee
           };
        default:
            return state;
    }
};

////Actions////

export function setEmployees(employees) {
  return {
      type : 'SET_EMPLOYEES',
      employees
  };
};

export function chooseEmployee(employee) {
  console.log("employee", employee);
  return {
    type: 'CHOOSE_EMPLOYEE',
    employee
  };
};
