const { format } = require('date-fns')

class CreateHeaderFile {
    run() {
        const headerFile = '';

        const obj = {
            codigoBanco: '104',
            loteServicoHeaderArquivo: '0000',
            tipoRegistro: '0',
            febrabanCnabExclusivo: ''.padStart(9, ' '),
            tipoInscricaoEmpresa: '2',
            nrInscricaoEmpresa: '74828799000145',
            codigoConvenioBanco: ''.padStart(20, ' '),
            codAgencia: '8572'.padStart(5,'0'),
            digitoVerificadorAgencia: ''.padStart(1, ' '),
            nrContaBancaria: '05684'.padStart(12, '0'),
            digitoVerificadorConta: '7',
            digitoVerificadorAgenciaConta: ''.padStart(1, ' '),
            nomeEmpresa: 'Empresa de teste de CNAB 240'.substr(0, 30).padEnd(30, ' '),
            nomeBanco: 'Caixa Economica federal'.substr(0, 30).padEnd(30, ' '),
            febrabanCnabExclusivo2: ''.padStart(10, ' '),
            codRemessaRetorno: '1',
            dataGeracaoArquivo: format(new Date(), 'ddMMyyyy'),
            horaGeracaoArquivo: format(new Date(), 'HHmmss'),
            sequencialArquivo: '1'.padStart(6, '0'),
            nrVersaoLayout: '103',
            densidadeGravacaoArquivo: '1600'.padStart(5, '0'),
            observacaoParaBanco: ''.padStart(20, ' '),
            observacaoParaEmpresa: ''.substr(0, 20).padEnd(20, ' '),
            febrabanCnabExclusivo3: ''.padStart(29, ' '),
        }
        
        const retorno = headerFile.concat(
            obj.codigoBanco,
            obj.loteServicoHeaderArquivo,
            obj.tipoRegistro,
            obj.febrabanCnabExclusivo,
            obj.tipoInscricaoEmpresa,
            obj.nrInscricaoEmpresa,
            obj.codigoConvenioBanco,
            obj.codAgencia,
            obj.digitoVerificadorAgencia,
            obj.nrContaBancaria,
            obj.digitoVerificadorConta,
            obj.digitoVerificadorAgenciaConta,
            obj.nomeEmpresa,
            obj.nomeBanco,
            obj.febrabanCnabExclusivo2,
            obj.codRemessaRetorno,
            obj.dataGeracaoArquivo,
            obj.horaGeracaoArquivo,
            obj.sequencialArquivo, 
            obj.nrVersaoLayout,
            obj.densidadeGravacaoArquivo,
            obj.observacaoParaBanco,
            obj.observacaoParaEmpresa,
            obj.febrabanCnabExclusivo3
        )

        return retorno
    }
}

module.exports = new CreateHeaderFile();