import { Button } from "@ui/components/ui/button";
import Title from "@ui/components/title";

const SupportUs = () => {
  return (
    <div className="container my-10">
      <Title text="SUPPORT US" />

      <div className=" mt-10 flex flex-col items-center gap-5">
        <p className="text-center lg:w-1/3">Góc ăn xin 🙂</p>

        <Button
          onClick={() => {
            window.open("https://ko-fi.com/weeboo");
          }}
        >
          Donate Now
        </Button>
      </div>
    </div>
  );
};

export default SupportUs;
