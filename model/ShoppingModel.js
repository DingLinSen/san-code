import Http from '../utils/http'

class ShoppingModel {
  static getProductInfo(data) {
    return Http.request({
      url: '/api/getProduct',
      method: "GET",
      data
    })
  }
}

export default ShoppingModel