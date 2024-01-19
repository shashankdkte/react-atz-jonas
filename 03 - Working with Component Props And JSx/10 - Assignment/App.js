import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Avatar />
      </div>
      <div className="data">
        <Intro />
      </div>
      <div className="skillset">
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  const random = Math.floor(Math.random() * 100) + 1;
  return (
    <img
      src={`https://randomuser.me/api/portraits/men/${random}.jpg`}
      alt="user"
      width={300}
      height={300}
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Shashank Dhakate</h1>
      <p>Full Stack developer. Loves watching anime and podcast</p>
    </div>
  );
}

function SkillList() {
  return (
    <>
      <Skill skill="HTML + CSS" emoji="👌" color="lightgreen" />
      <Skill skill="Javascript" emoji="👍" color="lightyellow" />
      <Skill skill="Bootstrap" emoji="🙌" color="lightblue" />
      <Skill skill="Git and Github" emoji="👌" color="lightcoral" />
    </>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
