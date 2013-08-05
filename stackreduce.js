/* 
StackReduce API Library
Version:  0.1.rc1 BETA
Requires: jQuery 
*/

var StackReduce = (function (sr) {

	sr.helpers = {}
	sr.helpers.humanize = function(property) {
	  return property.replace(/_/g, ' ')
	      .replace(/(\w+)/g, function(match) {
	        return match.charAt(0).toUpperCase() + match.slice(1);
	      });
	};
		
	sr.push = function (data){
	$.ajax({
		type: "POST",
		url: this.url, 
		dataType: "json",
		data:  {
		_method:'POST',
		token:this.settings.token, 
		app_id:this.settings.app_id, 
		stack_data:JSON.stringify(data)} ,
		success: function (data)
		{
			console.log(data)
		}
	});
	}

	return sr;
}(window.StackReduce || {}));
