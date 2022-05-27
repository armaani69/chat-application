import React from 'react';
import { randomAvatarGenerator, modalStyles } from '../common/helper';
import Modal from 'react-modal';
import closeButton from '../images/svg/close-modal.svg';
import addContact from '../images/svg/add_contact.svg';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChatList = ({
  activeUsers,
  messages,
}: {
  activeUsers: number[];
  messages: number[];
}) => {
  const baseUrl: string = 'http://localhost:8080';

  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);
  const [contactData, setContactData] = React.useState<any>();
  const [contact, setContact] = React.useState<string>('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    console.log('contacts requested');
    axios
      .get(`${baseUrl}/getContacts`)
      .then((response) => setContactData(response.data));
  }, []);

  const createContact = async () => {
    try {
      axios.post(`${baseUrl}/createContact`, {
        contactName: contact,
        contactImageString: Math.random(),
      });
      contactSuccessToast();
    } catch (err) {
      contactErrorToast();
      console.log(err);
    }
  };

  const contactSuccessToast = () => {
    console.log('Success Toast called!');
    toast.success('Contact Successfully Created!');
  };

  const handleContactInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setContact(e.currentTarget.value);
  };

  const contactErrorToast = () => toast.error('Error in Creating Contact');

  return (
    <div>
      <div className='px-12 py-5 bg-slate-200'>
        <div className='p-8 bg-white font-workSans rounded-modalRadius shadow-lg'>
          <div className='flex flex-col justify-center items-center'>
            <h3 className='font-semibold text-3xl py-11 text-blue-500'>
              Message
            </h3>
            <img
              src={addContact}
              alt='add-contact'
              className='absolute left-1/4 top-24'
              style={{ width: '45px' }}
              onClick={openModal}
              data-tip='Create a contact'
              data-effect='solid'
            />
            <ReactTooltip
              arrowColor='green'
              className='px-1 py-0 bg-green-700 text-white text-base font-normal font-workSans '
            />

            <Modal isOpen={modalIsOpen} style={modalStyles}>
              <div>
                <form
                  action='contact'
                  className='flex flex-col justify-start items-start'
                >
                  <div className='flex justify-between w-full'>
                    <label
                      className='font-medium font-workSans text-2xl text-blue-500'
                      htmlFor='contact'
                    >
                      Would you like to save a contact?
                    </label>
                    <img
                      src={closeButton}
                      style={{ width: '35px' }}
                      alt='close modal button'
                      onClick={closeModal}
                      className='p-1 rounded hover:shadow-inner hover:shadow-gray-400'
                    />
                  </div>

                  <input
                    className='w-3/4 shadow-lg font-workSans text-lg bg-gray-100 outline-none font-light border rounded rounded-xl px-5 py-2 mt-4 placeholder:text-gray-700 placeholder:font-workSans text-gray-700'
                    type='text'
                    placeholder='Input the contact name'
                    name='contact'
                    value={contact}
                    onChange={(e) => handleContactInput(e)}
                  />
                  <button
                    onClick={createContact}
                    className='border-black font-workSans border font-light text-white px-3 py-1 bg-black rounded hover:text-black hover:bg-white mt-6'
                  >
                    Save Contact
                  </button>
                </form>
              </div>
            </Modal>

            <form
              action=''
              className='w-full flex flex-col justify-center items-center'
            >
              <input
                className='w-[95%] px-8 py-4 rounded rounded-xl bg-gray-100 text-xl font-light shadow-lg outline-none text-gray-700 placeholder-gray-700'
                type='text'
                placeholder='Search Your Contacts'
              />
            </form>
          </div>

          <div className='mt-6 w-[97%]'>
            <h3 className='pl-5 text-2xl mb-3 font-semibold text-blue-500'>
              Active
              <span
                className={
                  activeUsers.length > 0
                    ? 'ml-2 font-medium text-green-600'
                    : 'ml-2 text-black'
                }
              >
                ({activeUsers.length})
              </span>
            </h3>
            <div className='flex flex-shrink-0 overflow-x-auto w-full'>
              {activeUsers.map((_, i: number) => (
                <div key={i}>
                  <div className='bg-white min-w-circle h-20 rounded-full flex justify-center items-center shadow-xl border-2 border-green-500 p-1 mx-3'>
                    <img
                      className='rounded-full bg-blue-100'
                      src={randomAvatarGenerator()}
                      alt=''
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='mt-6'>
            <h3 className='pl-5 text-2xl mb-3 font-semibold text-blue-500'>
              Messages
              <span
                className={
                  messages.length > 0
                    ? 'ml-2 font-medium text-blue-500'
                    : 'ml-2 text-black'
                }
              >
                ({contactData?.length})
              </span>
            </h3>
            <div className='flex flex-col w-full overflow-y-auto h-128'>
              {contactData?.reverse().map((data: any) => (
                <div key={data?.id}>
                  <div className='flex bg-blue-200 mx-4 rounded rounded-3xl items-center mb-4 shadow-lg min-h-chatList'>
                    <div className='bg-white ml-4 min-w-circle h-20 rounded-full flex justify-center items-center border-2 border-blue-500 p-1'>
                      <img
                        className='rounded-full bg-lime-200'
                        src={`https://avatars.dicebear.com/api/avataaars/${data?.contactImageString}.svg`}
                        alt='avatar'
                      />
                    </div>
                    <div className='p-5'>
                      <h4 className='capitalize'>{data?.contactName}</h4>
                      <p className='font-light truncate w-80'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Lorem ipsum, dolor sit amet
                        consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ChatList;
