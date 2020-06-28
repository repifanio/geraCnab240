const { format } = require('date-fns')

class CreateDetalheLoteSegmentoR {
    run() {
        const detalheLoteSegmentoR = ''

        const obj = {
            codigoBanco: '104',
            loteServicoHeaderArquivo: '0001',
            tipoRegistro: '3',
            sequencialRegistroLote: '1'.padEnd(5, '0'),
            codSegmentoRegistroDetalhe: 'R',
            febrabanCnabExclusivo: ' ',
            codMovimentoRemessa: '01',
            codDesconto2: '0',
            dataDesconto2: '0'.padStart(8, '0'),
            valorPercentualDesconto2: '0'.replace('.', '').padStart(15, '0'),
            codDesconto3: '0',
            dataDesconto3: '0'.padStart(8, '0'),
            valorPercentualDesconto3: '0'.replace('.', '').padStart(15, '0'),
            codMulta: '2',
            dataMulta: '0'.padStart(8, '0'),
            valorPercentualMulta: '2.00'.replace('.', '').padStart(15, '0'),
            infoAoPagador: ''.padEnd(10, ' '),
            mensagem3: ''.padEnd(40, ' '),
            mensagem4: ''.padEnd(40, ' '),
            febrabanCnabExclusivo2: ''.padStart(20, ' '),
            codOcoPagador: '0'.padStart(8, '0'),
            codBancoContaDebito: '0'.padStart(3, '0'),
            codAgenciaDebito: '0'.padStart(5, '0'),           
            digitoVerificadoAgencia: ' ',
            codContaDebito: '0'.padStart(12, '0'),
            digitoVerificadoConta: ' ',
            digitoVerificadoAgenciaConta: ' ',
            avisoDebitoAutomatico: '0',
            febrabanCnabExclusivo3: ''.padStart(9, ' '),
        }

        const retorno = detalheLoteSegmentoR.concat(  
            obj.codigoBanco,
            obj.loteServicoHeaderArquivo,
            obj.tipoRegistro,
            obj.sequencialRegistroLote,
            obj.codSegmentoRegistroDetalhe,
            obj.febrabanCnabExclusivo,
            obj.codMovimentoRemessa,
            obj.codDesconto2,
            obj.dataDesconto2,
            obj.valorPercentualDesconto2,
            obj.codDesconto3,
            obj.dataDesconto3,
            obj.valorPercentualDesconto3,
            obj.codMulta,
            obj.dataMulta,
            obj.valorPercentualMulta,
            obj.infoAoPagador,
            obj.mensagem3,
            obj.mensagem4,        
            obj.febrabanCnabExclusivo2,
            obj.codOcoPagador,
            obj.codBancoContaDebito,
            obj.codAgenciaDebito,
            obj.digitoVerificadoAgencia,
            obj.codContaDebito,
            obj.digitoVerificadoConta,
            obj.digitoVerificadoAgenciaConta,
            obj.avisoDebitoAutomatico,
            obj.febrabanCnabExclusivo3
        );

        return retorno
    }
}

module.exports = new CreateDetalheLoteSegmentoR;