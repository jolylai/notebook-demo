export const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, (i + 1) * size)
  );

export const getMonthData = (
  year = new Date().getFullYear(),
  month = new Date().getMonth() + 1
) => {
  const weekOfFirstDate = new Date(year, month - 1, 1).getDay();
  const lastDateOfLastMonth = new Date(year, month - 1, 0).getDate();
  const lastDateOfthisMonth = new Date(year, month, 0).getDate();
  const lastMonthData = Array.from(
    { length: weekOfFirstDate },
    (_, i) => lastDateOfLastMonth - weekOfFirstDate + 1 + i
  );
  const thisMonthData = Array.from({ length: lastDateOfthisMonth }, (_, i) => i + 1);
  const nextMonthData = Array.from(
    { length: 35 - lastMonthData.length - thisMonthData.length },
    (_, i) => i + 1
  );
  return chunk([].concat(lastMonthData, thisMonthData, nextMonthData), 7);
};
