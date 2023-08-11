import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import OrderModel from '../../../src/database/models/order.model';
import UserModel from '../../../src/database/models/user.model';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testa se é possível criar um novo pedido', async function () {
    const mockResult = OrderModel.build({ userId: 1 });
    const mockFindOne = UserModel.build({id: 1, username: 'Helga', vocation: 'Curandeira', level: 9, password: '$2a$10$YqACPgRkmToGalvwenigLuYjwCF9H2rkhCX3DuwIB9QoUr5hFxBGW'})
    sinon.stub(OrderModel, 'create').resolves(mockResult);
    sinon.stub(jwt, 'verify').resolves()
    sinon.stub(ProductModel, 'update').resolves([1])
    sinon.stub(bcrypt, 'compareSync').returns(true)
    sinon.stub(UserModel, 'findOne').resolves(mockFindOne)
    const Response = await chai.request(app).post('/orders').send({userId: 1, productIds: [1, 2]}).set('Authorization', '123456');
    
    expect(Response.status).to.equal(201);
  });
});
