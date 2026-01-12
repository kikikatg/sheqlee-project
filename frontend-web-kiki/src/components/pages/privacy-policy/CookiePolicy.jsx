import LegalPage from "./LegalPage";
import mockCookieSections from "../../../data/mockCookieSections";

const CookiePolicy = () => {
  return <LegalPage pageTitle="Cookie Policy" sections={mockCookieSections} />;
};

export default CookiePolicy;
