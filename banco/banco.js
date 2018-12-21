var mysql = require('mysql');
var fs = require('fs');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_rede_social"
});

con.connect(function (err) {
    if (err) console.log(err)
});


exports.cadastrar = function (dados) {
    let sql = "INSERT INTO tb_usuarios (usu_nome, usu_email, usu_senha, usu_escolaridade, usu_data_de_nascimento) VALUES ?";

    var values = [
        [dados.nome, dados.email, dados.senha, dados.escolaridade, dados.nascimento]
    ];


    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
}

exports.login = function (dados, callback) {
    let sql = "SELECT usu_id FROM tb_usuarios WHERE usu_email = ? and usu_senha = ?";

    con.query(sql, [dados.email, dados.senha], function (err, result) {
        if (err) throw err;
        
        if(result[0].usu_id != null){
            callback('./rede_social/inicial.html', result[0].usu_id);
        } else {
            callback('./rede_social/index.html', null);
        }
    });
}

exports.cadastrar = function (dados) {
    let sql = "INSERT INTO tb_turmas (usu_nome, usu_email, usu_senha, usu_escolaridade, usu_data_de_nascimento) VALUES ?";

    var values = [
        [dados.nome, dados.email, dados.senha, dados.escolaridade, dados.nascimento]
    ];


    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
}





