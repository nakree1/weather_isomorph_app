import React, { useCallback } from 'react';
import { Avatar, Dropdown, Menu, Icon, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../../modules/auth/authSelectors';
import { pushLogout } from '../../../modules/auth/authActions';

export default function Profile() {
  const isAuth = useSelector(authSelectors.isAuth);
  const profile = useSelector(authSelectors.getProfile);
  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {
    dispatch(pushLogout());
  }, []);

  if (!isAuth) {
    return null;
  }

  const { fullName, avatar, email } = profile;

  const menu = (
    <Menu onClick={handleLogout}>
      <Menu.Item key="1">
        <Icon type="logout" />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="profile">
      <Avatar className="profile__avatar" src={avatar}/>
      <div className="profile__info">
        <Dropdown overlay={menu}>
          <p className="name">
            {fullName}
            <Icon type="down" className="drop-icon"/>
          </p>
        </Dropdown>

        <p className="email">({email})</p>
      </div>
    </div>
  );
}
