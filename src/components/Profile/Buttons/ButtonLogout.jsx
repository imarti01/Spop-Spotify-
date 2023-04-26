export const ButtonLogout = ({ logout }) => {
  return (
    <div>
      <button
        className="sm:bg-cancel sm:hover:opacity-60 sm:transition sm:duration-500 sm:w-60 sm:border-2 sm:border-cancel sm:rounded-lg sm:text-2xl
      bg-cancel hover:opacity-60 transition duration-500 w-60 border-2 border-cancel rounded-lg text-2xl"
        onClick={logout}
      >
        <p className="sm:py-2 sm:px-5 sm:text-white py-2 px-5 text-white">
          Log out
        </p>
      </button>
    </div>
  );
};