window.onload=function(){
  var phone=document.getElementsByName("phone")
  var registerSpan=document.querySelectorAll(".display-none")
   var button=document.querySelector("button")
  //获取焦点函数
  
  phone[0].onblur=function(){
     var val=phone[0].value;
     if(val=="")
     {
      registerSpan[0].classList="display-block red"
      registerSpan[0].innerHTML="<i class='iconfont icon-xxx'>&#xe62d;</i>"+"手机号码不能为空"
     }
     if(val!=""){
       if(!(/^1[3456789]\d{9}$/.test(val))){
        registerSpan[0].classList="display-block red  "
        registerSpan[0].innerHTML="<i class='iconfont icon-xxx'>&#xe62d;</i>"+"请输入正确的手机号码大哥"
       }else{
        registerSpan[0].classList="display-block green"
        registerSpan[0].innerHTML="<i class='iconfont icon-xxx'>&#xe630;</i>"+"手机号码正确"
       }
      
     }
  }

  button.onclick=function(){

    function randomf(){
      var randomfour=Math.floor(Math.random()*(9999-1000+1)+1000)
       
      return randomfour;
    }
     var randomf=randomf();
    registerSpan[1].classList="display-block bb"
    registerSpan[1].innerHTML=randomf
  }
  //短信动态码验证
  var code=document.getElementById("code")
  code.onblur=function(){
    var spanVal=registerSpan[1].innerHTML;
    var codeVal=code.value;
    if(codeVal==""){
      registerSpan[2].classList="display-block red"
      registerSpan[2].innerHTML="<i class='iconfont icon-xxx'>&#xe62d;</i>"+"短信码不能为空"
      return false;
    }
    if(codeVal==spanVal){
      registerSpan[2].classList="display-block green"
      registerSpan[2].innerHTML="<i class='iconfont icon-xxx'>&#xe630;</i>"+"验证码 匹配成功"
    }else{
      registerSpan[2].classList="display-block red"
      registerSpan[2].innerHTML="<i class='iconfont icon-xxx'>&#xe62d;</i>"+"验证码 不匹配"
    }
  }

  var aStr=["弱","中","安全","妥了"]
  function checkStrong(val){
    var modes=0;
    if(val.length<6)return 0;
    if(/\d/.test)modes++;
    if(/[a-z]/.test(val))modes++;
    if(/[A-Z]/.test(val))modes++;
    if(/\W/.test(val))modes++;
    if(val.length>20)return 4;
    return modes;
  }
  //创建密码强度
  var password=document.getElementById("password")
  password.onkeyup=function(){
    var pasVal=this.value
     var num=checkStrong(pasVal)
     var tipsB=document.querySelector(".tips").getElementsByTagName('b')
     
     switch(num)
     {
       case 0:
        
         break;
       case 1:
        
         tipsB[0].style.backgroundColor="red";
         tipsB[1].style.backgroundColor="";
         tipsB[2].style.backgroundColor="";
         tipsB[3].style.backgroundColor="";
         tipsB[0].innerHTML=aStr[0];
         tipsB[1].innerHTML="";
         tipsB[2].innerHTML="";
         tipsB[3].innerHTML="";
        
         break;
         case 2:
         tipsB[0].style.backgroundColor="";
         tipsB[2].style.backgroundColor="";
         tipsB[3].style.backgroundColor="";
         tipsB[1].style.backgroundColor="yellow";
         tipsB[0].innerHTML="";
         tipsB[1].innerHTML=aStr[1];
         tipsB[2].innerHTML="";
         tipsB[3].innerHTML="";
         break;
         case 3:
        tipsB[0].style.backgroundColor="";
         tipsB[1].style.backgroundColor="";
         tipsB[2].style.backgroundColor="green";
         tipsB[3].style.backgroundColor="";
         tipsB[0].innerHTML="";
         tipsB[1].innerHTML="";
         tipsB[2].innerHTML=aStr[2];
         tipsB[3].innerHTML="";
          break;
          case 4:
         tipsB[0].style.backgroundColor="";
         tipsB[1].style.backgroundColor="";
         tipsB[2].style.backgroundColor="";
         tipsB[3].style.backgroundColor="green";
         tipsB[0].innerHTML="";
         tipsB[1].innerHTML="";
         tipsB[2].innerHTML="";
         tipsB[3].innerHTML=aStr[3];
            break;
         
     }

  }

  var password2=document.getElementById("password2")
   
  password2.onblur=function(){
  var pasVal2=this.value;
   var pasVal1=password.value;
   
   if(pasVal2!=pasVal1)
   {
    registerSpan[3].classList="display-block red "
    registerSpan[3].innerHTML="<i class='iconfont icon-xxx'>&#xe62d;</i>"+"两次密码 不一致"

   }
   else{
    registerSpan[3].classList="display-block green "
    registerSpan[3].innerHTML="<i class='iconfont icon-xxx'>&#xe630;</i>"+"密码正确"
   }
  }
  var agreement=document.querySelector(".agreement")
  agreement.onclick=function(){
    if(phone[0].value==""||code.value==""||password==""||password2==""||code.value!=registerSpan[1].innerHTML||phone[0].value.length<11||password.value.length<6)
    {
alert("请注意查看注册信息是否正确")
    }
    else{
      window.location.href="./login.html?phone="+phone[0].value+"&pass="+password.value;
    }
  }
}