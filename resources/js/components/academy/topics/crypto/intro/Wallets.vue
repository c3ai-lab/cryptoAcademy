<template>
  <div>
    <h1>Wallets</h1>
    <div class="card">
      <div class="card-body" ref="container">
        <p>Wallets sind wichtige Bestandteile im Handel mit Kryptowährungen. Mit Hilfe dieser können Nutzer auf ihr Guthaben
          zugreifen und ihre Coins und Tokens versenden und empfangen. Die Wallet entspricht keinem Geldbeutel in dem sich
          Währung befindet, die Wallet interagiert lediglich mit der Blockchain. Anstelle von Münzen und Scheinen enthält eine
          Krypto-Wallet die privaten und öffentlichen Schlüssel eines Nutzers sodass diese sicher aufbewahrt werden können und
          man die Möglichkeit hat, jederzeit auf diese zuzugreifen. Wallets können völlig unterschiedlich aussehen, es gibt
          verschiedene Arten die zu den verschiedenen Anforderungen der Benutzer passen und dementsprechend auch in der
          gebotenen Sicherheit variieren.</p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Software Wallet</h2>
        <p>Eine Software Wallet befindet sich auf einem Computer oder mobilen Gerät und funktioniert ähnlich wie ein digitales
          Konto. Man kann direkt von diesem Gerät auf Kryptowährungs-Bestände zugreifen. Alle Schlüssel sind in einem Single
          Wallet File gespeichert, welche aus sicherheitsgründen Passwortgeschützt ist.</p>
        <p>Vorteile:</p>
        <ul>
          <li>Einrichtung und Anwendung sehr einfach</li>
          <li>Hohe Sicherheit</li>
          <li>Volle Kontrolle über alle Schlüssel</li>
        </ul>
        <p>Nachteile:</p>
        <ul>
          <li>Bei Verlust des Endgeräts können sich Dritte Zugriff auf die Wallet verschaffen</li>
          <li>Über öffentliche WLAN Netzwerke können sich Dritte Zugriff auf die Wallet verschaffen.</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Web Wallet / Hot Wallet / Custodial Wallet</h2>
        <p>Eine Web Wallet ist der einfachste Weg für Anfänger, ihre Kryptowährungen zu speichern. Sie befindet sich online auf
          einer Handelsplattform für Kryptowährungen und können daher schnell verwendet werden. Durch die online-Sicherung der
          Daten besteht jedoch eine verringerte Sicherheit. Daher sollten bei Web Wallets bzw. Hot Wallets nur geringe
          Geldbeträge gespeichert werden und größere Beträge offline zu sichern.</p>
        <p>Vorteile:</p>
        <ul>
          <li>Einfach einzurichten für Anfänger</li>
          <li>Schnelle Verwendung da Wallet direkt bei der Handelsplattform gesichert ist</li>
        </ul>
        <p>Nachteile:</p>
        <ul>
          <li>Durch online Sicherung verminderte Sicherheit der Daten</li>
          <li>Der Verwalter muss vertrauenswürdig sein</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Paper Wallets</h2>
        <p>Die Erstellung eines Paper Wallets ist sehr einfach. Auf verschiedenen Webseiten können diese schnell generiert
          werden und die Keys werden erst auf dem Endgerät generiert und daher nicht über das Internet übertragen.</p>
        <p>Vorteile:</p>
        <ul>
          <li>Schnell, einfach und günstig zu erhalten</li>
          <li>Sehr sicher</li>
        </ul>
        <p>Nachteile:</p>
        <ul>
          <li>Falls der Ausdruck verloren geht kann dieser nicht wiederhergestellt werden</li>
          <li>Umständliche Anwendung</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Hardware Wallets</h2>
        <p>Eine Hardware Wallet ist ein Speichermedium welches speziell für die Aufbewahrung von Kryptowährungen entwickelt
          wurde. Hier ist die Sicherheit und Benutzerfreundlichkeit am höchsten. Die Schlüssel werden auf einem kryptographisch
          gesicherten Hardware-Gerät gespeichert und werden im Falle eines Hackerangriffs nicht in Klartext angezeigt.</p>
        <p>Vorteile:</p>
        <ul>
          <li>Benutzerfreundlich</li>
          <li>Sehr sicher</li>
          <li>Gerät kann sicher verwahrt werden und ist PIN geschützt</li>
        </ul>
        <p>Nachteile:</p>
        <ul>
          <li>Kostspielig</li>
          <li>Erhöhter Einrichtungsaufwand</li>
          <li>Bei Verlust des Geräts gehen die Daten ebenfalls verloren</li>
        </ul>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <h2>Weiterführende Informationen:</h2>
        <a href="/academy/crypto--blockchain">Blockchain</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  img {
    width: 100%;
  }

</style>

<script>
  import {
    AcademyTopic
  } from "../../../../../enums";

  export default {
    name: AcademyTopic.CRYPTO__INTRO__WALLETS,
  };

</script>
