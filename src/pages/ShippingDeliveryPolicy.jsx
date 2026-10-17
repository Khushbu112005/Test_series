import PageHero from "../components/common/PageHero";
import PolicyLayout from "../components/policy/PolicyLayout";

function ShippingDeliveryPolicy() {
  return (
    <section>
      <PageHero
        breadcrumb="Shipping & Delivery"
        title="Shipping & Delivery Policy"
        titleClassName="text-[36px] leading-tight sm:text-[44px] lg:text-[52px]"
        description="Information regarding order processing, shipping timelines, and delivery terms."
      />

      <main className="flex flex-col gap-8 bg-white dark:bg-[#050F1A] px-4 py-6 sm:gap-10 sm:px-8 sm:py-8 md:px-12 lg:px-20 xl:px-28">
        {/* Intro */}
        <div className="w-full max-w-5xl rounded-r-md border-l-2 border-cyan-400 bg-[#EFF9FC] dark:bg-[#123444] p-4 font-inter text-[14px] font-semibold leading-relaxed text-[#364153] dark:text-slate-200 sm:p-6">
          Welcome to{" "}
          <strong className="text-[#06B6D4]">CharteredStudies.in</strong>, owned
          and operated by{" "}
          <strong className="text-[#06B6D4]">Bharaverse EdTech Pvt Ltd</strong>.
          This Shipping & Delivery Policy outlines the terms related to the
          delivery of digital and physical products purchased through our
          website and associated subdomains.
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-7">
          {/* 01 */}
          <PolicyLayout number="01" title="Delivery of Digital Products">
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="font-semibold text-[#172033] dark:text-slate-100">
                  1.1 Test Series, Study Materials & Courses
                </h3>

                <ul className="mt-2 list-disc space-y-1 pl-4">
                  <li>
                    All digital products — including test series, e-books,
                    recorded video lectures, and online courses — will be
                    accessible immediately upon successful payment.
                  </li>

                  <li>
                    Access credentials (if applicable) will be sent via email
                    and can also be found in your My Account section.
                  </li>

                  <li>
                    In case of any access issues, users are advised to contact
                    team@charteredstudies.org within 24 hours.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-[#172033] dark:text-slate-100">
                  1.2 Live Sessions & Webinars
                </h3>

                <ul className="mt-2 list-disc space-y-1 pl-4">
                  <li>
                    Live sessions will be conducted on pre-scheduled dates.
                    Registrants will receive a confirmation email with joining
                    details within 24 hours of registration.
                  </li>

                  <li>
                    Reminders and access links will be sent before the session
                    starts.
                  </li>
                </ul>
              </div>
            </div>
          </PolicyLayout>

          {/* 02 */}
          <PolicyLayout number="02" title="Delivery of Physical Products">
            <div className="flex flex-col gap-3">
              <p>
                If and when Chartered Studies offers physical study materials,
                books, or merchandise:
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-100 dark:border-slate-700 p-4 text-center">
                  <p className="font-semibold text-[#172033] dark:text-slate-100">Metro Cities</p>
                  <p className="mt-1 text-cyan-500">5–7 business days</p>
                </div>

                <div className="rounded-lg border border-gray-100 dark:border-slate-700 p-4 text-center">
                  <p className="font-semibold text-[#172033] dark:text-slate-100">
                    Non-Metro Cities
                  </p>
                  <p className="mt-1 text-cyan-500">7–10 business days</p>
                </div>

                <div className="rounded-lg border border-gray-100 dark:border-slate-700 p-4 text-center">
                  <p className="font-semibold text-[#172033] dark:text-slate-100">Remote Areas</p>
                  <p className="mt-1 text-cyan-500">10–15 business days</p>
                </div>
              </div>

              <ul className="list-disc space-y-1 pl-4">
                <li>
                  <strong>Processing Time:</strong> Orders are typically
                  processed within 2–3 business days.
                </li>

                <li>
                  Customers will receive tracking details via email once the
                  order has been shipped.
                </li>

                <li>
                  <strong>Shipping Charges:</strong> Shipping fees, if
                  applicable, will be displayed at checkout before payment
                  confirmation.
                </li>

                <li>
                  <strong>Delays:</strong> Any unforeseen delays due to external
                  factors, such as courier issues or natural disasters, will be
                  communicated to the customer.
                </li>
              </ul>
            </div>
          </PolicyLayout>

          {/* 03 */}
          <PolicyLayout number="03" title="International Shipping">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-red-50 p-3">
                <p className="font-semibold text-red-500">Physical Products</p>

                <p className="mt-1 text-red-400">
                  Currently, we do not offer international shipping for physical
                  products.
                </p>
              </div>

              <div className="rounded-lg bg-green-50 p-3">
                <p className="font-semibold text-green-600">Digital Products</p>

                <p className="mt-1 text-green-500">
                  Digital products are available globally without restrictions.
                </p>
              </div>
            </div>
          </PolicyLayout>

          {/* 04 */}
          <PolicyLayout number="04" title="Address & Contact Information">
            <ul className="list-disc space-y-1 pl-4">
              <li>
                Customers are responsible for providing an accurate shipping
                address. Any errors leading to delivery failure may incur
                additional shipping fees for reshipment.
              </li>

              <li>
                For updates on order status, reach out{" "}
                <span className="font-semibold text-cyan-500">
                  team@charteredstudies.org
                </span>{" "}
                or call our support team.
              </li>
            </ul>
          </PolicyLayout>

          {/* 05 */}
          <PolicyLayout number="05" title="Non-Delivery & Refunds">
            <div className="overflow-hidden rounded-lg border border-yellow-300">
              <div className="border-b border-yellow-200 bg-yellow-50 px-4 py-2 font-semibold text-yellow-700">
                ⚠ Important — please read
              </div>

              <div className="px-4 py-3">
                <ul className="list-disc space-y-1 pl-4">
                  <li>
                    If a physical product is not delivered within 15 days of
                    dispatch, customers should contact our support team for
                    resolution.
                  </li>

                  <li>
                    Refunds will not be issued for non-receipt due to incorrect
                    address submission.
                  </li>
                </ul>
              </div>
            </div>
          </PolicyLayout>

          {/* 06 */}
          <PolicyLayout number="06" title="Modification of Shipping Policy">
            <p>
              Bharaverse EdTech Pvt Ltd reserves the right to modify this policy
              at any time. Updates will be reflected on this page with the last
              updated date mentioned at the top.
            </p>
          </PolicyLayout>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-start gap-4 rounded-lg bg-[#0E1B30] dark:bg-[#1B2335] px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-[18px] font-inter font-bold">
              Have a question about your order?
            </h3>

            <p className="mt-1 text-[14px] text-[#AFBDCC]">
              Our support team is ready to help. For further inquiries, please
              contact us at
              <span className="text-[#06B6D4]"> team@charteredstudies.org</span>
            </p>
          </div>

          <div className="flex gap-2">
            <button className="rounded-full bg-[#06B6D4] font-inter font-semibold px-4 py-1.5 text-[12px] text-white">
              Email Us
            </button>

            <button className="rounded-full border font-inter font-semibold border-gray-500 px-4 py-1.5 text-[12px] text-white">
              WhatsApp
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-[14px] text-gray-400">
          Thank you for choosing Chartered Studies!
        </p>
      </main>
    </section>
  );
}

export default ShippingDeliveryPolicy;
