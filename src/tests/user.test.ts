import request from 'supertest';
import app from '../app';
import AppDataSource from '../data-source';

describe('User routes', () => {
  beforeAll(async () => {
    process.env.DATABASE_URL = 'sqlite://test';
    await AppDataSource.initialize();
  });

  afterAll(async () => {
    await AppDataSource.destroy();
  });

  test('POST /user should create a user', async () => {
    const response = await request(app).post('/user').send({
      name: 'Test',
      email: 'test@example.com',
      cpf: '12345678901',
      password: '123456',
      phone: '11999999999',
      description: 'test user',
      birthday: '1990-01-01',
      addresses: {
        cep: '12345678',
        street: 'Rua Teste',
        city: 'Cidade',
        number: '123',
        complement: 'Apto 1',
        state: 'ST'
      }
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).not.toHaveProperty('password');
  });
});