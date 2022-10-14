import { useState } from "react";
import { useEffect } from "react"


function App() {

    const [tracks, setTracks] = useState([])

    useEffect(() => {
        const fetchTracks = async () => {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'a89d6d92d8msh3fa6d52dcda165cp116779jsn0787e100410c',
                    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
                }
            };

            const res = await fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=NG', options)
            const json = await res.json()
            const data = json.slice(0, 20)
            if (!res.ok) {
                console.log("Error fetching data")
            }
            if (res.ok) {
                setTracks(data)
                console.log(tracks)
            }

        }

        fetchTracks()
    }, [])

    return (
        <div className="flex gap-10 p-20 flex-wrap">
            {tra
        tracks.map((item, index) => (
            <div key={index} className="w-40">
                <div className="w-full">
                    <img className="w-full" src={item.trackMetadata.displayImageUri} alt={item.trackMetadata.trackName} />
                </div>
                <p>
                    {item.trackMetadata.trackName}
                </p>

                <div>

                    {item.trackMetadata.artists.map((i, index) => <p className="text-yellow-500" key={index}>{i.name}</p>)}
                </div>
            </div>
            ))
      }
        </div>
    )
}

export default App
