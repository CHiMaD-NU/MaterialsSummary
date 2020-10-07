
//this function will use the answers to create a grid of boxes and highlight the correct values
function populateBoxes(){

	//add the row labels
	var dv = d3.select('#labels').select('.boxContainer').selectAll('.rowTitle')
		.data(params.answers.columns).enter()
		.filter(function(d) { return !d.includes('Timestamp') })
			.append('div')
				.attr('class', 'rowTitle')
				.attr('id', function(d,j){return params.cleanString(d);})
				.text(function(d,j){
					return d.replace('Classification [','').replace(']','');
				})

				

	//create the grid of boxes (using html divs)
	params.columns.forEach(function(c,j){
		var dv = d3.select('#'+c.toLowerCase()).select('.boxContainer').selectAll('.box')
			.data(params.answers.columns).enter()
			.filter(function(d) { return !d.includes('Timestamp') })
				.append('div')
					.attr('class', function(d,j){return 'box '+c+j})
					.attr('id', function(d,j){return c+params.cleanString(d);})
					.style('border-width',function(d,j){
						console.log(c, params.answers[0][d])
						if (c.toLowerCase().includes(params.answers[0][d].toLowerCase())) {
							console.log('match')
							return 3
						}
						return 1
					})
				
	})

	//center the boxes on the page
	var wl = d3.select('#labels').node().getBoundingClientRect().width
	var w = 0
	params.columns.forEach(function(c,j){
		w += d3.select('#'+c.toLowerCase()).select('.boxContainer').select('.box').node().getBoundingClientRect().width;
	})
	d3.select('#container').style('margin-left',(window.innerWidth-w)/2. - wl)

}



