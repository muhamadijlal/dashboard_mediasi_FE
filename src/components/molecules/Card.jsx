function Card({ children }) {
  return (
    <div className="mb-10 w-full rounded-lg bg-white px-4 py-6 shadow-[0px_5px_15px_-5px_rgba(0,_0,_0,_0.1)]">
      {children}
    </div>
  );
}

export default Card;
