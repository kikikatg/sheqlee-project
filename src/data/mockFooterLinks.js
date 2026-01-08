export const mockFooterLinks = [
  {
    title: "Links",
    links: [
      { label: "Companies", href: "/companies" },   // ✅ Companies page
      { label: "Categories", href: "/categories" }, // ✅ Categories page
      { label: "Tags", href: "/tags" },              // ✅ AllTags page
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "#" },      // can activate later
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Getting started", href: "#" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "privacy-policy" },
      { label: "Terms and Conditions", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];
