import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Testa se é possível fazer o login', async function () {
    const mockFindOnde = UserModel.build({id: 1, username: 'Helga', vocation: 'Curandeira', level: 9, password: '$2a$10$YqACPgRkmToGalvwenigLuYjwCF9H2rkhCX3DuwIB9QoUr5hFxBGW'})
    sinon.stub(UserModel, 'findOne').resolves(mockFindOnde);
    const Response = await chai.request(app).post('/login').send({username: 'Helga', password: 'valquíria'});
    
    expect(Response).to.have.status(200);
  });
  it('Testa se é possível fazer o login com senha incorreta', async function () {
    const mockFindOne = UserModel.build({id: 1, username: 'Helga', vocation: 'Curandeira', level: 9, password: 'ruan'})
    sinon.stub(UserModel, 'findOne').resolves(mockFindOne);
    const Response = await chai.request(app).post('/login').send({username: 'Helga', password: 'valquíria'});
    
    expect(Response).to.have.status(401);
  });
});
