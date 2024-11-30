export const shuffle = (array: string[]) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const roll = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[roll];
    arr[roll] = temp;
  }
  return arr;
};
