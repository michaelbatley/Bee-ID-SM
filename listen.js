document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("drawer").addEventListener("click", openFunc);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("sexicon").addEventListener("click", sexChange);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("help").addEventListener("click", openhelp);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("clear").addEventListener("click", clearFunc);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("apply").addEventListener("click", closeFunc);
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("modalOverlay").addEventListener("click", closeFunc);
});

function openFunc() {
	if (sex==sessionStorage.getItem("storedsex")){
	if (sex=='f'){var mask = sessionStorage.getItem("storedmask");}
	else {if (sex=='m') {var mask = sessionStorage.getItem("storedmaskm");}}
	for (i=0; i<15; i++) {
		if ((mask & Math.pow(2,i))>0) {document.getElementById("par"+(i+1)).checked=true;}
	};
	var winopen = document.getElementById('myModal').style.display;
	if (winopen=="none"){
					document.getElementById('myModal').style.display = "block";
					document.getElementById('modalOverlay').style.display = "block";}
	else {
					document.getElementById('myModal').style.display = "none";
					document.getElementById('modalOverlay').style.display = "none";
					document.location.reload(true);}
	} else {
		sex = sessionStorage.getItem("storedsex");
		document.location.assign("main.htm");
	}
};

function closeFunc() {
	var thismask = 0;
	for (i=0; i<15; i++) {
	if (document.getElementById("par"+(i+1)).checked) {
	thismask = thismask + Math.pow(2,i)
	}
   }
   if (sex=="f"){sessionStorage.setItem("storedmask", thismask);}
   	else {sessionStorage.setItem("storedmaskm", thismask);}
  document.getElementById('myModal').style.display = "none";
  document.getElementById('modalOverlay').style.display = "none";
  document.location.reload(true);
}

function clearFunc() {
	for (i=0; i<15; i++) {
		document.getElementById("par"+(i+1)).checked = false;
		sessionStorage.setItem("storedmask", 0);
	}
}

function sexChange() {
	var sex = sessionStorage.getItem("storedsex");
	if (sex == "m") {sessionStorage.setItem("storedsex","f");
 			document.getElementById("sexicon").src="male.png";
			if (sessionStorage.getItem("storedmaskm")!=0){
			var x = document.getElementsByClassName("thumb");
			for (var i=0; i<x.length;i++) {y=x[i].src;
					y=y.substring(0,y.length-5)+".jpg";
					x[i].src=y;}
			document.getElementById("mf").innerHTML="females";
			} else {
			document.location.assign("main.htm");}
	} 
	if (sex == "f") {sessionStorage.setItem("storedsex","m");
 			document.getElementById("sexicon").src="female.png";
			if (sessionStorage.getItem("storedmask")!=0){
			var x = document.getElementsByClassName("thumb");
			for (var i=0; i<x.length;i++) {y=x[i].src;
					y=y.substring(0,y.length-4)+"m.jpg";
					x[i].src=y;}
			document.getElementById("mf").innerHTML="males";
			} else {
			document.location.assign("main.htm");}
	}
}

function openhelp() {
	document.location.assign("help.htm");
}
