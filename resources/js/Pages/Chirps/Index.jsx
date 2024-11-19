import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Chirp from '@/Components/Chirp';
import InputError from '@/Components/InputError';
//import PrimaryButton from '@/Components/PrimaryButton';
import LoadingButton from '@/Components/LoadingButton';
import { useForm, Head } from '@inertiajs/react';

 
//export default function Index({ auth }) {
export default function Index({ auth, chirps,flash}) {
    const [sending, setSending] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
    });

    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success)
        }
        if (flash.message.error) {
            toast.error(flash.message.error);
        }
    }, [flash])
 
    const submit = (e) => {
        e.preventDefault();
        setSending(true);
        post(route('chirps.store'), { 
            onSuccess: () => {
                setSending(false)
                reset();                
            }
        });
        
    };
 
    return (
        <>
            <Head title="Chirps" />
            <ToastContainer />
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <LoadingButton
                    loading={sending}
                    aria-disabled
                    className="mt-4"
                     >
                    Create
                    </LoadingButton>
                </form>

                <div className='mt-6 bg-white shadow-sm rounded-lg divide-y'>
                    {chirps.map(chirp =>
                        <Chirp key={chirp.id} chirp={chirp} />
                    )}
                </div>


            </div>
        </>
    );
}