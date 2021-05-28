import React, { useState } from "react";
import "./null_styles.css";
import "./form.css";
import Modal from "./modal/modal";

export default function Form() {
  const [status, setStatus] = useState("Прежде чем действовать, надо понять");
  const [state, setState] = useState(false);

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
          </section>

          <section>
            <div className="left"></div>
            <div className="middle">{status}</div>
          </section>

          <section>
            <div className="left note">Ваш город</div>
            <div className="middle">
              <select>
                <option>Красноярск</option>
              </select>
            </div>
          </section>

          <form>
            <section>
              <div className="left note">Пароль</div>
              <div className="middle">
                <input type="text"></input>
              </div>
              <div className="decor">
                Ваш новый пароль должен содержать не менее 5 символов.
              </div>
            </section>

            <section>
              <div className="left note">Пароль еще раз</div>
              <div className="middle">
                <input type="text"></input>
              </div>
              <div className="decor">
                Повторите пароль, пожалуйста, это обезопасит вас с нами на
                случай ошибки.
              </div>
            </section>

            <section>
              <div className="left note">Электронная почта</div>
              <div className="middle">
                <input type="email"></input>
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
                <button type="submit">Изменить</button>
                <div className="changes">
                  последние изменения 15 мая 2012 в 14:55:17
                </div>
              </div>
            </section>
          </form>
        </div>
        {state && (
          <Modal status={status} setStatus={setStatus} setState={setState} />
        )}
      </div>
    </>
  );
}
