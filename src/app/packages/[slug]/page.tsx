"use client";

import { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Users, Car, Building, CheckCircle2, XCircle, ChevronDown, MessageCircle, Phone, ArrowLeft, Utensils } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "../packages-updates.css";

const packagesData = {
  'char-dham-yatra': {
    slug: 'char-dham-yatra',
    title: 'Char Dham Premium Yatra',
    image: '/chardham.png',
    duration: '12 Days / 11 Nights',
    price: 'Starting From ₹89,999',
    overview: 'Experience one of the most sacred pilgrimage journeys in Hinduism — the Char Dham Yatra. Visit the four holy shrines of Yamunotri, Gangotri, Kedarnath, and Badrinath nestled in the majestic Himalayas. Our carefully planned tour ensures maximum comfort for senior citizens and families.',
    places: ['Haridwar', 'Barkot', 'Yamunotri', 'Uttarkashi', 'Gangotri', 'Guptkashi', 'Kedarnath', 'Badrinath', 'Joshimath', 'Rishikesh'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Haridwar', description: 'Arrive in Haridwar. Check-in to hotel. Evening visit to Har Ki Pauri for Ganga Aarti. Overnight stay in Haridwar.' },
      { day: 'Day 2', title: 'Haridwar to Barkot', description: 'Drive to Barkot (210 km, ~7 hrs). Scenic drive through Mussoorie and Kempty Falls. Overnight in Barkot.' },
      { day: 'Day 3', title: 'Barkot – Yamunotri – Barkot', description: 'Drive to Janki Chatti. Trek/pony ride to Yamunotri Temple (6 km). Visit the temple and hot springs. Return to Barkot.' },
      { day: 'Day 4', title: 'Barkot to Uttarkashi', description: 'Drive to Uttarkashi (100 km, ~4 hrs). Visit Vishwanath Temple. Rest and overnight stay.' },
      { day: 'Day 5', title: 'Uttarkashi – Gangotri – Uttarkashi', description: 'Drive to Gangotri (100 km). Visit Gangotri Temple on the banks of Bhagirathi. Return to Uttarkashi.' },
      { day: 'Day 6', title: 'Uttarkashi to Guptkashi', description: 'Drive to Guptkashi (220 km, ~8 hrs). Visit Ardh Narishwar Temple. Overnight in Guptkashi.' },
      { day: 'Day 7', title: 'Guptkashi to Kedarnath', description: 'Drive to Sonprayag. Trek/pony/helicopter to Kedarnath Temple (16 km trek). Darshan at the temple. Overnight near Kedarnath.' },
      { day: 'Day 8', title: 'Kedarnath to Guptkashi', description: 'Morning darshan. Trek back to Sonprayag. Drive to Guptkashi. Rest and overnight stay.' },
      { day: 'Day 9', title: 'Guptkashi to Badrinath', description: 'Drive to Badrinath (200 km, ~7 hrs). Evening darshan at Badrinath Temple. Visit Tapt Kund hot springs.' },
      { day: 'Day 10', title: 'Badrinath to Joshimath', description: 'Morning darshan. Visit Mana Village (last Indian village). Drive to Joshimath. Overnight stay.' },
      { day: 'Day 11', title: 'Joshimath to Rishikesh', description: 'Drive to Rishikesh (250 km, ~8 hrs). Visit Lakshman Jhula and Ram Jhula. Evening Ganga Aarti at Triveni Ghat.' },
      { day: 'Day 12', title: 'Departure', description: 'Check-out and departure from Haridwar/Rishikesh. Tour ends with blessed memories.' },
    ],
    includes: ['Accommodation (11 nights)', 'AC vehicle for all transfers', 'Breakfast and dinner daily', 'Experienced driver', 'Temple visit coordination', 'Sightseeing as per itinerary', 'All parking and toll charges', 'First aid kit in vehicle'],
    excludes: ['Flight/train tickets', 'Lunch and snacks', 'Personal expenses', 'Tips and gratuities', 'Travel insurance', 'Pony/palki/helicopter charges', 'Entry fees at monuments', 'Anything not mentioned in includes'],
    vehicle: 'AC Tempo Traveller / SUV',
    vehicleDesc: 'Well-maintained air-conditioned vehicle with experienced driver who knows all mountain routes. Spacious seating with ample legroom for comfortable travel.',
    hotel: '3-Star Comfort Hotels',
    hotelDesc: 'Clean, comfortable 3-star hotels and quality guesthouses at each stop. Hot water, clean linens, and hygienic food arrangements.',
    meals: 'Vegetarian breakfast and dinner included daily. Pure vegetarian food prepared hygienically. Special dietary requirements can be accommodated with advance notice.',
    seniorNotes: ['Comfortable travel pace with no rushed schedules', 'Flexible breaks during long drives', 'Easy and accessible hotel arrangements', 'Family-friendly planning with care for elderly travelers'],
  },
  'kashi-ayodhya-prayagraj': {
    slug: 'kashi-ayodhya-prayagraj',
    title: 'Kashi • Ayodhya • Prayagraj Spiritual Tour',
    image: '/kashi.png',
    duration: '8 Days / 7 Nights',
    price: 'Starting From ₹79,999',
    overview: 'Explore the spiritual heart of India. This tour takes you through the most sacred cities in Uttar Pradesh. Witness the divine Ganga Aarti in Varanasi, seek blessings at the Ram Janmabhoomi in Ayodhya, and take a holy dip at the Triveni Sangam in Prayagraj.',
    places: ['Varanasi (Kashi)', 'Ayodhya', 'Prayagraj', 'Sarnath'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Varanasi', description: 'Arrive in Varanasi. Transfer to hotel. Evening witness the spectacular Ganga Aarti at Dashashwamedh Ghat.' },
      { day: 'Day 2', title: 'Varanasi Sightseeing', description: 'Early morning boat ride on the Ganges. Visit Kashi Vishwanath Temple, Annapurna Temple, and Sankat Mochan Hanuman Temple.' },
      { day: 'Day 3', title: 'Varanasi - Sarnath - Prayagraj', description: 'Visit Sarnath (where Buddha gave his first sermon). Drive to Prayagraj. Check-in to hotel.' },
      { day: 'Day 4', title: 'Prayagraj Sightseeing', description: 'Visit Triveni Sangam for a holy dip. Visit Anand Bhavan and Hanuman Temple. Drive to Ayodhya.' },
      { day: 'Day 5', title: 'Ayodhya Darshan', description: 'Full day in Ayodhya. Visit Shri Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan, and Saryu River Ghats.' },
      { day: 'Day 6', title: 'Ayodhya to Lucknow/Varanasi', description: 'Morning at leisure. Drive back to Varanasi or Lucknow for departure.' },
      { day: 'Day 7', title: 'Departure', description: 'Transfer to airport/railway station for onward journey.' },
    ],
    includes: ['Premium accommodation', 'AC vehicle for transfers', 'Breakfast and dinner', 'Boat ride in Varanasi', 'Temple coordination', 'Toll and parking'],
    excludes: ['Flight tickets', 'Lunch', 'Personal expenses', 'Special darshan tickets', 'Tips'],
    vehicle: 'AC Sedan / Tempo Traveller',
    vehicleDesc: 'Comfortable air-conditioned vehicles suited for city driving and highway travel.',
    hotel: '3-Star / Heritage Hotels',
    hotelDesc: 'Comfortable stays close to the ghats or city centers for easy accessibility.',
    meals: 'Vegetarian breakfast and dinner included.',
    seniorNotes: ['Assistance arranged for ghat visits', 'Wheelchair accessibility verified at hotels', 'Comfortable AC transport', 'Unhurried temple visits'],
  },
  'jyotirlinga-circuit': {
    slug: 'jyotirlinga-circuit',
    title: 'Jyotirlinga Spiritual Circuit',
    image: '/jyotirlinga.png',
    duration: '14 Days / 13 Nights',
    price: 'Starting From ₹94,999',
    overview: 'A profound spiritual journey to seek the blessings of Lord Shiva across India\'s most powerful Jyotirlingas. This comprehensive tour is meticulously planned to provide a comfortable and enriching pilgrimage experience.',
    places: ['Somnath', 'Nageshwar', 'Trimbakeshwar', 'Bhimashankar', 'Omkareshwar', 'Mahakaleshwar'],
    itinerary: [
      { day: 'Day 1-2', title: 'Gujarat Sector', description: 'Visit Somnath and Nageshwar Jyotirlingas along with Dwarkadhish Temple.' },
      { day: 'Day 3-6', title: 'Maharashtra Sector', description: 'Visit Trimbakeshwar, Bhimashankar, and Grishneshwar Jyotirlingas.' },
      { day: 'Day 7-10', title: 'Madhya Pradesh Sector', description: 'Visit Omkareshwar and Mahakaleshwar (Ujjain) Jyotirlingas.' },
      { day: 'Day 11-14', title: 'Completion & Departure', description: 'Final darshans and departure arrangements.' },
    ],
    includes: ['Accommodation', 'Inter-state AC transport', 'Breakfast & Dinner', 'Temple guidance'],
    excludes: ['Flight/Train fare', 'VIP Darshan passes', 'Personal expenses'],
    vehicle: 'AC Tempo Traveller',
    vehicleDesc: 'Spacious AC Tempo Traveller ideal for long interstate journeys with push-back seats.',
    hotel: '3-Star Comfort Hotels',
    hotelDesc: 'Quality accommodations ensuring a good night\'s rest after long travel days.',
    meals: 'Pure vegetarian meals (Breakfast & Dinner).',
    seniorNotes: ['Paced itinerary to avoid travel fatigue', 'Ground floor rooms requested where possible', 'Comfortable transport with ample legroom'],
  },
  'nepal-spiritual-journey': {
    slug: 'nepal-spiritual-journey',
    title: 'Nepal Spiritual Journey',
    image: '/nepal.png',
    duration: '10 Days / 9 Nights',
    price: 'Starting From ₹1,09,999',
    overview: 'Embark on a sacred journey to the Himalayas. Visit the revered Pashupatinath Temple in Kathmandu, the sacred Muktinath temple, and the birthplace of Lord Buddha in Lumbini.',
    places: ['Kathmandu', 'Pashupatinath', 'Muktinath', 'Lumbini', 'Manakamana', 'Pokhara'],
    itinerary: [
      { day: 'Day 1-3', title: 'Kathmandu Valley', description: 'Arrival, visit Pashupatinath, Boudhanath, and Swayambhunath.' },
      { day: 'Day 4-6', title: 'Pokhara & Muktinath', description: 'Drive to Pokhara. Fly/Drive to Jomsom and visit Muktinath Temple.' },
      { day: 'Day 7-8', title: 'Lumbini', description: 'Drive to Lumbini. Visit the sacred garden and Maya Devi Temple.' },
      { day: 'Day 9-10', title: 'Return', description: 'Drive back to Kathmandu. Visit Manakamana temple en route. Departure.' },
    ],
    includes: ['Hotel stays', 'Local AC transport', 'Muktinath flight/jeep', 'Breakfast & Dinner', 'Temple guides'],
    excludes: ['International flights', 'Visa fees (if applicable)', 'Monument entry fees'],
    vehicle: 'AC Vehicle (Local)',
    vehicleDesc: 'Comfortable SUVs or Minivans suited for Nepal\'s terrain.',
    hotel: '3-Star / 4-Star Hotels',
    hotelDesc: 'Premium comfortable stays in all cities.',
    meals: 'Vegetarian breakfast and dinner.',
    seniorNotes: ['Careful altitude acclimatization', 'Comfortable flights for Muktinath sector', 'Assistance provided at temples'],
  },
  'kedarnath-badrinath': {
    slug: 'kedarnath-badrinath',
    title: 'Kedarnath & Badrinath Premium Tour',
    image: '/kedarnath.png',
    duration: '9 Days / 8 Nights',
    price: 'Starting From ₹84,999',
    overview: 'A focused spiritual journey to the two most prominent shrines of the Char Dham yatra. Experience the divine aura of Lord Shiva at Kedarnath and Lord Vishnu at Badrinath with our premium support.',
    places: ['Haridwar', 'Guptkashi', 'Kedarnath', 'Badrinath', 'Joshimath'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Haridwar', description: 'Arrival and evening Ganga Aarti.' },
      { day: 'Day 2', title: 'Haridwar to Guptkashi', description: 'Scenic drive to Guptkashi.' },
      { day: 'Day 3', title: 'Guptkashi to Kedarnath', description: 'Trek or Helicopter to Kedarnath. Darshan and overnight stay.' },
      { day: 'Day 4', title: 'Kedarnath to Guptkashi', description: 'Morning darshan and return to Guptkashi.' },
      { day: 'Day 5', title: 'Guptkashi to Badrinath', description: 'Drive to Badrinath. Evening darshan.' },
      { day: 'Day 6', title: 'Badrinath Darshan', description: 'Morning darshan, visit Mana village. Drive to Joshimath.' },
      { day: 'Day 7', title: 'Joshimath to Rishikesh', description: 'Drive to Rishikesh. Evening Aarti.' },
      { day: 'Day 8', title: 'Departure', description: 'Tour concludes in Haridwar/Dehradun.' },
    ],
    includes: ['Accommodation', 'AC transport', 'Breakfast & Dinner', 'Helicopter booking assistance'],
    excludes: ['Helicopter tickets (extra cost)', 'Pony/Palki charges', 'Flights/Trains'],
    vehicle: 'AC SUV / Tempo Traveller',
    vehicleDesc: 'Hill-condition verified AC vehicles with expert drivers.',
    hotel: '3-Star Hotels & Guesthouses',
    hotelDesc: 'Best available comfortable stays in the remote Himalayan regions.',
    meals: 'Hygienic vegetarian meals.',
    seniorNotes: ['Helicopter booking assistance strongly recommended and prioritized for seniors', 'Medical check-up guidance provided', 'Comfortable stays arranged'],
  },
  'south-india-temple-circuit': {
    slug: 'south-india-temple-circuit',
    title: 'South India Temple Luxury Circuit',
    image: '/hero-bg.png',
    duration: '10 Days / 9 Nights',
    price: 'Starting From ₹74,999',
    overview: 'Immerse yourself in the magnificent architecture and deep spirituality of South Indian temples. From the hills of Tirumala to the shores of Rameshwaram, this tour offers a luxurious and peaceful pilgrimage.',
    places: ['Tirupati', 'Kanchipuram', 'Mahabalipuram', 'Pondicherry', 'Tanjore', 'Trichy (Srirangam)', 'Madurai', 'Rameshwaram'],
    itinerary: [
      { day: 'Day 1-2', title: 'Tirupati & Kanchipuram', description: 'Arrival in Chennai/Tirupati. Balaji Darshan. Drive to Kanchipuram for Kamakshi Amman temple.' },
      { day: 'Day 3-4', title: 'Mahabalipuram & Pondicherry', description: 'Coastal temples and Aurobindo Ashram.' },
      { day: 'Day 5-6', title: 'Tanjore & Trichy', description: 'Brihadeeswara Temple and Srirangam Ranganathaswamy Temple.' },
      { day: 'Day 7-8', title: 'Madurai & Rameshwaram', description: 'Meenakshi Amman Temple and drive to Rameshwaram.' },
      { day: 'Day 9-10', title: 'Rameshwaram Darshan & Departure', description: 'Ramanathaswamy Temple darshan, Dhanushkodi. Departure from Madurai.' },
    ],
    includes: ['Premium Accommodation', 'AC Sedan/Innova', 'Breakfast & Dinner', 'Temple guides in major cities'],
    excludes: ['Special Darshan Tickets', 'Flights/Trains', 'Personal expenses'],
    vehicle: 'AC Sedan / Innova',
    vehicleDesc: 'Luxurious and spacious AC vehicles for comfortable highway travel in South India.',
    hotel: '3-Star Comfort / 4-Star Hotels',
    hotelDesc: 'Premium air-conditioned hotels ensuring maximum comfort in the tropical climate.',
    meals: 'Authentic South Indian vegetarian breakfast and diverse dinner options.',
    seniorNotes: ['Easy access to temples', 'Comfortable AC transport', 'Assistance with special darshan queues where available'],
  }
};


