/******************************************************************
	StackReduce API Wrapper Library
	Version:  0.1.rc1 BETA
	Requires: jQuery 1.10.1
	Author: Yannis Kolovos
*******************************************************************/


if (typeof jQuery == 'undefined') {
    function getScript(url, success) {
        var script = document.createElement('script');
        script.src = url;
        var head = document.getElementsByTagName('head')[0],
            done = false;
        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                done = true;
                success();
                script.onload = script.onreadystatechange = null;
                head.removeChild(script);
            };
        };
        head.appendChild(script);
    };

    getScript('http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js', function() {
		console.log("Loaded")
    });
} 
	

/******************************************************************
	Main StackReduce Object
	Keep it simple!
*******************************************************************/
var StackReduce = (function (sr) {
	sr.end_point = "http://www.stackreduce.com/api/v1/stacks.json"
	sr.push = function (data){
	$.ajax({
		type: "POST",
		url: this.end_point, 
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
