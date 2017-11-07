
const BASE_URL_INTRANET = 'http://touchclick.dev53.antwerpes.de';

export default api = {
  getEmployees(){
    var url = `${BASE_URL_INTRANET}/limer/mitarbeiter-list`;
    return fetch(url).then((res) => res.json())
  }

  // postBorrow(barcode, employee) {
  //   ////Endpoint Borrow
  // }
  //
  // updateReturn(barcode) {
  //   ////Endpoint Return
  // }

};
