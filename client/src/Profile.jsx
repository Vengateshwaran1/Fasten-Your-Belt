import { useState } from 'react';
import Layout from './Components/Layout';

const Profile = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center p-10">
        <div className="relative z-10 bg-white backdrop-blur-[2px] bg-opacity-20 p-8 rounded-lg w-full max-w-md mx-4 sm:mx-8 md:mx-12 lg:mx-0">
          <div className="text-3xl font-light text-black-400 text-left flex justify-center w-full mb-4">
            <span className="text-primary font-bold">PROFILE</span>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.PPbvizK9tByLNQ8V7lrEpQHaHa&pid=Api&P=0&h=180"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
          </div>

          <div className="flex flex-col items-center gap-y-4 mt-8 mb-4">
            <h1 className="text-2xl font-bold text-primary">NAME</h1>
            <h1 className="text-2xl font-bold text-primary">PHONE NO</h1>
            <h1 className="text-2xl font-bold text-primary">EMAIL ADDRESS</h1>
            <button
              onClick={() => setShowPasswordForm(!showPasswordForm)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              {showPasswordForm ? 'Cancel' : 'Change Password'}
            </button>
          </div>

          {showPasswordForm && (
            <form onSubmit={handleChangePassword} className="mt-4 space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded"
              >
                Change Password
              </button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
