import React, { useState } from "react";
import "./tips.css";

function Top() {
  // Arrays with 20 items each
  const motivationalTips = [
    { title: "Believe in Yourself", description: "Confidence in your abilities is the first step to success.", icon: "🌟" },
    { title: "Set SMART Goals", description: "Break goals into achievable, measurable steps.", icon: "🎯" },
    { title: "Celebrate Small Wins", description: "Every small achievement is a step toward your dreams.", icon: "🎉" },
    { title: "Find a Role Model", description: "Learn from those who inspire you.", icon: "🦸" },
    { title: "Stay Consistent", description: "Consistency beats talent when talent doesn’t work hard.", icon: "📅" },
    { title: "Visualize Success", description: "Imagine yourself achieving your goals every day.", icon: "🌈" },
    { title: "Embrace Failure", description: "Failure is part of success, learn from it.", icon: "💥" },
    { title: "Push Your Limits", description: "Step out of your comfort zone.", icon: "🏃" },
    { title: "Stay Positive", description: "A positive mindset attracts opportunities.", icon: "☀️" },
    { title: "Take Action", description: "Ideas without action are just dreams.", icon: "💡" },
    { title: "Practice Gratitude", description: "Gratitude shifts your perspective toward abundance.", icon: "🙏" },
    { title: "Focus on What You Can Control", description: "Don't waste energy on things outside your control.", icon: "🔒" },
    { title: "Surround Yourself with Positivity", description: "Your environment influences your mindset.", icon: "🏡" },
    { title: "Keep Learning", description: "Learning opens doors to new opportunities.", icon: "📚" },
    { title: "Take Responsibility", description: "Own your actions and decisions.", icon: "👤" },
    { title: "Be Persistent", description: "Persistence beats resistance.", icon: "💪" },
    { title: "Stay Organized", description: "An organized mind leads to organized actions.", icon: "🗂" },
    { title: "Start with Why", description: "Know why you're doing something to stay motivated.", icon: "❓" },
    { title: "Never Stop Growing", description: "Growth is the key to success.", icon: "🌱" },
    { title: "Stay Humble", description: "Humility keeps you grounded even in success.", icon: "🙌" },
    { title: "Take Care of Your Health", description: "Your body and mind need care to function at their best.", icon: "🧘" },
  ];

  const stressFreeTips = [
    { title: "Practice Deep Breathing", description: "Calm your mind with focused breathing exercises.", icon: "🫁" },
    { title: "Spend Time in Nature", description: "Nature can refresh your mind and reduce stress.", icon: "🌳" },
    { title: "Listen to Music", description: "Music can instantly lift your mood.", icon: "🎵" },
    { title: "Exercise Regularly", description: "Physical activity reduces stress hormones.", icon: "🏋️" },
    { title: "Practice Gratitude", description: "Write down three things you're grateful for daily.", icon: "🙏" },
    { title: "Drink Water", description: "Hydration helps with clarity and calmness.", icon: "💧" },
    { title: "Avoid Negative Media", description: "Limit exposure to negativity in the media.", icon: "📺" },
    { title: "Take Breaks", description: "Allow yourself to recharge throughout the day.", icon: "⏸️" },
    { title: "Get Enough Sleep", description: "Quality sleep boosts both mood and productivity.", icon: "💤" },
    { title: "Talk to Someone", description: "Sometimes, expressing yourself relieves stress.", icon: "🗣️" },
    { title: "Practice Mindfulness", description: "Stay in the moment and reduce anxiety.", icon: "🧠" },
    { title: "Journal Your Thoughts", description: "Writing down your emotions can provide relief.", icon: "📖" },
    { title: "Unplug from Technology", description: "Take time away from screens to relax.", icon: "📴" },
    { title: "Laugh More", description: "Laughter is one of the best stress-relievers.", icon: "😂" },
    { title: "Stretch Regularly", description: "Relieve physical tension with simple stretches.", icon: "🤸" },
    { title: "Do Something Creative", description: "Engage your mind in something artistic or crafty.", icon: "🎨" },
    { title: "Declutter Your Space", description: "A tidy environment helps reduce mental clutter.", icon: "🧹" },
    { title: "Be Kind to Yourself", description: "Avoid self-criticism and practice self-compassion.", icon: "💖" },
    { title: "Connect with Loved Ones", description: "Spending time with family and friends is soothing.", icon: "👨‍👩‍👧‍👦" },
    { title: "Stay Organized", description: "Organization helps reduce stress by reducing chaos.", icon: "📅" },
  ];

  const movies = [
    { title: "The Pursuit of Happyness", description: "A story of resilience and determination.", image: "https://images.moviesanywhere.com/08b5312f6334adf18414ccfb2093960a/80420ae5-16eb-41ce-b0be-a6f2a04b1a16.jpg" },
    { title: "3 Idiots", description: "A movie about following passion over societal expectations.", image: "https://m.media-amazon.com/images/M/MV5BNzc4ZWQ3NmYtODE0Ny00YTQ4LTlkZWItNTBkMGQ0MmUwMmJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
    { title: "The Shawshank Redemption", description: "A film about hope, resilience, and friendship.", image: "https://m.media-amazon.com/images/I/51zUbui+YdL._AC_.jpg" },
    { title: "Forrest Gump", description: "A man with a low IQ achieves amazing feats.", image: "https://m.media-amazon.com/images/I/91YvqOmkzCL._AC_SY679_.jpg" },
    { title: "Rocky", description: "The story of a boxer who gets a shot at the title.", image: "https://m.media-amazon.com/images/I/71I+yOEm6yL._AC_SY679_.jpg" },
    { title: "The Secret Life of Walter Mitty", description: "A man escapes his mundane life through adventure.", image: "https://m.media-amazon.com/images/I/71pUlvZc2TL._AC_SY679_.jpg" },
    { title: "Rudy", description: "A man fights to achieve his dreams against all odds.", image: "https://m.media-amazon.com/images/I/81n6+aLfOsL._AC_SY679_.jpg" },
    { title: "The Pursuit of Happyness", description: "A heartwarming film about perseverance.", image: "https://m.media-amazon.com/images/I/51Wfl65ZjPL._AC_.jpg" },
    { title: "The Social Network", description: "The story behind the creation of Facebook.", image: "https://m.media-amazon.com/images/I/61r-72xLJQL._AC_SY679_.jpg" },
    { title: "Dead Poet's Society", description: "A teacher inspires his students to live boldly.", image: "https://m.media-amazon.com/images/I/71bQWj72mDL._AC_SY679_.jpg" },
    // Add more movies here...
  ];

  const novels = [
    { title: "Atomic Habits", description: "A guide to creating good habits and breaking bad ones.", image: "https://m.media-amazon.com/images/I/81F90H7hnML._AC_UF1000,1000_QL80_.jpg" },
    { title: "The Alchemist", description: "A novel about following your dreams and personal journey.", image: "https://m.media-amazon.com/images/I/81UGPuNl7kL._UF1000,1000_QL80_.jpg" },
    { title: "The Power of Now", description: "A spiritual guide to living in the present moment.", image: "https://m.media-amazon.com/images/I/81BhCwnUwZL._AC_SY679_.jpg" },
    { title: "The Secret", description: "A guide to the law of attraction and creating the life you desire.", image: "https://m.media-amazon.com/images/I/71xRbh+kvnL._AC_SY679_.jpg" },
    { title: "Becoming", description: "A memoir by Michelle Obama about her journey to self-discovery.", image: "https://m.media-amazon.com/images/I/71X2uHq6UsL._AC_SY679_.jpg" },
    // Add more novels here...
  ];

  // State management for showing categories
  const [activeCategory, setActiveCategory] = useState(null);

  const renderCategoryContent = () => {
    if (activeCategory === "movies") {
      return (
        <div className="tips-movies">
          {movies.map((movie, index) => (
            <div className="tips-card" key={index}>
              <img src={movie.image} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          ))}
        </div>
      );
    } else if (activeCategory === "novels") {
      return (
        <div className="tips-novels">
          {novels.map((novel, index) => (
            <div className="tips-card" key={index}>
              <img src={novel.image} alt={novel.title} />
              <h3>{novel.title}</h3>
              <p>{novel.description}</p>
            </div>
          ))}
        </div>
      );
    } else if (activeCategory === "motivationalTips") {
      return (
        <div className="tips-grid">
          {motivationalTips.map((tip, index) => (
            <div className="tips-card" key={index}>
              <span className="icon">{tip.icon}</span>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      );
    } else if (activeCategory === "stressFreeTips") {
      return (
        <div className="tips-grid">
          {stressFreeTips.map((tip, index) => (
            <div className="tips-card" key={index}>
              <span className="icon">{tip.icon}</span>
              <h3>{tip.title}</h3>
              <p>{tip.description}</p>
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="app-container">
      <header className="tips-header">
        <div className="tips-header-content">
          <h1>🎓 Stay Inspired & Stress-Free</h1>
          <input
            type="text"
            className="search-box"
            placeholder="Search tips or resources..."
          />
          <div className="tips-navigation">
            <button onClick={() => setActiveCategory("motivationalTips")}>Motivational Tips</button>
            <button onClick={() => setActiveCategory("stressFreeTips")}>Stress-Free Tips</button>
            <button onClick={() => setActiveCategory("movies")}>Movies</button>
            <button onClick={() => setActiveCategory("novels")}>Novels</button>
          </div>
        </div>
      </header>
      <div className="tips-content">
        {renderCategoryContent()}
      </div>
      <footer className="tips-footer">
        <p>🌟 Stay inspired, stay calm, and achieve greatness! 🌟</p>
      </footer>
    </div>
  );
}

export default Top;
