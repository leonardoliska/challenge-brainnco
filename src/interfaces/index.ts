export interface ILottery {
  id: number;
  nome: string;
  concourseId?: number;
  concourse?: IConcourse;
}

export interface ILotteryConcourse {
  loteriaId: number;
  concursoId: number;
}

export interface IConcourse {
  id: string;
  loteria: number;
  numeros: string[];
  data: string;
}
