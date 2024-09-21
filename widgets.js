const symbolPairs = [
  { symbols: ["COINBASE:BTCUSD", "COINBASE:ETHBTC", "COINBASE:ETHUSD"] },
  { symbols: ["BINANCE:BNBETH", "BINANCE:SOLETH", "BITFINEX:DAIUSD"] },
  { symbols: ["BINANCE:ADAETH", "BINANCE:ADABTC", "BINANCE:ADAUSD"] },
];

let widgetIndex = 0;

symbolPairs.forEach((pair) => {
  pair.symbols.forEach((symbol) => {
    const div = document.createElement("div");
    div.classList.add("widget-container");
    div.id = `widget-container-${widgetIndex++}`;
    document.body.appendChild(div);
    new TradingView.widget({
      autosize: true,
      symbol: symbol,
      interval: "1D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      toolbar_bg: "rgba(10, 10, 10, 1)",
      enable_publishing: false,
      hide_top_toolbar: true,
      allow_symbol_change: true,
      save_image: false,
      hideideas: true,
      studies: ["BB@tv-basicstudies"],
      container_id: div.id,
    });
  });
});
