"use client";

import Link from 'next/link';
import { FaHome, FaInfoCircle, FaUser, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../app/Sidebar.module.css';

export default function Sidebar(props) {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/" className={styles.navLink}>
            <FaHome className={styles.icon} />
            <span className={styles.tooltip}>Home</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/dashboard" className={styles.navLink}>
            <FaUser className={styles.icon} />
            <span className={styles.tooltip}>Dashboard</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about" className={styles.navLink}>
            <FaInfoCircle className={styles.icon} />
            <span className={styles.tooltip}>About</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/login" className={styles.navLink}>
            <FaSignInAlt className={styles.icon} />
            <span className={styles.tooltip}>Sign In</span>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/register" className={styles.navLink}>
            <FaUserPlus className={styles.icon} />
            <span className={styles.tooltip}>Register</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
