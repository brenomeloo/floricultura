function leiaMais(){
	var pontos=document.getElementById("pontos");
	var maisTexto=document.getElementById("mais");
	var btnLeiaMais=document.getElementById("btnLeiaMais");

	if(pontos.style.display = "none"){
	pontos.style.display="inline";
	maisTexto.style.display = "none"
	btnLeiaMais.inner.HTML="Leia Mais"
	}
	else{
		pontos.style.display = "none";
		pontos.style.display="inline";
		btnLeiaMais.inner.HTML="Leia Menos";
	}
}