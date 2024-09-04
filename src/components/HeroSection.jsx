import React from 'react';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white">
       <h1 className="text-5xl font-bold mb-4" style={{ position: 'relative', top: '-20px' }}>
  Let Your <span style={{ color: 'aqua' }}>Feelings</span> Choose Your Next <span style={{ color: 'aqua' }}>Adventure!</span>
</h1>




<p className="text-xl mb-8" style={{ color: 'white', fontWeight: 'bold', top: '-5px' }}>
  Find our awesome tour packages based on your mood!
</p>


      <div className="relative mb-8">
        <input type="text" placeholder="How are you feeling today..." className="px-4 py-2 rounded-full w-80 text-gray-700" />
        <i className="fas fa-search absolute top-3 right-4 text-gray-500"></i>
      </div>
      <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg flex space-x-4">
        <input type="text" placeholder="Destination" className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700" />
        <select className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700">
       
  <option disabled selected>Mood</option>
  <option value="1">Adventurous</option>
  <option value="s2">Religious</option>
  <option value="3">Solace</option>
  <option value="4">Relaxed</option>
  <option value="5">Romantic</option>


        </select>
        <input type="date" className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700" />
        <select className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700">
        <option disabled selected>Company</option>
  <option value="1">Family</option>
  <option value="2">Friends</option>
  <option value="3">Solo</option>
  

        </select>
        <input type="number" placeholder="Budget (in Rupees)" className="px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700" min={1000}/>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">Search</button>
      </div>
    </div>
  );
}

export default HeroSection;
