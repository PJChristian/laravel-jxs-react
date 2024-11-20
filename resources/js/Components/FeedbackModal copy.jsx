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
                        <svg
                            className="animate-spin h-5 w-5 mr-3 text-white "
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            ></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                            ></path>
                        </svg>
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
