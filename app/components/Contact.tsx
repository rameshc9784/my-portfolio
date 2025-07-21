import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rameshc9784@gmail.com",
    href: "mailto:rameshc9784@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9784339093",
    href: "tel:+919784339093",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bengaluru, India",
    href: "https://www.google.com/maps/place/Punjabi+Gents+PG/@12.9156242,77.6029028,967m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae15023770930b:0xbd807032fce9e445!8m2!3d12.9156242!4d77.6054777!16s%2Fg%2F11bwyf7h88?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "ramesh-choudhary-ba5590180",
    href: "https://www.linkedin.com/in/ramesh-choudhary-ba5590180/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Let's connect and build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 rounded-full mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {contact.label}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{contact.value}</p>
                {contact.href !== "#" && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white bg-transparent transition-all"
                    asChild
                  >
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : "_self"
                      }
                    >
                      Connect
                    </a>
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
