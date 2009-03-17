var rotateADs=new Array();
var adNum=0; 
var coll=0;
var theTimer=null;


ADIMG=function(str){
	this.src="";
	this.linkUrl="";
	this.alt="";
	this.target="_blank";
	if(str){
		tmparr=str.split(";");
		if(tmparr[0])this.src=tmparr[0];
		if(tmparr[1])this.linkUrl=tmparr[1];
		if(tmparr[2])this.alt=tmparr[2];
		if(tmparr[3])this.target=tmparr[3];
	}
}

ADIMG.get=function(str){
	return new ADIMG(str);
}


function initRotateAD(){
	var divpages=document.getElementById("RotateADPages");
	adNum=rotateADs.length;
	var preloadedimages=new Array(); 
	for (i=rotateADs.length-1;i>-1;i--){ 
		preloadedimages[i]=new Image(); 
		preloadedimages[i].src=rotateADs[i]; 
	} 
	for(i=adNum-1;i>-1;i--){
		tmpdiv=document.createElement("div");
		tmpdiv.id="rad_page_"+i;
		tmpdiv.innerHTML=i+1;
		tmpdiv.onmouseover=function(e){
			//return function(){
				var ki=i;this.className='curpage';changeAd(this);
			//};
		};
		divpages.appendChild(tmpdiv);	
	}
	changeAd(0);
}

function jump2url(){ 
	adimg=ADIMG.get(rotateADs[adNum]);
	jumpTarget='_blank'; 
	if (adimg.linkUrl != ''){ 
		if (adimg.target != '')
			window.open(adimg.linkUrl,adimg.target); 
		else location.href=jumpUrl; 
	} 
}

function changeAd(n){
	if(typeof(n)=="object")n=n.id.split("_")[2];
	adNum=n;
	window.clearInterval(theTimer);
	adNum=adNum-1;
	nextAd();	
}

function nextAd(){ 
	coll++;
	if(adNum<rotateADs.length-1){
		adNum++ ; 
	}
	else{
		adNum=0; 
	}
	setTransition(); 
	adimg=ADIMG.get(rotateADs[adNum]);
	document.images.RotateADImg.src=adimg.src; 
	document.images.RotateADImg.alt=adimg.alt; 
	document.getElementById("RotateADTitle").innerHTML=adimg.alt;
	document.getElementById("RotateADTitle").title=adimg.alt;
	
	for(i=0;i<rotateADs.length;i++){
		document.getElementById("rad_page_"+i).className="";
	}
	document.getElementById("rad_page_"+adNum).className="curpage";
	playTransition(); 
	theTimer=setTimeout("nextAd()", 8000); 
} 

function setTransition(){ 
	if (document.all){ 
		RotateADImg.filters.revealTrans.Transition=23; 
		RotateADImg.filters.revealTrans.apply(); 
	} 
} 

function playTransition(){ 
	if (document.all) 	RotateADImg.filters.revealTrans.play() 
} 
