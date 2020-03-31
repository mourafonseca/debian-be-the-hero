const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const {id} = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first(); // como é apenas 1 ong por vez ele nao retorna um array, mas sim um unico resultado.
        if (!ong){ // ! negacao
            return response.status(400).json({error: 'No ONG Found with this ID'})
        }

        return response.json(ong);
    }
}