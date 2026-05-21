

const TABELA = {
	BASE_CALC: {
		faixas: [
		 { ate: 15, alicota: 0.01 },
		 { ate: 30, alicota: 0.03 },
		],
	},
	REFERENCIA : 20/100,
};

const CAMPOS_CUSTO_BURGCALC = [
  'pao',
  'carne',
  'queijo',
  'molho',
  'salada',
  'embalagem',
  'custoAdicional',
];

function calcularArea(base,altura) {
	
  if (base <= 0) throw new Error('Base com valor errado');
  if (altura <=0) throw new Error('Altura com valor errado');
  let resultado = 0;
  resultado = base * altura;
  return resultado.toFixed(2);

}

function calcular(dados) {
  console.log(dados);	
  const {altura = 0, largura = 0 ,} = dados;	 
  if (altura <= 0) throw new Error('Base com valor errado');
  if (largura <=0) throw new Error('Altura com valor errado');
  let resultado = 0;
  resultado = largura * altura;
  return resultado.toFixed(2);

}

function converterNumero(valor, campo) {
  if (typeof valor === 'string' && valor.trim() === '') {
    throw new Error(`${campo} deve ser um numero valido`);
  }

  const numero = Number(valor);

  if (!Number.isFinite(numero)) {
    throw new Error(`${campo} deve ser um numero valido`);
  }

  return numero;
}

function arredondarMoeda(valor) {
  return Number(valor.toFixed(2));
}

function calcularBurgcalc(dados) {
  if (!dados || typeof dados !== 'object' || Array.isArray(dados)) {
    throw new Error('Dados invalidos para BURGCALC');
  }

  const custos = CAMPOS_CUSTO_BURGCALC.reduce((total, campo) => {
    const valor = converterNumero(dados[campo], campo);

    if (valor < 0) {
      throw new Error(`${campo} nao pode ser negativo`);
    }

    return total + valor;
  }, 0);

  const quantidade = converterNumero(dados.quantidade, 'quantidade');
  const margemLucro = converterNumero(dados.margemLucro, 'margemLucro');

  if (quantidade <= 0) {
    throw new Error('quantidade deve ser maior que zero');
  }

  if (margemLucro < 0) {
    throw new Error('margemLucro nao pode ser negativa');
  }

  const custoTotal = custos;
  const custoUnitario = custoTotal / quantidade;
  const precoVendaSugerido = custoUnitario * (1 + (margemLucro / 100));
  const lucroEstimadoPorUnidade = precoVendaSugerido - custoUnitario;

  return {
    custoTotal: arredondarMoeda(custoTotal),
    custoUnitario: arredondarMoeda(custoUnitario),
    precoVendaSugerido: arredondarMoeda(precoVendaSugerido),
    lucroEstimadoPorUnidade: arredondarMoeda(lucroEstimadoPorUnidade),
  };
}


module.exports = {
	calcularArea,
	TABELA,
	calcular,
	calcularBurgcalc,
};
