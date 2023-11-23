import arrow from "../assets/downArrow.png";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../context/reducer';

const UserNav = ({ name }) => {
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="relative">
      <div className="shadow-lg flex justify-center items-center w-auto px-4 rounded-lg hover:bg-[#f9fafb] cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="flex">
          <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            {!!name.split(' ') ? name.split(' ')[0] : name}
          </div>
          <img
            src={arrow}
            alt="arrow"
            className="object-contain w-4 h-auto ml-3"
          />
        </div>
      </div>

      <div className={`absolute -left-3 z-10 ${hover ? 'flex' : 'hidden'} w-screen max-w-max -translate-x-1/2 px-4`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className=" flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-4">
            <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
              <div>
                <div className="font-semibold text-red-600" onClick={()=>dispatch(signOut())}>
                  Log out
                  <span className="absolute inset-0"></span>
                </div>
                <p className="mt-1 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNav;
