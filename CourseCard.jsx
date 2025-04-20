import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  width: 300px;
`;

export default function CourseCard({ course }) {
  return (
    <Card>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Link to={`/course/${course.id}`}>View Course</Link>
    </Card>
  );
}
