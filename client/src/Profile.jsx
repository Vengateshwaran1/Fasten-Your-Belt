import { useState, useRef } from 'react';
import Layout from './Components/Layout';
import prof from '../src/assets/prof.png';
import hide from '../src/assets/hide.png'
import show from '../src/assets/show.png'

const Profile = () => {
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePic, setProfilePic] = useState(prof); 
  const [originalProfilePic, setOriginalProfilePic] = useState(prof); 
  const fileInputRef = useRef(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [name, setName] = useState('NAME');
  const [phone, setPhone] = useState('PHONE NO');
  const [isNameEditing, setIsNameEditing] = useState(false);
  const [isPhoneEditing, setIsPhoneEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    console.log('Changing password...');
    setShowPasswordForm(false);
    setHasChanges(false);
  };

  const handleProfilePicClick = () => {
    fileInputRef.current.click();
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
      setHasChanges(true);
    }
  };

  const handleSaveChanges = () => {
    setOriginalProfilePic(profilePic);
    setHasChanges(false);
  };

  const handleNameEdit = () => {
    setIsNameEditing(true);
  };

  const handlePhoneEdit = () => {
    setIsPhoneEditing(true);
  };

  const handleNameSave = () => {
    setIsNameEditing(false);
    setHasChanges(true);
  };

  const handlePhoneSave = () => {
    setIsPhoneEditing(false);
    setHasChanges(true);
  }

  return (
    <Layout>
      <div className="flex justify-center items-center">
        <div className="relative z-10 bg-white backdrop-blur-[2px] bg-opacity-20 p-8 rounded-lg w-full max-w-md mx-4 sm:mx-8 md:mx-12 lg:mx-0">
          <div className='profile-pic' onClick={handleProfilePicClick}>
            <img src={profilePic} alt="" className='w-20 h-25 cursor-pointer' />
          </div>
          <div className="flex flex-col items-center gap-y-4">
            {isNameEditing ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={handleNameSave}
                className="text-2xl font-bold text-primary rounded-lg"
              />
            ) : (
              <h1 className="text-2xl font-bold text-primary" onClick={handleNameEdit}>
                {name}
              </h1>
            )}
            {isPhoneEditing ? (
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={handlePhoneSave}
                className="text-2xl font-bold text-primary rounded-lg"
              />
            ) : (
              <h1 className="text-2xl font-bold text-primary" onClick={handlePhoneEdit}>
                {phone}
              </h1>
            )}
            <h1 className="text-2xl font-bold text-primary">EMAIL ADDRESS</h1>
            <button
              onClick={() => setShowPasswordForm(!showPasswordForm)}
              className="bg-primary text-white px-4 py-2 rounded mt-4"
            >
              {showPasswordForm ? 'Cancel' : 'Change Password'}
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
          </div>

          {showPasswordForm && (
            <form onSubmit={handleChangePassword} className="mt-4 space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-white">Current Password</label>
                <div className="relative w-full">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
                  required
                  onChange={(e) => {setCurrentPassword(e.target.value) }}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  <img src={showPassword ? hide : show} alt="Toggle Password Visibility" className="w-6 h-6" />
                </button>
                </div>
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-white">New Password</label>
                <div className="relative w-full">
                <input
                  type={showPassword1 ? "text" : "password"}
                  placeholder="New Password"
                  className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
                  required
                  onChange={(e) => {setNewPassword(e.target.value) }}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                  onClick={togglePasswordVisibility1}
                >
                  <img src={showPassword1 ? hide : show} alt="Toggle Password Visibility" className="w-6 h-6" />
                </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">Confirm New Password</label>
                <div className="relative w-full">
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="text-white p-2 w-full outline-none bg-white backdrop-blur-[3px] bg-opacity-30 rounded-2xl placeholder-white focus:border focus:border-primary"
                  required
                  onChange={(e) => {setCurrentPassword(e.target.value) }}
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                  onClick={togglePasswordVisibility2}
                >
                  <img src={showPassword2 ? hide : show} alt="Toggle Password Visibility" className="w-6 h-6" />
                </button>
                </div>
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded"
              >
                Change Password
              </button>
            </form>
          )}
          <div className='flex justify-center'>
          {hasChanges && (
            <button
              onClick={handleSaveChanges}
              className="bg-primary text-white px-4 py-2 rounded mt-4 hover:bg-gray-800"
            >
              Save Changes
            </button>
          )}
          </div>
          
        </div>
      </div>
    </Layout>
  );
};

export default Profile;