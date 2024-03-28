import { AiOutlineEye } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { PlayerData } from "../lib/PlayerData";
import react from "../assets/react.svg";
const PlayersWatching = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <h3 className="">7 Players</h3>
        <div className="flex items-center">
          <h3 className="">102 Watching</h3> <AiOutlineEye className="" />{" "}
        </div>
      </div>
      <div className="">
        {PlayerData?.map((value, index) => (
          <div className="flex items-center" key={index}>
            <div className="flex items-center justify-between">
              <img src={react || value.image} alt="" />
              <div className="">
                <h3 className=""> {value.name} </h3>
                <p className="">{value.points}</p>
              </div>
              <div className="">
                <h3 className="">{value.percent}%</h3>
                <div className="">
                  <p className="">{value.amount}</p>
                  <span className="">
                    <FaEthereum className="" />{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersWatching;
