export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 💼</em>
      </p>
    );

  const numItems = items.length;
  const packed = items.filter(item => item.packed).length;
  const packedPerc = Math.round((packed / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPerc === 100
          ? "You got everything! Ready To Go 🚢🌴"
          : `You have ${numItems} items on your list, and you already packed ${packed} (
      ${packedPerc}%)`}
      </em>
    </footer>
  );
}
