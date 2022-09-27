import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Salads', 'Drinks'];
  res.send(categories);
});

export default handler;