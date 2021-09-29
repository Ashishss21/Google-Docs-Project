import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from 'next/image';

function Files() {
  return (
    <section className="bg-[#F8F9FA] px-10 pb-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between py-6">
          <h2 className="text-gray-700 text-lg">Create a new Document</h2>

          <Button
            color="gray"
            buttonType="outline"
            size="regular"
            iconOnly={true}
            ripple="dark"
            className="ml-5 h-20 w-20 border-0"
          >
            <Icon name="more_vert " size="3xl" />
          </Button>
        </div>
        <div className="relative h-52 w-48 shadow-md cursor-pointer">
            <Image src="/images/plus.png" alt="PlusIconGoogle" layout="fill" className="border-3" />
        </div>   
        <p className="ml-2 mt-2 font-semibold text-sm text-gray-600">Blank</p>
      </div>
    </section>
  );
}

export default Files;
