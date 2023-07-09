function DishBox({ dish }) {
  return (
    <div className="relative aspect-square" key={dish.image}>
      <img className="w-full h-full object-cover" src={`/img/${dish.image}`} alt={dish.type} />
      <div className="absolute bottom-0 left-0 bg-primary-300 w-[120px] py-1 px-2 text-light">
        <span className="capitalize font-inter">{dish.type}</span>.{dish.date}
      </div>
    </div>
  );
}

export default DishBox;
