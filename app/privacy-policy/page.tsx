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
                            Sebastian Zöchbauer<br/>
                            Addr.: Bach 7, 3242 Texingtal<br/>
                            E-Mail: sebastian.zoechbauer@sz-ybbs.ac.at<br/>
                            Tel.: +43 677 63772559
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
                        <br/>

                        <p>
                            b) Bei Registrierung oder Anmeldung zum Spendenlauf<br/>
                            Wenn Sie sich für unseren Spendenlauf anmelden, erheben wir folgende personenbezogene Daten:
                            <br/>
                            Vorname und Nachname
                            <br/>
                            Schule/Firma
                            <br/>
                            Klasse (falls Schüler des SZ-Ybbs)
                            <br/>
                            Angaben zur Teilnahme (z.B. Teamzugehörigkeit, Startzeit)
                            <br/>
                            Die Verarbeitung dieser Daten erfolgt zur Durchführung des Spendenlaufs sowie zur Abwicklung von Spenden und ggf. steuerlichen Nachweiszwecken.

                        </p>
                        <br/>


                        <h2 className="font-bold">4. Zwecke der Datenverarbeitung</h2>
                        <p>
                            Wir verarbeiten Ihre Daten zu folgenden Zwecken:
                            <br/>
                            Organisation und Durchführung des Spendenlaufs
                            <br/>
                            Kommunikation mit Ihnen (z.B. Bestätigung der Anmeldung, wichtige Informationen zum Event)
                            <br/>
                            Abwicklung von Spenden und Ausstellung von Spendenbescheinigungen
                            <br/>
                            Einhaltung gesetzlicher Aufbewahrungspflichten
                        </p>
                        <br/>

                        <h2 className="font-bold">5. Rechtsgrundlagen der Verarbeitung</h2>
                        <p>
                            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Basis folgender Rechtsgrundlagen:
                            <br/>
                            Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung und vorvertragliche Maßnahmen)
                            <br/>
                            Art. 6 Abs. 1 lit. c DSGVO (Erfüllung rechtlicher Verpflichtungen, z.B. steuerrechtlicher Vorschriften)
                            <br/>
                            Art. 6 Abs. 1 lit. a DSGVO (Einwilligung, z.B. für die Veröffentlichung von Fotos oder Namen auf der Website)
                        </p>
                        <br/>

                        <h2 className="font-bold">6. Weitergabe von Daten</h2>
                        <p>
                            Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, soweit dies für die Durchführung des Spendenlaufs notwendig ist oder wir gesetzlich dazu verpflichtet sind. Mögliche Empfänger können z.B. Zahlungsdienstleister oder Steuerbehörden sein.
                        </p>
                        <br/>

                        <h2 className="font-bold">7. Dauer der Datenspeicherung</h2>
                        <p>
                            Ihre personenbezogenen Daten werden nur so lange gespeichert, wie es für die oben genannten Zwecke erforderlich ist. Danach werden die Daten gelöscht, es sei denn, gesetzliche Aufbewahrungspflichten (z.B. nach Steuerrecht) verlangen eine längere Speicherung.
                        </p>
                        <br/>

                        <h2 className="font-bold">8. Ihre Rechte</h2>
                        <p>
                            Sie haben jederzeit das Recht:
                            <br/>
                            gemäß Art. 15 DSGVO Auskunft über Ihre gespeicherten Daten zu verlangen,
                            <br/>
                            gemäß Art. 16 DSGVO die Berichtigung unrichtiger oder die Vervollständigung Ihrer gespeicherten Daten zu verlangen,
                            <br/>
                            gemäß Art. 17 DSGVO die Löschung Ihrer gespeicherten Daten zu verlangen,
                            <br/>
                            gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung zu verlangen,
                            <br/>
                            gemäß Art. 20 DSGVO Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten,
                            <br/>
                            gemäß Art. 7 Abs. 3 DSGVO eine erteilte Einwilligung jederzeit zu widerrufen,
                            <br/>
                            sowie sich gemäß Art. 77 DSGVO bei einer Aufsichtsbehörde zu beschweren.
                            <br/>
                            Bitte wenden Sie sich zur Ausübung Ihrer Rechte an die oben genannte Kontaktadresse.
                        </p>
                        <br/>

                        <h2 className="font-bold">9. Datensicherheit</h2>
                        <p>
                            Wir setzen geeignete technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder unbefugten Zugriff durch Dritte zu schützen.
                        </p>
                        <br/>

                        <h2 className="font-bold">10. Änderungen dieser Datenschutzrichtlinie</h2>
                        <p>
                            Wir behalten uns vor, diese Datenschutzrichtlinie gelegentlich anzupassen, um sie aktuellen rechtlichen Anforderungen oder Änderungen unseres Angebots anzupassen. Die jeweils aktuelle Version finden Sie jederzeit auf unserer Website.
                        </p>


                    </div>
                </motion.div>
            </div>

        </div>
    )
}