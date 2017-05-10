let util = {

}
util.title = function(title) {
	title = title ? title + ' - Home' : 'gallary show'
	window.document.title = title
}

export default util