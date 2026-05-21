const request = require('supertest');
const app = require('../src/app');
const { calcularBurgcalc } = require('../src/funcoes');

const payloadValido = {
  pao: 10,
  carne: 40,
  queijo: 10,
  molho: 5,
  salada: 5,
  embalagem: 8,
  custoAdicional: 2,
  quantidade: 10,
  margemLucro: 30,
};

describe('BURGCALC - calculo unitario', () => {
  test('deve calcular custo total, custo unitario, preco sugerido e lucro por unidade', () => {
    expect(calcularBurgcalc(payloadValido)).toEqual({
      custoTotal: 80,
      custoUnitario: 8,
      precoVendaSugerido: 10.4,
      lucroEstimadoPorUnidade: 2.4,
    });
  });

  test('deve rejeitar quantidade igual ou menor que zero', () => {
    expect(() => calcularBurgcalc({ ...payloadValido, quantidade: 0 })).toThrow('quantidade deve ser maior que zero');
    expect(() => calcularBurgcalc({ ...payloadValido, quantidade: -1 })).toThrow('quantidade deve ser maior que zero');
  });

  test('deve rejeitar entradas invalidas', () => {
    expect(() => calcularBurgcalc({ ...payloadValido, pao: 'abc' })).toThrow('pao deve ser um numero valido');
  });

  test('deve rejeitar margem de lucro negativa', () => {
    expect(() => calcularBurgcalc({ ...payloadValido, margemLucro: -10 })).toThrow('margemLucro nao pode ser negativa');
  });
});

describe('BURGCALC - API', () => {
  test('POST /api/BURGCALC deve retornar dados calculados com payload correto', async () => {
    const res = await request(app).post('/api/BURGCALC').send(payloadValido);

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toEqual({
      custoTotal: 80,
      custoUnitario: 8,
      precoVendaSugerido: 10.4,
      lucroEstimadoPorUnidade: 2.4,
    });
  });

  test('POST /api/BURGCALC deve retornar erro com dados incorretos', async () => {
    const res = await request(app)
      .post('/api/BURGCALC')
      .send({ ...payloadValido, quantidade: 0 });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
    expect(res.body.error).toBe('quantidade deve ser maior que zero');
  });
});
