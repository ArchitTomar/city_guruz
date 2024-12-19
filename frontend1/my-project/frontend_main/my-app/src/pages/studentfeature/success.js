import React, { useState } from 'react';
import './success.css'; // Import the CSS file

// Success story data
const successStories = [
  {
    title: 'The Journey of Elon Musk',
    image: 'https://www.investopedia.com/thmb/sFi7zDFVLekmI6JiMcrLsNOyKAU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-elon-musk-became-elon-musk_final-43ef802cd2414d14a8bf3967f319ce18.png', // Replace with a real image URL
    description: 'Elon Musk’s journey from being a tech entrepreneur to founding SpaceX and Tesla.',
    fullDescription: `
      Elon Musk’s life is a testament to hard work, resilience, and an unshakable vision for the future. 
      Born in Pretoria, South Africa, Musk showed an early interest in technology and entrepreneurship. 
      At the age of 12, he created and sold his first software, a video game called Blastar. His determination to innovate 
      and solve complex problems became evident early on.

      After moving to the United States, Musk attended the University of Pennsylvania, where he earned degrees 
      in physics and economics. His academic background laid the foundation for his ventures into diverse industries. 
      Musk co-founded Zip2, a company that provided business directories and maps for newspapers, which he sold for nearly $300 million.

      However, it was his vision for a better world that set him apart. Musk founded X.com, which later became PayPal, 
      revolutionizing online payments. After selling PayPal to eBay, Musk invested his wealth into audacious projects: 
      SpaceX, Tesla, and SolarCity. SpaceX has redefined space exploration with reusable rockets, Tesla has transformed 
      the automotive industry with electric vehicles, and SolarCity promotes renewable energy solutions.

      Musk's story is not without challenges. SpaceX faced several failures before its first successful rocket launch. 
      Tesla struggled with production delays and financial losses, but Musk’s relentless optimism and leadership kept the 
      companies afloat. Today, he is also working on Neuralink, which aims to connect the human brain with AI, and The Boring Company, 
      focused on building underground transportation systems. Elon Musk’s story inspires us to dream big, embrace failure, and persevere through adversity.
    `,
    additionalInfo: 'You can watch his interviews and speeches online for more details.',
  },
  {
    title: "Oprah Winfrey's Rise to Success",
    image: 'https://www.investopedia.com/thmb/dD1yXg4oSHy39YQzoFqaWOmDT8U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ADD-how-did-oprah-winfrey-get-rich-updated-093ec4cb90ac4d6faf7d7cfbc66e87ca.png', // Replace with a real image URL
    description: 'Oprah Winfrey went from a difficult childhood to becoming a media mogul.',
    fullDescription: `
      Oprah Winfrey’s life is a powerful story of overcoming adversity to achieve greatness. 
      Born into poverty in rural Mississippi, Oprah faced numerous challenges in her early life, 
      including a troubled family environment and societal discrimination. Despite these hardships, 
      she demonstrated exceptional intelligence and a flair for public speaking, which earned her a 
      scholarship to Tennessee State University.

      Oprah’s career began in local radio and television, where she quickly gained recognition for her 
      engaging personality. Her big break came when she began hosting The Oprah Winfrey Show. What started 
      as a small talk show soon became the highest-rated program of its kind in the United States. Oprah's 
      empathetic approach and ability to connect with audiences made her a beloved figure.

      Beyond television, Oprah expanded her influence into publishing, philanthropy, and acting. She launched 
      O, The Oprah Magazine, starred in critically acclaimed films like The Color Purple, and founded the Oprah 
      Winfrey Network (OWN). Her charitable efforts include the creation of the Oprah Winfrey Leadership Academy 
      for Girls in South Africa, which provides education to underprivileged children.

      Oprah’s journey is a reminder that resilience, hard work, and a commitment to helping others can transform 
      even the most challenging circumstances. Her story encourages us to pursue our passions and use our success 
      to make a positive impact on the world.
    `,
    additionalInfo: 'Her book "What I Know for Sure" is a great resource for those seeking inspiration.',
  },
  {
    title: "J.K. Rowling's Persistence",
    image: 'https://media.licdn.com/dms/image/D5612AQFFrAiIA-aYUA/article-cover_image-shrink_720_1280/0/1712845880955?e=2147483647&v=beta&t=VolDB3wdz9YmPTmuxfGKyaYlV0701yKBRORCfFIzC5w', // Replace with a real image URL
    description: 'The story of J.K. Rowling, who persisted through rejections to create the Harry Potter series.',
    fullDescription: `
      J.K. Rowling’s path to success is one of perseverance, creativity, and unwavering belief in her vision. 
      Born in Yate, England, Rowling always had a passion for storytelling. However, her early adult life was marked by struggles. 
      As a single mother living on welfare, Rowling faced financial hardships while working on her first novel.

      Her dream of becoming an author seemed out of reach when her manuscript for Harry Potter and the Philosopher’s Stone 
      was rejected by 12 publishers. But Rowling refused to give up. Her persistence paid off when Bloomsbury Publishing finally 
      agreed to publish the book, albeit with modest expectations.

      To everyone’s surprise, Harry Potter became a global phenomenon. The series captivated readers of all ages with its 
      imaginative world, compelling characters, and timeless themes of friendship, bravery, and love. The books have sold over 
      500 million copies and have been adapted into a blockbuster film franchise.

      Rowling’s success didn’t stop there. She continued to expand the wizarding world with spin-off books, films, and the 
      acclaimed play Harry Potter and the Cursed Child. Despite facing criticism and controversies, Rowling’s story is a powerful 
      testament to the importance of perseverance and staying true to one’s vision.
    `,
    additionalInfo: 'You can watch her TED talk on the power of failure for more motivation.',
  },
  {
    title: "Steve Jobs' Innovation",
    image: 'https://www.investopedia.com/thmb/SOrSZjDw7SXxt4ojtfF0soN-TY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steve-jobs-apple-story_final-14a355d35609422798041dcfb2cb61f6.png', // Replace with a real image URL
    description: 'Steve Jobs’ ability to create world-changing technology with Apple.',
    fullDescription: `
      Steve Jobs’ story is one of brilliance, creativity, and an unrelenting drive for perfection. 
      Co-founding Apple in 1976, Jobs introduced the world to the Apple I computer. Despite setbacks, including 
      being ousted from his own company in the 1980s, Jobs never gave up. During his hiatus from Apple, 
      he founded NeXT and acquired Pixar, which became a leader in animated films.

      Returning to Apple in 1997, Jobs revolutionized the tech world. Products like the iMac, iPod, iPhone, and iPad 
      reshaped how people interact with technology. Jobs’ dedication to aesthetics and user experience made Apple a 
      global leader in innovation. His legacy is a testament to the power of vision and determination.
    `,
    additionalInfo: 'His biography, "Steve Jobs" by Walter Isaacson, is a great resource for understanding his life.',
  },
];

