import Search from './components/Search';
import { Typography } from 'antd';


const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Title style={{ textAlign: "center" }}>Search GitHub User</Title>
      <br /><br />
      <Search />
    </div>
  );
}

export default App;
