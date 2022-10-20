export const endpoint = "https://brainn-api-loterias.herokuapp.com/api/v1";

export const formatDate = (date: Date) => {
  const [day, month, year] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
  ];

  return `${day}/${month}/${year}`;
};
