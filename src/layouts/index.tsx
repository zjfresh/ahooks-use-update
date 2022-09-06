import { Link, Outlet,useLocation } from 'umi';
import {SwitchTransition,CSSTransition} from "react-transition-group";
import styles from './index.less';

export default function Layout() {

  const { pathname } = useLocation();
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <SwitchTransition>
            <CSSTransition
                key={location.pathname}
                classNames="fade"
                timeout={300}
            >
                <div className="container">
                    <Outlet />
                </div>
            </CSSTransition>
        </SwitchTransition>
    </div>
  );
}
