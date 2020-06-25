const { format } = require('date-fns')

class CreateHeaderLote {
    run() {
        const headerLote = ''

        const codigoBanco = '104' // Caixa Econômica Federal
        const loteServicoHeaderArquivo = '0001' // Sequencial para o arquivo
        const tipoRegistro = '3' // Default para header do arquivo
        const sequencialRegistroLote = '1'.padEnd(5, '0') // Sequencial dentro do lote. Sempre começando com 1
        const codSegmentoRegistroDetalhe = 'P' //Default
        const febrabanCnabExclusivo = ' ' // Uso exclusivo da febraban
        const codMovimentoRemessa = '01' // Entrada de titulos
        const codAgencia = '8572'.padStart(5,'0') // Número da agencia
        const digitoVerificadorAgencia = ''.padStart(1, ' ') // Digito verificador da agencia
        const nrContaBancaria = '05684'.padStart(12, '0') // Número da conta
        const digitoVerificadorConta = '7' // Digito verificador da conta
        const digitoVerificadorAgenciaConta = ''.padStart(1, ' ') // Digito verificador da agencia e conta
        const nossoNumero = '777777'.padEnd(20, '0')
        const codCarteira = '1'
        const formaCadastroTituloBanco = '1'
        const tipoDocumento = '1'
        const tipoEmissaoBoletoPgto = '2'
        const tipoDestribuicaoBoletoPgto = '2'
        const nrIdentificacaoBoletoCobranca = '882789'.padStart(15, '0')
        const dtVencimentoTitulo = format(new Date(), 'ddMMyyyy') // Data de vencimento do titulo
        const valorNominalTitulo = '3742.87'.replace('.', '').padStart(15, '0')
        const agenciaCobranca = '0'.padStart(5, '0')
        const digitoVerificadorAgenciaCobranca = ''.padStart(1, ' ')
        const especieTitulo = '03'
        const aceiteTitulo = 'N'
        const dtEmissaoTitulo = format(new Date(), 'ddMMyyyy') // Data de vencimento do titulo
        const codJurosMora = '1'
        const dataJurosMora = ''.padStart(8, '0')
        const jurosMoraPorDia = '0.51'.replace('.', '').padStart(15, 0)
        const codDesconto1 = '0'
        const dataDesconto1 = ''.padStart(8, '0')
        const valorOuPercentualConcedido = '0'.padStart(15, 0)
        const valorIofRecolhido = '0'.padStart(15, 0)
        const valorAbatimento = '0'.padStart(15, 0)
        const identificacaoTituloEmpresa = '0297899805907'.padStart(25, '0')
        const codigoParaProtesto = '3'
        const numeroDiaProtesto = '00'
        const codigoBaixaDevolucao = '1'
        const numeroDiaBaixaDevolucao = '60'.padStart(3, '0')
        const codMoeda = '09'
        const nrContrato = '0'.padStart(10, '0')
        const febrabanCnabExclusivo2 = ' '

        const retorno = headerLote.concat(  
            codigoBanco,
            loteServicoHeaderArquivo,
            tipoRegistro,
            sequencialRegistroLote,
            codSegmentoRegistroDetalhe,
            febrabanCnabExclusivo,
            codMovimentoRemessa,
            codAgencia,
            digitoVerificadorAgencia,
            nrContaBancaria,
            digitoVerificadorConta,
            digitoVerificadorAgenciaConta,
            nossoNumero,
            codCarteira,
            formaCadastroTituloBanco,
            tipoDocumento,
            tipoEmissaoBoletoPgto,
            tipoDestribuicaoBoletoPgto,
            nrIdentificacaoBoletoCobranca,
            dtVencimentoTitulo,
            valorNominalTitulo,
            agenciaCobranca,
            digitoVerificadorAgenciaCobranca,
            especieTitulo,
            aceiteTitulo,
            dtEmissaoTitulo,
            codJurosMora,
            dataJurosMora,
            jurosMoraPorDia,
            codDesconto1,
            dataDesconto1,
            valorOuPercentualConcedido,
            valorIofRecolhido,
            valorAbatimento,
            identificacaoTituloEmpresa,
            codigoParaProtesto,
            numeroDiaProtesto,
            codigoBaixaDevolucao,
            numeroDiaBaixaDevolucao,
            codMoeda,
            nrContrato,
            febrabanCnabExclusivo2
        );

        return retorno
    }
}

module.exports = new CreateHeaderLote();