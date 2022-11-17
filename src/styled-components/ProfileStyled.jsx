import styled, { css } from "styled-components";

const Profile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${(props) =>
    props.profileOn &&
    css`
      border: 1px solid #36f;
    `}
`;

const ProfileImg = styled.div`
  width: 28px;
  height: 28px;
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
