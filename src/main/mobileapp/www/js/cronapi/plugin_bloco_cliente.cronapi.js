(function() {
  'use strict';

  this.cronapi = this.cronapi || {};

   /**
   * @categoryName Minhas Funções
   */
  this.cronapi.myfunctions = this.cronapi.myfunctions || {};
  
  /**
   * @type function
   * @name Exemplo Blco de Programação
   * @description Descrição da Função
   * @multilayer false
   * @param {ObjectType.STRING} input Param Description
   * @returns {ObjectType.STRING}
   */
  this.cronapi.myfunctions.Example = function(/** @type {ObjectType.STRING} @description Parâmetro: Descrição do parâmetro */input) {
    return "INPUT" + input;
  };
  

}).bind(window)();