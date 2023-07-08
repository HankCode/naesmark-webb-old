import emailjs from 'emailjs-com';
import React, { useRef, useState } from 'react';
import { BiMailSend } from 'react-icons/bi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactModalFunctionality';
import Naesmark_logo from '../assets/img/naesmark_logo_big.png';

function Contact() {
  const [formData, setFormData] = useState({});
  const ref = useRef();
  const closeModal = () => ref.current?.close();

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        'naesmark_contact_form',
        'template_qzea38r',
        event.target,
        'user_r6bkEoPepEEKk7MiQd7lF'
      )
      .then(
        (result) => {
          toast.success('Success! We will get back to you!');
          closeModal();
        },
        (error) => {
          toast.error('Error: Something went wrong, try again later!');
        }
      );

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <section className='relative max-w-4xl rounded-xl bg-gray-100 dark:bg-gray-900 rounded'>
        <div className='container px-5 lg:px-10 py-10 lg:py-12 mx-auto'>
          <h2 className='text-themeprim font-bold'>Contact me</h2>
          <div className='absolute sm:top-20 top-[200px] left-0 right-0 sm:opacity-30 opacity-20 sm:w-[540px] w-[320px] mx-auto'>
            <img src={Naesmark_logo} alt='Naesmark logo' />
          </div>
          <div className='flex flex-col text-center w-full mt-2'>
            <p className='max-w-lg sm:text-lg text-base text-center text-gray-700 dark:text-gray-300 mx-auto sm:font-semibold'>
              Fill in the form below and I'll get back to you. Thank you.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='sm:mt-14 mt-10 md:max-w-2xl sm:px-6 px-2 md:px-0 mx-auto text-gray-600 dark:text-gray-400'>
              <div className='flex flex-wrap -m-2 max-w-lg mx-auto'>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label
                      for='name'
                      className='ml-1 leading-7 text-sm lg:text-base font-semibold'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      className='w-full bg-white dark:bg-gray-500 dark:bg-opacity-50 bg-opacity-50 rounded border border-gray-300 dark:border-gray-500 focus:border-white focus:bg-white focus:ring-2 
                      focus:ring-themeprim text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-black dark:text-gray-200'
                      control-id='ControlID-80'
                      onChange={updateInput}
                      value={formData.name || ''}
                    />
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label
                      for='email'
                      className='ml-1 leading-7 text-sm lg:text-base font-semibold'
                    >
                      E-mail
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      className='w-full bg-white dark:bg-gray-500 dark:bg-opacity-50 bg-opacity-50 rounded border border-gray-300 dark:border-gray-500 focus:border-white focus:bg-white focus:ring-2 
                      focus:ring-themeprim text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-black dark:text-gray-200'
                      onChange={updateInput}
                      value={formData.email || ''}
                    />
                  </div>
                </div>
                <div className='p-2 w-full'>
                  <div className='relative'>
                    <label
                      for='message'
                      className='ml-1 leading-7 text-sm lg:text-base font-semibold'
                    >
                      Message
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      className='w-full bg-white dark:bg-gray-500 dark:bg-opacity-50 bg-opacity-50 rounded border border-gray-300 dark:border-gray-500 focus:border-white focus:bg-white focus:ring-2 
                      focus:ring-themeprim text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-black dark:text-gray-200'
                      onChange={updateInput}
                      value={formData.message || ''}
                    ></textarea>
                  </div>
                </div>
                <div className='mt-14 w-full'>
                  <button className='flex mx-auto items-center text-white bg-themeprim border-0 py-3 px-7 focus:outline-none hover:bg-themesec rounded text-sm lg:mt-4 uppercase font-bold transition-all'>
                    <span className=''>Skicka meddelande</span>
                    <BiMailSend className='ml-3 text-2xl' />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
