import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const facts = [
  {
    text: "The shortest war in history lasted 38 minutes! It was between Britain and Zanzibar on August 27, 1896. It was over the ascension of the next Sultan in Zanzibar and resulted in a British victory.",
    source:
      "https://www.historic-uk.com/HistoryUK/HistoryofBritain/The-Shortest-War-in-History/#:~:text=The%20little%20known%20Anglo%2DZanzibar,Britain%20and%20Germany%20in%201890.",
    category: "history",
    votes_interesting: 15,
    votes_mind_blowing: 8,
    votes_false: 2,
  },
  {
    text: "The first 1GB hard drive was made in 1980 and had a price of $40,000!",
    source:
      "https://www.autodesk.com/products/fusion-360/blog/a-look-back-at-the-first-built-in-hard-drive/#:~:text=The%20Rapidly%20Evolving%20HDD&text=In%201980%2C%20we%20saw%20the,around%20for%20a%20long%20time.",
    category: "history",
    votes_interesting: 4,
    votes_mind_blowing: 1,
    votes_false: 0,
  },
  {
    text: '"typewriter" is the longest English word you can type using 1 row of the QWERTY keyboard',
    source: "https://twitter.com/intel/status/442074967522684928",
    category: "technology",
    votes_interesting: 9,
    votes_mind_blowing: 1,
    votes_false: 0,
  },
  {
    text: "Human DNA is 99.9% identical from person to person",
    source:
      "https://www.genome.gov/about-genomics/fact-sheets/Genetics-vs-Genomics",
    category: "science",
    votes_interesting: 4,
    votes_mind_blowing: 9,
    votes_false: 1,
  },
  {
    text: "The less money you spend, the more you save!",
    source:
      "https://bettermoneyhabits.bankofamerica.com/en/saving-budgeting/ways-to-save-money",
    category: "finance",
    votes_interesting: 2,
    votes_mind_blowing: 1,
    votes_false: 0,
  },
  {
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids/?rebelltitem=1#rebelltitem1",
    category: "society",
    votes_interesting: 12,
    votes_mind_blowing: 2,
    votes_false: 0,
  },
  {
    text: "There is enough DNA in the average person’s body to stretch from the sun to Pluto and back — 17 times",
    source:
      "https://skeptics.stackexchange.com/questions/10606/length-of-uncoiled-human-dna",
    category: "science",
    votes_interesting: 6,
    votes_mind_blowing: 13,
    votes_false: 2,
  },
  {
    text: "React was developed by Google",
    source: "https://example.com",
    category: "technology",
    votes_interesting: 1,
    votes_mind_blowing: 0,
    votes_false: 9,
  },
  {
    text: "As of 2023, Breaking Bad is the highest-rated TV show on IMDb with a rating of 9.4/10",
    source: "https://www.imdb.com/chart/toptv/",
    category: "entertainment",
    votes_interesting: 11,
    votes_mind_blowing: 5,
    votes_false: 2,
  },
  {
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votes_interesting: 8,
    votes_mind_blowing: 3,
    votes_false: 1,
  },
  {
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votes_interesting: 24,
    votes_mind_blowing: 9,
    votes_false: 4,
  },
];

async function main() {
  for (const fact of facts) {
    await prisma.fact.create({
      data: fact,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
