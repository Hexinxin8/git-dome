window.onload=function(){
  var dropdown=document.getElementById("dropdown");
  var dropdownLi=dropdown.getElementsByTagName("li");
  var goods=document.getElementById("goods");
  var goodsLi=goods.getElementsByTagName("li");
  // 获取轮播图左右箭头
  for(var i=0;i<dropdownLi.length;i++)
  {
    if(i==3)continue
    dropdownLi[i].onmouseover=function(){
      this.classList.add("show");
     }
     dropdownLi[i].onmouseout=function(){
      this.classList.remove("show")
     }
  }
  // 右边栏展示

  for(var i=0;i<goodsLi.length;i++)
  {
    goodsLi[i].onmouseover=function(){
      this.classList.add("show");
    
     
   }
   goodsLi[i].onmouseout=function(){
    this.classList.remove("show");
   
  }
      
  }

  // 轮播图
  var left=document.querySelector("#left")
  var right=document.querySelector("#right")
  var tu1=document.querySelector(".tu1")
  var image=document.querySelector("#image")
  var dot=document.querySelectorAll(".dot")
  var link=document.querySelector("#link")
 
  var add=1;
  
   var arr=["https://waimai.meituan.com/","https://cc.meituan.com/meishi/","https://maoyan.com/","https://hotel.meituan.com/changchun/","https://paidui.meituan.com/?activity_code=169_00038142","https://www.yyetss.cc/"]
   image.src="./images/ad01.jpg";
   link.href="https://waimai.meituan.com/";
   dot[0].style.background="#fff"
  //  鼠标经过
  tu1.onmouseover=function(){
    left.style.display="block"
    right.style.display="block"
    clearInterval(lun)
  }
  // 鼠标离开
  tu1.onmouseout=function(){

    left.style.display="none"
    right.style.display="none"
    slideshow();
  }
  // 右侧点击
  right.onclick=function(){
    tupian(1);
  }
  // 左侧点击
  left.onclick=function(){
   tupian(2)
  }
  // 自动播放
  function slideshow(){


    lun=setInterval(function(){
      tupian(1);
    },2000)
  }
  slideshow();
 
  // 圆点经过  切换图片
  for(var i=0;i<dot.length;i++)
  { 

     dot[i].setAttribute("index",i)
    dot[i].onmouseover=function(){
      var count=this.getAttribute("index")
     count++;
     image.src="./images/ad0"+count+".jpg";
     var x=count-1;
   for(var i=0;i<dot.length;i++)
   {
    if(x==i)
    {
      dot[i].style.background="#fff" ;
      link.href=arr[x];
    }
    else{
      dot[i].style.background="#3e3e3e"
  
    }
      
    }
  }
}
  //封装轮播图点击 自动播放函数
 function tupian(value){



   if(value==1)
   {
    add+=1;
    if(add>6){
      add=1
    }
   image.src="./images/ad0"+add+".jpg";
   var x=add-1;
   for(var i=0;i<dot.length;i++)
   {
    if(x==i)
    {
      dot[i].style.background="#fff" ;
      link.href=arr[x];
    }
    else{
      dot[i].style.background="#3e3e3e"
  
    }
  
    
  }

  }
   if(value==2)
   {
    add-=1;
    if(add<1){
      add=6
    }
   image.src="./images/ad0"+add+".jpg";
   var x=add-1;
   for(var i=0;i<dot.length;i++)
   {
    if(x==i)
    {
      dot[i].style.background="#fff" 
      link.href=arr[x];
    }
    else{
      dot[i].style.background="#3e3e3e"
  
    }

   }
   }
  }
  //猫眼电影轮播

  var movie=document.querySelector(".movie-bottom")
 var movieLeft=document.querySelector(".movie-left")
 var movieRight=document.querySelector(".movie-right")
 //猫眼电影上边
 var movieTop=document.querySelector(".movie-top")
 var movieSpan=movieTop.querySelectorAll("span")
 //获取三角
 var triangle=movieTop.querySelectorAll(".triangle")
 //获取经过正在热映 即将上映 展示该区域的两个盒子

 var mbbox1=document.querySelector(".m-b-box1")
 var mbbox2=document.querySelector(".m-b-box2")

//  经过离开显示猫眼电影左右箭头
 movie.onmouseover=function(){
   movieLeft.style.display= "block";
   movieRight.style.display= "block";
 }
 movie.onmouseout=function(){

  movieLeft.style.display= "none";
  movieRight.style.display= "none";
}
 //获取经过正在热映 即将上映 展示该区域的两个盒子
movieSpan[2].onmouseover=function(){
  
  triangle[1].style.display="block";
  triangle[0].style.display="none"
  mbbox2.style.display="block";
  mbbox1.style.display="none";
}
movieSpan[1].onmouseover=function(){

  triangle[1].style.display="none";
  triangle[0].style.display="block"
  mbbox2.style.display="none";
  mbbox1.style.display="block";
}
  //点击左右按钮移动图片
  var num =0;
  movieRight.onclick=function(){
      if(mbbox1.style.display== "block"){
          
          var lun = setInterval(function(){
              num-=20;
              mbbox1.style.left=num+"px";
              if(num<=-1200){
                  clearInterval(lun);
                  movieRight.disabled="disabled";
                  movieLeft.disabled=false;
                  movieRight.innerHTML="x";
                  movieLeft.innerHTML="&lt;";
              }
          },20)
      }else{
        var lun = setInterval(function(){
          num-=20;
          mbbox2.style.left=num+"px";
          if(num<=-1200){
              clearInterval(lun);
              movieRight.disabled="disabled";
              movieLeft.disabled=false;
              movieRight.innerHTML="x";
              movieLeft.innerHTML="&lt;";
          }
      },20)
      }
  }
  movieLeft.onclick=function(){
      if(mbbox1.style.display== "block"){
        
          var lun = setInterval(function(){
              num+=20;
              mbbox1.style.left=num+"px";
              if(num>=0){
                  clearInterval(lun);
                  movieRight.disabled=false;
                  movieLeft.disabled="disabled";
                  movieRight.innerHTML="&gt;";
                  movieLeft.innerHTML="x";
              }
          },20)
      }else{
        var lun = setInterval(function(){
          num+=20;
          mbbox2.style.left=num+"px";
          if(num>=0){
              clearInterval(lun);
              movieRight.disabled=false;
              movieLeft.disabled="disabled";
              movieRight.innerHTML="&gt;";
              movieLeft.innerHTML="x";
          }
      },20)
      }
  }
//名宿
  var bignameTop=document.querySelector(".bignames-top")
  var bignameSpan=bignameTop.querySelectorAll("span")
       
var bigBoyttom=document.querySelector(".bignames-bottom")
var bablist=bigBoyttom.querySelectorAll(".bablist")

     for(var i=0;i<bignameSpan.length;i++)
     {
      
      bignameSpan[i].index=i;
      bignameSpan[i].onclick=function(){
          for(var i=0;i<bignameSpan.length;i++)
          { 
            bablist[0].style.display="none";
            bablist[1].style.display="none";
            bablist[2].style.display="none";
            bablist[3].style.display="none";
          }
          bablist[this.index].style.display="block";
      }
     }

}