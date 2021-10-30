window.onload=function(){
  var str=location.href;

   var params= getUrl(str);
  
 
   function getUrl(url){
    var theRequest=new Object();
    var index=url.indexOf("?")
    if(index!=-1)
    {
       var str=url.substr(index+1)
       value=str.split("&")
      
       for(var i=0;i<value.length;i++)
       {

          theRequest[value[i].split("=")[0]]=(value[i].split("=")[1])
           
       }
    }

    return theRequest
   }
   var username=document.getElementById("username")
   var MyPassword=document.getElementById("MyPassword")
   var LoginSpan=document.querySelectorAll(".display-none")
   
  //  确定手机号
   username.onblur=function(){


    if(this.value!=params.phone)

    { 
      console.log(username);
      LoginSpan[0].classList="red display-block"
      LoginSpan[0].innerHTML="<b class='iconfont icon-xxx'>&#xe62d; </b>"+"请输入注册过的手机号码"

    }
    else{
      LoginSpan[0].classList="green display-block"
      LoginSpan[0].innerHTML="<b class='iconfont icon-xxx'>&#xe630; </b>"+"手机号正确"
    }
    // 确定密码
   

   }
   MyPassword.onblur=function(){
    if(this.value!=params.pass)
    { 
      
      LoginSpan[1].classList="red display-block"
      LoginSpan[1].innerHTML="<b class='iconfont icon-xxx'>&#xe62d; </b>"+"请输入正确的密码"

    }
    else{
      LoginSpan[1].classList="green display-block"
      LoginSpan[1].innerHTML="<b class='iconfont icon-xxx'>&#xe630; </b>"+"密码正确"
    }

   }
   var mrbottom=document.querySelector(".mr-bottom")
   mrbottom.onclick=function(){
//     if(username.value==""||MyPassword.value==""||username.value!=params.phone||MyPassword.value!=params.pass)
//     {
//  alert("请先填写注册信息或者您的注册密码账号不对")
//     }
//     else{
      window.location.href="./index.html?phone="+username.value;
    // }
   }

 }

  

