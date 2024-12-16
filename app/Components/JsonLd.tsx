import Script from 'next/script'

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Daniel Simms",
    "jobTitle": "Computer Science Student",
    "url": "https://danielsimms.dev",
    "sameAs": [
      "https://github.com/Danavarro63",
      "https://www.linkedin.com/in/daniel-simms-5956b9204/"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "University of Nottingham"
    },
    "knowsAbout": [
      "Full Stack Development",
      "Java",
      "C++",
      "Python",
      "React",
      "Web Development"
    ]
  }

  return (
    <Script id="json-ld" type="application/ld+json" strategy="worker">
      {JSON.stringify(structuredData)}
    </Script>
  )
} 