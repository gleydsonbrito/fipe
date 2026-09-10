export interface OpcaoFipe {
  codigo: string,
  nome: string
}

export type Marca = OpcaoFipe
export type Modelo = OpcaoFipe
export type Ano = OpcaoFipe

export interface RepostaModeloFipe {
  modelos: Modelo[],
  anos: Ano[]
}

export interface PrecoFipe {
  TipoVeiculo: number,
  Valor: string,
  Marca: string,
  Modelo: string,
  AnoModelo: number,
  Combustivel: string,
  CodigoFipe: string,
  MesReferencia: string,
  SiglaCombustivel: string
}
