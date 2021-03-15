import Content from "./content/content";
import SidebarRight from "./sidebarRight/sidebarRight";
import Footer from "./footer/footer";
import styles from './layout.module.scss';

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Content>
                {children}
            </Content>
            <SidebarRight/>
            <Footer/>
        </div>
    );
};

export default Layout;
