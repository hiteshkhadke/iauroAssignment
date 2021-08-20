const user = require('../users/users.model');
const { Op } = require("sequelize");

let UserService = {
    'createUser': async (data) => {
        try {
            let roleTypeResult = await user.findOne({
                raw: true,
                where: {
                    role_type: data.role_type
                }
            });
            if (roleTypeResult) {
                throw new Error('Admin is already exist.');
            }
            let result = await user.create(data);
            return result;
        } catch (err) {
            throw new Error(err);
        }
    },

    'singInUser': async (data) => {
        try {
            let result = await user.findOne({
                raw: true,
                where: {
                    [Op.and]: [{ user_name: data.user_name }, { password: data.password }], 
                }
            });
            if (result) {
                return result;
            } else {
                throw new Error('user name or password wrong.');
            }
        } catch (err) {
            throw new Error(err);
        }
    },

    'updateUser': async (data) => {
        try {
            
            const result = await user.update(data.updateObj, {
                where: { id: data.updateObj.id }
              });
            return result;
        } catch (err) {
            throw new Error(err);
        }
    },

    'deleteUser': async (data) => {
        try {
            
            const result = await user.update(
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