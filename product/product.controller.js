const ProductService = require('./product.service');


let usersController = {

    "createProduct": async (req, res) => {
        try {
            let result = await ProductService.createProduct(req.body);
            res.json({
                status: true,
                message: 'product Created Successfully',
                data: result
            });
        } catch (error) {
            res.json({
                status: false,
                message: error.message,
            });
        }

    },

    "readProduct": async (req, res) => {
        try {
            let result = await ProductService.readProduct(req.params.id);
            res.json({ status: true, data: result });
        } catch (error) {
            res.json({
                status: false,
                message: error.message,
            });
        }

    },

    "updateProduct": async (req, res) => {
        try {
            if(req.body.loginRoleType == 'admin'){

                let result = await ProductService.updateProduct(req.body);
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

    "deleteProduct": async (req, res) => {
        try {
            if(req.body.loginRoleType == 'admin'){

                let result = await ProductService.deleteProduct(req.body);
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