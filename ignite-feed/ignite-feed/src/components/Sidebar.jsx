import { PencilLine } from "@phosphor-icons/react"
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';


export function Sidebar() {
    return (

        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src="https://images.unsplash.com/photo-1536147210925-5cb7a7a4f9fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGVhdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
                <Avatar src="https://github.com/celsonzinga.png" />
                <strong>Celson Zinga</strong>
                <span>Web Júnior</span>

            </div>

            <footer>

                <a href="#">
                    <PencilLine size={20} />

                    Editar seu perfil

                </a>
            </footer>
        </aside>
    )
}
