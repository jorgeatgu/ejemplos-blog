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

var sol = document.getElementById("logo");
var sol = document.getElementById("sol");

var logoDimensiones = logo.getBoundingClientRect();
var alturaLogo = logoDimensiones.height;
var anchuraLogo = logoDimensiones.width;
var topLogo = logoDimensiones.top;
var rightLogo = logoDimensiones.right;
var bottomLogo = logoDimensiones.bottom;
var leftLogo = logoDimensiones.left;

document.getElementById("logoAltura").innerHTML = "Altura: " + alturaLogo;
document.getElementById("logoAnchura").innerHTML = "Anchura: " + anchuraLogo;
document.getElementById("logoTop").innerHTML = "Top: " + topLogo;
document.getElementById("logoRight").innerHTML = "Right: " + rightLogo;
document.getElementById("logoBottom").innerHTML = "Bottom: " + bottomLogo;
document.getElementById("logoLeft").innerHTML = "Left: " + leftLogo;