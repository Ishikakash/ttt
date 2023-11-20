
import './App.css';

import Navbar from './components/Navbar';
import PostList from './components/PostList';

//import Navbar from './Navbar';
import Profile1 from './components/Profile1';
//import Profile from './Profile';
import './data/info.json';

// const profileData = {
//   name: 'John Doe',
//   username: '@johndoe',
//   bio: 'Frontend Developer',
//   imageUrl: 'https://www.terriblytinytales.com/profile.jpeg',
// };

function App() {
  
  return (
    <>
    <Navbar/>
    <Profile1/>
    <PostList/>
    </>
    
  );
}

export default App;
