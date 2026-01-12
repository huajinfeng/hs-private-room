## v-for循环

```js
v-for="(news, index) in newsData"
:key="index"
循环图片：
<img :src="news.src" alt="article" class="img-fluid" />
循环文字：
{{ news.darktext }}
data中：
newsData: [
{
          id: 1,
          src: "https://bimhui2-0.oss-cn-shanghai.aliyuncs.com/BimWork/%E4%B8%BB%E7%AB%99%E5%9B%BE%E7%89%87/%E6%96%B0%E9%97%BB%E4%B8%AD%E5%BF%83/%E5%9F%8E%E5%B8%82%E9%AB%98%E6%9E%B6%E7%AB%8B%E4%BA%A4%E9%A1%B9%E7%9B%AE-1.png",
          darktext: "BIM设计",
          title: "城市高架立交项目",
          text: "根据设计图纸使用Revit和Dynamo协同制作立交模型，使用Lumion渲染漫游，制作最终成果。",
        },
{id: 2,
},
]

循环router-link：
<router-link :to="{ path: timeline.path }">
                    <a
                      class="btn-default btn-large round"
                      data-aos="fade-up"
                      data-aos-delay="170"
                    >
                      <span>{{ timeline.buttontext }}</span>
                    </a>
                  </router-link>
data中：
timelineData: [
{
path: "/Editor",
buttontext: "了解更多",
}
]


2.v-for循环中使用 style background-image的写法


<div
          v-for="(slider, index) in sliderData"
          :key="index"
          class="single-slide"
        >
          <div
            class="height-950 bg-overlay bg_image"
            :style="{
              'background-image': 'url(' + slider.image + ')',/*+ slider.image +要用''括起来*/
            }"
          >


sliderData: [
        {
          image:
            "https://bimhuicorebasic.oss-cn-shanghai.aliyuncs.com/banner%E5%AD%98%E5%82%A8/%E5%9B%BE%E6%A8%A1%E5%B8%82%E5%9C%BAbanner1.jpg",
          title: `模型积分兑换 <br/> 高效便捷.`,
          description: `使用工作台高效处理模型，尽情展现.`,
        },
        {
          image:
            "https://bimhuicorebasic.oss-cn-shanghai.aliyuncs.com/banner%E5%AD%98%E5%82%A8/%E5%9B%BE%E6%A8%A1%E5%B8%82%E5%9C%BAbanner2.jpg",
          title: `急速变化 <br/> 高品质效果.`,
          description: `模型处理？特效差？编辑器高效解决.`,
        },
      ],
    
    
    
点击事件的v-for循环：
<template>
  <div>
    <h3>同一个for循环列表,绑定不同的点击事件</h3>
    <div class="list" v-for="(item,index) in items" :key="index">
      <p>{{item.title}}：{{item.styl}}</p>
      <button type="button" @click="update(item.num)">更新</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      items:[
        {
          id:'001',
          title:'更新1',
          styl:'更新一内容',
          num:'updateone'
        },{
          id:'002',
          title:'更新2',
          styl:'更新二内容',
          num:'updatetwo'
        }
      ]
    }
  },
  methods:{
    //更新的点击事件,传的参item.num = methodsNums
    update(methodsNums){
      //触发这个参数的方法
      this[methodsNums]()
    },
    updateone(){
      console.log('更新1');
    },
    updatetwo(){
      console.log('更新2');
    }
  },
}
</script>


通过 :style = "函数()" 或者 :class="函数" 可以通过函数加传参来控制不同列的样式:
<swiper-item  v-for="(items,indexs) in levelList" :key="indexs">
				<div class="topBg">
					<view class="progress b-card" :class="{'b-level-1': items.level === 1,
					'b-level-2': items.level === 2,'b-level-3': items.level === 3,'b-level-4': items.level === 4}">



levelList:[
                {
					viplevel:'普通用户',
					level:1,
					ratio: 10,
				},
                {
					viplevel:'尊贵会员',
					level:2,
					ratio: 100,
				}
          ],
<style>    
.b-level-1{
}
.b-level-2{
}
</style>
```