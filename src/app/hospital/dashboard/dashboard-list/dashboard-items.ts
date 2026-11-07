import {DashboardItem} from '../models/dashboardItem.model'

  export const  dashboarditems: DashboardItem[] = [
    {
      id:1,
      itemName:'Patients',
      itemCount:0,
      color:'#eb4040ff',
      columnNumber: 1,
      url:'/patients',
      icon:'bi bi-person-vcard',
      visible:true
    },
    {
      id:2,
      itemName:'Doctors',
      columnNumber: 2,
      itemCount:0,
      color:'#b235ecff',
      url:'/doctors',
      icon:'bi bi-person-vcard',
      visible:true
    },
    {
      id:3,
      itemName:'Free Beds',
      columnNumber: 3,
      itemCount:0,
      color:'rgb(53, 126, 236)',
      url:'/free-beds',
      icon:'bi bi-bed',
      visible:true
    },
    {
      id:1,
      itemName:'Free IC Beds',
      columnNumber: 1,
      itemCount:0,
      color:'rgb(9, 42, 92)',
      url:'/free-beds',
      icon:'bi bi-clipboard2-pulse',
      visible:true
    },
     {
      id:1,
      itemName:'Nurses',
      columnNumber: 2,
      itemCount:0,
      color:'rgb(114, 130, 155)',
      url:'/free-beds',
      icon:'bi bi-bed',
      visible:true
    }
]