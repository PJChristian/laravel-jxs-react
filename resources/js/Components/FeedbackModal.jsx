import React, {useState} from 'react';
import TextInput from '@/Components/TextInput';
import { useForm, Head } from '@inertiajs/react';
import Modal from '@/Components/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FeedbackModal = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        feedback: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    //Modal
    const [isModalOpen, setIsModalOpen] = useState(true);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
     


    const submit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        post(route('feedback.store'), 
            { onSuccess: () => {
                setIsSubmitting(false);
                setIsModalOpen(false);
                reset();
                toast.success("Message Submitted successfully");
                }
            },
            { onError : () => {
                toast.error("Form not Submitted");
            }
        });
    };
  return (
    <Modal show={isModalOpen} onClose={closeModal} maxWidth="lg">

    <div className="p-6">
        <h2 className="text-lg font-bold">Magkipag-ugnayan sa amin</h2>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={submit}>
            <div>
                <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
                >
                Email address
                </label>
                <div className="mt-2">
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    autoComplete="username"
                    onChange={(e) => setData('email', e.target.value)}
                    required
                />
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                <label
                    htmlFor="feedback"
                    className="block text-sm/6 font-medium text-gray-900"
                >
                    Feedback
                </label>
                </div>
                <div className="mt-2">
                <textarea
                    value={data.feedback}
                    placeholder="Ano ang iyong mensahe?"
                    className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    onChange={e => setData('feedback', e.target.value)}
                ></textarea>
                </div>
            </div>
            <div>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <div role="status">
                            <svg aria-hidden="true" className="h-5 w-5 mr-3 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : null}
                    {isSubmitting ? 'Submitting...' : 'Isumite ang Mensahe'}
                </button>
            </div>
            </form>
        </div>
        </div>

    </div>                                            
    </Modal>                                      
                                            
  );
};

export default FeedbackModal;
