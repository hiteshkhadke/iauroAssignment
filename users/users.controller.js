const UsersService = require('./users.service');


let usersController = {

    "createUser": async (req, res) => {
        try {
            let result = await UsersService.createUser(req.body);
            res.json({
                status: true,
                message: 'user Created Successfully',
                data: result
            });
        } catch (error) {
            res.json({
                status: false,
                message: error.message,
            });
        }

    },

    "singInUser": async (req, res) => {
        try {
            let result = await UsersService.singInUser(req.body);
            res.json({
                status: true,
                message: 'sign in Successfully',
                data: result
            });
        } catch (error) {
            res.json({
                status: false,
                message: error.message,
            });
        }

    },

    "updateUser": async (req, res) => {
        try {
            if(req.body.loginRoleType == 'admin'){

                let result = await UsersService.updateUser(req.body);
                res.json({
                    status: true,
                    message: 'update in Successfully',
                    data: result
                });
            } else {
                throw new Error('you dont have update permission ')
            }
        } catch (error) {
            res.json({
                status: false,
                message: error.message,
            });
        }

    },

    "deleteUser": async (req, res) => {
        try {
            if(req.body.loginRoleType == 'admin'){

                let result = await UsersService.deleteUser(req.body);
                res.json({
                    status: true,
                    message: 'delete in Successfully',
                    data: result
                });
            } else {
                throw new Error('you dont have delete permission ')
            }
        } catch (error) {
            res.json({
                status: false,
                message: error.message,
            });
        }

    },

}

module.exports = usersController;