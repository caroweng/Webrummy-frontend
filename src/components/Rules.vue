<template>
    <div class="rules">
        <h1>Rules of Rummy</h1>
        <div class="rulesSection">
            <h3>Spielmaterial</h3>
            <p>
                Insgesamt gibt es 52 Spielsteine. Die Spielsteine gibt es in den Farben Schwarz, Blau, Rot und Gelb mit den Zahlen von 1 bis 13.
                Jeden dieser Steine gibt es zwei Mal.
            </p>
        </div>

        <div class="rulesSection">
            <h3>Ziel des Spiels</h3>
            <p>
                Das Ziel des Spiels ist es, alle Spielsteine als Erster abzulegen.
                Für das Ablegen der Steine gibt es bestimmte Regeln.
            </p>

            <p>
                Es ist ebenfalls wichtig, zum Ende des Spiels möglichst wenige Steine mit möglichst geringen Zahlenwerten auf der Hand zu haben.
                Die Werte der übrigen Steine werden am Ende des Spiels als Minuspunkte notiert.
            </p>
        </div>

        <div class="rulesSection">
            <h3>Spielvorbereitung</h3>
            <p>
                Zu Beginn des Spiels zieht jeder Spieler blind 14 Spielsteine und legt sie vor sich ab.
                Die anderen Spieler sollen die Spielsteine natürlich nicht sehen.
            </p>

            <p>
                Legen Sie alle Spielsteine verdeckt auf den Tisch. Nun zieht jeder Spieler 14 Spielsteine und legt sie vor sich auf die Ablage.

            </p>
        </div>

        <div class="rulesSection">
            <h3>Spielablauf</h3>
            <p>
                Jeder Spieler muss in seiner ersten Runde mit mindestens 30 Punkten rauskommen. Das bedeutet,
                dass die Zahlen auf den Steinen die er auslegt, in Summe mindestens einen Wert von 30 haben.
            </p>

            <p>
                Es können Straßen derselben Farbe (z. B. 4, 5, 6 in Blau) oder Gruppen (z. B. 7 in Rot, 7 in Gelb, 7 in Blau) gelegt werden.
                Auf dem Spielfeld müssen jedoch immer mindestens 3 Spielsteine zusammenliegen. Ein Joker kann jeden beliebigen Stein darstellen.
            </p>

            <p>
                Können Sie nicht mit den geforderten 30 Punkten rauskommen, ziehen Sie einen der verdeckten Spielsteine. Der nächste Spieler ist dran.
            </p>

            <p>
                Jeder Spieler, der es geschafft hat rauszukommen, kann jetzt auch seine restlichen Steine loswerden. Dazu legt er an bestehende
                Reihen auf dem Spielfeld an. Wer nicht kann, zieht einen neuen Stein.
            </p>

            <p>
                Sie können ebenfalls bestehende Reihen auf dem Tisch neu kombinieren. Zum Beispiel können Sie einen Stein aus einer 4er Kombinationen wegnehmen,
                um mit zwei anderen Steinen von Ihrer Hand eine neue Reihe zu bilden. Für neue Kombinationen gilt lediglich: Am Ende Ihres Zuges müssen auf
                dem Tisch stets gültige Kombinationen aus mindestens 3 Steinen liegen.
            </p>

            <p>
                Gewonnen hat, wer als Erster alle Steine loswird. Alle anderen Spieler zählen die Werte Ihrer verbliebenen Spielsteine zusammen und
                erhalten diese als Minuspunkte notiert. Der Gewinner bekommt alle Minuspunkte als Pluspunkte notiert. Ein Joker bringt 30 Minuspunkte.
            </p>
        </div>

        <div class="centeredButton">
            <router-link to="/">
                <button type="button" class="btn btn-light button">
                    Let's play!
                </button>
            </router-link>
        </div>

    </div>
</template>

<script>

    export default {
        name: "Rules",
    };

</script>

<style lang="css">
    @import '../css/rummy.css';
    @import '../css/rules.css';
</style>
