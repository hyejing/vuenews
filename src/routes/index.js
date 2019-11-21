import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from  '../views/NewsView.vue';
import AskView from  '../views/AskView.vue';
import JobsView from  '../views/JobsView.vue';
import UserView from  '../views/UserView.vue';
import ItemView from  '../views/ItemView.vue';
import TestView from  '../views/TestView.vue';

Vue.use(VueRouter);

//라우터 인스턴스
export const router = new VueRouter({
 mode : 'history',
  routes:[
    {
      path: '/',
      redirect: '/news',
    },
    {
       //path는 url정보
        path:'/news',
        //component는 url 주소로 갔을 때 보이는 컴포넌트
        name:'news',
        component: NewsView,
    },
    {
        path:'/ask',
        name:'ask',
        component: AskView,
    },
    {
        path:'/jobs',
        name:'jobs',
        component: JobsView,
    },
    {
        path:'/user/:id',
        component: UserView,
    },
    {
        path:'/item/:id',
        component: ItemView,
    },
    {
        path:'/test',
        component: TestView,
    }
  ]
});

