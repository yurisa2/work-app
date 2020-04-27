const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response){
        const usersEmployee = await connection('users_employee').select('*');
        return response.json(usersEmployee);
    },


    async create(request, response){
        const { name, username, password, rg, cpf, email, telephone, city, uf, street, zipcode, description} = request.body;
        const id = crypto.randomBytes(8).toString('HEX');
        await connection('users_employee').insert({
            id,
            name,
            username,
            password,
            rg,
            cpf,
            email,
            telephone,
            city,
            uf,
            street,
            zipcode,
            description,
        })
        return response.json( { id } );
    }
};