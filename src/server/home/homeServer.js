
import Http from '../../config/http'
const Api= {

  //guess：定位城市， hot：热门城市， group：所有城市
  getCities (type) {
    return Http.get('/v1/cities',{type:type})
  }

}
export default Api;
