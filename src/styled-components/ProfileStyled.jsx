import styled, { css } from "styled-components";

const Profile = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.0625rem solid #e1e2e3;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${(props) =>
    props.profileOn &&
    css`
      border: 0.0625rem solid #36f;
    `}
`;

const ProfileImg = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://static.wanted.co.kr/oneid-user/profile_default.png"),
    url("https://static.wanted.co.kr/images/profile_default.png");
`;

const ProfileStyled = ({ profileOn }) => {
  return (
    <Profile profileOn={profileOn}>
      <ProfileImg />
    </Profile>
  );
};

export default ProfileStyled;
