import React, { useState } from 'react';
import './success.css';  // Import the CSS file

// Success story data
const successStories = [
  {
    title: 'The Journey of Elon Musk',
    image: 'https://example.com/elon-musk.jpg', // Replace with a real image URL
    description: 'Elon Musk’s journey from being a tech entrepreneur to founding SpaceX and Tesla.',
    fullDescription: 'Elon Musk was born in South Africa and moved to the US at a young age. After attending university, he co-founded Zip2, which he sold for nearly $300 million. He later founded X.com, which became PayPal. Today, Musk is the CEO of SpaceX and Tesla, two companies that are changing the world.',
    additionalInfo: 'You can watch his interviews and speeches online for more details.',
  },
  {
    title: 'Oprah Winfrey\'s Rise to Success',
    image: 'https://example.com/oprah-winfrey.jpg', // Replace with a real image URL
    description: 'Oprah Winfrey went from a difficult childhood to becoming a media mogul.',
    fullDescription: 'Born into poverty and raised by her grandmother, Oprah faced many hardships before becoming a TV anchor. Her big break came when she began hosting her own talk show, "The Oprah Winfrey Show," which became the most-watched talk show in the U.S. She has since expanded her empire into books, television, and philanthropy.',
    additionalInfo: 'Her book "What I Know for Sure" is a great resource for those seeking inspiration.',
  },
  {
    title: 'J.K. Rowling\'s Persistence',
    image: 'https://example.com/jk-rowling.jpg', // Replace with a real image URL
    description: 'The story of J.K. Rowling, who persisted through rejections to create the Harry Potter series.',
    fullDescription: 'J.K. Rowling was rejected by 12 publishers before "Harry Potter and the Sorcerer’s Stone" was finally accepted. She was a single mother struggling to make ends meet when she wrote the first book. Today, the Harry Potter series has sold over 500 million copies worldwide.',
    additionalInfo: 'You can watch her TED talk on the power of failure for more motivation.',
  },
  {
    title: 'Steve Jobs\' Innovation',
    image: 'https://example.com/steve-jobs.jpg', // Replace with a real image URL
    description: 'Steve Jobs’ ability to create world-changing technology with Apple.',
    fullDescription: 'Steve Jobs co-founded Apple in 1976. Despite many setbacks, including being ousted from Apple, he returned to the company and revolutionized the technology industry with products like the iPhone, iPad, and MacBook. Jobs is remembered for his vision and relentless pursuit of perfection.',
    additionalInfo: 'His biography, "Steve Jobs" by Walter Isaacson, is a great resource for understanding his life.',
  },
  // Add more success stories here
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
            <button className="success-modal-close" onClick={handleCloseModal}>X</button>
            <h2>{selectedStory.title}</h2>
            <img src={selectedStory.image} alt={selectedStory.title} className="success-modal-image" />
            <p>{selectedStory.fullDescription}</p>
            <p><strong>Additional Information:</strong> {selectedStory.additionalInfo}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Suc;
