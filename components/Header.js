import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 py-2 flex items-center shadow-md bg-white">
      <Button
        color="gray"
        buttonType="outline"
        size="regular"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="h-20 w-20 border-0"
      >
        <Icon name="menu" size="3xl" />
      </Button>
      <Icon name="description" size="5xl" color="blue" />
      <h1 className="ml-2 text-gray-700 text-2xl">Docs</h1>

      <div className="flex flex-grow items-center px-5 py-2 mx-5 bg-gray-100 overflow-hidden text-gray-600 rounded-lg md:mx-20 focus-within:shadow-md">
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="search"
          placeholder="search"
          className="flex-grow px-5 text-base outline-none bg-transparent"
        />
      </div>

      <Button
        color="gray"
        buttonType="outline"
        size="regular"
        rounded={true}
        iconOnly={true}
        ripple="dark"
        className="ml-5 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" />
      </Button>

      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src="/images/tejas.jpg"
        alt="UserImg"
      />
    </header>
  );
}

export default Header;
