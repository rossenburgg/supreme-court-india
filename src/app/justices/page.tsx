'use client'
import { JudgeCard } from '@/components/ui/judge-card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function JusticesPage() {
  return (
    <main>
      {/* Hero Section for Chief Justice */}
      <section className="bg-[#f5f2eb]/50 pt-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-start mb-12">
            <Link 
              href="/"
              className="flex items-center gap-2 text-[#993333] hover:text-[#993333]/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>वापस जाएं</span>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold text-[#993333] mb-2">
              मुख्य न्यायाधीश एवं न्यायाधीश
            </h1>
            <h2 className="text-2xl font-medium text-[#993333]/90">
              भारत के मुख्य न्यायाधीश
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/judges/sanjiv-khanna.jpeg"
                alt="न्यायमूर्ति संजीव खन्ना"
                width={600}  // Added fixed width for hero image
                height={800} // Added fixed height for hero image
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-6 text-gray-800">
              <div>
                <h3 className="text-2xl font-medium mb-1">न्यायमूर्ति संजीव खन्ना</h3>
                <p className="text-lg text-[#993333]">भारत के मुख्य न्यायाधीश</p>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-white rounded-lg p-6 shadow-sm">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">जन्म की तारीख</h4>
                  <p className="text-lg">14-05-1960</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">नियुक्ति की तारीख</h4>
                  <p className="text-lg">18-01-2019</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">निवृत्ति की तारीख</h4>
                  <p className="text-lg">13-05-2025</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">कार्यकाल</h4>
                  <p className="text-lg">6 वर्ष 4 माह</p>
                </div>
              </div>

              <div className="prose prose-lg">
                <p>न्यायमूर्ति संजीव खन्ना भारत के सर्वोच्च न्यायालय के 51वें मुख्य न्यायाधीश हैं। उन्हें 18 जनवरी, 2019 को भारत के सर्वोच्च न्यायालय में पदोन्नत किया गया था और वर्तमान में वे राष्ट्रीय विधिक सेवा प्राधिकरण (NALSA) के मुख्य संरक्षक और राष्ट्रीय न्यायिक अकादमी, भोपाल (NJA) के अध्यक्ष हैं।</p>
                <p>वे 17 जून, 2023 से 25 दिसंबर, 2023 तक सर्वोच्च न्यायालय विधिक सेवा समिति (SCLSC) के अध्यक्ष और 26 दिसंबर, 2023 से 10 नवंबर, 2024 तक NALSA के कार्यकारी अध्यक्ष भी रहे हैं।</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
                <h4 className="font-medium text-lg">विशेषज्ञता के क्षेत्र</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "संवैधानिक कानून",
                    "प्रत्यक्ष कराधान",
                    "मध्यस्थता",
                    "वाणिज्यिक कानून",
                    "कंपनी कानून",
                    "भूमि कानून",
                    "पर्यावरण संरक्षण कानून",
                    "चिकित्सा लापरवाही"
                  ].map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1 bg-[#993333]/5 text-[#993333] rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Judges Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            {[
              // Active Judges (First 15, excluding Chief Justice)
              {
                nameHindi: "न्यायमूर्ति भूषण रामकृष्ण गवई",
                name: "Justice Bhushan Ramkrishna Gavai",
                appointmentDate: "24-05-2019",
                retirementDate: "23-11-2025",
                birthInfo: { date: "24-11-1960", place: "अमरावती" },
                imageUrl: "/judges/bhushan-gavai.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति सूर्यकान्त",
                "name": "Justice Surya Kant",
                "appointmentDate": "24-05-2019", 
                "retirementDate": "09-02-2027",
                "birthInfo": { "date": "10-02-1962", "place": "हिसार" },
                "imageUrl": "/judges/surya-kant.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति अभय श्रीनिवास ओका",
                "name": "Justice Abhay Shreeniwas Oka",
                "appointmentDate": "31-08-2021",
                "retirementDate": "24-05-2025",
                "birthInfo": { "date": "25-05-1960", "place": "मुंबई" },
                "imageUrl": "/judges/abhay-oka.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति विक्रम नाथ",
                "name": "Justice Vikram Nath",
                "appointmentDate": "31-08-2021",
                "retirementDate": "23-09-2027",
                "birthInfo": { "date": "24-09-1962" },
                "imageUrl": "/judges/vikram-nath.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति जे.के. माहेश्वरी",
                "name": "Justice J.K. Maheshwari",
                "appointmentDate": "31-08-2021",
                "retirementDate": "28-06-2026",
                "birthInfo": { "date": "29-06-1961" },
                "imageUrl": "/judges/justice-maheshwari.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति बी.वी. नागरत्ना",
                "name": "Justice B.V. Nagarathna",
                "appointmentDate": "31-08-2021",
                "retirementDate": "29-10-2027",
                "birthInfo": { "date": "30-10-1962", "place": "बेंगलुरु" },
                "imageUrl": "/judges/justice-nagarathna.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति एम.एम. सुंदरेश",
                "name": "Justice M.M. Sundresh",
                "appointmentDate": "31-08-2021",
                "retirementDate": "20-07-2027",
                "birthInfo": { "date": "21-07-1962", "place": "चेन्नई" },
                "imageUrl": "/judges/justice-sundresh.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति बेला एम. त्रिवेदी",
                "name": "Justice Bela M. Trivedi",
                "appointmentDate": "31-08-2021",
                "retirementDate": "09-06-2025",
                "birthInfo": { "date": "10-06-1960", "place": "अहमदाबाद" },
                "imageUrl": "/judges/justice-trivedi.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति पमिदिघनतम श्री नरसिम्हा",
                "name": "Justice Pamidighantam Sri Narasimha",
                "appointmentDate": "31-08-2021",
                "retirementDate": "02-05-2028",
                "birthInfo": { "date": "03-05-1963", "place": "हैदराबाद" },
                "imageUrl": "/judges/justice-narasimha.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति सुधांशु धूलिया",
                "name": "Justice Sudhanshu Dhulia",
                "appointmentDate": "09-05-2022",
                "retirementDate": "09-08-2025",
                "birthInfo": { "date": "10-08-1960" },
                "imageUrl": "/judges/justice-dhulia.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति श्री जे.बी. पर्दीवाला",
                "name": "Justice Jamshed Burjor Pardiwala",
                "appointmentDate": "09-05-2022",
                "retirementDate": "11-08-2030",
                "birthInfo": { "date": "12-08-1965" },
                "imageUrl": "/judges/justice-pardiwala.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति दीपांकर दत्ता",
                "name": "Justice Dipankar Datta",
                "appointmentDate": "12-12-2022",
                "retirementDate": "08-02-2030",
                "birthInfo": { "date": "09-02-1965" },
                "imageUrl": "/judges/justice-datta.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति पंकज मिथल",
                "name": "Justice Pankaj Mithal",
                "appointmentDate": "06-02-2023",
                "retirementDate": "16-06-2026",
                "birthInfo": { "date": "17-06-1961" },
                "imageUrl": "/judges/justice-mithal.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति संजय करोल",
                "name": "Justice Sanjay Karol",
                "appointmentDate": "06-02-2023",
                "retirementDate": "22-08-2026",
                "birthInfo": { "date": "23-08-1961" },
                "imageUrl": "/judges/justice-karol.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति संजय कुमार",
                "name": "Justice Sanjay Kumar",
                "appointmentDate": "06-02-2023",
                "retirementDate": "13-08-2028",
                "birthInfo": { "date": "14-08-1963" },
                "imageUrl": "/judges/justice-kumar.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति अहसानुद्दीन अमानुल्लाह",
                "name": "Justice Ahsanuddin Amanullah",
                "appointmentDate": "06-02-2023",
                "retirementDate": "10-05-2028",
                "birthInfo": { "date": "11-05-1963" },
                "imageUrl": "/judges/justice-amanullah.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति मनोज मिश्रा",
                "name": "Justice Manoj Misra",
                "appointmentDate": "06-02-2023",
                "retirementDate": "01-06-2030",
                "birthInfo": { "date": "02-06-1965" },
                "imageUrl": "/judges/justice-misra.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति राजेश बिंदल",
                "name": "Justice Rajesh Bindal",
                "appointmentDate": "13-02-2023",
                "retirementDate": "15-04-2026",
                "birthInfo": { "date": "16-04-1961" },
                "imageUrl": "/judges/justice-bindal.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति अरविंद कुमार",
                "name": "Justice Aravind Kumar",
                "appointmentDate": "13-02-2023",
                "retirementDate": "13-07-2027",
                "birthInfo": { "date": "14-07-1962" },
                "imageUrl": "/judges/justice-kumar-a.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति प्रशांत कुमार मिश्रा",
                "name": "Justice Prashant Kumar Mishra",
                "appointmentDate": "19-05-2023",
                "retirementDate": "28-08-2029",
                "birthInfo": { "date": "29-08-1964" },
                "imageUrl": "/judges/justice-mishra.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति के.वी. विश्वनाथन",
                "name": "Justice K.V. Viswanathan",
                "appointmentDate": "19-05-2023",
                "retirementDate": "25-05-2031",
                "birthInfo": { "date": "26-05-1966" },
                "imageUrl": "/judges/justice-viswanathan.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति उज्ज्वल भुयान",
                "name": "Justice Ujjal Bhuyan",
                "appointmentDate": "14-07-2023",
                "retirementDate": "01-08-2029",
                "birthInfo": { "date": "02-08-1964" },
                "imageUrl": "/judges/justice-bhuyan.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति सरसा वेंकटनारायण भट्टी",
                "name": "Justice S.V. Bhatti",
                "appointmentDate": "14-07-2023",
                "retirementDate": "05-05-2027",
                "birthInfo": { "date": "06-05-1962" },
                "imageUrl": "/judges/justice-bhatti.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति सतीश चंद्र शर्मा",
                "name": "Justice Satish Chandra Sharma",
                "appointmentDate": "09-11-2023",
                "retirementDate": "29-11-2026",
                "birthInfo": { "date": "30-11-1961" },
                "imageUrl": "/judges/justice-sharma.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति ऑगस्टीन जॉर्ज मसीह",
                "name": "Justice Augustine George Masih",
                "appointmentDate": "09-11-2023",
                "retirementDate": "11-03-2028",
                "birthInfo": { "date": "12-03-1963" },
                "imageUrl": "/judges/justice-masih.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति संदीप मेहता",
                "name": "Justice Sandeep Mehta",
                "appointmentDate": "09-11-2023",
                "retirementDate": "10-01-2028",
                "birthInfo": { "date": "11-01-1963" },
                "imageUrl": "/judges/justice-mehta.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति प्रसन्न भालचंद्र वराले",
                "name": "Justice Prasanna Bhalchandra Varale",
                "appointmentDate": "25-01-2024",
                "retirementDate": "22-06-2027",
                "birthInfo": { "date": "23-06-1962" },
                "imageUrl": "/judges/justice-varale.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति एन कोटिस्वर सिंह",
                "name": "Justice N. Kotiswar Singh",
                "appointmentDate": "18-07-2024",
                "retirementDate": "29-02-2028",
                "birthInfo": { "date": "01-03-1963" },
                "imageUrl": "/judges/justice-singh.jpg"
              },
              {
                "nameHindi": "जस्टिस आर महादेवन",
                "name": "Justice R. Mahadevan",
                "appointmentDate": "18-07-2024",
                "retirementDate": "09-06-2028",
                "birthInfo": { "date": "10-06-1963" },
                "imageUrl": "/judges/justice-mahadevan.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति मनमोहन",
                "name": "Justice Manmohan",
                "appointmentDate": "05-12-2024",
                "retirementDate": "16-12-2027",
                "birthInfo": { "date": "17-12-1962" },
                "imageUrl": "/judges/justice-manmohan.jpg"
              },
              {
                "nameHindi": "न्यायमूर्ति के. विनोद चंद्रन",
                "name": "Justice K. Vinod Chandran",
                "appointmentDate": "16-01-2025",
                "retirementDate": "24-04-2028",
                "birthInfo": { "date": "25-04-1963", "place": "केरल" },
                "imageUrl": "/judges/justice-chandran.jpg"
              }
            ].map((judge, index) => (
              <JudgeCard 
                key={index}
                {...judge}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
