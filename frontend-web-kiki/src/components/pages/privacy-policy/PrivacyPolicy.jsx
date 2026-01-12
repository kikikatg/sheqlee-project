import LegalPage from "./LegalPage";
import mockPrivacyPolicySections from "../../../data/mockPrivacyPolicySections";

const PrivacyPolicy = () => {
  return (
    <LegalPage
      pageTitle="Privacy Policy"
      sections={mockPrivacyPolicySections}
    />
  );
};

export default PrivacyPolicy;
