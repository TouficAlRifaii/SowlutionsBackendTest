import React, { useState } from "react";
import "../styles/style.css";
import "../styles/materialize.css";
import axios from "axios";
const Chats = ({ room, logout, chat }) => {
  // let rooms = [];
  const [rooms , setUsers] = useState([])
  const baseURL = "http://127.0.0.1:8000/";
  axios.get(baseURL + "room").then((response) => {
    if (response.data["message"] === "success") {
      setUsers(response.data["rooms"]);
    }
  });

  return (
    <div className="section" style={{ height: "80vh" }}>
      <div className="row">
        <div className="col s3">
          <div className="card">
            <div className="collection">
              {rooms.map((room) => (
                <a
                  href={`/chat/${room.id}`}
                  id={`room${room.id}`}
                  key={room.id}
                  className="collection-item row"
                >
                  <img
                    src="https://frontend-1.adjust.com/new-assets/images/site-images/interface/room.svg"
                    className="col s4"
                  />
                  <div className="col s8">
                    <span className="title" style={{ fontWeight: "bolder" }}>
                      {room.title}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="col s9">
          <div className="card">
            <div
              id="board"
              className="section grey lighten-3"
              style={{ height: "68vh", padding: "5px", overflowY: "scroll" }}
            >
              {chat}
            </div>
            <form
              id="chat-box"
              className="form-group"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="row">
                <div className="col s11">
                  <div className="input-field">
                    <input
                      id="id_message"
                      name="message"
                      type="text"
                      placeholder="Type your message.."
                    />
                  </div>
                </div>
                <div className="col s1" style={{ lineHeight: "80px" }}>
                  <button
                    className="btn btn-floating blue lighten-2 waves-effect waves-light"
                    type="submit"
                  >
                    <i className="material-icons">send</i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
