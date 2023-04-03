const servicios = require('../service/service.js');

exports.getTabla = (request, response) => {
  servicios.getTabla((error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results);
  });
};

exports.getWalcl = (request, response) => {
  servicios.getWalcl((error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results);
  });
};

exports.getDate = (request, response) => {
  servicios.getDate((error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results);
  });
};

exports.postInsert = (request, response) => {
  const { date, walcl } = request.body;
  servicios.postInsert(date, walcl, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`Valor insertado: ${date}, ${walcl}`);
  });
};