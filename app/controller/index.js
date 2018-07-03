'use strict';

const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {
    this.ctx.body = 'hi, index';
  }
  async template() {
    const arrname = [{ name: 'wellen' }, { name: 'hello world' }];
    // const res = await this.ctx.curl('https://www.easy-mock.com/mock/5b31b7195b00583c51b94987/test1/list', {
    //   dataType: 'json',
    // });
    await this.ctx.render('index.ejs', {
      listdata: arrname,
    });
  }
}

module.exports = IndexController;
