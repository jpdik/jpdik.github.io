import {useDispatch, useSelector} from 'react-redux';

import {changeMenuCollapsed} from '@redux/actions/configAction';

export function useConfig() {
  const dispatch = useDispatch();

  const setMenuCollapsed = value => {
    dispatch(changeMenuCollapsed(value));
  };

  const menuCollapsed = useSelector(store => store.config.menuCollapsed);

  return {menuCollapsed, setMenuCollapsed};
}
