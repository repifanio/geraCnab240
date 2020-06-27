const { format } = require('date-fns')
class CreateTrailerFile {
    run() {
        const trailerFile = ''

        const codigoBanco = '104' // Caixa Econômica Federal
        const loteServicoHeaderArquivo = '9999' // Default para header do arquivo
        const tipoRegistro = '9' // Default para header do arquivo
        const febrabanCnabExclusivo = ''.padStart(9, ' ') // Código utilizado pela febraban
        const qtdLotesArquivo = '1'.padStart(6, '0')
        const qtdRegistrosArquivo = '1'.padStart(6, '0')
        const qtdContasConciliadas = '0'.padStart(6, '0')
        const febrabanCnabExclusivo2 = ''.padStart(205, ' ')

        const retorno = trailerFile.concat(  
            codigoBanco,
            loteServicoHeaderArquivo,
            tipoRegistro,
            febrabanCnabExclusivo,
            qtdLotesArquivo,
            qtdRegistrosArquivo,
            qtdContasConciliadas,
            febrabanCnabExclusivo2,
        );

        return retorno
    }
}

module.exports = new CreateTrailerFile();