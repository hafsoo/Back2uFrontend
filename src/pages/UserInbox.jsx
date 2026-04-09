import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import axios from "axios";
import { format } from "timeago.js/dist/timeago.min.js";
//import Header from "../components/Layout/Header";
import { server } from "../server";
import { AiOutlineSend } from "react-icons/ai";
import { TfiGallery } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";


//const ENDPOINT = "http://localhost:4000";
const ENDPOINT = "https://back2usocket.onrender.com/";//deploy on render

const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=Syne:wght@700;800&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body { background: #080b12; }

.b2u-app {
  font-family: 'DM Sans', sans-serif;
  display: flex;
  height: 100vh;
  width: 100%;
  background: #080b12;
  overflow: hidden;
}

/* ══ SIDEBAR ══ */
.b2u-sidebar {
  width: 290px;
  flex-shrink: 0;
  background: #0d1120;
  border-right: 1px solid #1a2036;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.b2u-sidebar-top {
  padding: 20px 16px 14px;
  border-bottom: 1px solid #1a2036;
}

.b2u-logo {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 16px;
}

.b2u-logo-icon {
  width: 32px; height: 32px;
  background: linear-gradient(135deg, #4ade80, #16a34a);
  border-radius: 9px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

.b2u-logo-text {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 18px;
  color: #fff;
  letter-spacing: -0.3px;
}
.b2u-logo-text span { color: #4ade80; }

.b2u-search {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #141927;
  border: 1px solid #1e2a40;
  border-radius: 12px;
  padding: 9px 13px;
}

.b2u-search input {
  background: none; border: none; outline: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px; color: #8891a8; width: 100%;
}
.b2u-search input::placeholder { color: #2a3350; }

.b2u-section-lbl {
  font-size: 10px; font-weight: 600;
  letter-spacing: 1.5px; color: #2a3350;
  text-transform: uppercase;
  padding: 14px 16px 8px;
}

.b2u-convo-list {
  flex: 1;
  overflow-y: auto;
  padding: 4px 8px;
  scrollbar-width: thin;
  scrollbar-color: #1a2036 transparent;
}
.b2u-convo-list::-webkit-scrollbar { width: 3px; }
.b2u-convo-list::-webkit-scrollbar-thumb { background: #1e2a40; border-radius: 4px; }

.b2u-convo-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 10px;
  border-radius: 14px;
  cursor: pointer;
  transition: background 0.15s;
  position: relative;
}
.b2u-convo-item:hover   { background: #141927; }
.b2u-convo-item.active  { background: #162030; }

.b2u-av-wrap { position: relative; flex-shrink: 0; }

/* gradient initials avatar */
.b2u-av-initials {
  width: 42px; height: 42px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 600; color: #fff;
  flex-shrink: 0;
}

.b2u-av-img {
  width: 42px; height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #1e2a40;
  display: block;
}

.b2u-dot {
  position: absolute;
  bottom: 1px; right: 1px;
  width: 10px; height: 10px;
  border-radius: 50%;
  border: 2px solid #0d1120;
}
.b2u-dot.on  { background: #4ade80; }
.b2u-dot.off { background: #1e2a40; }

/* active chat uses different border color */
.b2u-convo-item.active .b2u-dot { border-color: #162030; }

.b2u-convo-info { flex: 1; min-width: 0; }

.b2u-convo-name {
  font-size: 13.5px; font-weight: 500; color: #e2e8f0;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

.b2u-convo-preview {
  font-size: 12px; color: #2a3350; margin-top: 2px;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}

.b2u-convo-meta {
  display: flex; flex-direction: column; align-items: flex-end; gap: 4px;
}

.b2u-convo-time { font-size: 11px; color: #2a3350; white-space: nowrap; }

.b2u-badge {
  background: #4ade80; color: #031a0a;
  font-size: 10px; font-weight: 700;
  border-radius: 20px; padding: 2px 7px;
  min-width: 18px; text-align: center;
}

/* ══ CHAT PANEL ══ */
.b2u-chat-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #0a0d14;
  height: 100vh;
  overflow: hidden;
}

.b2u-empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2a3350;
  gap: 12px;
}

.b2u-empty-icon {
  width: 64px; height: 64px;
  background: #0d1120;
  border: 1px solid #1a2036;
  border-radius: 20px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 4px;
}

.b2u-empty-title { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700; color: #1e2a40; }
.b2u-empty-sub   { font-size: 13px; color: #1a2036; }

/* Chat header */
.b2u-chat-hdr {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 24px;
  background: #0d1120;
  border-bottom: 1px solid #1a2036;
  flex-shrink: 0;
}

.b2u-chat-hdr-left { display: flex; align-items: center; gap: 13px; }

.b2u-chat-av-img {
  width: 42px; height: 42px;
  border-radius: 50%; object-fit: cover;
  border: 2px solid #1e2a40;
}

.b2u-chat-name {
  font-family: 'Syne', sans-serif;
  font-weight: 700; font-size: 16px; color: #f0f4ff;
}

.b2u-status-on {
  font-size: 12px; color: #4ade80; margin-top: 1px;
  display: flex; align-items: center; gap: 5px;
}
.b2u-status-on::before {
  content: '';
  width: 6px; height: 6px; border-radius: 50%;
  background: #4ade80;
  animation: b2u-pulse 2s infinite;
}

@keyframes b2u-pulse {
  0%,100% { opacity: 1; }
  50%      { opacity: 0.3; }
}

.b2u-status-off { font-size: 12px; color: #2a3350; margin-top: 1px; }

.b2u-hdr-actions { display: flex; gap: 8px; }

.b2u-icon-btn {
  width: 36px; height: 36px;
  border-radius: 10px;
  background: #141927; border: 1px solid #1e2a40;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: #3d4860;
  transition: background 0.15s, color 0.15s;
}
.b2u-icon-btn:hover { background: #1c2640; color: #94a3b8; }

/* Date divider */
.b2u-date-div {
  display: flex; align-items: center; gap: 12px;
  margin: 6px 0;
}
.b2u-date-div::before, .b2u-date-div::after {
  content: '';
  flex: 1; height: 1px; background: #111827;
}
.b2u-date-div span {
  font-size: 11px; color: #2a3350;
  font-weight: 500; white-space: nowrap;
}

/* Messages */
.b2u-msgs {
  flex: 1;
  overflow-y: auto;
  padding: 20px 28px 16px;
  display: flex; flex-direction: column; gap: 14px;
  scrollbar-width: thin; scrollbar-color: #1a2036 transparent;
}
.b2u-msgs::-webkit-scrollbar { width: 3px; }
.b2u-msgs::-webkit-scrollbar-thumb { background: #1e2a40; border-radius: 4px; }

.b2u-msg-row { display: flex; align-items: flex-end; gap: 10px; }
.b2u-msg-row.mine { flex-direction: row-reverse; }

.b2u-msg-av {
  width: 30px; height: 30px;
  border-radius: 50%; object-fit: cover;
  flex-shrink: 0; border: 1px solid #1e2a40;
}

.b2u-msg-col { display: flex; flex-direction: column; max-width: 58%; }
.b2u-msg-row.mine .b2u-msg-col { align-items: flex-end; }

.b2u-bubble {
  padding: 10px 16px; border-radius: 18px;
  font-size: 14px; line-height: 1.55; word-break: break-word;
}
.b2u-bubble.theirs {
  background: #141927; border: 1px solid #1e2a40;
  color: #cbd5e1; border-bottom-left-radius: 4px;
}
.b2u-bubble.mine {
  background: linear-gradient(135deg, #166534, #15803d);
  color: #dcfce7; border-bottom-right-radius: 4px;
}

.b2u-msg-img {
  border-radius: 16px; margin-bottom: 6px;
  max-width: 100%; height: auto;
  border: 1px solid #1e2a40; display: block;
}

.b2u-msg-time { font-size: 10px; color: #1e2a40; margin-top: 5px; padding: 0 2px; }
.b2u-msg-row.mine .b2u-msg-time { text-align: right; }

/* Input */
.b2u-input-area {
  padding: 14px 24px;
  background: #0d1120;
  border-top: 1px solid #1a2036;
  flex-shrink: 0;
}

.b2u-input-bar {
  display: flex; align-items: center; gap: 10px;
  background: #141927; border: 1px solid #1e2a40;
  border-radius: 16px; padding: 8px 8px 8px 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.b2u-input-bar:focus-within {
  border-color: #16a34a;
  box-shadow: 0 0 0 3px rgba(22,163,74,0.1);
}

.b2u-attach-lbl {
  cursor: pointer; color: #2a3350;
  display: flex; align-items: center;
  padding: 7px; border-radius: 10px;
  transition: background 0.15s, color 0.15s; flex-shrink: 0;
}
.b2u-attach-lbl:hover { background: #1c2640; color: #94a3b8; }

.b2u-text-input {
  flex: 1; background: none; border: none; outline: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px; color: #e2e8f0; min-width: 0;
}
.b2u-text-input::placeholder { color: #2a3350; }

.b2u-send-btn {
  width: 38px; height: 38px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  border: none; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; flex-shrink: 0; color: #fff;
  transition: opacity 0.15s, transform 0.1s;
}
.b2u-send-btn:hover  { opacity: 0.85; transform: scale(1.05); }
.b2u-send-btn:active { transform: scale(0.96); }
.b2u-send-btn:disabled { opacity: 0.3; cursor: not-allowed; transform: none; }

/* Mobile: hide sidebar when chat open */
@media (max-width: 639px) {
  .b2u-sidebar           { width: 100%; position: absolute; z-index: 10; }
  .b2u-sidebar.hidden    { display: none; }
  .b2u-chat-panel.hidden { display: none; }
}
`;

/* helper: generate a gradient colour from name initials */
const avatarColors = [
  "linear-gradient(135deg,#3b82f6,#1d4ed8)",
  "linear-gradient(135deg,#a855f7,#7c3aed)",
  "linear-gradient(135deg,#22c55e,#16a34a)",
  "linear-gradient(135deg,#f59e0b,#d97706)",
  "linear-gradient(135deg,#ef4444,#b91c1c)",
  "linear-gradient(135deg,#06b6d4,#0e7490)",
];

const getAvatarColor = (name = "") => {
  let hash = 0;
  for (let i = 0; i < name.length; i++)
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return avatarColors[Math.abs(hash) % avatarColors.length];
};

const getInitials = (name = "") =>
  name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const UserInbox = () => {
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedChatUserId = params.get("chat");

  const { user } = useSelector((state) => state.user);
  const socketRef = useRef(null);
  const scrollRef = useRef(null);

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [images, setImages] = useState(null);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [activeStatus, setActiveStatus] = useState(false);
  // Search input state (what user types)
  const [search, setSearch] = useState("");
  // ⏳ Debounce state (FIXED)
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // ⏳ Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  // 🔎 Filter conversations based on search
  const filteredConversations = conversations.filter((c) => {
    // Get the other user (not logged-in user)
    const otherUser = c.members.find((m) => m._id !== user._id);

    // Safety check
    if (!otherUser) return false;

    // Convert everything to lowercase (case-insensitive search)
    const searchText = debouncedSearch.toLowerCase();

    // ✅ Match by user name
    const nameMatch = otherUser.name?.toLowerCase().includes(searchText);

    // ✅ Match by last message (optional)
    const messageMatch = c.lastMessage?.toLowerCase().includes(searchText);

    // Return true if any match
    return nameMatch || messageMatch;
  });

  useEffect(() => {
    if (conversations.length && selectedChatUserId) {
      const matchedConversation = conversations.find((c) =>
        c.members.some((m) => m._id === selectedChatUserId),
      );
      if (matchedConversation) {
        setCurrentChat(matchedConversation);
        const otherUser = matchedConversation.members.find(
          (m) => m._id !== user._id,
        );
        setUserData(otherUser);
        setActiveStatus(isOnline(matchedConversation));
        setOpen(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversations, selectedChatUserId]);

  useEffect(() => {
    if (!user?._id) return;
    socketRef.current = io(ENDPOINT, { transports: ["websocket"] });
    socketRef.current.emit("addUser", user._id);
    socketRef.current.on("getUsers", (users) => setOnlineUsers(users));
    socketRef.current.on("getMessage", (data) => {
      if (data.conversationId === currentChat?._id) {
        setMessages((prev) => [
          ...prev,
          {
            sender: data.senderId,
            text: data.text,
            images: data.images || null,
            createdAt: data.createdAt || Date.now(),
          },
        ]);
      }
    });
    return () => socketRef.current.disconnect();
  }, [user, currentChat]);

  useEffect(() => {
    if (!user?._id) return;
    axios
      .get(`${server}/conversation/user/${user._id}`, { withCredentials: true })
      .then((res) => setConversations(res.data.conversations))
      .catch((err) => console.log(err));
  }, [user]);

  useEffect(() => {
    if (!currentChat?._id) return;
    axios
      .get(`${server}/message/${currentChat._id}`, { withCredentials: true })
      .then((res) => {
        setMessages(res.data.messages);
        setConversations((prev) =>
          prev.map((c) =>
            c._id === currentChat._id ? { ...c, unreadCount: 0 } : c,
          ),
        );
      })
      .catch((err) => console.log(err));
  }, [currentChat]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    if (!newMessage && !images) return;
    const receiver = currentChat.members.find(
      (m) => m?._id && m._id !== user._id,
    );
    if (!receiver?._id) return;
    const receiverId = receiver._id;
    const res = await axios.post(
      `${server}/message/create`,
      { conversationId: currentChat._id, text: newMessage, images },
      { withCredentials: true },
    );
    const savedMessage = res.data.message;
    socketRef.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: savedMessage.text,
      images: savedMessage.images,
      conversationId: currentChat._id,
      createdAt: savedMessage.createdAt,
    });
    setMessages((prev) => [...prev, savedMessage]);
    setNewMessage("");
    setImages(null);
  };

  const handleImageUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => reader.readyState === 2 && setImages(reader.result);
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const isOnline = (chat) => {
    if (!chat?.members) return false;
    const other = chat.members.find((m) => m?._id && m._id !== user._id);
    if (!other?._id) return false;
    return onlineUsers.some(
      (u) => u?.userId?.toString() === other._id?.toString(),
    );
  };

  const isSender = (senderId) => senderId?.toString() === user._id?.toString();

  const openChat = (c) => {
    const otherUser = c.members.find((m) => m?._id && m._id !== user._id);
    if (!otherUser) return;
    setCurrentChat(c);
    setUserData(otherUser);
    setActiveStatus(isOnline(c));
    setOpen(true);
  };

  return (
    <>
      <style>{css}</style>

      <div className="b2u-app">
        {/* ══ SIDEBAR ══ */}
        <div
          className={`b2u-sidebar${open ? " hidden sm-visible" : ""}`}
          style={open ? { display: "none" } : {}}
        >
          {/* show sidebar always on desktop, hide on mobile when chat open */}
          <style>{`@media(min-width:640px){.b2u-sidebar{display:flex!important;}}`}</style>

          <div className="b2u-sidebar-top">
            <div className="b2u-logo">
              <img
                src="/images/radar.png"
                alt="logo"
                style={{ width: 50, height: 45 }}
              />
              <Link to={"/"}>
                <span className="b2u-logo-text">
                  Back<span>2U</span> Chat
                </span>
              </Link>
            </div>

            <div className="b2u-search">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle
                  cx="11"
                  cy="11"
                  r="8"
                  stroke="#2a3350"
                  strokeWidth="2"
                />
                <path d="m21 21-4.35-4.35" stroke="#2a3350" strokeWidth="2" />
              </svg>
              <input
                placeholder="Search conversations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <p className="b2u-section-lbl">Messages</p>

          <div className="b2u-convo-list">
            {/* ❌ No Results */}
            {debouncedSearch && filteredConversations.length === 0 && (
              <p style={{ color: "#2a3350", padding: "10px" }}>
                No conversations found
              </p>
            )}

            {/* ✅ Filtered Conversations */}
            {filteredConversations.map((c) => {
              const otherUser = c.members.find((m) => m._id !== user._id);
              if (!otherUser) return null;

              const isActive = currentChat?._id === c._id;
              const hasAvatar = !!otherUser?.avatar?.url;

              return (
                <div
                  key={c._id}
                  className={`b2u-convo-item${isActive ? " active" : ""}`}
                  onClick={() => openChat(c)}
                >
                  <div className="b2u-av-wrap">
                    {hasAvatar ? (
                      <img
                        src={otherUser.avatar.url}
                        className="b2u-av-img"
                        alt=""
                      />
                    ) : (
                      <div
                        className="b2u-av-initials"
                        style={{ background: getAvatarColor(otherUser.name) }}
                      >
                        {getInitials(otherUser.name)}
                      </div>
                    )}
                    <span className={`b2u-dot ${isOnline(c) ? "on" : "off"}`} />
                  </div>

                  <div className="b2u-convo-info">
                    <p className="b2u-convo-name">{otherUser?.name}</p>
                    <p className="b2u-convo-preview">
                      {c.lastMessage || "No messages yet"}
                    </p>
                  </div>

                  <div className="b2u-convo-meta">
                    <span className="b2u-convo-time">
                      {format(c.updatedAt)}
                    </span>
                    {c.unreadCount > 0 && (
                      <span className="b2u-badge">{c.unreadCount}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══ CHAT PANEL ══ */}
        <div className="b2u-chat-panel">
          {!currentChat ? (
            <div className="b2u-empty-state">
              <div className="b2u-empty-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                    stroke="#2a3350"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="b2u-empty-title">No conversation selected</p>
              <p className="b2u-empty-sub">
                Pick one from the left to start chatting
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="b2u-chat-hdr">
                <div className="b2u-chat-hdr-left">
                  <div className="b2u-av-wrap">
                    {userData?.avatar?.url ? (
                      <img
                        src={userData.avatar.url}
                        className="b2u-chat-av-img"
                        alt=""
                      />
                    ) : (
                      <div
                        className="b2u-av-initials"
                        style={{
                          background: getAvatarColor(userData?.name),
                          width: 42,
                          height: 42,
                        }}
                      >
                        {getInitials(userData?.name)}
                      </div>
                    )}
                    <span
                      className={`b2u-dot ${activeStatus ? "on" : "off"}`}
                    />
                  </div>
                  <div>
                    <p className="b2u-chat-name">{userData?.name}</p>
                    {activeStatus ? (
                      <p className="b2u-status-on">Active now</p>
                    ) : (
                      <p className="b2u-status-off">Away</p>
                    )}
                  </div>
                </div>

                <div className="b2u-hdr-actions">
                  <div
                    className="b2u-icon-btn"
                    onClick={() => setCurrentChat(null)}
                  >
                    <X size={20} />
                  </div>
                </div>
              </div>
              {/* Messages */}
              <div className="b2u-msgs">
                {messages.map((item, index) => {
                  const senderIsUser = isSender(item.sender);
                  return (
                    <div
                      key={index}
                      ref={scrollRef}
                      className={`b2u-msg-row${senderIsUser ? " mine" : ""}`}
                    >
                      {!senderIsUser && userData?.avatar?.url && (
                        <img
                          src={userData.avatar.url}
                          className="b2u-msg-av"
                          alt=""
                        />
                      )}
                      {!senderIsUser && !userData?.avatar?.url && (
                        <div
                          className="b2u-av-initials"
                          style={{
                            background: getAvatarColor(userData?.name),
                            width: 30,
                            height: 30,
                            fontSize: 11,
                            flexShrink: 0,
                          }}
                        >
                          {getInitials(userData?.name)}
                        </div>
                      )}

                      <div className="b2u-msg-col">
                        {item.images && (
                          <img
                            src={
                              typeof item.images === "string"
                                ? item.images
                                : item.images.url
                            }
                            className="b2u-msg-img"
                            alt=""
                          />
                        )}
                        {item.text && (
                          <div
                            className={`b2u-bubble ${senderIsUser ? "mine" : "theirs"}`}
                          >
                            {item.text}
                          </div>
                        )}
                        <p className="b2u-msg-time">{format(item.createdAt)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Input */}
              <form onSubmit={sendMessageHandler} className="b2u-input-area">
                <div className="b2u-input-bar">
                  <input
                    type="file"
                    hidden
                    id="b2u-img"
                    onChange={handleImageUpload}
                  />
                  <label htmlFor="b2u-img" className="b2u-attach-lbl">
                    <TfiGallery size={18} />
                  </label>
                  <input
                    type="text"
                    className="b2u-text-input"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                  />
                  <button
                    type="submit"
                    className="b2u-send-btn"
                    disabled={!newMessage && !images}
                  >
                    <AiOutlineSend size={17} />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserInbox;

/*
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import axios from "axios";
import { format } from "timeago.js/dist/timeago.min.js";
import Header from "../components/Layout/Header";
import { server } from "../server";
import { AiOutlineSend, AiOutlineArrowLeft } from "react-icons/ai";
import { TfiGallery } from "react-icons/tfi";
import { useLocation } from "react-router-dom";

const ENDPOINT = "https://back2usocket.onrender.com/";//deploy on render
//const ENDPOINT = "http://localhost:4000";
const UserInbox = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedChatUserId = params.get("chat");

  const { user } = useSelector((state) => state.user);

  const socketRef = useRef(null);
  const scrollRef = useRef(null);

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [images, setImages] = useState(null);

  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [activeStatus, setActiveStatus] = useState(false);

  
  useEffect(() => {
    if (conversations.length && selectedChatUserId) {
      const matchedConversation = conversations.find((c) =>
        c.members.some((m) => m._id === selectedChatUserId),
      );

      if (matchedConversation) {
        setCurrentChat(matchedConversation);
        const otherUser = matchedConversation.members.find(
          (m) => m._id !== user._id,
        );

        setUserData(otherUser);
        setActiveStatus(isOnline(matchedConversation));
        setOpen(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversations, selectedChatUserId]);
  

  
  useEffect(() => {
    if (!user?._id) return;

    socketRef.current = io(ENDPOINT, { transports: ["websocket"] });
    socketRef.current.emit("addUser", user._id);

    socketRef.current.on("getUsers", (users) => setOnlineUsers(users));

    socketRef.current.on("getMessage", (data) => {
      if (data.conversationId === currentChat?._id) {
        setMessages((prev) => [
          ...prev,
          {
           sender: data.senderId,
            text: data.text,
            images: data.images || null,
            createdAt: data.createdAt || Date.now(),
          
          },
        ]);
      }
    });

    return () => socketRef.current.disconnect();
  }, [user, currentChat]);

 
  useEffect(() => {
    if (!user?._id) return;

    axios
      .get(`${server}/conversation/user/${user._id}`, {
        withCredentials: true,
      })
      .then((res) => setConversations(res.data.conversations))
      .catch((err) => console.log(err));
  }, [user]);


  useEffect(() => {
    if (!currentChat?._id) return;

    axios
      .get(`${server}/message/${currentChat._id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setMessages(res.data.messages);

        // ✅ Update unread count in frontend
        setConversations((prev) =>
          prev.map((c) =>
            c._id === currentChat._id ? { ...c, unreadCount: 0 } : c,
          ),
        );
      })

      .catch((err) => console.log(err));
  }, [currentChat]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    if (!newMessage && !images) return;

    const receiver = currentChat.members.find(
      (m) => m?._id && m._id !== user._id,
    );

    if (!receiver?._id) return;

    const receiverId = receiver._id;

    //    socketRef.current.emit("sendMessage", {
    //    senderId: user._id,
    //  receiverId,
    //text: newMessage,
    //images,
    //conversationId: currentChat._id,
    //});
    // 1️⃣ First save message to database
    const res = await axios.post(
      `${server}/message/create`,
      {
        conversationId: currentChat._id,
        text: newMessage,
        images,
      },
      { withCredentials: true },
    );
    const savedMessage = res.data.message;

    // 2️⃣ Then emit saved message (with Cloudinary URL)
    socketRef.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: savedMessage.text,
      images: savedMessage.images, // 🔥 Now sending cloudinary object
      conversationId: currentChat._id,
      createdAt: savedMessage.createdAt,
    });
    // 3️⃣ Update local messages
    setMessages((prev) => [...prev, savedMessage]);
    // setMessages((prev) => [...prev, res.data.message]);
    setNewMessage("");
    setImages(null);
  };

  const handleImageUpload = (e) => {
    const reader = new FileReader();
    reader.onload = () => reader.readyState === 2 && setImages(reader.result);
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const isOnline = (chat) => {
    if (!chat?.members) return false;

    const other = chat.members.find((m) => m?._id && m._id !== user._id);
    if (!other?._id) return false;

    return onlineUsers.some(
      (u) => u?.userId?.toString() === other._id?.toString(),
    );
  };

  const isSender = (senderId) => senderId?.toString() === user._id?.toString();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {!open && (
        <>
          <Header />
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8">
              All Messages
            </h1>

            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md sm:shadow-lg border border-gray-100 divide-y divide-gray-100 overflow-hidden">
              {conversations.map((c) => {
                const otherUser = c.members.find(
                  (m) => m?._id && m._id !== user._id,
                );
                if (!otherUser) return null;

                return (
                  <div
                    key={c._id}
                    className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 hover:bg-gray-50 transition cursor-pointer"
                    onClick={() => {
                      setCurrentChat(c);
                      setUserData(otherUser);
                      setActiveStatus(isOnline(c));
                      setOpen(true);
                    }}
                  >
                    <div className="relative">
                      <img
                        src={otherUser?.avatar?.url}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-white shadow"
                        alt=""
                      />
                      <span
                        className={`absolute bottom-1 right-1 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full ring-2 ring-white ${
                          isOnline(c) ? "bg-emerald-500" : "bg-gray-300"
                        }`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h2 className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                        {otherUser?.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-500 truncate">
                        {c.lastMessage || "No messages yet"}
                      </p>
                    </div>

                    
                    <div className="flex items-center gap-2 mt-1 sm:mt-0">
                      {c.unreadCount > 0 && (
                        <span className="bg-green-500 text-white text-[10px] px-2 py-[2px] rounded-full">
                          {c.unreadCount}
                        </span>
                      )}
                      <span className="text-xs text-gray-400">
                        {format(c.updatedAt)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}

      {open && (
        <div className="flex flex-col h-screen sm:min-h-screen w-full max-w-5xl mx-auto bg-white sm:shadow-2xl sm:rounded-3xl sm:my-6 sm:border border-gray-100 overflow-hidden">
          
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 bg-white">
            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src={userData?.avatar?.url}
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-gray-100 shadow-sm"
                alt=""
              />
              <div>
                <h1 className="text-sm sm:text-lg font-semibold text-gray-900">
                  {userData?.name}
                </h1>
                <p className="text-[11px] sm:text-xs text-gray-500">
                  {activeStatus ? "Active Now" : "Offline"}
                </p>
              </div>
            </div>

            <AiOutlineArrowLeft
              size={20}
              className="cursor-pointer text-gray-500 hover:text-gray-800 transition"
              onClick={() => setOpen(false)}
            />
          </div>

          
          <div
            className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 sm:py-6 bg-gradient-to-b from-gray-50 to-white space-y-3 sm:space-y-4"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {messages.map((item, index) => {
              const senderIsUser = isSender(item.sender);
              const otherUserAvatar = !senderIsUser
                ? userData?.avatar?.url
                : null;

              return (
                <div
                  key={index}
                  ref={scrollRef}
                  className={`flex items-end gap-2 sm:gap-3 ${
                    senderIsUser ? "justify-end" : "justify-start"
                  }`}
                >
                  {!senderIsUser && (
                    <img
                      src={otherUserAvatar}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover shadow"
                      alt=""
                    />
                  )}

                  <div className="max-w-[75%] sm:max-w-xs md:max-w-md">
                    {item.images && (
                      <img
                        src={
                          typeof item.images === "string"
                            ? item.images
                            : item.images.url
                        }
                        className="rounded-2xl mb-2 shadow-md max-w-full h-auto"
                        alt=""
                      />
                    )}



                    {item.text && (
                      <div
                        className={`px-4 py-2 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                          senderIsUser
                            ? "bg-blue-600 text-white rounded-br-md"
                            : "bg-gray-100 text-gray-800 rounded-bl-md"
                        }`}
                      >
                        {item.text}
                      </div>
                    )}

                    <p className="text-[10px] sm:text-[11px] text-gray-400 mt-1 px-1">
                      {format(item.createdAt)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          
          <form
            onSubmit={sendMessageHandler}
            className="px-3 sm:px-6 py-3 sm:py-4 border-t border-gray-100 bg-white flex items-center gap-2 sm:gap-3"
          >
            <input type="file" hidden id="img" onChange={handleImageUpload} />

            <label
              htmlFor="img"
              className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer text-gray-500 hover:text-gray-800"
            >
              <TfiGallery size={20} />
            </label>

            <input
              type="text"
              className="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus:bg-white focus:border-blue-500 focus:ring-2 sm:focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
            />

            <button
              type="submit"
              className="p-2 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition disabled:opacity-50"
            >
              <AiOutlineSend size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserInbox;
*/


