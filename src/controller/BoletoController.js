const headerFile = require('../services/createHeaderFile')
const headerLote = require('../services/createHeaderLote')
const detalheLoteSgtoP = require('../services/createDetalheLoteSegmentoP')
const detalheLoteSgtoQ = require('../services/createDetalheLoteSegmentoQ')
const detalheLoteSgtoR = require('../services/createDetalheLoteSegmentoR')
const trailerLote = require('../services/createtrailerLote')

class BoletoController {

    createCnab240(req, res){
        const lineHeaderFile = headerFile.run()
        const lineHeaderLote = headerLote.run()
        const lineDetalheLoteSgtoP = detalheLoteSgtoP.run()
        const lineDetalheLoteSgtoQ = detalheLoteSgtoQ.run()
        const lineDetalheLoteSgtoR = detalheLoteSgtoR.run()
        const lineTrailerLote = trailerLote.run()

        const retorno = {
            header_file: lineHeaderFile,
            header_lote: lineHeaderLote,
            detalhe_segmento_p: lineDetalheLoteSgtoP,
            detalhe_segmento_q: lineDetalheLoteSgtoQ,
            detalhe_segmento_R: lineDetalheLoteSgtoR,
            trailer_lote: lineTrailerLote,
        }

        return res.json(retorno)
    }

}

module.exports = new BoletoController()