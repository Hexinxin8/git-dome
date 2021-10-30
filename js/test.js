
  var dropdown=document.getElementById("dropdown");
  var dropdownLi=dropdown.getElementsByTagName("li");
  

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
  // 城市选区
  var btn=document.querySelector("#met1")
 
  var addrShow=document.querySelector("#addr-show")
  var prov=document.querySelector("#prov")
  var city=document.querySelector("#city")
  var country=document.querySelector("#country")



  
  var current={
    prov:'',
    city:"",
    country:"",
  }
  // 省调用
  function showProv(){
      btn.disabled=true;
      var len=provice.length;
      for(var i=0;i<len;i++){
        var provOpt=document.createElement("option");
        provOpt.value=provOpt.innerText=provice[i]["name"];
       
        prov.appendChild(provOpt)
      }
  };
 showProv()
 

  // 城市调用
 function showCity(obj){
   
   
  var val = obj.options[obj.selectedIndex].value;
    
     if(val != current.prov){
     
      
      current.prov = val;
     
      btn.disabled=true;
      city.length = 1;
      
  }

    
    if(val !=' '){
      //查找省的索引
      var len = provice.length;
      var provIndex = 0;
      for(var i=0;i<len;i++){
          if(val == provice[i]['name']){
              provIndex = i;
          }
      }
  }
  
  var cityLen=provice[provIndex]["city"].length;
  for(var j=0;j<cityLen;j++){
    var cityOpt=document.createElement("option");
    cityOpt.value=cityOpt.innerText=provice[ provIndex]["city"][j].name;
    city.appendChild(cityOpt)
  }
}

// 县级调用
function showCountry(obj){
  
  var val=obj.options[obj.selectedIndex].value
  
  if(val !=current.city){
    current.city=val;
    btn.disabled=true;
    country.length=1;
  }

    //查找省的索引
    var provLen = provice.length;
    var provIndex = 0;
    for(var i=0;i<provLen;i++){
        if(current.prov == provice[i]['name']){
            provIndex = i;
         
        }
     }
     
 var cityLens=provice[provIndex]["city"].length
 var cityIndex=0;
 for(var i=0;i<cityLens;i++){
   if(current.city==provice[provIndex]["city"][i].name){
       cityIndex=i;
      

   }
 }
 if(val!=""){
    var countryLen = provice[provIndex]["city"][cityIndex].districtAndCounty.length;
   if(countryLen==0){
     addrShow.value=current.prov+"-"+current.city;
     return;
   }
   for(var n=0;n<countryLen;n++){
     var countryOpt=document.createElement("option");
     countryOpt.value= countryOpt.innerText=provice[provIndex]["city"][cityIndex].districtAndCounty[n]
     country.appendChild(countryOpt)
    }
  }
}

function selecCountry(obj){
    current.country=obj.options[obj.selectedIndex].value;
    if(current.city !=""||current.country!=""){
      btn.disabled=false;
    }
}
function showAddr(){
  addrShow.value = current.prov + '-' + current.city + '-' + current.country;
}









