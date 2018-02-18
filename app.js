var fs = require('fs');

const yargs = require('yargs');

const quote = {
		describe: 'quote',
		demand:true,
		alias:'q'
	};

const byAuthor = {

			describe:'author of quote',
			demand:true,
			alias:'b'
		

}

const argus= yargs.command('motivation','get motivation quotes')
.command('add','add your quote',{

		quote,
		byAuthor

})
.command('about','Read about developer who made this')
.help()
.argv;

const command = argus._[0];

const motivateFile = require('./quotes.js');



if(command === "motivation") {


	const motivated = motivateFile.getMotivation();
	console.log(motivated.quote);

}else if(command === "add"){

	var a = motivateFile.addMotivation(argus.quote,argus.byAuthor);
	console.log(a);

}else if(command === "about"){

	console.log('About dev');
	console.log('------------------------------');
console.log('This app is created by yashraj basan.Follow this link to know about more:\n https:github.com/yashrajb');


}else {
	console.log(`${command} is not recongized`);
}