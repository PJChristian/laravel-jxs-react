import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';


//https://fkhadra.github.io/react-toastify/introduction/
//https://www.chartjs.org/docs/latest/getting-started/
//https://react-data-table-component.netlify.app/?path=/docs/getting-started-installation--docs
//https://medium.com/@gtpndn/laravel-11-react-inertia-crud-modal-tutorial-in-simple-steps-63aee0f4e2dd
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Share from '@/Components/Share';
import Post from '@/Components/Post';


export default function Index({ auth, shares }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    }); 
 
    const submit = (e) => {
        e.preventDefault();
        post(route('share.store'), 
            { onSuccess: () => {
                reset();
                toast.success("Form Submitted successfully");
                }
            },
            { onError : () => {
                toast.error("Form not Submitted");
            }
        });
    };

    const clickme = (e) => {
        alert("Connected");
    }


 
    return (
        <AuthenticatedLayout>
            <Head title="Share" />
            <ToastContainer
                position="bottom-left"
            />

                                            

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Share</PrimaryButton>
                </form>
                

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {shares.map(share =>
                        <Share key={share.id} share={share} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}