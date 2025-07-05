export const dashboardlinks = [
  {
    id: 1,
    title: "Overview",
    icon: "Home",
    actions: [
      {
        id: 1,
        title: "Add user",
      },
    ],
  },
  {
    id: 2,
    title: "Finance",
    icon: "Users",
    actions: [
      {
        id: 1,
        title: "Add User",
      },
      {
        id: 2,
        title: "View Users",
      },
    ],
  },
  {
    id: 3,
    title: "MarketPlace",
    icon: "Building",
    actions: [
      {
        id: 1,
        title: "Add Product",
      },
      {
        id: 2,
        title: "View Products",
      },
    ],
  },
];

export const pageslinks = [
  {
    id: 1,
    title: "Administration",
    icon: "Home",
    actions: [
      {
        id: 1,
        title: "Add user",
      },
    ],
  },
  {
    id: 2,
    title: "Students",
    icon: "Users",
    actions: [
      {
        id: 1,
        title: "Add Tenant",
      },
      {
        id: 2,
        title: "View Tenants",
      },
    ],
  },
  {
    id: 3,
    title: "Staff",
    icon: "Building",
    actions: [
      {
        id: 1,
        title: "Add Apartment",
      },
      {
        id: 2,
        title: "View Apartments",
      },
    ],
  },
  {
    id: 4,
    title: "Exam",
    icon: "DollarSign",
    actions: [
      {
        id: 1,
        title: "View Transactions",
      },
      {
        id: 2,
        title: "Record Payment",
      },
    ],
  },
  {
    id: 5,
    title: "Communicate",
    icon: "Tool",
    actions: [
      {
        id: 1,
        title: "Request Maintenance",
      },
      {
        id: 2,
        title: "View Requests",
      },
    ],
  },
  {
    id: 6,
    title: "Account",
    icon: "FileText",
    actions: [
      {
        id: 1,
        title: "Generate Report",
      },
      {
        id: 2,
        title: "View Reports",
      },
    ],
  },
];

export const categories = [
  {
    id: 1,
    title: "Users",
    bg: "bg-lime-100",
    icon: "User",
    textcolor: "text-black",
  },
  {
    id: 2,
    title: "Apartments",
    bg: "bg-violet-100",
    icon: "Home",
    textcolor: "text-black",
  },
  {
    id: 3,
    title: "Units",
    bg: "bg-black",
    icon: "Briefcase",
    textcolor: "text-lime-500",
  },
  {
    id: 4,
    title: "Transactions",
    bg: "bg-neutral-100",
    icon: "DollarSign",
    textcolor: "text-black",
  },
];

export const pricingPlans = [
  {
    id: "basic",
    name: "Basic",
    price: 1,
    currency: "KES",
    billingCycle: "Month",
    upgradeText: "Upgrade Now",
    buttonColor: "bg-lime-500",
    features: ["upto 5 Apartments", "Free Support", "24/7 Support"],
    link: "/pricing",
    backgroundColor: "bg-white",
  },
  {
    id: "premium",
    name: "Premium",
    price: 2,
    currency: "KES",
    billingCycle: "Month",
    upgradeText: "Upgrade Now",
    buttonColor: "bg-lime-500",
    features: [
      "Unlimited Apartments",
      "Request Addons",
      "Free Support",
      "24/7 Support",
    ],
    link: "/pricing",
    backgroundColor: "bg-white",
  },
  {
    id: "ownership",
    name: "Ownership",
    price: 3,
    currency: "KES",
    billingCycle: "Forever",
    upgradeText: "Upgrade Now",
    buttonColor: "bg-lime-500",
    features: [
      "Unlimited Apartments",
      "Request Addons",
      "Free Hosting First Year",
      "24/7 Support",
    ],
    link: "/pricing",
    backgroundColor: "bg-white",
  },
];

export const contacts = [
  {
    id: 1,
    name: "Tony Juma",
  },
  {
    id: 2,
    name: "Mohjoe Rawley",
  },
  {
    id: 3,
    name: "Elon Musk",
  },
  {
    id: 4,
    name: "Caleb Wyclife",
  },
];

export const activities = [
  {
    id: 1,
    content: "App needs an update",
    time: "Just now",
  },
  {
    id: 2,
    content: "Customer complain recorded.",
    time: "Today",
  },
  {
    id: 3,
    content: "Maintenance request recorded.",
    time: "Feb 17,2025",
  },
  //   {
  //     id: 4,
  //     content: "Maintenance request recorded.",
  //     time: "Feb 25,2025",
  //   },
];
