const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response){
        const users = await connection('users').select('*');
        return response.json(users);
    },

    async create(request, response){
        const { name, username, password, rg, cpf, email, telephone, city, street, zipcode, uf} = request.body;
        const id = crypto.randomBytes(8).toString('HEX');
        await connection('users').insert({
            id,
            name,
            username,
            password,
            cpf,
            rg,
            email,
            telephone,
            city,
            street,
            zipcode,
            uf,
        })
        return response.json( { id } );
    }
};