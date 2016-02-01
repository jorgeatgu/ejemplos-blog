$(document).ready(function() {

	var btnAddClass = $(".btn-add-class");
	var btnAttrClass = $(".btn-attr");
	var btnRemoveClass = $(".btn-remove-class");
	var btnRemoveAttr = $(".btn-remove-attr");
	var fotoAsalto = $(".festival-asalto");
	var fotoMazarete = $(".tornasol");

	$(btnAddClass).click(function() {
		$(fotoAsalto).addClass("sepia");
	});
	$(btnRemoveClass).click(function() {
		$(fotoAsalto).removeClass("sepia");
	});

	$(btnAttrClass).click(function() {
		$(fotoMazarete).attr("class", "saturate");
	});

	$(btnRemoveAttr).click(function() {
		$(fotoMazarete).attr("class", "");
	});

});

var logo = document.getElementById("logo");
var sol = document.getElementById("sol");

var logoDimensiones = logo.getBoundingClientRect();
var solDimensiones = sol.getBBox();

console.log(solDimensiones);
console.log(logoDimensiones);