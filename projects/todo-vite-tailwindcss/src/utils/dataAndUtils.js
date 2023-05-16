const initialStateList = [
  {
    id: 1,
    title: "Go to the gym",
    completed: true,
  },
  {
    id: 2,
    title: "Complete the online English course",
    completed: false,
  },
  {
    id: 3,
    title: "Go to the supermarket",
    completed: false,
  },
  {
    id: 4,
    title: "Pick up groceries",
    completed: true,
  },
  {
    id: 5,
    title: "Complete Web App on frontend mentor",
    completed: false,
  },
];

export default initialStateList;

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export { reorder };
