class CreateHeaderLote {
    run() {
        const headerLote = ''

        const codigoBanco = '104' // Caixa Econômica Federal
        const loteServicoHeaderArquivo = '0001' // Default para header do arquivo
        const tipoRegistro = '1' // Default para header do arquivo
        const tipoOperacao = 'I' // Default para boleto bancário
        const tipoServiço = '03' // Default para boleto bancário
        const febrabanCnabExclusivo = ''.padStart(2, ' ') // Código utilizado pela febraban
        const layoutLote = '030' //Default para boleto bancário
        const febrabanCnabExclusivo2 = ''.padStart(1, ' ') // Código utilizado pela febraban
        const tipoInscricaoEmpresa = '2' // Tipo 2 é CNPJ
        const nrInscricaoEmpresa = '74828799000145'.padStart(15, '0') // Nr do cnpj da empresa
        const codigoConvenioBanco = '11111111111111111111'.padStart(20, ' ') // Código do convênio banco-empresa
        const codAgencia = '8572'.padStart(5,'0') // Número da agencia
        const digitoVerificadorAgencia = '9' // Digito verificador da agencia
        const nrContaBancaria = '05684'.padStart(12, '0') // Número da conta
        const digitoVerificadorConta = '7' // Digito verificador da conta
        const digitoVerificadorAgenciaConta = '9' // Digito verificador da agencia e conta
        const nomeEmpresa = 'Empresa de teste de CNAB 240'.padStart(30, ' ').substr(0, 30) // Nome da empresa
        const febrabanCnabExclusivo3 = ''.padStart(137, ' ') // Código utilizado pela febraban

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
            febrabanCnabExclusivo3
        );

        return retorno
    }
}

module.exports = new CreateHeaderLote();