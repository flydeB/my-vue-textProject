<template>
    <div id="product-list-two">
        <h2>weather list</h2>
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li>
        </ul>
        <button @click='doubleBtn'>加倍价格</button>
        <button @click='decBtn'>减倍价格</button>
        <button @click='changPrice'>异步改变价格</button>
        <button @click='numberChange'>复原价格</button>
        <span>
            $HK:{{numberCount}}
        </span>
        <!-- {{reveserMessages}}
        {{reversedMessageFn}} -->
        <div class='city'>
            <select @change='provinceChange' v-model="provinceSelected" >
                <option>请选择省份</option>
                <option v-for='(item,index) in provinceList' :key=index>{{item.city_name}}</option>
            </select>

            <select @change='cityChange' v-model='citySelected'>
                <option>请选择城市</option>
                <option v-for='(item,index) in cityList' :key=index>{{item.city_name}}</option>
            </select>
        </div>
        <ul class='weatehr'>
            <li v-for='(item,index) in dataList' :key=index>
                <span>日期：{{item.ymd}}</span>
                <span>最高温度：{{item.high}}</span>
                <span>最低温度：{{item.low}}</span>
                <span>注意:{{item.notice}}</span>
                <span>星期:{{item.week}}</span>
                <span>{{item.type}}</span>
                <span>日升时间：{{item.sunrise}}</span>
                <span>日落时间：{{item.sunset}}</span>
                <Button @click='detailClick(index)' class='detailBtn'>详情</Button>
            </li>
        </ul>
        <input  type='file'   accept="image/*" /> 
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapMutations, mapState } from "vuex";
    import {testApi} from '../api'

    export default {
        data() {
            return {
                products: this.$store.state.testVuex.products,
                reveserMessages: '今天不降价',
                weatherData: [],
                provinceSelected: '',
                citySelected:''
            }
        },
        created() {
            this.getWeather();
            this.getcityData()
          
        },
        mounted() {

            let data = this.$store.state.testVuex
            this.test()
            // console.log(223, data);

        },
        methods: {
            ...mapActions(["asyncCHangePriceAction", "getWeather", 'modifyNum', 'getcityData','cityListAction']),
            ...mapMutations(['doublePrice', 'DOCPRICE', 'GETWEATHERDATA']),
            provinceChange() {
               this.cityListAction(this.provinceSelected)
            },
            cityChange(){
                this.getWeather(this.citySelected)
            },
            doubleBtn() {

                this.doublePrice(3)
            },
            decBtn() {

                this.DOCPRICE(10)
            },
            changPrice() {
                this.asyncCHangePriceAction(10)
            },
            numberChange() {
                //  this.$store.dispatch('modifyNum','10')

                this.modifyNum(20)
            },
            detailClick(index) {
                console.log(index)
            },
            async test(){
               let res = await testApi();
               console.log(23,res.data.data)
            }
        },
        computed: {

            dataList: {
                get: function () {
                    return this.$store.state.testVuex.weatherData
                },
                set: function (newValue) {
                    console.log(21432242343, newValue)
                }
            },
            numberCount: {
                get: function () {
                    return this.$store.state.testVuex.number
                },
                set: function (newValue) {
                    console.log(newValue)
                }
            },
            ...mapState({
                provinceList: state => state.testVuex.provinceList,
                cityList: state => state.testVuex.cityList
            })


        }
    }
</script>

<style scoped>
    #product-list-two {
        background: #D1E4FF;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
        margin-bottom: 30px;
        padding: 10px 20px;
    }

    #product-list-two ul {
        padding: 0;
        list-style-type: none;
    }

    #product-list-two li {
        margin-right: 10px;
        margin-top: 10px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.7);
        text-align: left;
    }

    .price {
        font-weight: bold;
        color: #860CE8;
        display: block;
    }

    .weatehr li span {
        margin: 0 20px
    }

    .detailBtn {
        position: absolute;
        right: 100px;
    }

    .city {
        margin-top: 20px
    }

    .city select {
        margin-right: 20px
    }
</style>