'use client'
import { ChevronRight, Printer, ArrowUp } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function JurisdictionPage() {
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-white relative">
      
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="py-4 flex items-center justify-between">
            <nav className="flex items-center gap-2 text-[13px] text-gray-500">
              <Link href="/" className="hover:text-[#9b8154] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="#" className="hover:text-[#9b8154] transition-colors">
                About Us
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#9b8154]">Jurisdiction</span>
            </nav>
            
            <button 
              className="p-2 text-gray-500 hover:text-[#9b8154] transition-colors"
              title="Print Page"
            >
              <Printer className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[28px] font-bold text-[#9b8154] mb-12">
            Jurisdiction
          </h1>

          <div className="space-y-12 text-[17px] leading-[27px] text-gray-800">
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  JURISDICTION OF THE SUPREME COURT
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                The Supreme Court has original, appellate and advisory jurisdiction. Its exclusive original jurisdiction extends to any dispute between the Government of India and one or more States or between the Government of India and any State or States on one side and one or more States on the other or between two or more States, if and insofar as the dispute involves any question (whether of law or fact) on which the existence or extent of a legal right depends. In addition, Article 32 of the Constitution gives an extensive original jurisdiction to the Supreme Court for enforcement of Fundamental Rights. It is empowered to issue directions, orders or writs, including writs in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari to enforce them. The Supreme Court has been conferred with power to direct transfer of any civil or criminal case from one High Court to another High Court or from a Court subordinate to another High Court. If satisfied that cases involving the same or substantially the same questions of law are pending before it and one or more High Courts or before two or more High Courts and that such questions are substantial questions of general importance, the Supreme Court may withdraw a case or cases pending before the High Court or High Courts and dispose of all such cases itself. Under the Arbitration and Conciliation Act, 1996, International Commercial Arbitration can also be initiated in the Supreme Court.
              </p>
              <p className="mt-4">
                The appellate jurisdiction of the Supreme Court can be invoked by a certificate granted by the High Court concerned under Article 132(1), 133(1) or 134 of the Constitution in respect of any judgement, decree or final order of a High Court in both civil and criminal cases, involving substantial question of law as to the interpretation of the Constitution. Appeals also lie to the Supreme Court in civil matters if the High Court concerned certifies : (a) that the case involves a substantial question of law of general importance, and (b) that, in the opinion of the High Court, the said question needs to be decided by the Supreme Court. In criminal cases, an appeal lies to the Supreme Court if the High Court (a) has on appeal reversed an order of acquittal of an accused person and sentenced him to death or to imprisonment for life or for a period of not less than 10 years, or (b) has withdrawn for trial before itself any case from any Court subordinate to its authority and has in such trial convicted the accused and sentenced him to death or to imprisonment for life or for a period of not less than 10 years, or (c) certified that the case is a fit one for appeal to the Supreme Court. Parliament is authorised to confer on the Supreme Court any further powers to entertain and hear appeals from any judgement, final order or sentence in a criminal proceeding of a High Court.
              </p>
              <p className="mt-4">
                The Supreme Court also has a very wide appellate jurisdiction over all Courts and Tribunals in India in as much as it may, in its discretion, grant special leave to appeal under Article 136 of the Constitution from any judgment, decree, determination, sentence or order in any cause or matter passed or made by any Court or Tribunal in the territory of India.
              </p>
              <p className="mt-4">
                The Supreme Court has special advisory jurisdiction in matters which may specifically be referred to it by the President of India under Article 143 of the Constitution. There are provisions for reference or appeal to this Court under Article 317(1) of the Constitution and other statutes. Election Petitions under Part III of the Presidential and Vice Presidential Elections Act, 1952 are also filed directly in the Supreme Court.
              </p>
              <p className="mt-4">
                Under Articles 129 and 142 of the Constitution, the Supreme Court has been vested with power to punish for contempt of Court including the power to punish for contempt of itself. In case of contempt other than the contempt referred to in Rule 2, Part-I of the Rules to Regulate Proceedings for Contempt of the Supreme Court, 1975, the Court may take action (a) Suo motu, or (b) on a petition made by Attorney General, or Solicitor General, or (c) on a petition made by any person, and in the case of a criminal contempt with the consent in writing of the Attorney General or the Solicitor General.
              </p>
              <p className="mt-4">
                Under Order XL of the Supreme Court Rules the Supreme Court may review its judgment or order but no application for review is to be entertained in a civil proceeding except on the grounds mentioned in Order XLVII, Rule 1 of the Code of Civil Procedure and in a criminal proceeding except on the ground of an error apparent on the face of the record. Order XLVIII of the Supreme Court Rules, 2013 provides that the Supreme Court can reconsider its final judgment or order by way of a curative petition on limited grounds after the dismissal of review petition.
              </p>
            </section>

            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  PUBLIC INTEREST LITIGATION
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                In India, a writ petition may be moved not only by an aggrieved individual but also by a public-spirited individual or group of persons in matters in which interest of the public at large is involved. The Court can be moved either by filing a writ petition or by addressing a letter to the Hon'ble the Chief Justice of India highlighting the question of public importance for invoking this jurisdiction. On several occasions, the Supreme Court has treated letters, telegrams, postcards, and news reports as writ petitions. Such a concept is popularly known as 'Public Interest Litigation' (PIL). This judicial innovation of the PIL system is unique to the Supreme Court of India.
              </p>
            </section>

            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  LEGAL AID
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                If a person belongs to the poor section of the society having annual income of less than Rs. 5,00,000/- or belongs to Scheduled Caste or Scheduled Tribe, a victim of natural calamity, is a woman or a child or a mentally ill or otherwise disabled person or an industrial workman or is in custody including custody in protective home, he/she is entitled to get free legal aid from the Supreme Court Legal Aid Committee. The aid so granted by the Committee includes cost of preparation of the matter and all applications connected therewith, in addition to providing an Advocate for preparing and arguing the case. Any person desirous of availing legal service through the Committee has to make an application to the Secretary and hand over all necessary documents concerning his case to it. The Committee after ascertaining the eligibility of the person provides necessary legal aid to him/her.
              </p>
              <p className="mt-4">
                Persons belonging to the middle income group i.e. with income above Rs. 60,000/- but under Rs. 7,50,000/- per annum are also eligible to get legal aid from the Supreme Court Middle Income Group Society on nominal payments. The Supreme Court also has a Mediation Centre which mediates and resolves matters that are referred to it by the Court.
              </p>
            </section>

            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  HIGH COURTS
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                The High Court stands at the head of a State's judicial administration. There are 25 High Courts in the country, three having jurisdiction over more than one State. Among the Union Territories, Delhi, and Union Territories of Jammu & Kashmir and Ladakh have a High Court of their own. Other five Union Territories come under the jurisdiction of different High Courts. Each High Court comprises a Chief Justice and such other Judges as the President may, from time to time, appoint. The Chief Justice of a High Court is appointed by the President in consultation with the Chief Justice of India and the Governor of the State. The procedure for appointing puisne Judges is the same except that the Chief Justice of the High Court concerned is also consulted. Judges in the High Court hold office until the age of 62 years and are removable in the same manner as a Judge of the Supreme Court. To be eligible for appointment as a Judge one must be a citizen of India and have held a judicial office in India for ten years or must have practised as an Advocate of a High Court or two or more such Courts in succession for a similar period.
              </p>
              <p className="mt-4">
                Each High Court has power to issue to any person within its jurisdiction directions, orders, or writs including writs which are in the nature of habeas corpus, mandamus, prohibition, quo warranto and certiorari for enforcement of Fundamental Rights and for any other purpose. This power may also be exercised by any High Court exercising jurisdiction in relation to territories within which the cause of action, wholly or in part, arises for exercise of such power, notwithstanding that the seat of such Government or authority or residence of such person is not within those territories.
              </p>
              <p className="mt-4">
                Each High Court has powers of superintendence over all Courts within its jurisdiction. It can call for returns from such Courts, make and issue general rules and prescribe forms to regulate their practice and proceedings and determine the manner and form in which book entries and accounts shall be kept.
              </p>
              <p className="mt-4">
                There is also an Advocate General for each State appointed by the Governor, who holds office during the pleasure of the Governor. An Advocate General must be a person qualified to be appointed as a Judge of the High Court. His duty is to give advice to State Governments upon such legal matters and to perform such other duties of legal character, as may be referred or assigned to him by the Governor. The Advocate General has the right to speak and take part in the proceedings of the State Legislature without the right to vote.
              </p>
            </section>

            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  LOK ADALATS
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                Lok Adalats is an alternative dispute redressal mechanism to arrive at amicable settlement of disputes outside of court. Under the Legal Services Authorities Act, 1987, every State Authority or District Authority or the Supreme Court Legal Services Committee or every High Court Legal Services Committee or, as the case may be, Taluk Legal Services Committee may organise Lok Adalats. Every award of Lok Adalat shall be deemed to be a decree of a civil court or order of a Tribunal and shall be final and binding on the parties to the dispute. The Act also provides that with respect to the cases decided at Lok Adalat, the court fees paid by the parties is refunded.
              </p>
            </section>

            <section className="mt-16">
              <div className="relative">
                <div className="bg-gray-900 w-full">
                  <div className="container max-w-6xl mx-auto">
                    <h2 className="text-[20px] font-bold tracking-wide text-white px-6 py-3 inline-flex items-center">
                      JURISDICTION AND SEAT OF HIGH COURTS
                      <span className="text-sm italic text-gray-400 ml-4">Annexure 'A'</span>
                    </h2>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#9b8154] text-white">
                        <th className="px-6 py-4 text-left text-sm font-bold border border-[#9b8154]/20">
                          S. No.
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold border border-[#9b8154]/20">
                          Name of High Court
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold border border-[#9b8154]/20">
                          Year Established
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold border border-[#9b8154]/20">
                          Territorial Jurisdiction
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-bold border border-[#9b8154]/20">
                          Principal Seat & Bench
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          name: "Bombay High Court",
                          year: "1862",
                          jurisdiction: "Maharashtra,\nDadra and Nagar Haveli, Daman & Diu*,\nGoa",
                          seat: "Principal Seat: Mumbai\nOther Benches: Panaji, Aurangabad, and Nagpur"
                        },
                        {
                          name: "Calcutta High Court",
                          year: "1862",
                          jurisdiction: "West Bengal\nAndaman & Nicobar islands*",
                          seat: "Principal Seat: Kolkata\nOther Benches: Port Blair and Jalpaiguri"
                        },
                        {
                          name: "Madras High Court",
                          year: "1862",
                          jurisdiction: "Tamil Nadu\nPondicherry*",
                          seat: "Principal Seat: Chennai\nBench: Madurai"
                        },
                        {
                          name: "Allahabad High Court",
                          year: "1866",
                          jurisdiction: "Uttar Pradesh",
                          seat: "Principal Seat: Prayagraj\nBench: Lucknow"
                        },
                        {
                          name: "Karnataka High Court",
                          year: "1884",
                          jurisdiction: "Karnataka",
                          seat: "Principal Seat: Bengaluru\nOther Benches: Dharwad and Gulbarga"
                        },
                        {
                          name: "Patna High Court",
                          year: "1916",
                          jurisdiction: "Bihar",
                          seat: "Patna"
                        },
                        {
                          name: "Guwahati High Court",
                          year: "1948",
                          jurisdiction: "Assam,\nNagaland,\nMizoram,\nArunachal Pradesh",
                          seat: "Principal Seat: Guwahati\nOther Benches: Kohima, Aizawl, and Itanagar"
                        },
                        {
                          name: "Odisha High Court",
                          year: "1948",
                          jurisdiction: "Odisha",
                          seat: "Cuttack"
                        },
                        {
                          name: "Rajasthan High Court",
                          year: "1949",
                          jurisdiction: "Rajasthan",
                          seat: "Principal Seat: Jodhpur\nBench: Jaipur"
                        },
                        {
                          name: "Madhya Pradesh High Court",
                          year: "1956",
                          jurisdiction: "Madhya Pradesh",
                          seat: "Principal Seat: Jabalpur\nOther Benches: Gwalior and Indore"
                        },
                        {
                          name: "Kerala High Court",
                          year: "1956",
                          jurisdiction: "Kerala, Lakshadweep*",
                          seat: "Kochi"
                        },
                        {
                          name: "Gujarat High Court",
                          year: "1960",
                          jurisdiction: "Gujarat",
                          seat: "Sola(Ahmedabad)"
                        },
                        {
                          name: "Delhi High Court",
                          year: "1966",
                          jurisdiction: "Delhi*",
                          seat: "New Delhi"
                        },
                        {
                          name: "Punjab & Haryana High Court",
                          year: "1966",
                          jurisdiction: "Punjab, Haryana, Chandigarh*",
                          seat: "Chandigarh"
                        },
                        {
                          name: "Himachal Pradesh High Court",
                          year: "1971",
                          jurisdiction: "Himachal Pradesh",
                          seat: "Shimla"
                        },
                        {
                          name: "Sikkim High Court",
                          year: "1975",
                          jurisdiction: "Sikkim",
                          seat: "Gangtok"
                        },
                        {
                          name: "Chhattisgarh High Court",
                          year: "2000",
                          jurisdiction: "Chhattisgarh",
                          seat: "Bilaspur"
                        },
                        {
                          name: "Uttarakhand High Court",
                          year: "2000",
                          jurisdiction: "Uttarakhand",
                          seat: "Nainital"
                        },
                        {
                          name: "Jharkhand High Court",
                          year: "2000",
                          jurisdiction: "Jharkhand",
                          seat: "Ranchi"
                        },
                        {
                          name: "Tripura High Court",
                          year: "2013",
                          jurisdiction: "Tripura",
                          seat: "Agartala"
                        },
                        {
                          name: "Manipur High Court",
                          year: "2013",
                          jurisdiction: "Manipur",
                          seat: "Imphal"
                        },
                        {
                          name: "Meghalaya High Court",
                          year: "2013",
                          jurisdiction: "Meghalaya",
                          seat: "Shillong"
                        },
                        {
                          name: "Telangana High Court",
                          year: "2019",
                          jurisdiction: "Telangana",
                          seat: "Hyderabad"
                        },
                        {
                          name: "Andhra Pradesh High Court",
                          year: "2019",
                          jurisdiction: "Andhra Pradesh",
                          seat: "Amravati"
                        },
                        {
                          name: "Jammu & Kashmir and Ladakh High Court",
                          year: "2019",
                          jurisdiction: "Jammu and Kashmir and Ladakh*",
                          seat: "Jammu & Srinagar",
                          note: "Note: In 1928, Jammu & Kashmir high court was established. Post-bi-furcation of J&K into two Union Territories, there is now a common High Court."
                        }
                      ].map((court, index) => (
                        <tr 
                          key={index}
                          className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                        >
                          <td className="px-6 py-4 text-sm text-gray-800 border border-gray-200">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 border border-gray-200">
                            {court.name}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 border border-gray-200">
                            {court.year}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 border border-gray-200 whitespace-pre-line">
                            {court.jurisdiction}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 border border-gray-200 whitespace-pre-line">
                            {court.seat.split('\n').map((line, i) => (
                              <div key={i}>
                                {line.startsWith('Principal Seat') ? (
                                  <span>
                                    <strong>Principal Seat</strong>
                                    {line.substring(13)}
                                  </span>
                                ) : (
                                  <span>
                                    {line.startsWith('Other Benches') ? (
                                      <><strong>Other Benches</strong>{line.substring(13)}</>
                                    ) : line.startsWith('Bench') ? (
                                      <><strong>Bench</strong>{line.substring(5)}</>
                                    ) : line}
                                  </span>
                                )}
                              </div>
                            ))}
                            {court.note && (
                              <div className="mt-2 text-xs text-gray-600 italic">
                                {court.note}
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 text-sm text-gray-600 italic">
                  * Union Territories of India
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 p-3 bg-[#9b8154] text-white shadow-lg transition-all duration-300 hover:bg-[#9b8154]/90 rounded-md ${
          showScroll ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 stroke-[2.5]" />
      </button>
    </div>
  )
}
