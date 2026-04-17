import styles from "./Page1Content.module.css"
import LeftContent from "./Left Content/LeftContent";
import RightContent from "./Right Content/RightContent";

function Page1Content(proto){

    return(
        <div className={styles.pageContentContainer}>
            <LeftContent/>
            <RightContent users ={proto.users} />
        </div>
    );
}

export default Page1Content;