import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useForm, Head } from '@inertiajs/react';
import React, {useState, useEffect} from 'react';
import $ from 'jquery';

//https://medium.com/@gtpndn/laravel-11-react-inertia-crud-modal-tutorial-in-simple-steps-63aee0f4e2dd


//https://fkhadra.github.io/react-toastify/introduction/
//https://react.dev/reference/react/Suspense
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Chart
//https://www.chartjs.org/docs/latest/getting-started/
import BarChart from '@/Components/BarChart';
import PieChart from '@/Components/PieChart';

//DataTables
//https://react-data-table-component.netlify.app/?path=/docs/getting-started-installation--docs
//https://datatables.net/manual/react
//https://preline.co/docs/datatables.html
//import DataList from '@/Components/DataList';

//https://transform.tools/html-to-jsx


//Modal
import Modal from '@/Components/Modal';
import FeedbackModal from '@/Components/FeedbackModal';


import DataList from '@/Components/DataList';


export default function Dashboard() { 
    const [data, setData] = useState([]); //State for general data
    
    const [account, setAccount] = useState([]); //State for specific data - account
    const [count, setCount] = useState([]); //State for specific data - count account

    const [user, setUser] = useState([]);

    useEffect(() => {
        // Start loading
        setLoading(true);

        // Fetch data from Laravel API
        
        axios.get('/user/fetchdata')
        .then(response => {
            setUser(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error: ', error);
            setLoading(false);
        })
    }, []);



    const [showFeedback, setshowFeedback] = useState(false); // Manage visibility

    const openFeedbackModal = () => {
        setshowFeedback(true); // Show the component on button click
    };
        axios.get('/account')
          .then(response => {
            setAccount(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
        });

        axios.get('/data/countuser')
          .then(response => {
            setCount(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
        });

          useEffect(() => {
            // Start loading
            setLoading(true);
    
            // Fetch data from Laravel API
            axios.get('/data/fetchdata')
              .then(response => {
                setData(response.data);
                setLoading(false); // Stop loading once data is fetched
              })
              .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false); // Stop loading once data is fetched
              });
        }, []);

    const [loading, setLoading] = useState(true); // Add loading state
   

    const [loadings, setLoadings] = React.useState(false);

    return (
        
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <ToastContainer
                position="bottom-left"
            />             
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <main className="h-full overflow-y-auto">
                                <div className="container px-6 mx-auto grid">
                                    <a
                                    className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple"
                                    href="https://github.com/estevanmaito/windmill-dashboard"
                                    >
                                    <div className="flex items-center">
                                        <svg
                                        className="w-5 h-5 mr-2"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        ></path>
                                        </svg>
                                        <span>Star this project on GitHub</span>
                                    </div>
                                    <span>View more →</span>
                                    </a>
                                    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                                    <div
                                        className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                                    >
                                        <div
                                        className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"
                                        >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                            d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                                            ></path>
                                        </svg>
                                        </div>
 
                                        <div>
                                        <p
                                            className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                        >
                                            Total clients
                                        </p>
                                        <p
                                            className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                        >
                                            {loading ? (
                                                // Show loading message while data is being fetched
                                                <p>Loading...</p>
                                            ) : (
                                                // Display the count of items once data is fetched
                                                <p>{data.length}</p>
                                            )}
                                        </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                                    >
                                        <div
                                        className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500"
                                        >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                            fillRule="evenodd"
                                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        </div>
                                        <div>
                                        <p
                                            className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                        >
                                            Account balance
                                        </p>
                                        <p
                                            className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                        >
                                         { count }
                                        </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                                    >
                                        <div
                                        className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500"
                                        >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                            d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                                            ></path>
                                        </svg>
                                        </div>
                                        <div>
                                        <p
                                            className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                        >
                                            New sales
                                        </p>
                                        <p
                                            className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                        >
                                            376
                                        </p>
                                        </div>
                                    </div>

                                    <div
                                        className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                                    >
                                        <div
                                        className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500"
                                        >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                            fillRule="evenodd"
                                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                            clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        </div>
                                        <div>
                                        <p
                                            className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
                                        >
                                            Pending contacts
                                        </p>
                                        <p
                                            className="text-lg font-semibold text-gray-700 dark:text-gray-200"
                                        >
                                            35
                                        </p>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="flex-1 p-6">
                                        <div className="flex items-center justify-between">
                                            <h1 className="text-2xl font-semibold">Data Table</h1>
                                            <button onClick={openFeedbackModal}
                                            className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                            >
                                                Create an Account
                                                <span className="ml-2" aria-hidden="true">+</span>
                                            </button>
                                            
                                            {showFeedback && <FeedbackModal />}
                                        </div>
                                    </div>
                                    
                                    <DataList/>
                                    <h2
                                    className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"
                                    >
                                    Charts
                                    </h2>
                                    <div className="grid gap-6 mb-8 md:grid-cols-2">
                                    <div
                                        className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                                    >
                                        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                                        Revenue
                                        </h4>
                                        <BarChart/>
                                        <div
                                        className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
                                        >
                                        <div className="flex items-center">
                                            <span
                                            className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"
                                            ></span>
                                            <span>Shirts</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span
                                            className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"
                                            ></span>
                                            <span>Shoes</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span
                                            className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
                                            ></span>
                                            <span>Bags</span>
                                        </div>
                                        </div>
                                    </div>
                                    <div
                                        className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800"
                                    >
                                        <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
                                        Traffic
                                        </h4>
                                        <PieChart/>
                                        <div
                                        className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"
                                        >
                                        <div className="flex items-center">
                                            <span
                                            className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"
                                            ></span>
                                            <span>Organic</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span
                                            className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"
                                            ></span>
                                            <span>Paid</span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </main>
                        
                            <div>
                            <h2>Data from Laravel</h2>
                            <h2>Data from Laravel - account</h2>
                            {loading ? (
                                <p>Loading...</p>
                            ) : (


                                <ul>
                                {data.map((item, index) => (
                                <li key={index}>
                                    {item.id} - {item.name}
                                </li>
                                ))}
                                </ul>

                            )}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
}
