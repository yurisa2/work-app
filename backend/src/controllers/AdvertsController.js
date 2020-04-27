const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response){
        const adverts = await connection('adverts').select('*');
        return response.json(adverts);
    },

    async create(request, response){
        const { name, description, telephone, city, uf} = request.body;
        const id = crypto.randomBytes(5).toString('HEX');
        const employee_id = request.headers.authorizationemployee;
        const category_id = request.headers.authorizationcategory;

        await connection('adverts').insert({
           id,
           name,
           description,
           telephone,
           city,
           uf,
           employee_id,
           category_id,
        });
    },

    async delete(request, response){
        const { id } = request.params;
        const employee_id = request.headers.authorizationemployee;

        const adverts = await connection('adverts')
        .where(`id`, id)
        .select('employee_id')
        .first();

        if(adverts.employee_id != employee_id){
            return response.status(401).json( { Error: 'Operation not permitted.'} );
        }
        
        await connection('adverts').where('id', id).delete();
        return response.status(204).send();
    }
};