

function Locations(){
    const LocationInfo = [
        {city : "Prayagraj", address : "Civil Lines , Prayagraj" , pinCode: '211001' , LocationPhoto : "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80&auto=format&fit=crop", mapLocation:`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1097577430596!2d81.76768547551633!3d25.43459382204404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985338aaf55f283%3A0xc01cd07bd1676a6a!2sLM%20ADVERTISING!5e0!3m2!1sen!2sin!4v1777577682869!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`},
        {city : "Agra", address : "Civil Lines , Prayagraj" , pinCode: '211002' ,  LocationPhoto : "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80&auto=format&fit=crop"},
        {city : "Kanpur", address : "Civil Lines , Prayagraj" , pinCode: '211003' ,  LocationPhoto : "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80&auto=format&fit=crop"}
    ]

    return(
        <div className="w-full px-4 sm:px-0">
  <h1 className="text-center mt-10 pt-10 text-3xl sm:text-4xl mb-8">
    Our Locations
  </h1>
  {LocationInfo.map((data, index) => (
    <div
      className="flex justify-center mb-6 animate-fade-up"
      key={data.pinCode}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-full sm:w-[80%] flex flex-col sm:flex-row bg-white items-center rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
        {/* Image container */}
        <div className="w-full sm:w-1/3 p-2">
          <img
            src={data.LocationPhoto}
            alt={data.city}
            className="w-full h-48 sm:h-full object-cover rounded-2xl"
          />
        </div>
        {/* Text content */}
        <div className="p-4 sm:p-6 text-center sm:text-left">
          <h2 className="text-xl text-black font-semibold">{data.city}</h2>
          <p className="text-xs text-gray-600 mt-1">
            Address: {data.address}, {data.pinCode}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
    )
}

export default Locations;