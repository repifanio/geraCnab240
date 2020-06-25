const headerFile = require('../services/createHeaderFile')
const headerLote = require('../services/createHeaderLote')
const detalheLoteSgtoP = require('../services/createDetalheLoteSegmentoP')

class BoletoController {

    createCnab240(req, res){
        const lineHeaderFile = headerFile.run()
        const lineHeaderLote = headerLote.run()
        const lineDetalheLoteSgtoP = detalheLoteSgtoP.run()

        const retorno = {
            header_file: lineHeaderFile,
            header_lote: lineHeaderLote,
            detalhe_segmento_p: lineDetalheLoteSgtoP
        }

        return res.json(retorno)
    }

}

module.exports = new BoletoController()