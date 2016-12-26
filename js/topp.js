var topNav = document.getElementById("topNav"),
	topNavClassName = topNav.className;
onscroll = function(){
	topNav.className = topNavClassName + (document.documentElement.scrollTop || scrollY >= 50 ? " fixed" : " normal");
};