import React from "react";
import { Input, Button, Card, CardBody } from "@heroui/react";

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5 py-10">
      <Card className="w-full max-w-xl shadow-lg">
        <CardBody className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#071952]">
            My Profile
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-600 font-medium">Full Name</label>
              <Input placeholder="Enter your name" />
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-medium">Email</label>
              <Input type="email" placeholder="Enter your email" />
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-medium">Phone</label>
              <Input placeholder="Enter your phone number" />
            </div>

            <div>
              <label className="block mb-1 text-gray-600 font-medium">Password</label>
              <Input type="password" placeholder="New password" />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#071952] text-white py-3 rounded-md hover:bg-[#088395] transition"
            >
              Save Changes
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
