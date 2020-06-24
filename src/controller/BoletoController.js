const headerFile = require('../services/createHeaderFile')
const headerLote = require('../services/createHeaderLote')


class BoletoController {

    createCnab240(req, res){
        const lineHeaderFile = headerFile.run();
        const lineHeaderLote = headerLote.run();

        const retorno = {
            header_file: lineHeaderFile,
            header_lote: lineHeaderLote
        }

        return res.json(retorno)
    }

}

module.exports = new BoletoController()