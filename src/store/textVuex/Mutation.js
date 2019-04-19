

import * as type from './MutationTypes';


export default {
  doublePrice(state, payload) {
    let doubleNewPrice = state.products.map(item => {
      item.price = item.price * payload
    })
  },
  [type.DOCPRICE](state, payload) {
    let newPrice = state.products.map(item => {
      item.price = item.price / payload
    })
  },
  [type.ASYNCCHANGEPRICE](state, payload) {
    let newPrice = state.products.map(item => {
      item.price += payload
    })
  },
  [type.GETWEATHERDATA](state, payload) {
    state.weatherData = payload
  },
  [type.CHANGENUMBER](state, payload) {
    state.number += Number(payload)
  },
  [type.GETCITYDATALIST](state, payload) {
    state.list = payload
  },
  [type.CITYDATAINITARRAY](state, payload) {
    let _provinceList = [];
    payload.map(item => {
      if (item.pid == 0) {
        _provinceList.push(item)
      }
    });
    state.provinceList = _provinceList;

  },
  [type.CITYLISTDATA](state, payload) {
    let list = []
    state.list.map(item=>{
      if(item.pid == payload){
         list.push(item)
      }
    })
    state.cityList = list
  }

}
