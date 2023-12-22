import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9u78hiw', 'template_t5smxwk', form.current, 'rS_HFDUwceyw1vIoR')
      .then((result) => {
          console.log(result.text);
          alert("Mensaje Enviado!")
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Contact;