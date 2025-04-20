import styled from 'styled-components';

const Wrapper = styled.div`
  background: #ddd;
  border-radius: 12px;
  overflow: hidden;
  margin: 1rem 0;
`;

const Bar = styled.div`
  background: #03dac6;
  height: 24px;
  width: ${props => props.progress}%;
`;

export default function ProgressBar({ progress }) {
  return (
    <Wrapper>
      <Bar progress={progress} />
    </Wrapper>
  );
}
