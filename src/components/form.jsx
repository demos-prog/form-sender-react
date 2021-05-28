import React, { useState } from "react";
import "./null_styles.css";
import "./form.css";
import Modal from "./modal/modal";
import Cityes from "./cityes/cityes";

export default function Form() {
  const [status, setStatus] = useState("Прежде чем действовать, надо понять");
  const [state, setState] = useState(false);
  const [password, setPassword] = useState("");
  const [secPassword, setSecPassword] = useState("");
  const [passwordIsCorrect, setpasswordIsCorrect] = useState(true);
  const [email, setEmail] = useState("");
  const [emailIsEmpty, setEmailIsEmpty] = useState(false);

  const [day, setDay] = useState(15);
  const [month, setMonth] = useState("may");
  const [year, setYear] = useState(2012);
  const [time, setTime] = useState("14:55:17");

  function setzero(numb) {
    if (numb < 10) {
      return "0" + numb;
    } else {
      return numb;
    }
  }

  function fullcloac(hours, mins, secs) {
    return setzero(hours) + ":" + setzero(mins) + ":" + setzero(secs);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== secPassword || password === "") {
      setpasswordIsCorrect(false);
    } else {
      setpasswordIsCorrect(true);
    }

    if (email === "") {
      setEmailIsEmpty(true);
    } else {
      setEmailIsEmpty(false);
    }

    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    const hours = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    const months = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "june",
      "july",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];

    setDay(day);
    setMonth(months[month]);
    setYear(year);
    setTime(fullcloac(hours, mins, secs));
    if (password === secPassword && password !== "" && !emailIsEmpty) {
      const info = {
        password: password,
        email: email,
      };

      alert(JSON.stringify(info));
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <section>
            <div className="left title">
              <strong>Здравствуйте, </strong>
            </div>
            <div className="middle title">
              <strong>Человек №3452342535</strong>
            </div>
            <div className="chStatus" onClick={() => setState((p) => !p)}>
              Сменить статус
            </div>
            {state && (
              <Modal
                status={status}
                setStatus={setStatus}
                setState={setState}
              />
            )}
          </section>

          <section>
            <div className="left"></div>
            <div className="middle status">{status}</div>
          </section>

          <section>
            <div className="left note">Ваш город</div>
            <div className="middle tp">
              <Cityes />
            </div>
          </section>

          <form onSubmit={handleSubmit}>
            <section>
              <div className="left note">Пароль</div>
              <div className="middle">
                <input
                  className={passwordIsCorrect ? "normal" : "error"}
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <div className="decor">
                Ваш новый пароль должен содержать не менее 5 символов.
              </div>
            </section>

            <section>
              <div className="left note">Пароль еще раз</div>
              <div className="middle">
                <input
                  className={passwordIsCorrect ? "normal" : "error"}
                  type="text"
                  value={secPassword}
                  onChange={(e) => setSecPassword(e.target.value)}
                ></input>
              </div>
              <div className="decor">
                Повторите пароль, пожалуйста, это обезопасит вас с нами на
                случай ошибки.
              </div>
            </section>

            <section>
              <div className="left note">Электронная почта</div>
              <div className="middle">
                <input
                  className={!emailIsEmpty ? "normal" : "error"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                ></input>
              </div>
              <div className="decor">
                Можно изменить адрес, указанный при регистрации.
              </div>
            </section>

            <section>
              <div className="left note">Я согласен</div>
              <div className="middle">
                <label>
                  <input type="checkbox"></input>
                  принимать актуальную информацию на емейл
                </label>
              </div>
            </section>

            <section>
              <div className="left"></div>
              <div className="middle">
                <button className="btn" type="submit">
                  Изменить
                </button>
                <div className="changes">
                  последние изменения {day} {month} {year} в {time}
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
}
