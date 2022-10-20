import { Container } from "./styles";

interface INumber {
  number: number;
}

export function Number({ number }: INumber) {
  return <Container>{number}</Container>;
}
