function resizer(){
	//recenter the boxes
	var wl = d3.select('#labels').node().getBoundingClientRect().width
	var w = 0
	params.columns.forEach(function(c,j){
		w += d3.select('#'+c.toLowerCase()).select('.boxContainer').select('.box').node().getBoundingClientRect().width;
	})
	d3.select('#container').style('margin-left',(window.innerWidth-w)/2. - wl)
}