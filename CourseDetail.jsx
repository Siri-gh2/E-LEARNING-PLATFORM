import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';

const courseData = {
  1: {
    title: 'React Basics',
    videoUrl: 'https://www.youtube.com/embed/bMknfKXIFA8',
  },
  2: {
    title: 'Advanced JS',
    videoUrl: 'https://www.youtube.com/embed/PoRJizFvM7s',
  },
  3: {
    title: 'Python core',
    videoUrl: 'https://www.youtube.com/embed/PoRJizFvM7s',
  },
  4: {
    title: 'JavaScript',
    videoUrl: 'https://www.youtube.com/embed/PoRJizFvM7s',
  },
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) return <p>Course not found</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{course.title}</h2>
      <VideoPlayer videoUrl={course.videoUrl} />
    </div>
  );
}