export default function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [openDay, setOpenDay] = useState<number | null>(0);
  const resolvedParams = use(params);
  const pkg = (packagesData as any)[resolvedParams.slug];

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  if (!pkg) {
    return (
      <>
        <Header />
        <div style={{ padding: "8rem 2rem", textAlign: "center", minHeight: "60vh" }}>
          <h2>Package Not Found</h2>
          <p style={{ marginBottom: "2rem" }}>The spiritual package you are looking for does not exist.</p>
          <Link href="/packages" className="btn-primary">
            View All Packages
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const encodedMessage = encodeURIComponent(`Hi, I am interested in the ${pkg.title} package.`);
  const whatsappLink = `https://wa.me/918660878131?text=${encodedMessage}`;

  return (
    <>
      <Header />
      
      {/* 1. Hero Banner */}
      <div className="pkg-detail-hero" style={{ backgroundImage: `url(${pkg.image})` }}>
        <div className="pkg-detail-hero-overlay" />
        <div className="pkg-detail-hero-content">
          <Link href="/packages" className="back-link">
            <ArrowLeft size={16} /> Back to Packages
          </Link>
          <h1 className="pkg-detail-title">{pkg.title}</h1>
          <div className="pkg-detail-meta">
            <span><Clock size={16} /> {pkg.duration}</span>
            <span className="pkg-detail-price">{pkg.price}</span>
          </div>
        </div>
      </div>

      {/* 2. Quick Info Bar */}
      <div className="quick-info-bar">
        <div className="quick-info-container">
          <div className="quick-info-item">
            <Car size={20} color="var(--saffron)" />
            <div>
              <strong>Transport</strong>
              <span>{pkg.vehicle.split('/')[0]}</span>
            </div>
          </div>
          <div className="quick-info-item">
            <Building size={20} color="var(--saffron)" />
            <div>
              <strong>Accommodation</strong>
              <span>{pkg.hotel.split(' ')[0]} Star</span>
            </div>
          </div>
          <div className="quick-info-item">
            <Utensils size={20} color="var(--saffron)" />
            <div>
              <strong>Meals</strong>
              <span>Breakfast & Dinner</span>
            </div>
          </div>
          <div className="quick-info-item">
            <Users size={20} color="var(--saffron)" />
            <div>
              <strong>Group</strong>
              <span>Family/Group</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pkg-detail-container">
        <div className="pkg-detail-main">
          
          {/* 3. Package Overview */}
          <section className="detail-section">
            <h2>Overview</h2>
            <p className="overview-text">{pkg.overview}</p>
          </section>

          {/* 4. Places Covered */}
          <section className="detail-section">
            <h2>Places Covered</h2>
            <div className="places-tags-container">
              {pkg.places.map((place: string, idx: number) => (
                <span key={idx} className="place-detail-tag">
                  <MapPin size={14} /> {place}
                </span>
              ))}
            </div>
          </section>

          {/* 5. Day-wise Itinerary */}
          <section className="detail-section">
            <h2>Day-wise Itinerary</h2>
            <div className="itinerary-accordion">
              {pkg.itinerary.map((day: any, idx: number) => (
                <div key={idx} className={`itinerary-item ${openDay === idx ? 'active' : ''}`}>
                  <button 
                    className="itinerary-header"
                    onClick={() => setOpenDay(openDay === idx ? null : idx)}
                  >
                    <div className="itinerary-header-left">
                      <span className="day-badge">{day.day}</span>
                      <span className="day-title">{day.title}</span>
                    </div>
                    <ChevronDown size={20} className="chevron" />
                  </button>
                  <div className="itinerary-body">
                    <p>{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6 & 7. Includes & Excludes */}
          <section className="detail-section">
            <div className="inc-exc-grid">
              <div className="includes-box">
                <h3>Package Includes</h3>
                <ul>
                  {pkg.includes.map((inc: string, idx: number) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="text-green" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="excludes-box">
                <h3>Package Excludes</h3>
                <ul>
                  {pkg.excludes.map((exc: string, idx: number) => (
                    <li key={idx}>
                      <XCircle size={18} className="text-red" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 8, 9, 10. Vehicle, Hotel, Meals */}
          <section className="detail-section">
            <h2>Travel Comfort Details</h2>
            <div className="comfort-list-container">
              <div className="comfort-list-card">
                <div className="comfort-list-icon">
                  <Car size={32} className="text-saffron" />
                </div>
                <div className="comfort-list-content">
                  <h4>Vehicle</h4>
                  <p><strong>{pkg.vehicle}</strong></p>
                  <p className="text-sm">{pkg.vehicleDesc}</p>
                </div>
              </div>
              <div className="comfort-list-card">
                <div className="comfort-list-icon">
                  <Building size={32} className="text-saffron" />
                </div>
                <div className="comfort-list-content">
                  <h4>Accommodation</h4>
                  <p><strong>{pkg.hotel}</strong></p>
                  <p className="text-sm">{pkg.hotelDesc}</p>
                </div>
              </div>
              <div className="comfort-list-card">
                <div className="comfort-list-icon">
                  <Utensils size={32} className="text-saffron" />
                </div>
                <div className="comfort-list-content">
                  <h4>Meals</h4>
                  <p><strong>Vegetarian Meals</strong></p>
                  <p className="text-sm">{pkg.meals}</p>
                </div>
              </div>
            </div>
          </section>

          {/* 11. Senior Citizen Notes */}
          <section className="detail-section">
            <div className="senior-notes-banner">
              <div className="senior-notes-header">
                <Users size={32} color="#047857" />
                <h3>Senior Citizen Friendly Features</h3>
              </div>
              <div className="senior-notes-grid">
                {pkg.seniorNotes.map((note: string, idx: number) => (
                  <div key={idx} className="senior-note-item">
                    <CheckCircle2 size={24} color="#059669" />
                    <span>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

        {/* 12. Sticky Sidebar CTA */}
        <div className="pkg-detail-sidebar">
          <div className="sticky-cta-card">
            <h3>Book This Package</h3>
            <p className="price">{pkg.price}</p>
            <p className="meta-text">Fully customizable for families and groups.</p>
            
            <div className="cta-actions">
              <a href={whatsappLink} className="btn-whatsapp-solid" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                WhatsApp Inquiry
              </a>
              <a href="tel:+918660878131" className="btn-call-solid">
                <Phone size={18} />
                Call +91 86608 78131
              </a>
            </div>

            <div className="trust-badges">
              <span><CheckCircle2 size={14} /> Trusted Service</span>
              <span><CheckCircle2 size={14} /> Safe Travel</span>
              <span><CheckCircle2 size={14} /> 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
