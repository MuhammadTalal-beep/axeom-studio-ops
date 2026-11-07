// Pack 74 Master Data Store
const DATA = {
  overdue: [
    { id: 'INV-1135', client: 'Prime Roofing Co', amt: 450.00, days: 8, note: 'Partial paid $450' },
    { id: 'INV-1127', client: 'Meridian Wealth Partners', amt: 1500.00, days: 15 },
    { id: 'INV-1124', client: 'Apex Physical Therapy', amt: 1500.00, days: 16 },
    { id: 'INV-1120', client: 'TLC Homecare', amt: 1500.00, days: 18, note: 'False paid flag in tool' },
    { id: 'INV-1115', client: 'Patel Insurance Group', amt: 1500.00, days: 22, churn: true },
    { id: 'INV-1114', client: 'Khan Family Law', amt: 1500.00, days: 23 },
    { id: 'INV-1108', client: "Khan's Auto Spa", amt: 900.00, days: 29 },
    { id: 'INV-1106', client: 'Glow Aesthetic', amt: 1500.00, days: 30 },
    { id: 'INV-1094', client: 'The Brew Lab', amt: 900.00, days: 43 }
  ],
  unbilled: [
    { booking: 'B137', client: 'Greenway Pediatrics', amt: 1500.00 },
    { booking: 'B138', client: 'Summit Chiropractic', amt: 1500.00 },
    { booking: 'B145', client: 'Sage Family Therapy', amt: 1500.00 },
    { booking: 'B164', client: 'Khan Family Law', amt: 1500.00 }
  ],
  discrepancies: [
    {
      inv: 'INV-1135',
      client: 'Prime Roofing Co',
      toolSays: 'Unpaid $900.00',
      truth: 'Partially paid $450.00',
      details: 'P5126 on 2026-09-28 from Tony Russo'
    },
    {
      inv: 'INV-1120',
      client: 'TLC Homecare',
      toolSays: 'Paid $1,500.00',
      truth: 'Unpaid $1,500.00',
      details: "Angela Price email: 'Will pay once posted'. No payment received."
    },
    {
      inv: 'INV-1102',
      client: 'Tasha Green',
      toolSays: 'Overdue $300.00',
      truth: 'Paid $300.00',
      details: 'Payment P5103 received on 2026-09-01'
    }
  ],
  credits: [
    { client: 'Lone Star Realty', amt: 1500.00, reason: 'Canceled shoot refund requested under studio terms' },
    { client: 'NorthPoint Church', amt: 60.00, reason: 'Discount adjustment on multi-session editing package' },
    { client: 'Hustle & Heart', amt: 300.00, reason: 'Postponed session studio credit for next production slot' }
  ],
  clients: [
    { name: "Patel Insurance Group", alias: "Patel Insurance, Raj Patel", email: "raj@patelinsurance.com", phone: "(214) 555-0191", status: "Churn Risk" },
    { name: "Prime Roofing Co", alias: "Prime Roofing, Tony Russo", email: "tony@primeroofing.com", phone: "(469) 555-0182", status: "Overdue" },
    { name: "Meridian Wealth Partners", alias: "Meridian Wealth", email: "accounts@meridianwealth.com", phone: "(214) 555-0165", status: "Overdue" },
    { name: "Apex Physical Therapy", alias: "Apex PT", email: "billing@apexpt.com", phone: "(972) 555-0199", status: "Overdue" },
    { name: "TLC Homecare", alias: "TLC Care, Angela Price", email: "aprice@tlchomecare.com", phone: "(469) 555-0134", status: "Overdue" },
    { name: "Khan Family Law", alias: "Khan Legal LLC, Sara Khan", email: "sara@khanfamilylaw.com", phone: "(214) 555-0142", status: "Overdue" },
    { name: "Khan's Auto Spa", alias: "Khan Auto Detail", email: "ops@khansautospa.com", phone: "(214) 555-0188", status: "Overdue" },
    { name: "Glow Aesthetic", alias: "Glow Clinic Dallas", email: "reception@glowaesthetic.com", phone: "(972) 555-0112", status: "Overdue" },
    { name: "The Brew Lab", alias: "Brew Lab Roasters", email: "beans@thebrewlab.com", phone: "(214) 555-0177", status: "Overdue" },
    { name: "Greenway Pediatrics", alias: "Greenway Kids Clinic", email: "clinic@greenwaypeds.com", phone: "(214) 555-0111", status: "Unbilled" },
    { name: "Summit Chiropractic", alias: "Summit Spine", email: "front@summitchiro.com", phone: "(972) 555-0123", status: "Unbilled" },
    { name: "Sage Family Therapy", alias: "Sage Counseling", email: "hello@sagefamily.com", phone: "(469) 555-0144", status: "Unbilled" },
    { name: "Lone Star Realty", alias: "Lone Star Homes", email: "broker@lonestarrealty.com", phone: "(214) 555-0155", status: "Credit Owed" },
    { name: "NorthPoint Church", alias: "NorthPoint Dallas", email: "media@northpointchurch.org", phone: "(972) 555-0166", status: "Credit Owed" },
    { name: "Hustle & Heart", alias: "H&H Boutique", email: "studio@hustleheart.com", phone: "(469) 555-0178", status: "Credit Owed" },
    { name: "Tasha Green Photography", alias: "Tasha Green", email: "tasha@tashagreen.com", phone: "(214) 555-0130", status: "Reconciled" },
    { name: "Dallas Design District", alias: "DDD Studios", email: "info@dallasdesign.org", phone: "(214) 555-0201", status: "Active" },
    { name: "Highland Park Dental", alias: "HP Smiles", email: "smile@hpdental.com", phone: "(972) 555-0210", status: "Active" },
    { name: "Bavarian Motor Works Rep", alias: "Bavarian Works", email: "service@bmwrep.com", phone: "(469) 555-0222", status: "Active" },
    { name: "Oak Cliff Bakery", alias: "OC Bakes", email: "pastry@oakcliffbakes.com", phone: "(214) 555-0233", status: "Active" },
    { name: "Deep Ellum Spirits", alias: "DE Distillers", email: "tasting@deepellumspirits.com", phone: "(214) 555-0244", status: "Active" },
    { name: "Trinity River Kayaks", alias: "Trinity Paddle", email: "paddle@trinitykayaks.com", phone: "(972) 555-0255", status: "Active" },
    { name: "Uptown Yoga Collective", alias: "Uptown Yoga", email: "namaste@uptownyoga.com", phone: "(214) 555-0266", status: "Active" },
    { name: "Bishop Arts Apparel", alias: "BA Clothing", email: "shop@bishopartsapparel.com", phone: "(469) 555-0277", status: "Active" },
    { name: "Klyde Warren Food Trucks", alias: "KW Mobile Food", email: "admin@kwfoodtrucks.org", phone: "(214) 555-0288", status: "Active" }
  ]
};

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead ? res.writeHead(200) : (res.status && res.status(200));
    res.end();
    return;
  }

  const overdueTotal = DATA.overdue.reduce((acc, curr) => acc + curr.amt, 0);
  const unbilledTotal = DATA.unbilled.reduce((acc, curr) => acc + curr.amt, 0);
  const creditsTotal = DATA.credits.reduce((acc, curr) => acc + curr.amt, 0);

  const payload = JSON.stringify({
    studio: "Axeom Content Studio",
    location: "Dallas, TX",
    systemDate: "2026-10-06",
    pack: 74,
    metrics: {
      overdueTotal,
      overdueCount: DATA.overdue.length,
      unbilledTotal,
      unbilledCount: DATA.unbilled.length,
      creditsTotal,
      creditsCount: DATA.credits.length,
      activeClientsCount: DATA.clients.length
    },
    overdue: DATA.overdue,
    unbilled: DATA.unbilled,
    discrepancies: DATA.discrepancies,
    credits: DATA.credits,
    clients: DATA.clients
  });

  if (typeof res.json === 'function') {
    res.status(200).json(JSON.parse(payload));
  } else {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(payload);
  }
};
