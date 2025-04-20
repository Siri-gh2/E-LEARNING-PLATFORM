import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background: #6200ea;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  color: white;
`;

export default function Header() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
    </Nav>
  );
}
