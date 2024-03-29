import PlayersWatching from "./Layouts/PlayersWatching"
import RoundCircleBox from "./Layouts/RoundCircleBox"
import RoundCounter from "./Layouts/RoundCounter"
import "./App.css"
const App = () => {
  return (
    <div className="min-h-screen gap-2 flex px-4 py-3 bg-slate-900">
      <PlayersWatching />
      <RoundCircleBox />
      <RoundCounter />
    </div>
  )
}

export default App