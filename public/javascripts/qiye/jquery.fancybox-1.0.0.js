(function(D){var C={},B=new Image,A=["png","jpg","jpeg","gif"],F,E=1;D.fn.fancybox=function(G){C.settings=D.extend({},D.fn.fancybox.defaults,G);D.fn.fancybox.init();return this.each(function(){var H=D(this);var I=D.metadata?D.extend({},C.settings,H.metadata()):C.settings;H.unbind("click").click(function(){D.fn.fancybox.start(this,I);return false})})};D.fn.fancybox.start=function(J,L){if(C.animating){return false}if(L.overlayShow){D("#fancy_wrap").prepend('<div id="fancy_overlay"></div>');D("#fancy_overlay").css({width:D(window).width(),height:D(document).height(),opacity:L.overlayOpacity});if(D.browser.msie){D("#fancy_wrap").prepend('<iframe id="fancy_bigIframe" scrolling="no" frameborder="0"></iframe>');D("#fancy_bigIframe").css({width:D(window).width(),height:D(document).height(),opacity:0})}D("#fancy_overlay").click(D.fn.fancybox.close)}C.itemArray=[];C.itemNum=0;if(jQuery.isFunction(L.itemLoadCallback)){L.itemLoadCallback.apply(this,[C]);var M=D(J).children("img:first").length?D(J).children("img:first"):D(J);var I={width:M.width(),height:M.height(),pos:D.fn.fancybox.getPosition(M)};for(var H=0;H<C.itemArray.length;H++){C.itemArray[H].o=D.extend({},L,C.itemArray[H].o);if(L.zoomSpeedIn>0||L.zoomSpeedOut>0){C.itemArray[H].orig=I}}}else{if(!J.rel||J.rel==""){var K={url:J.href,title:J.title,o:L};if(L.zoomSpeedIn>0||L.zoomSpeedOut>0){var M=D(J).children("img:first").length?D(J).children("img:first"):D(J);K.orig={width:M.width(),height:M.height(),pos:D.fn.fancybox.getPosition(M)}}C.itemArray.push(K)}else{var G=D("a[@rel="+J.rel+"]").get();for(var H=0;H<G.length;H++){var I=D.metadata?D.extend({},L,D(G[H]).metadata()):L;var K={url:G[H].href,title:G[H].title,o:I};if(L.zoomSpeedIn>0||L.zoomSpeedOut>0){var M=D(G[H]).children("img:first").length?D(G[H]).children("img:first"):D(J);K.orig={width:M.width(),height:M.height(),pos:D.fn.fancybox.getPosition(M)}}if(G[H].href==J.href){C.itemNum=H}C.itemArray.push(K)}}}D.fn.fancybox.changeItem(C.itemNum)};D.fn.fancybox.changeItem=function(I){D.fn.fancybox.showLoading();C.itemNum=I;D("#fancy_nav").empty();D("#fancy_outer").stop();D("#fancy_title").hide();D(document).unbind("keydown");imgRegExp=A.join("|");imgRegExp=new RegExp("."+imgRegExp+"$","i");var G=C.itemArray[I].url;if(G.match(/#/)){var H=window.location.href.split("#")[0];H=G.replace(H,"");D.fn.fancybox.showItem('<div id="fancy_div">'+D(H).html()+"</div>");D("#fancy_loading").hide()}else{if(G.match(imgRegExp)){D(B).unbind("load").bind("load",function(){D("#fancy_loading").hide();C.itemArray[I].o.frameWidth=B.width;C.itemArray[I].o.frameHeight=B.height;D.fn.fancybox.showItem('<img id="fancy_img" src="'+B.src+'" />')}).attr("src",C.settings.refreshcache?G+"?rand="+Math.floor(Math.random()*999999999):G)}else{D.fn.fancybox.showItem('<iframe id="fancy_frame" onload="$.fn.fancybox.showIframe()" name="fancy_iframe'+Math.round(Math.random()*1000)+'" frameborder="0" hspace="0" src="'+G+'"></iframe>')}}};D.fn.fancybox.showIframe=function(){D("#fancy_loading").hide();D("#fancy_frame").show()};D.fn.fancybox.showItem=function(K){D.fn.fancybox.preloadNeighborImages();var H=D.fn.fancybox.getViewport();var J=D.fn.fancybox.getMaxSize(H[0]-50,H[1]-100,C.itemArray[C.itemNum].o.frameWidth,C.itemArray[C.itemNum].o.frameHeight);var G=H[2]+Math.round((H[0]-J[0])/2)-20;var I=H[3]+Math.round((H[1]-J[1])/2)-40;var L={left:G,top:I,width:J[0]+"px",height:J[1]+"px"};if(C.active){D("#fancy_content").fadeOut("normal",function(){D("#fancy_content").empty();D("#fancy_outer").animate(L,"normal",function(){D("#fancy_content").append(D(K)).fadeIn("normal");D.fn.fancybox.updateDetails()})})}else{C.active=true;D("#fancy_content").empty();if(D("#fancy_content").is(":animated")){console.info("animated!")}if(C.itemArray[C.itemNum].o.zoomSpeedIn>0){C.animating=true;L.opacity="show";D("#fancy_outer").css({top:C.itemArray[C.itemNum].orig.pos.top-18,left:C.itemArray[C.itemNum].orig.pos.left-18,height:C.itemArray[C.itemNum].orig.height,width:C.itemArray[C.itemNum].orig.width});D("#fancy_content").append(D(K)).show();D("#fancy_outer").animate(L,C.itemArray[C.itemNum].o.zoomSpeedIn,function(){C.animating=false;D.fn.fancybox.updateDetails()})}else{D("#fancy_content").append(D(K)).show();D("#fancy_outer").css(L).show();D.fn.fancybox.updateDetails()}}};D.fn.fancybox.updateDetails=function(){D("#fancy_bg,#fancy_close").show();if(C.itemArray[C.itemNum].title!==undefined&&C.itemArray[C.itemNum].title!==""){D("#fancy_title div").html(C.itemArray[C.itemNum].title);D("#fancy_title").show()}if(C.itemArray[C.itemNum].o.hideOnContentClick){D("#fancy_content").click(D.fn.fancybox.close)}else{D("#fancy_content").unbind("click")}if(C.itemNum!=0){D("#fancy_nav").append('<a id="fancy_left" href="javascript:;"></a>');D("#fancy_left").click(function(){D.fn.fancybox.changeItem(C.itemNum-1);return false})}if(C.itemNum!=(C.itemArray.length-1)){D("#fancy_nav").append('<a id="fancy_right" href="javascript:;"></a>');D("#fancy_right").click(function(){D.fn.fancybox.changeItem(C.itemNum+1);return false})}D(document).keydown(function(G){if(G.keyCode==27){D.fn.fancybox.close()}else{if(G.keyCode==37&&C.itemNum!=0){D.fn.fancybox.changeItem(C.itemNum-1)}else{if(G.keyCode==39&&C.itemNum!=(C.itemArray.length-1)){D.fn.fancybox.changeItem(C.itemNum+1)}}}})};D.fn.fancybox.preloadNeighborImages=function(){if((C.itemArray.length-1)>C.itemNum){preloadNextImage=new Image();preloadNextImage.src=C.itemArray[C.itemNum+1].url}if(C.itemNum>0){preloadPrevImage=new Image();preloadPrevImage.src=C.itemArray[C.itemNum-1].url}};D.fn.fancybox.close=function(){if(C.animating){return false}D(B).unbind("load");D(document).unbind("keydown");D("#fancy_loading,#fancy_title,#fancy_close,#fancy_bg").hide();D("#fancy_nav").empty();C.active=false;if(C.itemArray[C.itemNum].o.zoomSpeedOut>0){var G={top:C.itemArray[C.itemNum].orig.pos.top-18,left:C.itemArray[C.itemNum].orig.pos.left-18,height:C.itemArray[C.itemNum].orig.height,width:C.itemArray[C.itemNum].orig.width,opacity:"hide"};C.animating=true;D("#fancy_outer").animate(G,C.itemArray[C.itemNum].o.zoomSpeedOut,function(){D("#fancy_content").hide().empty();D("#fancy_overlay,#fancy_bigIframe").remove();C.animating=false})}else{D("#fancy_outer").hide();D("#fancy_content").hide().empty();D("#fancy_overlay,#fancy_bigIframe").fadeOut("fast").remove()}};D.fn.fancybox.showLoading=function(){clearInterval(F);var G=D.fn.fancybox.getViewport();D("#fancy_loading").css({left:((G[0]-40)/2+G[2]),top:((G[1]-40)/2+G[3])}).show();D("#fancy_loading").bind("click",D.fn.fancybox.close);F=setInterval(D.fn.fancybox.animateLoading,66)};D.fn.fancybox.animateLoading=function(G,H){if(!D("#fancy_loading").is(":visible")){clearInterval(F);return }D("#fancy_loading > div").css("top",(E*-40)+"px");E=(E+1)%12};D.fn.fancybox.init=function(){if(!D("#fancy_wrap").length){D('<div id="fancy_wrap"><div id="fancy_loading"><div></div></div><div id="fancy_outer"><div id="fancy_inner"><div id="fancy_nav"></div><div id="fancy_close"></div><div id="fancy_content"></div><div id="fancy_title"></div></div></div></div>').appendTo("body");D('<div id="fancy_bg"><div class="fancy_bg fancy_bg_n"></div><div class="fancy_bg fancy_bg_ne"></div><div class="fancy_bg fancy_bg_e"></div><div class="fancy_bg fancy_bg_se"></div><div class="fancy_bg fancy_bg_s"></div><div class="fancy_bg fancy_bg_sw"></div><div class="fancy_bg fancy_bg_w"></div><div class="fancy_bg fancy_bg_nw"></div></div>').prependTo("#fancy_inner");D('<table cellspacing="0" cellpadding="0" border="0"><tr><td id="fancy_title_left"></td><td id="fancy_title_main"><div></div></td><td id="fancy_title_right"></td></tr></table>').appendTo("#fancy_title")}if(D.browser.msie){D("#fancy_inner").prepend('<iframe id="fancy_freeIframe" scrolling="no" frameborder="0"></iframe>')}if(jQuery.fn.pngFix){D(document).pngFix()}D("#fancy_close").click(D.fn.fancybox.close)};D.fn.fancybox.getPosition=function(G){var H=G.offset();H.top+=D.fn.fancybox.num(G,"paddingTop");H.top+=D.fn.fancybox.num(G,"borderTopWidth");H.left+=D.fn.fancybox.num(G,"paddingLeft");H.left+=D.fn.fancybox.num(G,"borderLeftWidth");return H};D.fn.fancybox.num=function(G,H){return parseInt(D.curCSS(G.jquery?G[0]:G,H,true))||0};D.fn.fancybox.getPageScroll=function(){var H,G;if(self.pageYOffset){G=self.pageYOffset;H=self.pageXOffset}else{if(document.documentElement&&document.documentElement.scrollTop){G=document.documentElement.scrollTop;H=document.documentElement.scrollLeft}else{if(document.body){G=document.body.scrollTop;H=document.body.scrollLeft}}}return[H,G]};D.fn.fancybox.getViewport=function(){var G=D.fn.fancybox.getPageScroll();return[D(window).width(),D(window).height(),G[0],G[1]]};D.fn.fancybox.getMaxSize=function(K,J,H,G){var I=Math.min(Math.min(K,H)/H,Math.min(J,G)/G);return[Math.round(I*H),Math.round(I*G)]};D.fn.fancybox.defaults={hideOnContentClick:false,zoomSpeedIn:500,zoomSpeedOut:500,frameWidth:600,frameHeight:400,overlayShow:false,overlayOpacity:0.4,itemLoadCallback:null,refreshcache:false};D.fn.fancybox.settings=function(G,H){C.settings[G]=H}})(jQuery);