const { format } = require('date-fns')
class CreateHeaderLote {
    run() {
        const headerLote = ''

        const obj = {
            codigoBanco: '104',
            loteServicoHeaderArquivo: '0001',
            tipoRegistro: '1',
            tipoOperacao: 'R',
            tipoServiço: '01',
            febrabanCnabExclusivo: ''.padStart(2, ' '),
            layoutLote: '060',
            febrabanCnabExclusivo2: ''.padStart(1, ' '),
            tipoInscricaoEmpresa: '2',
            nrInscricaoEmpresa: '74828799000145'.padStart(15, '0'),
            codigoConvenioBanco: ''.padStart(20, ' '),
            codAgencia: '8572'.padStart(5,'0'),
            digitoVerificadorAgencia: ''.padStart(1, ' '),
            nrContaBancaria: '05684'.padStart(12, '0'),
            digitoVerificadorConta: '7',
            digitoVerificadorAgenciaConta: ''.padStart(1, ' '),
            nomeEmpresa: 'Empresa de teste de CNAB 240'.substr(0, 30).padEnd(30, ' '),
            mensagem1: ''.padEnd(40, ' '),
            mensagem2: ''.padEnd(40, ' '),
            nrRemessaRetorno: '1'.padStart(8, '0'),
            dataGeracaoArquivo: format(new Date(), 'ddMMyyyy'),
            dataCredito: '0'.padStart(8, '0'),
            febrabanCnabExclusivo3: ''.padStart(33, ' '),
        }

        const retorno = headerLote.concat(  
            obj.codigoBanco,
            obj.loteServicoHeaderArquivo,
            obj.tipoRegistro,
            obj.tipoOperacao,
            obj.tipoServiço,
            obj.febrabanCnabExclusivo,
            obj.layoutLote,
            obj.febrabanCnabExclusivo2,
            obj.tipoInscricaoEmpresa,
            obj.nrInscricaoEmpresa,
            obj.codigoConvenioBanco,
            obj.codAgencia,
            obj.digitoVerificadorAgencia,
            obj.nrContaBancaria,
            obj.digitoVerificadorConta,
            obj.digitoVerificadorAgenciaConta,
            obj.nomeEmpresa,
            obj.mensagem1,
            obj.mensagem2,
            obj.nrRemessaRetorno,
            obj.dataGeracaoArquivo,
            obj.dataCredito,
            obj.febrabanCnabExclusivo3
        );

        return retorno
    }
}

module.exports = new CreateHeaderLote();