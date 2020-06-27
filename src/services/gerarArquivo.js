const fs = require('fs');
const {format} = require('date-fns')
const dir = '/home/epifanio/Documentos/Poyer/outputs';

class GerarArquivo {
    run(hFile, hLote, detalheP, detalheQ, detalheR, tLote, tFile){
        if (!fs.existsSync(dir)){
            fs.mkdir(dir, (err) => {
                if (err) {
                    console.log("Erro ao gerar diretório");
                    return
                }
                console.log("Diretório criado com sucesso")
            });
        }

        fs.writeFile(`${dir}/${format(new Date(), 'yyyyMMdd')}.CRM`, 
        `${hFile}\r\n${hLote}\r\n${detalheP}\r\n${detalheQ}\r\n${detalheR}\r\n${tLote}\r\n${tFile}`,
        function (erro) {
            if (erro) {
                throw erro;
            }
            console.log("Arquivo salvo com sucesso!");
        });
    }
}

module.exports = new GerarArquivo()