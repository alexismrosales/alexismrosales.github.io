import { FunctionComponent } from "react";
import { TagData } from "./utils"

import styles from "./styles.module.css"
const Tag: FunctionComponent<TagData> = props => {
    const label = props.label
    const total = props.total
    return <p className={styles.tag}>
        {label} {total !== -1 && <span className={styles.tag_total}>{total}</span>}
    </p>
}
export default Tag;
