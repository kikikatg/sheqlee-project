import LegalPage from "./LegalPage";
import mockTermsSections from "../../../data/mockTermsSections";

const TermsAndConditions = () => {
  return (
    <LegalPage pageTitle="Terms & Conditions" sections={mockTermsSections} />
  );
};

export default TermsAndConditions;
