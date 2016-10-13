require( '../css/a.css' );
require( '../css/c.css' );

switch(__NODE_ENV__){
	case __EnumEnv__.DEV:
		console.log( 1111 );
		console.log('this is DEV env');
		break;
	case __EnumEnv__.PROD:
		console.log( 2222 );
		console.log("this is PROD env");
		break;
}

