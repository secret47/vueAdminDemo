var appData = require('../mock/user.json');
var login = appData.login


var apiRoutes = express.Router();

apiRoutes.get('/login',function(req,res){
	res.json({
		error:0,
		data:login
	});
});

app.use('/api',apiRoutes);