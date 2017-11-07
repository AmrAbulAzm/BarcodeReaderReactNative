const initialState = {
  barcode: null
}

export default function scannerReducer(state = initialState, action) {
  console.log("Action", action );
  switch (action.type) {
    case 'SET_BARCODE':
      return {
        ...state,
        barcode: action.barcode
      };
    default:
      return state;
  }
};

/////Actions/////

export function setBarcode(barcode) {
  return {
    type: 'SET_BARCODE',
    barcode
  };
};
