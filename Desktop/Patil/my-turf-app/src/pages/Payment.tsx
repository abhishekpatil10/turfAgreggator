/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { turfId, turfName, price, sports, turfLocation } = location.state;
    const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed'>('pending');
    const [receipt, setReceipt] = useState<any>(null);

    const handlePayment = async () => {
        try {
            // Here you would integrate with your payment gateway
            // For example, Razorpay, Stripe, etc.
            
            // Mock payment success
            setPaymentStatus('success');
            
            // Generate receipt
            const newReceipt = {
                id: Math.random().toString(36).substr(2, 9),
                date: new Date().toISOString(),
                amount: price,
                turfName,
                turfId,
                status: 'success'
            };
            
            setReceipt(newReceipt);
            localStorage.setItem('lastReceipt', JSON.stringify(newReceipt));
            
        } catch (error) {
            console.error('Payment failed:', error);
            setPaymentStatus('failed');
        }
    };

    const downloadReceipt = () => {
        if (!receipt) return;

        const receiptContent = `
            Turf Booking Receipt
            -------------------
            Receipt ID: ${receipt.id}
            Date: ${new Date(receipt.date).toLocaleString()}
            Turf: ${receipt.turfName}
            Amount: ₹${receipt.amount}
            Status: ${receipt.status}
        `;

        const blob = new Blob([receiptContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `receipt-${receipt.id}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    if (paymentStatus === 'success') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
                <div className="max-w-2xl mx-auto px-6 py-8 pt-32">
                    <div className="bg-white rounded-3xl p-8 shadow-xl">
                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Successful!</h2>
                            <p className="text-gray-600 mb-6">Thank you for your booking at {turfName}</p>
                        </div>

                        {/* Receipt Display */}
                        {receipt && (
                            <div className="border border-gray-200 rounded-xl p-6 mb-8">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Receipt</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Receipt ID</span>
                                        <span className="font-medium">{receipt.id}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Date</span>
                                        <span className="font-medium">{new Date(receipt.date).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Turf</span>
                                        <span className="font-medium">{receipt.turfName}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Amount</span>
                                        <span className="font-medium">₹{receipt.amount}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Status</span>
                                        <span className="font-medium text-green-500">{receipt.status}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={downloadReceipt}
                                className="flex-1 bg-gray-100 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors duration-300"
                            >
                                Download Receipt
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="flex-1 bg-[#727af9] text-white px-6 py-3 rounded-xl hover:bg-[#5457E5] transition-colors duration-300"
                            >
                                Return to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (paymentStatus === 'failed') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
                <div className="max-w-2xl mx-auto px-6 py-8 pt-32">
                    <div className="bg-white rounded-3xl p-8 shadow-xl text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Failed</h2>
                        <p className="text-gray-600 mb-6">There was an error processing your payment. Please try again.</p>
                        <button
                            onClick={() => setPaymentStatus('pending')}
                            className="bg-[#727af9] text-white px-6 py-3 rounded-xl hover:bg-[#5457E5] transition-colors duration-300"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#727af9]/20 to-pink-100/20">
            <div className="max-w-2xl mx-auto px-6 py-8 pt-32">
                <div className="bg-white rounded-3xl p-8 shadow-xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Details</h2>
                    
                    <div className="space-y-6">
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-600">Turf</span>
                            <span className="font-medium">{turfName}, {turfLocation}</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-600">Sports</span>
                            <span className="font-medium">{sports}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                            <span className="text-gray-600">Amount</span>
                            <span className="font-medium">₹{price}</span>
                        </div>

                        <button
                            onClick={handlePayment}
                            className="w-full bg-[#727af9] text-white py-4 rounded-xl hover:bg-[#5457E5] transition-colors duration-300"
                        >
                            Pay Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment; 