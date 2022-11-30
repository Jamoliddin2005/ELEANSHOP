import React from "react";
import { YMaps, Map } from "react-yandex-maps";
import styles from "./contacts.module.css";
import { PhoneNumber as PhoneIcon } from "../../components/icons/";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h2 className={styles.title}>Контакты</h2>
      <div className={styles.container}>
        <YMaps>
          <Map
            defaultState={{ center: [55.758124, 37.62678], zoom: 16 }}
            width="50%"
            height="694px"
          />
        </YMaps>
        <div className={styles.connect}>
          <div className={styles.information}>
            <div>
              <PhoneIcon />
              <p>
                ТЕЛ.: <span>8 (495) 150-14-77</span>
              </p>
            </div>
            <div>
              <PhoneIcon />
              <p>
                ТЕЛ.: <span>8 (495) 150-14-77</span>
              </p>
            </div>
            <div>
              <PhoneIcon />
              <p>
                ТЕЛ.: <span>8 (495) 150-14-77</span>
              </p>
            </div>
            <div>
              <PhoneIcon />
              <p>
                ТЕЛ.: <span>8 (495) 150-14-77</span>
              </p>
            </div>
            <div>
              <PhoneIcon />
              <p>
                ТЕЛ.: <span>8 (495) 150-14-77</span>
              </p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
