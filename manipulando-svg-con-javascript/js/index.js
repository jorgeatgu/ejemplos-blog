$(document).ready(function(){var t=$(".btn-add-class"),a=$(".btn-attr"),c=$(".btn-remove-class"),s=$(".btn-remove-attr"),n=$(".festival-asalto"),l=$(".tornasol");$(t).click(function(){$(n).addClass("sepia")}),$(c).click(function(){$(n).removeClass("sepia")}),$(a).click(function(){$(l).attr("class","saturate")}),$(s).click(function(){$(l).attr("class","")})});