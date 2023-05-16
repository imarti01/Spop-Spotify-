import React, { useContext, useState } from 'react';
import { MusicContext } from '../context/MusicContext/MusicContext';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { addSongPlaylistFetch } from '../api/playlistRequests';

const NowPlaying = () => {
  const { musicState, handleAddSong } = useContext(MusicContext);
  const { currentList, indexPlay, playlist } = musicState;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOnClose = () => setIsModalOpen(false);

  const addSongToPlaylist = async (playlistId) => {
    const res = await addSongPlaylistFetch({
      playlistId,
      songId: currentList[indexPlay]._id,
    });
    if (res.data.ok) {
      handleAddSong(res.data.playlist);
      handleOnClose();
    }
  };

  return (
    <div className='h-screen flex flex-col'>
      <Link to={-1}>
        <FaArrowLeft className='m-10 text-xl mt-16 sm:mt-10 sm:ml-[25%] cursor-pointer' />
      </Link>
      <div className='flex flex-col items-center justify-center sm:h-[60%] sm:w-[100rem]'>
        <p className='text-xl font-bold'>{currentList[indexPlay]?.name}</p>
        <p className='text-gray-400 mt-2'>{currentList[indexPlay]?.artist}</p>
        <div>
          <div className='flex m-4 items-center'>
            <button
              onClick={() => setIsModalOpen(true)}
              className='text-4xl text-teal'
            >
              ...
            </button>
            {isModalOpen && (
              <ul className="absolute bg-gradient-to-b from-zinc-700 to-zinc-900 smborder-b border-newblack border-2  p-6 ">
                <li className="p-2  hover:bg-newgray rounded-md cursor-pointer">Add to...</li>
                {playlist.length > 1 &&
                  playlist.map((playlist) => {
                    return (
                      playlist.title !== 'likedSongs' && (
                        <li
                          key={playlist._id}
                          onClick={() => addSongToPlaylist(playlist._id)}
                          className="p-2"
                        >
                          {playlist.title}
                        </li >
                      )
                    );
                  })}
              </ul>
            )}
          </div>
          <img
            src={currentList[indexPlay]?.img}
            alt='Album cover'
            className='w-60 sm:w-[120%] sm:h-[120%] rounded'
          />
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
