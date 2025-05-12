'use client';
import { useState, MouseEvent, useContext, useEffect, FormEvent } from 'react';
import { FaBeer, FaApple, FaBusinessTime, FaReceipt, FaBell, FaBuyNLarge, FaStore } from 'react-icons/fa';
import { FaPerson } from 'react-icons/fa6';
import { HeaderWidget, ContextMenuWidget, GradientContext } from "@/components"
import { LogoIcon } from '@/components/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { joinWaitlist } from '@/services/joinWaitlist';


export default function Home() {

  const sentence = "Experience Business Innovation with Akauntme";
  const words = sentence.split(" ");
  const context = useContext(GradientContext);
  if (!context) {
    throw new Error("GradientContext must be used within a GradientProvider");
  }
  const { activeWord, gradients } = context;

  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isFooterHidden, setFooterHidden] = useState(false);

  const handleFocus = () => {
    if (window.innerWidth <= 768) {
      setFooterHidden(true);
    }
  };

  const handleBlur = () => {
    if (window.innerWidth <= 768) {
      setFooterHidden(false);
    }
  };

  const contextMenuItems = [
    {
      label: 'Platform',
      icon: <FaBeer />,
      children: [
        { label: 'For Business usage', icon: <FaBusinessTime />, onClick: () => alert('For Business usage') },
        { label: 'For Personal usage', icon: <FaPerson />, onClick: () => alert('For Personal usage') },
      ],
    },
    {
      label: 'Features',
      icon: <FaApple />,
      children: [
        { label: 'Track your business sales', icon: <FaBuyNLarge />, onClick: () => alert('Track your business sales') },
        { label: 'Generate digital receipts', icon: <FaReceipt />, onClick: () => alert('Generate digital receipts') },
        { label: 'Track your Inventories', icon: <FaStore />, onClick: () => alert('Track your Inventories') },
        { label: 'Assign Staffs', icon: <FaPerson />, onClick: () => alert('Assign Staffs') },
        { label: 'Smart notification Reports', icon: <FaBell />, onClick: () => alert('Smart notification Reports') },
      ],
    }
  ];

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    setContextMenuPosition({ x: event.pageX, y: event.pageY });
    setContextMenuVisible(true);
  };

  const handleClick = () => {
    setContextMenuVisible(false);
  };


  // useEffect(() => {
  //   const handleKeyPress = (event: KeyboardEvent) => {
  //     if (event.ctrlKey && event.shiftKey && event.key === 'I') {
  //       event.preventDefault();
  //       setIsPopupVisible(true);
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyPress);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyPress);
  //   };
  // }, []);




  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');


  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setMessage('');
  //   setError('');

  //   if (!email && !whatsapp) {
  //     setError('Please enter at least an email or WhatsApp number.');
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     const res = await axios.post('http://localhost:8000/api/waitlist/join', {
  //       email: email || null,
  //       whatsapp: whatsapp || null,
  //     });

  //     axios.defaults.withCredentials = true;
  //     axios.defaults.withXSRFToken = true;

  //     setMessage(res.data.message);
  //     setEmail('');
  //     setWhatsapp('');
  //   } catch (err: any) {
  //     if (err.response?.data?.errors) {
  //       const errorMessages = Object.values(err.response.data.errors).flat().join(', ');
  //       setError(errorMessages);
  //     } else {
  //       setError('Something went wrong. Please try again.');
  //     }
  //   }


  //   // try {
  //   //   const response = await fetch('http://localhost:8000/api/waitlist/join', {
  //   //     method: 'POST',
  //   //     headers: {
  //   //       'Content-Type': 'application/json',
  //   //     },
  //   //     body: JSON.stringify({ contact }),
  //   //   });

  //   //   const data = await response.json();

  //   //   if (response.ok) {
  //   //     setMessage('🎉 You’re on the waitlist!');
  //   //   } else {
  //   //     setMessage(data.message || 'Something went wrong.');
  //   //   }
  //   // } catch (err) {
  //   //   setMessage('Error connecting to server.');
  //   // }

  //   setLoading(false);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await joinWaitlist({ email, whatsapp });
      setMessage(res.message);
    } catch (err: any) {
      setMessage(err.message || 'Something went wrong');
    }
  };

  return (
    <main className="bg-black h-screen overflow-x-hidden"
      onContextMenu={handleContextMenu}
      onClick={handleClick}
    >
      <HeaderWidget />


      <div className='hidden lg:block absolute -bottom-5 lg:bottom-[-50px] -left-10 lg:left-[-50px] bg-opacity-10 h-auto w-auto'>
        <LogoIcon className="size-40 lg:size-[400px] fill-white" type='alone' />
      </div>

      <section className=" text-white  flex flex-col justify-center items-center mx-10 lg:mx-5">

        <div className="w-full">
          <h1 className="flex justify-center items-center mx-auto space-x-2 text-xs md:text-base lg:text-2xl text-center font-bold mb-4">
            {words.map((word, index) => (
              <div
                key={index}
                className={`${activeWord === index
                  ? 'bg-clip-text text-transparent ' + gradients[index % gradients.length]
                  : "text-gray-400"
                  } transition-all duration-1000 ease-in-out`}
              >
                {word}
              </div>
            ))}
          </h1>
          <p className='text-gray-500 font-semibold text-center italic '>
            Your smart accounting padi...
          </p>



          <p className="text-sm md:text-xl lg:text-2xl mb-8 text-center my-10 text-slate-400">
            Join our waiting list to be the first to know when we launch.

          </p>

          <div className='w-full max-w-md mx-auto mt-6'>
            <div className='text-center mb-4 h-10'>

              {message && <div className="text-green-600 mb-4">{message}</div>}
              {/* {error && <div className="text-red-500 mb-4">{error}</div>} */}
            </div>



            <form onSubmit={handleSubmit} className='flex flex-col gap-y-2'>

              <div>
                <input type="text" placeholder="Enter your whatsapp number"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="whatsapp"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}

                />
              </div>


              <div>
                <input type="email" placeholder="Enter your email" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                />
              </div>




              <div className='flex justify-center items-center'>
                <button
                  type="submit"
                  disabled={loading}
                  className={`text-white text-xs md:text-sm lg:text-base font-semibold px-8 py-3 rounded-lg relative hover:scale-[1.1] transition
                focus:outline-none ${gradients[activeWord % gradients.length]}`}>
                  {loading ? 'Submitting...' : 'Join waitlist'}
                  <svg className='size-4 absolute top-1 left-3' xmlns="http://www.w3.org/2000/svg" width="15" height="36" viewBox="0 0 12 16" fill="none" aria-hidden="true">
                    <path className='animate-pulse  fill-white transition-transform group-hover:rotate-[360deg] group-hover:delay-1000' d="M6.65723 6.24707C6.76704 5.91764 7.233 5.91765 7.34281 6.24707L7.98828 8.1835C8.276 9.04666 8.95332 9.72399 9.81648 10.0117L11.7529 10.6572C12.0824 10.767 12.0824 11.233 11.7529 11.3428L9.81649 11.9883C8.95332 12.276 8.27599 12.9533 7.98828 13.8165L7.34281 15.7529C7.233 16.0823 6.76704 16.0823 6.65723 15.7529L6.01173 13.8165C5.72401 12.9533 5.04669 12.276 4.18353 11.9883L2.24707 11.3428C1.91764 11.233 1.91764 10.767 2.24707 10.6572L4.18353 10.0117C5.04669 9.72399 5.72401 9.04667 6.01173 8.18352L6.65723 6.24707Z"></path>
                    <path className='animate-pulse  fill-white transition-transform group-hover:rotate-[360deg] group-hover:delay-[550ms]' d="M2.79434 1.14824C2.86023 0.950586 3.1398 0.950587 3.20569 1.14824L3.59297 2.3101C3.7656 2.828 4.172 3.2344 4.6899 3.40703L5.85177 3.79432C6.04942 3.86021 6.04942 4.13978 5.85177 4.20567L4.6899 4.59296C4.172 4.76559 3.7656 5.17199 3.59297 5.68989L3.20569 6.85176C3.13981 7.04941 2.86023 7.04942 2.79434 6.85176L2.40704 5.68988C2.23441 5.17198 1.82801 4.76559 1.31012 4.59296L0.148241 4.20567C-0.0494137 4.13978 -0.0494138 3.86021 0.148241 3.79432L1.31012 3.40703C1.82802 3.2344 2.23441 2.82801 2.40704 2.31011L2.79434 1.14824Z"></path>
                    <path className='animate-pulse  fill-white transition-transform group-hover:rotate-[360deg] group-hover:delay-[600ms]' d="M9.8629 0.0988265C9.90682 -0.032943 10.0932 -0.0329419 10.1371 0.098828L10.3953 0.873401C10.5104 1.21867 10.7813 1.4896 11.1266 1.60469L11.9012 1.86288C12.0329 1.9068 12.0329 2.09319 11.9012 2.13711L11.1266 2.39531C10.7813 2.51039 10.5104 2.78133 10.3953 3.12659L10.1371 3.90117C10.0932 4.03294 9.90682 4.03294 9.8629 3.90117L9.6047 3.12659C9.48961 2.78132 9.21868 2.5104 8.87342 2.39531L8.09883 2.13711C7.96706 2.09319 7.96706 1.9068 8.09883 1.86288L8.87342 1.60469C9.21868 1.4896 9.48961 1.21867 9.6047 0.873408L9.8629 0.0988265Z"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>

          {/* <div className="flex justify-center">
            <input type="email" placeholder="Enter your email or Whatsapp number"
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full text-xs md:text-sm lg:text-base outline-none px-2 ring-0 border-none max-w-xs py-1 md:p-4 rounded-l-lg text-black focus:outline-none" 
              
              />
            
          </div> */}


        </div>
        <div className={` ${isFooterHidden ? 'opacity-0 invisible' : 'opacity-100 visible'}}
         w-full absolute bottom-4 lg:bottom-[100px] gap-y-2 justify-center items-center `}>

          <Swiper
            spaceBetween={5}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className='shadow-md rounded-md'
          >

            <SwiperSlide>

              <div className='w-full flex justify-center text-center items-center h-[20vh]'>
                <button className='text-xs sm:text-sm font-semibold md:text-base outline-none flex gap-x-2 items-center  bg-blue-500/20 rounded-full py-1 cursor-pointer hover:bg-blue-500/25 transition-all px-4 border border-blue-500 text-blue-400'>

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-[1rem] fill-blue-500">
                    <path d="M7.5 5C6.12 5 5 6.12 5 7.5L5 8L5 40L5 40.5C5 41.88 6.12 43 7.5 43L8 43L21.519531 43C20.849531 42.13 20.380391 41.11 20.150391 40L11 40C11 38.343 9.657 37 8 37L8 11C9.657 11 11 9.657 11 8L20 8C20 9.657 21.343 11 23 11L23 14.519531C23.87 13.849531 24.89 13.380391 26 13.150391L26 8L26 7.5C26 6.12 24.88 5 23.5 5L23 5L8 5L7.5 5 z M 15.5 11.5 A 2 2 0 0 0 15.5 15.5 A 2 2 0 0 0 15.5 11.5 z M 27.5 16C25.032499 16 23 18.032499 23 20.5L23 38.5C23 40.967501 25.032499 43 27.5 43L39.5 43C41.967501 43 44 40.967501 44 38.5L44 20.5C44 18.032499 41.967501 16 39.5 16L27.5 16 z M 15.5 19C12.46 19 10 21.24 10 24C10 26.76 12.46 29 15.5 29C17.36 29 19.01 28.159141 20 26.869141L20 21.130859C19.01 19.840859 17.36 19 15.5 19 z M 27.5 19L34 19L34 40L27.5 40C26.653501 40 26 39.346499 26 38.5L26 20.5C26 19.653501 26.653501 19 27.5 19 z M 37 19L39.5 19C40.346499 19 41 19.653501 41 20.5L41 38.5C41 39.346499 40.346499 40 39.5 40L37 40L37 19 z M 15.5 22C16.86 22 18 22.92 18 24C18 25.08 16.86 26 15.5 26C14.14 26 13 25.08 13 24C13 22.92 14.14 22 15.5 22 z M 15.5 32.5 A 2 2 0 0 0 15.5 36.5 A 2 2 0 0 0 15.5 32.5 z" />
                  </svg>

                  TRACK YOUR EXPENSES AND SPENDINGS
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-[1rem] text-blue-500" role="img"><g id="arrow-right-outline-icon"><path id="Icon" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12H19M19 12L12 5M19 12L12 19"></path></g></svg>
                </button>
              </div>

            </SwiperSlide>

            <SwiperSlide>

              <div className='w-full flex justify-center text-center items-center h-[20vh]'>
                <button className='text-xs sm:text-sm font-semibold md:text-base outline-none flex gap-x-2 items-center  bg-emerald-500/20 rounded-full py-1 cursor-pointer hover:bg-emerald-500/25 transition-all px-4 border border-emerald-500 text-emerald-400'>

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-[1rem] fill-emerald-500">
                    <path d="M11.5 4C7.4 4 4 7.4 4 11.5C4 15.6 7.4 19 11.5 19C15.6 19 19 15.6 19 11.5C19 7.4 15.6 4 11.5 4 z M 39.960938 5.9804688 A 2.0002 2.0002 0 0 0 39.740234 6L32 6 A 2.0002 2.0002 0 1 0 32 10L35.171875 10L30.171875 15L27 15 A 2.0002 2.0002 0 0 0 25.285156 15.970703L22.867188 20L19 20 A 2.0002 2.0002 0 0 0 17.285156 20.970703L14.867188 25L11 25 A 2.0002 2.0002 0 0 0 9.2851562 25.970703L6.2851562 30.970703 A 2.0002 2.0002 0 1 0 9.7148438 33.029297L12.132812 29L16 29 A 2.0002 2.0002 0 0 0 17.714844 28.029297L20.132812 24L24 24 A 2.0002 2.0002 0 0 0 25.714844 23.029297L28.132812 19L31 19 A 2.0002 2.0002 0 0 0 32.414062 18.414062L38 12.828125L38 16 A 2.0002 2.0002 0 1 0 42 16L42 8.2441406 A 2.0002 2.0002 0 0 0 39.960938 5.9804688 z M 12.025391 6.9609375C12.250391 6.95625 12.474219 7.0492188 12.699219 7.1992188C12.899219 7.3992188 13 7.7 13 8L13 15C13 15.6 12.6 16 12 16C11.4 16 11 15.6 11 15L11 9.3007812L10.199219 9.5C9.6992188 9.6 9.2 9.2992188 9 8.6992188C8.9 8.1992188 9.2007812 7.7 9.8007812 7.5L11.800781 7C11.875781 6.975 11.950391 6.9625 12.025391 6.9609375 z M 39.970703 20.972656 A 2.0002 2.0002 0 0 0 38 23L38 40 A 2.0002 2.0002 0 1 0 42 40L42 23 A 2.0002 2.0002 0 0 0 39.970703 20.972656 z M 31.970703 22.972656 A 2.0002 2.0002 0 0 0 30 25L30 40 A 2.0002 2.0002 0 1 0 34 40L34 25 A 2.0002 2.0002 0 0 0 31.970703 22.972656 z M 23.970703 26.972656 A 2.0002 2.0002 0 0 0 22 29L22 40 A 2.0002 2.0002 0 1 0 26 40L26 29 A 2.0002 2.0002 0 0 0 23.970703 26.972656 z M 15.970703 31.972656 A 2.0002 2.0002 0 0 0 14 34L14 40 A 2.0002 2.0002 0 1 0 18 40L18 34 A 2.0002 2.0002 0 0 0 15.970703 31.972656 z M 7.9707031 36.972656 A 2.0002 2.0002 0 0 0 6 39L6 40 A 2.0002 2.0002 0 1 0 10 40L10 39 A 2.0002 2.0002 0 0 0 7.9707031 36.972656 z" />
                  </svg>

                  TRACK YOUR SALES

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-[1rem] text-emerald-500" role="img"><g id="arrow-right-outline-icon"><path id="Icon" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12H19M19 12L12 5M19 12L12 19"></path></g></svg>
                </button>
              </div>

            </SwiperSlide>


            <SwiperSlide>

              <div className='w-full flex justify-center text-center items-center h-[20vh]'>
                <button className='text-xs sm:text-sm font-semibold md:text-base outline-none flex gap-x-2 items-center  bg-rose-500/20 rounded-full py-1 cursor-pointer hover:bg-rose-500/25 transition-all px-4 border border-rose-500 text-rose-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-[1rem] fill-rose-500">
                    <path d="M9.5273438 5 A 1.50015 1.50015 0 0 0 8 6.5L8 37.5C8 40.519774 10.480226 43 13.5 43L34.5 43C37.519774 43 40 40.519774 40 37.5L40 6.5 A 1.50015 1.50015 0 0 0 37.890625 5.1289062L33.96875 6.8730469L29.556641 5.1074219 A 1.50015 1.50015 0 0 0 28.443359 5.1074219L24 6.8847656L19.556641 5.1074219 A 1.50015 1.50015 0 0 0 18.443359 5.1074219L14.03125 6.8730469L10.109375 5.1289062 A 1.50015 1.50015 0 0 0 9.5273438 5 z M 19 8.1152344L23.443359 9.8925781 A 1.50015 1.50015 0 0 0 24.556641 9.8925781L29 8.1152344L33.443359 9.8925781 A 1.50015 1.50015 0 0 0 34.609375 9.8710938L37 8.8085938L37 37.5C37 38.898226 35.898226 40 34.5 40L13.5 40C12.101774 40 11 38.898226 11 37.5L11 8.8085938L13.390625 9.8710938 A 1.50015 1.50015 0 0 0 14.556641 9.8925781L19 8.1152344 z M 15.5 17 A 1.50015 1.50015 0 1 0 15.5 20L32.5 20 A 1.50015 1.50015 0 1 0 32.5 17L15.5 17 z M 15.5 26 A 1.50015 1.50015 0 1 0 15.5 29L24.5 29 A 1.50015 1.50015 0 1 0 24.5 26L15.5 26 z M 30.5 26 A 1.50015 1.50015 0 1 0 30.5 29L32.5 29 A 1.50015 1.50015 0 1 0 32.5 26L30.5 26 z M 15.5 32 A 1.50015 1.50015 0 1 0 15.5 35L24.5 35 A 1.50015 1.50015 0 1 0 24.5 32L15.5 32 z M 30.5 32 A 1.50015 1.50015 0 1 0 30.5 35L32.5 35 A 1.50015 1.50015 0 1 0 32.5 32L30.5 32 z" />
                  </svg>

                  GENERATE CUSTOMIZED DIGITAL RECEIPTS
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-[1rem] text-rose-500" role="img"><g id="arrow-right-outline-icon"><path id="Icon" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12H19M19 12L12 5M19 12L12 19"></path></g></svg>
                </button>
              </div>

            </SwiperSlide>


            <SwiperSlide>

              <div className='w-full flex justify-center text-center items-center h-[20vh]'>
                <button className='text-xs sm:text-sm font-semibold md:text-base outline-none flex gap-x-2 items-center  bg-teal-500/20 rounded-full py-1 cursor-pointer hover:bg-teal-500/25 transition-all px-4 border border-teal-500 text-teal-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-[1rem] fill-teal-500">
                    <path d="M3.5 6 A 1.50015 1.50015 0 1 0 3.5 9L6.2558594 9C6.9837923 9 7.5905865 9.5029243 7.7285156 10.21875L8.0273438 11.78125L11.251953 28.716797C11.835068 31.772321 14.527135 34 17.638672 34L36.361328 34C39.472865 34 42.166064 31.773177 42.748047 28.716797L45.972656 11.78125 A 1.50015 1.50015 0 0 0 44.5 10L10.740234 10L10.675781 9.6582031C10.272657 7.5455321 8.4069705 6 6.2558594 6L3.5 6 z M 11.3125 13L42.6875 13L39.800781 28.15625C39.484764 29.81587 38.051791 31 36.361328 31L17.638672 31C15.948808 31 14.516781 29.8158 14.199219 28.15625L14.199219 28.154297L11.3125 13 z M 23.5 16 A 1.50015 1.50015 0 1 0 23.5 19L31.5 19 A 1.50015 1.50015 0 1 0 31.5 16L23.5 16 z M 20 36 A 3 3 0 0 0 20 42 A 3 3 0 0 0 20 36 z M 34 36 A 3 3 0 0 0 34 42 A 3 3 0 0 0 34 36 z" />
                  </svg>

                  TRACK YOUR STOCKS AND INVENTORIES
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-[1rem] text-teal-500" role="img"><g id="arrow-right-outline-icon"><path id="Icon" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12H19M19 12L12 5M19 12L12 19"></path></g></svg>
                </button>
              </div>

            </SwiperSlide>



            <SwiperSlide>

              <div className='w-full flex justify-center text-center items-center h-[20vh]'>
                <button className='text-xs sm:text-sm font-semibold md:text-base outline-none flex gap-x-2 items-center  bg-amber-500/20 rounded-full py-1 cursor-pointer hover:bg-amber-500/25 transition-all px-4 border border-amber-500 text-amber-400'>


                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-[1rem] fill-amber-500">
                    <path d="M24 3.9980469C12.972292 3.9980469 4 12.970339 4 23.998047C4 27.273363 4.8627078 30.334853 6.2617188 33.064453L4.09375 40.826172C3.5887973 42.629575 5.3719261 44.41261 7.1757812 43.908203L14.943359 41.740234C17.670736 43.136312 20.727751 43.998047 24 43.998047C35.027708 43.998047 44 35.025755 44 23.998047C44 12.970339 35.027708 3.9980469 24 3.9980469 z M 24 6.9980469C33.406292 6.9980469 41 14.591755 41 23.998047C41 33.404339 33.406292 40.998047 24 40.998047C20.998416 40.998047 18.190601 40.217527 15.742188 38.853516 A 1.50015 1.50015 0 0 0 14.609375 38.71875L7.2226562 40.779297L9.2851562 33.396484 A 1.50015 1.50015 0 0 0 9.1503906 32.261719C7.7836522 29.811523 7 27.002565 7 23.998047C7 14.591755 14.593708 6.9980469 24 6.9980469 z M 24 12C22.125 12 20.528815 12.757133 19.503906 13.910156C18.478997 15.063179 18 16.541667 18 18C18 19.458333 18.478997 20.936821 19.503906 22.089844C20.528815 23.242867 22.125 24 24 24C25.875 24 27.471185 23.242867 28.496094 22.089844C29.521003 20.936821 30 19.458333 30 18C30 16.541667 29.521003 15.063179 28.496094 13.910156C27.471185 12.757133 25.875 12 24 12 z M 24 15C25.124999 15 25.778816 15.367867 26.253906 15.902344C26.728997 16.436821 27 17.208333 27 18C27 18.791667 26.728997 19.563179 26.253906 20.097656C25.778816 20.632133 25.124999 21 24 21C22.875001 21 22.221184 20.632133 21.746094 20.097656C21.271003 19.563179 21 18.791667 21 18C21 17.208333 21.271003 16.436821 21.746094 15.902344C22.221184 15.367867 22.875001 15 24 15 z M 18.5 26C16.581818 26 15 27.581818 15 29.5L15 30.5C15 30.957647 15.05387 31.394774 15.152344 31.802734 A 1.50015 1.50015 0 0 0 15.554688 32.515625C17.721713 34.659841 20.71375 36 24 36C27.28625 36 30.278287 34.659841 32.445312 32.515625 A 1.50015 1.50015 0 0 0 32.847656 31.802734C32.946129 31.394774 33 30.957647 33 30.5L33 29.5C33 27.581818 31.418182 26 29.5 26L18.5 26 z M 18.5 29L29.5 29C29.781818 29 30 29.218182 30 29.5L30 30.5C30 30.54361 29.988288 30.575109 29.986328 30.617188C28.386149 32.061892 26.322236 33 24 33C21.677764 33 19.613849 32.061892 18.013672 30.617188C18.011714 30.575114 18 30.54361 18 30.5L18 29.5C18 29.218182 18.218182 29 18.5 29 z" />
                  </svg>

                  CHAT WITH YOUR STAFF(S)
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-[1rem] text-amber-500" role="img"><g id="arrow-right-outline-icon"><path id="Icon" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12H19M19 12L12 5M19 12L12 19"></path></g></svg>
                </button>
              </div>

            </SwiperSlide>


            <SwiperSlide>

              <div className='w-full flex justify-center text-center items-center h-[20vh]'>
                <button className='text-xs  sm:text-sm font-semibold md:text-base outline-none flex gap-x-2 items-center  bg-pink-500/20 rounded-full py-1 cursor-pointer hover:bg-pink-500/25 transition-all px-4 border border-pink-500 text-pink-400'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="size-[1rem] fill-pink-500">
                    <path d="M3.4667969 3.9863281 A 1.50015 1.50015 0 0 0 2.5625 6.671875L7.5625 10.671875 A 1.5007322 1.5007322 0 1 0 9.4375 8.328125L4.4375 4.328125 A 1.50015 1.50015 0 0 0 3.4667969 3.9863281 z M 44.488281 3.9863281 A 1.50015 1.50015 0 0 0 43.5625 4.328125L38.5625 8.328125 A 1.5007322 1.5007322 0 1 0 40.4375 10.671875L45.4375 6.671875 A 1.50015 1.50015 0 0 0 44.488281 3.9863281 z M 24 4C15.733378 4 9 10.733378 9 19L9 27.185547L6.2382812 33.498047C5.5384109 35.098789 6.7819446 37 8.5292969 37L18 37C18 40.295865 20.704135 43 24 43C27.295865 43 30 40.295865 30 37L39.470703 37C41.218055 37 42.461589 35.098789 41.761719 33.498047L39 27.185547L39 19C39 10.733378 32.266622 4 24 4 z M 24 7C30.645378 7 36 12.354622 36 19L36 27.5 A 1.50015 1.50015 0 0 0 36.125 28.101562L38.707031 34L24 34L9.2929688 34L11.875 28.101562 A 1.50015 1.50015 0 0 0 12 27.5L12 19C12 12.354622 17.354622 7 24 7 z M 1.5 16 A 1.50015 1.50015 0 1 0 1.5 19L5.5 19 A 1.50015 1.50015 0 1 0 5.5 16L1.5 16 z M 42.5 16 A 1.50015 1.50015 0 1 0 42.5 19L46.5 19 A 1.50015 1.50015 0 1 0 46.5 16L42.5 16 z M 21 37L24 37L27 37C27 38.674135 25.674135 40 24 40C22.325865 40 21 38.674135 21 37 z" />
                  </svg>

                  SMART NOTIFICATION ON YOUR BUSINESS ACTIVITIES
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-[1rem] text-pink-500" role="img"><g id="arrow-right-outline-icon"><path id="Icon" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12H19M19 12L12 5M19 12L12 19"></path></g></svg>
                </button>
              </div>

            </SwiperSlide>



          </Swiper>
        </div>

      </section>

      <ContextMenuWidget
        items={contextMenuItems}
        visible={contextMenuVisible}
        position={contextMenuPosition}
      />
    </main >
  );
}
