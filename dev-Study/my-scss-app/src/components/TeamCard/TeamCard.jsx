import styles from "./TeamCard.module.scss";
import clsx from "clsx";

function TeamCard({ name, role, image, level }) {
  return (
    <div className={clsx(styles.card, styles[role])}>
      <img className={styles.avatar} src={image} alt={`${name}의 프로필`} />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <span className={clsx(styles.badge, styles[level])}>{level}</span>
      </div>
      <button className={styles.button}>프로필 보기</button>
    </div>
  );
}

export default TeamCard;
