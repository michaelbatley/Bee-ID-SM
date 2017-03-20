document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener("load", drawerFunc);
});

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
	if (sex=='f'){var mask = localStorage.getItem("storedmask");}
	else {var mask = localStorage.getItem("storedmaskm");}
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
};

function closeFunc() {
	var thismask = 0;
	for (i=0; i<15; i++) {
	if (document.getElementById("par"+(i+1)).checked) {
	thismask = thismask + Math.pow(2,i)
	}
   }
   if (sex=="f"){localStorage.setItem("storedmask", thismask);}
   	else {localStorage.setItem("storedmaskm", thismask);}
	document.getElementById('myModal').style.display = "none";
	document.getElementById('modalOverlay').style.display = "none";
	document.location.reload(true);
}

function clearFunc() {
	for (i=0; i<15; i++) {
		document.getElementById("par"+(i+1)).checked = false;
		localStorage.setItem("storedmask", 0);
	}
}

function sexChange() {
	var sex = localStorage.getItem("storedsex");
	if (sex == "m") {localStorage.setItem("storedsex","f");} 
	if (sex == "f") {localStorage.setItem("storedsex","m");
 			        document.getElementById("sexicon").src="images/female.png"; }
	document.location.assign("main.htm");
}

function openhelp() {
	document.location.assign("help.htm");
}

function drawerFunc(){
		document.getElementById('myModal').style.display = "none";
}