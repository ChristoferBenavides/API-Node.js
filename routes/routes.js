module.exports = function (app) {
    
    var walclController = require ('../controller/WALCL_controller.js');

    app.route('/tabla').get (walclController.getTabla); 
    app.route('/walcl').get (walclController.getWalcl);
    app.route('/date').get (walclController.getDate);
    app.route('/insert').post(walclController.postInsert);
    

    



}