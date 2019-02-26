var prveRate = document.querySelectorAll('.installment-1');
var drugeRate = document.querySelectorAll('.installment-2');
var treceRate = document.querySelectorAll('.installment-3');

function filterPrethodnoIzmirenih(val){
	if(val.previousElementSibling.classList.value.indexOf('paid') !==-1){
		return true;
	}
}

function placeno(val){
	if(val.classList.value.indexOf('paid') !==-1) {
		return true;
	}
}

function nijePlaceno(val){
	if(val.classList.value.indexOf('neplaceno') !==-1){
		return true;
	}
}

var prvePlacene = Array.from(prveRate).filter(placeno);
var drugePlacene = Array.from(drugeRate).filter(placeno);
var trecePlacene = Array.from(treceRate).filter(placeno); 
var potencijalneDruge = Array.from(drugeRate).filter(nijePlaceno).filter(filterPrethodnoIzmirenih);
var potencijalneTrece = Array.from(treceRate).filter(nijePlaceno).filter(filterPrethodnoIzmirenih);

function saberi(ar) {
	let zbir = 0;
	for(let i = 0; i < ar.length; i++){
		 zbir += parseInt(ar[i].innerText); 
	}
	return zbir;
}
var z1 = saberi(prvePlacene);
var z2 = saberi(drugePlacene);
var z3 = saberi(trecePlacene);
var z22 = saberi(potencijalneDruge);
var z32 = saberi(potencijalneTrece);

document.querySelector('.ukm-1').innerHTML = z1;
document.querySelector('.ukm-2').innerHTML = z2 + ` (${z22}) `;
document.querySelector('.ukm-3').innerHTML = z3 + ` (${z32}) `;





