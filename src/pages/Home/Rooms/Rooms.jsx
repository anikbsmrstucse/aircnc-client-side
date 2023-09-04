import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Heading from "../../../Components/Heading/Heading";
import Loader from "../../../Components/Loader/Loader";
import Container from "../../../Components/Shared/Container";
import Card from "./Card";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log(category);

  useEffect(() => {
    setLoading(true);
    fetch("https://aircnc-task.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => {
        if(category){
            const filterRoom = data.filter(room => room.category === category);
            setRooms(filterRoom);
        }
        else{
            setRooms(data);
        }
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <Container>
      {rooms && rooms.length != 0 ? <div className="pt-12 grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {rooms.map((room, index) => (
          <Card room={room} key={index}></Card>
        ))}
      </div> : <div className="pt-12">
        <Heading 
        title="No Rooms Available in this category"
        subtitle="Please select others categorey"
        center={true}
        />
      </div> }
    </Container>
  );
};

export default Rooms;
