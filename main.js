function e(id){return document.getElementById(id)}

var uri = document.URL,
    is_page=true,
    total_pages = 30;

if(uri.indexOf("/page/")==-1){
    e('rightr').style.display="none";
    e('leftr').style.display="none";
    is_page = false;
}

uri_list = uri.split("/");

current_page = parseInt(uri_list[uri_list.length - 1]);

if(isNaN(current_page)==true){
    current_page = uri_list[uri_list.length - 1];
}

uri_list[uri_list.length - 1] = "";

uri_list_reduced = uri_list.join("/");

function l_page(){
    if(current_page==0){return true}
    if(current_page=="notes"){current_page=total_pages}
    window.location.href=uri_list_reduced+(current_page-1).toString();
}

function r_page(){
    if(current_page=="notes"){current_page=total_pages}
    if(current_page==total_pages){window.location.href=uri_list_reduced+"notes"}else{
    window.location.href=uri_list_reduced+(current_page+1).toString();}
}

e('rightr').addEventListener("click",r_page);
e('leftr').addEventListener("click",l_page);
