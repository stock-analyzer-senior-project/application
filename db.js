const data = [
        {
          "Symbol": "AAPL",
          "Name": "Apple Inc.",
          "Price": 165.21,
          "ESG Rating": "AA"
        },
        {
          "Symbol": "MSFT",
          "Name": "Microsoft Corporation",
          "Price": 286.14,
          "ESG Rating": "AA"
        },
        {
          "Symbol": "GOOGL",
          "Name": "Alphabet Inc.",
          "Price": 108.87,
          "ESG Rating": "AA"
        },
        {
          "Symbol": "AMZN",
          "Name": "Amazon.com, Inc.",
          "Price": 102.51,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "NVDA",
          "Name": "NVIDIA Corporation",
          "Price": 267.58,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "TSLA",
          "Name": "Tesla, Inc.",
          "Price": 185,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "META",
          "Name": "Meta Platforms, Inc.",
          "Price": 221.49,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ASML",
          "Name": "ASML Holding N.V.",
          "Price": 666.2,
          "ESG Rating": "AAA"
        },
        {
          "Symbol": "AVGO",
          "Name": "Broadcom Inc.",
          "Price": 619.54,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "PEP",
          "Name": "PepsiCo, Inc.",
          "Price": 183.51,
          "ESG Rating": "AAA"
        },
        {
          "Symbol": "AZN",
          "Name": "AstraZeneca PLC",
          "Price": 73.86,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "COST",
          "Name": "Costco Wholesale Corporation",
          "Price": 491.3,
          "ESG Rating": "A"
        },
        {
          "Symbol": "CSCO",
          "Name": "Cisco Systems, Inc.",
          "Price": 50.54,
          "ESG Rating": "A"
        },
        {
          "Symbol": "TMUS",
          "Name": "T-Mobile US, Inc.",
          "Price": 149.59,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ADBE",
          "Name": "Adobe Inc.",
          "Price": 379.38,
          "ESG Rating": "AA"
        },
        {
          "Symbol": "TXN",
          "Name": "Texas Instruments Incorporated",
          "Price": 178.98,
          "ESG Rating": "A"
        },
        {
          "Symbol": "CMCSA",
          "Name": "Comcast Corporation",
          "Price": 37.96,
          "ESG Rating": "A"
        },
        {
          "Symbol": "NFLX",
          "Name": "Netflix, Inc.",
          "Price": 338.63,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "AMD",
          "Name": "Advanced Micro Devices, Inc.",
          "Price": 91.75,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "SNY",
          "Name": "Sanofi",
          "Price": 56.15,
          "ESG Rating": "AA"
        },
        {
          "Symbol": "QCOM",
          "Name": "QUALCOMM Incorporated",
          "Price": 120.16,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "AMGN",
          "Name": "Amgen Inc.",
          "Price": 250,
          "ESG Rating": "A"
        },
        {
          "Symbol": "INTC",
          "Name": "Intel Corporation",
          "Price": 31.89,
          "ESG Rating": "A"
        },
        {
          "Symbol": "HON",
          "Name": "Honeywell International Inc.",
          "Price": 196.55,
          "ESG Rating": "A"
        },
        {
          "Symbol": "INTU",
          "Name": "Intuit Inc.",
          "Price": 441.62,
          "ESG Rating": "A"
        },
        {
          "Symbol": "SBUX",
          "Name": "Starbucks Corporation",
          "Price": 107.47,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "GILD",
          "Name": "Gilead Sciences, Inc.",
          "Price": 83,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "BKNG",
          "Name": "Booking Holdings Inc.",
          "Price": "2,649.86",
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "AMAT",
          "Name": "Applied Materials, Inc.",
          "Price": 112.9,
          "ESG Rating": "A"
        },
        {
          "Symbol": "ADI",
          "Name": "Analog Devices, Inc.",
          "Price": 188.51,
          "ESG Rating": "A"
        },
        {
          "Symbol": "MDLZ",
          "Name": "Mondelez International, Inc.",
          "Price": 69.81,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ISRG",
          "Name": "Intuitive Surgical, Inc.",
          "Price": 267.02,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ADP",
          "Name": "Automatic Data Processing, Inc.",
          "Price": 215.7,
          "ESG Rating": "A"
        },
        {
          "Symbol": "REGN",
          "Name": "Regeneron Pharmaceuticals, Inc.",
          "Price": 829.33,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "PYPL",
          "Name": "PayPal Holdings, Inc.",
          "Price": 76.53,
          "ESG Rating": "A"
        },
        {
          "Symbol": "VRTX",
          "Name": "Vertex Pharmaceuticals Incorporated",
          "Price": 333.52,
          "ESG Rating": "AA"
        },
        {
          "Symbol": "PDD",
          "Name": "PDD Holdings Inc.",
          "Price": 67.68,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "ABNB",
          "Name": "Airbnb, Inc.",
          "Price": 114.65,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "FISV",
          "Name": "Fiserv, Inc.",
          "Price": 115.59,
          "ESG Rating": "A"
        },
        {
          "Symbol": "JD",
          "Name": "JD.com, Inc.",
          "Price": 36.85,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "MU",
          "Name": "Micron Technology, Inc.",
          "Price": 62.63,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "CME",
          "Name": "CME Group Inc.",
          "Price": 190.48,
          "ESG Rating": "A"
        },
        {
          "Symbol": "LRCX",
          "Name": "Lam Research Corporation",
          "Price": 500.84,
          "ESG Rating": "A"
        },
        {
          "Symbol": "ATVI",
          "Name": "Activision Blizzard, Inc.",
          "Price": 85.27,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "MELI",
          "Name": "MercadoLibre, Inc.",
          "Price": "1,301.88",
          "ESG Rating": "BB"
        },
        {
          "Symbol": "EQIX",
          "Name": "Equinix, Inc.",
          "Price": 688.68,
          "ESG Rating": "A"
        },
        {
          "Symbol": "CSX",
          "Name": "CSX Corporation",
          "Price": 30.46,
          "ESG Rating": "A"
        },
        {
          "Symbol": "MRNA",
          "Name": "Moderna, Inc.",
          "Price": 157.1,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "PANW",
          "Name": "Palo Alto Networks, Inc.",
          "Price": 199.44,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "NTES",
          "Name": "NetEase, Inc.",
          "Price": 90.44,
          "ESG Rating": "AA"
        },
        {
          "Symbol": "CDNS",
          "Name": "Cadence Design Systems, Inc.",
          "Price": 214.55,
          "ESG Rating": "A"
        },
        {
          "Symbol": "SNPS",
          "Name": "Synopsys, Inc.",
          "Price": 381.68,
          "ESG Rating": "A"
        },
        {
          "Symbol": "ORLY",
          "Name": "O'Reilly Automotive, Inc.",
          "Price": 892.27,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "MNST",
          "Name": "Monster Beverage Corporation",
          "Price": 52.56,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "FTNT",
          "Name": "Fortinet, Inc.",
          "Price": 68.07,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "CHTR",
          "Name": "Charter Communications, Inc.",
          "Price": 341.5,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "KLAC",
          "Name": "KLA Corporation",
          "Price": 375.04,
          "ESG Rating": "A"
        },
        {
          "Symbol": "MAR",
          "Name": "Marriott International, Inc.",
          "Price": 168.1,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "WDAY",
          "Name": "Workday, Inc.",
          "Price": 194.04,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "KDP",
          "Name": "Keurig Dr Pepper Inc.",
          "Price": 35.1,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "KHC",
          "Name": "The Kraft Heinz Company",
          "Price": 39.1,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "AEP",
          "Name": "American Electric Power Company, Inc.",
          "Price": 92.5,
          "ESG Rating": "A"
        },
        {
          "Symbol": "BIDU",
          "Name": "Baidu, Inc.",
          "Price": 128.75,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "LULU",
          "Name": "Lululemon Athletica Inc.",
          "Price": 368.25,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "CTAS",
          "Name": "Cintas Corporation",
          "Price": 458.61,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "NXPI",
          "Name": "NXP Semiconductors N.V.",
          "Price": 172.35,
          "ESG Rating": "A"
        },
        {
          "Symbol": "DXCM",
          "Name": "DexCom, Inc.",
          "Price": 115.7,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "MCHP",
          "Name": "Microchip Technology Incorporated",
          "Price": 79.53,
          "ESG Rating": "A"
        },
        {
          "Symbol": "TEAM",
          "Name": "Atlassian Corporation Plc",
          "Price": 165.53,
          "ESG Rating": "A"
        },
        {
          "Symbol": "EXC",
          "Name": "Exelon Corporation",
          "Price": 42.13,
          "ESG Rating": "A"
        },
        {
          "Symbol": "ADSK",
          "Name": "Autodesk, Inc.",
          "Price": 194.66,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "BIIB",
          "Name": "Biogen Inc.",
          "Price": 288.13,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "IDXX",
          "Name": "IDEXX Laboratories, Inc.",
          "Price": 482.49,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "PAYX",
          "Name": "Paychex, Inc.",
          "Price": 107.92,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "XEL",
          "Name": "Xcel Energy Inc.",
          "Price": 70.14,
          "ESG Rating": "A"
        },
        {
          "Symbol": "SGEN",
          "Name": "Seagen Inc.",
          "Price": 205.5,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "PCAR",
          "Name": "PACCAR Inc",
          "Price": 72.72,
          "ESG Rating": "A"
        },
        {
          "Symbol": "GEHC",
          "Name": "GE HealthCare Technologies Inc.",
          "Price": 82.37,
          "ESG Rating": "A"
        },
        {
          "Symbol": "ODFL",
          "Name": "Old Dominion Freight Line, Inc.",
          "Price": 338.67,
          "ESG Rating": "A"
        },
        {
          "Symbol": "CPRT",
          "Name": "Copart, Inc.",
          "Price": 77.12,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ILMN",
          "Name": "Illumina, Inc.",
          "Price": 228.01,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "GFS",
          "Name": "GLOBALFOUNDRIES Inc.",
          "Price": 65.85,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ROST",
          "Name": "Ross Stores, Inc.",
          "Price": 104.6,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "EA",
          "Name": "Electronic Arts Inc.",
          "Price": 127.87,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "IBKR",
          "Name": "Interactive Brokers Group, Inc.",
          "Price": 83.2,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "MRVL",
          "Name": "Marvell Technology, Inc.",
          "Price": 40.29,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ON",
          "Name": "ON Semiconductor Corporation",
          "Price": 77.92,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "WBD",
          "Name": "Warner Bros. Discovery, Inc.",
          "Price": 13.78,
          "ESG Rating": "B"
        },
        {
          "Symbol": "DLTR",
          "Name": "Dollar Tree, Inc.",
          "Price": 147.9,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "MBLY",
          "Name": "Mobileye Global Inc.",
          "Price": 41.68,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "CRWD",
          "Name": "CrowdStrike Holdings, Inc.",
          "Price": 135.77,
          "ESG Rating": "B"
        },
        {
          "Symbol": "BNTX",
          "Name": "BioNTech SE",
          "Price": 129.66,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "VOD",
          "Name": "Vodafone Group PLC",
          "Price": 11.36,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "CTSH",
          "Name": "Cognizant Technology Solutions Corporation",
          "Price": 60.04,
          "ESG Rating": "A"
        },
        {
          "Symbol": "WBA",
          "Name": "Walgreens Boots Alliance, Inc.",
          "Price": 35.32,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "FAST",
          "Name": "Fastenal Company",
          "Price": 53.27,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "TTD",
          "Name": "The Trade Desk, Inc.",
          "Price": 60.69,
          "ESG Rating": "B"
        },
        {
          "Symbol": "VRSK",
          "Name": "Verisk Analytics, Inc.",
          "Price": 191.86,
          "ESG Rating": "A"
        },
        {
          "Symbol": "BKR",
          "Name": "Baker Hughes Company",
          "Price": 29.15,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "ENPH",
          "Name": "Enphase Energy, Inc.",
          "Price": 208.9,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "CSGP",
          "Name": "CoStar Group, Inc.",
          "Price": 69.22,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "SBAC",
          "Name": "SBA Communications Corporation",
          "Price": 258.53,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "BGNE",
          "Name": "BeiGene, Ltd.",
          "Price": 264,
          "ESG Rating": "B"
        },
        {
          "Symbol": "ANSS",
          "Name": "ANSYS, Inc.",
          "Price": 317.47,
          "ESG Rating": "A"
        },
        {
          "Symbol": "CCEP",
          "Name": "Coca-Cola Europacific Partners PLC",
          "Price": 59.88,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "GMAB",
          "Name": "Genmab A/S",
          "Price": 41.58,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "NDAQ",
          "Name": "Nasdaq, Inc.",
          "Price": 55.16,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "FANG",
          "Name": "Diamondback Energy, Inc.",
          "Price": 146.74,
          "ESG Rating": "B"
        },
        {
          "Symbol": "ULTA",
          "Name": "Ulta Beauty, Inc.",
          "Price": 534.66,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ALGN",
          "Name": "Align Technology, Inc.",
          "Price": 342.27,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ACGL",
          "Name": "Arch Capital Group Ltd.",
          "Price": 70.25,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "TSCO",
          "Name": "Tractor Supply Company",
          "Price": 237.95,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "HZNP",
          "Name": "Horizon Therapeutics PLC",
          "Price": 111.6,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "TROW",
          "Name": "T. Rowe Price Group, Inc.",
          "Price": 113.27,
          "ESG Rating": "A"
        },
        {
          "Symbol": "ALNY",
          "Name": "Alnylam Pharmaceuticals, Inc.",
          "Price": 203.92,
          "ESG Rating": "B"
        },
        {
          "Symbol": "WTW",
          "Name": "Willis Towers Watson PLC",
          "Price": 237.46,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "CDW",
          "Name": "CDW Corporation",
          "Price": 186.96,
          "ESG Rating": "A"
        },
        {
          "Symbol": "CEG",
          "Name": "Constellation Energy Corporation",
          "Price": 76.43,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "LI",
          "Name": "Li Auto Inc.",
          "Price": 24.56,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "EBAY",
          "Name": "eBay Inc.",
          "Price": 43.53,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "TCOM",
          "Name": "Trip.com Group Limited",
          "Price": 35.48,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "VRSN",
          "Name": "VeriSign, Inc.",
          "Price": 216.46,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "MPWR",
          "Name": "Monolithic Power Systems, Inc.",
          "Price": 477.27,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "FSLR",
          "Name": "First Solar, Inc.",
          "Price": 208.4,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "PODD",
          "Name": "Insulet Corporation",
          "Price": 318.82,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "DDOG",
          "Name": "Datadog, Inc.",
          "Price": 67.32,
          "ESG Rating": "B"
        },
        {
          "Symbol": "RYAAY",
          "Name": "Ryanair Holdings plc",
          "Price": 93.48,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "ARGX",
          "Name": "argenx SE",
          "Price": 382.99,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "TTWO",
          "Name": "Take-Two Interactive Software, Inc.",
          "Price": 123.07,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "HOLX",
          "Name": "Hologic, Inc.",
          "Price": 84.14,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ZM",
          "Name": "Zoom Video Communications, Inc.",
          "Price": 69.5,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ERIC",
          "Name": "Telefonaktiebolaget LM Ericsson (publ)",
          "Price": 5.96,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "IEP",
          "Name": "Icahn Enterprises L.P.",
          "Price": 52.72,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "BMRN",
          "Name": "BioMarin Pharmaceutical Inc.",
          "Price": 99.01,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "PFG",
          "Name": "Principal Financial Group, Inc.",
          "Price": 75.89,
          "ESG Rating": "A"
        },
        {
          "Symbol": "JBHT",
          "Name": "J.B. Hunt Transport Services, Inc.",
          "Price": 176.77,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "NTRS",
          "Name": "Northern Trust Corporation",
          "Price": 87.92,
          "ESG Rating": "A"
        },
        {
          "Symbol": "FITB",
          "Name": "Fifth Third Bancorp",
          "Price": 26.44,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "STLD",
          "Name": "Steel Dynamics, Inc.",
          "Price": 104.46,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "SWKS",
          "Name": "Skyworks Solutions, Inc.",
          "Price": 110.08,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "EXPD",
          "Name": "Expeditors International of Washington, Inc.",
          "Price": 111.67,
          "ESG Rating": "A"
        },
        {
          "Symbol": "FOX",
          "Name": "Fox Corporation",
          "Price": 30.75,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "FOXA",
          "Name": "Fox Corporation",
          "Price": 33.41,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "ICLR",
          "Name": "ICON PLC",
          "Price": 209.78,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "FWONA",
          "Name": "Formula One Group",
          "Price": 66.68,
          "ESG Rating": "B"
        },
        {
          "Symbol": "AAL",
          "Name": "American Airlines Group Inc.",
          "Price": 12.79,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "SEDG",
          "Name": "SolarEdge Technologies, Inc.",
          "Price": 300.46,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "CINF",
          "Name": "Cincinnati Financial Corporation",
          "Price": 106.74,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "INCY",
          "Name": "Incyte Corporation",
          "Price": 74.5,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "CHKP",
          "Name": "Check Point Software Technologies Ltd.",
          "Price": 132.41,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "HBAN",
          "Name": "Huntington Bancshares Incorporated",
          "Price": 11.41,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "AXON",
          "Name": "Axon Enterprise, Inc.",
          "Price": 223.91,
          "ESG Rating": "B"
        },
        {
          "Symbol": "TW",
          "Name": "Tradeweb Markets Inc.",
          "Price": 70.6,
          "ESG Rating": "A"
        },
        {
          "Symbol": "COIN",
          "Name": "Coinbase Global, Inc.",
          "Price": 69.91,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "WMG",
          "Name": "Warner Music Group Corp.",
          "Price": 31.36,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "RPRX",
          "Name": "Royalty Pharma plc",
          "Price": 36.26,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LPLA",
          "Name": "LPL Financial Holdings Inc.",
          "Price": 202.99,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "SYM",
          "Name": "Symbotic Inc.",
          "Price": 27.94,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "TER",
          "Name": "Teradyne, Inc.",
          "Price": 100.75,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "AZPN",
          "Name": "Aspen Technology, Inc.",
          "Price": 241.64,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "MDB",
          "Name": "MongoDB, Inc.",
          "Price": 223.09,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "ZBRA",
          "Name": "Zebra Technologies Corporation",
          "Price": 303.08,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "SIRI",
          "Name": "Sirius XM Holdings Inc.",
          "Price": 3.96,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ZS",
          "Name": "Zscaler, Inc.",
          "Price": 105.45,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "PTC",
          "Name": "PTC Inc.",
          "Price": 127.73,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "SPLK",
          "Name": "Splunk Inc.",
          "Price": 91,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "LKQ",
          "Name": "LKQ Corporation",
          "Price": 56.32,
          "ESG Rating": "B"
        },
        {
          "Symbol": "HTHT",
          "Name": "H World Group Limited",
          "Price": 47.15,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "NICE",
          "Name": "NICE Ltd.",
          "Price": 227.31,
          "ESG Rating": "A"
        },
        {
          "Symbol": "SSNC",
          "Name": "SS&C Technologies Holdings, Inc.",
          "Price": 57.48,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "NTAP",
          "Name": "NetApp, Inc.",
          "Price": 66.35,
          "ESG Rating": "A"
        },
        {
          "Symbol": "PARA",
          "Name": "Paramount Global",
          "Price": 21.58,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LCID",
          "Name": "Lucid Group, Inc.",
          "Price": 7.73,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "EXPE",
          "Name": "Expedia Group, Inc.",
          "Price": 92.03,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "PARAA",
          "Name": "Paramount Global",
          "Price": 24.72,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "EVRG",
          "Name": "Evergy, Inc.",
          "Price": 61.36,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "FCNCA",
          "Name": "First Citizens BancShares, Inc.",
          "Price": 976.98,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "BZ",
          "Name": "Kanzhun Limited",
          "Price": 17.2,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LNT",
          "Name": "Alliant Energy Corporation",
          "Price": 54.36,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "UAL",
          "Name": "United Airlines Holdings, Inc.",
          "Price": 41.67,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "TECH",
          "Name": "Bio-Techne Corporation",
          "Price": 85.24,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "GLPI",
          "Name": "Gaming and Leisure Properties, Inc.",
          "Price": 50.85,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "STX",
          "Name": "Seagate Technology Holdings plc",
          "Price": 63.96,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "POOL",
          "Name": "Pool Corporation",
          "Price": 330.25,
          "ESG Rating": "A"
        },
        {
          "Symbol": "AKAM",
          "Name": "Akamai Technologies, Inc.",
          "Price": 82.55,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ETSY",
          "Name": "Etsy, Inc.",
          "Price": 102.53,
          "ESG Rating": "B"
        },
        {
          "Symbol": "LSCC",
          "Name": "Lattice Semiconductor Corporation",
          "Price": 92.41,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "APA",
          "Name": "APA Corporation",
          "Price": 40.78,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "MKTX",
          "Name": "MarketAxess Holdings Inc.",
          "Price": 336,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "WYNN",
          "Name": "Wynn Resorts, Limited",
          "Price": 110.99,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "NDSN",
          "Name": "Nordson Corporation",
          "Price": 217.87,
          "ESG Rating": "A"
        },
        {
          "Symbol": "BSY",
          "Name": "Bentley Systems, Incorporated",
          "Price": 42.5,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "RIVN",
          "Name": "Rivian Automotive, Inc.",
          "Price": 13.38,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "BRKR",
          "Name": "Bruker Corporation",
          "Price": 83.66,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "TRMB",
          "Name": "Trimble Inc.",
          "Price": 48.93,
          "ESG Rating": "A"
        },
        {
          "Symbol": "ERIE",
          "Name": "Erie Indemnity Company",
          "Price": 231.02,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "OKTA",
          "Name": "Okta, Inc.",
          "Price": 74.3,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "EXAS",
          "Name": "Exact Sciences Corporation",
          "Price": 66.79,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "VTRS",
          "Name": "Viatris Inc.",
          "Price": 9.87,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "HST",
          "Name": "Host Hotels & Resorts, Inc.",
          "Price": 16.29,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "DOX",
          "Name": "Amdocs Limited",
          "Price": 96.11,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "FIVE",
          "Name": "Five Below, Inc.",
          "Price": 206,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "LBRDK",
          "Name": "Liberty Broadband Corporation",
          "Price": 77.93,
          "ESG Rating": "B"
        },
        {
          "Symbol": "LBRDA",
          "Name": "Liberty Broadband Corporation",
          "Price": 78.11,
          "ESG Rating": "B"
        },
        {
          "Symbol": "WDC",
          "Name": "Western Digital Corporation",
          "Price": 35.46,
          "ESG Rating": "B"
        },
        {
          "Symbol": "JKHY",
          "Name": "Jack Henry & Associates, Inc.",
          "Price": 153.96,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "GEN",
          "Name": "Gen Digital Inc.",
          "Price": 17.57,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "CHRW",
          "Name": "C.H. Robinson Worldwide, Inc.",
          "Price": 95.57,
          "ESG Rating": "A"
        },
        {
          "Symbol": "CG",
          "Name": "The Carlyle Group Inc.",
          "Price": 30.45,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PCTY",
          "Name": "Paylocity Holding Corporation",
          "Price": 197.82,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "DOCU",
          "Name": "DocuSign, Inc.",
          "Price": 54.46,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "GRAB",
          "Name": "Grab Holdings Limited",
          "Price": 2.94,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CHK",
          "Name": "Chesapeake Energy Corporation",
          "Price": 80.98,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "XM",
          "Name": "Qualtrics International Inc.",
          "Price": 17.96,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ZI",
          "Name": "ZoomInfo Technologies Inc.",
          "Price": 22.15,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "HSIC",
          "Name": "Henry Schein, Inc.",
          "Price": 82.43,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ENTG",
          "Name": "Entegris, Inc.",
          "Price": 72.22,
          "ESG Rating": "A"
        },
        {
          "Symbol": "SRPT",
          "Name": "Sarepta Therapeutics, Inc.",
          "Price": 122.63,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "Z",
          "Name": "Zillow Group, Inc.",
          "Price": 45.65,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ZG",
          "Name": "Zillow Group, Inc.",
          "Price": 44.68,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "OTEX",
          "Name": "Open Text Corporation",
          "Price": 39.26,
          "ESG Rating": "B"
        },
        {
          "Symbol": "UTHR",
          "Name": "United Therapeutics Corporation",
          "Price": 228.72,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LAMR",
          "Name": "Lamar Advertising Company",
          "Price": 101.76,
          "ESG Rating": "B"
        },
        {
          "Symbol": "REG",
          "Name": "Regency Centers Corporation",
          "Price": 59.66,
          "ESG Rating": "A"
        },
        {
          "Symbol": "MASI",
          "Name": "Masimo Corporation",
          "Price": 191.67,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "NBIX",
          "Name": "Neurocrine Biosciences, Inc.",
          "Price": 102.78,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "NWSA",
          "Name": "News Corporation",
          "Price": 17.4,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ARCC",
          "Name": "Ares Capital Corporation",
          "Price": 18.25,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "MTCH",
          "Name": "Match Group, Inc.",
          "Price": 35.36,
          "ESG Rating": "B"
        },
        {
          "Symbol": "FLEX",
          "Name": "Flex Ltd.",
          "Price": 21.68,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "MANH",
          "Name": "Manhattan Associates, Inc.",
          "Price": 156.37,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "RGEN",
          "Name": "Repligen Corporation",
          "Price": 174.03,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CHDN",
          "Name": "Churchill Downs Incorporated",
          "Price": 256,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "SWAV",
          "Name": "ShockWave Medical, Inc.",
          "Price": 259.84,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LOGI",
          "Name": "Logitech International S.A.",
          "Price": 58.64,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "CZR",
          "Name": "Caesars Entertainment, Inc.",
          "Price": 43.53,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "QRVO",
          "Name": "Qorvo, Inc.",
          "Price": 93.58,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "RGLD",
          "Name": "Royal Gold, Inc.",
          "Price": 141.37,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "JAZZ",
          "Name": "Jazz Pharmaceuticals plc",
          "Price": 145.52,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "LBTYB",
          "Name": "Liberty Global plc",
          "Price": 19.62,
          "ESG Rating": "B"
        },
        {
          "Symbol": "PAA",
          "Name": "Plains All American Pipeline, L.P.",
          "Price": 13.14,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "LECO",
          "Name": "Lincoln Electric Holdings, Inc.",
          "Price": 159,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "TPG",
          "Name": "TPG Inc.",
          "Price": 29.49,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "APLS",
          "Name": "Apellis Pharmaceuticals, Inc.",
          "Price": 80.95,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "HOOD",
          "Name": "Robinhood Markets, Inc.",
          "Price": 10,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LBTYK",
          "Name": "Liberty Global plc",
          "Price": 19.99,
          "ESG Rating": "B"
        },
        {
          "Symbol": "LBTYA",
          "Name": "Liberty Global plc",
          "Price": 19.01,
          "ESG Rating": "B"
        },
        {
          "Symbol": "MORN",
          "Name": "Morningstar, Inc.",
          "Price": 208.51,
          "ESG Rating": "A"
        },
        {
          "Symbol": "XRAY",
          "Name": "DENTSPLY SIRONA Inc.",
          "Price": 41.15,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "DKNG",
          "Name": "DraftKings Inc.",
          "Price": 19.16,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "WSC",
          "Name": "WillScot Mobile Mini Holdings Corp.",
          "Price": 42.64,
          "ESG Rating": "B"
        },
        {
          "Symbol": "LEGN",
          "Name": "Legend Biotech Corporation",
          "Price": 53.02,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FFIV",
          "Name": "F5, Inc.",
          "Price": 145.45,
          "ESG Rating": "B"
        },
        {
          "Symbol": "ROKU",
          "Name": "Roku, Inc.",
          "Price": 61.72,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "ALGM",
          "Name": "Allegro MicroSystems, Inc.",
          "Price": 45.04,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CGNX",
          "Name": "Cognex Corporation",
          "Price": 49.08,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "BILI",
          "Name": "Bilibili Inc.",
          "Price": 20.9,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CASY",
          "Name": "Casey's General Stores, Inc.",
          "Price": 226.45,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "CROX",
          "Name": "Crocs, Inc.",
          "Price": 134.3,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "PSNY",
          "Name": "Polestar Automotive Holding UK PLC",
          "Price": 3.76,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ESLT",
          "Name": "Elbit Systems Ltd.",
          "Price": 178.3,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "SEIC",
          "Name": "SEI Investments Company",
          "Price": 58.09,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "DBX",
          "Name": "Dropbox, Inc.",
          "Price": 22.05,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "XP",
          "Name": "XP Inc.",
          "Price": 13.87,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NATI",
          "Name": "National Instruments Corporation",
          "Price": 58.13,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "TTEK",
          "Name": "Tetra Tech, Inc.",
          "Price": 142.77,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "IRDM",
          "Name": "Iridium Communications Inc.",
          "Price": 59.43,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "MIDD",
          "Name": "The Middleby Corporation",
          "Price": 139.01,
          "ESG Rating": "A"
        },
        {
          "Symbol": "EWBC",
          "Name": "East West Bancorp, Inc.",
          "Price": 52.49,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "TXRH",
          "Name": "Texas Roadhouse, Inc.",
          "Price": 109.89,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "HAS",
          "Name": "Hasbro, Inc.",
          "Price": 52.4,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "CFLT",
          "Name": "Confluent, Inc.",
          "Price": 24.85,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CAR",
          "Name": "Avis Budget Group, Inc.",
          "Price": 177.82,
          "ESG Rating": "B"
        },
        {
          "Symbol": "ACHC",
          "Name": "Acadia Healthcare Company, Inc.",
          "Price": 75.74,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SAIA",
          "Name": "Saia, Inc.",
          "Price": 261.46,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "DSGX",
          "Name": "The Descartes Systems Group Inc.",
          "Price": 81.66,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CBSH",
          "Name": "Commerce Bancshares, Inc.",
          "Price": 55.14,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "OLED",
          "Name": "Universal Display Corporation",
          "Price": 145.51,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "KRTX",
          "Name": "Karuna Therapeutics, Inc.",
          "Price": 182.64,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "YNDX",
          "Name": "Yandex N.V.",
          "Price": 18.94,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "FUTU",
          "Name": "Futu Holdings Limited",
          "Price": 47.81,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CELH",
          "Name": "Celsius Holdings, Inc.",
          "Price": 86.92,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NVCR",
          "Name": "NovoCure Limited",
          "Price": 62.72,
          "ESG Rating": "B"
        },
        {
          "Symbol": "NXST",
          "Name": "Nexstar Media Group, Inc.",
          "Price": 178.53,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "IQ",
          "Name": "iQIYI, Inc.",
          "Price": 6.86,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LSTR",
          "Name": "Landstar System, Inc.",
          "Price": 180.77,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "FSV",
          "Name": "FirstService Corporation",
          "Price": 144.66,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "GNTX",
          "Name": "Gentex Corporation",
          "Price": 27.51,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "NFE",
          "Name": "New Fortress Energy Inc.",
          "Price": 30.5,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LFUS",
          "Name": "Littelfuse, Inc.",
          "Price": 255.02,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "RCM",
          "Name": "R1 RCM Inc.",
          "Price": 15.16,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "GRFS",
          "Name": "Grifols, S.A.",
          "Price": 7.53,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "EXEL",
          "Name": "Exelixis, Inc.",
          "Price": 19.46,
          "ESG Rating": "CCC"
        },
        {
          "Symbol": "MAT",
          "Name": "Mattel, Inc.",
          "Price": 17.71,
          "ESG Rating": "B"
        },
        {
          "Symbol": "SIVB",
          "Name": "SVB Financial Group",
          "Price": 106.04,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "QDEL",
          "Name": "QuidelOrtho Corporation",
          "Price": 94.16,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "MNDY",
          "Name": "monday.com Ltd.",
          "Price": 130.92,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "TXG",
          "Name": "10x Genomics, Inc.",
          "Price": 54.03,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "APP",
          "Name": "AppLovin Corporation",
          "Price": 16.47,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PDCE",
          "Name": "PDC Energy, Inc.",
          "Price": 69.56,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "CACC",
          "Name": "Credit Acceptance Corporation",
          "Price": 478.45,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "COUP",
          "Name": "Coupa Software Incorporated",
          "Price": 80.97,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "DOOO",
          "Name": "BRP Inc.",
          "Price": 77.28,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LNTH",
          "Name": "Lantheus Holdings, Inc.",
          "Price": 88.67,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SMCI",
          "Name": "Super Micro Computer, Inc.",
          "Price": 109.15,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "CHRD",
          "Name": "Chord Energy Corporation",
          "Price": 144.81,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "AMKR",
          "Name": "Amkor Technology, Inc.",
          "Price": 24.15,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "MEDP",
          "Name": "Medpace Holdings, Inc.",
          "Price": 192.14,
          "ESG Rating": "B"
        },
        {
          "Symbol": "NVEI",
          "Name": "Nuvei Corporation",
          "Price": 42.2,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NTNX",
          "Name": "Nutanix, Inc.",
          "Price": 25.5,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NTRA",
          "Name": "Natera, Inc.",
          "Price": 51.4,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CNXC",
          "Name": "Concentrix Corporation",
          "Price": 110.38,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ITCI",
          "Name": "Intra-Cellular Therapies, Inc.",
          "Price": 60.21,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "REYN",
          "Name": "Reynolds Consumer Products Inc.",
          "Price": 27.31,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SIGI",
          "Name": "Selective Insurance Group, Inc.",
          "Price": 94.79,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "AGNC",
          "Name": "AGNC Investment Corp.",
          "Price": 9.96,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "MLCO",
          "Name": "Melco Resorts & Entertainment Limited",
          "Price": 12.84,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ALTR",
          "Name": "Altair Engineering Inc.",
          "Price": 71.16,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "OPCH",
          "Name": "Option Care Health, Inc.",
          "Price": 31.69,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NOVT",
          "Name": "Novanta Inc.",
          "Price": 157.6,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "EXLS",
          "Name": "ExlService Holdings, Inc.",
          "Price": 168.33,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "EEFT",
          "Name": "Euronet Worldwide, Inc.",
          "Price": 111.9,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "CHX",
          "Name": "ChampionX Corporation",
          "Price": 28.16,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LNW",
          "Name": "Light & Wonder, Inc.",
          "Price": 61.07,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "WING",
          "Name": "Wingstop Inc.",
          "Price": 185.39,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "WWD",
          "Name": "Woodward, Inc.",
          "Price": 92.72,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "SOFI",
          "Name": "SoFi Technologies, Inc.",
          "Price": 5.92,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PPC",
          "Name": "Pilgrim's Pride Corporation",
          "Price": 23.37,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "CCCS",
          "Name": "CCC Intelligent Solutions Holdings Inc.",
          "Price": 8.83,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "MKSI",
          "Name": "MKS Instruments, Inc.",
          "Price": 82.54,
          "ESG Rating": "A"
        },
        {
          "Symbol": "SPSC",
          "Name": "SPS Commerce, Inc.",
          "Price": 151.49,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "IPGP",
          "Name": "IPG Photonics Corporation",
          "Price": 116.09,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "ENSG",
          "Name": "The Ensign Group, Inc.",
          "Price": 98.47,
          "ESG Rating": "B"
        },
        {
          "Symbol": "DUOL",
          "Name": "Duolingo, Inc.",
          "Price": 134.9,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "COLM",
          "Name": "Columbia Sportswear Company",
          "Price": 87.9,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "LANC",
          "Name": "Lancaster Colony Corporation",
          "Price": 198.07,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CYBR",
          "Name": "CyberArk Software Ltd.",
          "Price": 132.92,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "RMBS",
          "Name": "Rambus Inc.",
          "Price": 50.06,
          "ESG Rating": "B"
        },
        {
          "Symbol": "RXDX",
          "Name": "Prometheus Biosciences, Inc.",
          "Price": 114.01,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ROIV",
          "Name": "Roivant Sciences Ltd.",
          "Price": 7.11,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "BOKF",
          "Name": "BOK Financial Corporation",
          "Price": 80.72,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "SLAB",
          "Name": "Silicon Laboratories Inc.",
          "Price": 167.78,
          "ESG Rating": "A"
        },
        {
          "Symbol": "PLUG",
          "Name": "Plug Power Inc.",
          "Price": 9.04,
          "ESG Rating": "B"
        },
        {
          "Symbol": "WIX",
          "Name": "Wix.com Ltd.",
          "Price": 89.98,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "IONS",
          "Name": "Ionis Pharmaceuticals, Inc.",
          "Price": 37,
          "ESG Rating": "B"
        },
        {
          "Symbol": "WISH",
          "Name": "ContextLogic Inc.",
          "Price": 7.57,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FYBR",
          "Name": "Frontier Communications Parent, Inc.",
          "Price": 21.56,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "TENB",
          "Name": "Tenable Holdings, Inc.",
          "Price": 45.89,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ASO",
          "Name": "Academy Sports and Outdoors, Inc.",
          "Price": 67.09,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NWL",
          "Name": "Newell Brands Inc.",
          "Price": 12.42,
          "ESG Rating": "A"
        },
        {
          "Symbol": "SSB",
          "Name": "SouthState Corporation",
          "Price": 67.61,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FIVN",
          "Name": "Five9, Inc.",
          "Price": 71.51,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "HCP",
          "Name": "HashiCorp, Inc.",
          "Price": 26.72,
          "ESG Rating": "AAA"
        },
        {
          "Symbol": "AAON",
          "Name": "AAON, Inc.",
          "Price": 95.46,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "VNOM",
          "Name": "Viper Energy Partners LP",
          "Price": 30.84,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "COKE",
          "Name": "Coca-Cola Consolidated, Inc.",
          "Price": 535.82,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "DRVN",
          "Name": "Driven Brands Holdings Inc.",
          "Price": 29.91,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PROK",
          "Name": "ProKidney Corp.",
          "Price": 12.3,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "TSEM",
          "Name": "Tower Semiconductor Ltd.",
          "Price": 45.29,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "EXPO",
          "Name": "Exponent, Inc.",
          "Price": 98.3,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CRUS",
          "Name": "Cirrus Logic, Inc.",
          "Price": 89.17,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "GTLB",
          "Name": "GitLab Inc.",
          "Price": 32.34,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "UFPI",
          "Name": "UFP Industries, Inc.",
          "Price": 78.56,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "HTZ",
          "Name": "Hertz Global Holdings, Inc.",
          "Price": 15.35,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "GLBE",
          "Name": "Global-e Online Ltd.",
          "Price": 29.91,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "HQY",
          "Name": "HealthEquity, Inc.",
          "Price": 57.08,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "IART",
          "Name": "Integra LifeSciences Holdings Corporation",
          "Price": 58.98,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "HALO",
          "Name": "Halozyme Therapeutics, Inc.",
          "Price": 35.65,
          "ESG Rating": "BB"
        },
        {
          "Symbol": "ALKS",
          "Name": "Alkermes plc",
          "Price": 29.35,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "QLYS",
          "Name": "Qualys, Inc.",
          "Price": 128.55,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "FOXF",
          "Name": "Fox Factory Holding Corp.",
          "Price": 112.4,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SHC",
          "Name": "Sotera Health Company",
          "Price": 16.73,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "IPAR",
          "Name": "Inter Parfums, Inc.",
          "Price": 147.03,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NSIT",
          "Name": "Insight Enterprises, Inc.",
          "Price": 137.85,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SGRY",
          "Name": "Surgery Partners, Inc.",
          "Price": 36.91,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "ASND",
          "Name": "Ascendis Pharma A/S",
          "Price": 81.17,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "WFRD",
          "Name": "Weatherford International plc",
          "Price": 65.21,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FIZZ",
          "Name": "National Beverage Corp.",
          "Price": 49.13,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "UBSI",
          "Name": "United Bankshares, Inc.",
          "Price": 33.89,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "WEN",
          "Name": "The Wendy's Company",
          "Price": 21.51,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "APPF",
          "Name": "AppFolio, Inc.",
          "Price": 128.1,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PENN",
          "Name": "PENN Entertainment, Inc.",
          "Price": 28.71,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "COLB",
          "Name": "Columbia Banking System, Inc.",
          "Price": 21.58,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "POWI",
          "Name": "Power Integrations, Inc.",
          "Price": 78.84,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "MTSI",
          "Name": "MACOM Technology Solutions Holdings, Inc.",
          "Price": 63.19,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FCFS",
          "Name": "FirstCash Holdings, Inc",
          "Price": 96.06,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "MMSI",
          "Name": "Merit Medical Systems, Inc.",
          "Price": 77.47,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ZION",
          "Name": "Zions Bancorporation,NA",
          "Price": 29.95,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "WTFC",
          "Name": "Wintrust Financial Corporation",
          "Price": 72.25,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SBNY",
          "Name": "Signature Bank",
          "Price": 70,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PYCR",
          "Name": "Paycor HCM, Inc.",
          "Price": 24.84,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CIGI",
          "Name": "Colliers International Group Inc.",
          "Price": 101.35,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "OMAB",
          "Name": "Grupo Aeroportuario del Centro Norte, SAB de CV",
          "Price": 90.12,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "MDGL",
          "Name": "Madrigal Pharmaceuticals, Inc.",
          "Price": 239.79,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "IAC",
          "Name": "IAC Inc.",
          "Price": 48.6,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FRHC",
          "Name": "Freedom Holding Corp.",
          "Price": 72.32,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "MSTR",
          "Name": "MicroStrategy Incorporated",
          "Price": 333.75,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "VLY",
          "Name": "Valley National Bancorp",
          "Price": 8.45,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CWST",
          "Name": "Casella Waste Systems, Inc.",
          "Price": 84.48,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "BPOP",
          "Name": "Popular, Inc.",
          "Price": 58.76,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "VC",
          "Name": "Visteon Corporation",
          "Price": 149.74,
          "ESG Rating": "AA"
        },
        {
          "Symbol": "ICUI",
          "Name": "ICU Medical, Inc.",
          "Price": 175.72,
          "ESG Rating": "A"
        },
        {
          "Symbol": "ACLS",
          "Name": "Axcelis Technologies, Inc.",
          "Price": 127.68,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "RUN",
          "Name": "Sunrun Inc.",
          "Price": 19.44,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "DISH",
          "Name": "DISH Network Corporation",
          "Price": 7.84,
          "ESG Rating": "BBB"
        },
        {
          "Symbol": "FFIN",
          "Name": "First Financial Bankshares, Inc.",
          "Price": 29.15,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SYNH",
          "Name": "Syneos Health, Inc.",
          "Price": 40.23,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NXT",
          "Name": "Nextracker Inc.",
          "Price": 34.84,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ESGR",
          "Name": "Enstar Group Limited",
          "Price": 234.79,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SGML",
          "Name": "Sigma Lithium Corporation",
          "Price": 39.9,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CVT",
          "Name": "Cvent Holding Corp.",
          "Price": 8.43,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FELE",
          "Name": "Franklin Electric Co., Inc.",
          "Price": 88.83,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "WB",
          "Name": "Weibo Corporation",
          "Price": 17.33,
          "ESG Rating": "A"
        },
        {
          "Symbol": "DLO",
          "Name": "DLocal Limited",
          "Price": 13.91,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "BCPC",
          "Name": "Balchem Corporation",
          "Price": 127,
          "ESG Rating": "A"
        },
        {
          "Symbol": "PECO",
          "Name": "Phillips Edison & Company, Inc.",
          "Price": 31.05,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "GGAL",
          "Name": "Grupo Financiero Galicia S.A.",
          "Price": 12.73,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FRSH",
          "Name": "Freshworks Inc.",
          "Price": 13.99,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PNFP",
          "Name": "Pinnacle Financial Partners, Inc.",
          "Price": 52.88,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "AVT",
          "Name": "Avnet, Inc.",
          "Price": 43.99,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ACT",
          "Name": "Enact Holdings, Inc.",
          "Price": 24.6,
          "ESG Rating": "A"
        },
        {
          "Symbol": "CRSP",
          "Name": "CRISPR Therapeutics AG",
          "Price": 50.31,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PLTK",
          "Name": "Playtika Holding Corp.",
          "Price": 10.82,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "IRTC",
          "Name": "iRhythm Technologies, Inc.",
          "Price": 130.77,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ONB",
          "Name": "Old National Bancorp",
          "Price": 13.48,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "OZK",
          "Name": "Bank OZK",
          "Price": 33.69,
          "ESG Rating": "A"
        },
        {
          "Symbol": "SHLS",
          "Name": "Shoals Technologies Group, Inc.",
          "Price": 22.96,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PCH",
          "Name": "PotlatchDeltic Corporation",
          "Price": 48.68,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ISEE",
          "Name": "IVERIC bio, Inc.",
          "Price": 28.29,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "HLNE",
          "Name": "Hamilton Lane Incorporated",
          "Price": 71.95,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SRCL",
          "Name": "Stericycle, Inc.",
          "Price": 42,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CERE",
          "Name": "Cerevel Therapeutics Holdings, Inc.",
          "Price": 24.71,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "DIOD",
          "Name": "Diodes Incorporated",
          "Price": 84.87,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CERT",
          "Name": "Certara, Inc.",
          "Price": 24.09,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "DRS",
          "Name": "Leonardo DRS, Inc.",
          "Price": 14.7,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SYNA",
          "Name": "Synaptics Incorporated",
          "Price": 97.18,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PINC",
          "Name": "Premier, Inc.",
          "Price": 32.13,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "BL",
          "Name": "BlackLine, Inc.",
          "Price": 62.75,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ZLAB",
          "Name": "Zai Lab Limited",
          "Price": 38.52,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PEGA",
          "Name": "Pegasystems Inc.",
          "Price": 45.68,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "BECN",
          "Name": "Beacon Roofing Supply, Inc.",
          "Price": 58.56,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LYFT",
          "Name": "Lyft, Inc.",
          "Price": 10.17,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FLNC",
          "Name": "Fluence Energy, Inc.",
          "Price": 21.35,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "EVO",
          "Name": "Evotec SE",
          "Price": 10.53,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LOPE",
          "Name": "Grand Canyon Education, Inc.",
          "Price": 119.8,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "STNE",
          "Name": "StoneCo Ltd.",
          "Price": 11.84,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ZD",
          "Name": "Ziff Davis, Inc.",
          "Price": 76.97,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PTCT",
          "Name": "PTC Therapeutics, Inc.",
          "Price": 49.27,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "BLKB",
          "Name": "Blackbaud, Inc.",
          "Price": 68.02,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "MRVI",
          "Name": "Maravai LifeSciences Holdings, Inc.",
          "Price": 14.11,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PI",
          "Name": "Impinj, Inc.",
          "Price": 137.46,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ABCM",
          "Name": "Abcam plc",
          "Price": 15.6,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NARI",
          "Name": "Inari Medical, Inc.",
          "Price": 64.18,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "OLLI",
          "Name": "Ollie's Bargain Outlet Holdings, Inc.",
          "Price": 57.54,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SMPL",
          "Name": "The Simply Good Foods Company",
          "Price": 35.7,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "TFSL",
          "Name": "TFS Financial Corporation",
          "Price": 12.63,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NWE",
          "Name": "NorthWestern Corporation",
          "Price": 58.59,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NEOG",
          "Name": "Neogen Corporation",
          "Price": 16.1,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SFM",
          "Name": "Sprouts Farmers Market, Inc.",
          "Price": 33.13,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "RETA",
          "Name": "Reata Pharmaceuticals, Inc.",
          "Price": 94.55,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SLM",
          "Name": "SLM Corporation",
          "Price": 14.32,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SRAD",
          "Name": "Sportradar Group AG",
          "Price": 11.62,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FOCS",
          "Name": "Focus Financial Partners Inc.",
          "Price": 51.95,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "AEIS",
          "Name": "Advanced Energy Industries, Inc.",
          "Price": 91.15,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CRVL",
          "Name": "CorVel Corporation",
          "Price": 198.2,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "VERX",
          "Name": "Vertex, Inc.",
          "Price": 22.45,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "DNLI",
          "Name": "Denali Therapeutics Inc.",
          "Price": 24.71,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NTLA",
          "Name": "Intellia Therapeutics, Inc.",
          "Price": 38.16,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CCOI",
          "Name": "Cogent Communications Holdings, Inc.",
          "Price": 69.02,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "TIGO",
          "Name": "Millicom International Cellular S.A.",
          "Price": 19.48,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "CYTK",
          "Name": "Cytokinetics, Incorporated",
          "Price": 34.78,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PTON",
          "Name": "Peloton Interactive, Inc.",
          "Price": 9.58,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "PAGP",
          "Name": "Plains GP Holdings, L.P.",
          "Price": 13.68,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ARWR",
          "Name": "Arrowhead Pharmaceuticals, Inc.",
          "Price": 30.46,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SANM",
          "Name": "Sanmina Corporation",
          "Price": 56.31,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "VIR",
          "Name": "Vir Biotechnology, Inc.",
          "Price": 24.55,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "TWNK",
          "Name": "Hostess Brands, Inc.",
          "Price": 24.49,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "SSRM",
          "Name": "SSR Mining Inc.",
          "Price": 15.79,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "AFRM",
          "Name": "Affirm Holdings, Inc.",
          "Price": 11.04,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "AY",
          "Name": "Atlantica Sustainable Infrastructure plc",
          "Price": 27.79,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ARRY",
          "Name": "Array Technologies, Inc.",
          "Price": 21.39,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FOLD",
          "Name": "Amicus Therapeutics, Inc.",
          "Price": 11.4,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "BMBL",
          "Name": "Bumble Inc.",
          "Price": 17.02,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "STAA",
          "Name": "STAAR Surgical Company",
          "Price": 66.47,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "VIRT",
          "Name": "Virtu Financial, Inc.",
          "Price": 19.21,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "AZTA",
          "Name": "Azenta, Inc.",
          "Price": 46.12,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "BRZE",
          "Name": "Braze, Inc.",
          "Price": 32.97,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "NWTN",
          "Name": "NWTN Inc.",
          "Price": 11.3,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "GDS",
          "Name": "GDS Holdings Limited",
          "Price": 16.62,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "HWC",
          "Name": "Hancock Whitney Corporation",
          "Price": 36.45,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FRPT",
          "Name": "Freshpet, Inc.",
          "Price": 65.2,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "FLYW",
          "Name": "Flywire Corporation",
          "Price": 28.95,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "MEOH",
          "Name": "Methanex Corporation",
          "Price": 45.41,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "ARVL",
          "Name": "Arrival",
          "Price": 4.07,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "LITE",
          "Name": "Lumentum Holdings Inc.",
          "Price": 45.24,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "UCBI",
          "Name": "United Community Banks, Inc.",
          "Price": 26.82,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "COOP",
          "Name": "Mr. Cooper Group Inc.",
          "Price": 44.06,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "RUSHA",
          "Name": "Rush Enterprises, Inc.",
          "Price": 54.16,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "RUSHB",
          "Name": "Rush Enterprises, Inc.",
          "Price": 59.89,
          "ESG Rating": "NR"
        },
        {
          "Symbol": "OTTR",
          "Name": "Otter Tail Corporation",
          "Price": 73.68,
          "ESG Rating": "NR"
        }
];

export {data};