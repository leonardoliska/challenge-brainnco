import { useEffect, useState } from "react";
import { ILottery } from "../../interfaces";
import { endpoint } from "../../utils";

interface SelectProps {
  lotteryData: ILottery[];
  selectedLottery: ILottery;
  setSelectedLottery: React.Dispatch<React.SetStateAction<ILottery>>;
}

export const Select = ({
  lotteryData,
  selectedLottery,
  setSelectedLottery,
}: SelectProps) => {
  useEffect(() => {
    handleSelect(selectedLottery.nome);
  }, []);

  const handleSelect = (lotteryName: string) => {
    const lottery = lotteryData.find((lot) => lot.nome === lotteryName);
    if (lottery) {
      fetch(`${endpoint}/concursos/${lottery.concourseId}`)
        .then((res) => res.json())
        .then((data) => {
          setSelectedLottery({ ...lottery, concourse: data });
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <select onChange={(e) => handleSelect(e.target.value)}>
      {lotteryData?.map(({ id, nome }) => (
        <option key={id} value={nome}>
          {nome.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
