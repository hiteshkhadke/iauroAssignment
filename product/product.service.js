const product = require('../product/product.model');
const { Op } = require("sequelize");

let UserService = {
    'createProduct': async (data) => {
        try {
            
            let result = await product.create(data);
            return result;
        } catch (err) {
            throw new Error(err);
        }
    },

    'readProduct': async (id) => {
        try {
            let result = await product.findAll({
                raw: true,
                where: {
                     created_by:id
                }
            });
            return result;
        } catch (err) {
            throw new Error(err);
        }
    },

    'updateProduct': async (data) => {
        try {
            
            const result = await product.update(data.updateObj, {
                where: { id: data.updateObj.id }
              });
            return result;
        } catch (err) {
            throw new Error(err);
        }
    },

    'deleteProduct': async (data) => {
        try {
            
            const result = await product.update(
                { is_deleted: 1 },
                {where: { id: data.id }
              });
            return result;
        } catch (err) {
            throw new Error(err);
        }
    },
}

module.exports = UserService;