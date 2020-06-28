class CreateDetalheLoteSegmentoQ {
    run() {
        const detalheLoteSegmentoQ = ''

        const obj = {
            codigoBanco: '104',
            loteServicoHeaderArquivo: '0001',
            tipoRegistro: '3',
            sequencialRegistroLote: '1'.padEnd(5, '0'),
            codSegmentoRegistroDetalhe: 'Q',
            febrabanCnabExclusivo: ' ',
            codMovimentoRemessa: '01',
            tipoInscricao: '1',
            numeroInscricao: '02934888249'.padStart(15, '0'), 
            nomePagador: 'MATEUS NOME TESTE'.padEnd(40, ' '),
            ruaPagador: 'RUA DOUTOR TESTE 105'.padEnd(40, ' '),
            bairroPagador: 'CAPITAO TESTE'.padEnd(15, ' '),
            prefixoCep: '96450',
            suficoCep: '000',
            cidadePagador: 'DOM TESTE'.padEnd(15, ' '),
            ufPagador: 'RS',
            tipoInscricaoAvalista: '0',
            nrInscricaoAvalista: '0'.padStart(15, '0'),
            nomeAvalista: ''.padEnd(40, ' '),
            codBancoCorrespondente: '0'.padStart(3, '0'),
            nossoNumeroCorrespondente: ''.padStart(20, ' '),
            febrabanCnabExclusivo2: ''.padStart(8, ' '),
        }

        const retorno = detalheLoteSegmentoQ.concat(  
            obj.codigoBanco,
            obj.loteServicoHeaderArquivo,
            obj.tipoRegistro,
            obj.sequencialRegistroLote,
            obj.codSegmentoRegistroDetalhe,
            obj.febrabanCnabExclusivo,
            obj.codMovimentoRemessa,
            obj.tipoInscricao,
            obj.numeroInscricao,
            obj.nomePagador,
            obj.ruaPagador,
            obj.bairroPagador,
            obj.prefixoCep,
            obj.suficoCep,
            obj.cidadePagador,
            obj.ufPagador,
            obj.tipoInscricaoAvalista,
            obj.nrInscricaoAvalista,
            obj.nomeAvalista,
            obj.codBancoCorrespondente,
            obj.nossoNumeroCorrespondente,
            obj.febrabanCnabExclusivo2
        );

        return retorno
    }
}

module.exports = new CreateDetalheLoteSegmentoQ();