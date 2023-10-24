import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p69yi3j",
        "template_ifl1m1e",
        form.current,
        "aNJThZ1LzgrCPNyKR"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.info("📧 Email Sent !", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={style.contactDiv} id="contact">
      <h3>Contact</h3>
      <div className={style.contactAll}>
        <div className={style.contactIcons}>
          <div className={style.iconContact}>
            <ion-icon name="mail"></ion-icon>
            <h4>marcosgalliano03@gmail.com</h4>
          </div>
          <div className={style.iconContact}>
            <ion-icon name="call"></ion-icon>
            <h4>+54 0 11 6953-5896</h4>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <button type="submit" className={style.inputButton}>
            Send
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
export default Contact;
