const handleClick = () => {
  console.log("Button Clicked")
}
const Button = ({ label, iconUrl }) => {
  return (
    <button
      className=" bg-coral-red border-coral-red text-white px-7 py-4 rounded-full justify-center items-center gap-2 flex flex-row text-lg leading-none"
      onClick={handleClick}
    >
      {label}
      <img
        src={iconUrl}
        height={15}
        width={15}
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  )
}

export default Button