upChars = ["͠"];
downChars = ["͜"];
overChars = ["̶"];

//allChars = [upChars, downChars, overChars];
allChars = ["̀","́","̂","̃","̄","̅","̆","̇","̈","̉","̊","̋","̌","̍","̎","̏","̐","̑","̒","̓","̔","̕","̚","̛","̽","̾","̿","̀","́","͂","̓","̈́","͆","͊","͋","͌","͐","͑","͒","͗","͘","͛","͝","͞","͠","͡","̖","̗","̘","̙","̜","̝","̞","̟","̠","̡","̢","̣","̤","̥","̦","̧","̨","̩","̪","̫","̬","̭","̮","̯","̰","̱","̲","̳","̹","̺","̻","̼","ͅ","͇","͈","͉","͍","͎","͓","͔","͕","͖","͙","͚","͜","͟","͢","̴","̵","̶","̷","̸","ͣ","ͤ","ͥ","ͦ","ͧ","ͨ","ͩ","ͪ","ͫ","ͬ","ͭ","ͮ","ͯ"];

let textNodes = [];


function addZalgo() {
	for (textNode of textNodes) {
		let nodeValue = textNode.nodeValue;
		let rand = parseInt(Math.random() * nodeValue.length)
		textNode.nodeValue = nodeValue.substr(0, rand) + allChars[parseInt(Math.random() * allChars.length)] + nodeValue.substr(rand, nodeValue.length) + allChars[parseInt(Math.random() * allChars.length)];
	}
}

window.onload = function() {
	
	let n, walk=document.createTreeWalker(document,NodeFilter.SHOW_TEXT,null,false);
	while(n=walk.nextNode()) {
		/*console.log(n);
		for (i of n.childNodes) {
			if (i.nodeType === 3) {
				textNodes.push(i);
			}
		}*/
		textNodes.push(n);
	}

	window.setInterval(() => {addZalgo()}, 1000);
}
