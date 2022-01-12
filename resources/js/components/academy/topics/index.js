import Vue from "vue";
import { AcademyCategory, AcademyTopic } from "../../../enums";

Vue.component(
  AcademyTopic.CRYPTO__INTRO,
  require("./crypto/intro/Intro.vue").default
);
Vue.component(
  AcademyTopic.CRYPTO__INTRO__WALLETS,
  require("./crypto/intro/Wallets.vue").default
);

Vue.component(
  AcademyTopic.CRYPTO__INTRO__SMART_CONTRACTS,
  require("./crypto/intro/SmartContracts.vue").default
);

Vue.component(
  AcademyTopic.CRYPTO__BLOCKCHAIN,
  require("./crypto/blockchain/Blockchain.vue").default
);

Vue.component(
  AcademyTopic.CRYPTO__BLOCKCHAIN__TRANSACTIONS,
  require("./crypto/blockchain/Transactions.vue").default
);

Vue.component(
  AcademyTopic.CRYPTO__BLOCKCHAIN__FEES,
  require("./crypto/blockchain/Fees.vue").default
);

Vue.component(
  AcademyTopic.CRYPTO__ADVANCED,
  require("./crypto/advanced/Advanced.vue").default
);

Vue.component(
  AcademyTopic.CRYPTO__ADVANCED__TRANSACTIONS,
  require("./crypto/advanced/BlockchainTransactions.vue").default
);

Vue.component(
  AcademyTopic.CRYPTO__ADVANCED__MERKLETREE,
  require("./crypto/advanced/MerkleTree.vue").default
);

Vue.component(
  AcademyTopic.CRYPTO__ADVANCED__CONSENSUS,
  require("./crypto/advanced/Consensus.vue").default
);

Vue.component(
  AcademyTopic.CRYPTO__ADVANCED__PROOF_OF_WORK,
  require("./crypto/advanced/ProofOfWork.vue").default
);

Vue.component(
  AcademyTopic.CRYPTO__ADVANCED__PROOF_OF_STAKE,
  require("./crypto/advanced/ProofOfStake.vue").default
);

Vue.component(
  AcademyTopic.TRADING__MARKET_ORDER,
  require("./trading/MarketOrder.vue").default
);

Vue.component(
  AcademyTopic.TRADING__LIMIT_ORDER,
  require("./trading/LimitOrder.vue").default
);

Vue.component(
  AcademyTopic.TRADING__PRICE,
  require("./trading/Price.vue").default
);

Vue.component(
  AcademyTopic.TRADING__AMM,
  require("./trading/Amm.vue").default
);

Vue.component(
  AcademyTopic.TRADING__SLIPPAGE,
  require("./trading/Slippage.vue").default
);

Vue.component(
  AcademyTopic.TRADING__TAXES,
  require("./trading/Taxes.vue").default
);

Vue.component(
  AcademyCategory.FIFTY_COINS__LIST,
  require("./FiftyCoins.vue").default
);

Vue.component(
  AcademyCategory.GLOSSAR__LIST,
  require("./Glossar.vue").default
);

Vue.component(
  AcademyTopic.TOP_FIVE_COINS__BTC,
  require("./top_five_coins/Btc.vue").default
);

Vue.component(
  AcademyTopic.TOP_FIVE_COINS__ETH,
  require("./top_five_coins/Eth.vue").default
);

Vue.component(
  AcademyTopic.TOP_FIVE_COINS__BNB,
  require("./top_five_coins/Bnb.vue").default
);

Vue.component(
  AcademyTopic.TOP_FIVE_COINS__USDT,
  require("./top_five_coins/Usdt.vue").default
);

Vue.component(
  AcademyTopic.TOP_FIVE_COINS__SOL,
  require("./top_five_coins/Sol.vue").default
);
