
import * as type from './MutationTypes'
import { getWeatherDetail ,getCityList} from '../../api';
import state from './States'

const action = {
  asyncCHangePriceAction(context, payload) {
    setTimeout(() => {
      context.commit(type.ASYNCCHANGEPRICE, payload)
    }, 2000)
  },

  async getWeather(context, payload) {
    let code= ''
     state.list.map(item=>{
       if(item.city_name == payload){
          code = item.city_code
       }
     })
     if(code){
      let response = await getWeatherDetail(code)
      if (response.status == 200) {
        let waetherData = response.data.data.forecast
        context.commit(type.GETWEATHERDATA, waetherData)
      } else {
        console.log('response Error')
      }
     }
   
  },

  modifyNum(context, payload) {
    console.log(payload)
    // state.number = payload;
    setTimeout(() => {
      context.commit(type.CHANGENUMBER, payload)
    }, 2000)

  },
  // 获取省列表；
 async getcityData(context) {
    let res = await getCityList()
    if(res.status == 200){
      console.log(res.data)
       context.commit(type.GETCITYDATALIST,res.data);
       context.commit(type.CITYDATAINITARRAY,res.data)
    }
  },
  // 获取相应城市列表
  cityListAction(context,payload){
    let list = [];
    let parentId = ''
    if(payload){
      state.list.map(item=>{
        if(item.city_name == payload){
          parentId = item._id
        }
        if(parentId == item.pid){
          list.push(item)
        }
      })
    }
     context.commit(type.CITYLISTDATA,parentId)
  }
}



export default action
