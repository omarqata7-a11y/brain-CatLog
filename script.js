// ====== التحكم في القوائم المنسدلة ======
document.getElementById("videos-menu").addEventListener("click", function(){
  var submenu = document.getElementById("videos-submenu");
  submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
});

document.getElementById("references-menu").addEventListener("click", function(){
  var submenu = document.getElementById("references-submenu");
  submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
});
