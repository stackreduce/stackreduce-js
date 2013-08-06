# Stackreduce Javascript API Wrapper

Stackreduce its a Javscript API Wrapper for [Stackreduce.com](http://www.stackreduce.com/)
A simple solutions for pushing your data!

## Getting started
Define you applications settings
	
	window.StackReduce.settings = {
		"token":"5488dc9ad75080f03bb99a095524f91aaa3e8fa711ed519616fc2ff5ab7",
		"app_id":"8dc9ad75080f03bb91aaa3"
	};


Create the data you want to sent:

	stack = [
	{"user_id": 1, "name": "yannis", "sex": "male"},
	{"user_id": 2, "name": "cyril", "sex": "male"},
	{"user_id": 3, "name": "demi", "sex": "female"},
	{"user_id": 4, "name": "chad", "sex": "male"},
	{"user_id": 5, "name": "kym", "sex": "male"},
	{"user_id": 6, "name": "andrea", "sex": "female"},
	{"user_id": 7, "name": "juliet", "sex": "female"}
	]
			

Push the stack:

		
		StackReduce.push(stack);

	
## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

Released under the MIT license
see the file License.

Created by Yannis Kolovos (https://github.com/msroot)