import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const DEFAULT_MAP_QUERY = "-6.175392,106.827153";

const Contact = ({
  phoneDisplay = "+62 857-1293-5347",
  phoneHref = "tel:+6285712935347",
  whatsappHref = "https://wa.me/6285712935347",
  email = "gojlagyee@gmail.com",
  address = "Alamat belum diatur",
  mapQuery = DEFAULT_MAP_QUERY,
}) => {
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    mapQuery,
  )}&z=15&output=embed`;

  const mapOpenHref = `https://www.google.com/maps?q=${encodeURIComponent(
    mapQuery,
  )}&z=15`;

  return (
    <section className="w-full py-14 scroll-mt-[100px]" id="contact">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <div className="flex flex-col w-full text-center justify-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Hubungi Kami
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-black-500">
            Konsultasi kebutuhan service pompa air dan dapatkan penawaran
            terbaik.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="border-2 border-gray-500 rounded-xl p-6 sm:p-8 flex flex-col">
            <div className="flex flex-col gap-4 text-left">
              <div>
                <p className="text-sm text-black-500">Telepon</p>
                <a
                  href={phoneHref}
                  className="text-lg text-black-600 font-medium hover:text-primary transition-all"
                >
                  {phoneDisplay}
                </a>
              </div>

              <div>
                <p className="text-sm text-black-500">WhatsApp</p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-lg text-black-600 font-medium hover:text-green-500 transition-all"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="h-5 w-5"
                    aria-hidden
                  />
                  Chat via WhatsApp
                </a>
              </div>

              <div>
                <p className="text-sm text-black-500">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-lg text-black-600 font-medium hover:text-primary transition-all break-all"
                >
                  {email}
                </a>
              </div>

              <div>
                <p className="text-sm text-black-500">Alamat</p>
                <p className="text-black-600">{address}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 rounded-lg bg-green-500 text-white-500 transition-all"
              >
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="h-5 w-5"
                    aria-hidden
                  />
                  <span>WhatsApp</span>
                </span>
              </a>
              <a
                href={phoneHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white-500 transition-all"
              >
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="h-5 w-5"
                    aria-hidden
                  />
                  <span>Telepon</span>
                </span>
              </a>
              <a
                href={mapOpenHref}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 rounded-lg border-2 border-gray-500 text-black-600 hover:border-primary hover:text-primary transition-all"
              >
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faMapLocationDot}
                    className="h-5 w-5"
                    aria-hidden
                  />
                  <span>Maps</span>
                </span>
              </a>
            </div>
          </div>

          <div className="border-2 border-gray-500 rounded-xl overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: "62.5%" }}>
              <iframe
                title="Preview lokasi di peta"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
