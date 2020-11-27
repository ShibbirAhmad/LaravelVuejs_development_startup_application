
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import AdminLogin        from "./components/admin/Login" ;

import AdminDashboard    from "./components/admin/Dashboard" ;

import Category          from "./components/admin/category/Index" ;
import AddCategory       from "./components/admin/category/Add" ;
import EditCategory      from "./components/admin/category/Edit" ;

import AdminList         from "./components/admin/admin/Index" ;
import addAdmin          from "./components/admin/admin/Add" ;
import editAdmin         from "./components/admin/admin/Edit" ;
import editAdminPassword from "./components/admin/admin/Password" ;
import adminProfile      from "./components/admin/admin/Profile" ;


const Foo = { template: '<div>public </div>' }


const routes = [

  
  { path: '/', 
    component: Foo,
    name: 'home'
   },




    { 
    path: '/backend/category/admin/login', 
    component: AdminLogin,
    name : 'admin_login',
    meta: {  title:'Admin Login' } 
    },

    { 
    path: '/backend/admin/add', 
    component: addAdmin,
    name : 'add_admin',
    meta: {  title:'Admin Register',
             authAdmin: true  } 
    },
    
    { 
    path: '/backend/admin/edit/:id', 
    component: editAdmin,
    name : 'edit_admin',
    meta: {  title:'Admin Edit',
             authAdmin: true  } 
    },

     { 
    path: '/backend/admin/password/edit/', 
    component: editAdminPassword,
    name : 'edit_admin_password',
    meta: {  title:'Admin Password Edit',
             authAdmin: true  } 
    },

    
     { 
    path: '/backend/admin/profile', 
    component: adminProfile,
    name : 'admin_profile',
    meta: {  title:'Admin Profile Info',
             authAdmin: true  } 
    },

    { 
    path: '/backend/admin/list', 
    component: AdminList,
    name : 'admin_list',
    meta: {  title:'Admin List',
             authAdmin: true  } 
    },

  { 
    path: '/backend/admin/dashboard', 
    component: AdminDashboard,
    name : 'admin_dashboard',
    meta: {  title:'Admin Dashboard',
             authAdmin: true  } 
   },

    { 
    path: '/backend/category/list', 
    component: Category,
    name : 'category',
    meta: {  title:'category list' ,
             authAdmin: true 
          } 
    },
    
    { 
    path: '/backend/category/add', 
    component: AddCategory,
    name : 'add_category',
    meta: {  title:'category add',
             authAdmin: true ,
          } 
    },
    { 
    path: '/backend/category/edit/:id', 
    component: EditCategory,
    name : 'edit_category',
    meta: {  title:'category edit',
             authAdmin: true 
           } 
    }


]


const router = new VueRouter({
  routes,
  mode:'history'
})


router.beforeEach ( (to,from,next) => {

     if (to.matched.some( record => record.meta.authAdmin ) ) {
       if (localStorage.getItem('admin_token')) {
          next()
          return 
       } 
       next('/backend/category/admin/login') ;
     }else{
       next() 
     }
} )

export default router;