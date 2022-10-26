import classes from "./Information.module.css";
import Image from "next/image";
import call from "../../public/images/call.png";
import message from "../../public/images/message.png";

function Information() {
  return (
    <section className={classes.information}>
      <div className={classes.information__bg}></div>

      <div className={classes.information__container}>
        <div>
          <h4 className={classes.information__title}>Contact</h4>
          <p className={classes.information__description}>Get In Touch</p>

          <div className={classes.information__wrap}>
            <div className={classes.information__contact}>
              <div className={classes.information__call}>
                {" "}
                <Image src={call} />{" "}
              </div>
              <div className={classes.information__info}>
                <h4 className={classes.information__subtitle}>Tel</h4>
                <p className={classes.information__number}>708-790-0000</p>
              </div>
            </div>

            <div className={classes.information__contact}>
              <div className={classes.information__call}>
                {" "}
                <Image src={message} />{" "}
              </div>
              <div className={classes.information__info}>
                <h4 className={classes.information__subtitle}>Tel</h4>
                <p className={classes.information__number}>708-790-0000</p>
              </div>
            </div>

            <div className={classes.information__contact}>
              <div className={classes.information__call}>
                {" "}
                <Image src={message} />{" "}
              </div>
              <div className={classes.information__info}>
                <h4 className={classes.information__subtitle}>Tel</h4>
                <p className={classes.information__number}>708-790-0000</p>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.information__fill}>
          <div className={classes.information__inputtop}>
            <div className={classes.information__labeled}>
              <label className={classes.information__label}>Name</label>
              <input className={classes.information__input}></input>
            </div>
            <div className={classes.information__labeled}>
              <label className={classes.information__label}>Email</label>
              <input className={classes.information__input}></input>
            </div>
          </div>
          <div className={classes.information__labeled}>
            <label className={classes.information__label}>Subject</label>
            <input className={classes.information__input}></input>
          </div>
          <div className={classes.information__labeled}>
            <label className={classes.information__label}>message</label>
            <textarea className={classes.information__area}></textarea>
          </div>

          <button className={classes.information__btn}>Send message</button>
        </div>
      </div>
    </section>
  );
}

export default Information;
