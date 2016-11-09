// 导航
$(function(){

    var item=$(".item")
    var list=$(".list")
   for(var i=0;i<item.length;i++){
     item[i].index=i
     item[i].onmouseover=function(){
          list[this.index].style.display="block";
     }
         item[i].onmouseout=function(){
            list[this.index].style.display="none"

         }
   }
// 登录
     var denglu=$(".dengl")[0];
     var dlxl=$(".dlxl")[0];
     denglu.onmouseover=function(){
          dlxl.style.display="block";
     }
     denglu.onmouseout=function(){
          dlxl.style.display="none";
     }
// 手机营业厅
   var ewm=$(".erwm")[0];
     var yytxl=$(".yytxl")[0];
     ewm.onmouseover=function(){
          yytxl.style.display="block";
     }
     ewm.onmouseout=function(){
          yytxl.style.display="none";
     }

// 节点轮播
  var box2=getClass("huafei")[0];
    var imgbox=getClass("jdbox")[0];
    var img=getClass("jdlb")[0];
    var btnz=getClass("btnz")[0];
    var btny=getClass("btny")[0];
    var ow2=parseInt(getStyle(img, "width"))
    var t=setInterval(move,2000);
    function move(){
    animate(imgbox,{left:-ow2},1000,function(){
        var first=firstChild(imgbox)
       imgbox.appendChild(first)
       imgbox.style.left=0;
    })
}

box2.onmouseover=function(){
    clearInterval(t);
}

box2.onmouseout=function(){
    t=setInterval(move,2000);
}

btny.onclick=function(){
    move()
}
btnz.onclick=function(){
    var frist=firstChild(imgbox);
    var last=lastChild(imgbox)
    imgbox.insertBefore(last, frist)
    imgbox.style.left=-ow2+"px"
    animate(imgbox,{left:0},1000)
}





// 轮播
var   box=getClass("Zxq")
var   imgs=getClass("tp")
var   lis=getClass("yal")
var   left=getClass("btnL")[0]
var   right=getClass("btnR")[0]
var   ow=parseInt(getStyle(box[0],"width"))
var  flag=true;
var  n=0;
var  next=0;
var  t=setInterval(move,5000)
function move(){
     if(flag==false){
      return;
     }
     flag=false;
      next=n+1;
     if(next>=imgs.length){
        next=0
     }
      
      imgs[next].style.left=ow+"px"
      animate(imgs[n],{left:-ow},600)
      animate(imgs[next],{left:0},600,function(){
        flag=true;
      })
      for(var i=0;i<lis.length;i++){
        lis[i].style.background="#fff"
      }
       lis[next].style.background="red"
       n=next;
}
function move1(){
  if(flag==false){
      return;
     }
     flag=false;
      next=n-1;
      if(next<0){
        next=imgs.length-1;
      }
      imgs[next].style.left=-ow+"px"
      animate(imgs[n],{left:ow},600)
      animate(imgs[next],{left:0},600,function(){
        flag=true;
      })
      for(var i=0;i<lis.length;i++){
        lis[i].style.background="#fff"
      }
       lis[next].style.background="red"
       n=next;
}

box[0].onmouseover=function(){
     clearInterval(t)
}
box[0].onmouseout=function(){
    t=setInterval(move,2000)
}
right.onclick=function(){
    move()
}
left.onclick=function(){
    move1()
}

for(var i=0;i<lis.length;i++){
lis[i].index=i;
lis[i].onclick=function(){
      if(this.index>n){
        if(flag==false){
      return;
     }
     flag=false;
          imgs[this.index].style.left=ow+"px"
          animate(imgs[n],{left:-ow},600)
          animate(imgs[this.index],{left:0},600,function(){
        flag=true;
      })
        
      }else if(this.index<n){
        if(flag==false){
      return;
     }
     flag=false;
          imgs[this.index].style.left=-ow+"px"
          animate(imgs[n],{left:ow},600)
          animate(imgs[this.index],{left:0},600,function(){
        flag=true;
      })
           
      }
      for(var i=0;i<lis.length;i++){
        lis[i].style.background="#fff"
      }
       lis[this.index].style.background="red"
   n=this.index;
   next=this.index;
}
}


 })