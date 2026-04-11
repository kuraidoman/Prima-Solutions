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
  {
    title: "2-Storey Townhouse Project",
    category: "Residential Constructions",
    images: ["projects/1.png", "projects/2.png", "projects/3.png"],
  },
  {
    title: "Vineyard Residences",
    category: "Residential Constructions",
    images: ["projects/46.png", "projects/47.png", "projects/48.png"],
  },
  {
    title: "Nuat Thai Project",
    category: "Fitout Constructions",
    images: ["projects/4.png", "projects/5.png", "projects/6.png"],
  },
  {
    title: "SM Clark City",
    category: "Fitout Constructions",
    images: ["projects/7.png"],
  },
  {
    title: "Ayala Mall Cebu City",
    category: "Fitout Constructions",
    images: ["projects/8.png", "projects/9.png"],
  },
  {
    title: "Pasig Condo",
    category: "Fitout Constructions",
    images: ["projects/37.png", "projects/38.png", "projects/39.png"],
  },
  {
    title: "Amalfi Ortigas Project",
    category: "Mall Constructions",
    images: ["projects/10.png", "projects/11.png", "projects/12.png"],
  },
  {
    title: "Castillejos Commons Mall",
    category: "Mall Constructions",
    images: ["projects/40.png", "projects/41.png", "projects/42.png"],
  },
  {
    title: "Peri-Peri Lipa City",
    category: "Commercial Buildings Constructions",
    images: ["projects/13.png"],
  },
  {
    title: "Peri-Peri Capitol Pasig",
    category: "Commercial Buildings Constructions",
    images: ["projects/14.png"],
  },
  {
    title: "Peri-Peri MCU",
    category: "Commercial Buildings Constructions",
    images: ["projects/24.png", "projects/25.png", "projects/26.png", "projects/27.png", "projects/28.png"],
  },
  {
    title: "Peri-Peri Vermosa",
    category: "Commercial Buildings Constructions",
    images: ["projects/29.png", "projects/30.png", "projects/31.png", "projects/32.png", "projects/33.png"],
  },
  {
    title: "Seascape Solar",
    category: "Sustainability Constructions",
    images: ["projects/15.png"],
  },
  {
    title: "Lotus Pad Bamboo Structure",
    category: "Sustainability Constructions",
    images: ["projects/34.png", "projects/35.png", "projects/36.png"],
  },
  {
    title: "Townhouse Projects",
    category: "Real Estate and Socialized Housing Project",
    images: ["projects/16.png"],
  },
  {
    title: "2-3 Storey Residential Projects",
    category: "Real Estate and Socialized Housing Project",
    images: ["projects/17.png"],
  },
  {
    title: "4PH Pambansang Bahay Projects",
    category: "Real Estate and Socialized Housing Project",
    images: ["projects/18.png"],
  },
  {
    title: "Mid-High Rise Residential Project",
    category: "Structural Analysis and Calculations",
    images: ["projects/19.png"],
  },
  {
    title: "Unique / Architectural Designs",
    category: "Structural Analysis and Calculations",
    images: ["projects/20.png"],
  },
  {
    title: "3D & BIM Model",
    category: "Structural Analysis and Calculations",
    images: ["projects/21.png"],
  },
  {
    title: "Muntinlupa Warehouse CME Works",
    category: "Warehouse Construction",
    images: ["projects/22.png", "projects/23.png"],
  },
  {
    title: "Alesea Oeste Commercial",
    category: "Airbnb Projects",
    images: ["projects/43.png", "projects/44.png", "projects/45.png"],
  },
  {
    title: "Structural Modeling",
    category: "Tower Retrofitting Projects",
    images: ["projects/49.png"],
  },
  {
    title: "Retrofitting Installations",
    category: "Tower Retrofitting Projects",
    images: ["projects/50.png", "projects/51.png", "projects/52.png"],
  },
  {
    title: "Carbon Fiber Plates Installations",
    category: "Tower Retrofitting Projects",
    images: ["projects/53.png", "projects/54.png"],
  },
  {
    title: "Retrofitting Materials",
    category: "Tower Retrofitting Projects",
    images: ["projects/55.png", "projects/56.png", "projects/58.png"],
  },
  {
    title: "SST Retrofitting Installations",
    category: "Tower Retrofitting Projects",
    images: ["projects/57.png", "projects/59.png", "projects/60.png"],
  },
  {
    title: "Existing Pole Surveys",
    category: "SAQ/TSSR/Site Solutioning/CD Creation",
    images: ["projects/65.png"],
  },
  {
    title: "Signal Testing",
    category: "SAQ/TSSR/Site Solutioning/CD Creation",
    images: ["projects/66.png"],
  },
  {
    title: "CD/TSSR Creation",
    category: "SAQ/TSSR/Site Solutioning/CD Creation",
    images: ["projects/67.png", "projects/68.png", "projects/69.png"],
  },
  {
    title: "Site Solutioning",
    category: "SAQ/TSSR/Site Solutioning/CD Creation",
    images: ["projects/70.png", "projects/71.png"],
  },
  {
    title: "Design and Analysis",
    category: "SAQ/TSSR/Site Solutioning/CD Creation",
    images: ["projects/72.png"],
  },
  {
    title: "N1523_SUN MARIVELES BASECO COUNTRY",
    category: "Tower Conversion",
    images: ["projects/73.png", "projects/74.png", "projects/75.png", "projects/76.png", "projects/77.png", "projects/78.png"],
  },
  {
    title: "R34_Malita",
    category: "Tower Conversion",
    images: ["projects/79.png", "projects/80.png", "projects/81.png", "projects/82.png", "projects/83.png", "projects/84.png"],
  },
  {
    title: "PTCZG0023_NS-BIZ22-B02",
    category: "Build to Suite (BTS) Projects",
    images: ["projects/85.png", "projects/86.png", "projects/87.png", "projects/88.png", "projects/89.png", "projects/90.png"], 
  },
  {
    title: "PTCZG0024_NS-BIZ22-A49",
    category: "Build to Suite (BTS) Projects",
    images: ["projects/91.png", "projects/92.png", "projects/93.png", "projects/94.png", "projects/95.png", "projects/96.png"],
  },
  {
    title: "PTAKG0015_NS-NTG20-K10",
    category: "Build to Suite (BTS) Projects",
    images: ["projects/97.png", "projects/98.png", "projects/99.png", "projects/100.png", "projects/101.png", "projects/102.png"],
  },
  {
    title: "NS_NTG18_B69",
    category: "Build to Suite (BTS) Projects",
    images: ["projects/103.png", "projects/104.png", "projects/105.png", "projects/106.png", "projects/107.png", "projects/108.png"],
  },
  {
    title: "E02929-B06_NS-TER24-B301",
    category: "Build to Suite (BTS) Projects",
    images: ["projects/109.png", "projects/110.png", "projects/111.png", "projects/112.png", "projects/113.png", "projects/114.png"],
  },
  {
    title: "PTCZG0020_NS-BIZ20-B65 ",
    category: "Build to Suite (BTS) Projects",
    images: ["projects/115.png", "projects/116.png", "projects/117.png", "projects/118.png", "projects/119.png", "projects/120.png"],
  },
  {
    title: "E00003-A01_NS-NTG20-B98",
    category: "Build to Suite (BTS) Projects",
    images: ["projects/121.png", "projects/122.png", "projects/123.png", "projects/124.png", "projects/125.png", "projects/126.png"],
  },
  {
    title: "PTCZG0022_NS-NTG23-G44",
    category: "Build to Suite (BTS) Projects",
    images: ["projects/127.png", "projects/128.png", "projects/129.png", "projects/130.png", "projects/131.png", "projects/132.png"],
  },
  {
    title: "G6711_QUEZON CITY SHOPWISE COMMONWEALTH",
    category: "Colocation Projects",
    images: ["projects/133.png", "projects/134.png", "projects/135.png", "projects/136.png", "projects/137.png", "projects/138.png"],
  },
  {
    title: "S1430_SUN LUCENA QUEZON CITY",
    category: "Colocation Projects",
    images: ["projects/139.png", "projects/140.png", "projects/141.png", "projects/142.png", "projects/143.png", "projects/144.png"],
  },
  {
    title: "N1524_SUN MARIVELES ALAS ASIN 2",
    category: "Colocation Projects",
    images: ["projects/145.png", "projects/146.png", "projects/147.png", "projects/148.png", "projects/149.png", "projects/150.png"],
  },
  {
    title: "N2325_BAUKO BAGNEN",
    category: "Colocation Projects",
    images: ["projects/151.png", "projects/152.png", "projects/153.png", "projects/154.png"],
  },
  {
    title: "NS-NTG20-K10",
    category: "Done and On-Going Build to Suite Projects",
    address: "Barangay Linabuan Sur, Banga, Aklan",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-BIZ22-A49",
    category: "Done and On-Going Build to Suite Projects",
    address: "Aguinaldo Corner Quezon St, Gubat, Sorsogon",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-BIZ22-B02",
    category: "Done and On-Going Build to Suite Projects",
    address: "Brgy. Lucero Jamindan Capiz",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-BIZ20-B65",
    category: "Done and On-Going Build to Suite Projects",
    address: "Barangay Balijuagan Roxas City, Capiz",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-NTG23-G44",
    category: "Done and On-Going Build to Suite Projects",
    address: "Brgy. Guintas, Sigma, Capiz",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-TER24-B301",
    category: "Done and On-Going Build to Suite Projects",
    address: "Brgy. Naddungan, Gattaran, Cagayan",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-NTG20-B98",
    category: "Done and On-Going Build to Suite Projects",
    address: "Miriam College, Katipunan Quezon City",
    description: "Smart Pole",
    ownerContractor: "MIDC/PHILTOWER",
    images: [],
  },
  {
    title: "NS-NTG18-B69",
    category: "Done and On-Going Build to Suite Projects",
    address: "25 Perla ST., Pasay City",
    description: "6M Rooftop Bipod",
    ownerContractor: "Alliance Tower",
    images: [],
  },
  {
    title: "NS-NTG20-AD01",
    category: "Done and On-Going Build to Suite Projects",
    address: "SEAOIL, EDSA GUADALUPE",
    description: "9M Rooftop Bipod",
    ownerContractor: "Alliance Tower",
    images: [],
  },
  {
    title: "R34 - MALITA",
    category: "Done and On-Going Build to Suite Projects",
    address: "Davao Malita",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "CTCC/SMART",
    images: [],
  },
  {
    title: "N1523-BATAAN",
    category: "Done and On-Going Build to Suite Projects",
    address: "Mariveles, Bataan",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "CTCC/SMART",
    images: [],
  },
  {
    title: "S71 IROSIN",
    category: "Done and On-Going Build to Suite Projects",
    address: "St. Michael Church, Brgy. San Julian, Irosin, Sorsogon",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "S70 GUBAT",
    category: "Done and On-Going Build to Suite Projects",
    address: "Aguinaldo Corner Quezon St, Gubat, Sorsogon",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "V67 DONSOL-BUTANDING",
    category: "Done and On-Going Build to Suite Projects",
    address: "Dancalan, Donsol, Sorsogon",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "G7444 SUN-VALENZUELA CITY-PASO DE BLAS ROAD IRC COMPOUND",
    category: "Done and On-Going Build to Suite Projects",
    address: "651 Gen. Luis Road, Brgy. Paso de Blas, Valenzuela City",
    description: "9M ROOFTOP BIPOD",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "4171 CATAINGAN",
    category: "Done and On-Going Build to Suite Projects",
    address: "Crossing Poblacion, Cataingan, Masbate",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "4139 BULUSAN - SAN ROQUE",
    category: "Done and On-Going Build to Suite Projects",
    address: "Brgy. San Roque, Bulusan, Sorsogon",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "G7080 SUN - QC-UP DILIMAN 2",
    category: "Done and On-Going Build to Suite Projects",
    address: "Social Work Building, UP Diliman, Quezon City",
    description: "ROOFTOP BIPOD",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "G6403 MRT QUEZON AVENUE STATION",
    category: "Done and On-Going Build to Suite Projects",
    address: "MRT Quezon Avenue Station, Quezon City, Metro Manila",
    description: "SCATTERED POLES",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "3611 ST. ANTHONY (NEW ST. FRANCIS)",
    category: "Done and On-Going Build to Suite Projects",
    address: "Cor. Ipil and Chico St, Anthony Subd., Cainta, Rizal",
    description: "24M GREENFIELD MONOPOLE",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "4793 NAUJAN - SAN JOSE",
    category: "Done and On-Going Build to Suite Projects",
    address: "Brgy. San Jose, Naujan, Oriental Mindoro",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: " S0712 NAGA-CONCEPCION GRANDE",
    category: "Done and On-Going Build to Suite Projects",
    address: "Penafrancia Tours Compound, Brgy. Concepcion Grande, Naga City",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "S01 RAGAY, CAMARINES SUR",
    category: "Done and On-Going Build to Suite Projects",
    address: "PUP-Ragay Compound, Quirino Highway, Santa Cruz, Ragay",
    description: "3-LEGGED GREENFIELD SELF-SUPPORTING TOWER",
    ownerContractor: "SMART/SMSGT",
    images: [],
  },
  {
    title: "4710 REAL SADDLE - RETROFITTING",
    category: "Done and On-Going Build to Suite Projects",
    address: "Siniloan Famy Real Infanta Road Quezon",
    description: "3-LEGGED TUBULAR SST ",
    ownerContractor: "SMART/COMMTREND",
    images: [],
  },
  {
    title: "4870 TAKURONG 2 - RETROFITTING",
    category: "Done and On-Going Build to Suite Projects",
    address: "Takurong, Sultan Kudarat",
    description: "45M – 3 LEGGED TUBULAR SST",
    ownerContractor: "SMART/FIBERHOME/COMMTREND",
    images: [],
  },
  {
    title: "5146 SAN ISIDRO MANIKLING – FOUNDATION DESIGN",
    category: "Done and On-Going Build to Suite Projects",
    address: "Brgy. San Isidro, Manikling, Davao Oriental",
    description: "SPECIAL FOUNDATION DESIGN OF 4-LEGGED SST",
    ownerContractor: "SMART/FIBERHOME/COMMTREND",
    images: [],
  },
  {
    title: "M1291 SUN DAVAO MAA SUN COLOC - RETROFITTING",
    category: "Done and On-Going Build to Suite Projects",
    address: "Maa Talomo Davao City, Davao Del Sur",
    description: "51M – 4 LEGGED ANGULAR SST",
    ownerContractor: "SMART/FIBERHOME/COMMTREND",
    images: [],
  },
  {
    title: "PROPOSED 2-STOREY TOWNHOUSE",
    category: "Done and On-Going Build to Suite Projects",
    address: "Blk 21 Lot 5-A Road 41 Congress Village, Bagumbong Caloocan City",
    description: "2-STOREY TOWNHOUSE PROJECT",
    ownerContractor: "MR. RONNIE L. DAVID",
    images: [],
  },
  {
    title: "M2320 SUN STA CRUZ CORONAN - RETROFITTING",
    category: "Done and On-Going Build to Suite Projects",
    address: "Coronan Sta. Cruz, Davao del Sur",
    description: "52M – 4 LEGGED ANGULAR SST",
    ownerContractor: "SMART/FIBERHOME/COMMTREND",
    images: [],
  },
  {
    title: "M2410 SUN MATI STAMPA DAHICAN - RETROFITTING",
    category: "Done and On-Going Build to Suite Projects",
    address: "Stampa Dahican, Mati City",
    description: "50M – 4 LEGGED ANGULAR SST",
    ownerContractor: "SMART/FIBERHOME/COMMTREND",
    images: [],
  },
  {
    title: "M5942 SUN KIBURIAO QUEZON BUKIDNON-RETROFITTING",
    category: "Done and On-Going Build to Suite Projects",
    address: "Kiburiao Quezon Bukidnon",
    description: "60M – 4 LEGGED ANGULAR SST",
    ownerContractor: "SMART/FIBERHOME/COMMTREND",
    images: [],
  },
  {
    title: "JAIME B. CHING BUILDING GENERAL HOSPITAL INC.",
    category: "Done and On-Going Build to Suite Projects",
    address: "28P. Guevara Ave. Pagsawitan, Santa Cruz, Laguna",
    description: "6-STOREY HOSPITAL BUILDING",
    ownerContractor: "STA. CRUZ GENERAL AND SPECIALITY HOSPITAL INC.",
    images: [],
  },
  {
    title: "PROPOSED 2-STOREY RESIDENCE",
    category: "Done and On-Going Build to Suite Projects",
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