function Suc() {
  const [selectedStory, setSelectedStory] = useState(null);

  const handleCardClick = (story) => {
    setSelectedStory(story);
  };

  const handleCloseModal = () => {
    setSelectedStory(null);
  };

  return (
    <div className="success-app-container">
      <header className="success-header">
        <h1>Student Success Stories</h1>
        <p>Get inspired by the journeys of successful individuals</p>
      </header>

      {/* Success Cards Container */}
      <div className="success-cards-container">
        {successStories.map((story, index) => (
          <div
            key={index}
            className="success-card"
            onClick={() => handleCardClick(story)}
          >
            <img src={story.image} alt={story.title} className="success-card-image" />
            <div className="success-card-content">
              <h3 className="success-card-title">{story.title}</h3>
              <p className="success-card-description">{story.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for detailed view */}
      {selectedStory && (
        <div className="success-modal">
          <div className="success-modal-content">
            <button className="success-modal-close" onClick={handleCloseModal}>
              X
            </button>
            <h2>{selectedStory.title}</h2>
            <img
              src={selectedStory.image}
              alt={selectedStory.title}
              className="success-modal-image"
            />
            <p>{selectedStory.fullDescription}</p>
            <p>
              <strong>Additional Information:</strong> {selectedStory.additionalInfo}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Suc;
