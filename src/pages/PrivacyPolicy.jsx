import PageHero from "../components/common/PageHero";
import PolicyLayout from "../components/policy/PolicyLayout";

function PrivacyPolicy() {
  return (
    <section>
      <PageHero
        breadcrumb="Privacy Policy"
        title="Privacy Policy"
        titleClassName="text-[36px] leading-tight sm:text-[44px] lg:text-[52px]"
      />

      <main className="flex flex-col gap-8 bg-white dark:bg-[#050F1A] px-4 py-6 sm:gap-10 sm:px-8 sm:py-8 md:px-12 lg:px-20 xl:px-28">
        {/* Intro */}
        <div className="w-full max-w-5xl rounded-r-md border-l-4 border-cyan-500 bg-[#EFF9FC] dark:bg-[#123444] p-4 font-inter text-[14px] font-semibold leading-relaxed text-[#364153] dark:text-slate-200 sm:p-6">
          At Chartered Studies, accessible from
          <strong className="text-[#06B6D4]">
            {" "}
            https://www.charteredstudies.in
          </strong>
          , protecting the privacy of our visitors is our top priority. This
          Privacy Policy outlines the types of information collected and
          recorded by Chartered Studies, and how we use it. This Privacy Policy
          applies solely to our online activities and is valid for visitors to
          our website. By using our website, you consent to this Privacy Policy
          and agree to its terms.
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-7">
          {/* 01 */}
          <PolicyLayout number="01" title="Information We Collect">
            <div className="flex flex-col gap-4">
              <p>
                We collect personal information for specific purposes, which
                will be explained when we ask for your details. The types of
                information collected may include:
              </p>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-100 dark:border-slate-700 p-4 text-center">
                  <p className="font-semibold text-[#172033] dark:text-slate-100">
                    Personal Details
                  </p>

                  <p className="mt-2">
                    Name, email address, phone number, and address.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-100 dark:border-slate-700 p-4 text-center">
                  <p className="font-semibold text-[#172033] dark:text-slate-100">
                    Account Information
                  </p>

                  <p className="mt-2">
                    Data provided during registration, such as company name or
                    additional relevant details.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-100 dark:border-slate-700 p-4 text-center">
                  <p className="font-semibold text-[#172033] dark:text-slate-100">
                    Communication Data
                  </p>

                  <p className="mt-2">
                    Contents of messages or attachments sent via email or
                    WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </PolicyLayout>

          {/* 02 */}
          <PolicyLayout number="02" title="How We Use Your Information">
            <div className="flex flex-col gap-2">
              <p>The information we collect is used for purposes such as:</p>

              <ul className="list-disc space-y-1 pl-4">
                <li>Operating and maintaining our website.</li>
                <li>Enhancing and personalizing user experience.</li>
                <li>Analyzing website usage and trends.</li>
                <li>Developing new products, services, and features.</li>
                <li>
                  Communicating for customer service, updates, and promotions.
                </li>
                <li>Sending email notifications and updates.</li>
                <li>Preventing fraudulent activities.</li>
              </ul>
            </div>
          </PolicyLayout>

          {/* 03 */}
          <PolicyLayout number="03" title="Log Files">
            <p>
              Chartered Studies follows standard practices for using log files.
              These files record data such as IP addresses, browser types, ISPs,
              timestamps, referring/exit pages, and click data. This information
              is used for analytics and is not linked to personally identifiable
              data.
            </p>
          </PolicyLayout>

          {/* 04 */}
          <PolicyLayout number="04" title="Cookies and Web Beacons">
            <div className="flex flex-col gap-3">
              <p>
                We use cookies to improve your browsing experience by storing
                information about user preferences and visited pages. You can
                manage or disable cookies through your browser settings.
              </p>

              <div className="overflow-hidden rounded-lg border border-yellow-300">
                <div className="border-b border-yellow-200 bg-yellow-50 px-4 py-2 font-semibold text-yellow-700">
                  Google DoubleClick DART Cookie
                </div>

                <div className="px-4 py-3">
                  Google is a third-party vendor on our website and uses DART
                  cookies to serve personalized ads. You can opt out of DART
                  cookies by visiting Google's Ad and Content Network Privacy
                  Policy.
                </div>
              </div>
            </div>
          </PolicyLayout>

          {/* 05 */}
          <PolicyLayout
            number="05"
            title="Advertising Partners Privacy Policies"
          >
            <p>
              Our advertising partners may use cookies, JavaScript, or web
              beacons to personalize ads and measure their effectiveness.
              Chartered Studies does not control these third-party technologies.
              Please review their respective privacy policies for more details.
            </p>
          </PolicyLayout>

          {/* 06 */}
          <PolicyLayout number="06" title="Your Data Protection Rights">
            <div className="flex flex-col gap-3">
              <div>
                <p>
                  Under the GDPR and CCPA, you are entitled to the following
                  rights:
                </p>

                <ul className="mt-2 list-disc pl-4">
                  <li>
                    Right to Access: Request copies of your personal data.
                  </li>

                  <li>
                    Right to Rectification: Request corrections to inaccurate or
                    incomplete data.
                  </li>

                  <li>
                    Right to Erasure: Request the deletion of personal data
                    under specific conditions.
                  </li>

                  <li>
                    Right to Restrict Processing: Request limited use of your
                    data.
                  </li>

                  <li>
                    Right to Object: Object to data processing under certain
                    circumstances.
                  </li>

                  <li>
                    Right to Data Portability: Request transfer of your data.
                  </li>
                </ul>
              </div>

              <p>
                We will respond to your request within one month. Contact us at
                team@charteredstudies.org to exercise your rights.
              </p>
            </div>
          </PolicyLayout>

          {/* 07 */}
          <PolicyLayout number="07" title="Children's Privacy">
            <p>
              Chartered Studies does not knowingly collect personal information
              from children under the age of 13. If you believe your child has
              provided such information, please contact us immediately.
            </p>
          </PolicyLayout>

          {/* 08 */}
          <PolicyLayout number="08" title="Third-Party Privacy Policies">
            <p>
              Chartered Studies Privacy Policy does not apply to other
              advertisers or external websites. Please consult the privacy
              policies of third-party services for more details on their data
              handling practices.
            </p>
          </PolicyLayout>

          {/* 09 */}
          <PolicyLayout number="09" title="Ownership and Associated Domains">
            <div className="flex flex-col gap-3">
              <p>
                Chartered Studies is a brand owned and operated by Bharaverse
                EdTech Pvt. Ltd. The company legally owns and controls multiple
                business ventures/assets under the Chartered Studies brand,
                including:
              </p>

              <ul className="list-disc space-y-1 pl-4">
                <li>
                  Chartered Studies – The Test Series Business and all
                  associated assets.
                </li>

                <li>
                  Chartered Studies Academy – The coaching and online education
                  business.
                </li>

                <li>
                  Chartered Studies Library – The library services and study
                  space properties in India.
                </li>
              </ul>

              <p className="font-semibold text-[#172033] dark:text-slate-100">
                All other ventures and sub-domains under Chartered Studies:
              </p>

              <ul className="list-disc space-y-1 pl-4">
                <li>www.charteredstudies.in</li>
                <li>www.charteredstudies.com</li>
                <li>www.charteredstudies.org</li>
              </ul>
            </div>
          </PolicyLayout>
        </div>

        <div className="flex flex-col items-start gap-4 rounded-lg bg-[#0E1B30] dark:bg-[#1B2335] px-5 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-[18px] font-inter font-bold">Contact Us</h3>

            <p className="mt-1 text-[14px] text-[#AFBDCC]">
              For questions or concerns regarding this Privacy Policy or your
              data, contact us at:
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
          Thank you for trusting Chartered Studies with your data.
        </p>
      </main>
    </section>
  );
}

export default PrivacyPolicy;
