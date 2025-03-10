'use client'
import { ChevronRight, Download } from 'lucide-react'
import Link from 'next/link'

export default function ConstitutionPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top Navigation Area */}
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
              <span className="text-[#9b8154]">Constitution</span>
            </nav>
            
            <button 
              className="p-2 text-gray-500 hover:text-[#9b8154] transition-colors"
              title="Download PDF"
            >
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-[28px] font-bold text-gray-900 mb-12">
            Constitution
          </h1>

          <div className="space-y-12 text-[17px] leading-[27px] text-gray-800">
            {/* Law, Courts and Constitution */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  LAW, COURTS AND THE CONSTITUTION
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                India's commitment to the rule of law is grounded in the Constitution which establishes India as a 'Sovereign Socialist Secular Democratic Republic' with a Parliamentary form of Government. The Constitution of India is the supreme legal authority which binds the legislative, executive, and judicial organs of government. The Constitution grants all citizens Fundamental Rights and empowers the independent judiciary to invalidate legislations or government actions which violate the Constitution. Some of the other key features of the Constitution are a federal system of governance between the Union and the States, separation of powers between the three organs of the Government, free and fair elections, equality before the law, and a secular state that recognizes freedom of conscience and religion.
              </p>
            </section>

            {/* Sources of Law */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  SOURCES OF LAW
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                The Constitution of India is the source of legal authority and empowers Parliament and the Legislatures of States and Union Territories to enact statutes. There is also a vast body of laws known as subordinate legislation in the form of rules, regulations, and by-laws made by Central and State Governments and local authorities like Municipal Corporations, Municipalities, Gram Panchayats and other local bodies. This subordinate legislation is made under the authority conferred or delegated either by Parliament or the concerned Legislature of the State or Union Territory. The decisions of the Supreme Court are binding on all Courts within the territory of India. As India is a land of diversities, local customs and conventions which do not contradict a statute or the Constitution are recognised and taken into account by Courts while administering justice in certain spheres.
              </p>
            </section>

            {/* Enactment of Laws */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  ENACTMENT OF LAWS
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                The Seventh Schedule of the Constitution contains three lists: a Union List, a State List, and a Concurrent List. These lists set out the various subjects on which Parliament and State Legislatures are empowered to make laws. The Indian Parliament is competent to make laws on matters enumerated in the Union List. State Legislatures are competent to make laws on matters enumerated in the State List. While both the Union and the States have the power to legislate on matters enumerated in the Concurrent List, only Parliament has power to make laws on matters not included in the State List or the Concurrent List. In the event of repugnancy, laws made by Parliament shall prevail over laws made by State Legislatures, to the extent of the repugnancy. The State law shall be void unless it has received the assent of the President, and in such case, shall prevail in that State.
              </p>
            </section>

            {/* Applicability of Laws */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  APPLICABILITY OF LAWS
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                Laws made by Parliament may extend throughout or in any part of the territory of India and those made by State Legislatures generally apply only within the territory of the State concerned. Hence, variations are likely to exist from State to State in provisions of law relating to matters falling in the State and Concurrent Lists.
              </p>
            </section>

            {/* Judiciary */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  JUDICIARY
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                One of the unique features of the Indian Constitution is that, notwithstanding the adoption of a federal system and existence of Union and State Acts in their respective spheres, it provides for a single integrated system of courts to administer both Union and State laws. At the apex of the entire judicial system is the Supreme Court of India followed by the High Courts in each State or group of States. Under the administration of each High Court are the District Courts. Village/Panchayat Courts also function in some States under various names like Nyaya Panchayat, Gram Nyayalaya, Gram Kachheri to decide civil and criminal disputes of petty and local nature. Each State is divided into judicial districts presided over by a District and Sessions Judge, which is the principal civil court of original jurisdiction and can try all offences including those punishable with death. The District and Sessions Judge is the highest judicial authority in a district. District Courts have courts of civil jurisdiction, presided over by judges known in different States as Munsifs, Sub-Judges, Civil Judges. Similarly, the classes of criminal courts include the Chief Judicial Magistrates and Judicial Magistrates of First and Second Class.
              </p>
            </section>

            {/* Constitution of Supreme Court */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  CONSTITUTION OF SUPREME COURT
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                The Supreme Court of India comprises the Chief Justice of India and not more than 33 other Judges appointed by the President of India. Supreme Court Judges retire at the age of 65. In order to be appointed as a Judge of the Supreme Court, a person must be a citizen of India and must have been, for at least five years, a Judge of a High Court or an Advocate of a High Court for at least 10 years or he must be, in the opinion of the President, a distinguished jurist. The Constitution also contains provisions for a Judge of the High Court who may be appointed as an ad-hoc Judge of the Supreme Court and for retired Judges of the Supreme Court or High Courts to sit and act as Judges of that Court. The independence of judiciary is part of the basic structure of the Indian Constitution. A Supreme Court Judge cannot be removed from office except by an order of the President passed after an address in each House of Parliament supported by a majority of the total membership of that House and by a majority of not less than two-thirds of members present and voting, and presented to the President in the same Session for such removal on the ground of proved misbehavior or incapacity. A person who has been a Judge of the Supreme Court is debarred from practicing in any court of law or before any other authority in India.
              </p>
            </section>

            {/* Supreme Court Registry */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  SUPREME COURT REGISTRY
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                The administrative wing of the Supreme Court is known as the Registry. For systematic functioning and efficient disposal of work, the Registry is divided into two main wings, viz. Administration and Judicial, which are further divided into various Divisions, Branches, Sections and Cells. The administrative power for determining the work structure of the Court and the Registry exclusively vests in the Chief Justice of India. The Secretary General who is of the rank of Secretary to the Government of India is the highest Administrative Officer of the Supreme Court. He is assisted by Registrars/Officers on Special Duty and Additional Registrars who are assigned work of specific branches and they, in turn, are assisted by Deputy Registrars, Assistant Registrars and other officers/staff.
              </p>
            </section>

            {/* Attorney General */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  ATTORNEY GENERAL
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                The Attorney General of India is the highest law officer of the country appointed by the President. He shall be a person qualified to be appointed as a Judge of the Supreme Court. It is the duty of the Attorney General of India to give advice to the Government of India upon such legal matters and to perform such other duties of legal character as may be referred or assigned to him by the President. In the performance of his duties, he has the right of audience in all Courts in India as well as the right to take part in the proceedings of Parliament without the right to vote. In discharge of his functions, the Attorney General is assisted by a Solicitor General and Additional Solicitors Generals.
              </p>
            </section>

            {/* Supreme Court Advocates */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  SUPREME COURT ADVOCATES
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p className="mb-4">
                There are three categories of Advocates who are entitled to practise law before the Supreme Court of India:
              </p>

              <div className="space-y-6 pl-6">
                <div>
                  <h3 className="font-semibold mb-2">SENIOR ADVOCATES</h3>
                  <p>
                    'Senior Advocate' means any advocate so designated under sub-section (2) of Section 16 of the Advocates Act, 1961, and all such advocates whose names were borne on the roll of the senior advocates of the Court immediately before the commencement of Chapter III of the Advocates Act, 1961. All matters relating to the designation of Senior Advocates in the Supreme Court of India are dealt with by a Permanent Committee known as the "Committee for Designation of Senior Advocates" under the Guidelines for Designation of Senior Advocates by the Supreme Court of India, 2023. The Chief Justice of India or any Judge of the Supreme Court may recommend the name of an advocate for being designated as a senior advocate on being of the opinion that such an advocate who mainly practises in the Supreme Court should be so designated by virtue of their ability, standing at the Bar or special knowledge or experience in law. A Senior Advocate is not entitled to appear in the Supreme Court without an Advocate-on-Record. He is also not entitled to accept instructions to draw pleadings or affidavits, advise on evidence or do any drafting work of an analogous kind in any court or tribunal in India or undertake conveyancing work of any kind whatsoever but this prohibition shall not extend to settling any such matter as aforesaid in consultation with a junior.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">ADVOCATES-ON-RECORD</h3>
                  <p>
                    Only these Advocates are entitled to file any matter or document before the Supreme Court. They can also file an appearance or act for a party in the Supreme Court.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">OTHER ADVOCATES</h3>
                  <p>
                    These are the Advocates whose names are entered on the roll of any State Bar Council maintained under the Advocates Act, 1961. They can appear and argue any matter on behalf of a party in the Supreme Court but they are not entitled to file any document or matter before the Court.
                  </p>
                </div>
              </div>
            </section>

            {/* Amicus Curiae */}
            <section>
              <div className="relative pl-6 mb-6">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#9b8154]" />
                <h2 className="text-[20px] font-bold tracking-wide text-gray-900">
                  AMICUS CURIAE
                </h2>
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#9b8154]/20" />
              </div>
              <p>
                If a petition is received from the jail or in any other criminal matter where the accused is unrepresented, then an Advocate is appointed as amicus curiae by the Court to defend and argue the case of the accused. In civil matters, the Court can appoint an Advocate as amicus curiae if it thinks it necessary in case of an unrepresented party. Courts can also appoint amicus curiae in any matter of general public importance or in which the interest of the public at large is involved.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
