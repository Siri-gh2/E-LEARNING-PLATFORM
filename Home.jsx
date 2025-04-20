import CourseCard from '../components/CourseCard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const courses = [
  { id: '1', title: 'React Basics', description: 'Intro to React.' },
  { id: '2', title: 'Advanced JS', description: 'Deep dive into JavaScript.' },
  { id: '3', title: 'Python core', description: 'go with the python programming.' },
  { id: '3', title: 'JavaScript', description: 'into js..!' }
];

export default function Home() {
  return (
    <Container>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Container>
  );
}
