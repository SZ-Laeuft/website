'use client';

import Navbar from "@/app/tsx/navbar";
import {motion} from "framer-motion";
import Footer from "@/app/tsx/footer";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
};

export default function Service() {
    return (
        <>
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
                        Nutzungsbedingungen
                    </motion.header>
                    <motion.div
                        className="flex flex-col md:flex-row justify-between mt-6 md:ml-32 text-lg leading-relaxed md:pr-32 tracking-wide"
                        style={{ fontFamily: "Arial" }}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="max-w-full break-words text-base md:text-lg">
                            <p>
                                <strong>Vielen Dank für Ihr Interesse an unserem Projekt!</strong> Diese Website ist Teil eines schulischen Projektes und nicht kommerziell. Wir legen großen Wert auf Datenschutz, Transparenz und Fairness gegenüber Ihnen als unser Besucher oder Teilnehmer von SZ-Läuft.
                            </p>
                            <br/>
                            <h2 className="font-bold">1. Geltungsbereich</h2>
                            <p>
                                Diese Nutzungsbedingungen sind für den die Website www.sz-laeuft.sz-ybbs.ac.at gültig. Die Website wird im Rahmen des Schulprojektes „SZ-Läuft 2025“ betrieben. Die Bedingungen dieser Website gelten als akzeptiert, sobald die Seite aufgerufen wird.
                                <br/><br/>
                                <span className="font-bold italic">
            Hinweis: Für Informationen über den eigentlichen Lauf, insbesondere der zugehören Datenverwaltung, und der Datenverarbeitung auf dieser Website rufen Sie bitte unsere DSGVO-Erklärung auf: <a href="https://szlaeuft.sz-ybbs.ac.at/privacy-policy" className="underline text-blue-600">https://szlaeuft.sz-ybbs.ac.at/privacy-policy.html</a>. Eben genannte Erklärung wird im folgenden als DSGVO-Erklärung bezeichnet.
        </span>
                            </p>
                            <br/>
                            <h2 className="font-bold">2. Zweck der Website</h2>
                            <p>
                                Die Website dient als Plattform der Dokumentation und Information eines schulischen Laufevents, dessen Gewinn einer Charity-Organisation zugeführt wird. Die Website bietet eine Galerie mit Fotos des eigentlichen Spendenlaufs an, sowie eine Anmeldung für Schüler des SZ-Ybbs und personenbezogene Laufstatistiken. Genauere Informationen über diese Datenverarbeitenden Systeme finden Sie in der unter Punkt 1 genannten DSGVO-Erklärung.
                            </p>
                            <br/>
                            <h2 className="font-bold">3. Voranmeldung</h2>
                            <p>
                                Dieser Abschnitt wird zusätzlich angenommen, sobald die Anmeldung zum Frühstarter über die Voranmeldung auf dieser Website erfolgt. Dies folgt durch Setzen einer Checkbox, ohne welche die Voranmeldung nicht möglich ist. Durch die Dateneingabe in das Voranmeldungsformular werden keine Nutzeraccounts erstellt. Über diese Daten wird lediglich gespeichert, welche Schülerinnen und Schüler des Schulzentrums sich als Frühstarter angemeldet haben.
                                <br/><br/>
                                Sollten sich Schulexterne Personen über diese Voranmeldung registrieren, so lässt sich eine Speicherung der Daten nicht verhindern. Es wird dann allerdings kein Eintrag in der Laufverwaltungssoftware angelegt, sofern die Person keiner aktuell existierenden Klasse am Schulzentrum Ybbs zugeordnet werden kann.
                                <br/><br/>
                                Durch die Voranmeldung bestätigt der User der Website, dass seine getätigten Eingaben korrekt und vollständig sind. Änderungen oder gar Löschung der Daten sind nur möglich, wenn ein schriftlicher Antrag beim Vearbeitungsverantwortlichen der DSGVO erfolgt, dieser ist im Impressum und der DSGVO-Erklärung ausgewiesen. Zudem ist ein Identitätsnachweis erforderlich. Mündliche Anträge sind nicht zulässig.
                            </p>
                            <br/>
                            <h2 className="font-bold">4. Externe Anmeldung zum Spendenlauf</h2>
                            <p>
                                Mit einer Anmeldung vor Ort für externe Personen stimmen diese der DSGVO-Erklärung dieser Website zu. Dabei kann es passieren, dass Rückfragen des Personals vor Ort notwendig sind, um die Richtigkeit Ihrer Daten sicherzustellen.
                                <br/><br/>
                                Durch die Vor-Ort-Anmeldung bestätigt der Teilnehmer, dass seine getätigten Angaben korrekt und vollständig sind. Änderungen oder gar Löschung der Daten sind nur möglich, wenn ein schriftlicher Antrag beim Vearbeitungsverantwortlichen der DSGVO erfolgt, dieser ist im Impressum und der DSGVO-Erklärung ausgewiesen. Zudem ist ein Identitätsnachweis erforderlich. Mündliche Anträge sind nicht zulässig.
                            </p>
                            <br/>
                            <h2 className="font-bold">5. Teilnehmerstatistik</h2>
                            <p>
                                Nach dem Laufevent findet sich auf dieser Website eine Statistik wieder. Jede Person, welche am Lauf teilgenommen hat, hat den Nutzungsbedingungen und der DSGVO-Erklärung zugestimmt. Somit steht dem Betreiber das Recht zu, Name, die Laufgruppe (Beispielsweise Klasse) sowie die gelaufene Rundenanzahl auf der Seite zu veröffentlichen.
                                <br/><br/>
                                Laut DSGVO ist allerdings ein Austritt aus dieser Datenverarbeitung zulässig. Änderungen oder gar Löschung der Daten sind nur möglich, wenn ein schriftlicher Antrag beim Vearbeitungsverantwortlichen der DSGVO erfolgt, dieser ist im Impressum und der DSGVO-Erklärung ausgewiesen. Zudem ist ein Identitätsnachweis erforderlich. Mündliche Anträge sind nicht zulässig.
                            </p>
                            <br/>
                            <h2 className="font-bold">6. Pflichten für Benutzer &amp; Benutzerinnen</h2>
                            <p>
                                Durch das Besuchen dieser Website erklären Sie sich damit einverstanden, dass Sie die Website nicht durch technische, automatisierte, physische oder menschliche Eingriffe stören. Bei Verwendung der Voranmeldung ist es ihre Pflicht, wahrheitsgemäße Angaben zu machen (siehe Punkt 3 dieser Nuzungsbedindungen).
                            </p>
                            <br/>
                            <h2 className="font-bold">7. Inhalte und Urheberechte</h2>
                            <p>
                                Alle Inhalte (Texte, Bilder, Grafiken, Quellecode, Animationen, Videos) sind, soweit nicht anders ausgewiesen, nur für die Verwendung durch das Schulzentrum Ybbs an der Donau und durch die Projektgruppe zugelassen. Die einzelnen Urheberrechte liegen innerhalb des Projektteams.
                                <br/><br/>
                                Eine Weiterverwendung ist ohne Zustimmung der Projektgruppe nicht gestattet. Sollte eine Verwendung außerhalb schulischer Projekte oder Zwecke erfolgen, so muss der Urheber zustimmen. Anträge auf Verwendung sind von schulexternen Personen schriftlich einzubringen. Jeder Antrag in Inhaltsrechtlichen Thematiken kann ohne Nennung von Gründen abgewiesen werden.
                            </p>
                            <br/>
                            <h2 className="font-bold">8. Datenschutz</h2>
                            <p>
                                Die Verarbeitung ihrer Personenbezogenen Daten erfolgt im Einklang unserer Datenschutzgrundverordnung. Diese Erklärung gilt mit der Anmeldung zum Spendenlauf als akzeptiert, zudem gilt der technisch notwendige Teil mit dem Besuch der Website als akzeptiert. Mit dem Ausfüllen &amp; Absenden der Voranmeldung gilt ebenfalls die gesamte DSGVO-Erklärung als akzeptiert. Widersprüche, Auskunftsrecht, etc. sind in schriftlichem Weg beim Verarbeitungsverantwortlichen möglich. Diesen entnehmen Sie bitte der DSGVO. Einen Link zur DSGVO-Erklärung findet sich am Seitenende oder unter Punkt 1.
                            </p>
                            <br/>
                            <h2 className="font-bold">9. Haftungsausschluss</h2>
                            <p>
                                Das Team von SZ-Läuft 2025 hat diese Website mit größter Sorgfalt erstellt. Der Betreiber und das Projektteam übernimmt jedoch keinerlei Gewähr für die Richtigkeit der Angaben oder Verfügbarkeit der Inhalte. Informationen zur Richtigstellung personenbezogener Daten sind zu finden unter den Punkten 1, 3, 4 &amp; 5 sowie auf DSGVO-Erklärung.
                            </p>
                            <br/>
                            <h2 className="font-bold">10. Anwendbares Recht</h2>
                            <p>
                                Es gilt das Recht der Republik Österreich. Gerichtsstand ist das für die Stadtgemeinde Ybbs an der Donau zuständige Gericht in der Sache.
                            </p>
                            <br/>
                            <h2 className="font-bold">11. Kontakt</h2>
                            <p>
                                Für Fragen, Beschwerden, oder Urentheber-/Lizenzrechtliche Beschwerden bitten wir um Kontaktaufnahme mit dem Seitenbetreiber:
                                <br/>
                                Schulzentrum Ybbs an der Donau<br/>
                                Schulring 1 und 6<br/>
                                3370 Ybbs an der Donau<br/>
                                Tel.: 0 74 12 52 575-11<br/>
                                Fax: 0 74 12 52 575-16<br/>
                                E-Mail: hak(at)sz-ybbs.ac.at<br/>
                                <br/>
                                Für Ausübung Ihrer Rechte gemäß Datenschutzgrundverordnung oder Beschwerden in diese Richtung bitten wir um Kontaktaufnahme mit dem für die Verarbeitung-Verantwortlichen des SZ-Läuft-Teams 2025. Hierbei handelt es sich um dieselbe natürliche Person, welche bereits mehrfach in diesen Nutzungsbedingungen erwähnt worden ist:
                                <br/><br/>
                                Sebastian Zöchbauer<br/>
                                Anschrift: Bach 7, 3242 Texingtal<br/>
                                E-Mail: sebastian.zoechbauer@sz-ybbs.ac.at<br/>
                                Tel.: +43 677 63772559
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
            <Footer/>
        </>
    )
}