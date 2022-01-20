<template>
  <div>
    <div class="header">
      <div class="container header-content px-lg-5 px-3">
        <div class="row">
          <div class="col-md-8">
            <h1 class="my-3">Wilkommen bei deiner CryptoCademy</h1>
            <h3>
              Lege jetzt ein Konto an, lerne Cryptotraden und messe dich in
              dieser Simulation mit deinen Freunden! Wer kann am meisten Gewinne
              erziehlen?
            </h3>
            <router-link to="register">
              <button class="btn btn-light text-primary btn-cta">
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
          Was ist Bitcoin? Was ist Ethereum? Wie handelt man Alt-Coins und was würde passieren,
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
        <div class="d-flex col-6 col-md-3 justify-content-center">
          <img src="/images/landingpage/Login_iPhone.png" class="wide" />
        </div>
        <div class="d-flex col-6 col-md-3 justify-content-center">
          <img src="/images/landingpage/wallet_iPhone.png" class="wide" />
        </div>
        <div class="col-12 col-md-6 mt-3 mt-md-0 text">
          <h2>Kostenlose Registrierung</h2>
          <p>
            Melde dich noch heute an, kostenfrei und risikolos.
          </p>
          <br class="d-md-block d-none" />
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
    </PaddedLayout>
    <div class="cta px-2 px-md-0">
      <PaddedLayout>
        <div class="row">
          <div class="col-md-8 col-12">
            <h3>
              Interesse geweckt? Lege jetzt ein Konto an, erlerne den Handel mit Kryptowährungen und
              messe dich mit der Community! 
            </h3>
          </div>
          <div class="d-flex col-md-4 col-12 justify-content-center my-3">
            <router-link to="register">
              <button class="btn btn-light text-primary btn-cta">
                {{ $t("auth.register_now") }}
              </button>
            </router-link>
          </div>
        </div>
      </PaddedLayout>
    </div>
    <PaddedLayout>
      <div class="content-box row">
        <div class="d-md-flex d-none col-md-8 col-12 justify-content-center">
          <img src="/images/landingpage/dashboard.png" class="full" />
        </div>
        <div class="col-12 col-md-4 text">
          <h2>Dashboard</h2>
          <p>
            Beobachte die News und die Kursverläufe
            deiner Lieblingswährungen! Behalte die Performance deines Portfolios sekundengenau im Blick.
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
            zu Trading-Profis, hier gibt es für jeden etwas Neues zu lernen!
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
    <div class="footer-part px-2 px-md-0">
      <PaddedLayout>
        <div class="row">
          <div class="col-md-7 col-12">
            <h2>Fragen oder Anmerkungen?</h2>
            <p>
              Nimm jetzt Kontakt zu uns auf, wenn du Fragen oder konstruktives
              Feedback zu unserer CryptoCademy-Anwendung hast. Melde dich dafür
              per Mail an die <strong><a href="mailto:moin@cryptocademy.app">moin@cryptocademy.app</a></strong>.
            </p>
          </div>
          <hr>
          <div class="col-md-6 col-12 ">
          <p class="footer-legal">Github</p>
          </div>
          <div class="col-md-6 col-12">
          <p class="footer-copyright">© 2022 CryptoCademy</p>
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

  h3 {
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

  img.wide {
    max-width: 100%;
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

  .cta {
    h3 {
      text-align: center !important;
    }
  }

  .footer-part
  {
    text-align: center !important;

    hr 
  {
    margin: 20px 10%!important;
    max-width: 80%;
  }
  }

  .footer-legal, .footer-copyright
  {
    text-align: center!important;
  }

  .button-right
  {
    justify-content: center!important;
  }
}

.cta {
  background-color: rgb(85, 110, 230);
  padding: 80px 0;
  margin: 40px auto -60px auto;

  h3 {
    color: white;
    line-height: 1.8 !important;
    text-align: left;
  }
  .row {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .container {
    margin-top: 0 !important;
  }
}

.btn {
  font-weight: 700 !important;
}

.btn-cta {
  padding: 1rem 1.5rem !important;
  font-size: 1.1rem !important;
}

.footer-part {
  background-color: rgb(85, 110, 230);
  padding-top: 10px;
  margin: 40px auto 0 auto;
  

  h2, p, a 
  {
    color: white!important;
  }

  .footer-legal
  {
    text-align: left;
  }

  .footer-copyright
  {
    text-align: right;
  }

  hr 
  {
    color: white;
    margin: 20px 0;
  }
}
</style>
