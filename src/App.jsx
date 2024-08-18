import Authorization from './components/authComp';
import ProfilePage from './components/profilePage'
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

function App() {
  const initialViewProfile = useSelector(state => state.rootReducer.auth.viewProfilePage.visible)
  const [viewProfile, setViewProfile] = useState(false)

  useEffect(() => {
    setViewProfile(initialViewProfile)
  }, [initialViewProfile])

  return (
    <div>
      {viewProfile ?
        <ProfilePage />
        :
        <Authorization />
      }
    </div>
  );
}

export default App