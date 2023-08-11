import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import OrderModel from '../../../src/database/models/order.model';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testa se é possível criar um novo pedido', async function () {

    sinon.stub(OrderModel, 'findAll').resolves([]);
    const Response = await chai.request(app).get('/orders').send()
    
    expect(Response.status).to.equal(200);
  });
});
