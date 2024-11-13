// Notice.js (inside the 'componen' folder)
import React from "react";
import styles from './stylemodule/notice.module.css';

const Notice = ({ type, message }) => {
  let noticeClass = '';

  // Define the noticeClass based on the type
  switch(type) {
    case 'info':
      noticeClass = styles.info;
      break;
    case 'warning':
      noticeClass = styles.warning;
      break;
    case 'danger':
      noticeClass = styles.danger;
      break;
    default:
      noticeClass = styles.info; // default to info
  }

  return (
    <div className={`${styles.notice} ${noticeClass}`}>
      <span className={styles.icon}>
        {type === "info" && "ℹ️"}
        {type === "warning" && "⚠️"}
        {type === "danger" && "🚨"}
      </span>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default Notice;
