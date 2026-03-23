import React from "react"
import styles from "./NavBar.module.css";

function NavBar(){
    return(
       <div className={styles.navBar}>
        <h4 className={styles.navBarHeading}>Target Audience</h4>
        <button className={styles.navBarButton}>Digital Banking Platform</button>
       </div>
    );

}
export default NavBar;