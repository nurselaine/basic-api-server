'use strict';

class ModelInterface{

  constructor(model){
    this.model = model;
  }

  async create(json){
    try{
      const record = await this.model.create(json);
      return record;
    } catch (error) {
      console.error(error);
      return error;
    }
  }


}


module.exports = ModelInterface;
