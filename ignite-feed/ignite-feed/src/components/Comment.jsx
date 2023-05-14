import { Trash } from "@phosphor-icons/react";
import { ThumbsUp } from "@phosphor-icons/react";
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/celsonzinga.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Celson Zinga</strong>
                            <time title="10 de Maio às 20:28h" dateTime="2023-05-10  20:28:30">cerca há 1h atrás </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Apagar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p> {content} </p>

                </div>

                <footer>
                    <button onClick={handleLikeComment} >
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}