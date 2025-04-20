import ProgressBar from '../components/ProgressBar';

const progress = {
  'React Basics': 80,
  'Advanced JS': 50,
  'Python core': 60,
  'JavaScript': 70,
};

export default function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Progress</h2>
      {Object.entries(progress).map(([course, prog]) => (
        <div key={course}>
          <h4>{course}</h4>
          <ProgressBar progress={prog} />
        </div>
      ))}
    </div>
  );
}
