import { NavLink as NavlinkRouter } from 'react-router-dom';

export const NavLink = ({ to, children, ...props }) => {
  return (
    <NavlinkRouter
      {...props}
      className={({ isActive }) => isActive ? 'is-active' : 'block'}
      to={to}
      >{children}
    </NavlinkRouter>
  );
};