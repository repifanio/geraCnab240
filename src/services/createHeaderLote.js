const { format } = require('date-fns')
class CreateHeaderLote {
    run() {
        const headerLote = ''

        const codigoBanco = '104' // Caixa Econômica Federal
        const loteServicoHeaderArquivo = '0001' // Default para header do arquivo
        const tipoRegistro = '1' // Default para header do arquivo
        const tipoOperacao = 'R' // Default para boleto bancário
        const tipoServiço = '01' // Default para boleto bancário
        const febrabanCnabExclusivo = ''.padStart(2, ' ') // Código utilizado pela febraban
        const layoutLote = '060' //Default para boleto bancário
        const febrabanCnabExclusivo2 = ''.padStart(1, ' ') // Código utilizado pela febraban
        const tipoInscricaoEmpresa = '2' // Tipo 2 é CNPJ
        const nrInscricaoEmpresa = '74828799000145'.padStart(15, '0') // Nr do cnpj da empresa
        const codigoConvenioBanco = ''.padStart(20, ' ') // Código do convênio banco-empresa
        const codAgencia = '8572'.padStart(5,'0') // Número da agencia
        const digitoVerificadorAgencia = ''.padStart(1, ' ') // Digito verificador da agencia
        const nrContaBancaria = '05684'.padStart(12, '0') // Número da conta
        const digitoVerificadorConta = '7' // Digito verificador da conta
        const digitoVerificadorAgenciaConta = ''.padStart(1, ' ') // Digito verificador da agencia e conta
        const nomeEmpresa = 'Empresa de teste de CNAB 240'.substr(0, 30).padEnd(30, ' ') // Nome da empresa
        const mensagem1 = ''.padEnd(40, ' ')
        const mensagem2 = ''.padEnd(40, ' ')
        const nrRemessaRetorno = '1'.padStart(8, '0')
        const dataGeracaoArquivo = format(new Date(), 'ddMMyyyy') // Data da geração do arquivo
        const dataCredito = '0'.padStart(8, '0')
        const febrabanCnabExclusivo3 = ''.padStart(33, ' ') // Código utilizado pela febraban

        const retorno = headerLote.concat(  
            codigoBanco,
            loteServicoHeaderArquivo,
            tipoRegistro,
            tipoOperacao,
            tipoServiço,
            febrabanCnabExclusivo,
            layoutLote,
            febrabanCnabExclusivo2,
            tipoInscricaoEmpresa,
            nrInscricaoEmpresa,
            codigoConvenioBanco,
            codAgencia,
            digitoVerificadorAgencia,
            nrContaBancaria,
            digitoVerificadorConta,
            digitoVerificadorAgenciaConta,
            nomeEmpresa,
            mensagem1,
            mensagem2,
            nrRemessaRetorno,
            dataGeracaoArquivo,
            dataCredito,
            febrabanCnabExclusivo3
        );

        return retorno
    }
}

module.exports = new CreateHeaderLote();