const UserInfo = () => {
  return (
    <div className="flex gap-2 items-center py-8 pl-3 rounded mt-2 bg-pink-800">
      <div className="h-28 w-28 rounded-full bg-red-500"></div>
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-slate-500 text-lg">No Username</h3>
        <p className="font-semibold text-white">0x12345687773bcvc63636366663</p>
        <h5 className="text-slate-500">
          <span>Member since</span> <span>26/01/2023</span>
        </h5>
      </div>
    </div>
  );
};

export default UserInfo;