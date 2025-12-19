import ProfileCard from "./components/ProfileCard";

function App() {
  const profiles = [
    { name: "Alex", age: 22, bio: "Frontend Developer", image: "https://i.pravatar.cc/150?img=1" },
    { name: "Mia", age: 25, bio: "UI Designer", image: "https://i.pravatar.cc/150?img=2" },
    { name: "John", age: 28, bio: "Backend Engineer", image: "https://c8.alamy.com/comp/2PWERD5/student-avatar-illustration-simple-cartoon-user-portrait-user-profile-icon-youth-avatar-vector-illustration-2PWERD5.jpg" },
    { name: "Sara", age: 24, bio: "React Learner", image: "https://i.pravatar.cc/150?img=4" },
    { name: "David", age: 30, bio: "Full Stack Dev", image: "https://i.pravatar.cc/150?img=5" },
    { name: "Emma", age: 21, bio: "CS Student", image: "https://t4.ftcdn.net/jpg/11/66/06/77/360_F_1166067709_2SooAuPWXp20XkGev7oOT7nuK1VThCsN.jpg" },
    { name: "Noah", age: 26, bio: "JavaScript Lover", image: "https://as2.ftcdn.net/v2/jpg/16/16/22/25/1000_F_1616222533_XrsVEyaJBnFqYTeDRu540FSl8qYqlv3v.jpg" },
    { name: "Olivia", age: 23, bio: "Web Designer", image: "https://i.pravatar.cc/150?img=8" },
    { name: "Liam", age: 27, bio: "Mobile App Dev", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDmy57cFCrseUi9MUH0mB9LvGL8OMayEXPPw&s" },
    { name: "Sophia", age: 22, bio: "UI/UX Intern", image: "https://i.pravatar.cc/150?img=10" },
    { name: "James", age: 29, bio: "Tech Blogger", image: "https://i.pravatar.cc/150?img=11" },
    { name: "Ava", age: 20, bio: "IT Undergraduate", image: "https://i.pravatar.cc/150?img=12" }
  ];

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row → 3 rows
    gap: "20px",
    padding: "20px"
  };

  return (
    <div style={containerStyle}>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          age={profile.age}
          bio={profile.bio}
          image={profile.image}
        />
      ))}
    </div>
  );
}

export default App;
