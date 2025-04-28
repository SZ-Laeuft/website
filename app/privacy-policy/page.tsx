'use client';

import Navbar from "@/app/tsx/navbar";
import {motion} from "framer-motion";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
};

export default function Datenschutz() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow pt-32">
                <motion.header
                    className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                    style={{ fontFamily: "Franklin Gothic Heavy" }}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Datenschutzrichtlinien
                </motion.header>
                <motion.div
                    className="flex flex-col md:flex-row justify-between px-6 mt-6 md:ml-32 text-lg leading-relaxed md:border-l-4 border-black pl-4 border-opacity-20 md:pr-32"
                    style={{ fontFamily: "Franklin Gothic Medium" }}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="max-w-full break-words text-base md:text-lg">
                        <h2 className="font-bold">1. Allgemeine Hinweise</h2>
                        <p>Wir freuen uns, dass Sie unsere Website besuchen und sich für unseren Spendenlauf engagieren. Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Nachfolgend informieren wir Sie über die Erhebung, Verarbeitung und Nutzung Ihrer Daten im Rahmen der Nutzung unserer Website gemäß der geltenden Datenschutzgesetze, insbesondere der Datenschutz-Grundverordnung (DSGVO).</p>
                        <br/>

                        <h2 className="font-bold">2. Verantwortlicher</h2>
                        <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>

                        <p>
                            [Name des Veranstalters]<br/>
                            [Adresse]<br/>
                            [E-Mail-Adresse]<br/>
                            [Telefonnummer]
                        </p>
                        <br/>

                        <h2 className="font-bold">3. Erhebung und Speicherung personenbezogener Daten</h2>
                        <p>
                            a) Beim Besuch der Website<br/>
                            Beim Aufrufen unserer Website werden automatisch Informationen durch den Browser Ihres Endgeräts an unseren Server gesendet. Diese Informationen werden temporär in einem sogenannten Logfile gespeichert. Folgende Daten werden dabei ohne Ihr Zutun erfasst und gespeichert:
                            <br/>
                            IP-Adresse des anfragenden Rechners
                            <br/>
                            Datum und Uhrzeit des Zugriffs
                            <br/>
                            Name und URL der abgerufenen Datei
                            <br/>
                            Website, von der aus der Zugriff erfolgt (Referrer-URL)
                            <br/>
                            verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers
                            <br/>
                            Diese Daten werden ausschließlich zur Gewährleistung eines reibungslosen Verbindungsaufbaus, zur Systemsicherheit sowie zu administrativen Zwecken verarbeitet.
                        </p>

                        b) Bei Registrierung oder Anmeldung zum Spendenlauf
                        Wenn Sie sich für unseren Spendenlauf anmelden, erheben wir folgende personenbezogene Daten:

                        Vorname und Nachname

                        Adresse

                        E-Mail-Adresse

                        Telefonnummer (optional)

                        Angaben zur Teilnahme (z.B. Teamzugehörigkeit, Startzeit)

                        Angaben zur Spende (z.B. Betrag, Zahlungsdaten)

                        Die Verarbeitung dieser Daten erfolgt zur Durchführung des Spendenlaufs sowie zur Abwicklung von Spenden und ggf. steuerlichen Nachweiszwecken.

                        4. Zwecke der Datenverarbeitung
                        Wir verarbeiten Ihre Daten zu folgenden Zwecken:

                        Organisation und Durchführung des Spendenlaufs

                        Kommunikation mit Ihnen (z.B. Bestätigung der Anmeldung, wichtige Informationen zum Event)

                        Abwicklung von Spenden und Ausstellung von Spendenbescheinigungen

                        Einhaltung gesetzlicher Aufbewahrungspflichten

                        5. Rechtsgrundlagen der Verarbeitung
                        Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Basis folgender Rechtsgrundlagen:

                        Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung und vorvertragliche Maßnahmen)

                        Art. 6 Abs. 1 lit. c DSGVO (Erfüllung rechtlicher Verpflichtungen, z.B. steuerrechtlicher Vorschriften)

                        Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z.B. für die Veröffentlichung von Fotos oder Namen auf der Website)

                        6. Weitergabe von Daten
                        Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, soweit dies für die Durchführung des Spendenlaufs notwendig ist oder wir gesetzlich dazu verpflichtet sind. Mögliche Empfänger können z.B. Zahlungsdienstleister oder Steuerbehörden sein.

                        7. Dauer der Datenspeicherung
                        Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die oben genannten Zwecke erforderlich ist. Danach werden die Daten gelöscht, es sei denn, gesetzliche Aufbewahrungspflichten (z.B. nach Steuerrecht) verlangen eine längere Speicherung.

                        8. Ihre Rechte
                        Sie haben jederzeit das Recht:

                        gemäß Art. 15 DSGVO Auskunft über Ihre gespeicherten Daten zu verlangen,

                        gemäß Art. 16 DSGVO die Berichtigung unrichtiger oder die Vervollständigung Ihrer gespeicherten Daten zu verlangen,

                        gemäß Art. 17 DSGVO die Löschung Ihrer gespeicherten Daten zu verlangen,

                        gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung zu verlangen,

                        gemäß Art. 20 DSGVO Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten,

                        gemäß Art. 7 Abs. 3 DSGVO eine erteilte Einwilligung jederzeit zu widerrufen,

                        sowie sich gemäß Art. 77 DSGVO bei einer Aufsichtsbehörde zu beschweren.

                        Bitte wenden Sie sich zur Ausübung Ihrer Rechte an die oben genannte Kontaktadresse.

                        9. Datensicherheit
                        Wir setzen geeignete technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder unbefugten Zugriff durch Dritte zu schützen.

                        10. Änderungen dieser Datenschutzrichtlinie
                        Wir behalten uns vor, diese Datenschutzrichtlinie gelegentlich anzupassen, um sie aktuellen rechtlichen Anforderungen oder Änderungen unseres Angebots anzupassen. Die jeweils aktuelle Version finden Sie jederzeit auf unserer Website.


                    </div>
                </motion.div>
            </div>

        </div>
    )
}