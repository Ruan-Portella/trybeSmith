import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
    it('Testa se é possível cadastrar um produto com sucesso', async function () {
      const mockResult = ProductModel.build({ name: 'Produto Teste', price: '100', orderId: 4 });
      sinon.stub(ProductModel, 'create').resolves(mockResult);
      const Response = await chai.request(app).post('/products').send({ name: 'Produto Teste', price: '100', orderId: 4 });
      expect(Response.status).to.equal(201);
     })
    })