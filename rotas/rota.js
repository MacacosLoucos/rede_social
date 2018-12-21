var rota = require('express').Router();
var fs = require('fs');
var banco = require('../banco/banco');
var multer  = require('multer');
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'public/img')
	},
	filename: function (req, file, cb) {
	  cb(null, file.fieldname + '-' + Date.now() + '.jpg')
	}
  })
  
  var upload = multer({ storage: storage })

rota.get('/', function (req, res) {
	var file = "";

	file = './rede_social/index.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {

				console.log(err);
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			res.writeHead(200);
			res.end(data);
		});

});

rota.post('/entrar', function (req, res) {
	var file = "";

	let dados = req.body;

	banco.login(dados, function (ender, id) {
		file = ender;
		
		fs.readFile(file,
			function (err, data) {
				if (err) {
					res.writeHead(500);
					return res.end('Falha ao carregar o arquivo index.html');
				}
				// res.writeHead(200);
				res.cookie('id', id);
				res.end(data);
			});
	});


});

rota.post('/cadastrar', function (req, res) {
	var file = "";

	let dados = req.body;

	banco.cadastrar(dados);

	file = './rede_social/perfil.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			res.writeHead(200);
			res.end(data);
		});
});


rota.get('/perfil', function (req, res) {
	var file = "";

	file = './rede_social/perfil.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			res.writeHead(200);
			res.end(data);
		});
});

rota.get('/inicial', function (req, res) {
	var file = "";

	file = './rede_social/inicial.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			res.writeHead(200);
			res.end(data);
		});
});

rota.get('/configuracoes', function (req, res) {
	var file = "";

	file = './rede_social/configuracoes.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			res.writeHead(200);
			res.end(data);
		});
});

rota.get('/criarturma', function (req, res) {
	var file = "";

	file = './rede_social/criarturma.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			res.writeHead(200);
			res.end(data);
		});
});

rota.post('/criandoturma', upload.single('foto-turma'), function(req, res, next){
	
});

rota.get('/sair', function (req, res) {
	var file = "";

	file = './rede_social/index.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			// res.writeHead(200);
			//res.clearCookie('id');
			res.end(data);
		});
});

rota.get('/amigos', function (req, res) {
	var file = "";

	file = './rede_social/amigos.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			res.writeHead(200);
			res.end(data);
		});
});

rota.get('/minhasturmas', function (req, res) {
	var file = "";

	file = './rede_social/minhasTurmas.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			res.writeHead(200);
			res.end(data);
		});
});

rota.get('/post', function (req, res) {
	var file = "";

	//file ='./rede_social/perfil.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			res.writeHead(200);
			res.end(data);
		});
});

rota.get('/curtir', function (req, res) {
	var file = "";

	//file ='./rede_social/perfil.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			res.writeHead(200);
			res.end(data);
		});
});

rota.get('/buscar', function (req, res) {
	var file = "";

	file = './rede_social/buscar.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			res.writeHead(200);
			res.end(data);
		});
});

rota.post('/mudardados', function (req, res) {
	var file = "";

	file = './rede_social/buscar.html';

	fs.readFile(file,
		function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('Falha ao carregar o arquivo index.html');
			}
			res.writeHead(200);
			res.end(data);
		});
});


module.exports = rota;