export async function searchStocks(query) {
  console.log(query);
  return [
    {
      type: "stock",
      symbol: "RELIANCE",
      company: "Reliance Industries Ltd.",
    },
    {
      type: "stock",
      symbol: "RPOWER",
      company: "Reliance Power Ltd.",
    },
    {
      type: "stock",
      symbol: "RELINFRA",
      company: "Reliance Infrastructure Ltd.",
    },
    {
      type: "stock",
      symbol: "RIIL",
      company: "Reliance Industrial Infrastructure Ltd.",
    },
    {
      type: "stock",
      symbol: "RCOM",
      company: "Reliance Communications Ltd.",
    },
    {
      type: "stock",
      symbol: "RELCAPITAL",
      company: "Reliance Capital Ltd.",
    },
    {
      type: "stock",
      symbol: "RHFL",
      company: "Reliance Home Finance Ltd.",
    },
    {
      type: "stock",
      symbol: "RELCHEMQ",
      company: "Reliance Chemotex Industries Ltd.",
    },
    {
      type: "stock",
      symbol: "RNAVAL",
      company: "Reliance Naval and Engineering Ltd.",
    },
    {
      type: "stock",
      symbol: null,
      company: "Reliance Jute Mills International Limited",
    },
  ];
}
