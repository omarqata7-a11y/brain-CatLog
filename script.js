// التحكم في القائمة عند الضغط على الانتباه
document.getElementById("attention-menu").addEventListener("click", function(){
  var submenu = document.getElementById("attention-submenu");
  submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
});

// التحكم في الفيديوهات
document.getElementById("videos-menu").addEventListener("click", function(e){
  e.stopPropagation(); // لمنع إغلاق القائمة الرئيسية
  var submenu = document.getElementById("videos-submenu");
  submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
});

// التحكم في المراجع
document.getElementById("references-menu").addEventListener("click", function(e){
  e.stopPropagation();
  var submenu = document.getElementById("references-submenu");
  submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
});
