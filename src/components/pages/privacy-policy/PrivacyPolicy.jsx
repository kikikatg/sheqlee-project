import SubNavbar from "../../all-jobs/SubNavbar";
import DeveloperCTA from "../../sections/DeveloperCTA";
import Footer from "../../footer/Footer";

const PrivacyPolicy = () => {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      {/* Breadcrumb */}
      <SubNavbar
        crumbs={[
          { label: "Privacy Policy", active: true },
        ]}
      />

      {/* Header */}
      <section className="px-4 mt-20">
        <div className="max-w-[1720px] mx-auto">
          <h1
            className="
              text-[60px]
              leading-[40px]
              font-semibold
              text-black px-16
            "
          >
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Content container */}
      <section className="px-4 mt-16 mb-20">
        <div
          className="
            max-w-[1420px]
            mx-auto
            bg-[#DFDFDF]
            rounded-[20px]
            px-12
            py-14
          "
        >
          <div className="max-w-[1200px] text-[#444444] text-[18px] leading-[32px] space-y-8">
            
           {/* Last updated */}
<p className="text-[16px] text-gray-600">
  <strong>Last Updated:</strong> January 2026
</p>

<p>
  At <strong>Sheqlee</strong>, your privacy is important to us. This Privacy
  Policy explains how we collect, use, disclose, and safeguard your information
  when you access or use the Sheqlee platform, including our website, services,
  and related features.
</p>

<section>
  <h2 className="text-[26px] font-semibold mb-3">
    1. Information We Collect
  </h2>

  <p>We may collect the following types of information:</p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Personal Information:</strong> Name, email address, login
      credentials, and contact details.
    </li>
    <li>
      <strong>Professional Information:</strong> Job preferences, skills,
      experience, company details, and application data.
    </li>
    <li>
      <strong>Usage Data:</strong> Pages visited, interactions, device type,
      browser type, and IP address.
    </li>
  </ul>
</section>

<section>
  <h2 className="text-[26px] font-semibold mb-3">
    2. How We Use Your Information
  </h2>

  <p>Your information is used to:</p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Provide and manage services</strong> such as job listings,
      applications, and user accounts.
    </li>
    <li>
      <strong>Improve platform functionality</strong> and user experience.
    </li>
    <li>
      <strong>Communicate with you</strong> regarding updates, support, and
      security notices.
    </li>
    <li>
      <strong>Ensure platform safety</strong> and prevent fraud or misuse.
    </li>
  </ul>
</section>

<section>
  <h2 className="text-[26px] font-semibold mb-3">
    3. Sharing of Information
  </h2>

  <p>
    Sheqlee does <strong>not sell</strong> your personal information. We may
    share data only in the following cases:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>With employers or candidates</strong> as part of job application
      processes.
    </li>
    <li>
      <strong>With trusted service providers</strong> who help operate the
      platform.
    </li>
    <li>
      <strong>When required by law</strong> or to protect legal rights and
      platform integrity.
    </li>
  </ul>
</section>

<section>
  <h2 className="text-[26px] font-semibold mb-3">
    4. Data Retention
  </h2>

  <p>
    We retain personal information only for as long as necessary to fulfill
    the purposes outlined in this policy, comply with legal obligations, and
    resolve disputes.
  </p>
</section>

<section>
  <h2 className="text-[26px] font-semibold mb-3">
    5. Cookies and Tracking Technologies
  </h2>

  <p>
    Sheqlee uses cookies and similar technologies to:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Remember user preferences</strong>
    </li>
    <li>
      <strong>Analyze platform usage</strong>
    </li>
    <li>
      <strong>Improve performance and content relevance</strong>
    </li>
  </ul>

  <p>
    You may disable cookies through your browser settings; however, some
    features may not function properly.
  </p>
</section>

<section>
  <h2 className="text-[26px] font-semibold mb-3">
    6. Data Security
  </h2>

  <p>
    We implement appropriate technical and organizational security measures
    to protect your data. While we strive to protect your information, no
    system can be completely secure.
  </p>
</section>

<section>
  <h2 className="text-[26px] font-semibold mb-3">
    7. Children’s Privacy
  </h2>

  <p>
    Sheqlee is not intended for individuals under the age of 18. We do not
    knowingly collect personal information from children.
  </p>
</section>

<section>
  <h2 className="text-[26px] font-semibold mb-3">
    8. Your Rights
  </h2>

  <p>You have the right to:</p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Access and update</strong> your personal information.
    </li>
    <li>
      <strong>Request deletion</strong> of your account and data.
    </li>
    <li>
      <strong>Withdraw consent</strong> where applicable.
    </li>
  </ul>
</section>

<section>
  <h2 className="text-[26px] font-semibold mb-3">
    9. Changes to This Privacy Policy
  </h2>

  <p>
    We may update this Privacy Policy periodically. Changes will be posted on
    this page, and continued use of Sheqlee indicates acceptance of the
    updated policy.
  </p>
</section>

<section>
  <h2 className="text-[26px] font-semibold mb-3">
    10. Contact Us
  </h2>

  <p>
    If you have questions or concerns about this Privacy Policy or how your
    data is handled, please contact us:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Email:</strong>{" "}
      <a
        href="mailto:privacy@sheqlee.com"
        className="text-black underline"
      >
        privacy@sheqlee.com
      </a>
    </li>
    <li>
      <strong>Support Page:</strong>{" "}
      <a
        href="/contact"
        className="text-black underline"
      >
        Contact Us
      </a>
    </li>
  </ul>
</section>


          </div>
        </div>
      </section>

      <DeveloperCTA />
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
