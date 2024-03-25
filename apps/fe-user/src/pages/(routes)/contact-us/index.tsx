import { default as ContactUsImg } from "@fe-user/assets/contact-us.jpeg";
import Banner from "@fe-user/components/banner";
import CollideBalls from "@fe-user/components/collide-balls";
import Title from "@ui/components/title";

const ContactUs = () => {
  return (
    <div>
      <Banner subtitle="Feedback? Questions? Let Us Know!" title="CONTACT US" img={ContactUsImg} grayscale />

      <div className="min-h-72">
        <div className="container py-10">
          <Title linePosition="center" text="GET IN TOUCH" textPosition="center" />
          <p className="mt-12 text-center">
            <span className="opacity-70">
              Nếu bạn có bất kỳ ý kiến phản hồi nào, vui lòng liên hệ chúng tôi qua email{" "}
            </span>
            <a
              className="hover:border-foreground border-b-2 border-transparent text-[hsl(var(--foreground))] transition-all duration-300"
              href="mailto:ple.2971.dd@gmail.com"
            >
              tại đây
            </a>
          </p>
        </div>
      </div>
      <CollideBalls />
    </div>
  );
};

export default ContactUs;
