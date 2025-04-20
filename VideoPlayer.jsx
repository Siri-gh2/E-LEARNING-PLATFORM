// src/components/VideoPlayer.jsx
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2rem auto;
  max-width: 800px;
`;

export default function VideoPlayer({ videoUrl }) {
  return (
    <Wrapper>
      <iframe
        width="100%"
        height="450"
        src={videoUrl}
        title="Course Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Wrapper>
  );
}
