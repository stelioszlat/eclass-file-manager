var home = window.location;
  if(window.location == 'http://eclass.uth.gr/eclass/main/portfolio.php'){
    var l = document.getElementsByClassName('btn btn-xs btn-default');
    var link_all = l.item(0).href;
    if(link_all){
      window.location.href = link_all;
    }
    else{
      alert("Page not found!");
    }

  var all_courses = document.getElementsByClassName('');

  for(var i = 0 ; i < all_courses.length ; i++){
    var current = all_courses.item(0).firstChild.href;
    console.log(current);
  }
}
