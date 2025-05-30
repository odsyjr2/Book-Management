function BookCard({ title, imageUrl }) {
  return (
    <div className="bg-white shadow-md rounded p-4 w-48 text-center">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-60 object-cover rounded mb-2"
      />
      <h3 className="text-md font-semibold">{title}</h3>
    </div>
  );
}

export default BookCard;
