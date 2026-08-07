export interface Project {
  id: string;
  title: string;
  category: string;
  images: string[];
  description?: string;
  address?: string;
  ownerContractor?: string;
}

const rawProjects = [
  //Mall, Commercial and Fitout Constructions
  {
    title: "Nuat Thai Project",
    category: "Mall, Commercial and Fitout Constructions",
    images: [
      "projects/nuat/nuat-1.webp", 
      "projects/nuat/nuat-2.webp", 
      "projects/nuat/nuat-3.webp", 
      "projects/nuat/nuat-4.webp", 
      "projects/nuat/nuat-5.webp", 
      "projects/nuat/nuat-6.webp", 
      "projects/nuat/nuat-7.webp"], 
  },
  {
    title: "MMassage SM Clark City",
    category: "Mall, Commercial and Fitout Constructions",
    images: [
      "projects/sm-clark/sm-clark-1.webp", 
      "projects/sm-clark/sm-clark-2.webp", 
      "projects/sm-clark/sm-clark-3.webp", 
      "projects/sm-clark/sm-clark-4.webp", 
      "projects/sm-clark/sm-clark-5.webp", 
      "projects/sm-clark/sm-clark-6.webp", 
      "projects/sm-clark/sm-clark-7.webp"
    ],
  },
  {
    title: "MMassage Ayala Mall Cebu City",
    category: "Mall, Commercial and Fitout Constructions",
    images: [
      "projects/ayala-cebu/ayala-cebu-1.webp", 
      "projects/ayala-cebu/ayala-cebu-2.webp", 
      "projects/ayala-cebu/ayala-cebu-3.webp", 
      "projects/ayala-cebu/ayala-cebu-4.webp", 
      "projects/ayala-cebu/ayala-cebu-5.webp", 
      "projects/ayala-cebu/ayala-cebu-6.webp", 
      "projects/ayala-cebu/ayala-cebu-7.webp", 
      "projects/ayala-cebu/ayala-cebu-8.webp"
    ],
  },
  {
    title: "Pasig Condo Fitout Project",
    category: "Mall, Commercial and Fitout Constructions",
    images: [
      "projects/pasig/pasig-1.webp", 
      "projects/pasig/pasig-2.webp", 
      "projects/pasig/pasig-3.webp", 
      "projects/pasig/pasig-4.webp", 
      "projects/pasig/pasig-5.webp", 
      "projects/pasig/pasig-6.webp"
    ],
  },
  {
    title: "Amalfi Ortigas Project",
    category: "Mall, Commercial and Fitout Constructions",
    images: [
      "projects/amalfi/amalfi-1.webp", 
      "projects/amalfi/amalfi-2.webp", 
      "projects/amalfi/amalfi-3.webp", 
      "projects/amalfi/amalfi-4.webp", 
      "projects/amalfi/amalfi-5.webp", 
      "projects/amalfi/amalfi-6.webp", 
      "projects/amalfi/amalfi-7.webp", 
      "projects/amalfi/amalfi-8.webp"
    ],
  },
  {
    title: "Castillejos Commons Mall - Zambales Project",
    category: "Mall, Commercial and Fitout Constructions",
    images: [
      "projects/castillejos/castillejos-1.webp",
      "projects/castillejos/castillejos-2.webp",
      "projects/castillejos/castillejos-3.webp",
      "projects/castillejos/castillejos-4.webp",
      "projects/castillejos/castillejos-5.webp"
    ],
  },
  {
    title: "Peri-Peri Lipa City Design",
    category: "Mall, Commercial and Fitout Constructions",
    images: ["projects/peri-peri-lipa/peri-peri-lipa-1.webp"],
  },
  {
    title: "Peri-Peri Capitol Pasig Design",
    category: "Mall, Commercial and Fitout Constructions",
    images: ["projects/peri-peri-capitol/peri-peri-capitol-1.webp"],
  },
  {
    title: "Peri-Peri MCU Design",
    category: "Mall, Commercial and Fitout Constructions",
    images: [
      "projects/peri-peri-mcu/peri-peri-mcu-1.webp", 
      "projects/peri-peri-mcu/peri-peri-mcu-2.webp", 
      "projects/peri-peri-mcu/peri-peri-mcu-3.webp", 
      "projects/peri-peri-mcu/peri-peri-mcu-4.webp", 
      "projects/peri-peri-mcu/peri-peri-mcu-5.webp"
    ],
  },
  {
    title: "Peri-Peri Vermosa Design",
    category: "Mall, Commercial and Fitout Constructions",
    images: [
      "projects/peri-peri-vermosa/peri-peri-vermosa-1.webp", 
      "projects/peri-peri-vermosa/peri-peri-vermosa-2.webp", 
      "projects/peri-peri-vermosa/peri-peri-vermosa-3.webp", 
      "projects/peri-peri-vermosa/peri-peri-vermosa-4.webp", 
      "projects/peri-peri-vermosa/peri-peri-vermosa-5.webp"
    ],
  },
  //End of Mall, Commercial and Fitout Constructions

  //design
  {
    title: "Vineyard Residences",
    category: "Residential Design and Construction Projects",
    images: [
      "projects/vineyard/vine-1.webp", 
      "projects/vineyard/vine-2.webp", 
      "projects/vineyard/vine-3.webp", 
      "projects/vineyard/vine-4.webp", 
      "projects/vineyard/vine-5.webp"
    ],
  },
  {
    title: "2-Storey Townhouse Design Project",
    category: "Residential Design and Construction Projects",
    images: [
      "projects/2-storey-townhouse/2-storey-townhouse-1.webp", 
      "projects/2-storey-townhouse/2-storey-townhouse-2.webp", 
      "projects/2-storey-townhouse/2-storey-townhouse-3.webp"
    ],
  },
  {
    title: "Alesea Oeste Commercial",
    category: "Residential Design and Construction Projects",
    images: [
      "projects/alesea/alesea-4.webp", 
      "projects/alesea/alesea-1.webp", 
      "projects/alesea/alesea-2.webp", 
      "projects/alesea/alesea-3.webp"
    ],
  },
  {
    title: "Lotus Pad Bamboo Design Structure",
    category: "Residential Design and Construction Projects",
    images: [
      "projects/lotus-pad/lotus-pad-1.webp",
      "projects/lotus-pad/lotus-pad-2.webp",
      "projects/lotus-pad/lotus-pad-3.webp",
    ],
  },
  {
    title: "Mid-High Rise Residential Project",
    category: "Residential Design and Construction Projects",
    images: ["projects/mid-high-rise/mid-high-rise-1.webp"],
  },
  {
    title: "Unique / Architectural Designs",
    category: "Residential Design and Construction Projects",
    images: ["projects/unique/unique-1.webp"],
  },
  //End of Residential Design and Construction Projects

  //Start of Carbon Fiber Wrap and Plates Retrofitting
  {
    title: "RM Mall Retrofitting",
    category: "Carbon Fiber Wrap and Plates Retrofitting",
    images: [
      "projects/rm-mall/rm-10.webp",
      "projects/rm-mall/rm-1.webp", 
      "projects/rm-mall/rm-2.webp", 
      "projects/rm-mall/rm-3.webp", 
      "projects/rm-mall/rm-4.webp", 
      "projects/rm-mall/rm-5.webp",
      "projects/rm-mall/rm-6.webp",
      "projects/rm-mall/rm-7.webp",
      "projects/rm-mall/rm-8.webp",
      "projects/rm-mall/rm-9.webp",
      "projects/carbon/carbon-1.webp",
      "projects/carbon/carbon-2.webp",
      "projects/carbon/carbon-3.webp"
    ],
  },
  {
    title: "G4296 Residential Structure Retrofitting",
    category: "Carbon Fiber Wrap and Plates Retrofitting",
    images: [
      "projects/G4296/G4296-1.webp",
      "projects/G4296/G4296-2.webp",
      "projects/G4296/G4296-3.webp",
      "projects/G4296/G4296-4.webp",
      "projects/G4296/G4296-5.webp",
      "projects/G4296/G4296-6.webp",
      "projects/G4296/G4296-7.webp",
      "projects/G4296/G4296-8.webp",
      "projects/G4296/G4296-9.webp",
      "projects/G4296/G4296-10.webp",
      "projects/G4296/G4296-11.webp",
      "projects/G4296/G4296-12.webp",
      "projects/G4296/G4296-13.webp",
      "projects/G4296/G4296-14.webp"
    ],
  },
  {
    title: "AE71 Tower Structure Retrofitting",
    category: "Carbon Fiber Wrap and Plates Retrofitting",
    images: [
      "projects/AE71/AE71-1.webp",
      "projects/AE71/AE71-2.webp",
      "projects/AE71/AE71-3.webp",
      "projects/AE71/AE71-4.webp",
      "projects/AE71/AE71-5.webp",
      "projects/AE71/AE71-6.webp",
      "projects/AE71/AE71-7.webp",
      "projects/AE71/AE71-8.webp",
      "projects/AE71/AE71-9.webp",
      "projects/AE71/AE71-10.webp",
      "projects/AE71/AE71-11.webp",
      "projects/AE71/AE71-12.webp"
    ],
  },
  {
    title: "G9196 Residential Structure Retrofitting",
    category: "Carbon Fiber Wrap and Plates Retrofitting",
    images: [
      "projects/G9196/G9196-1.webp",
      "projects/G9196/G9196-2.webp",
      "projects/G9196/G9196-3.webp",
      "projects/G9196/G9196-4.webp"
    ],
  },
  {
    title: "Tower Pedestal and Foundation Retrofitting",
    category: "Carbon Fiber Wrap and Plates Retrofitting",
    images: [
      "projects/tower-pedestal/pedestal-1.webp",
      "projects/tower-pedestal/pedestal-2.webp",
      "projects/tower-pedestal/pedestal-3.webp",
      "projects/tower-pedestal/pedestal-4.webp"
    ],
  },
  //End of Carbon Fiber Wrap and Plates Retrofitting

  //Telecom Tower Construction Projects
  {
    title: "Dinadiawan Aurora Telecom Tower",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/aurora/aurora-1.webp",
      "projects/aurora/aurora-2.webp",
      "projects/aurora/aurora-3.webp",
      "projects/aurora/aurora-4.webp",
      "projects/aurora/aurora-5.webp"
    ]
  },
  {
    title: "Structural Modeling",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/structural/structural-5.webp", 
      "projects/structural/structural-2.webp", 
      "projects/structural/structural-3.webp", 
      "projects/structural/structural-4.webp", 
      "projects/structural/structural-1.webp"
    ],
  },
  {
    title: "Various Tower Retrofitting Installations",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/retro-installations/retro-installations-1.webp", 
      "projects/retro-installations/retro-installations-2.webp", 
      "projects/retro-installations/retro-installations-3.webp", 
      "projects/retro-installations/retro-installations-4.webp", 
      "projects/retro-installations/retro-installations-6.webp", 
      "projects/retro-installations/retro-installations-7.webp",
      "projects/SST-retro/SST-retro-1.webp",
      "projects/SST-retro/SST-retro-2.webp",
      "projects/SST-retro/SST-retro-3.webp"
    ],
  },
  {
    title: "HDG Steel Supply and Fabrication",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/retrofitting-materials/retro-1.webp",
      "projects/retrofitting-materials/retro-2.webp",
      "projects/retrofitting-materials/retro-3.webp",
      "projects/retrofitting-materials/retro-4.webp",
      "projects/retrofitting-materials/retro-5.webp",
      "projects/retrofitting-materials/retro-6.webp",
      "projects/retrofitting-materials/retro-7.webp",
      "projects/retrofitting-materials/retro-8.webp",
      "projects/retrofitting-materials/retro-9.webp",
      "projects/retrofitting-materials/retro-10.webp",
      "projects/retrofitting-materials/retro-11.webp",
      "projects/retrofitting-materials/retro-12.webp",
      "projects/retrofitting-materials/retro-13.webp",
      "projects/retrofitting-materials/retro-14.webp",
      "projects/retrofitting-materials/retro-15.webp",
      "projects/retrofitting-materials/retro-16.webp",
      "projects/retrofitting-materials/retro-17.webp",
      "projects/retrofitting-materials/retro-18.webp",
      "projects/retrofitting-materials/retro-19.webp",
      "projects/retrofitting-materials/retro-20.webp",
      "projects/retrofitting-materials/retro-21.webp",
      "projects/retrofitting-materials/retro-22.webp",
      "projects/retrofitting-materials/retro-23.webp",
      "projects/retrofitting-materials/retro-24.webp",
      "projects/retrofitting-materials/retro-25.webp",
      "projects/retrofitting-materials/retro-26.webp",
      "projects/retrofitting-materials/retro-27.webp",
      "projects/retrofitting-materials/retro-28.webp",
      "projects/retrofitting-materials/retro-29.webp",
      "projects/retrofitting-materials/retro-30.webp",
      "projects/retrofitting-materials/retro-31.webp",
      "projects/retrofitting-materials/retro-32.webp",
      "projects/retrofitting-materials/retro-33.webp",
      "projects/retrofitting-materials/retro-34.webp",
      "projects/retrofitting-materials/retro-35.webp",
      "projects/retrofitting-materials/retro-36.webp",
      "projects/retrofitting-materials/retro-37.webp",
      "projects/retrofitting-materials/retro-38.webp",
      "projects/retrofitting-materials/retro-39.webp",
      "projects/retrofitting-materials/retro-40.webp",
      "projects/retrofitting-materials/retro-41.webp",
      "projects/retrofitting-materials/retro-42.webp",
      "projects/retrofitting-materials/retro-43.webp",
      "projects/retrofitting-materials/retro-44.webp",
      "projects/retrofitting-materials/retro-45.webp",
      "projects/retrofitting-materials/retro-46.webp",
      "projects/retrofitting-materials/retro-47.webp",
      "projects/retrofitting-materials/retro-48.webp",
      ],
  },
  {
    title: "N1523_Sun Mariveles Baseco Country Tower Conversion",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/N1523/N1523-1.webp", 
      "projects/N1523/N1523-2.webp", 
      "projects/N1523/N1523-3.webp", 
      "projects/N1523/N1523-4.webp", 
      "projects/N1523/N1523-5.webp", 
      "projects/N1523/N1523-6.webp"],
  },
  {
    title: "R34_Malita Tower Conversion",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/R34/R34-2.webp", 
      "projects/R34/R34-1.webp", 
      "projects/R34/R34-3.webp", 
      "projects/R34/R34-4.webp", 
      "projects/R34/R34-5.webp", 
      "projects/R34/R34-6.webp"],
  },
  {
    title: "PTCZG0023_NS-BIZ22-B02 Tower Construction",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/PTCZG0023/PTCZG0023-1.webp", 
      "projects/PTCZG0023/PTCZG0023-2.webp", 
      "projects/PTCZG0023/PTCZG0023-3.webp", 
      "projects/PTCZG0023/PTCZG0023-4.webp", 
      "projects/PTCZG0023/PTCZG0023-5.webp", 
      "projects/PTCZG0023/PTCZG0023-6.webp"], 
  },
  {
    title: "PTCZG0024_NS-BIZ22-A49 Tower Construction",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/PTCZG0024/PTCZG0024-1.webp", 
      "projects/PTCZG0024/PTCZG0024-2.webp", 
      "projects/PTCZG0024/PTCZG0024-3.webp", 
      "projects/PTCZG0024/PTCZG0024-4.webp", 
      "projects/PTCZG0024/PTCZG0024-5.webp", 
      "projects/PTCZG0024/PTCZG0024-6.webp"],
  },
  {
    title: "PTAKG0015_NS-NTG20-K10 Tower Construction",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/PTAKG0015/PTAKG0015-1.webp",
      "projects/PTAKG0015/PTAKG0015-2.webp",
      "projects/PTAKG0015/PTAKG0015-3.webp",
      "projects/PTAKG0015/PTAKG0015-4.webp",
      "projects/PTAKG0015/PTAKG0015-5.webp",
      "projects/PTAKG0015/PTAKG0015-6.webp"
    ],
  },
  {
    title: "NS_NTG18_B69 Bipod Construction",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/ns_ntg18/ns_ntg18-1.webp", 
      "projects/ns_ntg18/ns_ntg18-2.webp", 
      "projects/ns_ntg18/ns_ntg18-3.webp", 
      "projects/ns_ntg18/ns_ntg18-4.webp", 
      "projects/ns_ntg18/ns_ntg18-5.webp", 
      "projects/ns_ntg18/ns_ntg18-6.webp"],
  },
  {
    title: "E02929-B06_NS-TER24-B301 Tower Construction",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/E02929/E02929-1.webp", 
      "projects/E02929/E02929-2.webp",
      "projects/E02929/E02929-3.webp",
      "projects/E02929/E02929-4.webp",
      "projects/E02929/E02929-5.webp",
      "projects/E02929/E02929-6.webp",
      ],
  },
  {
    title: "PTCZG0020_NS-BIZ20-B65 Tower Construction",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/PTCZG0020/PTCZG0020-1.webp", 
      "projects/PTCZG0020/PTCZG0020-2.webp", 
      "projects/PTCZG0020/PTCZG0020-3.webp", 
      "projects/PTCZG0020/PTCZG0020-4.webp", 
      "projects/PTCZG0020/PTCZG0020-5.webp", 
      "projects/PTCZG0020/PTCZG0020-6.webp"],
  },
  {
    title: "E00003-A01_NS-NTG20-B98 24m Streetpole Construction",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/E00003/E00003-8.webp",
      "projects/E00003/E00003-2.webp",
      "projects/E00003/E00003-3.webp",
      "projects/E00003/E00003-4.webp",
      "projects/E00003/E00003-5.webp",
      "projects/E00003/E00003-6.webp",
      "projects/E00003/E00003-7.webp",
      "projects/E00003/E00003-1.webp"
    ],
  },
  {
    title: "PTCZG0022_NS-NTG23-G44",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/PTCZG0022/PTCZG0022-1.webp",
      "projects/PTCZG0022/PTCZG0022-2.webp",
      "projects/PTCZG0022/PTCZG0022-3.webp",
      "projects/PTCZG0022/PTCZG0022-4.webp",
      "projects/PTCZG0022/PTCZG0022-5.webp",
    ],
  },
  {
    title: "G6711_Quezon City Shopwise Commonwealth Colocation",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/G6711/G6711-1.webp",
      "projects/G6711/G6711-2.webp",
      "projects/G6711/G6711-3.webp",
      "projects/G6711/G6711-4.webp",
      "projects/G6711/G6711-5.webp",
      "projects/G6711/G6711-6.webp"
    ],
  },
  {
    title: "S1430_Sun Lucena Quezon City Colocation",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/S1430/S1430-1.webp",
      "projects/S1430/S1430-2.webp",
      "projects/S1430/S1430-3.webp",
      "projects/S1430/S1430-4.webp",
      "projects/S1430/S1430-5.webp",
      "projects/S1430/S1430-6.webp"
    ],
  },
  {
    title: "N1524_Sun Mariveles Alas Asin 2 Colocation",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/N1524/N1524-1.webp", 
      "projects/N1524/N1524-2.webp", 
      "projects/N1524/N1524-3.webp", 
      "projects/N1524/N1524-4.webp", 
      "projects/N1524/N1524-5.webp", 
      "projects/N1524/N1524-6.webp"],
  },
  {
    title: "N2325_Bauko Bagnen",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/N2325/N2325-1.webp", 
      "projects/N2325/N2325-2.webp", 
      "projects/N2325/N2325-3.webp", 
      "projects/N2325/N2325-4.webp"
    ],
  },
  {
    title: "G583_Zamboanga City 24m Streetpole Construction",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/G583/G583-1.webp", 
      "projects/G583/G583-2.webp", 
      "projects/G583/G583-3.webp"
    ],
  },
  {
    title: "W99_BF Homes Las Pinas 30m Monopole Construction",
    category: "Telecom Tower Construction Projects",
    images: [
      "projects/W99/W99-1.webp", 
      "projects/W99/W99-2.webp", 
      "projects/W99/W99-3.webp",
      "projects/W99/W99-4.webp",
      "projects/W99/W99-5.webp"
    ],
  },
  //End Telecom Tower Construction Projects

  //Residential Design and Construction Projects
  {
    title: "North Caloocan Townhouse Design Project",
    category: "Residential Design and Construction Projects",
    images: ["projects/north-cal-townhouse/north-cal-townhouse-1.webp"],
  },
  {
    title: "2-3 Storey Residential Design Project",
    category: "Residential Design and Construction Projects",
    images: ["projects/2-3-storey-residential/2-3-storey-residential.webp"],
  },
  {
    title: "4PH Pambansang Pabahay Design Project",
    category: "Residential Design and Construction Projects",
    images: [
      "projects/4ph/4ph5.webp",
      "projects/4ph/4ph2.webp",
      "projects/4ph/4ph3.webp",
      "projects/4ph/4ph4.webp",
      "projects/4ph/4ph1.webp",
      "projects/4ph/4PH.webp"
    ],
  },
  //End of Residential Design and Construction Projects

  //Warehouse and Industrial Projects
  {
    title: "Muntinlupa Warehouse CME Works",
    category: "Warehouse and Industrial Projects",
    images: [
      "projects/muntinlupa/muntinlupa-1.webp", 
      "projects/muntinlupa/muntinlupa-2.webp",
      "projects/muntinlupa/muntinlupa-3.webp",
      "projects/muntinlupa/muntinlupa-4.webp",
      "projects/muntinlupa/muntinlupa-5.webp",
      "projects/muntinlupa/muntinlupa-6.webp",
      "projects/muntinlupa/muntinlupa-7.webp",
    ],
  },
  {
    title: "Seascape Solar Panel Projects",
    category: "Warehouse and Industrial Projects",
    images: ["projects/seascape/seascape-1.webp"],
  },
  //End of Warehouse and Industrial Projects

  //wala sa list - OTHER PROJECTS ??
  {
    title: "3D & BIM Model",
    category: "Design and Other Projects",
    images: ["projects/3D/3D-1.webp"],
  },
  
  {
    title: "Existing Pole Surveys",
    category: "Design and Other Projects",
    images: ["projects/existing/existing-1.webp"],
  },
  {
    title: "Site Hunting, Permitting, Signal Testing",
    category: "Design and Other Projects",
    images: [
      "projects/signal-testing/signal-testing-1.webp",
      "projects/signal-testing/signal-testing-2.webp",
      "projects/signal-testing/signal-testing-3.webp",
      "projects/signal-testing/signal-testing-4.webp"
    ],
  },
  {
    title: "CD/TSSR Creation",
    category: "Design and Other Projects",
    images: [
      "projects/cd/cd-1.webp",
      "projects/cd/cd-2.webp",
      "projects/cd/cd-3.webp",
    ],
  },
  {
    title: "Site Solutioning",
    category: "Design and Other Projects",
    images: [
      "projects/site-solutioning/site-solutioning-1.webp", 
      "projects/site-solutioning/site-solutioning-2.webp"
    ],
  },
  {
    title: "Design and Analysis",
    category: "Design and Other Projects",
    images: ["projects/design-and-analysis/design-and-analysis-1.webp"],
  },
  {
    title: "NS-NTG20-K10",
    category: "Design and Other Projects",
    address: "Barangay Linabuan Sur, Banga, Aklan",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-BIZ22-A49",
    category: "Design and Other Projects",
    address: "Aguinaldo Corner Quezon St, Gubat, Sorsogon",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-BIZ22-B02",
    category: "Design and Other Projects",
    address: "Brgy. Lucero Jamindan Capiz",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-BIZ20-B65",
    category: "Design and Other Projects",
    address: "Barangay Balijuagan Roxas City, Capiz",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-NTG23-G44",
    category: "Design and Other Projects",
    address: "Brgy. Guintas, Sigma, Capiz",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-TER24-B301",
    category: "Design and Other Projects",
    address: "Brgy. Naddungan, Gattaran, Cagayan",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-NTG20-B98",
    category: "Design and Other Projects",
    address: "Miriam College, Katipunan Quezon City",
    description: "Smart Pole",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-NTG18-B69",
    category: "Design and Other Projects",
    address: "25 Perla ST., Pasay City",
    description: "6M Rooftop Bipod",
    ownerContractor: "Alliance Tower",
    images: [],
  },
  {
    title: "NS-NTG20-AD01",
    category: "Design and Other Projects",
    address: "SEAOIL, EDSA GUADALUPE",
    description: "9M Rooftop Bipod",
    ownerContractor: "Alliance Tower",
    images: [],
  },
  {
    title: "R34 - MALITA",
    category: "Design and Other Projects",
    address: "Davao Malita",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "CTCC/SMART",
    images: [],
  },
  {
    title: "N1523-BATAAN",
    category: "Design and Other Projects",
    address: "Mariveles, Bataan",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "CTCC/SMART",
    images: [],
  },
  {
    title: "S71 IROSIN",
    category: "Design and Other Projects",
    address: "St. Michael Church, Brgy. San Julian, Irosin, Sorsogon",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "S70 GUBAT",
    category: "Design and Other Projects",
    address: "Aguinaldo Corner Quezon St, Gubat, Sorsogon",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "V67 DONSOL-BUTANDING",
    category: "Design and Other Projects",
    address: "Dancalan, Donsol, Sorsogon",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "G7444 SUN-VALENZUELA CITY-PASO DE BLAS ROAD IRC COMPOUND",
    category: "Design and Other Projects",
    address: "651 Gen. Luis Road, Brgy. Paso de Blas, Valenzuela City",
    description: "9M ROOFTOP BIPOD",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "4171 CATAINGAN",
    category: "Design and Other Projects",
    address: "Crossing Poblacion, Cataingan, Masbate",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "4139 BULUSAN - SAN ROQUE",
    category: "Design and Other Projects",
    address: "Brgy. San Roque, Bulusan, Sorsogon",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "G7080 SUN - QC-UP DILIMAN 2",
    category: "Design and Other Projects",
    address: "Social Work Building, UP Diliman, Quezon City",
    description: "ROOFTOP BIPOD",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "G6403 MRT QUEZON AVENUE STATION",
    category: "Design and Other Projects",
    address: "MRT Quezon Avenue Station, Quezon City, Metro Manila",
    description: "SCATTERED POLES",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "3611 ST. ANTHONY (NEW ST. FRANCIS)",
    category: "Design and Other Projects",
    address: "Cor. Ipil and Chico St, Anthony Subd., Cainta, Rizal",
    description: "24M GREENFIELD MONOPOLE",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "4793 NAUJAN - SAN JOSE",
    category: "Design and Other Projects",
    address: "Brgy. San Jose, Naujan, Oriental Mindoro",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: " S0712 NAGA-CONCEPCION GRANDE",
    category: "Design and Other Projects",
    address: "Penafrancia Tours Compound, Brgy. Concepcion Grande, Naga City",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "S01 RAGAY, CAMARINES SUR",
    category: "Design and Other Projects",
    address: "PUP-Ragay Compound, Quirino Highway, Santa Cruz, Ragay",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "4710 REAL SADDLE - RETROFITTING",
    category: "Design and Other Projects",
    address: "Siniloan Famy Real Infanta Road Quezon",
    description: "3-LEGGED TUBULAR SST ",
    ownerContractor: "SMART/COMMTREND",
    images: [],
  },
  {
    title: "4870 TAKURONG 2 - RETROFITTING",
    category: "Design and Other Projects",
    address: "Takurong, Sultan Kudarat",
    description: "45M – 3 LEGGED TUBULAR SST",
    ownerContractor: "SMART/FIBERHOME/COMMTREND",
    images: [],
  },
  {
    title: "5146 SAN ISIDRO MANIKLING – FOUNDATION DESIGN",
    category: "Design and Other Projects",
    address: "Brgy. San Isidro, Manikling, Davao Oriental",
    description: "SPECIAL FOUNDATION DESIGN OF 4-LEGGED SST",
    ownerContractor: "SMART/FIBERHOME/COMMTREND",
    images: [],
  },
  {
    title: "M1291 SUN DAVAO MAA SUN COLOC - RETROFITTING",
    category: "Design and Other Projects",
    address: "Maa Talomo Davao City, Davao Del Sur",
    description: "51M – 4 LEGGED ANGULAR SST",
    ownerContractor: "SMART/FIBERHOME/COMMTREND",
    images: [],
  },
  {
    title: "PROPOSED 2-STOREY TOWNHOUSE",
    category: "Design and Other Projects",
    address: "Blk 21 Lot 5-A Road 41 Congress Village, Bagumbong Caloocan City",
    description: "2-STOREY TOWNHOUSE PROJECT",
    ownerContractor: "MR. RONNIE L. DAVID",
    images: [],
  },
  {
    title: "M2320 SUN STA CRUZ CORONAN - RETROFITTING",
    category: "Design and Other Projects",
    address: "Coronan Sta. Cruz, Davao del Sur",
    description: "52M – 4 LEGGED ANGULAR SST",
    ownerContractor: "SMART/FIBERHOME/COMMTREND",
    images: [],
  },
  {
    title: "M2410 SUN MATI STAMPA DAHICAN - RETROFITTING",
    category: "Design and Other Projects",
    address: "Stampa Dahican, Mati City",
    description: "50M – 4 LEGGED ANGULAR SST",
    ownerContractor: "SMART/FIBERHOME/COMMTREND",
    images: [],
  },
  {
    title: "M5942 SUN KIBURIAO QUEZON BUKIDNON-RETROFITTING",
    category: "Design and Other Projects",
    address: "Kiburiao Quezon Bukidnon",
    description: "60M – 4 LEGGED ANGULAR SST",
    ownerContractor: "SMART/FIBERHOME/COMMTREND",
    images: [],
  },
  {
    title: "JAIME B. CHING BUILDING GENERAL HOSPITAL INC.",
    category: "Design and Other Projects",
    address: "28P. Guevara Ave. Pagsawitan, Santa Cruz, Laguna",
    description: "6-STOREY HOSPITAL BUILDING",
    ownerContractor: "STA. CRUZ GENERAL AND SPECIALITY HOSPITAL INC.",
    images: [],
  },
  {
    title: "PROPOSED 2-STOREY RESIDENCE",
    category: "Design and Other Projects",
    address: "Lot 12564-A-2 Brgy. Maymanga, Amadeo, Cavite City",
    description: "2-STOREY RESIENTIAL BUILDING",
    ownerContractor: "TEKTONBILT CONSTRUCTION",
    images: [],
  },

];

export const projects: Project[] = rawProjects.map((project, index) => {
  // Generates a URL-friendly slug from the title (e.g., "Prima-struct-Engineering-Hub")
  const slug = project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return {
    ...project,
    // ID is now "0-prima-struct-engineering-hub"
    id: `${index}-${slug}` 
  };
});
