'use client';

import Navbar from "@/app/tsx/navbar";
import Link from "next/link";
import Footer from "@/app/tsx/footer";
import {motion} from "framer-motion";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
};


export default function Page() {
    return (
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div className="flex-grow pt-32">
                    <motion.header
                        className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                        style={{ fontFamily: "Franklin Gothic Heavy" }}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        Impressum
                    </motion.header>
                    <motion.div
                        className="flex flex-col md:flex-row justify-between mt-6 md:ml-32 text-lg leading-relaxed md:pr-32 tracking-wide"
                        style={{ fontFamily: "Arial" }}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="max-w-full break-words text-base md:text-lg">
                            <h2 className="font-bold">Seiteninhaber</h2>
                            <p>
                                Schulzentrum Ybbs an der Donau <br/>
                                Schulring 1 und 6 <br/>
                                3370 Ybbs an der Donau <br/>
                                Tel.: 0 74 12 52 575-11 <br/>
                                Fax: 0 74 12 52 575-16 <br/>
                                E-Mail: <Link href="mailto: hak@sz-ybbs.ac.at" className="text-[#00aaca]">hak(at)sz-ybbs.ac.at</Link> <br/>
                            </p>
                            <br/>

                            <h2 className="font-bold">Inhalt und Konzept</h2>
                            <p>
                                Inhaltsverantwortlich: Projektleitung SZ-Läuft <br/>
                                E-Mail: <Link href="mailto: sz-laeuft@sz-ybbs.ac.at" className="text-[#00aaca]">sz-laeuft(at)sz-ybbs.ac.at</Link> <br/>
                                Inhaltseinbindung, Frontend: Fabian Hammer & Kasim Mehinovic <br/>
                                E-Mail: <Link href="mailto: fabian.hammer@sz-ybbs.ac.at" className="text-[#00aaca]">fabian.hammer(at)sz-ybbs.ac.at</Link> <br/>
                                E-Mail: <Link href="mailto: kasim.mehinovic@sz-ybbs.ac.at" className="text-[#00aaca]">kasim.mehinovic(at)sz-ybbs.ac.at</Link> <br/>
                                Backend: Fabian Hammer
                            </p>
                            <br/>

                            <h2 className="font-bold">Rechte</h2>
                            <p>
                                Alle Rechte an der Webseite und den Bildern liegen beim Schulzentrum Ybbs. Das Kopieren oder die Verwendung von Fotos oder Textauszügen ist nur mit ausdrücklicher Genehmigung des Schulzentrums gestattet.
                            </p>
                            <br/>

                            <h2 className="font-bold">Verweise und Links</h2>
                            <p>
                                Bei direkten oder indirekten Verweisen auf fremde Webseiten (Hyperlinks), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor erklärt hiermit ausdrücklich, das zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der gelinkten/verknüpften Seiten hat der Autor keinerlei Einfluß. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller gelinkten/verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen anderen Formen von Datenbanken, auf deren Inhalt externe Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.

                            </p>


                        </div>
                    </motion.div>


                </div>





                <Footer/>
            </div>
    );
}