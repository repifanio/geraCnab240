const { format } = require('date-fns')
class CreateTrailerLote {
    run() {
        const trailerLote = ''

        const obj = {
            codigoBanco: '104',
            loteServicoHeaderArquivo: '0001',
            tipoRegistro: '5',
            febrabanCnabExclusivo: ''.padStart(9, ' '),
            nrRegistros: '1'.padStart(6, '0'),
            qtdTitulosCobrancaSimples: '0'.padStart(6, '0'),
            valorTotalCobrancaSimples: '0'.replace('.', '').padStart(17, '0'),
            qtdTitulosCobrancaVinculada: '0'.padStart(6, '0'),
            valorTotalCobrancaVinculada: '0'.replace('.', '').padStart(17, '0'),
            qtdTitulosCobrancaCaucionada: '0'.padStart(6, '0'),
            valorTotalCobrancaCaucionada: '0'.replace('.', '').padStart(17, '0'),
            qtdTitulosCobrancaDescontada: '0'.padStart(6, '0'),
            valorTotalCobrancaDescontada: '0'.replace('.', '').padStart(17, '0'),
            nrAvisoLancamento: ''.padStart(8, ' '),
            febrabanCnabExclusivo2: ''.padStart(117, ' '),
        }

        const retorno = trailerLote.concat(  
            obj.codigoBanco,
            obj.loteServicoHeaderArquivo,
            obj.tipoRegistro,
            obj.febrabanCnabExclusivo,
            obj.nrRegistros,
            obj.qtdTitulosCobrancaSimples,
            obj.valorTotalCobrancaSimples,
            obj.qtdTitulosCobrancaVinculada,
            obj.valorTotalCobrancaVinculada,
            obj.qtdTitulosCobrancaCaucionada,
            obj.valorTotalCobrancaCaucionada,
            obj.qtdTitulosCobrancaDescontada,
            obj.valorTotalCobrancaDescontada,
            obj.nrAvisoLancamento,
            obj.febrabanCnabExclusivo2,
        );

        return retorno
    }
}

module.exports = new CreateTrailerLote();