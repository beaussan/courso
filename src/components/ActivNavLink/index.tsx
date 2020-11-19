import React from 'react';
import { useLocation, useResolvedPath } from 'react-router';
import { Link, LinkProps } from 'react-router-dom';

/**
 * A <Link> wrapper that knows if it's "active" or not.
 * Rip from https://github.com/ReactTraining/react-router/blob/v6.0.0-beta.0/packages/react-router-dom/index.tsx
 * However since they wont include the inactive class and style, here is the implementation, based on their NavLink
 * See https://github.com/ReactTraining/react-router/issues/7194
 */
export const ActiveNavLink = React.forwardRef<
  HTMLAnchorElement,
  ActiveNavLinkProps
>(function ActiveNavLinkWithRef(
  {
    'aria-current': ariaCurrentProp = 'page',
    activeClassName,
    activeStyle,
    inactiveClassName,
    inactiveStyle,
    caseSensitive = false,
    'className': classNameProp = '',
    end = false,
    'style': styleProp,
    to,
    ...rest
  },
  ref,
) {
  let location = useLocation();
  let path = useResolvedPath(to);

  let locationPathname = location.pathname;
  let toPathname = path.pathname;
  if (!caseSensitive) {
    locationPathname = locationPathname.toLowerCase();
    toPathname = toPathname.toLowerCase();
  }

  let isActive = end
    ? locationPathname === toPathname
    : locationPathname.startsWith(toPathname);

  let ariaCurrent = isActive ? ariaCurrentProp : undefined;
  let className = [
    classNameProp,
    isActive ? activeClassName : inactiveClassName,
  ]
    .filter(Boolean)
    .join(' ');
  let style = { ...styleProp, ...(isActive ? activeStyle : inactiveStyle) };

  return (
    <Link
      {...rest}
      aria-current={ariaCurrent}
      className={className}
      ref={ref}
      style={style}
      to={to}
    />
  );
});

export interface ActiveNavLinkProps extends LinkProps {
  activeClassName?: string;
  activeStyle?: object;
  inactiveClassName?: string;
  inactiveStyle?: object;
  caseSensitive?: boolean;
  end?: boolean;
}
