const initialState = {
  returnMode: false,
  borrowMode: false
};

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
         case 'CHOOSE_RETURN_MODE' :
            return {
                ...state,
                returnMode : true,
                borrowMode: false
            };
        case 'CHOOSE_BORROW_MODE' :
            return {
                ...state,
                borrowMode : true,
                returnMode : false
            };
        default:
            return state;
    }
};

////////Actions///////

export function chooseReturn() {
  return {
    type : 'CHOOSE_RETURN_MODE'
  };
};

export function chooseBorrow() {
  return {
    type : 'CHOOSE_BORROW_MODE'
  };
};
