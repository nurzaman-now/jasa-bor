import React from "react";

const DEFAULT_MAP_QUERY = "-6.175392,106.827153";

const Contact = ({
  phoneDisplay = "+62 8xx-xxxx-xxxx",
  phoneHref = "tel:+6280000000000",
  whatsappHref = "https://wa.me/6280000000000",
  email = "halo@example.com",
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
    <section className="w-full py-14" id="contact">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <div className="flex flex-col w-full text-center justify-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Hubungi Kami
          </h3>
          <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center text-black-500">
            Konsultasi kebutuhan service pompa air dan dapatkan penawaran terbaik.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="border-2 border-gray-500 rounded-xl p-6 sm:p-8 flex flex-col">
            <div className="flex flex-col gap-4 text-left">
              <div>
                <p className="text-sm text-black-500">Telepon</p>
                <a
                  href={phoneHref}
                  className="text-lg text-black-600 font-medium hover:text-orange-500 transition-all"
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
                  className="text-lg text-black-600 font-medium hover:text-orange-500 transition-all"
                >
                  Chat via WhatsApp
                </a>
              </div>

              <div>
                <p className="text-sm text-black-500">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-lg text-black-600 font-medium hover:text-orange-500 transition-all break-all"
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
                className="w-full sm:w-auto text-center py-3 px-8 rounded-lg bg-orange-500 text-white-500 hover:bg-orange-600 transition-all"
              >
                WhatsApp
              </a>
              <a
                href={phoneHref}
                className="w-full sm:w-auto text-center py-3 px-8 rounded-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white-500 transition-all"
              >
                Telepon
              </a>
              <a
                href={mapOpenHref}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center py-3 px-8 rounded-lg border-2 border-gray-500 text-black-600 hover:border-orange-500 hover:text-orange-500 transition-all"
              >
                Buka Maps
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
