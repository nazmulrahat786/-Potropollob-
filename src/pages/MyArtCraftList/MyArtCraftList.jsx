import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyArtCraftItem from "../MyArtCraftItem/MyArtCraftItem";

const MyArtCraftList = () => {
    const { user } = useContext(AuthContext);
    const [myItems, setMyItems] = useState([]);
    const [originalItems, setOriginalItems] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://potropollob-server-side.vercel.app/myplants/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyItems(data);
                    setOriginalItems(data);
                    console.log(data);
                })
        }
    }, [user]);

    return (
        <div>
            <div className="py-10">
                <div className="flex justify-center mb-12">
                   <h1 className="text-5xl font-bold">My Plants</h1>
                </div>

                {myItems.length === 0 ? (
                    <div className="text-center text-lg font-semibold text-gray-600">
                        No plants found in your collection. Here are some recommendations for you!
                    </div>
                ) : (
                    <div className="space-y-4">
                        {myItems.map(item => (
                            <MyArtCraftItem
                                key={item._id}
                                item={item}
                                myItems={myItems}
                                setMyItems={setMyItems}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyArtCraftList;
