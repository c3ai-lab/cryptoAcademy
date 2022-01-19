<template>
  <div>
    <div class="header">
      <div class="container header-content px-lg-5 px-3">
        <div class="row">
          <div class="col-md-8">
            <h1 class="my-3">Wilkommen bei deiner CryptoCademy</h1>
            <h3>
              Lege jetzt ein Konto an, lerne Cryptotraden und messe dich mit deinen Freunden! Wer kann am meisten Gewinne erziehlen? 
            </h3>
            <router-link to="register">
              <button class="btn btn-light text-primary">
                {{ $t("auth.register_now") }}
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <PaddedLayout>
      <div class="row center-text col-md-8">
        <h2>Warum CryptoCademy?</h2>
        <p>
          Was ist Bitcoin? Wie handelt man Alt-Coins und was würde passieren
          wenn man wirklich mal was investiert?! CryptoCademy lässt dich mit
          echten Preisen im Sekundentakt risikolos den Handel mit Bitcoin und
          vielen anderen Kryptowährungen simulieren! Zahle realistische
          Handelsgebühren, beobachte deinen Investitionserfolg und versuche mit
          deiner Strategie auf den Mond zu kommen!
        </p>
        <router-link to="register">
          <button class="btn btn-primary">
            {{ $t("auth.register_now") }}
          </button>
        </router-link>
      </div>
      <div class="my-5"></div>
      <div class="content-box row">
        <div class="col-6 text">
          <h2>Kostenlose Registrierung</h2>
          <p>
            Melde dich noch heute an, kostenfrei und risikolos - jetzt und für
            immer!
          </p>
        </div>
        <div class="d-flex col-6 justify-content-center">
          <img src="/images/landingpage/Login_iPhone.png" />
        </div>
      </div>

      <div class="content-box row">
        <div class="d-flex col-6 justify-content-center">
          <img src="/images/landingpage/wallet_iPhone.png" />
        </div>
        <div class="col-6 text">
          <h2>Wallet</h2>
          <p>
            Analysiere deine Gewinne und Verluste in der Wallet-Übersicht und
            finde heraus welche Währungen deine Champions sind und welche dich
            ärmer machen!
          </p>
        </div>
      </div>

      <div class="content-box row">
        <div class="col-12 col-md-4 text">
          <h2>Trading</h2>
          <p>
            Trade mit Live-Werten zu realen Preisen und den Konditionen
            etablierter Kryptobörsen, ganz ohne Risiko! Teste dich durch eine
            Auswahl der Top 50 Kryptowährungen und finde deinen individuellen
            Mix!
          </p>
        </div>
        <div class="d-flex col-md-8 col-12 justify-content-center">
          <img src="/images/landingpage/trading.png" class="full" />
        </div>
      </div>

      <div class="content-box row">
        <div class="d-md-flex d-none col-md-8 col-12 justify-content-center">
          <img src="/images/landingpage/dashboard.png" class="full" />
        </div>
        <div class="col-12 col-md-4 text">
          <h2>Dashboard</h2>
          <p>
            Beobachte auf dem Dashboard die Nachrichtenlage und die Kursverläufe
            deiner Lieblingswährungen! Zuhause und unterwegs.
          </p>
        </div>
        <div class="d-flex d-md-none col-md-8 col-12 justify-content-center">
          <img src="/images/landingpage/dashboard.png" class="full" />
        </div>
      </div>

      <div class="content-box row">
        <div class="col-12 col-md-4 text">
          <h2>Academy</h2>
          <p>
            Verschaffe dir einen Überblick über die wichtigsten Begriffe und
            Technologien in der Welt der Blockchains. Von Krypto-Newbies bis hin
            zu Trading-Profis, hier gibt es für jeden etwas neues zu lernen!
          </p>
        </div>
        <div class="d-flex col-md-8 col-12 justify-content-center">
          <img src="/images/landingpage/academy.png" class="full" />
        </div>
      </div>

      <div class="content-box row">
        <div class="d-md-flex d-none col-md-8 col-12 justify-content-center">
          <img src="/images/landingpage/Leaderboard_MB.png" class="full" />
        </div>
        <div class="col-12 col-md-4 text">
          <h2>Leaderboard</h2>
          <p>
            Vergleiche deine Erfolge mit anderen auf dem Leaderboard. Kannst du
            dich an die Spitze kämpfen?
          </p>
        </div>
        <div class="d-flex d-md-none col-md-8 col-12 justify-content-center">
          <img src="/images/landingpage/Leaderboard_MB.png" class="full" />
        </div>
      </div>
    </PaddedLayout>
    <div class="cta">
      <PaddedLayout>
        <div class="row">
          <div class="col-md-8 col-12">
            <h3>
              Interesse geweckt? Lege jetzt ein Konto an, lerne Cryptotraden und
              messe dich mit deinen Freunden! Wer kann am meisten Gewinne
              erziehlen?
            </h3>
          </div>
          <div class="d-flex col-md-4 col-12 justify-content-center my-3">
            <router-link to="register">
              <button class="btn btn-light text-primary">
                {{ $t("auth.register_now") }}
              </button>
            </router-link>
          </div>
        </div>
      </PaddedLayout>
    </div>
  </div>
</template>


<script>
import PaddedLayout from "../layouts/PaddedLayout.vue";

export default {
  name: "LandingpageView",

  components: {
    PaddedLayout,
  },
};
</script>


<style lang="scss" scoped>
.header {
  color: rgb(85, 110, 230);
  position: relative;
  background: linear-gradient(
      90deg,
      rgba(85, 110, 230, 1),
      rgba(85, 110, 230, 0)
    ),
    url("/images/landingpage/Header_2.jpg") no-repeat scroll;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  margin-top: 70px;
}

.header-content {
  h1 {
    color: white;
    font-size: 3rem;
  }
  
    h3 
    {
        color: white;
        margin-bottom: 20px;
        font-size: 1.2rem;
    }
  color: white;
  padding: 10% 0;
  font-size: 14pt;
}

.center-text {
  margin: 0 auto;
  text-align: center !important;
}

.content-box {
  margin: 20px 0;

  img {
    max-width: 60%;
    max-height: auto;
    position: relative;
  }

  .full {
    max-width: 100% !important;
  }

  .text {
    max-width: 40%;
  }

  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

@media only screen and (max-width: 600px) {
  .header-content {
    h1 {
      font-size: 2rem;
    }
    color: white;
    padding: 10% 0;
    font-size: 12pt;
  }

  .center-text {
    margin: 0 auto;
    text-align: left !important;
  }

  .content-box {
    margin: 40px 0;

    img {
      max-width: 100%;
      max-height: auto;
      position: relative;
    }

    .text {
      max-width: 100%;
    }

    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.cta {
  background-color: rgb(85, 110, 230);
  padding: 30px 0 70px 0;
  margin-top: 40px;

  h3 {
    color: white;
  }
.row
{
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
}
</style>
