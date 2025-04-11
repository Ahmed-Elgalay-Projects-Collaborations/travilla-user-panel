import React, { useState } from "react";
import { Button } from "@heroui/react";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Pay = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handlePayment = () => {
   
    setIsSuccess(true);
    navigate('/')
  };

  return (
    <div className="container mx-auto my-20 px-5 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gradient-to-r from-[#f97171] to-[#fcbf49] text-transparent bg-clip-text">
          Complete Your Payment
        </h2>
        <p className="text-lg text-gray-500 mt-3">
          Secure your booking by completing the payment process.
        </p>
      </div>

      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#1a202c]">Booking Summary</h3>
          <div className="bg-[#f9fafb] p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-[#1a202c]">Tour: Paris City Tour</p>
              <p className="text-xl font-bold text-[#f97171]">$300 / Person</p>
            </div>
            <div className="text-gray-600 mt-2">
              <p><span className="font-semibold">Location:</span> Paris, France</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1a202c]">Card Number</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="1234 5678 9012 3456"
                className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f97171]"
              />
            </div>

            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-[#1a202c]">Cardholder Name</label>
                <input
                  type="text"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  placeholder="John Doe"
                  className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f97171]"
                />
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium text-[#1a202c]">Expiration Date</label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  placeholder="MM/YY"
                  className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f97171]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a202c]">CVV</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                className="mt-2 w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f97171]"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <Button
              className="bg-[#f97171] text-white px-6 py-3 rounded-full hover:bg-[#fcbf49] transition"
              onPress={handlePayment}
            >
              <FaCreditCard className="mr-2" />
              Pay Now
            </Button>
            <Button
              className="bg-gray-300 text-white px-6 py-3 rounded-full hover:bg-gray-400 transition"
              onPress={() => navigate("/")}
            >
              <FaMoneyBillWave className="mr-2" />
              Cancel
            </Button>
          </div>
        </div>
      </div>

      {isSuccess && (
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-bold text-green-600">Payment Successful!</h3>
          <p className="text-lg text-gray-500">Your booking has been confirmed. Thank you for your payment!</p>
        </div>
      )}
    </div>
  );
};

export default Pay;
