
import { poppins700 } from "./fonts";

export default function Home() {
  return (
    <main className="lg:p-24 p-8">
    <p
        className={`${poppins700.className} text-[22px] text-left lg:text-[28px] leading-[28px]`}
      >
        Hey Admin
      </p>
      <p
        className={`${poppins700.className} text-[22px] text-left lg:text-[28px] leading-[28px]`}
      >
        Glad to have you with us
      </p>
      <p
        className={`${poppins700.className} text-[22px] text-left lg:text-[28px] leading-[28px]`}
      >
       Go to signin page to continue to admin page
      </p>
     
    </main>
  );
}
