const { format } = require('date-fns')
class CreateTrailerFile {
    run() {
        const trailerFile = ''

        const obj = {
            codigoBanco: '104',
            loteServicoHeaderArquivo: '9999',
            tipoRegistro: '9',
            febrabanCnabExclusivo: ''.padStart(9, ' '),
            qtdLotesArquivo: '1'.padStart(6, '0'),
            qtdRegistrosArquivo: '1'.padStart(6, '0'),
            qtdContasConciliadas: '0'.padStart(6, '0'),
            febrabanCnabExclusivo2: ''.padStart(205, ' '),
        }

        const retorno = trailerFile.concat(  
            obj.codigoBanco,
            obj.loteServicoHeaderArquivo,
            obj.tipoRegistro,
            obj.febrabanCnabExclusivo,
            obj.qtdLotesArquivo,
            obj.qtdRegistrosArquivo,
            obj.qtdContasConciliadas,
            obj.febrabanCnabExclusivo2,
        );

        return retorno
    }
}

module.exports = new CreateTrailerFile();