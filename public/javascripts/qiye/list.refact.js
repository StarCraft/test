String.prototype.replaceAll2=function(C,B){var A=new RegExp(C.replace(/([\(\)\[\]\{\}\^\$\+\-\*\?\.\"\'\|\/\\])/g,"\\$1"),"ig");return this.replace(A,B)};String.prototype.isValidEmail=function(){var A=this.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);if(A==null){return false}return true};String.prototype.len=function(){var A=this;return A.replace(/[^\x00-\xff]/g,"**").length};function trimHtml2(A){A=A.replaceAll("</?[^<>]*/?>","");A=A.replaceAll2("\r\n","");A=A.replaceAll2(" ","");return A}function trimHtml(D,A,C){D=D.replaceAll("</?[^<>]*/?>","");D=D.replaceAll2("\r\n",".");D=D.replaceAll2(" ","");var B=0;while(D.indexOf(".")==0&&B<10){D=D.replace(".","");B++}if(D.len()>C*2){D=D.substr(0,C)+A}return D}function lessBody(C,E,D){var M="";var B=0;var L;var K=false;var I=false;for(var G=0;G<C.length;G++){L=C.charAt(G);if(L=="<"){K=true}else{if(L=="&"){I=true}else{if(L==">"&&K){B=B-1;K=false}else{if(L==";"&&I){I=false}}}}if(!K&&!I){B=B+1;if((L+"").len()>1){B=B+1}}M+=L;if(B>=D){break}}M+=E;var J=M.replaceAll("(>)[^<>]*(<?)","$1$2");if(C.length-J.length<D){return C}J=J.replaceAll("</?(AREA|BASE|BASEFONT|BODY|BR|COL|COLGROUP|DD|DT|FRAME|HEAD|HR|HTML|IMG|INPUT|ISINDEX|LI|LINK|META|OPTION|P|PARAM|TBODY|TD|TFOOT|TH|THEAD|TR|area|base|basefont|body|br|col|colgroup|dd|dt|frame|head|hr|html|img|input|isindex|li|link|meta|option|p|param|tbody|td|tfoot|th|thead|tr)[^<>]*/?>","");J=J.replaceAll("<([a-zA-Z]+)[^<>]*>(.*?)</\\1>","$2");var A=new RegExp("<([a-zA-Z]+)[^<>]*>","gm");var H;if(A.test(J)){H=(J.match(A))}if(H!=null&&H.length>0){for(var F=0;F<H.length;F++){if(H[F].indexOf(" ")>0){M=M+"</"+H[F].substring(1,H[F].indexOf(" "))+">"}else{M=M+"</"+H[F].substring(1,H[F].length-1)+">"}}}return M}function initGongjiao(C){var B;$.each($(C).parents(),function(F,E){if($(E).hasClass("TabbedPanelsContent")){B=$(E)}});var D="1_"+B.attr("id");var A=C.innerHTML;if(A.len()>160){C.innerHTML='<span style="display:none;" id="jiao_tong_zhuang_kuang_'+D+'">'+A+'</span><span id="jiao_tong_zhuang_kuang_tab_'+D+'"></span>';jiaotongzhuangkuang(D,"simple")}}function initSlide(A){var C=false;try{C=slider.init()}catch(B){}if(C||A>10){return }setTimeout("initSlide("+(A+1)+")",100)}function jiaotongzhuangkuang(F,A){if(!A){A="full"}if(A=="simple"){var B="";try{B=$("#jiao_tong_zhuang_kuang_"+F).html()}catch(C){}var E=lessBody(B,"...",30);E=E.replaceAll2("\r\n","");var D=E;D+='<a href="javascript:void(0)" onclick="javascript:jiaotongzhuangkuang(\''+F+"','full');\">�鿴����</a>";$("#jiao_tong_zhuang_kuang_tab_"+F).html(D);$("#jiao_tong_zhuang_kuang_tab_"+F).find("span").each(function(G){$(this).css("display","inline")})}else{var D=$("#jiao_tong_zhuang_kuang_"+F).html();D+='<a href="javascript:void(0)" onclick="javascript:jiaotongzhuangkuang(\''+F+"','simple');\">����</a>";$("#jiao_tong_zhuang_kuang_tab_"+F).html(D);$("#jiao_tong_zhuang_kuang_tab_"+F).find("span").each(function(G){$(this).css("display","block")})}}function str2map(E){var D=new Object();var B=E.split(";;;");for(var C=0;C<B.length;C++){var A=B[C].split(":::");D[A[0]]=A[1]}return D}$("span.show_hide").each(function(A){this.onclick=function(){show_hide2(this)}});$("div.tabbottom").each(function(D){if($(this).attr("template")!="listItemNoPhone"){var A=($(this).attr("name"));var C=str2map(A);var B='<p class="tabnotes">���ľ�����Ϣ(����,�Żݵ�)���ܷ����繫��,������ֱ����ϵ'+C.companyName+":";B+='<span class="number">'+C.phone400Html+"</span></p>";if(if_co!="ganji"){B+='<a class="gotocompany more" href="/shangjia/'+C.channel_name+"/"+C.companyId+'.html" target="_blank">�̼���ҳ<em>&gt;&gt;</em></a>'}$(this).html(B)}});$("div.phone400noteContent").each(function(A){$(this).html(phonehinthtml)});$("div.action").each(function(F){var B=($(this).attr("name"));var A=str2map(B);var H=A.companyId;var J=A.companyName;var K=A.phone400;var G=A.channelName;var D=A.categoryId;var C=A.productId;var I=A.mainTitle;if(if_co!="ganji"){var E=$("#actionhtml").html().replaceAll("{companyId}",H);E=E.replaceAll("{companyName}",J);E=E.replaceAll("{phone400}",K);E=E.replaceAll("{channelName}",G);E=E.replaceAll("{companyURL}",'<a href="/shangjia/'+G+"/"+H+'.html" target="_blank" class="gotocompany more">�̼���ҳ<em>&gt;&gt;</em></a>');E=E.replaceAll("{categoryId}",D);E=E.replaceAll("{productId}",C);E=E.replaceAll("{mainTitle}",I);$(this).html(E)}});setTimeout(function(){try{initSelect2()}catch(A){}},10);function getListInfo(F,A,E,B,D,G){$("#content"+A).html(loading);var C=Math.floor(Math.random()*999999999);$.getJSON("/json.htm?rand="+C,{method:"getCompanyListInfo",companyId:A,productId:E,name:B},function(H){getListInfoCallBack(F,H,D,G,A)});return false}function getListInfoCallBack(E,D,C,G,A){var B=$(E);B.addClass("now").parent().parent().find("li").not(B).removeClass("now");if(D==null||D=="null"||D.length<1){$("#content"+A).html("�����Ż���Ϣ");return }var F="";F+='<div class="discount">';F+="<ul>";$.each(D,function(I,J){var H="/dazhe/"+C;if(current_category!=""){H+="/"+G}H+="_"+J[0]+".html";F+='<li class="title">';F+='<a target="_blank" href="'+H+'">'+J[1]+"</a></li>";F+="</li>";if(trimHtml2(J[2])!=trimHtml2(J[1])){F+='<li class="content">';F+=trimHtml(J[2],"...",40);if(J[2].len()>40*2){F+='<a target="_blank" href="'+H+'">����</a>'}F+="</li>"}});F+="</ul>";F+="</div>";$("#content"+A).html(F)}function getLicenseRef(D,A,E){$("#content"+A).html(loading);var B=$(D);B.addClass("now").parent().parent().find("li").not(B).removeClass("now");var C='<img src="/getFile.htm?path='+E.replaceAll(".sma.",".lar.")+'" />';B.parent().parent().find("div.TabbedPanelsContent").html(C)}function getMap(E,B,D,A){var C=$(E);C.addClass("now").parent().parent().find("li").not(C).removeClass("now");var F="";F+='<div id="view" class="viewmap">';if(if_co!="ganji"&&(window.location+"").indexOf("/fuwu/")>0){F+="<ul>";F+='<li class="mapview"><a href="'+(window.location+"").replace("/fuwu/","/ditu/")+'" title="�л�����ͼ��ͼ"><span>�л�����ͼ��ͼ���鿴ȫ���̼�</span></a></li>';F+="</ul>"}F+="</div>";F+='<iframe width="762px" height="230px" scrolling="no" frameborder="no" src="/index.htm?method=listMap&CompanyId='+B+"&locatorclass=listdrivemap&showlocator=true&width=450&height=230&companyName="+D+"&position="+A+'" />';C.parent().parent().find("div.TabbedPanelsContent").html(F)}var globalMap=new Object();var fancyboxinited=false;function initFancybox(){if(!fancyboxinited){$("a#myfancybox_a").fancybox({zoomSpeedIn:0,zoomSpeedOut:0,overlayShow:true});fancyboxinited=true}}function sendtoemail(A,D,E,C){globalMap.companyId=A;globalMap.companyName=D;globalMap.phone400=E;globalMap.mainTitle=C;var B='<div style="padding:20px 0 0 20px;background:#fff;"><div class="keepcontent"><h6>��������������</h6><input type="text" class="email" name="email" /><button id="sendBtn" onclick="sendMail(this);">����</button><p>���ǻὫ<strong>'+D+"</strong>�������Ϣ���͵���������</p></div></div>";$("div#myfancybox_content").html(B);initFancybox();$.fn.fancybox.settings("itemLoadCallback",null);$.fn.fancybox.settings("frameHeight","100");$.fn.fancybox.settings("frameWidth","400");$("a#myfancybox_a").click()}function sendMail(G){var D=$(G);var A=D.parent().find("input.email");var B=A.val();if(!B.isValidEmail()){alert("email��ʽ����ȷ");A.select();return false}D.attr("disabled","disabled");D.html("���ڷ���...");var C=new UUID();var F="/images/__b2cLog.gif?t="+C+"&m=sendMail,"+B+","+globalMap.phone400;$("#logimg").attr("src",F);var E=Math.floor(Math.random()*999999999);$.get("/json.htm?rand="+E,{method:"sendMail",companyId:globalMap.companyId,companyName:encodeURI(globalMap.companyName),phone400:encodeURI(globalMap.phone400),mainTitle:encodeURI(globalMap.mainTitle),email:B},function(H){alert("���ͳɹ�");$("#fancy_close").click()})}function sendtocell(C,D,B){globalMap.companyName=C;globalMap.phone400=D;globalMap.mainTitle=B;var A='<div style="padding:20px 0 0 20px;background:#fff;"><div class="keepcontent"><h6>�����������ֻ�����</h6><input type="text" class="sms" name="sms" value=""/><button id="sendBtn" onclick="sendsms(this);">����</button><p>2���Ӻ����ǻὫ<strong>'+C+"</strong>�������Ϣ���͵������ֻ�</p></div></div>";$("div#myfancybox_content").html(A);initFancybox();$.fn.fancybox.settings("itemLoadCallback",null);$.fn.fancybox.settings("frameHeight","100");$.fn.fancybox.settings("frameWidth","400");$("a#myfancybox_a").click()}function sendsms(F){var C=$(F);var A=C.parent().find("input.sms");var E=A.val();if(E.replace(/(^\s*)|(\s*$)/g,"")==""){alert("�������ֻ���");A.select();return false}C.attr("disabled","disabled");C.html("���ڷ���...");var B=new UUID();var D="/images/__b2cLog.gif?t="+B+"&m=sendsms,"+E+","+globalMap.phone400;$("#logimg").attr("src",D);$.get("/sendsms",{sendto:E,message:"J.cn��������:"+globalMap.companyName+",��ѯ����绰:"+globalMap.phone400},function(G){$("#fancy_close").click();alert("���ͳɹ�")})}function showErrorReport(A,C,B){var D='<div class="checkcontent" style="padding:20px 0 0 10px;background:#fff;"><div><h6>����ԭ��</h6>'+C+B+'</div><div><h6>����˵����</h6> <TEXTAREA tabIndex=2 class="remark" rows=8 cols=50></TEXTAREA> </div><div><INPUT type="hidden" value="'+B+'" class="errorType"> <INPUT type=hidden value='+A+' class="errorCompanyId"><button class="submit" onclick="reportError(this);">����</button><button class="reset" onclick="$(\'#fancy_close\').click();" tabIndex=4>ȡ��</button></div></div>';$("div#myfancybox_content").html(D);initFancybox();$.fn.fancybox.settings("itemLoadCallback",null);$.fn.fancybox.settings("frameHeight","300");$.fn.fancybox.settings("frameWidth","500");$("a#myfancybox_a").click()}function reportError(F){var C=new UUID();var B=$(F);var A=B.parent().find("input.errorCompanyId").val();var E=B.parent().find("input.errorType").val();var G=B.parent().parent().find(".remark").val();var D="/images/__b2cLog.gif?t="+C+"&parsegetlog=ok&m=reportError,"+A+","+E+","+encodeURIComponent(G);$("#logimg").attr("src",D);$("#fancy_close").click();alert("�ύ�ɹ�")}function GetCookieVal(B){var A=document.cookie.indexOf(";",B);if(A==-1){A=document.cookie.length}return unescape(document.cookie.substring(B,A))}function SetCookie(A,E){var D=new Date("June 3, 2999");var G="/";var C=null;var F=false;var B=A+"="+escape(E)+"; expires="+D.toGMTString()+((G==null)?"":("; path="+G))+((C==null)?"":("; domain="+C))+((F==true)?"; secure":"");document.cookie=B}function GetCookie(D){var B=D+"=";var F=B.length;var A=document.cookie.length;var E=0;while(E<A){var C=E+F;if(document.cookie.substring(E,C)==B){return GetCookieVal(C)}E=document.cookie.indexOf(" ",E)+1;if(E==0){break}}return null}function collect(H,C,G){if(!G){G="shangjia"}var E="jcnCollection";var F="�̼�";if(G=="dazhe"){E="jcnCollection_dazhe";F="����"}if(G=="jingyan"){E="jcnCollection_jingyan";F="С��ʿ"}var B=H+",,,"+C;var D=GetCookie(E);if(D==null){D=""}if(D.indexOf(H+",,,")>-1){alert("��"+F+"�Ѿ��������ղؼ���.");return false}var A=D.split("~~~");if(A.length>199){alert("���ֻ���ղ�200��"+F+"�������Ե��ղ�ҳɾ����������");return false}if(D!=""){D+="~~~"}D+=B;SetCookie(E,D);alert("�ղسɹ�");return true}var imageList=new Array();function largePreview(E){imageList=new Array();var D=$("img").filter(function(){return $(this).attr("src").replace(".175h.",".").replace(".mid.",".").replace(".sma.",".").match(E.replace(".175h.",".").replace(".mid.",".").replace(".sma.","."))});var C=new Object();C.url=D.attr("src").replace(".mid.",".lar.").replace(".175h.",".lar.").replace(".sma.",".lar.");C.title="";imageList.push(C);try{var A;$.each(D.parents(),function(G,F){if($(F).hasClass("slider")||$(F).hasClass("TabbedPanelsContent")){A=$(F)}});A.find("img").each(function(G){if($(this).attr("src")!=D.attr("src")){var F=new Object();F.url=$(this).attr("src").replace(".mid.",".lar.").replace(".175h.",".lar.").replace(".sma.",".lar.");F.title="";imageList.push(F)}})}catch(B){}initFancybox();$.fn.fancybox.settings("itemLoadCallback",getGroupItems);$("a#myfancybox_a").click()}function getGroupItems(A){jQuery.each(imageList,function(B,C){A.itemArray.push(C)})}var slideArray=[];var slider=function(){function C(F,D,H){var I=F.getElementsByTagName(D);for(var G=0,J=I.length,E=[];G<J;G++){if(I[G].className==H){E.push(I[G])}}if(E.length==1){E=E[0]}return E}function A(D,E){if(D.filters){D.filters.alpha.opacity=Math.round(E)}else{D.style.opacity=E/100}}function B(E,H,D,G,I){this.slideArray=[];this.slides=[];this.over=false;this.S=this.S0=H;this.iW=D;this.iH=G;this.oP=I;this.oc=(E);this.frm=C(this.oc,"div","slide");this.NF=this.frm.length;this.resize();for(var F=0;F<this.NF;F++){this.slides[F]=new Slide(this,F)}this.oc.parent=this;this.view=this.slides[0];this.Z=this.mx;this.oc.onmouseout=function(){this.parent.mouseout();return false}}B.prototype={run:function(){this.Z+=this.over?(this.mn-this.Z)*0.5:(this.mx-this.Z)*0.5;this.view.calc();var D=this.NF;while(D--){this.slides[D].move()}},resize:function(){this.wh=this.oc.clientWidth;this.ht=this.oc.clientHeight;this.wr=this.wh*this.iW;this.r=this.ht/this.wr;this.mx=this.wh/this.NF;this.mn=(this.wh*(1-this.iW))/(this.NF-1)},mouseout:function(){this.over=false;A(this.view.img,this.oP)}};Slide=function(D,E){this.parent=D;this.N=E;this.x0=this.x1=E*D.mx;this.v=0;this.loaded=false;this.cpt=0;this.start=new Date();this.obj=D.frm[E];this.txt=C(this.obj,"div","text");if(this.txt.innerHTML=="text is null"){this.txt.innerHTML=""}this.img=C(this.obj,"img","diapo");this.bkg=document.createElement("div");this.bkg.className="backgroundText";if(this.txt.innerHTML!=""){this.obj.insertBefore(this.bkg,this.txt)}if(E==0){this.obj.style.borderLeft="none"}this.obj.style.left=Math.floor(this.x0)+"px";A(this.img,D.oP);this.obj.parent=this;this.obj.onmouseover=function(){this.parent.over();return false}};Slide.prototype={calc:function(){var E=this.parent;for(var D=0;D<=this.N;D++){E.slides[D].x1=D*E.Z}for(var D=this.N+1;D<E.NF;D++){E.slides[D].x1=E.wh-(E.NF-D)*E.Z}},move:function(){var F=this.parent;var E=(this.x1-this.x0)/F.S;if(this.N&&Math.abs(E)>0.5){this.obj.style.left=Math.floor(this.x0+=E)+"px"}var D=(this.N<F.NF-1)?F.slides[this.N+1].x0-this.x0:F.wh-this.x0;if(Math.abs(D-this.v)>0.5){this.bkg.style.top=this.txt.style.top=Math.floor(2+F.ht-(D-F.Z)*F.iH*F.r)+"px";this.v=D;this.cpt++}else{if(!this.pro){this.pro=true;var G=new Date()-this.start;if(this.cpt>1){F.S=Math.max(2,(28/(G/this.cpt))*F.S0)}}}if(!this.loaded){if(this.img.complete){this.img.style.visibility="visible";this.loaded=true}}},over:function(){this.parent.resize();this.parent.over=true;A(this.parent.view.img,this.parent.oP);this.parent.view=this;this.start=new Date();this.cpt=0;this.pro=false;this.calc();A(this.img,100)}};return{init:function(){var F=true;var E=$("div.slider");for(var D=0;D<E.length;D++){slideArray[D]=new B(E[D],12,1.84/3,1/3.2,70);if(slideArray[D].Z==0){F=false}setInterval("try{slideArray["+D+"].run();}catch(e){}",16)}return F}}}();