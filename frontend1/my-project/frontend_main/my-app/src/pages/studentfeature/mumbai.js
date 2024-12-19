import React, { useState } from "react";
import "./mum.css";

const Mumbai = () => {
  // Colleges Data
  const collegeData = [
    {
        rank: 1,
        name: "IIT Bombay - Indian Institute of Technology",
        location: "Mumbai, Maharashtra | AICTE, UGC Approved",
        course: ["B.Tech"],
        cutoff: "JEE-Advanced 2024 Cutoff : 68",
        fees: 230700,
        averagePackage: 2350000,
        highestPackage: 36700000,
        reviews: 4.4,
        ranking: "#118/1400 in India (QS2025)",
    },
    {
        rank: 2,
        name: "SP Jain Institute of Management and Research (SPJIMR)",
        location: "Mumbai, Maharashtra | AICTE, NBA, AACSB, AMBA Approved",
        course: ["PGDM-BM"],
        cutoff: "CAT 2024 Cutoff : 85",
        fees: 2250000,
        averagePackage: 3300000,
        highestPackage: 8100000,
        reviews: 4.2,
        ranking: "#16/50 in India (Financial Express 2019)",
    },
    {
        rank: 3,
        name: "JBIMS Mumbai",
        location: "Mumbai, Maharashtra | AICTE Approved",
        course: ["MHRD"],
        cutoff: "CAT 2024 Cutoff : 96",
        fees: 350000,
        averagePackage: 2802000,
        highestPackage: 3575000,
        reviews: 4.2,
        ranking: "#10/25 in India (Outlook2025)",
    },
    {
        rank: 4,
        name: "IIM Mumbai - Indian Institute of Management",
        location: "Mumbai, Maharashtra | AICTE Approved",
        course: ["MBA Sustainability Management"],
        cutoff: "CAT 2024 Cutoff : 95",
        fees: 2100000,
        averagePackage: null,
        highestPackage: 5400000,
        reviews: 4.3,
        ranking: "#101/200 in India (NIRF2022)",
    },
    {
        rank: 5,
        name: "Veermata Jijabai Technological Institute (VJTI)",
        location: "Mumbai, Maharashtra | AICTE, UGC Approved",
        course: ["B.Tech"],
        cutoff: null,
        fees: 85551,
        averagePackage: null,
        highestPackage: null,
        reviews: 4.0,
        ranking: "#151/312 in India (NIRF Innovation 2023)",
    },
    {
        rank: 6,
        name: "TISS Tata Institute of Social Sciences",
        location: "Mumbai, Maharashtra | UGC Approved",
        course: ["MA"],
        cutoff: null,
        fees: 388500,
        averagePackage: 2722000,
        highestPackage: 4900000,
        reviews: 4.0,
        ranking: "#98/200 in India (NIRF 2024)",
    },
    {
        rank: 7,
        name: "Shailesh J. Mehta School of Management, IIT Bombay (SJMSOM)",
        location: "Mumbai, Maharashtra | AICTE Approved",
        course: ["MBA Accounting"],
        cutoff: "CAT 2024 Cutoff : 90",
        fees: 717650,
        averagePackage: 2801000,
        highestPackage: 7200000,
        reviews: 4.4,
        ranking: "#10/50 in India (Financial Express 2019)",
    },
    {
        rank: 8,
        name: "Institute of Chemical Technology (ICT)",
        location: "Mumbai, Maharashtra | UGC, NBA, MHRD Approved",
        course: ["B.Tech"],
        cutoff: "JEE-Main 2023 Cutoff : 3733",
        fees: 89100,
        averagePackage: 600000,
        highestPackage: 900000,
        reviews: 4.3,
        ranking: "#801/1501 in India (THE2025)",
    },
    {
        rank: 9,
        name: "School of Business Management, NMIMS University (SBM NMIMS)",
        location: "Mumbai, Maharashtra | AACSB Approved",
        course: ["MBA/PGDM"],
        cutoff: null,
        fees: 103000,
        averagePackage: 1306000,
        highestPackage: 2097000,
        reviews: 4.1,
        ranking: "#7/110 in India (IIRF2024)",
    },
    {
        rank: 10,
        name: "Sardar Patel Institute of Technology (SPIT)",
        location: "Mumbai, Maharashtra | AICTE, NBA Approved",
        course: ["B.Tech"],
        cutoff: "JEE-Main 2023 Cutoff : 825",
        fees: 196000,
        averagePackage: 1514000,
        highestPackage: 6155000,
        reviews: 4.1,
        ranking: "#151/312 in India (NIRF Innovation 2023)",
    },

    {
      rank: 11,
      name: "HR College of Commerce and Economics",
      location: "Mumbai, Maharashtra | UGC Approved",
      course: ["B.Com", "BA Economics"],
      cutoff: "HSC Board : 88%",
      fees: 17000,
      averagePackage: 550000,
      highestPackage: 1000000,
      reviews: 4.1,
      ranking: "#12/200 in India (2023)",
    },
    {
      rank: 12,
      name: "Sophia College for Women",
      location: "Mumbai, Maharashtra | UGC Approved",
      course: ["B.Sc", "BA Psychology"],
      cutoff: "HSC Board : 85%",
      fees: 20000,
      averagePackage: 400000,
      highestPackage: 800000,
      reviews: 4.3,
      ranking: "#15/150 in India (2023)",
    },
    {
      rank: 13,
      name: "Rizvi College of Engineering",
      location: "Mumbai, Maharashtra | AICTE Approved",
      course: ["B.E. Civil", "B.E. Mechanical","B.Tech"],
      cutoff: "MHT-CET 2024 Cutoff : 70%",
      fees: 150000,
      averagePackage: 800000,
      highestPackage: 1600000,
      reviews: 3.8,
      ranking: "#78/300 in India (2024)",
    },
    {
      rank: 14,
      name: "VESIT - Vivekanand Education Society's Institute of Technology",
      location: "Mumbai, Maharashtra | AICTE Approved",
      course: ["B.Tech", "B.E. Electronics"],
      cutoff: "MHT-CET 2024 Cutoff : 78%",
      fees: 180000,
      averagePackage: 900000,
      highestPackage: 2000000,
      reviews: 3.9,
      ranking: "#72/300 in India (2024)",
    },
    {
      rank: 15,
      name: "KJ Somaiya College of Science and Commerce",
      location: "Mumbai, Maharashtra | UGC Approved",
      course: ["B.Sc IT", "B.Com"],
      cutoff: "HSC Board : 88%",
      fees: 27000,
      averagePackage: 350000,
      highestPackage: 750000,
      reviews: 4.2,
      ranking: "#9/200 in India (2025)",
    },
    {
        rank: 16,
        name: "NMIMS School of Law",
        location: "Mumbai, Maharashtra | Bar Council of India Approved",
        course: ["BA LLB", "BBA LLB"],
        cutoff: "CLAT 2024 Cutoff : 90%",
        fees: 230000,
        averagePackage: 1200000,
        highestPackage: 3000000,
        reviews: 4.0,
        ranking: "#60/250 in India (2025)",
      },
      {
        rank: 17,
        name: "National Institute of Industrial Engineering (NITIE)",
        location: "Mumbai, Maharashtra | AICTE Approved",
        course: ["PGDIM", "PGDISEM"],
        cutoff: "CAT 2024 Cutoff : 97%",
        fees: 690000,
        averagePackage: 2000000,
        highestPackage: 4400000,
        reviews: 4.6,
        ranking: "#5/50 in India (2025)",
      },
      {
        rank: 18,
        name: "Wilson College",
        location: "Mumbai, Maharashtra | UGC Approved",
        course: ["B.Sc IT", "BA Economics"],
        cutoff: "HSC Board : 82%",
        fees: 22000,
        averagePackage: 400000,
        highestPackage: 700000,
        reviews: 4.2,
        ranking: "#20/300 in India (2024)",
      },
      {
        rank: 19,
        name: "R.A. Podar College of Commerce and Economics",
        location: "Mumbai, Maharashtra | UGC Approved",
        course: ["B.Com", "BMS"],
        cutoff: "HSC Board : 90%",
        fees: 16000,
        averagePackage: 600000,
        highestPackage: 1100000,
        reviews: 4.4,
        ranking: "#7/150 in India (2023)",
      },
      {
        rank: 20,
        name: "Hindustan Institute of Technology and Science (HITS)",
        location: "Mumbai, Maharashtra | AICTE Approved",
        course: ["B.Tech", "B.Tech IT"],
        cutoff: "JEE Main 2024 Cutoff : 80%",
        fees: 160000,
        averagePackage: 700000,
        highestPackage: 1500000,
        reviews: 3.8,
        ranking: "#58/300 in India (2024)",
      },
      {
        rank: 21,
        name: "Rizvi College of Architecture",
        location: "Mumbai, Maharashtra | Council of Architecture Approved",
        course: ["B.Arch"],
        cutoff: "NATA 2024 Cutoff : 75%",
        fees: 190000,
        averagePackage: 850000,
        highestPackage: 2000000,
        reviews: 4.0,
        ranking: "#15/100 in India (2024)",
      },
      {
        rank: 22,
        name: "Institute of Chemical Technology (ICT Mumbai)",
        location: "Mumbai, Maharashtra | AICTE, UGC Approved",
        course: ["B.Tech Chemical Engineering", "B.Tech Food Engineering"],
        cutoff: "JEE Main 2024 Cutoff : 78%",
        fees: 85000,
        averagePackage: 1600000,
        highestPackage: 3200000,
        reviews: 4.6,
        ranking: "#3/50 in India (2025)",
      },
      {
        rank: 23,
        name: "Thakur College of Engineering and Technology",
        location: "Mumbai, Maharashtra | AICTE Approved",
        course: ["B.Tech", "B.Tech Electronics"],
        cutoff: "MHT-CET 2024 Cutoff : 76%",
        fees: 185000,
        averagePackage: 1000000,
        highestPackage: 2500000,
        reviews: 4.1,
        ranking: "#22/300 in India (2025)",
      },
      {
        rank: 24,
        name: "Bhavan's College",
        location: "Mumbai, Maharashtra | UGC Approved",
        course: ["B.Com", "B.Sc"],
        cutoff: "HSC Board : 80%",
        fees: 15000,
        averagePackage: 400000,
        highestPackage: 900000,
        reviews: 4.0,
        ranking: "#35/200 in India (2024)",
      },
      {
        rank: 25,
        name: "DY Patil University School of Management",
        location: "Navi Mumbai, Maharashtra | AICTE Approved",
        course: ["MBA Finance", "MBA Marketing"],
        cutoff: "CAT 2024 Cutoff : 80%",
        fees: 1100000,
        averagePackage: 900000,
        highestPackage: 2000000,
        reviews: 4.2,
        ranking: "#18/100 in India (2025)",
      },
      {
        rank: 26,
        name: "Amity University, Mumbai",
        location: "Mumbai, Maharashtra | UGC Approved",
        course: ["BBA", "MBA" , "B.Tech CS"],
        cutoff: "Amity Test : 75%",
        fees: 200000,
        averagePackage: 800000,
        highestPackage: 1800000,
        reviews: 3.9,
        ranking: "#44/200 in India (2024)",
      },
      {
        rank: 27,
        name: "Tolani Maritime Institute",
        location: "Mumbai, Maharashtra | DGS Approved",
        course: ["B.Sc Nautical Science", "B.Tech Marine Engineering"],
        cutoff: "IMU CET 2024 Cutoff : 70%",
        fees: 600000,
        averagePackage: 1200000,
        highestPackage: 2200000,
        reviews: 4.0,
        ranking: "#19/150 in India (2024)",
      },
      {
        rank: 28,
        name: "Lala Lajpatrai Institute of Management (LLIM)",
        location: "Mumbai, Maharashtra | AICTE Approved",
        course: ["PGDM", "MBA"],
        cutoff: "CAT 2024 Cutoff : 72%",
        fees: 1100000,
        averagePackage: 950000,
        highestPackage: 2000000,
        reviews: 4.0,
        ranking: "#29/150 in India (2024)",
      },
      {
        rank: 29,
        name: "S.K. Somaiya College of Arts, Science and Commerce",
        location: "Mumbai, Maharashtra | UGC Approved",
        course: ["B.Com", "BBA"],
        cutoff: "HSC Board : 85%",
        fees: 20000,
        averagePackage: 500000,
        highestPackage: 1100000,
        reviews: 4.3,
        ranking: "#10/150 in India (2025)",
      },
      {
        rank: 30,
        name: "Fr. Conceicao Rodrigues College of Engineering",
        location: "Mumbai, Maharashtra | AICTE Approved",
        course: ["B.Tech", "B.Tech Mechanical"],
        cutoff: "MHT-CET 2024 Cutoff : 78%",
        fees: 170000,
        averagePackage: 900000,
        highestPackage: 1900000,
        reviews: 4.1,
        ranking: "#24/300 in India (2024)",
      },
  ];
  
  // States for Filtering and Sorting
  const [colleges, setColleges] = useState(collegeData);
  const [selectedCourse, setSelectedCourse] = useState("");

  // Extract unique courses for the dropdown
  const allCourses = [...new Set(collegeData.flatMap((college) => college.course))];

  // Handle Course Filtering
  const handleCourseFilter = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);

    if (course === "") {
      setColleges(collegeData);
    } else {
      const filtered = collegeData.filter((college) =>
        college.course.includes(course)
      );
      setColleges(filtered);
    }
  };

  // Sorting Logic
  const handleSort = (criteria) => {
    const sortedColleges = [...colleges];
    switch (criteria) {
      case "feesHighest":
        sortedColleges.sort((a, b) => b.fees - a.fees);
        break;
      case "feesLowest":
        sortedColleges.sort((a, b) => a.fees - b.fees);
        break;
      case "rating":
        sortedColleges.sort((a, b) => b.reviews - a.reviews);
        break;
      case "popularity":
        sortedColleges.sort((a, b) => a.rank - b.rank);
        break;
      default:
        break;
    }
    setColleges(sortedColleges);
  };

  return (
    <div className="mumbai">
      {/* Header Section */}
      <div className="mumbai__header">
        <div className="mumbai__filters">
          <button className="filter__button">Maharashtra</button>
          <button className="filter__button">Mumbai</button>
          <button
            className="clear__button"
            onClick={() => {
              setColleges(collegeData);
              setSelectedCourse("");
            }}
          >
            Clear All
          </button>
        </div>
        <div className="mumbai__sort">
          <label>Filter by Course:</label>
          <select onChange={handleCourseFilter} value={selectedCourse}>
            <option value="">All Courses</option>
            {allCourses.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
          <label>Sort By:</label>
          <button onClick={() => handleSort("popularity")}>Popularity</button>
          <button onClick={() => handleSort("rating")}>Rating</button>
          <button onClick={() => handleSort("feesHighest")}>Highest Fees</button>
          <button onClick={() => handleSort("feesLowest")}>Lowest Fees</button>
        </div>
      </div>

      {/* Table Section */}
      <table className="mumbai__table">
  <thead>
    <tr>
      <th>CD Rank</th>
      <th>Colleges</th>
      <th>Courses Provided</th>
      <th>Course Fees</th>
      <th>Placement</th>
      <th>Reviews</th>
      <th>Ranking</th>
    </tr>
  </thead>
  <tbody>
    {colleges.map((college, index) => (
      <tr key={index}>
        <td className="rank__cell">#{college.rank}</td>
        <td className="college__details">
          <h3>{college.name}</h3>
          <p>{college.location}</p>
          <a href="#" className="apply__link">
            Apply Now
          </a>{" "}
          |{" "}
          <a href="#" className="brochure__link">
            Download Brochure
          </a>
        </td>
        <td className="courses__cell"  >
          {college.course.map((c, idx) => (
            <p key={idx}>{c}</p>
          ))}
        </td>
        <td className="fees__cell">₹ {college.fees ? college.fees.toLocaleString() : "N/A"}</td>
        <td className="placement__cell">
          <p>₹ {college.averagePackage ? college.averagePackage.toLocaleString() : "N/A"} Avg Package</p>
          <p>₹ {college.highestPackage ? college.highestPackage.toLocaleString() : "N/A"} Highest</p>
        </td>
        <td className="reviews__cell">
          {college.reviews ? college.reviews.toFixed(1) : "N/A"}
        </td>
        <td className="ranking__cell">{college.ranking}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default Mumbai;

