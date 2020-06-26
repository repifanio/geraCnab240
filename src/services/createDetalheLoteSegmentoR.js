const { format } = require('date-fns')

class CreateDetalheLoteSegmentoR {
    run() {
        const detalheLoteSegmentoR = ''

        const codigoBanco = '104' // Caixa Econômica Federal
        const loteServicoHeaderArquivo = '0001' // Sequencial para o arquivo
        const tipoRegistro = '3' // Default para header do arquivo
        const sequencialRegistroLote = '1'.padEnd(5, '0') // Sequencial dentro do lote. Sempre começando com 1
        const codSegmentoRegistroDetalhe = 'R' //Default
        const febrabanCnabExclusivo = ' ' // Uso exclusivo da febraban
        const codMovimentoRemessa = '01' // Entrada de titulos
        const codDesconto2 = '0'
        const dataDesconto2 = '0'.padStart(8, '0')
        const valorPercentualDesconto2 = '0'.replace('.', '').padStart(15, '0')
        const codDesconto3 = '0'
        const dataDesconto3 = '0'.padStart(8, '0')
        const valorPercentualDesconto3 = '0'.replace('.', '').padStart(15, '0')
        const codMulta = '2'
        const dataMulta = '0'.padStart(8, '0')
        const valorPercentualMulta = '2.00'.replace('.', '').padStart(15, '0')
        const infoAoPagador = ''.padEnd(10, ' ')
        const mensagem3 = ''.padEnd(40, ' ')
        const mensagem4 = ''.padEnd(40, ' ')
        const febrabanCnabExclusivo2 = ''.padStart(20, ' ') // Uso exclusivo da febraban
        const codOcoPagador = '0'.padStart(8, '0')
        const codBancoContaDebito = '0'.padStart(3, '0')
        const codAgenciaDebito = '0'.padStart(5, '0')               
        const digitoVerificadoAgencia = ' '
        const codContaDebito = '0'.padStart(12, '0')               
        const digitoVerificadoConta = ' '
        const digitoVerificadoAgenciaConta = ' '
        const avisoDebitoAutomatico = '0'
        const febrabanCnabExclusivo3 = ''.padStart(9, ' ') // Uso exclusivo da febraban

        const retorno = detalheLoteSegmentoR.concat(  
            codigoBanco,
            loteServicoHeaderArquivo,
            tipoRegistro,
            sequencialRegistroLote,
            codSegmentoRegistroDetalhe,
            febrabanCnabExclusivo,
            codMovimentoRemessa,
            codDesconto2,
            dataDesconto2,
            valorPercentualDesconto2,
            codDesconto3,
            dataDesconto3,
            valorPercentualDesconto3,
            codMulta,
            dataMulta,
            valorPercentualMulta,
            infoAoPagador,
            mensagem3,
            mensagem4,        
            febrabanCnabExclusivo2,
            codOcoPagador,
            codBancoContaDebito,
            codAgenciaDebito,
            digitoVerificadoAgencia,
            codContaDebito,
            digitoVerificadoConta,
            digitoVerificadoAgenciaConta,
            avisoDebitoAutomatico,
            febrabanCnabExclusivo3
        );

        return retorno
    }
}

module.exports = new CreateDetalheLoteSegmentoR;