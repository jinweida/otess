

(function($) {

$.fn.Scroll = function(opt) 
{        
    if(!opt) var opt={};
    var _this=this.eq(0).find("table:first");
    var     lineH=_this.find("tr:first").height(), //获取行高
            line=opt.line?parseInt(opt.line,10):parseInt(this.height()/lineH,10), //每次滚动的行数，默认为一屏，即父容器高度
            speed=opt.speed?parseInt(opt.speed,10):500, //卷动速度，数值越大，速度越慢（毫秒）
            timer=opt.timer?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
    if(line==0) line=1;
    var upHeight=0-line*lineH;
    
     _this.hover(
          function(){
              clearInterval(timerID);
          },
          function(){
              timerID=setInterval(function(){
              _this.animate({
                      marginTop:upHeight
              },speed,function(){
                      for(i=1;i<=line;i++){
                              _this.find("tr:first").appendTo(_this);
                      }
                      _this.css({marginTop:0});
              });
          },
          timer
      );
      
  	}).mouseout();
};

})(jQuery);