$(function(){$(".chzn-select").chosen();var e=$("#content");e.isotope({itemSelector:".element",layoutMode:"masonry"}),$(".repo-language").click(function(){var e=this.innerHTML.replace(/ /g,"");return $("select").val(e).trigger("liszt:updated").change(),window.location.hash=e,!1}),$("select").change(function(){var t=[],n=[];t=$("select option:selected"),t.each(function(){var e=$(this).data("filter");n.push("."+$(this).data("filter"))});var r=n.join("");return e.isotope({filter:r}),window.location.hash=n.join(",").replace(/\./g,""),!1}),$(window).smartresize(function(){e.isotope("reLayout")}),$(document).ready(function(){var e=window.location.hash;e!==null&&e!=""&&($("select").val(e.replace(/#/,"").split(",")),$("select").trigger("liszt:updated").change())}),$(document).ready(function(){function s(e){window.clearInterval(r),e&&(r=setInterval(o,t))}function o(){$("select").val(i[n]),$("select").trigger("liszt:updated").change(),n<i.length-1?n++:n=0}var e=!1,t=3e3,n=0,r,i=["JavaScript","ActionScript","Objective-C","Java","Python","DotNet","iOS","C-Sharp","Android","QuickStart","Local-Government","Bootstrap","Mapping","GeoJSON","Mobile","Code-Challenge","Utility","Storytelling","Geocoding","ArcGIS","Hadoop","Web","Social","Analysis","Offline","Runtime","Dashboard","Public",""];$("#home-banner").dblclick(function(){e=!e,s(e)}),$(document).keydown(function(n){n.which===38&&n.shiftKey&&e?t>1e3&&(t-=1e3):n.which===40&&n.shiftKey&&e&&t<5e3&&(t+=1e3),e&&s(e)})})});