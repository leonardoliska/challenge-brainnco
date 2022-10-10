import { useEffect, useState } from "react";
import { ReactComponent as LotoLogo } from "../../assets/lotologo.svg";
import { Select } from "../../components/Select";
import { ILottery, ILotteryConcourse } from "../../interfaces";
import { endpoint } from "../../utils";
import { Container, InfosContainer, ResultsContainer } from "./styles";

export function Home() {
  const [lotteryData, setLotteryData] = useState<ILottery[]>([]);
  const [selectedLottery, setSelectedLottery] = useState<ILottery>(
    lotteryData[0]
  );

  useEffect(() => {
    Promise.all([
      fetch(`${endpoint}/loterias`),
      fetch(`${endpoint}/loterias-concursos`),
    ])
      .then(([lot, lotcon]) => Promise.all([lot.json(), lotcon.json()]))
      .then(([lot, lotcon]) => {
        lot.forEach((lottery: ILottery, i: number) => {
          lot[i].concourseId = lotcon.find(
            (lotteryConcourse: ILotteryConcourse) =>
              lottery.id === lotteryConcourse.loteriaId
          ).concursoId;
        });

        setLotteryData(lot);
        setSelectedLottery(lot[0]);
      });
  }, []);

  const isLoading = !lotteryData.length;

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <Container>
      <InfosContainer>
        <Select
          lotteryData={lotteryData}
          selectedLottery={selectedLottery}
          setSelectedLottery={setSelectedLottery}
        />
        <div>
          <LotoLogo />
          <h1>{selectedLottery?.nome.toUpperCase()}</h1>
        </div>
        <span>CONCURSO N. {selectedLottery?.concourseId}</span>
        <span>{selectedLottery?.concourse?.data}</span>
      </InfosContainer>

      <ResultsContainer>
        <ul>
          {selectedLottery?.concourse?.numeros.map((number, i) => (
            <li key={i}>{number}</li>
          ))}
        </ul>
        <p>
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a CAIXA.
        </p>
      </ResultsContainer>
    </Container>
  );
}
