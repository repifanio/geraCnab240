const { format } = require('date-fns')

class CreateHeaderFile {
    run() {
        const headerFile = '';

        const codigoBanco = '104' // Caixa Econômica Federal
        const loteServicoHeaderArquivo = '0000' // Default para header do arquivo
        const tipoRegistro = '0' // Default para header do arquivo
        const febrabanCnabExclusivo = ''.padStart(9, ' ') // Código utilizado pela febraban
        const tipoInscricaoEmpresa = '2' // Tipo 2 é CNPJ
        const nrInscricaoEmpresa = '74828799000145' // Nr do cnpj da empresa
        const codigoConvenioBanco = '11111111111111111111'.padStart(20, ' ') // Código do convênio banco-empresa
        const codAgencia = '8572'.padStart(5,'0') // Número da agencia
        const digitoVerificadorAgencia = '9' // Digito verificador da agencia
        const nrContaBancaria = '05684'.padStart(12, '0') // Número da conta
        const digitoVerificadorConta = '7' // Digito verificador da conta
        const digitoVerificadorAgenciaConta = '9' // Digito verificador da agencia e conta
        const nomeEmpresa = 'Empresa de teste de CNAB 240'.padStart(30, ' ').substr(0, 30) // Nome da empresa
        const nomeBanco = 'Caixa Economica federal'.padStart(30, ' ').substr(0, 30) // Nome do banco
        const febrabanCnabExclusivo2 = ''.padStart(10, ' ') // Código utilizado pela febraban
        const codRemessaRetorno = '1' // Código que identifica se é remessa ou retorno. 1 p/ remessa
        const dataGeracaoArquivo = format(new Date(), 'ddMMyyyy') // Data da geração do arquivo
        const horaGeracaoArquivo = format(new Date(), 'HHmmss') // Hora da geração do arquivo
        const sequencialArquivo = '1'.padStart(6, '0') // Sequencial único do arquivo
        const nrVersaoLayout = '103' // Numero de layout. Fixo 103    
        const densidadeGravacaoArquivo = '1600'.padStart(5, '0') // Densidade de gravação. Verificar essa info
        const observacaoParaBanco = ''.padStart(20, ' ')
        const observacaoParaEmpresa = 'Observação da empresa para banco'.padStart(20, ' ').substr(0, 20)
        const febrabanCnabExclusivo3 = ''.padStart(29, ' ') // Código utilizado pela febraban
        
        const retorno = headerFile.concat(
            codigoBanco,
            loteServicoHeaderArquivo,
            tipoRegistro,
            febrabanCnabExclusivo,
            tipoInscricaoEmpresa,
            nrInscricaoEmpresa,
            codigoConvenioBanco,
            codAgencia,
            digitoVerificadorAgencia,
            nrContaBancaria,
            digitoVerificadorConta,
            digitoVerificadorAgenciaConta,
            nomeEmpresa,
            nomeBanco,
            febrabanCnabExclusivo2,
            codRemessaRetorno,
            dataGeracaoArquivo,
            horaGeracaoArquivo,
            sequencialArquivo, 
            nrVersaoLayout,
            densidadeGravacaoArquivo,
            observacaoParaBanco,
            observacaoParaEmpresa,
            febrabanCnabExclusivo3
        )

        return retorno
    }
}

module.exports = new CreateHeaderFile();