import { BiUser } from "react-icons/bi";


export const InputsEditProfile = ({ user, handleInputsData }) => {
  return (
    <>
      <div
        className="sm:flex sm:flex-col sm:items-center sm:content-center sm:space-y-0
      flex flex-col items-center content-center space-y-2"
      >
       <div className="relative">
      <input
        name="first_name"
        value={user}
        type="text"
        placeholder="Username"
        className="sm:transition sm:duration-500 sm:hover:opacity-70 sm:bg-newgray sm:my-6 sm:w-80 sm:h-14 sm:rounded-lg sm:border sm:border-teal sm:outline-none sm:indent-8 transition duration-500 hover:opacity-70 bg-newgray my-2 w-80 h-12 rounded-lg border border-teal outline-none indent-8"
        onChange={handleInputsData}
      />
      <div className="sm:absolute sm:top-11 sm:insert-y-0 sm:left-2 sm:align-top absolute top-6 insert-y-0 left-2 align-top">
        <BiUser/>
      </div>
    </div>
      </div>
    </>
  );
};
