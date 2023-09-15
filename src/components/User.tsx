import styled from "styled-components";
import { UserProps } from "../types/user";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const UserContainer = styled.div`
  background-color: #2b3566;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
`;

const UserImage = styled.img`
  width: 140px;
  height: 140px;
  border: 4px solid #644aff;
  border-radius: 50%;
`;

const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const LocationIcon = styled(MdLocationPin)`
  fill: #4ed8c7;
  font-size: 1.5rem;
`;

const LocationText = styled.span`
  color: #9da5d1;
  font-weight: bold;
`;

const StatsContainer = styled.div`
  display: flex;
`;

const StatsItem = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  &:first-child {
    border-right: 1px solid #9da5d1;
  }
`;

const StatsNumber = styled.p`
  background-color: #4ed8c7;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
`;

const LinkButton = styled(Link)`
  text-align: center;
  background-color: #644aff;
  padding: 1rem;
  border-radius: 5px;
  opacity: 0.8;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }
`;

function User({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) {
  return (
    <UserContainer>
      <UserImage src={avatar_url} alt={login} />
      <h1>{login}</h1>
      <p>
        <LocationIcon />
        <LocationContainer>
          <LocationText>{location}</LocationText>
        </LocationContainer>
      </p>
      <StatsContainer>
        <StatsItem>
          <p>Seguidores</p>
          <StatsNumber>{followers}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <p>Seguindo</p>
          <StatsNumber>{following}</StatsNumber>
        </StatsItem>
      </StatsContainer>
      <LinkButton to={`/repos/${login}`}>Ver melhores projetos</LinkButton>
    </UserContainer>
  );
}

export default User;
