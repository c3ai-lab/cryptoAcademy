<?php

namespace Database\Seeders;

use App\Models\Symbol;
use Illuminate\Database\Seeder;

class SymbolSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    collect([
        [
          "api_symbol" => strtoupper("adausdt"),
          "name" => "Cardano",
        ],
        [
          "api_symbol" => strtoupper("algousdt"),
          "name" => "Algorand",
        ],
        [
          "api_symbol" => strtoupper("atomusdt"),
          "name" => "Cosmos",
        ],
        [
          "api_symbol" => strtoupper("avaxusdt"),
          "name" => "Avalanche",
        ],
        [
          "api_symbol" => strtoupper("axsusdt"),
          "name" => "Axie Infinity",
        ],
        [
          "api_symbol" => strtoupper("bchusdt"),
          "name" => "Bitcoin Cash",
        ],
        [
          "api_symbol" => strtoupper("bnbusdt"),
          "name" => "Binance Coin",
        ],
        [
          "api_symbol" => strtoupper("btcusdt"),
          "name" => "Bitcoin",
        ],
        [
          "api_symbol" => strtoupper("bttusdt"),
          "name" => "BitTorrent",
        ],
        [
          "api_symbol" => strtoupper("busdusdt"),
          "name" => "Binance USD",
        ],
        [
          "api_symbol" => strtoupper("cakeusdt"),
          "name" => "PancakeSwap",
        ],
        [
          "api_symbol" => strtoupper("daiusdt"),
          "name" => "Dai",
        ],
        [
          "api_symbol" => strtoupper("dogeusdt"),
          "name" => "Dogecoin",
        ],
        [
          "api_symbol" => strtoupper("dotusdt"),
          "name" => "Polkadot",
        ],
        [
          "api_symbol" => strtoupper("egldusdt"),
          "name" => "Elrond eGold",
        ],
        [
          "api_symbol" => strtoupper("eosusdt"),
          "name" => "EOS",
        ],
        [
          "api_symbol" => strtoupper("etcusdt"),
          "name" => "Ethereum Classic",
        ],
        [
          "api_symbol" => strtoupper("ethusdt"),
          "name" => "Ethereum",
        ],
        [
          "api_symbol" => strtoupper("filusdt"),
          "name" => "FileCoin",
        ],
        [
          "api_symbol" => strtoupper("flowusdt"),
          "name" => "Flow",
        ],
        [
          "api_symbol" => strtoupper("ftmusdt"),
          "name" => "Fantom",
        ],
        [
          "api_symbol" => strtoupper("fttusdt"),
          "name" => "FTX Token",
        ],
        [
          "api_symbol" => strtoupper("galausdt"),
          "name" => "Gala",
        ],
        [
          "api_symbol" => strtoupper("grtusdt"),
          "name" => "The Graph",
        ],
        [
          "api_symbol" => strtoupper("hbarusdt"),
          "name" => "Hedera",
        ],
        [
          "api_symbol" => strtoupper("hntusdt"),
          "name" => "Helium",
        ],
        [
          "api_symbol" => strtoupper("icpusdt"),
          "name" => "Internet Computer",
        ],
        [
          "api_symbol" => strtoupper("klayusdt"),
          "name" => "Klaytn",
        ],
        [
          "api_symbol" => strtoupper("linkusdt"),
          "name" => "Chainlink",
        ],
        [
          "api_symbol" => strtoupper("ltcusdt"),
          "name" => "LiteCoin",
        ],
        [
          "api_symbol" => strtoupper("lunausdt"),
          "name" => "Terra Luna",
        ],
        [
          "api_symbol" => strtoupper("manausdt"),
          "name" => "Manaland",
        ],
        [
          "api_symbol" => strtoupper("maticusdt"),
          "name" => "Polygon Matic",
        ],
        [
          "api_symbol" => strtoupper("iotausdt"),
          "name" => "IOTA",
        ],
        [
          "api_symbol" => strtoupper("mkrusdt"),
          "name" => "Maker",
        ],
        [
          "api_symbol" => strtoupper("nearusdt"),
          "name" => "NEAR Protocol",
        ],
        [
          "api_symbol" => strtoupper("sandusdt"),
          "name" => "The Sandbox",
        ],
        [
          "api_symbol" => strtoupper("shibusdt"),
          "name" => "Shiba Inu",
        ],
        [
          "api_symbol" => strtoupper("solusdt"),
          "name" => "Solana",
        ],
        [
          "api_symbol" => strtoupper("thetausdt"),
          "name" => "THETA",
        ],
        [
          "api_symbol" => strtoupper("trxusdt"),
          "name" => "TRON",
        ],
        [
          "api_symbol" => strtoupper("uniusdt"),
          "name" => "Uniswap",
        ],
        [
          "api_symbol" => strtoupper("usdcusdt"),
          "name" => "USD Coin",
        ],
        [
          "api_symbol" => strtoupper("ustusdt"),
          "name" => "TerraUSD",
        ],
        [
          "api_symbol" => strtoupper("vetusdt"),
          "name" => "VeChain",
        ],
        [
          "api_symbol" => strtoupper("xlmusdt"),
          "name" => "Stellar",
        ],
        [
          "api_symbol" => strtoupper("xmrusdt"),
          "name" => "Monero",
        ],
        [
          "api_symbol" => strtoupper("xrpusdt"),
          "name" => "XRP",
        ],
        [
          "api_symbol" => strtoupper("xtzusdt"),
          "name" => "Tezos",
        ]
    ])->each(fn ($symbolData) => Symbol::create($symbolData));
  }
}
