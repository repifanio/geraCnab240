class CreateDetalheLoteSegmentoQ {
    run() {
        const detalheLoteSegmentoQ = ''

        const codigoBanco = '104' // Caixa Econômica Federal
        const loteServicoHeaderArquivo = '0001' // Sequencial para o arquivo
        const tipoRegistro = '3' // Default para header do arquivo
        const sequencialRegistroLote = '1'.padEnd(5, '0') // Sequencial dentro do lote. Sempre começando com 1
        const codSegmentoRegistroDetalhe = 'Q' //Default
        const febrabanCnabExclusivo = ' ' // Uso exclusivo da febraban
        const codMovimentoRemessa = '01' // Entrada de titulos
        const tipoInscricao = '1' // Pessoa física
        const numeroInscricao = '02934888249'.padStart(15, '0') 
        const nomePagador = 'MATEUS NOME TESTE'.padEnd(40, ' ')
        const ruaPagador = 'RUA DOUTOR TESTE 105'.padEnd(40, ' ')
        const bairroPagador = 'CAPITAO TESTE'.padEnd(15, ' ')
        const prefixoCep = '96450'
        const suficoCep = '000'
        const cidadePagador = 'DOM TESTE'.padEnd(15, ' ')
        const ufPagador = 'RS'
        const tipoInscricaoAvalista = '0'
        const nrInscricaoAvalista = '0'.padStart(15, '0')
        const nomeAvalista = ''.padEnd(40, ' ')
        const codBancoCorrespondente = '0'.padStart(3, '0')
        const nossoNumeroCorrespondente = ''.padStart(20, ' ')
        const febrabanCnabExclusivo2 = ''.padStart(8, ' ')

        const retorno = detalheLoteSegmentoQ.concat(  
            codigoBanco,
            loteServicoHeaderArquivo,
            tipoRegistro,
            sequencialRegistroLote,
            codSegmentoRegistroDetalhe,
            febrabanCnabExclusivo,
            codMovimentoRemessa,
            tipoInscricao,
            numeroInscricao,
            nomePagador,
            ruaPagador,
            bairroPagador,
            prefixoCep,
            suficoCep,
            cidadePagador,
            ufPagador,
            tipoInscricaoAvalista,
            nrInscricaoAvalista,
            nomeAvalista,
            codBancoCorrespondente,
            nossoNumeroCorrespondente,
            febrabanCnabExclusivo2
        );

        return retorno
    }
}

module.exports = new CreateDetalheLoteSegmentoQ();