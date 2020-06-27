const { format } = require('date-fns')
class CreateTrailerLote {
    run() {
        const trailerLote = ''

        const codigoBanco = '104' // Caixa Econômica Federal
        const loteServicoHeaderArquivo = '0001' // Default para header do arquivo
        const tipoRegistro = '5' // Default para header do arquivo
        const febrabanCnabExclusivo = ''.padStart(9, ' ') // Código utilizado pela febraban
        const nrRegistros = '1'.padStart(6, '0')
        const qtdTitulosCobrancaSimples =  '0'.padStart(6, '0')
        const valorTotalCobrancaSimples =  '0'.replace('.', '').padStart(17, '0')
        const qtdTitulosCobrancaVinculada =  '0'.padStart(6, '0')
        const valorTotalCobrancaVinculada =  '0'.replace('.', '').padStart(17, '0')
        const qtdTitulosCobrancaCaucionada =  '0'.padStart(6, '0')
        const valorTotalCobrancaCaucionada =  '0'.replace('.', '').padStart(17, '0')
        const qtdTitulosCobrancaDescontada =  '0'.padStart(6, '0')
        const valorTotalCobrancaDescontada =  '0'.replace('.', '').padStart(17, '0')
        const nrAvisoLancamento = ''.padStart(8, ' ')
        const febrabanCnabExclusivo2 = ''.padStart(117, ' ')

        const retorno = trailerLote.concat(  
            codigoBanco,
            loteServicoHeaderArquivo,
            tipoRegistro,
            febrabanCnabExclusivo,
            nrRegistros,
            qtdTitulosCobrancaSimples,
            valorTotalCobrancaSimples,
            qtdTitulosCobrancaVinculada,
            valorTotalCobrancaVinculada,
            qtdTitulosCobrancaCaucionada,
            valorTotalCobrancaCaucionada,
            qtdTitulosCobrancaDescontada,
            valorTotalCobrancaDescontada,
            nrAvisoLancamento,
            febrabanCnabExclusivo2,
        );

        return retorno
    }
}

module.exports = new CreateTrailerLote();